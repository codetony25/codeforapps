import { font, media } from '/imports/react/styles/variables';
import { headerColor } from '/imports/react/styles/scheme';
import { fontMixin } from '/imports/react/styles/mixins';

const userHeaderStyles = () => {
  return {
    '.user-header-layout': {
      zIndex: 101,
      position: 'absolute',
      width: '100%',
      height: 50,
      background: headerColor.bg,
      display: 'flex',

      '.header-logo-container': {
        textAlign: 'center',
        paddingTop: 10,

        [media.large]: {
          position: 'absolute',
          left: '44%'
        },

        'h1': {
          mixin: fontMixin({
            fontFamily: font.primary.extraBold,
            fontSize: font.size.large
          }),
          display: 'none',

          [media.small]: {
            display: 'inline-block',
            position: 'relative',
            margin: 0,
            bottom: 3,
            left: 5
          }
        },

        'img': {
          height: 27,
          marginRight: 5,
          marginLeft: 8
        }
      }
    },

    '.user-right-menu': {
      marginLeft: 'auto',

      'ul': {
        display: 'flex'
      },

      '.avatar': {
        display: 'inline-block',
        marginLeft: 40,
        marginRight: 6,

        'img': {
          width: 34,
          borderRadius: '50%',
          transform: 'translate(-50%, -20%)'
        }
      }
    }
  };
};

export default userHeaderStyles;
