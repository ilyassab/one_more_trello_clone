import React from 'react';

const {
    Provider: TableServiceProvider,
    Consumer: TableServiceConsumer
    // @ts-ignore
} = React.createContext();

export {
    TableServiceProvider,
    TableServiceConsumer
};