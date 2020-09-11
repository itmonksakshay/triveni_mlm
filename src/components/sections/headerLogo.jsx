import React from 'react';
import {Link} from 'react-router-dom';
export default function HeaderLogo({logo}){
  const comp = (<>
    {logo.map((item) =>
      <div key ={item.id} className="site-logo text-center text-lg-left">
        <Link to={item.url}>{item.storelogo}</Link>
      </div>
    )}</>);
  return(<>{comp}</>);
}
