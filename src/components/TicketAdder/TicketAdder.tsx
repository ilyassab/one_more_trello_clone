import React from "react";

import uniqueId from "../../utils/uuid";
import Textarea from 'react-textarea-autosize';
import * as actions from '../../actions'
import {store} from "../../store";
import './TicketAdder.css';

interface IProps {
    tableId: string;
}

interface IState {
    adding: boolean;
    text: string;
}

class TicketAdder extends React.Component<IProps, IState> {

    state = {
        adding: false,
        text: '',
    };

    render() {

        const {adding} = this.state;

        const inputClassName = adding ? 'ticketAdder_wrap' : 'ticketAdder_hidden';
        const adderClassName = adding ? 'ticketAdder_hidden' : 'ticketAdder_item';

        return (
            <React.Fragment>
                <div className={inputClassName}>
                    <Textarea className="ticketAdder_textarea" onChange={this.textAreaChange}
                              placeholder="Введите название карточки" value={this.state.text}/>
                    <button type='submit' className="ticketAdder_button" onClick={this.addTicket}>Добавить карточку
                    </button>
                    <div className='ticketAdder_cross' onClick={this.addCardAction}/>
                </div>
                <div className={adderClassName} onClick={this.addCardAction}>Добавить еще одну карточку</div>
            </React.Fragment>
        );
    }

    addCardAction = () => {
        this.setState(({adding}) => ({
            adding: !adding
        }))
    };

    textAreaChange = (event: any) => {
        this.setState({text: event.currentTarget.value})
    };

    addTicket = () => {
        if (this.state.text !== '') {
            const {tableId} = this.props;
            const {tables}: any = store.getState();
            const newTables = [];
            for (let i = 0; i < tables.length; i++) {
                const {tickets, ...rest} = tables[i];
                newTables[i] = {...rest, tickets: [...tickets]};
            }
            const table = newTables.find(((element: any) => element.id === tableId));
            table.tickets.push({id: `${uniqueId()}`, text: this.state.text});
            store.dispatch(actions.tablesLoaded(newTables));
            this.setState({
                adding: false,
                text: ''
            })
        }
    };

}

export default TicketAdder;