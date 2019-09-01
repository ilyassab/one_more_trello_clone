import uniqueId from "../utils/uuid";

export interface ITicket {
    id: string;
    text: string;
}

export interface ITable {
    id: string;
    name: string;
    tickets: ITicket[];
}

class TableService {

    data = [
        {id: `${uniqueId()}`, name: 'Prod', tickets: [{id: `${uniqueId()}`, text: 'hello'}, {id: `${uniqueId()}`, text: 'hei'}]},
        {id: `${uniqueId()}`, name: 'Testing', tickets: [{id: `${uniqueId()}`, text: 'qaaa'}, {id: `${uniqueId()}`, text: 'zaaaa'}]},
        {id: `${uniqueId()}`, name: 'Tres', tickets: [{id: `${uniqueId()}`, text: 'qaaa'}, {id: `${uniqueId()}`, text: 'zaaaa'}]},
        {id: `${uniqueId()}`, name: 'Wres', tickets: [{id: `${uniqueId()}`, text: 'qaaa'}, {id: `${uniqueId()}`, text: 'zaaaa'}]},
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