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

export {
    tablesRequested,
    tablesLoaded,
};