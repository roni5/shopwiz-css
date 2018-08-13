import constants from '../constants/actionTypes';

var initialState = {
  products: [],
  productsItem: {}
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.PRODUCTS_RECEIVED:
      updated['products'] = action.products
      return updated

      case constants.PRODUCTS_ITEM_RECEIVED:
      updated['productsItem'] = action.productsItem
      return updated

    default:
      return state
    }
}