import { ProductType } from '../../contexts/CartContext'
import { ActionTypes } from './actions'


interface actionType {
  type: keyof typeof ActionTypes,
  payload: any
}

export function cartReducer(state: ProductType[], action: actionType) {
  switch (action.type) {
    case ActionTypes.INSERT_CART_PRODUCT:
      if (!state.find(productFind => productFind.id === action.payload.product.id)) {
        return [...state, action.payload.product]
      }

      return state
    case ActionTypes.REMOVE_CART_PRODUCT_BY_ID: 
      return state.filter((product) => product.id !== action.payload.productId)
    case ActionTypes.RESET_CART_PRODUCTS:
      return []
    default:
      return state
  }
}