import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Order from './components/Order/Order'
import CustomerEdit from './components/Order/CustomerEdit'

function App(props) {
  return (
    <BrowserRouter>
      <NavBar />

      <Route path="/" component={Order} exact={true} />
      <Route path="/customers/:id" component={ CustomerEdit } />
    </BrowserRouter>
  );
}

export default App