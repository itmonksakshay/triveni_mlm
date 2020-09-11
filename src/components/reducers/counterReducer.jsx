import {INCREMENT,DECREMENT} from '../constants/counterConstants';
export default function counterReducer(state={count:0},action) {
  switch(action.type){
    case INCREMENT:
      return {count:action.payload};
    case DECREMENT:
      return {count:action.payload};
    default:
      return state;
  }

}
