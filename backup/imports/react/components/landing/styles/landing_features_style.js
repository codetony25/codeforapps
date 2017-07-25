import { landingColor } from '/imports/react/styles/scheme';
import { font, media } from '/imports/react/styles/variables';
import { fontMixin } from '/imports/react/styles/mixins';

const landingFeaturesStyles = () => {
  return {
    '.landing-features-container': {
      background: landingColor.bgMedium,
      padding: '70px 0',

      [media.large]: {
        padding: '100px 0'
      },

      '.title': {
        mixin: fontMixin({
          fontFamily: font.primary.thin,
          fontSize: font.size.extraLarge
        }),
        color: landingColor.textHeader,
        textAlign: 'center',
        margin: 0
      },

      '.title-bold': {
        mixin: fontMixin({
          fontFamily: font.primary.extraBold,
          fontSize: font.size.extraLarge
        })
      }
    },

    '.landing-features-sub-title': {
      mixin: fontMixin({
        fontFamily: font.primary.semiBold,
        fontSize: font.size.small
      }),
      padding: '20px 0 0 0',
      margin: 0,
      textAlign: 'center',
      color: landingColor.textBody,

      [media.large]: {
        paddingBottom: 0
      }
    },

    '.landing-features-key-container': {
      textAlign: 'center',
      paddingTop: 30
    },

    '.landing-features-image-container': {
      display: 'inline-block',
      paddingBottom: 40,

      [media.large]: {
        paddingBottom: 0
      },

      'img': {
        width: '100%',
        transform: 'translateZ(0)',

        [media.small]: {
          width: 466
        },

        [media.large]: {
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    },

    '.landing-features-section': {
      width: '100%',
      padding: 20,

      [media.large]: {
        width: 275,
        display: 'inline-block'
      }
    },

    '.landing-features-section-container': {
      width: '80%',
      margin: '0 auto',
      paddingBottom: 40,

      [media.medium]: {
        display: 'flex',
        width: '100%'
      },

      [media.large]: {
        margin: 0,
        paddingBottom: 0,
        justifyContent: 'space-between'
      },

      'h2': {
        mixin: [
          fontMixin({
            fontFamily: font.primary.extraBold,
            fontSize: font.size.medium
          })
        ],
        margin: '10px 0',
        color: landingColor.textHeader
      },

      'h5': {
        mixin: fontMixin({
          fontFamily: font.primary.normal,
          fontSize: font.size.tiny,
          lineHeight: 22
        }),
        margin: 0,
        color: landingColor.textBody
      }
    }
  };
};

export default landingFeaturesStyles;
