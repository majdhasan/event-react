import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CustomerLandingPage from './components/LandingPages/CustomerLandingPage';
import SupplierLandingPage from './components/LandingPages/SupplierLandingPage';

import LoginPage from './components/LandingPages/LoginPage';
import SignupPage from './components/LandingPages/SignupPage';
import Home from './components/AppViews/Home';
import Event from './components/AppViews/Event';
import SearchResults from './components/AppViews/SearchResults';
import NewEvent from './components/AppViews/NewEvent';
import Chat from './components/AppViews/Chat'
import './utils/css/stylish-portfolio.min.css'

function App() {
  return (
    <Switch>
      <Route exact path="/supplier">
        <SupplierLandingPage />
      </Route>
      <Route exact path="/">
        <CustomerLandingPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/event/:eventId" >
        <Event />
      </Route>
      <Route exact path="/results">
        <SearchResults />
      </Route>
      <Route exact path="/new-event">
        <NewEvent />
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
    </Switch>
  );
}

export default App;