
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

export function fetchProducts(){
    return dispatch => {
        return fetch(`/products`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(productsReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}



function productsItemReceived(productsItem){
    return {
        type: actionTypes.PRODUCTS_ITEM_RECEIVED,
        productsItem: productsItem
    }
}


export function fetchProductsItem(id){
    return dispatch => {
        return fetch(`/products/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(productsItemReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}