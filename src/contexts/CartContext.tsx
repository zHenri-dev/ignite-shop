import { createContext, ReactNode, useCallback, useEffect, useReducer } from 'react';
import { cartReducer } from '../reducers/cart/reducer';
import { insertProductToCartAction, removeCartProductByIdAction, resetCartProductsAction } from '../reducers/cart/actions';

export interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: number,
  formattedPrice: string
  description: string
  defaultPriceId: string 
}

interface CartContextType {
  cartProducts: ProductType[]
  insertProductToCart: (product: ProductType) => Promise<void>
  removeCartProductById: (productId: string) => Promise<void>
  resetCartProducts: () => Promise<void>
}

export const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, dispatch] = useReducer(cartReducer, [])

  const insertProductToCart = useCallback(async (product: ProductType) => {
    dispatch(insertProductToCartAction(product))
  }, [])

  const removeCartProductById = useCallback(async (productId: string) => {
    dispatch(removeCartProductByIdAction(productId))
  }, [])

  const resetCartProducts = useCallback(async () => {
    dispatch(resetCartProductsAction())
  }, [])

  return (
    <CartContext.Provider value={{ 
      cartProducts, 
      insertProductToCart, 
      removeCartProductById,
      resetCartProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}