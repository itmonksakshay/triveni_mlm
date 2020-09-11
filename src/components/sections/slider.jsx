import React ,{Component} from 'react';
export default class Slider extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const slid = [this.props.imgName];
    return ( 
      <div className="col-12 px-0">
                        <div id="slider" className="carousel slide w-100" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                                <li data-target="#slider" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                             <div className="carousel-item active">
                                  <img src={slid} className="slider-img"/> 
                                </div>
                            </div>  
                           <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>);
  }
}
