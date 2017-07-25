import { ionify } from './ionify';

export const remarkableIon = (md) => {
  md.ion = md.ion || {};
  md.block.ruler.after('htmlblock', 'ion', ionify(md), {alt: []});
  return '';
};