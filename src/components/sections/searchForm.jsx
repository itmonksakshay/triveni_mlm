import React,{ Component } from 'react';
export default class SearchForm extends Component{
  render(){
    return(                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="search" className="form-control border-dark" placeholder="Search..." required/>
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-dark"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
);
  }
}
