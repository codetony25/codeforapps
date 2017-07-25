import { authColor } from '../../../styles/shared/scheme.style';
import { font } from '../../../styles/shared/variables.style';
import { fontMixin } from '../../../styles/shared/mixin.style';

const listItemAuthBlockStyle = {
  '.list-item-auth-list': {
    mixin: fontMixin({
      fontFamily: font.primary.normal,
      fontSize: font.size.extraSmall
    }),
    paddingBottom: 15,
    '.icon': {
      paddingRight: 18,
      position: 'relative',
      top: 7,
      fontSize: 40,
      color: authColor.icon
    }
  }
};

export default listItemAuthBlockStyle;
