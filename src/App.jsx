import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CustomerLandingPage from './components/LandingPages/CustomerLandingPage';
import SupplierLandingPage from './components/LandingPages/SupplierLandingPage';
import Signup from './components/Signup'
import LoginPage from './components/LandingPages/LoginPage';

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
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;