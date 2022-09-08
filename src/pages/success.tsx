import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import { SuccessContainer, ImageContainer, ImageBackground } from '../styles/pages/success';

import logoImg from '../assets/logo.svg'

interface SuccessProps {
  customerName: string
  products: {
    id: string
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
          <title>Compra efetuada | Ignite Shop</title>

          <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Image 
          src={logoImg}
          alt=""
          width={130}
          height={52}
        />

        <ImageContainer>
          {products.map((product, index) => (
            <ImageBackground key={product.id} style={{ zIndex: index, marginLeft: '-3.4375rem' }} >
              <Image 
                src={product.imageUrl} 
                width={130} 
                height={130} 
                alt="" 
              />
            </ImageBackground>
          ))}
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length} {products.length !== 1 ? 'camisetas' : 'camiseta'}</strong> já está a caminho da sua casa. 
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, { 
      expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const products = session.line_items.data.map(line_item => {
      const product = line_item.price.product as Stripe.Product
      
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0]
      }
    })

    return {
      props: {
        customerName,
        products
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
}