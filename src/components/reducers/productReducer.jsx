import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILED} from '../constants/productConstants';
import {COLLECTION_REQUEST,COLLECTION_REQUEST_SUCCESS,COLLECTION_REQUEST_FAILED} from '../constants/collectionConstants';
export function productListReducer(state={products:[],loading:false,error:null},action){
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products:[],error:null };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products:action.payload,error:null };
   case PRODUCT_LIST_FAILED:
      return { loading: false,products:[], error: action.payload };
    default:
      return state;
 }
}
export function collectionReducer(state={collectionData:[],loading:false,error:null},action){
  switch(action.type){
    case COLLECTION_REQUEST :
      return {loading:true,collectionData:[],error:null};
    case COLLECTION_REQUEST_SUCCESS :
      return {loading:false,collectionData:action.payload,error:null};
    case COLLECTION_REQUEST_SUCCESS :
      return {loading:false,collectionData:[],error:action.payload};
    default :
      return state;
  }
}
