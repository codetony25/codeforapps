import codeRules from './rules/code_rules';
import frontLineRules from './rules/front_line_rules';
import wrapperRules   from './rules/wrapper_rules';

// For handling code blocks
let code = [];

/**
 * These are the rules that can't cross through new lines
 * @param str
 * @returns {string}
 */
const handleParagraphBlocks = (str) => {
  if (!str) return str;
  let secs = str.split('\n');
  secs = frontLineRules.parse(secs, frontLineRules.blockquote);
  secs = frontLineRules.parse(secs, frontLineRules.h1);
  secs = frontLineRules.parse(secs, frontLineRules.h2);
  secs = frontLineRules.parse(secs, frontLineRules.h3);
  secs = frontLineRules.parse(secs, frontLineRules.hr);
  secs = frontLineRules.parse(secs, frontLineRules.hrDouble);
  secs = frontLineRules.parse(secs, frontLineRules.hrThick);
  secs = frontLineRules.parse(secs, frontLineRules.tip);
  secs = frontLineRules.parse(secs, frontLineRules.warning);

  str = `<div class="paragraph">${secs.join('</div><div class=\"paragraph\">')}</div>`;
  
  str = wrapperRules.parse(str, wrapperRules.icon);
  str = wrapperRules.parse(str, wrapperRules.italic);
  str = wrapperRules.parse(str, wrapperRules.strike);
  str = wrapperRules.parse(str, wrapperRules.strong);

  return str;

};

const handleCodeRules = (str) => {
  if (!str) return str;
  let moreToReplace = true;
  while (moreToReplace) {
    let idx1 = str.indexOf('```');
    let idx2 = str.indexOf('```', idx1 + 3);

    // if codeblock found
    if (idx1 < idx2) {
      // grab the complete code string with ticks and language
      let codeStr = str.slice(idx1, idx2+4);

      // grab the language and filename if they exist from the top
      let lang = '';
      let file = '';
      let topStr = (codeStr.match(/```(.+)\n/) || [])[1];
      if (topStr) {
        const idx1 = topStr.indexOf('[');
        const idx2 = topStr.indexOf(']');
        if (idx1 < idx2) {
          file = topStr.slice(idx1+1,idx2);
        }
        lang = topStr.replace(`[${file}]`, '');
      }

      // create the language and filename spans
      let langSpan = '';
      if (lang) {
        langSpan = `<span class="language ${lang.toLowerCase()}">${lang}</span>`;
      }
      let fileSpan = '';
      if (file) {
        fileSpan = `<span class="file ${lang.toLowerCase()}">${file}</span>`;
      }
      // replace the code string with an internal marker in the original string
      str = str.replace(codeStr, '[%-!code' + code.length + '!-%]');

      // clean up the code string before passing it to the codeRules highlighter
      codeStr = codeStr.replace(topStr, '');
      codeStr = codeStr.replace('```','');
      codeStr = codeStr.replace('```','');

      // push the highlight result into the code global
      code.push(`
        <div class="codeblock">
          <span class="title-bar">
            ${langSpan}
            ${fileSpan}
          </span>
          <pre>
            ${codeRules.parse(codeStr, lang)}
          </pre>
        </div>`);
    } else {
      moreToReplace = false;
    }
  }
  console.log(code);
  return str;
};

const handleInternalMarkers = (str) => {
  // For each item in code[], replace our internal marker with it
  // our internal marker for code is [%-!code#!-%] where # is the index in
  // the code array.
  code.forEach((c, i) => str = str.replace(`[%-!code${i}!-%]`, c));
  code = [];
  return str;
};

export const mark = (str) => {

  // First we're going to check for code, pull them out and replace them with internal
  // markers to their location, so that they don't get munged by other rules
  str = handleCodeRules(str);
  // Now run our rules that are bound by paragraph
  str = handleParagraphBlocks(str);
  // Now we can replace our internal markers
  str = handleInternalMarkers(str);

  console.log(str);
  // Return the result
  return str;
};
