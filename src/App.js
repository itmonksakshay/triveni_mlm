import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Collections from './components/collections';
import Product from './components/product';
import Cart from './components/cart';
import Index from './components/index';
import NotFound from './components/notfound';
import {headerItems} from './components/actions/headerAction';
export default function App () {

    return(<div className="container-fluid">
              <div className="row min-vh-100">
                <Header />
                   <Switch>
        <Route exact path="/"  component={Index}/>
        <Route exact path="/collections"><Redirect to="/collections/all-products"/></Route>
        <Route path="/collections/:url" component={Collections}/> 
        <Route path="/product" component={Product}/>
        <Route path="/cart" component={Cart} />
        <Route component={NotFound}/>
         </Switch> 
               <Footer />
              </div>
           </div>);
  }
