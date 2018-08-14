
import actionTypes  from '../constants/actionTypes';
console.log('actionTypes', actionTypes);
// This is a ActionCreator below for event handler
//import { productsReceived } from './actionCreators'
//dispatch(productsReceived('Use Redux'))



 export function productsReceived(products) {
    return {
        type: actionTypes.PRODUCTS_RECEIVED,
        products: products
    }
 }

  export function productsItemLoading(){
    return {
        type: actionTypes.PRODUCTS_ITEM_LOADING
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

export function submitNewProducts(data){
    return dispatch => {
        return fetch('/products/', {
            method: 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }
}

 export function productsItemReceived(productsItem){
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