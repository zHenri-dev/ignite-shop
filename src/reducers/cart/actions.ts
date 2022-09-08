import { ProductType } from '../../contexts/CartContext'

export enum ActionTypes {
  INSERT_CART_PRODUCT = 'INSERT_CART_PRODUCT',
  REMOVE_CART_PRODUCT_BY_ID = 'REMOVE_CART_PRODUCT_BY_ID',
  RESET_CART_PRODUCTS = 'RESET_CART_PRODUCTS',
}

export function insertProductToCartAction(product: ProductType) {
  return {
    type: ActionTypes.INSERT_CART_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeCartProductByIdAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT_BY_ID,
    payload: {
      productId,
    },
  }
}

export function resetCartProductsAction() {
  return {
    type: ActionTypes.RESET_CART_PRODUCTS,
    payload: {}
  }
}