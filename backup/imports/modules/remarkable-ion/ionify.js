import { setIon } from './setIon';

export const ionify = (md) => {
  return ion.bind(null, md);
};

function get(state, line) {
  var pos = state.bMarks[line];
  var max = state.eMarks[line];
  return state.src.substr(pos, max - pos);
}

function ion(md, state, start, end) {
  if (start !== 0 || state.blkIndent !== 0) {
    return false;
  }
  if (state.tShift[start] < 0) {
    return false;
  }
  var data = [];
  for (var line = start; line < end; line++) {
    var str = get(state, line);
    if (str.match(/^---$/)) {
      break;
    }
    if (state.tShift[line] < 0) {
      break;
    }
    data.push(setIon(str));
  }


  state.src = data.join('\n') || {};

  if (line >= end) {
    return false;
  }
  state.line = line + 1;
  return true;
}