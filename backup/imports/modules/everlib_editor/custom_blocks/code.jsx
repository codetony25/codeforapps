import hljs from 'highlight.js';
import React from 'react';

class Code extends React.Component {

  constructor(props) {
    super(props);
  }

  highlight = (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
        // Do nothing on error

      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {
      // Do nothing on error
    }
  };

  render() {
    console.log('CODE BLOCK PROPS: ', this.props);
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }

}

export default Code;