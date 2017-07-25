import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  convertToRaw
} from 'draft-js';

class InlineStyleButton extends React.Component {

  static contextTypes = {
    editorState: React.PropTypes.object,
    handleChange: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  toggleInlineStyle = (e, inlineStyle) => {
    e.preventDefault();
    this.context.handleChange(
      RichUtils.toggleInlineStyle(
        this.context.editorState,
        inlineStyle
      )
    );
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

  /**
   * Returns 'active' if the inlineStyle otherwise ''
   * @param inlineStyle
   */
  isInlineStyleActive = (inlineStyle) =>
    this.context.editorState.getCurrentInlineStyle().has(inlineStyle) ?
      'active' : '';

  renderLi = () => {
    return (
      <li
        className={
          `toolbar-btn ${this.isInlineStyleActive(this.props.inlineStyle)}`
        }
        onMouseDown={
          (event) => this.toggleInlineStyle(event, this.props.inlineStyle)
        }
      >
        {this.renderIconOrChildren()}
      </li>
    );
  };

  renderSpan = () => {
    return (
      <span
        className={
          `toolbar-btn ${this.isInlineStyleActive(this.props.inlineStyle)}`
        }
        onMouseDown={
          (event) => this.toggleInlineStyle(event, this.props.inlineStyle)
        }
      >
        {this.renderIconOrChildren()}
      </span>
    );
  };

  render() {
    return (this.props.li) ? this.renderLi() : this.renderSpan();
  }

}

export default InlineStyleButton;
