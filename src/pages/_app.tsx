import { AppProps } from 'next/app'
import { CartProvider } from '../contexts/CartContext'
import { ToastContainer } from 'react-toastify'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Component {...pageProps} />

        <ToastContainer />
      </CartProvider>
    </Container>
  )
}
