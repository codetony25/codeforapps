import {
  font
} from '/imports/react/styles/variables';
import { media } from '/imports/react/styles/variables';
import { bookEditorColor } from '/imports/react/styles/scheme';
import {
  fontMixin
} from '/imports/react/styles/mixins';

const editorStyles = {
  '.everlib-editor': {
    mixin: [
      fontMixin({
        fontFamily: font.primary.normal
      })
    ],
    background: bookEditorColor.bgLight,
    width: '100%',
    cursor: 'text',
    flexGrow: 1,
    padding: '20px 15px 12px 15px',
    position: 'relative',
    bottom: 30,
    height: '100%',
    marginBottom: 12,

    [media.medium]: {
      width: '96%',
      margin: '15px auto 0 auto'
    }
  },

  '.everlib-editor-toolbar': {
    background: bookEditorColor.bgLight,
    color: bookEditorColor.toolbarIcon,
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    borderBottom: `1px solid ${bookEditorColor.border}`,

    '.toolbar-container-dropdown': {
      display: 'inline-block',

      '.fa-sort-desc': {
        position: 'relative',
        bottom: 7,
        left: 5,
        fontSize: 14
      },

      '.toolbar-btn': {

        '&.active': {
          background: bookEditorColor.toolbarDropDownActiveIconBg,
          color: bookEditorColor.toolbarDropDownActiveIconText
        }
      },

      '.toolbar-dropdown': {
        cursor: 'pointer',
        opacity: 1,
        zIndex: 100,

        ['h1, h2, h3, h4']: {
          margin: 0
        },

        'li': {
          mixin: [
            fontMixin({
              fontFamily: font.primary.normal,
              fontSize: font.size.extraSmall
            })
          ],
          transition: '0.5s',
          padding: 13,
          textAlign: 'left',

          '.fa': {
            marginRight: 6
          },

          ':hover': {
            background: bookEditorColor.toolbarDropDownHoverBg
          },

          '&.active': {
            background: bookEditorColor.toolbarDropDownActiveIconBg,
            color: bookEditorColor.toolbarDropDownActiveText
          }
        }
      },

      '.ion-ios-arrow-down': {
        marginLeft: 3
      }
    },

    '.tool-font-group': {
      '.toolbar-dropdown li': {
        padding: 6,

        ':hover': {
          background: bookEditorColor.toolbarDropDownHoverBg
        }
      },

      '.toolbar-btn': {
        '&.active': {
          background: bookEditorColor.toolbarDropDownActiveBg,
          color: bookEditorColor.toolbarDropDownActiveText
        }
      }
    },

    '.tool-list-group': {
      display: 'none',

      [media.large]: {
        display: 'inline-block',
        borderRight: `1px solid ${bookEditorColor.border}`
      }
    },

    '.align-list-group': {
      display: 'none',

      [media.large]: {
        display: 'inline-block',
        borderRight: `1px solid ${bookEditorColor.border}`
      },

      '.toolbar-dropdown': {
        marginLeft: -17,
        marginTop: 16
      }
    },

    '.toolbar-more': {
      borderRight: `1px solid ${bookEditorColor.border}`,

      '.toolbar-dropdown': {
        left: 0,
        textAlign: 'center',
        margin: '15px 10% 0 3%',

        [media.medium]: {
          margin: '10px 0 0 0'
        },

        [media.large]: {
          left: 'initial'
        },

        'ul': {
          display: 'block',
          textAlign: 'center',

          [media.large]: {
            paddingRight: 0
          }
        },

        'ul:last-child': {
          paddingRight: 0
        },

        'li': {
          display: 'inline-block',
          verticalAlign: 'top',

          '.fa': {
            fontSize: 30
          },

          '.icon': {
            fontSize: 30
          }
        }
      }
    },

    '.mobile-align-group': {
      display: 'inline-block',

      [media.large]: {
        display: 'none !important'
      }
    },

    '.mobile-list-group': {
      display: 'inline-block',

      [media.large]: {
        display: 'none !important'
      }
    },

    '.toolbar-fullscreen': {
      display: 'none',

      [media.large]: {
        display: 'inline-block'
      }
    },

    '.toolbar-container-middle': {
      display: 'inline-block'
    },

    '.toolbar-container-right': {
      float: 'right'
    }
  }

};

export default editorStyles;
