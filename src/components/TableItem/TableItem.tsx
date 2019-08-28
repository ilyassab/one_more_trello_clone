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
                {(provided) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            className='tableItem_column'
                            {...provided.draggableProps}
                        >
                            <div className='tableItem_title' {...provided.dragHandleProps}>
                                {table.name}
                            </div>
                            <Droppable droppableId={`${table.id}`} type='ticket'>
                                {(provided) => {
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <TicketList tickets={table.tickets}/>
                                            {provided.placeholder}
                                        </div>
                                    )
                                }
                                }
                            </Droppable>
                            <TicketAdder />
                        </div>
                    )
                }
                }
            </Draggable>
        );
    }
}

export default TableItem;