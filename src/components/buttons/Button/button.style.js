import { hexToRgb } from 'jassy';
import color from 'color';

import { globalColor } from '../../../styles/shared/scheme.style';
import { font } from '../../../styles/shared/variables.style';
import {
  fontMixin,
  positionAbsoluteCenter
} from '../../../styles/shared/mixin.style';

const buttonMixin = (btnTextColor, btnBgColor) => {
  return {
    mixin: fontMixin({
      fontFamily: font.primary.bold,
      fontSize: font.size.extraSmall
    }),
    background: btnBgColor,
    color: btnTextColor,
    position: 'relative',
    borderRadius: 3,
    padding: '1rem 2rem',
    letterSpacing: 0.5,
    border: 'none',
    zIndex: 1,
    textAlign: 'center',
    transition: '.3s',
    cursor: 'pointer',
    boxShadow: `0 2px 0 rgba(${hexToRgb(btnBgColor)},0.5)`,
    ':hover': {
      background: color(btnBgColor).lighten(0.05).hexString()
    },
    ':active': {
      outline: 'none',
      background: color(btnBgColor).darken(0.05).hexString(),
      top: 1,
      boxShadow: 'none'
    },
    ':focus': {
      outline: 'none'
    },
    '&.btn-outline': {
      border: `1px solid ${globalColor.btnOutlineBorder}`,
      background: 'none',
      boxShadow: 'none',
      padding: '0.95rem 1.95rem',
      ':hover': {
        border: `1px solid ${color(btnBgColor).lighten(0.05).hexString()}`
      }
    },
    '&.btn-large': {
      mixin: fontMixin({
        fontFamily: font.primary.bold,
        fontSize: font.size.small
      }),
      padding: '1rem 2rem'
    },
    '&.btn-small': {
      mixin: fontMixin({
        fontFamily: font.primary.bold,
        fontSize: font.size.extraSmall
      }),
      padding: '0.6rem 1rem'
    },
    '&.btn-loading': {
      cursor: 'progress',
      '::before': {
        mixin: positionAbsoluteCenter(),
        content: `''`,
        width: 25,
        height: 25,
        borderRadius: '100%',
        zIndex: 10,
        border: '4px solid rgba(255, 255, 255, 0.2)',
        borderTopColor: '#fff',
        animation: 'spin 1s infinite linear'
      },
      '::after': {
        content: `''`,
        position: 'absolute',
        display: 'block',
        background: btnBgColor,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }
    }
  };
};

const buttonStyle = {
  '.btn-info': {
    mixin: buttonMixin(globalColor.btnInfoText, globalColor.btnInfoBg)
  },
  '.btn-info-light': {
    mixin: buttonMixin(globalColor.btnInfoText, globalColor.btnInfoLightBg)
  },
  '.btn-passive': {
    mixin: buttonMixin(globalColor.btnPassiveText, globalColor.btnPassiveBg)
  },
  '.btn-success': {
    mixin: buttonMixin(globalColor.btnSuccessText, globalColor.btnSuccessBg)
  },
  '.btn-danger': {
    mixin: buttonMixin(globalColor.btnDangerText, globalColor.btnDangerBg)
  },
  '.btn-default': {
    mixin: buttonMixin(globalColor.btnDefaultText, globalColor.btnDefaultBg)
  },
  '.btn-action': {
    mixin: buttonMixin(globalColor.btnActionText, globalColor.btnActionBg)
  },
  '.btn-disabled': {
    mixin: buttonMixin(globalColor.btnDisabledText, globalColor.btnDisabledBg),
    cursor: 'not-allowed',
    ':hover': {
      background: globalColor.btnDisabledBg,
      boxShadow: [
        '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
        '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
      ]
    },
    ':active': {
      top: 0,
      boxShadow: [
        '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
        '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
      ]
    }
  }
};

export default buttonStyle;
