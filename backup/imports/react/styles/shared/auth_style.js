import { authColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import {
  flexDeadCenterPadding,
  fontMixin,
  fontResponsive
} from '/imports/react/styles/mixins';

const authStyles = () => {
  return {
    '.auth-view': {
      mixin: flexDeadCenterPadding()
    },

    '.auth-form-container': {
      minWidth: '100%',
      maxWidth: 640,
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

    '.auth-form': {

      '.submit-container': {
        textAlign: 'center',
        padding: '30px 0'
      },

      '.label-default': {
        display: 'inline-block',
        paddingBottom: 10,
        paddingLeft: 3,
        width: 136,
        verticalAlign: 'top',

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

export default authStyles;
