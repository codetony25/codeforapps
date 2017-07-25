import hljs from 'highlight.js';

const codeRules = {
  parse: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {
    }

    return ''; // use external default escaping
  }
};

export default codeRules;