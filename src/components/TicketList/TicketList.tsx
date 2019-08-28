import React from 'react';

import {ITicket} from "../../services/TableService";
import TicketItem from "../TicketItem/TicketItem";
import './TicketList.css';

interface IProps {
    tickets: ITicket[];
}

class TicketList extends React.Component<IProps, {}> {
    render() {

        const {tickets} = this.props;

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