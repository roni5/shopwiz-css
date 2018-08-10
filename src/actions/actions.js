
import actionTypes  from '../constants/actionTypes';
console.log('actionTypes', actionTypes);
// This is a ActionCreator below for event handler
//import { productsReceived } from './actionCreators'
//dispatch(productsReceived('Use Redux'))

function productsReceived(products) {
    return {
        type: actionTypes.PRODUCTS_RECEIVED,
        products: products
    }
}