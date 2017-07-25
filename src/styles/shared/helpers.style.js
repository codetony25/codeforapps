import tinycolor from 'tinycolor2';

export default {
  darken: (color, percentage) =>
    tinycolor(color).darken(percentage).toHexString(),
  lighten: (color, percentage) =>
    tinycolor(color).lighten(percentage).toHexString(),
  rgb: (color) =>
    tinycolor(color).toRgbString(),
  rgba: (color, percentage) =>
    tinycolor(color).setAlpha(percentage).toRgbString(),
  hsl: (color) =>
    tinycolor(color).toHslString(),
  hsla: (color, percentage) =>
    tinycolor(color).setAlpha(percentage).toHslString(),
  desaturate: (color, percentage) =>
    tinycolor(color).desaturate(percentage).toString(),
  saturate: (color, percentage) =>
    tinycolor(color).saturate(percentage).toString(),
  spin: (color, percentage) =>
    tinycolor(color).spin(percentage).toString(),
  complement: (color) =>
    tinycolor(color).complement().toHexString(),
  randomizeColor: tinycolor.random(),
  getAnalogous: (color) => color.analogous(),
  getMonochromatic: (color) => color.monochromatic(),
  getSplitComplement: (color) => color.splitcomplement(),
  getTriad: (color) => color.triad(),
  getTetrad: (color) => color.tetrad()
};
