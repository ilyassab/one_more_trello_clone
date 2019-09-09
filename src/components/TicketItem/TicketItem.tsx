import React from 'react';

import {ITicket} from "../../services/TableService";
import './TicketItem.css';
import {Draggable} from "react-beautiful-dnd";
import {store} from "../../store";
import * as actions from "../../actions";
import {IReduxState} from "../../reducers";

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
                        <div
                            className='ticketItem_ticketBlock'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <div className="ticketItem_cross" onClick={this.deleteTicket}/>
                            {ticket.text}
                        </div>
                    )
                }
                }
            </Draggable>
        );
    }

    deleteTicket = () => {
        const {ticket} = this.props;
        const {tables}: IReduxState = store.getState();
        const newTables = [];
        for (let i = 0; i < tables.length; i++) {
            const {tickets, ...rest} = tables[i];
            newTables[i] = {...rest, tickets: [...tickets]};
        }
        const table = newTables.find((element: any) => {
            let item = 0;
            for (let i = 0; i < element.tickets.length; i++) {
                if (element.tickets[i].id === `${ticket.id}`) {
                    item++;
                }
            }
            return item;
        });
        const deleteIndex = table && table.tickets.findIndex((element) => element.id === ticket.id);
        table && deleteIndex && table.tickets.splice(deleteIndex, 1);
        store.dispatch(actions.tablesLoaded(newTables));
    }

}

export default TicketItem;