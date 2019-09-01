import {ITable} from "../services/TableService";

export interface IReduxState {
    tables: [ITable];
    loading: boolean;
}

const initialState = {
    tables: [],
    loading: true,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TABLES_REQUESTED':
            return {
                tables: [],
                loading: true
            };
        case 'TABLES_LOADED':
            return {
                ...state,
                tables: action.payload,
                loading: false,
            };
        case 'TABLES_ADDED':
            return {
                ...state,
                tables: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export {reducer};