import { globalColor, formColor } from './shared/scheme.style';
import { font, media } from './shared/variables.style';
import { fontMixin } from './shared/mixin.style';

const globalStyle = {
  '.container': {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    [media.medium]: {
      width: 750
    },
    [media.large]: {
      width: 970
    },
    [media.extraLarge]: {
      width: 1170
    }
  },
  '.view-container': {
    minHeight: '100%',
    paddingBottom: 890,
    [media.medium]: {
      paddingBottom: 455
    }
  },
  'a': {
    textDecoration: 'none',
    cursor: 'pointer',
    color: globalColor.linkDefaultText
  },
  'textarea, input': {
    border: 'none'
  },
  'textarea:focus, input:focus': {
    outline: 'none'
  },
  [`input:-webkit-autofill,\
   textarea:-webkit-autofill,\
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
  },
  '.content-box': {
    boxShadow: [
      '0 1px 3px rgba(0, 0, 0, .12)',
      '0 1px 2px rgba(0, 0, 0, .24)'
    ]
  },
  '.panel': {
    borderRadius: 3,
    boxShadow: [
      '0 1px 3px rgba(0, 0, 0, .12)',
      '0 1px 2px rgba(0, 0, 0, .24)'
    ]
  },
  '.panel-header': {
    mixin: fontMixin({
      fontFamily: font.primary.bold,
      fontSize: font.size.medium
    }),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 15,
    background: globalColor.panelHeaderBg,
    color: globalColor.panelHeaderTextDefault,
    boxShadow: [
      '0 1px 3px rgba(0, 0, 0, .12)',
      '0 1px 2px rgba(0, 0, 0, .24)'
    ]
  },
  '.code-box': {
    mixin: fontMixin({
      fontFamily: font.mono,
      fontSize: font.size.tiny
    }),
    background: globalColor.codeboxBg, // white
    width: '100%',
    height: 180,
    boxShadow: '0 1px 3px 2px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    padding: '0.5rem 0 0.5rem 60px',
    [media.medium]: {
      width: 440
    },
    '::before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: 47,
      background: globalColor.codeboxBeforeBg,
      borderRadius: '3px 0 0 3px'
    },
    '::after': {
      mixin: fontMixin({
        fontFamily: font.mono,
        fontSize: font.size.tiny
      }),
      content: `'1 2 3 4 5 6 7 8'`,
      position: 'absolute',
      width: 10,
      whiteSpace: 'normal',
      overflow: 'hidden',
      marginTop: 10,
      color: globalColor.codeboxAfterText,
      textAlign: 'center',
      top: 0,
      left: 17,
      bottom: 0
    }
  },
  '.panel-body': {
    padding: 20
  },
  '.attention-dark': {
    color: globalColor.textAttentionDark
  },
  '.attention-light': {
    color: globalColor.textAttentionLight
  },
  '.ion-close': {
    color: formColor.iconError
  },
  '.ion-checkmark': {
    color: formColor.iconSuccess
  },
  '.header-divider': {
    background: globalColor.dividerBg,
    height: 1,
    maxWidth: 1200,
    margin: '2rem',
    '::before': {
      content: `''`,
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'relative',
      bottom: 5,
      width: 30,
      height: 5,
      margin: '0 auto',
      background: globalColor.dividerBeforeBg
    }
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)'
    },
    '40%': {
      transform: 'translateY(-30px)'
    },
    '60%': {
      transform: 'translateY(-15px)'
    }
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  '@keyframes logo-loading': {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0.5
    }
  },
  '@keyframes logo-slide-left': {
    '100%': {
      transform: 'translate(-210%, 0)',
      opacity: 1
    }
  },
  '@keyframes logo-slide-right': {
    '100%': {
      transform: 'translate(210%, 0)',
      opacity: 1
    }
  },
  '@keyframes logo-opacity-in': {
    '100%': {
      opacity: 1
    }
  },
  '@keyframes logo-slide-right-rotate': {
    '100%': {
      transform: 'translate(460%, 0%) rotate(-20deg)',
      opacity: 1
    }
  }
};


export default globalStyle;
