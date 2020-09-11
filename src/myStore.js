import React ,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Collections from './components/collections';
import Product from './components/product';
import Cart from './components/cart';
import Index from './components/index';
import NotFound from './components/notfound';
export default class Store extends Component {
  render(props){
    const Store = (props) =>(<Switch>
        <Route exact path="/"  component={Index}/>
        <Route path="/collections"component={Collections} />
        <Route path="/collections/:url" component={Collections}/>
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound}/>
  </Switch>
          );
    return(<div className="container-fluid">
              <div className="row min-vh-100">
                <Header />
                  <Switch>
                    <Store/>
                  </Switch>
                <Footer />
              </div>
           </div>);
  }
}
