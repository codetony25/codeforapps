import { globalColor, formColor } from '/imports/react/styles/scheme';
import { media } from '/imports/react/styles/variables'

const defaultStyles = {

  'html': {
    boxSizing: 'border-box',
    height: '100%'
  },

  'body': {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  'a': {
    textDecoration: 'none',
    cursor: 'pointer',
    color: globalColor.linkDefaultText
  },

  'ul, ol': {
    listStyle: 'none',
    padding: 0
  },

  'textarea, input': {
    border: 'none'
  },

  'textarea:focus, input:focus': {
    outline: 'none'
  },

  [`input:-webkit-autofill, 
  textarea:-webkit-autofill, 
  select:-webkit-autofill`]: {
    background: formColor.autofillBg,
    color: formColor.autofillText
  },

  '.register-captcha': {
    paddingRight: 25,

    [media.small]: {
      paddingLeft: 87,
      paddingRight: 0
    }
  },

  '.register-captcha > div > div': {
    margin: '20px auto',
    textAlign: 'center',
    width: 'auto',
    height: 'auto'
  }

};

export default defaultStyles;
