import { footerColor } from '../../../styles/shared/scheme.style';
import { font, media } from '../../../styles/shared/variables.style';
import { fontMixin } from '../../../styles/shared/mixin.style';

const footerLayoutStyle = () => {
  return {
    '.footer-layout': {
      position: 'absolute',
      width: '100%',
      bottom: 0
    },
    '.footer-support': {
      background: footerColor.bgSupport,
      textAlign: 'center',
      padding: '2rem',
      [media.medium]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 2rem'
      },
      'h1': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.medium
        }),
        color: footerColor.textHeader,
        margin: 0,
        [media.medium]: {
          marginRight: 20
        }
      },
      'a': {
        display: 'inline-block',
        margin: '2rem auto 0',

        [media.medium]: {
          margin: 0
        }
      }
    },
    '.footer-site': {
      background: footerColor.bg,
      padding: '2rem',
      [media.medium]: {
        padding: '4rem 2rem'
      }
    },
    '.footer-navigation-container': {
      [media.medium]: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 1200
      },
      'h3': {
        mixin: fontMixin({
          fontFamily: font.primary.bold,
          fontSize: font.size.small
        }),
        margin: '15px 0 20px 0',
        color: footerColor.textHeader,
        [media.medium]: {
          paddingTop: 0
        },
        'span': {
          borderBottom: `1px solid ${footerColor.border}`,
          paddingBottom: '0.4rem'
        }
      },
      'ul': {
        'li': {
          marginBottom: 5,
          'a': {
            mixin: fontMixin({
              fontFamily: font.primary.normal,
              fontSize: font.size.extraSmall
            }),
            transition: '.3s',
            ':hover': {
              color: footerColor.textHover
            }
          }
        }
      }
    },
    '.footer-subscribe-container': {
      borderBottom: `1px solid ${footerColor.border}`,
      paddingBottom: 30,
      [media.medium]: {
        borderBottom: 'none'
      },
      'h4': {
        mixin: fontMixin({
          fontFamily: font.primary.semiBold,
          fontSize: font.size.small
        }),
        color: footerColor.textDefault,
        margin: 0
      },
      'p': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.extraSmall
        }),
        color: footerColor.textDefault,
        margin: 0,
        padding: '5px 0 20px 0'
      }
    },
    '.footer-terms-container': {
      background: footerColor.bg,
      'h5': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        textAlign: 'center',
        margin: 0,
        paddingBottom: 20,
        color: footerColor.textDefault,
        padding: '2rem'
      }
    }
  };
};

export default footerLayoutStyle;
