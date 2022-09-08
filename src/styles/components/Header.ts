import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CartIconContainer = styled('div', {
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  lineHeight: 0,
  cursor: 'pointer',
  position: 'relative',

  svg: {
    color: '$gray400'
  }
})

export const CartCounter = styled('span', {
  position: 'absolute',
  top: -10,
  right: -10,
  border: '3px solid $gray900',
  padding: '0.75rem 0.5rem',
  backgroundColor: '$green500',
  borderRadius: '50%',
  lineHeight: 0,
  fontSize: 14,
  fontWeight: 'bold',
})