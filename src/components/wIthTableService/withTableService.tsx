import React from 'react';
import { TableServiceConsumer } from '../TableServiceContext/TableServiceContext';

const withTableService = () => (Wrapped: any) => {

    return (props: any) => {
        return (
            <TableServiceConsumer>
                {
                    (tableService: any) => {
                        return (
                            <Wrapped
                                {...props}
                                tableService={tableService}
                            />
                            );
                    }
                }
            </TableServiceConsumer>
        );
    }
};

export { withTableService }