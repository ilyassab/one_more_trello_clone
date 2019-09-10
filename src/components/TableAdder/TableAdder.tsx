import React from "react";

import uniqueId from "../../utils/uuid";
import Textarea from 'react-textarea-autosize';
import * as actions from '../../actions'
import {store} from "../../store";
import './TableAdder.css';

interface IState {
    adding: boolean;
    text: string;
}

class TableAdder extends React.Component<{}, IState> {

    state = {
        adding: false,
        text: '',
    };

    render() {

        const {adding} = this.state;

        const inputClassName = adding ? 'tableAdder_wrap' : 'tableAdder_hidden';
        const adderClassName = adding ? 'tableAdder_hidden' : 'tableAdder_item';

        return (
            <div className='tableAdder_column'>
                <div className={inputClassName}>
                    <Textarea className="tableAdder_textarea" onChange={this.textAreaChange}
                              placeholder="Введите название колонки" value={this.state.text}/>
                    <button type='submit' className="tableAdder_button" onClick={this.addTable}>Добавить колонку
                    </button>
                    <div className='tableAdder_cross' onClick={this.addCardAction}/>
                </div>
                <div className={adderClassName} onClick={this.addCardAction}>Добавить еще одну колонку</div>
            </div>
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

    addTable = () => {
        if (this.state.text !== '') {
            const {tables}: any = store.getState();
            const newTables = [];
            for (let i = 0; i < tables.length; i++) {
                const {tickets, ...rest} = tables[i];
                newTables[i] = {...rest, tickets: [...tickets]};
            }
            newTables.push({id: `${uniqueId()}`, name: this.state.text, tickets:[]});
            store.dispatch(actions.itemDeleted(newTables));
            this.setState({
                adding: false,
                text: ''
            })
        }
    };

}

export default TableAdder;