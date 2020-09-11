import React ,{Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Index from './adminComponents/index';
import Header from './adminComponents/header';
import Footer from './adminComponents/footer';
import Order from './adminComponents/order';
export default class Admin extends Component {
  render(props){   
    return(<><Header />
      <div>
         <ul>
            <li><Link to={`${this.props.match.url}/David`}>David</Link></li>
            <li><Link to={`${this.props.match.url}/Steve`}>Steve</Link></li>
            <li><Link to={`${this.props.match.url}/John`}>John</Link></li>
         </ul>
 <Route path={`${this.props.match.path}/:name`} render= {({props}) =>( <div><h1> {this.props.match.path} </h1></div>)}/>
   

               </div>
              <Index />
    <Footer/></>);
  }
}
