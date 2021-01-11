import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterCardForm from './RegisterCardForm';
import MenuPage from './MenuPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <RegisterCardForm/>
      </Route>
      <Route path="/menu">
        <MenuPage/>
      </Route>
    </Switch>
  </Router>
);

export default App;
