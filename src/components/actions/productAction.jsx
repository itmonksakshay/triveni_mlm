import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILED} from '../constants/productConstants';
import {COLLECTION_REQUEST,COLLECTION_REQUEST_SUCCESS,COLLECTION_REQUEST_FAILED} from '../constants/collectionConstants';
export function listProducts(){
  return dispatch =>{
    dispatch({ type: PRODUCT_LIST_REQUEST });
    return fetch("/api/collections/").then(res=>res.json())
      .then(data=>{dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
        return data;
      }).catch(error => dispatch({type: PRODUCT_LIST_FAILED,payload:error}));
  };
 }

export function fetchCollection(url){
  return dispatch =>{
    dispatch({ type: COLLECTION_REQUEST });
    return fetch("/api/collections/"+ url).then(res=>res.json())
      .then(data=>{dispatch({type:COLLECTION_REQUEST_SUCCESS,payload:data})
        return data;
      }).catch(error => dispatch({type: COLLECTION_REQUEST_FAILED,payload:error}));
  };



}
