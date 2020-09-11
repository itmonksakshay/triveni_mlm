import axios from 'axios';
import {GET_HEADER_REQUEST,GET_HEADER_SUCCESS,GET_HEADER_FAILED} from '../constants/headerConstants';
export const headerItems =()=>async(dispatch) =>{
    try{
      dispatch({type : GET_HEADER_REQUEST});
      const {data} = await axios.get("/api/home/head");
      dispatch({type:GET_HEADER_SUCCESS,payload:data});
    }catch(error){
      dispatch({type: GET_HEADER_FAILED,payload:error});
    }
  };
