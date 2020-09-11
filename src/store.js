import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {productListReducer,collectionReducer} from './components/reducers/productReducer';
import headerReducer from './components/reducers/headerReducer';
 
const reducer = combineReducers({ productList:productListReducer,
                                  collection:collectionReducer,
                                  headerItems:headerReducer 
                                });

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
