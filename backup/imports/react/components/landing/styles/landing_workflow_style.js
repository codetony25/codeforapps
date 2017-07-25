import { landingColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const landingWorkflowStyles = () => {
  return {
    '.landing-workflow': {
      background: landingColor.bgMedium,
      padding: '75px 0',

      '.workflow-header-container': {
        textAlign: 'center',

        'h2': {
          mixin: fontMixin({
            fontFamily: font.primary.thin,
            fontSize: font.size.extraLarge
          }),
          color: landingColor.textHeader,
          margin: 0,

          '.title-bold': {
            mixin: fontMixin({
              fontFamily: font.primary.extraBold,
              fontSize: font.size.extraLarge
            })
          }
        },

        'h5': {
          mixin: fontMixin({
            fontFamily: font.primary.semiBold,
            fontSize: font.size.small
          }),
          color: landingColor.textBody,
          margin: 0,
          paddingTop: 10
        }
      },

      '.workflow-list-container': {

        [media.small]: {
          display: 'flex',
          justifyContent: 'center'
        },

        'ul': {
          paddingTop: 330,
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: 890,
          position: 'relative',
          margin: '-40px',

          [media.small]: {
            margin: 0,
            padding: '45px 0'
          },

          'li': {
            transform: 'rotate(-90deg)',

            [media.small]: {
              transform: 'rotate(0deg)'
            },

            'a': {
              mixin: fontMixin({
                fontFamily: font.primary.bold,
                fontSize: font.size.tiny
              }),
              textTransform: 'uppercase',
              background: landingColor.bg,
              padding: 30,
              transition: '.3s',
              borderRadius: '3px',
              position: 'absolute',
              border: `1px solid $P`,
              textShadow: `-1px 0 4px ${landingColor.textShadow}`,
              minWidth: 250,

              ':hover': {
                background: landingColor.bgCircleHover
              },

              ':focus': {
                background: landingColor.bgCircleHover
              },

              '&.active': {
                background: landingColor.bgCircleActive
              },

              [media.small]: {
                cursor: 'pointer',
                textTransform: 'lowercase',
                border: 'none',
                textAlign: 'center',
                height: 30,
                width: 30,
                borderRadius: '50%',
                position: 'static',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 1px 3px rgba(0, 0, 0, .2)',
                padding: 60,
                fontFamily: font.primary.bold,
                fontSize: font.size.extraSmall,
                minWidth: 0,
                transform: 'rotate(0deg)',

                ':hover': {
                  transform: 'scale(1.1)'
                },

                ':active': {
                  background: landingColor.bgCircleActive
                }
              }
            }
          }
        }
      },

      '.workflow-details-container': {
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 2rem 0 2rem',

        [media.small]: {
          paddingTop: 0
        }
      },

      '.workflow-signup-details-container': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column-reverse',

        [media.medium]: {
          flexDirection: 'row'
        },

        '.workflow-signup-display': {

        },

        '.workflow-signup-details': {
          paddingTop: 15,

          [media.medium]: {
            paddingTop: 0,
            paddingLeft: 30,
            maxWidth: 350
          },

          'h5': {
            mixin: fontMixin({
              fontFamily: font.primary.normal,
              fontSize: font.size.medium
            }),
            color: landingColor.textHeader,
            margin: 0,
            paddingBottom: 15
          },

          'p': {
            mixin: fontMixin({
              fontFamily: font.primary.normal,
              fontSize: font.size.extraSmall
            }),
            color: landingColor.textBody,
            margin: 0,
            paddingBottom: 15,

            'a': {
              color: landingColor.link
            }
          }
        }
      }
    }
  };

};

export default landingWorkflowStyles;
