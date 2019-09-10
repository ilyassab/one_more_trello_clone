import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MainPage from "../Pages/MainPage/MainPage";
import './App.css';
import Header from "../Header/Header";


class App extends React.Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path='/' component={MainPage} exact/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
