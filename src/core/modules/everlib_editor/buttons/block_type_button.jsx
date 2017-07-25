import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  convertToRaw
} from 'draft-js';

class BlockTypeButton extends React.Component {

  static contextTypes = {
    editorState: React.PropTypes.object,
    handleChange: React.PropTypes.func,
    closeToolbar: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);

    console.log('Current content in block type button: ', EditorState);
  }

  toggleBlockType = (e, blockType) => {
    e.preventDefault();
    this.context.closeToolbar();

    this.context.handleChange(
      RichUtils.toggleBlockType(
        this.context.editorState,
        blockType
      )
    );
  };

  /**
   * Returns 'active' if is current blockType otherwise ''
   * @param blockType
   */
  isBlockTypeActive = (blockType) => {
    const selection = this.context.editorState.getSelection();
    const currentBlockType = this.context.editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    return (blockType === currentBlockType) ? 'active' : '';
  };

  renderIconOrChildren = () => {
    if (this.props.icon) {
      return (
        <i className={this.props.icon} />
      );
    }
    return (
      this.props.children
    );
  };

  renderLi = () => {
    return (
      <li
        className={`${this.isBlockTypeActive(this.props.blockType)}`}
        onMouseDown={(event) =>
          this.toggleBlockType(event, this.props.blockType)}
      >
        {this.renderIconOrChildren()}
      </li>
    );
  };

  renderSpan = () => {
    return (
      <span
        className =
          {`toolbar-btn ${this.isBlockTypeActive(this.props.blockType)}`}
        onMouseDown={(event) =>
          this.toggleBlockType(event, this.props.blockType)}
      >
        {this.renderIconOrChildren()}
      </span>
    );
  };

  render() {
    return (this.props.li) ? this.renderLi() : this.renderSpan();
  }
}

export default BlockTypeButton;
