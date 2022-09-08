import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import Image from 'next/image'
import Link from 'next/link'

import { CartModal } from './CartModal';

import { HeaderContainer, CartIconContainer, CartCounter } from '../styles/components/Header'
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../assets/logo.svg'

export function Header() {
  const { cartProducts } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <a>
          <Image src={logoImg} alt="" style={{ cursor: 'pointer' }} />
        </a>
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CartIconContainer>
            <Handbag weight='bold' size={24} />

            {cartProducts.length > 0 && (
              <CartCounter>{cartProducts.length}</CartCounter>
            )}
          </CartIconContainer>
        </Dialog.Trigger>

        <CartModal />
      </Dialog.Root>
      
    </HeaderContainer>
  )
}