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

const tablesAdded = (newTables: any) => {
    return {
        type: 'TABLES_ADDED',
        payload: newTables
    }
};

export {
    tablesRequested,
    tablesLoaded,
    tablesAdded
};