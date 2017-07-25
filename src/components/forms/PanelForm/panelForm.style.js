import { authColor } from '../../../styles/shared/scheme.style';
import { font, media } from '../../../styles/shared/variables.style';
import {
  fontMixin
} from '../../../styles/shared/mixin.style';

const panelFormStyle = () => {
  return {
    '.panel-form-container': {
      minWidth: '100%',
      maxWidth: 640,
      minHeight: 471,
      background: authColor.bg,
      [media.small]: {
        minWidth: 550
      },
      '.title-container': {
        display: 'block',
        textAlign: 'center',
        'h2': {
          mixin: fontMixin({
            fontFamily: font.primary.bold,
            fontSize: font.size.large
          }),
          color: authColor.textDefault,
          marginTop: 3,
          marginBottom: 3
        },
        'p': {
          mixin: fontMixin({
            fontFamily: font.secondary.normal,
            fontSize: font.size.extraSmall
          }),
          color: authColor.textBody,
          marginBottom: 30,
          marginTop: 11
        }
      },
      '.header-icon': {
        marginLeft: 10,
        fontSize: 17
      }
    },
    '.panel-form': {
      '.submit-container': {
        textAlign: 'center',
        padding: '20px 0'
      },
      '.label-default': {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingTop: 3,
        paddingBottom: 10,
        paddingLeft: 3,
        width: 136,
        [media.small]: {
          textAlign: 'right'
        }
      },
      '.input-default, .contact-textarea': {
        marginRight: 13,
        width: '91%',
        [media.small]: {
          width: '65%'
        }
      },
      '.input-container': {
        paddingBottom: 20
      },
      '.error-msg': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        color: authColor.errorMsg,
        position: 'relative',
        marginBottom: 5,
        marginLeft: 4,
        [media.small]: {
          marginLeft: 150
        }
      },
      '.action-error-msg': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        textAlign: 'center',
        color: authColor.errorMsg,
        display: 'block'
      },
      '.auth-action': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        paddingTop: 35,
        textAlign: 'center',
        'ul': {
          mixin: fontMixin({
            fontFamily: font.primary.primary,
            fontSize: font.size.tiny
          }),
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 0
        },
        'a': {
          textDecoration: 'underline'
        }
      }
    }
  };
};

export default panelFormStyle;
