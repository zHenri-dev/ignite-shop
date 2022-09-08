import { styled } from '..';
import * as Dialog from '@radix-ui/react-dialog';

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  padding: '3rem',
  paddingTop: '4.5rem',
  backgroundColor: '$gray800',
  width: '30rem',
  
  h2: {
    fontWeight: 'bold',
    fontSize: '$lg',
    color: '$grey100'
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400',
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
  height: 'calc(100% - 17.5rem)',
  overflow: 'auto',
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem'
})

export const ProductInfo = styled('div', {
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '0.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem',
    fontSize: '$md',

    span: {
      color: '$gray300'
    },

    strong: {
      color: '$gray100'
    }
  },

  button: {
    width: 'auto',
    border: 0,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',

    transition: 'color 0.1s',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const TotalContainer = styled('div', {
  position: 'absolute',
  bottom: '3rem',
})

export const Total = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3.4375rem',
  gap: 8,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  'div:first-child': {
    'span:last-child': {
      fontSize: '$md'
    }
  },

  'div:last-child': {
    'strong:first-child': {
      fontSize: '$md'
    },

    'strong:last-child': {
      fontSize: '$xl'
    }
  }
})

export const CheckoutButton = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem 7.8125rem',
  fontWeight: 'bold',
  fontSize: '$md',
  color: '$white',
  cursor: 'pointer',

  transition: 'background-color 0.2s',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed'
  }
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8
})