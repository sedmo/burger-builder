import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
        <div >
          <Layout>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" component={Orders}/>         
          <Route path="/checkout" component={Checkout}/>         
          </Layout>
        </div>
    );
  }
}

export default App;
