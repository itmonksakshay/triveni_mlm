import React ,{Component} from 'react';
import ProdImg from '../.././images/image-1.jpg';
export default class Product extends Component {
  render(){
    return(<div className="col-lg-3 col-sm-6 my-3">
            <div className="col-12 bg-white text-center h-100 product-item">
              <div className="row h-100">
                <div className="col-12 p-0 mb-3">
                  <a href="product.html">
                    <img src={ProdImg} className="img-fluid"/>
                  </a>
                </div>
                <div className="col-12 mb-3">
                  <a href="product.html" className="product-name">Sony Alpha DSLR Camera</a>
                </div>
                <div className="col-12 mb-3">
                  <span className="product-price-old">$500</span><br/>
                  <span className="product-price">$500</span>
               </div>
               <div className="col-12 mb-3 align-self-end">
                <button className="btn btn-outline-dark" type="button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</button>
               </div>
              </div>
            </div>
          </div>);
  }

}
