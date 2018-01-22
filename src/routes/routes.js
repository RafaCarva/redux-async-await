import React from 'react';
import {Switch,Route} from 'react-router-dom';
//páginas
import App from '../App'

export default props =>(
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);