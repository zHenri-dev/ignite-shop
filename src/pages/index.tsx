import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import { HomeContainer, IconContainer, Product } from '../styles/pages/home';
import { Header } from '../components/Header';
import { Handbag } from 'phosphor-react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={420} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <Link href={`/product/${product.id}`}>
                  <IconContainer>
                    <Handbag weight='bold' size={32} />
                  </IconContainer>
                </Link>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({ expand: ['data.default_price'] })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}