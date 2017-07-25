import { hexToRgb } from 'jassy';

import { headerColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const navigationMixin = (options) => {
  const defaultMediaLargeWidth = 400;
  options.widthLarge = options.widthLarge || defaultMediaLargeWidth;

  return {
    margin: 0,
    display: 'none',

    [media.large]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: options.widthLarge,
      marginTop: 10
    },

    'a': {
      mixin: fontMixin({
        fontFamily: font.primary.semiBold,
        fontSize: font.size.tiny
      }),
      transition: '.3s',
      padding: '0.5rem',

      ':hover': {
        color: headerColor.linkHover
      }
    },

    '.search-icon .icon': {
      marginRight: 10
    }
  };
};

const headerLogoMixin = (options) => {
  return {
    display: options.displayLarge ? 'none' : 'inline-block',
    position: 'relative',
    marginRight: 10,
    top: 2,

    [media.large]: {
      display: options.displayLarge ? 'inline-block' : 'none'
    },

    'a': {
      mixin: fontMixin({
        fontFamily: font.primary.extraBold,
        fontSize: font.size.large
      })
    },

    'img': {
      height: 27,
      marginRight: 7,
      position: 'relative',
      top: 5
    },

    '.logo-text': {
      position: 'relative',
      bottom: -1
    }
  };
};

export const headerLayoutStyles = (options) => {

  options.applyHeaderBackground = options.applyHeaderBackground || false;
  options.disableRouteTransition = options.disableRouteTransition || false;

  return {
    '.header-layout': {
      transition: options.disableRouteTransition ? '0' : '.7s',
      background: options.applyHeaderBackground ?
        `rgba(${hexToRgb(headerColor.bg)}, 1)` :
        `rgba(${hexToRgb(headerColor.bg)}, 0)`,
      position: 'fixed',
      top: 0,
      zIndex: 100,
      height: 50,
      width: '100%',
      padding: '0.2rem 1rem',
      boxShadow: !options.applyHeaderBackground ?
        'none' : ['0 1px 3px rgba(0, 0, 0, .12)',
        '0 1px 2px rgba(0, 0, 0, .24)'],

      'nav': {
        transition: options.disableRouteTransition ? '0' : '.7s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        transform: options.applyHeaderBackground ?
          'translateY(0%)' :
          'translateY(50%)',
        maxWidth: 1200
      },

      '.left-navigation': {
        display: 'inherit'
      },

      '.site-navigation': {
        mixin: navigationMixin({
          widthLarge: 280
        })
      },

      '.context-navigation': {
        mixin: navigationMixin({
          widthLarge: 360
        })
      },

      '.header-logo-container-mobile': {
        mixin: headerLogoMixin({
          displayLarge: false,
          applyBackground: options.applyHeaderBackground
        })
      },

      '.header-logo-container': {
        mixin: headerLogoMixin({
          displayLarge: true,
          applyBackground: options.applyHeaderBackground
        })
      },

      '.header-mobile-navigation-container': {
        position: 'relative',
        top: 5,

        [media.large]: {
          display: 'none'
        },

        'ul': {
          display: 'flex',
          justifyContent: 'space-between',
          width: 90,
          margin: 0,

          '.search-icon': {
            fontSize: 30
          },

          '.header-navicon': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 23,
            marginTop: 4,

            [`.navicon-icon-first, 
              .navicon-icon-second, 
              .navicon-icon-third`]: {
              transition: '.3s ease-in-out',
              width: 38,
              height: 3.5,
              background: headerColor.linkDefault,
              borderRadius: 4
            },

            ':hover': {
              '.navicon-icon-first': {
                transform: 'translateY(-30%)'
              },

              '.navicon-icon-third': {
                transform: 'translateY(30%)'
              }
            }
          }
        }
      }
    }
  };

};

export default headerLayoutStyles;
