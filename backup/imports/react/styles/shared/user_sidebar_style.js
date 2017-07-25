import { font, media } from '/imports/react/styles/variables';
import { userSidebarColor } from '/imports/react/styles/scheme';
import { fontMixin } from '/imports/react/styles/mixins';

export const userSidebarStyles = () => {
  return {
    '.user-sidebar-layout': {
      minWidth: 250,
      transition: '0.7s',
      marginLeft: -218,
      height: '100%',

      [media.medium]: {
        marginLeft: 0
      },

      'h3': {
        mixin: fontMixin({
          fontFamily: font.primary.semiBold,
          fontSize: font.size.extraSmall
        }),
        background: userSidebarColor.headerBg,
        color: userSidebarColor.headerText,
        textAlign: 'left',
        margin: 0,
        padding: '15px 16px'
      },

      '.user-sidebar-images': {

        'p': {
          float: 'right'
        }
      },

      '.sidebar-content-block': {
        mixin: fontMixin({
          fontFamily: font.primary.normal
        }),
        padding: '12px 16px',
        borderBottom: `1px solid ${userSidebarColor.border}`,
        color: userSidebarColor.bodyText,
        lineHeight: '16px',
        fontSize: 14.5,

        'p': {
          mixin: fontMixin({
            fontFamily: font.primary.normal
          }),
          margin: 0,
          fontSize: 14,
          color: userSidebarColor.bodyText,
          padding: '4px 0 0',
          lineHeight: '16px'
        },

        'img': {
          width: 40
        }
      }
    },

    // Book Edit Sidebar
    '.user-sidebar-list-container': {
      textAlign: 'center',
      position: 'absolute',
      transition: '.7s',
      left: -100,
      top: 0,
      height: '100%',
      width: 80,
      background: userSidebarColor.bg,
      zIndex: 100,
      paddingTop: 50,
      overflow: 'auto',

      [media.medium]: {
        left: 0
      },

      'p': {
        mixin: fontMixin({
          fontFamily: font.primary.normal
        }),
        marginTop: 3,
        fontSize: 11,
        transition: '.7s',
        marginBottom: 0,
        paddingBottom: 8,
        color: userSidebarColor.navigationText
      },

      '.icon': {
        fontSize: 28,
        color: userSidebarColor.navigationText,
        transition: '.5s',
        cursor: 'pointer'
      },

      '::-webkit-scrollbar': {
        display: 'none'
      },

      'div': {
        padding: '8px 4px 8px 0',
        cursor: 'pointer',
        transition: '.1s',

        '&.active': {
          background: userSidebarColor.bgActive,
          borderLeft: `2px solid ${userSidebarColor.borderActiveBg}`,

          '.icon': {
            color: userSidebarColor.navigationIconActiveBg
          },

          'p': {
            color: userSidebarColor.navigationTextActive
          }
        },

        ':hover': {
          background: userSidebarColor.navigationHoverBg,

          'p': {
            color: userSidebarColor.navigationTextHover
          },

          '.icon': {
            color: userSidebarColor.navigationIconHoverBg
          }
        }
      }
    }
  };

};

export default userSidebarStyles;
