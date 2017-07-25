import { authColor } from '../../../styles/shared/scheme.style';
import { font, media } from '../../../styles/shared/variables.style';
import { fontResponsive } from '../../../styles/shared/mixin.style';

const descriptionAuthBlockStyle = {
  '.description-auth-block-container': {
    display: 'none',
    [media.large]: {
      display: 'inline-block',
      paddingRight: 34.5
    },
    'h1': {
      mixin: fontResponsive({
        fontFamily: font.primary.extraBold,
        maxSize: font.size.medium,
        minSize: font.size.extraLarge
      }),
      color: authColor.textDefault,
      marginTop: 10
    },
    'p': {
      mixin: fontResponsive({
        fontFamily: font.primary.normal,
        maxSize: font.size.extraSmall,
        minSize: font.size.small
      }),
      color: authColor.textDefault
    }
  }
};

export default descriptionAuthBlockStyle;
