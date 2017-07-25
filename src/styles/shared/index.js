import helpers from './helpers.style';
import mixins from './mixin.style';
import schemes from './scheme.style';
import variable from './variables.style';
import animation from './animations.style';

const { ...color } = helpers;
const { ...mixin } = mixins;
const { ...scheme } = schemes;
const { ...variables } = variable;
const { ...animations } = animation;

export default {
  color,
  mixin,
  scheme,
  variables,
  animations
};
