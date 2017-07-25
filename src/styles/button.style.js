import { globalColor } from './shared/scheme.style';
import { button } from './shared/mixin.style';

const buttonStyle = {
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
  }
};


export default buttonStyle;
