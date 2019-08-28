import React from 'react';

import {ITicket} from "../../services/TableService";
import './TicketItem.css';
import {Draggable} from "react-beautiful-dnd";

interface IProps {
    ticket: ITicket;
    index: number;
}

class TicketItem extends React.Component<IProps, {}> {
    render() {

        const {ticket, index} = this.props;

        return (
            <Draggable draggableId={`${ticket.id}`} index={index}>
                {(provided) => {
                    return (
                        <p
                            className='ticketItem_ticketBlock'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            {ticket.text}
                        </p>
                    )
                }
                }
            </Draggable>
        );
    }
}

export default TicketItem;