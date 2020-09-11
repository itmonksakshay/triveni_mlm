import React , {Component} from 'react';
export default class CartWidget extends Component{
render(){
 return(<a href="cart.html" className="header-item">
          <i className="fas fa-shopping-bag mr-2"></i><span id="header-qty" className="mr-3">2</span>
          <i className="fas fa-money-bill-wave mr-2"></i><span id="header-price">$4,000</span>
        </a>
);
}

}

