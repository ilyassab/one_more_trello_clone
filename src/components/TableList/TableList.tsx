import React from "react";
import {connect} from 'react-redux';

import {ITable} from '../../services/TableService';
import TableItem from "../TableItem/TableItem";
import {IReduxState} from "../../reducers";
import {withTableService} from "../wIthTableService/withTableService";
import * as actions from "../../actions";
import compose from '../../utils/compose';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import './TableList.css';

interface IProps {
    tables: ITable[];
    loading: boolean;
    tableService: any;
    tablesLoaded: any;
    tablesRequested: any;
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
                    {(provided) => {
                        return (
                            <div
                                className='tableList_wrap'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {
                                    tables.map((table, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <TableItem table={table} index={index}/>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    }
                </Droppable>
            </DragDropContext>
        );
    }

    onDragEnd = (result: any) => {
        const {destination, source, type} = result;
        const {tables} = this.props;

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
            const fromTable = tables.find((element: any) => `${element.id}` === source.droppableId);
            const toTable = tables.find((element: any) => `${element.id}` === destination.droppableId);
            const ticket: any = fromTable && fromTable.tickets.find((element, index) => index === source.index);
            fromTable && fromTable.tickets.splice(source.index, 1);
            toTable && toTable.tickets.splice(destination.index, 0, ticket);
        } else if (type === 'column') {
            const table: any = tables.find((element, index) => index === source.index);
            tables.splice(source.index, 1);
            tables.splice(destination.index, 0, table);
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