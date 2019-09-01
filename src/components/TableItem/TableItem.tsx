import React from "react";

import {ITable} from '../../services/TableService';
import TicketList from "../TicketList/TicketList";
import {Droppable, Draggable} from "react-beautiful-dnd";
import './TableItem.css'
import TicketAdder from "../TicketAdder/TicketAdder";

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

                                            <TicketList tickets={table.tickets}/>
                                            {provided.placeholder}
                                            <TicketAdder/>
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
}

export default TableItem;