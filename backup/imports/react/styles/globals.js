import {
  button,
  fontMixin,
  fontResponsive
} from '/imports/react/styles/mixins';
import { globalColor, formColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';

const globalStyles = {

  // Buttons
  '.btn-info': {
    mixin: button(globalColor.btnInfoText, globalColor.btnInfoBg)
  },

  '.btn-info-light': {
    mixin: button(globalColor.btnInfoText, globalColor.btnInfoLightBg)
  },

  '.btn-passive': {
    mixin: button(globalColor.btnPassiveText, globalColor.btnPassiveBg)
  },

  '.btn-success': {
    mixin: button(globalColor.btnSuccessText, globalColor.btnSuccessBg)
  },

  '.btn-danger': {
    mixin: button(globalColor.btnDangerText, globalColor.btnDangerBg)
  },

  '.btn-default': {
    mixin: button(globalColor.btnDefaultText, globalColor.btnDefaultBg)
  },

  '.btn-action': {
    mixin: button(globalColor.btnActionText, globalColor.btnActionBg)
  },

  '.btn-disabled': {
    mixin: button(globalColor.btnDisabledText, globalColor.btnDisabledBg),
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
  },

  '.toolbar-btn': {
    mixin: fontResponsive({
      maxSize: 25.5,
      minSize: 14.5
    }),
    textTransform: 'uppercase',
    border: 'none',
    lineHeight: '20px',
    minWidth: 33,
    marginBottom: 0,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    touchAction: 'manipulation',
    backgroundImage: 'none',
    padding: '11.7px 15px',
    transition: '.3s',
    color: globalColor.btnToolbarText,
    WebkitUserSelect: 'none',

    ':hover': {
      background: globalColor.btnToolbarBgHover
    },

    ':active': {
      background: globalColor.btnToolbarBgActive
    }
  },

  '.toolbar-btn-group': {
    display: 'inline-block',
    borderLeft: `1px solid ${globalColor.btnToolbarBorder}`,
    borderRight: `1px solid ${globalColor.btnToolbarBorder}`
  },

  '.toolbar-dropdown': {
    background: globalColor.dropdownBg,
    borderRadius: 3,
    border: 0,
    margin: '5px 0 0 0',
    position: 'absolute',
    opacity: 1,
    transform: 'translate(1%, 1%)',
    transition: 'all 0.125s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: [
      '0 0 1px rgba(27, 34, 44, 0.32)',
      '0 16px 40px -8px rgba(27, 34, 44, 0.2)'
    ],

    'ul': {
      margin: 0
    }
  },

  '.header-btn': {
    padding: '2px 12px',
    margin: 8,
    minHeight: 40,
    fontSize: 24.5,
    textAlign: 'center',
    lineHeight: '16px',
    verticalAlign: 'middle',
    transition: '.3s',

    ':hover': {
      color: globalColor.iconDefault
    }
  },

  // Badges
  '.badge': {
    mixin: fontMixin({
      fontFamily: font.primary.bold
    }),
    position: 'absolute',
    minWidth: 13,
    minHeight: 13,
    padding: '0 5px',
    borderRadius: '50%',
    verticalAlign: 'baseline',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 10,
    whiteSpace: 'no-wrap',
    transform: 'translate(45%, -45%)',

    '&.mail-badge': {
      background: globalColor.badgeMessageBg,
      color: globalColor.badgeMessageText
    },

    '&.notice-badge': {
      background: globalColor.badgeAlertBg,
      color: globalColor.badgeAlertText
    }
  },

  // Forms
  '.label-default': {
    mixin: fontMixin({
      fontFamily: font.primary.normal,
      fontSize: font.size.tiny
    }),
    color: formColor.labelDefaultText,
    marginRight: 8
  },

  '.input-default': {
    mixin: fontMixin({
      fontFamily: font.primary.normal,
      fontSize: font.size.tiny
    }),
    border: `1px solid ${formColor.inputBoxBorder}`,
    boxShadow: `inset 0 1px 2px ${formColor.inputBoxBorder}`,
    backgroundColor: formColor.inputBg,
    borderRadius: 3,
    padding: 9,
    transition: '.2s',
    color: formColor.inputText,

    '&.input-large': {
      mixin: fontMixin({
        fontFamily: font.primary.normal,
        fontSize: font.size.extraSmall
      }),
      padding: 14
    },

    '&.error': {
      border: `1px solid ${formColor.inputErrorBorder}`
    },

    ':focus': {
      border: `1px solid ${formColor.inputFocusBorder}`
    }
  },
  
  // Containers
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

  // Boxes and Panels
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

  // Text Highlight
  '.attention-dark': {
    color: globalColor.textAttentionDark
  },

  '.attention-light': {
    color: globalColor.textAttentionLight
  },

  // Icons
  '.ion-close': {
    color: formColor.iconError
  },

  '.ion-checkmark': {
    color: formColor.iconSuccess
  },

  // Dividers
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
  }

};

export default globalStyles;
