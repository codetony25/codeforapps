import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  convertToRaw
} from 'draft-js';

import BlockTypeButton from './buttons/block_type_button';
import InlineStyleButton from './buttons/inline_style_button';
import { toggleFullScreen } from '/imports/modules/DOMhelpers';

class EverLibToolbar extends React.Component {

  /**
   * All of our toolbar buttons need to know about
   * the editor state and how to handle change
   * @type {{editorState: *, handleChange: *}}
   */
  static childContextTypes = {
    editorState: React.PropTypes.object,
    handleChange: React.PropTypes.func,
    closeToolbar: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      toolbarAlign: false,
      toolbarHeader: false,
      toolbarList: false,
      toolbarOptions: false,
      toolbarMisc: false
    };
  }

  getChildContext = () => {
    return {
      editorState: this.props.editorState,
      handleChange: this.props.handleChange,
      closeToolbar: this.closeToolbarDropdown
    }
  };

  onToolbarClick = (event, toolbarOption) => {
    event.preventDefault();
    if (this.state[toolbarOption]) {
      this.closeToolbarDropdown();
    } else {
      this.closeToolbarDropdown();
      this.setState({ [toolbarOption]: true });
    }
  };

  closeToolbarDropdown = () => {
    this.setState({
      toolbarAlign: false,
      toolbarCode: false,
      toolbarHeader: false,
      toolbarList: false,
      toolbarOptions: false,
      toolbarMisc: false
    });
  };

  // shouldComponentUpdate = (nextProps, nextState) =>
  //   this.props.settings.showMarkdownToolbar != 
  //      nextProps.settings.showMarkdownToolbar ||
  //   this.state.isToolbarHeaderOpen !== nextState.isToolbarHeaderOpen ||
  //   this.state.isToolbarListOpen !== nextState.isToolbarListOpen ||
  //   this.state.isToolbarOptionsOpen !== nextState.isToolbarOptionsOpen ||
  //   this.state.isToolbarAlignOpen !== nextState.isToolbarAlignOpen;

  renderToolbarHeader = () => {
    return (this.state.toolbarHeader) ? (
      <ul className="toolbar-dropdown">
        <BlockTypeButton blockType="header-one" li={true}>
          <h1>Heading 1</h1>
        </BlockTypeButton>
        <BlockTypeButton blockType="header-two" li={true}>
          <h2>Heading 2</h2>
        </BlockTypeButton>
        <BlockTypeButton blockType="header-three" li={true}>
          <h3>Heading 3</h3>
        </BlockTypeButton>
        <BlockTypeButton blockType="header-four" li={true}>
          <h4>Heading 4</h4>
        </BlockTypeButton>
      </ul>
    ) : null;
  };

  // So we don't duplicate code for mobile and regular
  // Pass in the className
  renderToolbarAlignButtons = (className) => (
    <ul className={className}>
      <BlockTypeButton blockType="align-left" li={true}>
        <i className="fa fa-align-left" />
        Align Left
      </BlockTypeButton>
      <BlockTypeButton blockType="align-center" li={true}>
        <i className="fa fa-align-center" />
        Align Center
      </BlockTypeButton>
      <BlockTypeButton blockType="align-right" li={true}>
        <i className="fa fa-align-right" />
        Align Right
      </BlockTypeButton>
      <BlockTypeButton blockType="align-justify" li={true}>
        <i className="fa fa-align-justify" />
        Align Justify
      </BlockTypeButton>
    </ul>
  );

  renderToolbarAlign = () => {
    return (this.state.toolbarAlign) ? (
      this.renderToolbarAlignButtons('toolbar-dropdown')
    ) : null;
  };

  renderToolbarCodeButtons = (className) => (
    <ul className={className}>
      <BlockTypeButton blockType="code" li={true}>
        JavaScript
      </BlockTypeButton>
      <BlockTypeButton blockType="code" li={true}>
        PHP
      </BlockTypeButton>
      <BlockTypeButton blockType="code" li={true}>
        Ruby
      </BlockTypeButton>
    </ul>
  );

  renderToolbarCode = () => {
    return (this.state.toolbarCode) ? (
      this.renderToolbarCodeButtons('toolbar-dropdown')
    ) : null;
  };

  renderToolbarListButtons = (className) => (
    <ul className={className}>
      <BlockTypeButton blockType="ordered-list-item" li={true}>
        <i className="fa fa-list-ol" />
        Numbered List
      </BlockTypeButton>
      <BlockTypeButton blockType="unordered-list-item" li={true}>
        <i className="fa fa-list-ul" />
        Dotted List
      </BlockTypeButton>
      <BlockTypeButton blockType="list-table" li={true}>
        <i className="fa fa-th-list" />
        Table List
      </BlockTypeButton>
    </ul>
  );

  renderToolbarList = () => {
    return (this.state.toolbarList) ? (
      this.renderToolbarListButtons('toolbar-dropdown')
    ) : null;
  };

  renderToolbarOptions = () => {
    return (this.state.toolbarOptions) ? (
      <div className="toolbar-dropdown">
        <ul>
          <InlineStyleButton
            inlineStyle="STRIKETHROUGH" icon="fa fa-strikethrough" li={true}/>
          <BlockTypeButton
            blockType="blockquote" icon="icon ion-quote" li={true} />
          <BlockTypeButton blockType="link" icon="icon ion-link" li={true} />
        </ul>
        {this.renderToolbarAlignButtons('mobile-align-group')}
        {this.renderToolbarListButtons('mobile-list-group')}
      </div>
    ) : null;
  };

  renderToolbarMisc = () => {
    return (this.state.toolbarMisc) ? (
      <div>
        <ul style={{ opacity: 1, zIndex: 100 }} className="toolbar-dropdown">
          <BlockTypeButton blockType="link" li={true}>
            <i className="fa fa-link" />
            Link...
          </BlockTypeButton>
          <BlockTypeButton blockType="image" li={true}>
            <i className="fa fa-picture-o" />
            Image...
          </BlockTypeButton>
          <BlockTypeButton blockType="warning" li={true}>
            <i className="fa fa-exclamation-triangle" />
            Warning Block
          </BlockTypeButton>
          <BlockTypeButton blockType="information" li={true}>
            <i className="fa fa-info-circle" />
            Information Block
          </BlockTypeButton>
          <BlockTypeButton blockType="hr-line" li={true}>
            <i className="fa fa ion-minus" />
            Single Line Horizontal
          </BlockTypeButton>
          <BlockTypeButton blockType="hr-double" li={true}>
            <i className="fa fa ion-minus" />
            Double Line Horizontal
          </BlockTypeButton>
          <BlockTypeButton blockType="hr-dash" li={true}>
            <i className="fa fa ion-minus" />
            Dash Line Horizontal
          </BlockTypeButton>
        </ul>
      </div>
    ) : null;
  };

  render() {
    console.log('rendering BookEditToolbar');
    return (this.props.settings.showMarkdownToolbar) ? (
      <div className="everlib-editor-toolbar">

        {/** Begin Header Dropdown **/}
        <div className="toolbar-container-dropdown">
          <span
            onMouseDown={(event) => this.onToolbarClick(event, 'toolbarHeader')}
            className="toolbar-btn">
            <i className="fa fa-header" />
            <i className="fa fa-sort-desc" />
          </span>
          {this.renderToolbarHeader()}
        </div>

        {/** Begin Inline Styles **/}
        <div className="tool-font-group toolbar-btn-group">
          <InlineStyleButton inlineStyle="BOLD" icon="fa fa-bold" />
          <InlineStyleButton inlineStyle="ITALIC" icon="fa fa-italic" />
          <InlineStyleButton inlineStyle="UNDERLINE" icon="fa fa-underline" />
        </div>

        {/** Begin List Dropdown **/}
        <div className="tool-list-group toolbar-container-dropdown">
          <span
            className="toolbar-btn"
            onMouseDown={(event) => this.onToolbarClick(event, 'toolbarList')}>
            <i className="fa fa-list-ul" />
            <i className="fa fa-sort-desc" />
          </span>
          {this.renderToolbarList()}
        </div>

        {/** Begin Alignment Dropdown **/}
        <div className="align-list-group toolbar-container-dropdown">
          <span
            className="toolbar-btn"
            onMouseDown={(event) => this.onToolbarClick(event, 'toolbarAlign')}>
            <i className="fa fa-align-left" />
            <i className="fa fa-sort-desc" />
          </span>
          {this.renderToolbarAlign()}
        </div>

        {/** Begin Code Dropdown **/}
        <div className="toolbar-container-dropdown">
          <span
            onClick={this.props.methods.handleToggleLanguageModal}
            onMouseDown={(event) =>
              this.onToolbarClick(event, 'toolbarCode')}
            className="toolbar-btn">
            <i className="icon ion-code" />
          </span>
          {this.renderToolbarCode()}
        </div>

        {/** Begin Options Dropdown **/}
        <div className="toolbar-more toolbar-container-dropdown">
          <span
            onMouseDown={(event) =>
              this.onToolbarClick(event, 'toolbarOptions')}
            className="toolbar-btn">
            <i className="icon ion-more" />
          </span>
          {this.renderToolbarOptions()}
        </div>

        {/** Begin Misc Dropdown **/}
        <div className="toolbar-misc toolbar-container-dropdown">
          <span
            onMouseDown={(event) => this.onToolbarClick(event, 'toolbarMisc')}
            className="toolbar-btn">
            <i className="icon fa fa-plus" />
            <i className="fa fa-sort-desc" />
          </span>
          {this.renderToolbarMisc()}
        </div>

        {/** Begin Chapter Arrows And Full Screen Toggle **/}
        <div className="toolbar-container-right">
          <div className="chapter-navigate toolbar-btn-group">
          <span
            className={this.props.methods.atFirstChapter() ?
              "toolbar-btn disabled" : "toolbar-btn"}
            onClick={() => this.props.methods.selectPreviousChapter()}
          >
            <i className="icon ion-android-arrow-back" />
          </span>
            <span
              className={this.props.methods.atLastChapter() ?
                "toolbar-btn disabled" : "toolbar-btn"}
              onClick={() => this.props.methods.selectNextChapter()}
            >
            <i className="icon ion-android-arrow-forward"/>
          </span>
          </div>
          <div className="toolbar-fullscreen toolbar-btn-group">
            <span className="toolbar-btn">
              <i
                onClick={() => toggleFullScreen()}
                className="icon ion-arrow-expand" />
            </span>
          </div>
        </div>

      </div>
    ) : null;
  }

}

export default EverLibToolbar;