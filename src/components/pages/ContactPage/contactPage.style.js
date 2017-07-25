import { flexDeadCenterPadding } from '../../../styles/shared/mixin.style';

const contactView = () => {
  return {
    '.contact-view': {
      mixin: flexDeadCenterPadding(),
      '&.container': {
        paddingTop: 120
      }
    }
  };
};

export default contactView;
