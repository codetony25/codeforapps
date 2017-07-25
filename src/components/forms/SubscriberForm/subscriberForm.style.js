import { formColor } from '../../../styles/shared/scheme.style';
import { font, media } from '../../../styles/shared/variables.style';
import { fontMixin } from '../../../styles/shared/mixin.style';

const subscriberFormStyle = () => {
  return {
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
      },
      '.subscriber-form-action': {
        '.btn-info': {
          marginRight: 13
        }
      }
    },
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
      '.btn-info': {
        marginRight: 13
      }
    }
  };
};

export default subscriberFormStyle;
