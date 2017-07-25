import React from 'react';
import { debounce } from 'lodash';
import { mark } from '../mark';

class Markdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markdownText: mark(this.props.text)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.text != nextProps.text) {
      this.debouncedMdRender(nextProps.text);
    }
  };

  debouncedMdRender = debounce((text) => {
    this.setState({ markdownText: mark(text) });
  }, 200);

  render() {
    return (
      <div
        className="markdown"
        dangerouslySetInnerHTML={{__html: this.state.markdownText}}>
      </div>
    );
  }
}

export default Markdown;