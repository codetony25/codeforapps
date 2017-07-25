import React from 'react';
import {
  AtomicBlockUtils,
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  BlockType,
  convertToRaw
} from 'draft-js';

import everlibFormatStyles
  from '/imports/react/styles/shared/everlib_format_style';
import { Style } from 'jassy';

import editorStyles from './everlib_editor_style';
import {
  customBlockRenderMap,
  blockStyleFn
} from './custom_blocks';
import {
  customStyleMap
} from './custom_inline';

class EverLibEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: editorStyles,
      format: everlibFormatStyles,
      blockRenderMap: DefaultDraftBlockRenderMap.merge(
        customBlockRenderMap
      )
    };

    this.focus = () => this.refs.editor.focus();
  }

  handleKeyCommand = (command) => {
    const newState =
      RichUtils.handleKeyCommand(this.props.editorState, command);
    if (newState) {
      this.props.handleChange(newState);
      return true;
    }
    return false;
  };

  render() {
    console.log('Rendering EverLibEditor');
    return (
      <div className="everlib-editor everlib-format" onClick={this.focus}>
        <Style
          rules={Object.assign({}, this.state.style, everlibFormatStyles)} />
        <Editor
          editorState={this.props.editorState}
          blockStyleFn={blockStyleFn}
          blockRenderMap={this.state.blockRenderMap}
          customStyleMap={customStyleMap}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.props.handleChange}
          ref="editor" />
      </div>
    );
  }

}

export default EverLibEditor;