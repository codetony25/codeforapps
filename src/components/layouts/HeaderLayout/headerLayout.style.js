import { headerColor } from '../../../styles/shared/scheme.style';
import { font, media } from '../../../styles/shared/variables.style';
import { fontMixin } from '../../../styles/shared/mixin.style';

const headerLayoutStyle = () => {
  return {
    '.header-container': {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      alignItems: 'center',
      width: '100%',
      minHeight: 55,
      zIndex: 100,
      background: headerColor.bgTransparent,
      transform: 'translateY(50%)',
      boxShadow: 'none',
      top: 0,
      padding: '0 15px',
      transition: '.4s ease-in-out',
      '&.is-scrolled': {
        background: headerColor.bg,
        transform: 'translateY(0%)',
        boxShadow: '0 2px 2px rgba(0, 0, 0, .4)'
      },
      [media.large]: {
        padding: '0 45px'
      },
      'ul li i': {
        transition: '.4s',
        fontSize: 20,
        padding: 8,
        color: headerColor.icon,
        position: 'relative',
        top: 3,
        ':hover': {
          color: headerColor.iconHover
        }
      },
      '.header-navicon': {
        [media.large]: {
          display: 'none'
        }
      },
      '.header-navigation': {
        'ul': {
          display: 'flex',
          alignItems: 'center'
        },
        '.header-links': {
          display: 'none',
          [media.large]: {
            display: 'flex',
            position: 'relative',
            top: 4
          },
          'li a': {
            mixin: fontMixin({
              fontFamily: font.primary.bold,
              fontSize: font.size.extraSmall
            }),
            transition: '.4s',
            marginRight: 45,
            color: headerColor.link,
            ':hover': {
              color: headerColor.linkHover
            }
          }
        }
      },
      '.header-logo': {
        position: 'relative',
        'a': {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          color: headerColor.textLogo,
          width: 120,
          'img': {
            height: 24
          },
          'span': {
            mixin: fontMixin({
              fontFamily: font.primary.extraBold,
              fontSize: font.size.large
            }),
            position: 'relative',
            top: 5
          }
        }
      },
      '.header-settings ul': {
        display: 'flex',
        alignItems: 'center'
      },
      '.header-profile': {
        display: 'flex',
        alignItems: 'center',
        '.profile-image': {
          'a': {
            transition: '.4s',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'inline-block',
            background: headerColor.borderImage,

            ':hover': {
              background: headerColor.borderImageHover
            }
          }
        },
        'img': {
          width: 33,
          position: 'relative',
          top: 4,
          left: 4,
          borderRadius: '50%',
          verticalAlign: 'middle',
          marginRight: 10
        }
      }
    }
  };
};

export default headerLayoutStyle;
