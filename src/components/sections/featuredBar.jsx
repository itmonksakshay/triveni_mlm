import React ,{Component} from 'react';
export default class FeaturedBar extends Component{
  render(){
    return(                    <div className="col-12 py-3 bg-light d-sm-block d-none">
                        <div className="row">
                            <div className="col-lg-3 col ml-auto large-holder">
                                <div className="row">
                                    <div className="col-auto ml-auto large-icon">
                                        <i className="fas fa-money-bill"></i>
                                    </div>
                                    <div className="col-auto mr-auto large-text">
                                        Best Price
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col large-holder">
                                <div className="row">
                                    <div className="col-auto ml-auto large-icon">
                                        <i className="fas fa-truck-moving"></i>
                                    </div>
                                    <div className="col-auto mr-auto large-text">
                                        Fast Delivery
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col mr-auto large-holder">
                                <div className="row">
                                    <div className="col-auto ml-auto large-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="col-auto mr-auto large-text">
                                        Genuine Products
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>);
  }

}
