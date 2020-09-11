import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollection} from './actions/productAction';
import {headerItems} from './actions/headerAction';
 class Collections extends Component{

   componentDidMount(){
     this.props.fetchCollection(this.props.match.params.url); 
   }
   componentDidUpdate(prevProps){
    if(prevProps.match.params.url !== this.props.match.params.url){
      this.props.fetchCollection(this.props.match.params.url);
    }

   }

  render(){
    const{collectionLoading,collectionItems,collectionError} = this.props;
    const loadingMsg ="Loading Products";
    const Product =({products}) =>(<div className="row">
                                    {(products.length)?(products.map(({_id,name,price,image_name,url},index)=>(
                                      <div id={index} key={index} className="col-xl-2 col-lg-3 col-sm-6 my-3">
                                        <div className="col-12 bg-white text-center h-100 product-item">
                                          <div className="row h-100">
                                            <div className="col-12 p-0 mb-3">
                                              <Link to={url}>
                                                    <img src={`/images/${image_name}`} className="img-fluid"/>
                                                </Link>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <Link to={url} className="product-name">{name}</Link>
                                            </div>
                                            <div className="col-12 mb-3">
                                                    <span className="product-price-old">
                                                      {price}
                                                    </span>
                                                <br/>
                                                <span className="product-price">
                                                       {price}
                                                    </span>
                                            </div>
                                            <div className="col-12 mb-3 align-self-end">
                                                <button className="btn btn-outline-dark" type="button">
                                                  <i className="fas fa-cart-plus mr-2"></i>Add to cart</button>
                                            </div>
                                        </div>
                                      </div>
                                    </div>))):(<div className="row">
                                          <div className="col-12 text-center text-uppercase">
                                            <h2>No Products Found</h2>
                                          </div>
                                       </div>)}
                               </div>);
    const collectionContent =(<>{collectionItems.map(({name,products},index) =>(
                                  <><div key={index} className="row">
                                    <div className="col-12 text-center text-uppercase">
                                      <h2>{name}</h2>
                                    </div>
                                  </div><Product products= {products} /></>))
                              }</>);

    return(<div className="col-12">
            <main className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 py-3">
                            {(collectionLoading)?(loadingMsg):((collectionItems.length)?(collectionContent):(<div className="col-12 text-center text-uppercase">                           
                              <h2>No Collection Found</h2>
                                </div>))}
                            </div>
                       </div>
                </div>
             </main>
            </div>);
  }
}
function mapStateToProps(state) {
  console.log(state.collection);
  return{
    collectionLoading:state.collection.loading,
    collectionItems:state.collection.collectionData,
    collectionError:state.collection.error,
  };
}
const mapDispatchToProps = {
  fetchCollection
};
export default connect(mapStateToProps,mapDispatchToProps)(Collections);

