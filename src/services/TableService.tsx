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
        {id: `${uniqueId()}`, name: 'Testing', tickets: [{id: `${uniqueId()}`, text: 'ticket 3'}, {id: `${uniqueId()}`, text: 'ticket 4'}]},
        {id: `${uniqueId()}`, name: 'Released', tickets: [{id: `${uniqueId()}`, text: 'first version of TrelloClone'}, {id: `${uniqueId()}`, text: 'ticket 6'}, {id: `${uniqueId()}`, text: 'ticket 7'},]},
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