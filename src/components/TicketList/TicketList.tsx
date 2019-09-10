import React from 'react';

import {ITicket} from "../../services/TableService";
import TicketItem from "../TicketItem/TicketItem";
import './TicketList.css';

interface IProps {
    tickets: ITicket[];
    snapshot: any;
}

class TicketList extends React.Component<IProps, {}> {
    render() {

        const {tickets, snapshot} = this.props;

        if (tickets.length === 0 && !snapshot.isDraggingOver) {
            return <div className='ticketList_zeroItems'>Add a ticket</div>
        }

        return (
            <React.Fragment>
                {
                    tickets.map((ticket, index) => {
                        return (
                            <TicketItem ticket={ticket} index={index} key={ticket.id}/>
                            )
                    })
                }
            </React.Fragment>
        );
    }
}

export default TicketList;