const wrapperRules = {
  parse: (str, rule) => {
    if (!str) return str;
    let moreToReplace = true;
    while (moreToReplace) {
      let idx1 = str.indexOf(rule.begin);
      let idx2 = str.indexOf(rule.end, idx1 + rule.begin.length);

      if (idx1 < idx2) {
        str = str.replace(rule.begin,rule.newBegin);
        str = str.replace(rule.end,rule.newEnd);
      } else {
        moreToReplace = false;
      }
    }
    return str;
  },
  icon: {
    begin: `[icon="`,
    end: `"]`,
    newBegin: `<i class="icon `,
    newEnd: `" ></i>`
  },
  italic: {
    begin: '_',
    end: '_',
    newBegin: `<div class="italic">`,
    newEnd: '</div>'
  },
  strike: {
    begin: '~~',
    end: '~~',
    newBegin: `<div class="strike">`,
    newEnd: '</div>'
  },
  strong: {
    begin: '**',
    end: '**',
    newBegin: `<div class="strong">`,
    newEnd: '</div>'
  }

};

export default wrapperRules;