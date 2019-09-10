import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { TableServiceProvider } from './components/TableServiceContext/TableServiceContext';

import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { store } from './store';
import { TableService } from './services/TableService'
import App from './components/App/App';

import 'normalize.css';
import './index.css';

const tableService = new TableService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <TableServiceProvider value={tableService}>
                <Router>
                    <App />
                </Router>
            </TableServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));