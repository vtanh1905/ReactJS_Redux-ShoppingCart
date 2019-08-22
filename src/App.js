import React, { Component } from 'react'
import Title from './components/Title';
// import List from './components/List';
import ListContainer from './container/ListContainer';
// import Cart from './components/Cart';
import CartContainer from './container/CartContainer';
import Notify from './components/Notify';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ListContainer/>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <CartContainer/>
            <Notify/>
          </div>

        </div>
      </div>
    )
  }
}

export default App


