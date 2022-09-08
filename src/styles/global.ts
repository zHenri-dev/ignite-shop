import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::-webkit-scrollbar': { 
      width: 5,
    },

    '&::-webkit-scrollbar-track': { 
      backgroundColor: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': { 
      backgroundColor: '#504c54',
    }
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: 1.6
  }
})