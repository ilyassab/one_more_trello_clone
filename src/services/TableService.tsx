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
        {id: `${uniqueId()}`, name: 'Dev', tickets: [{id: `${uniqueId()}`, text: 'try to learn Node.js'}, {id: `${uniqueId()}`, text: 'Make some review'}]},
        {id: `${uniqueId()}`, name: 'Testing', tickets: [{id: `${uniqueId()}`, text: 'aaa'}, {id: `${uniqueId()}`, text: 'aa'}]},
        {id: `${uniqueId()}`, name: 'Released', tickets: [{id: `${uniqueId()}`, text: 'first version of TrelloClone'}, {id: `${uniqueId()}`, text: 'aaaaaa'}]},
    ];

    getTables() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1000)
        });
    }
}

export {TableService};