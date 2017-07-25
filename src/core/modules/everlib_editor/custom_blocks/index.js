import React from 'react';

// Can't use import syntax with Immutable :(
const Immutable = require('immutable');

// Import special custom block renders
import Wrapper from './wrapper.jsx';
import Code from './code.jsx';

// This will get mixed with the defaultBlockRenderMap to make
// custom block styles.
export class customBlockRenderMap extends React.Component {

  render() {
    return (
      Immutable.Map({
        'align-center': {
          element: 'div'
        },
        'align-justify': {
          element: 'div'
        },
        'align-left': {
          element: 'div'
        },
        'align-right': {
          element: 'div'
        },
        'blockquote': {
          element: 'div',
          wrapper: <blockquote {...this.props} />
        },
        'code': {
          element: 'div',
          wrapper: <Code {...this.props} />
        },
        'information': {
          element: 'div',
          wrapper: <Wrapper className="tip" {...this.props} />
        },
        'warning': {
          element: 'div',
          wrapper: <Wrapper className="warning" {...this.props} />
        }
      })
    );
  }

}

// This adds class names on to custom block styles
export const blockStyleFn = (block) => {
  // Let's do a hash lookup instead of a bunch of nested if's for performance
  // key: blockType, value: className
  const blockTypeHash = {
    'align-center': 'align-center',
    'align-justify': 'align-justify',
    'align-left': 'align-left',
    'align-right': 'align-right',
    'information': 'text',
    'warning': 'text'
  };
  const blockType = block.getType();

  return blockTypeHash[blockType];
};
