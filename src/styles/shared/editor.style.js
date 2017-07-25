import { font, media } from '../../styles/shared/variables.style';
import { fontMixin } from '../../styles/shared/mixin.style';
import { editorColor } from '../../styles/shared/scheme.style';

const editorStyle = () => {
  return {
    '.everlib-format': {
      '.align-center': {
        textAlign: 'center'
      },
      '.align-justify': {
        textAlign: 'justify'
      },
      '.align-left': {
        textAlign: 'left'
      },
      '.align-right': {
        textAlign: 'right'
      },
      '.strong': {
        fontWeight: font.weight.bold
      },
      '.italic': {
        fontStyle: 'italic'
      },
      '.strike': {
        textDecoration: 'line-through'
      },
      '.icon': {
        fontSize: 22
      },
      '.title': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.extraLarge
        })
      },
      '.subtitle': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.large
        })
      },
      '.section': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.medium
        })
      },
      '.warning': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        background: '#fff',
        borderLeft: '50px solid #efefef',
        margin: '40px 10px',
        padding: '0.5em 10px',
        display: 'block',
        position: 'relative',
        boxShadow: [
          '0 1px 3px rgba(0,0,0,.12)',
          '0 1px 2px rgba(0,0,0,.24)'
        ],
        '.text': {
          display: 'block',
          padding: 13,
          '::before': {
            fontFamily: 'Ionicons',
            content: `'\\f3bc'`,
            color: '#FFA500',
            fontSize: 35,
            position: 'absolute',
            left: -40,
            top: 8
          }
        }
      },
      '.tip': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny
        }),
        background: '#fff',
        borderLeft: '50px solid #efefef',
        margin: '40px 10px',
        padding: '0.5em 10px',
        display: 'block',
        position: 'relative',
        boxShadow: [
          '0 1px 3px rgba(0,0,0,.12)',
          '0 1px 2px rgba(0,0,0,.24)'
        ],
        '.text': {
          display: 'block',
          padding: 13,
          '::before': {
            fontFamily: 'Ionicons',
            content: `'\\f149'`,
            color: '#00bcd4',
            fontSize: 32,
            position: 'absolute',
            left: -40,
            top: 8
          }
        }
      },
      '.line': {
        borderTop: '1px solid #212121',
        borderBottom: '1px solid #fff'
      },
      '.line-dotted': {
        borderTop: '1px dotted #212121'
      },
      '.line-double': {
        borderTop: '3px double #212121'
      },
      'p': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: 15,
          lineHeight: 23
        }),
        paddingLeft: 15,
        paddingRight: 15
      },
      'blockquote': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.extraSmall,
          fontStyle: 'italic'
        }),
        boxShadow: [
          '0 1px 3px rgba(0,0,0,.12)',
          '0 1px 2px rgba(0,0,0,.24)'
        ],
        background: '#fff',
        borderLeft: '10px solid #ccc',
        margin: '40px 10px',
        padding: '0.5em 10px',
        quotes: `"\\201C""\\201D""\\2018""\\2019"`,
        '.text': {
          display: 'block',
          position: 'relative',
          bottom: 19,
          padding: '0 25px',
          lineHeight: '25px'
        },
        '::before': {
          color: '#ccc',
          content: 'open-quote',
          fontSize: '6em',
          lineHeight: '0.1em',
          position: 'relative',
          top: 6,
          fontWeight: font.weight.bold,
          fontFamily: 'sans-serif'
        }
      },
      '.codeblock': {
        boxShadow: [
          '0 1px 3px rgba(0,0,0,.12)',
          '0 1px 2px rgba(0,0,0,.24)'
        ],
        '.title-bar': {
          display: 'flex',
          justifyContent: 'space-between',
          background: '#00bcd4',
          padding: 7,
          '.language': {
            mixin: fontMixin({
              fontFamily: font.primary.bold
            }),
            color: 'white',
            textTransform: 'uppercase',
            paddingLeft: 6
          },
          '.file': {
            mixin: fontMixin({
              fontFamily: font.primary.bold,
              fontStyle: 'italic'
            }),
            color: 'white'
          }
        },
        'pre': {
          mixin: fontMixin({
            fontFamily: font.secondary.mono,
            fontSize: font.size.tiny
          }),
          padding: 8
        }
      }
    },
    '.everlib-editor': {
      mixin: [
        fontMixin({
          fontFamily: font.primary.normal
        })
      ],
      background: editorColor.bgLight,
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
      background: editorColor.bgLight,
      color: editorColor.toolbarIcon,
      position: 'absolute',
      width: '100%',
      zIndex: 100,
      borderBottom: `1px solid ${editorColor.border}`,
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
            background: editorColor.toolbarDropDownActiveIconBg,
            color: editorColor.toolbarDropDownActiveIconText
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
              background: editorColor.toolbarDropDownHoverBg
            },
            '&.active': {
              background: editorColor.toolbarDropDownActiveIconBg,
              color: editorColor.toolbarDropDownActiveText
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
            background: editorColor.toolbarDropDownHoverBg
          }
        },
        '.toolbar-btn': {
          '&.active': {
            background: editorColor.toolbarDropDownActiveBg,
            color: editorColor.toolbarDropDownActiveText
          }
        }
      },
      '.tool-list-group': {
        display: 'none',
        [media.large]: {
          display: 'inline-block',
          borderRight: `1px solid ${editorColor.border}`
        }
      },
      '.align-list-group': {
        display: 'none',
        [media.large]: {
          display: 'inline-block',
          borderRight: `1px solid ${editorColor.border}`
        },
        '.toolbar-dropdown': {
          marginLeft: -17,
          marginTop: 16
        }
      },
      '.toolbar-more': {
        borderRight: `1px solid ${editorColor.border}`,
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
};

export default editorStyle;
