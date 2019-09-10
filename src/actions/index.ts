const tablesLoaded = (newTables: any) => {
    return {
        type: 'TABLES_LOADED',
        payload: newTables
    };
};

const tablesRequested = () => {
    return {
        type: 'TABLES_REQUESTED'
    };
};

const itemAdded = (newTables: any) => {
    return {
        type: 'ITEM_ADDED',
        payload: newTables
    }
};

const itemDeleted = (newTables: any) => {
    return {
        type: 'ITEM_DELETED',
        payload: newTables
    }
};

export {
    tablesRequested,
    tablesLoaded,
    itemAdded,
    itemDeleted
};