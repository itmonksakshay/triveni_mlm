import React , { Component } from 'react';
export default class Footer extends Component {
  render() {
    return( <div className="col-12 align-self-end">
              <footer className="row">
                    <div className="col-12 bg-dark text-white pb-3 pt-5">
                        <div className="row">
                            <div className="col-lg-2 col-sm-4 text-center text-sm-left mb-sm-0 mb-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="footer-logo">
                                            <a href="index.html">E-Commerce</a>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <address>
                                            221B Baker Street<br/>
                                            London, England
                                        </address>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="social-icon"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-8 text-center text-sm-left mb-sm-0 mb-3">
                                <div className="row">
                                    <div className="col-12 text-uppercase">
                                        <h4>Who are we?</h4>
                                    </div>
                                    <div className="col-12 text-justify">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet vel ligula vel sodales. Aenean vel ullamcorper purus, ac pharetra arcu. Nam enim velit, ultricies eu orci nec, aliquam efficitur sem. Quisque in sapien a sem vestibulum volutpat at eu nibh. Suspendisse eget est metus. Maecenas mollis quis nisl ac malesuada. Donec gravida tortor massa, vitae semper leo sagittis a. Donec augue turpis, rutrum vitae augue ut, venenatis auctor nulla. Sed posuere at erat in consequat. Nunc congue justo ut ante sodales, bibendum blandit augue finibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3 col-5 ml-lg-auto ml-sm-0 ml-auto mb-sm-0 mb-3">
                                <div className="row">
                                    <div className="col-12 text-uppercase">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="col-12">
                                        <ul className="footer-nav">
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms & Conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-2 col-4 mr-auto mb-sm-0 mb-3">
                                <div className="row">
                                    <div className="col-12 text-uppercase text-underline">
                                        <h4>Help</h4>
                                    </div>
                                    <div className="col-12">
                                        <ul className="footer-nav">
                                            <li>
                                                <a href="#">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#">Shipping</a>
                                            </li>
                                            <li>
                                                <a href="#">Returns</a>
                                            </li>
                                            <li>
                                                <a href="#">Track Order</a>
                                            </li>
                                            <li>
                                                <a href="#">Report Fraud</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center text-sm-left">
                                <div className="row">
                                    <div className="col-12 text-uppercase">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <div className="col-12">
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your email..." required/>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-outline-light text-uppercase">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
              </div>);
  }
}
