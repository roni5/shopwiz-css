import constants from '../constants/actionTypes';

var initialState = {
  products: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.PRODUCTS_RECEIVED:
      updated['products'] = action.products
      return updated

    default:
      return state
    }
}