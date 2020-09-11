import {GET_HEADER_REQUEST,GET_HEADER_SUCCESS,GET_HEADER_FAILED} from '../constants/headerConstants';
export default function headerReducer(state={header:[],loading:false,error:null},action){
  switch(action.type){
    case GET_HEADER_REQUEST :
      return {loading:true,header:[],error:null};
    case GET_HEADER_SUCCESS :
      return {loading:false,header:action.payload,error:null};
    case GET_HEADER_FAILED :
      return {loading:false,header:[],error:true};
    default :
      return state;
  }
}
