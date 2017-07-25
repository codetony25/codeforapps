import { ionMap } from './ion-map';

export const setIon = (text) => {
  if (typeof text !== "string") {
    return;
  }
  let ion;
  let words = text.split(/[,. ]+/);
  words.forEach(function (word) {
    if (ionMap.hasOwnProperty(word)) {
      ion = ionMap[word];
      text = text.replace(word, ion);
    }
  });
  return text;
};