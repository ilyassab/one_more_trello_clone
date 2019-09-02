import React from "react";
import {connect} from 'react-redux';

import {ITable} from '../../services/TableService';
import TableItem from "../TableItem/TableItem";
import {IReduxState} from "../../reducers";
import {withTableService} from "../wIthTableService/withTableService";
import * as actions from "../../actions";
import compose from '../../utils/compose';
import {store} from "../../store";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import TableAdder from "../TableAdder/TableAdder";

import './TableList.css';

interface IProps {
    tables: ITable[];
    loading: boolean;
    tableService: any;
    tablesLoaded: any;
    tablesRequested: any;
    tablesAdded: any;
    ticketAdded: any;
}

class TableList extends React.Component<IProps, {}> {

    componentDidMount(): void {
        const {tableService, tablesLoaded, tablesRequested} = this.props;
        tablesRequested();
        tableService.getTables()
            .then((data: any) => tablesLoaded(data))
    }

    render() {
        const {tables, loading} = this.props;
        if (loading) {
            return <div>loading spinner...</div>
        }

        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId='allColumns' direction='horizontal' type='column'>
                    {(providedColumn) => {
                        return (
                            <div
                                className='tableList_wrap'
                                ref={providedColumn.innerRef}
                                {...providedColumn.droppableProps}
                            >
                                {
                                    tables.map((table, index) => {
                                        return (
                                                <TableItem table={table} index={index} key={table.id}/>
                                        )
                                    })
                                }
                                {providedColumn.placeholder}
                                <TableAdder />
                            </div>
                        )
                    }
                    }
                </Droppable>
            </DragDropContext>
        );
    }

    onDragEnd = (result: any) => {
        const {destination, source, type} = result;
        const {tables}: any = store.getState();
        const newTables = [];
        for (let i = 0; i < tables.length; i++) {
            const {tickets, ...rest} = tables[i];
            newTables[i] = {...rest, tickets: [...tickets]};
        }
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        if (type === 'ticket') {
            const fromTable: any = newTables.find((element: any) => `${element.id}` === source.droppableId);
            const toTable: any = newTables.find((element: any) => `${element.id}` === destination.droppableId);
            const ticket: any = fromTable && fromTable.tickets.find((element: any, index: any) => index === source.index);
            fromTable && fromTable.tickets.splice(source.index, 1);
            toTable && toTable.tickets.splice(destination.index, 0, ticket);
            this.props.tablesAdded(newTables);
        } else if (type === 'column') {
            const table: any = newTables.find((element: any, index: any) => index === source.index);
            newTables.splice(source.index, 1);
            newTables.splice(destination.index, 0, table);
            this.props.tablesAdded(newTables);
        }
    }
}

const mapStateToProps = ({tables, loading}: IReduxState) => {
    return {tables, loading}
};

const mapDispatchToProps = {
    ...actions
};

export default compose(
    withTableService(),
    connect(mapStateToProps, mapDispatchToProps),
)(TableList);