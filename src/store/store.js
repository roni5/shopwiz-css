import { createStore, combineReducers, applyMiddleware } from '../../../../Library/Caches/typescript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/productsReducer';

const store = createStore(
  combineReducers({
    products: productsReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;