import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

import Image from 'next/image';

import { priceFormatter } from '../utils/formatter';
import axios from 'axios';

import { CheckoutButton, CloseButton, Content, Product, ProductInfo, ProductsContainer, Total, TotalContainer, ImageContainer } from '../styles/components/CartModal';
import { X } from 'phosphor-react';
import { toast } from 'react-toastify'

import * as Dialog from '@radix-ui/react-dialog';

export function CartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartProducts, removeCartProductById, resetCartProducts } = useContext(CartContext)

  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc =+ product.price
  }, 0) 

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        prices: cartProducts.map(cartProduct => cartProduct.defaultPriceId)
      })

      const { checkoutUrl } = response.data

      resetCartProducts()

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  function handleRemoveCartItem(productId: string) {
    removeCartProductById(productId)

    toast.error('Produto removido da sacola.', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Dialog.Portal>
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ProductsContainer>
          {cartProducts.map(product => (
            <Product key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} alt="" width={100} height={90} />
              </ImageContainer>

              <ProductInfo>
                <div>
                  <span>{product.name}</span>
                  <strong>{product.formattedPrice}</strong>
                </div>

                <button onClick={() => handleRemoveCartItem(product.id)}>Remover</button>
              </ProductInfo>
            </Product>
          ))}
        </ProductsContainer>

        <TotalContainer>
          <Total>
            <div>
              <span>Quantidade</span>
              <span>{cartProducts.length} {cartProducts.length !== 1 ? 'itens' : 'item'}</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>{priceFormatter.format(totalPrice / 100)}</strong>
            </div>
          </Total>

          <CheckoutButton
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </CheckoutButton>
        </TotalContainer>
      </Content>
    </Dialog.Portal>
  )
}