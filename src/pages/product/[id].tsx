import { useContext } from 'react'
import { CartContext, ProductType } from '../../contexts/CartContext'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { priceFormatter } from '../../utils/formatter'

import { Header } from '../../components/Header'
import { ProductContainer, ImageContainer, ProductDetails } from '../../styles/pages/product'
import { toast } from 'react-toastify'

import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { insertProductToCart } = useContext(CartContext)

  function handleAddToCart() {
    insertProductToCart(product)

    toast.success('Produto adicionado na sacola.', {
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
    <>
      <Head>
          <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <Header />
      
      <ProductContainer>
        <ImageContainer>
          <Image 
            src={product.imageUrl} 
            width={520} 
            height={480} 
            alt=""
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>

          <p>{product.description}</p>
        
          <button 
            onClick={handleAddToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        formattedPrice: priceFormatter.format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MNyiOBbBtbpXlV' } },
      { params: { id: 'prod_MNyiwaziq50cxE' } },
      { params: { id: 'prod_MNyhBBtqfFg9da' } },
      { params: { id: 'prod_MNyg0lLa6hiV7q' } },
    ],
    fallback: 'blocking'
  }
}
