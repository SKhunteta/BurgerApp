import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
