import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from "../Pages/MainPage/MainPage";
import './App.css';


class App extends React.Component<any, any>{
  render() {
    return (
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/login/' />
        </Switch>
    );
  }
}

export default App;
