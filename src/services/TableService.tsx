export interface ITicket {
    id: number;
    text: string;
}

export interface ITable {
    id: number;
    name: string;
    tickets: ITicket[];
}

class TableService {

    data = [
        {id: 'table0', name: 'Prod', tickets: [{id: 'ticket0', text: 'hello'}, {id: 'ticket1', text: 'hei'}]},
        {id: 'table1', name: 'Testing', tickets: [{id: 'ticket2', text: 'qaaa'}, {id: 'ticket3', text: 'zaaaa'}]},
        {id: 'table2', name: 'Tres', tickets: [{id: 'ticket4', text: 'qaaa'}, {id: 'ticket5', text: 'zaaaa'}]},
        {id: 'table3', name: 'Wres', tickets: [{id: 'ticket6', text: 'qaaa'}, {id: 'ticket7', text: 'zaaaa'}]},
    ];

    getTables() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        });
    }
}

export {TableService};