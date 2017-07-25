import { font } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const everlibFormatStyles = {

  // Everlib Formatting
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
  }

};

export default everlibFormatStyles;
