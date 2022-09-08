import { styled } from '..';

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '4rem',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1.5rem'
  },

  a: {
    marginTop: '4rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.1s',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  marginLeft: '3.4375rem',
  marginTop: '6.5rem'
})

export const ImageBackground = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})