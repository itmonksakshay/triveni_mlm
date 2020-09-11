import React ,{ Component } from 'react';
import Slider from './sections/slider';
import Product from './sections/product';
import FeaturedBar from './sections/featuredBar';
export default class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      template: []
    }
  }
  componentDidMount(){
     fetch('/api/home')
    .then(res => res.json())
    .then(template => this.setState({ template }))
  };
  render(){
    const {template} = this.state;
    var slider,head;
    {template.map((temp)=> {
      slider = temp.slider;
      head = temp.header;
    })}
    const img = "/images/slider-2.jpg";
        return(<div className="col-12">
                <main className="row">
                 <Slider imgName={img}/>
                   <div className="col-12">
                        <div className="row">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="col-12 text-center text-uppercase">
                                        <h2>Featured Products</h2>
                                    </div>
                                </div>
                                <div className="row">

                                      <Product />

                                      <Product />

                                      <Product />

                                      <Product />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <hr/>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="col-12 text-center text-uppercase">
                                        <h2>Latest Products</h2>
                                    </div>
                                </div>
                                <div className="row">

                                      <Product />

                                      <Product />

                                      <Product />

                                      <Product />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <hr/>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="col-12 text-center text-uppercase">
                                        <h2>Top Selling Products</h2>
                                    </div>
                                </div>
                                <div className="row">

                                      <Product />

                                      <Product />

                                      <Product />

                                      <Product />
                                </div>
                            </div>
                        </div>
                    </div>
                      <FeaturedBar />
                </main>
            </div>);
  }
}
