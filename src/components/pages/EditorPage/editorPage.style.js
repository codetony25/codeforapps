import { font, media } from '../../../styles/shared/variables.style';
import { editorColor } from '../../../styles/shared/scheme.style';
import {
  fontMixin,
  fontResponsive
} from '../../../styles/shared/mixin.style';

const editorPageStyle = () => {
  return {
    'html': {
      overflowY: 'hidden'
    },
    '.book-edit-view': {
      display: 'inline-block',
      marginLeft: 68,
      marginBottom: -35
    },
    '.main-book-content-wrapper': {
      minWidth: '100%'
    },
    '.main-sidebar-wrapper': {
      display: 'inline-block',
      width: 250,
      marginTop: 54,
      marginLeft: 12
    },
    '.book-edit-main-container': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      marginTop: 50,
      background: editorColor.bgLight,
      border: `1px solid ${editorColor.border}`,
      margin: '60px 10px 40px 10px',
      paddingBottom: 20
    },
    '.book-edit-main-content': {
      position: 'absolute',
      background: editorColor.bgLight,
      transition: '0.7s',
      height: '100%',
      right: 0,
      flexWrap: 'wrap',
      top: 0,
      left: 0,
      zIndex: 100,
      borderLeft: `1px solid ${editorColor.border}`,
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 56,
      overflowY: 'auto',
      overflowX: 'hidden',
      [media.medium]: {
        left: 330
      }
    },
    '.chapter-title-container': {
      zIndex: 50,
      width: '96%',
      textAlign: 'center',
      position: 'relative',
      cursor: 'text',
      [media.medium]: {
        width: '96%',
        margin: '0 auto'
      },
      // '.chapter-title-label': {
      //   mixin: [
      //     fontMixin({
      //       fontFamily: font.primary.bold
      //     }),
      //     fontResponsive({
      //       maxSize: 38,
      //       minSize: 25
      //     })
      //   ],
      //   float: 'left',
      //   color: editorColor.title,
      //   position: 'relative',
      //   top: 31,
      //   left: 27,
      //
      //   '::before': {
      //     content: `'\\f2bf'`,
      //     fontFamily: 'Ionicons',
      //     fontSize: 19,
      //     marginRight: 12,
      //     color: editorColor.titleIcon,
      //     position: 'relative',
      //     bottom: 3
      //   }
      // },
      '.main-content-chapter-title-input': {
        mixin: fontResponsive({
          maxSize: 38,
          minSize: 25,
          fontWeight: font.weight.extraBold
        }),
        padding: 17,
        color: editorColor.chapterText,
        transition: '0.5s',
        background: 'transparent',
        cursor: 'text',
        textAlign: 'center',
        marginLeft: 14,
        marginTop: 14,
        ':focus': {
          color: editorColor.titleInputHover
        },
        ':hover': {
          color: editorColor.titleInputFocus
        }
      }
    },
    '.book-edit-stats': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      zIndex: 100,
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: editorColor.bgLight,
      borderTop: `1px solid ${editorColor.border}`,
      'p': {
        flexGrow: 1,
        color: editorColor.chapterSavedText,
        margin: 0,
        textAlign: 'right',
        fontSize: 12,
        minWidth: 150,
        paddingTop: 8,
        paddingRight: 15
      },
      'span': {
        mixin: fontMixin({ fontFamily: font.primary.normal }),
        fontSize: 12,
        padding: 8,
        flexGrow: 10
      }
    },
    '.book-edit-sidebar-chapters': {
      position: 'absolute',
      transition: '.7s',
      height: '100%',
      top: 0,
      left: 0,
      paddingTop: 56,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      [media.medium]: {
        left: 80
      },
      '.chapter-search': {
        borderBottom: `1px solid ${editorColor.border}`,
        textAlign: 'center',
        minHeight: 50,
        position: 'relative',
        zIndex: 100,
        background: editorColor.bgLight,
        'input': {
          mixin: fontMixin({
            fontFamily: font.primary.normal,
            fontSize: font.size.tiny
          }),
          background: editorColor.inputBg,
          padding: 8,
          borderRadius: 3,
          width: 215,
          position: 'relative',
          top: 8
        },
        '.icon': {
          position: 'absolute',
          fontSize: 20,
          transform: 'translate(-140%, 53%)',
          cursor: 'pointer',
          color: editorColor.titleIcon
        }
      },
      'ul': {
        margin: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100%',
        marginBottom: 42,
        position: 'relative',
        bottom: 3,
        boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.20)',
        'li': {
          mixin: fontMixin({
            fontFamily: font.primary.bold,
            fontSize: font.size.tiny
          }),
          borderBottom: `1px solid ${editorColor.border}`,
          borderRight: 'none',
          padding: 16,
          transition: '.5s',
          width: 250,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          '.icon': {
            cursor: 'move',
            marginRight: 10
          },
          '::after': {
            fontFamily: 'FontAwesome',
            content: `'\\f044'`,
            float: 'right',
            transition: '0.5s',
            fontSize: 16,
            position: 'relative',
            color: editorColor.editIcon,
            top: 2,
            opacity: 0
          },
          '&.highlight': {
            background: editorColor.chapterHover,
            color: editorColor.chapterText
          },
          ':hover': {
            background: editorColor.chapterHover,
            '::after': {
              opacity: 0.6
            }
          }
        }
      },
      '.chapter-action-icons': {
        position: 'absolute',
        bottom: 0,
        fontSize: 25,
        width: '100%',
        borderTop: `2px solid ${editorColor.border}`,
        background: editorColor.bgLight,
        padding: '7px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        '.icon': {
          cursor: 'pointer'
        },
        '.btn-success': {
          padding: '0.5rem 1rem',
          fontSize: '0.7rem'
        },
        '.btn-danger': {
          padding: '0rem 1rem',
          fontSize: '0.9rem'
        }
      }
    }
  };
};

export default editorPageStyle;
