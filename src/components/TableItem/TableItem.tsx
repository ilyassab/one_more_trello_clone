import React from "react";

import {ITable} from '../../services/TableService';
import TicketList from "../TicketList/TicketList";
import {Droppable, Draggable} from "react-beautiful-dnd";
import './TableItem.css'
import TicketAdder from "../TicketAdder/TicketAdder";
import {store} from "../../store";
import * as actions from "../../actions";

interface IProps {
    table: ITable;
    index: number;
}

class TableItem extends React.Component<IProps, {}> {
    render() {
        const {table, index} = this.props;
        return (
            <Draggable draggableId={`${table.id}`} index={index}>
                {(providedColumn) => {
                    return (
                        <Droppable droppableId={`${table.id}`} type='ticket'>
                            {(provided) => {
                                return (
                                    <div
                                        ref={providedColumn.innerRef}
                                        className='tableItem_column'
                                        {...providedColumn.draggableProps}
                                    >
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <div className='tableItem_title' {...providedColumn.dragHandleProps}>
                                                {table.name}
                                            </div>
                                            <div className="tableItem_cross" onClick={this.deleteTable}/>
                                            <TicketList tickets={table.tickets}/>
                                            {provided.placeholder}
                                            <TicketAdder tableId={`${table.id}`}/>
                                        </div>
                                    </div>
                                )
                            }}
                        </Droppable>
                    )
                }}
            </Draggable>
        );
    }

    deleteTable = () => {
        const {table} = this.props;
        const {tables}: any = store.getState();
        const newTables = [];
        for (let i = 0; i < tables.length; i++) {
            const {tickets, ...rest} = tables[i];
            newTables[i] = {...rest, tickets: [...tickets]};
        }
        const deleteIndex = newTables.findIndex((element: any) => element.id === table.id);
        newTables.splice(deleteIndex, 1);
        store.dispatch(actions.tablesLoaded(newTables));
    }

}

export default TableItem;