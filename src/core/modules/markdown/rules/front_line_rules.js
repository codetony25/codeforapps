const frontLineRules = {
  parse: (secs, rule) => {

    let newSecs = [];
    let str = '';

    secs.forEach((s, i) => {
      // Current section does not match rule:
      if (s.indexOf(rule.begin) !== 0) {
        if (str) {
          newSecs.push(str + rule.wrapEnd);
          str = '';
        }
        newSecs.push(s);
      }
      // If there is a current match to the rule
      else {
        // if there's a previous match, add this on to that
        if (str) {
          str += s.replace(rule.begin, rule.innerBegin) + rule.innerEnd;
        }
        else {
          str += s.replace(rule.begin, rule.wrapBegin + rule.innerBegin) + rule.innerEnd;
        }
        // If we're done with all the sections
        if (secs.length == i+1) {
          newSecs.push(str + rule.wrapEnd);
        }
      }
    });

    return newSecs;
  },
  blockquote: {
    begin: '> ',
    wrapBegin: `<blockquote>`,
    wrapEnd: `</blockquote>`,
    innerBegin: `<div class="text">`,
    innerEnd: `</div>`
  },
  h1: {
    begin: '# ',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: `<div class="title">`,
    innerEnd: `</div>`
  },
  h2: {
    begin: '## ',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: `<div class="subtitle">`,
    innerEnd: `</div>`
  },
  h3: {
    begin: '### ',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: `<div class="section">`,
    innerEnd: `</div>`
  },
  hr: {
    begin: '---',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: ``,
    innerEnd: `<hr class="line-dotted" />`
  },
  hrThick: {
    begin: '___',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: ``,
    innerEnd: `<hr class="line" />`
  },
  hrDouble: {
    begin: '***',
    wrapBegin: ``,
    wrapEnd: ``,
    innerBegin: ``,
    innerEnd: `<hr class="line-double" />`
  },
  tip: {
    begin: '++ ',
    wrapBegin: `<div class="tip">`,
    wrapEnd: `</div>`,
    innerBegin: `<div class="text">`,
    innerEnd: `</div>`
  },
  warning: {
    begin: '!! ',
    wrapBegin: `<div class="warning">`,
    wrapEnd: `</div>`,
    innerBegin: `<div class="text">`,
    innerEnd: `</div>`
  }

};

export default frontLineRules;