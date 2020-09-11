import React, { Component } from 'react'
export default class TopNav extends Component {
  render() {
    return ( <div className="col-12 bg-dark py-2 d-md-block d-none">
             	<div className="row">
                	<div className="col-auto mr-auto">
                        	<ul className="top-nav"><li>
           				<a href="tel:+123-456-7890">
	    				<i className="fa fa-phone-square mr-2"></i>+123-456-7890</a>
                                    </li>
                              		<li>
            				<a href="mailto:mail@ecom.com">
	    				<i className="fa fa-envelope mr-2"></i>mail@ecom.com</a>
                                    </li>
                                </ul>    
	    		</div>
                      	<div className="col-auto">
                        	<ul className="top-nav"><li>
                                       <a href="register.html">
	    				<i className="fas fa-user-edit mr-2"></i>Register</a>
                                    </li>
                                    <li>
                                        <a href="login.html">
	    				<i className="fas fa-sign-in-alt mr-2"></i>Login</a>
                                    </li>
                                </ul>
                     	</div>
               	</div>
              </div>);
  }
}
