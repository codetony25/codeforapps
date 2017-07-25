import { sidebarColor } from '/imports/react/styles/scheme';
import { font } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

export const sidebarLayoutStyles = () => {
  return {
    '.sidebar-layout-container': {
      background: sidebarColor.bg,
      position: 'fixed',
      zIndex: 100,
      height: '100%',
      width: 300,
      top: 0,
      transition: 'all .5s',
      padding: '2.5em 1.5em 0',

      '.ion-close': {
        color: sidebarColor.textDefault,
        cursor: 'pointer',
        fontSize: '1.3rem',
        float: 'right',
        transition: '.3s',
        position: 'relative',
        bottom: 15,

        ':hover': {
          color: sidebarColor.textHover
        }
      },

      '.sidebar-layout-context-header': {
        mixin: fontMixin({
          fontFamily: font.primary.extraBold,
          fontSize: font.size.large
        }),
        paddingTop: 20,
        textAlign: 'center',
        color: sidebarColor.textHeader
      }
    },

    '.sidebar-overlay': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 60,
      top: -75,
      background: 'rgba(33, 33, 33, 0.4)'
    },

    '.sidebar-link li': {
      borderBottom: `1px solid ${sidebarColor.border}`
    },

    '.sidebar-link a': {
      mixin: fontMixin({
        fontFamily: font.primary.bold,
        fontSize: font.size.extraSmall
      }),
      display: 'block',
      padding: '15px 0',
      transition: '.3s',
      color: sidebarColor.textDefault,

      ':hover': {
        color: sidebarColor.textHover,
        paddingLeft: 3
      }
    }
  }
};

export default sidebarLayoutStyles;
