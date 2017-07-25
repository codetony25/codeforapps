import { formColor } from './shared/scheme.style';
import { font } from './shared/variables.style';
import { fontMixin } from './shared/mixin.style';

const formStyle = {
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
  }
};


export default formStyle;
