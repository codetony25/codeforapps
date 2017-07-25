import { authColor } from '../../../styles/shared/scheme.style';
import { font } from '../../../styles/shared/variables.style';
import { fontResponsive } from '../../../styles/shared/mixin.style';

const listAuthBlockStyle = {
  '.list-auth-block-container': {
    mixin: fontResponsive({
      fontFamily: font.primary.bold,
      maxSize: font.size.tiny,
      minSize: font.size.extraSmall
    }),
    paddingTop: 18,
    color: authColor.textBody
  }
};

export default listAuthBlockStyle;
