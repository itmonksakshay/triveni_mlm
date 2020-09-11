import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainMenu from './sections/mainMenu';
import TopMenu from './sections/topNav';
import HeaderLogo from './sections/headerLogo';
import SearchForm from './sections/searchForm';
import CartWidget from './sections/cartWidget';
import FavouriteWidget from './sections/favouriteWidget';
import {headerItems} from './actions/headerAction';
class Header extends Component {
  
  componentDidMount(){
   const fetchHeader = this.props.headerItems();
    return fetchHeader;
  }

    render() {
      const loadingMsg ="loading";
      const {headerLoading,header,headerError} = this.props;
      const mainMenu = ((headerError)?([]):(header.filter(item => item.id ==="H001")));
      const topMenu = ((headerError)?([]):(header.filter(item => item.id ==="H002"))); 
      const logo = ((headerError)?([]):(header.filter(item => item.id ==="H003")));
      const customHeader =(<div className="col-12">  
                            <header className="row">
                             <TopMenu menu={topMenu}/>
                              <div className="col-12 bg-white pt-4">
                                <div className="row">
                                  <div className="col-lg-auto">
                                    <HeaderLogo logo ={logo}/>
                                  </div>
                                  <div className="col-lg-5 mx-auto mt-4 mt-lg-0">
                                    <SearchForm />
                                  </div>
                                  <div className="col-lg-auto text-center text-lg-left header-item-holder">
                                    <FavouriteWidget />
                                    <CartWidget />
                                  </div>
                                </div>
                                <MainMenu menu={mainMenu}/>
                              </div>
                            </header>                
                          </div>);
    return (<>{(headerLoading)?(loadingMsg):((header.length)?(customHeader):(headerError))}</>);
  }
}
function mapStateToProps(state){
  return{
    header:state.headerItems.header,
    headerLoading:state.headerItems.loading,
    headerError:state.headerItems.error
  };
}
const mapDispatchToProps ={
 headerItems
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);
