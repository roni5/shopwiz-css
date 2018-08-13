import { createStore, combineReducers, applyMiddleware } from 'redux';
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