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
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        ref={providedColumn.innerRef}
                                        className='tableItem_column'
                                        {...providedColumn.draggableProps}
                                    >
                                        <div className='tableItem_title' {...providedColumn.dragHandleProps}>
                                            <div className="tableItem_cross" onClick={this.deleteTable}/>
                                            {table.name}
                                        </div>
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className='tableItem_scrollable'
                                        >
                                            <TicketList tickets={table.tickets} snapshot={snapshot}/>
                                            {provided.placeholder}
                                        </div>
                                        <TicketAdder tableId={`${table.id}`}/>
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