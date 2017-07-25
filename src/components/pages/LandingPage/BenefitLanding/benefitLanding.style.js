import { landingColor } from '../../../../styles/shared/scheme.style';
import { font, media } from '../../../../styles/shared/variables.style';
import { fontMixin } from '../../../../styles/shared/mixin.style';

const benefitLandingStyle = () => {
  return {
    '.benefit-container': {
      background: landingColor.bgLight,
      padding: '45px 0',
      '.container': {
        display: 'block',
        [media.large]: {
          textAlign: 'left',
          display: 'flex',
          padding: '70px 0'
        }
      }
    },
    '.benefit-title-container': {
      textAlign: 'center',
      [media.small]: {
        paddingBottom: 30
      },
      [media.large]: {
        textAlign: 'left',
        maxWidth: 560
      },
      [media.extraLarge]: {
        maxWidth: 815
      },
      'h2': {
        mixin: fontMixin({
          fontFamily: font.primary.thin,
          fontSize: font.size.extraLarge
        }),
        margin: 0,
        color: landingColor.textHeader,
        'span': {
          mixin: fontMixin({
            fontFamily: font.primary.extraBold,
            fontSize: font.size.extraLarge
          })
        }
      },
      'h5': {
        mixin: fontMixin({
          fontFamily: font.primary.semiBold,
          fontSize: font.size.medium
        }),
        marginTop: 10,
        color: landingColor.textBody
      },
      '.description': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.extraSmall
        }),
        color: landingColor.textBody,
        marginBottom: 40,
        paddingRight: 15,

        [media.large]: {
          padding: 0
        }
      }
    },
    '.benefit-list-container': {
      paddingLeft: 45,
      width: '100%',
      [media.extraLarge]: {
        paddingRight: 150
      },
      [media.large]: {
        padding: '24px 65px 0 0'
      },
      [media.small]: {
        padding: 0
      },
      'ul': {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
        padding: 0,
        margin: '0 auto',
        [media.small]: {
          display: 'inline-block'
        },
        'li': {
          mixin: fontMixin({
            fontFamily: font.primary.normal,
            fontSize: font.size.extraSmall
          }),
          paddingBottom: 30,
          color: landingColor.textBody,
          '.icon': {
            marginRight: 15
          }
        },
        '&.first-list': {
          [media.large]: {
            paddingLeft: 0
          }
        },
        '&.second-list': {
          textAlign: 'left',
          display: 'inline-block',
          marginTop: 0,
          [media.small]: {
            float: 'right',
            position: 'relative',
            right: 28
          },
          [media.large]: {
            marginRight: 0
          }
        }
      }
    },
    '.benefit-image-container': {
      textAlign: 'center',
      padding: '32px 0 80px 0',
      'img': {
        width: '100%',
        transform: 'translateZ(0)',
        [media.medium]: {
          width: 510
        }
      }
    }
  };
};

export default benefitLandingStyle;
