import React from 'react';
import { Link } from 'react-router-dom';
export default function MainMenu({menu}){
    return (<div className="row">
           	  <nav className="navbar navbar-expand-lg navbar-light bg-white col-12">
                <button className="navbar-toggler d-lg-none border-0" type="button" data-toggle="collapse" data-target="#mainNav">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                {menu.map(({id,items})=>(
                  <ul key={id} className="navbar-nav mx-auto mt-2 mt-lg-0">
                    {items.map(({id,items,name,url}) => ((items.length)?(<li key={id} className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to={url} id="electronics" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{name}</Link>
                      <div className="dropdown-menu" aria-labelledby="electronics"> 
                      {items.map(({id,url,name}) =>( 
                          <Link key={id} className="dropdown-item" to={url}>{name}</Link>
                      ))}</div>
                    </li>) :(<li key={id} className="nav-item">
                      <Link className="nav-link" to={url}>{name}<span className="sr-only">(current)</span></Link>
                    </li>)
                    ))}
                   </ul>))}
                 </div>
                </nav>
              </div>
  );
}
