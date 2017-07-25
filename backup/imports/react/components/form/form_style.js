import { formColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const formStyles = () => {

  return {

    // Hero Subscriber Form
    '.hero-subscriber-form': {

      '.input-default': {
        width: '100%',
        marginBottom: 20,
        padding: '15px 0 15px 12px',

        [media.medium]: {
          marginRight: 20,
          width: 300,
          marginBottom: 0
        }
      },

      '.subscriber-form-error': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -150%)',
        color: formColor.msgError
      },

      '.subscriber-form-success': {
        mixin: [
          fontMixin({
            fontFamily: font.primary.normal,
            fontSize: font.size.extraSmall
          })
        ],
        position: 'absolute',
        color: formColor.msgSuccess,
        bottom: 0,
        left: 0,
        right: 0,
        top: '67%',
        margin: 'auto',

        '.ion-checkmark': {
          fontSize: 30
        }
      }
    },

    // Footer Subscriber Form
    '.footer-subscriber-form': {

      '.subscriber-form-error-message': {
        position: 'absolute',
        transform: 'translateY(-100%)',

        '.subscriber-form-error': {
          mixin: fontMixin({
            fontFamily: font.primary.normal,
            fontSize: font.size.tiny
          }),
          color: formColor.msgError
        }
      },

      '.subscriber-form-success': {
        textAlign: 'center'
      },

      '.subscriber-form-action': {
        width: 291
      },

      '.input-default': {
        width: 245,
        marginBottom: 18
      },

      '.btn-passive': {
        marginRight: 13
      }
    }

  };
};

export default formStyles;
