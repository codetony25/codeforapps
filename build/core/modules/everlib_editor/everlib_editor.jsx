'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _jsxFileName='core/modules/everlib_editor/everlib_editor.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _jassy=require('jassy');var _draftJs=require('draft-js');var _editor=require('../../../styles/shared/editor.style');var _editor2=_interopRequireDefault(_editor);var _custom_blocks=require('./custom_blocks');var _custom_inline=require('./custom_inline');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EverLibEditor=function(_React$Component){(0,_inherits3.default)(EverLibEditor,_React$Component);function EverLibEditor(props){(0,_classCallCheck3.default)(this,EverLibEditor);var _this=(0,_possibleConstructorReturn3.default)(this,(EverLibEditor.__proto__||(0,_getPrototypeOf2.default)(EverLibEditor)).call(this,props));_this.handleKeyCommand=function(){return _this.__handleKeyCommand__REACT_HOT_LOADER__.apply(_this,arguments)};_this.state={blockRenderMap:_draftJs.DefaultDraftBlockRenderMap.merge(_custom_blocks.customBlockRenderMap)};_this.focus=function(){return _this.refs.editor.focus()};return _this}(0,_createClass3.default)(EverLibEditor,[{key:'__handleKeyCommand__REACT_HOT_LOADER__',value:function __handleKeyCommand__REACT_HOT_LOADER__(){return this.__handleKeyCommand__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleKeyCommand__REACT_HOT_LOADER__',value:function __handleKeyCommand__REACT_HOT_LOADER__(command){var newState=_draftJs.RichUtils.handleKeyCommand(this.props.editorState,command);if(newState){this.props.handleChange(newState);return true}return false}},{key:'render',value:function render(){console.log('Rendering EverLibEditor');return _react2.default.createElement('div',{className:'everlib-editor everlib-format',onClick:this.focus,__source:{fileName:_jsxFileName,lineNumber:42}},_react2.default.createElement(_jassy.Style,{rules:(0,_editor2.default)(),__source:{fileName:_jsxFileName,lineNumber:43}}),_react2.default.createElement(_draftJs.Editor,{editorState:this.props.editorState,blockStyleFn:_custom_blocks.blockStyleFn,blockRenderMap:this.state.blockRenderMap,customStyleMap:_custom_inline.customStyleMap,handleKeyCommand:this.handleKeyCommand,onChange:this.props.handleChange,ref:'editor',__source:{fileName:_jsxFileName,lineNumber:44}}))}}]);return EverLibEditor}(_react2.default.Component);var _default=EverLibEditor;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(EverLibEditor,'EverLibEditor','core/modules/everlib_editor/everlib_editor.jsx');__REACT_HOT_LOADER__.register(_default,'default','core/modules/everlib_editor/everlib_editor.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZXJsaWJfZWRpdG9yLmpzeCJdLCJuYW1lcyI6WyJFdmVyTGliRWRpdG9yIiwicHJvcHMiLCJoYW5kbGVLZXlDb21tYW5kIiwic3RhdGUiLCJibG9ja1JlbmRlck1hcCIsIm1lcmdlIiwiZm9jdXMiLCJyZWZzIiwiZWRpdG9yIiwiY29tbWFuZCIsIm5ld1N0YXRlIiwiZWRpdG9yU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoicXdCQUFBLDRCLDJDQUNBLDRCQUNBLGlDQVVBLDJELDZDQUNBLDhDQUNBLDhDLHFGQUVNQSxjLG1GQUVKLHVCQUFZQyxLQUFaLENBQW1CLDBMQUNYQSxLQURXLFNBVW5CQyxnQkFWbUIsd0ZBR2pCLE1BQUtDLEtBQUwsQ0FBYSxDQUNYQyxlQUFnQixvQ0FBMkJDLEtBQTNCLHFDQURMLENBQWIsQ0FJQSxNQUFLQyxLQUFMLENBQWEsaUJBQU0sT0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCRixLQUFqQixFQUFOLENBQWIsQ0FQaUIsWUFRbEIsQyw4VEFFbUJHLE8sQ0FBWSxDQUM5QixHQUFNQyxVQUNKLG1CQUFVUixnQkFBVixDQUEyQixLQUFLRCxLQUFMLENBQVdVLFdBQXRDLENBQW1ERixPQUFuRCxDQURGLENBRUEsR0FBSUMsUUFBSixDQUFjLENBQ1osS0FBS1QsS0FBTCxDQUFXVyxZQUFYLENBQXdCRixRQUF4QixFQUNBLE1BQU8sS0FDUixDQUNELE1BQU8sTUFDUixDLHVDQUVRLENBQ1BHLFFBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUNBLE1BQ0Usc0NBQUssVUFBVSwrQkFBZixDQUErQyxRQUFTLEtBQUtSLEtBQTdELGlEQUNFLDRDQUFPLE1BQU8sc0JBQWQsaURBREYsQ0FFRSwrQ0FDRSxZQUFhLEtBQUtMLEtBQUwsQ0FBV1UsV0FEMUIsQ0FFRSx3Q0FGRixDQUdFLGVBQWdCLEtBQUtSLEtBQUwsQ0FBV0MsY0FIN0IsQ0FJRSw0Q0FKRixDQUtFLGlCQUFrQixLQUFLRixnQkFMekIsQ0FNRSxTQUFVLEtBQUtELEtBQUwsQ0FBV1csWUFOdkIsQ0FPRSxJQUFJLFFBUE4saURBRkYsQ0FhSCxDLDBCQXRDeUIsZ0JBQU1HLFMsZUEwQ25CZixhLG1JQTFDVEEsYSIsImZpbGUiOiJldmVybGliX2VkaXRvci5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdqYXNzeSc7XG5pbXBvcnQge1xuICBBdG9taWNCbG9ja1V0aWxzLFxuICBFZGl0b3IsXG4gIEVkaXRvclN0YXRlLFxuICBSaWNoVXRpbHMsXG4gIERlZmF1bHREcmFmdEJsb2NrUmVuZGVyTWFwLFxuICBCbG9ja1R5cGUsXG4gIGNvbnZlcnRUb1Jhd1xufSBmcm9tICdkcmFmdC1qcyc7XG5cbmltcG9ydCBlZGl0b3JTdHlsZSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2VkaXRvci5zdHlsZSc7XG5pbXBvcnQgeyBjdXN0b21CbG9ja1JlbmRlck1hcCwgYmxvY2tTdHlsZUZuIH0gZnJvbSAnLi9jdXN0b21fYmxvY2tzJztcbmltcG9ydCB7IGN1c3RvbVN0eWxlTWFwIH0gZnJvbSAnLi9jdXN0b21faW5saW5lJztcblxuY2xhc3MgRXZlckxpYkVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmxvY2tSZW5kZXJNYXA6IERlZmF1bHREcmFmdEJsb2NrUmVuZGVyTWFwLm1lcmdlKGN1c3RvbUJsb2NrUmVuZGVyTWFwKVxuICAgIH07XG5cbiAgICB0aGlzLmZvY3VzID0gKCkgPT4gdGhpcy5yZWZzLmVkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlS2V5Q29tbWFuZCA9IChjb21tYW5kKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPVxuICAgICAgUmljaFV0aWxzLmhhbmRsZUtleUNvbW1hbmQodGhpcy5wcm9wcy5lZGl0b3JTdGF0ZSwgY29tbWFuZCk7XG4gICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShuZXdTdGF0ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUmVuZGVyaW5nIEV2ZXJMaWJFZGl0b3InKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVybGliLWVkaXRvciBldmVybGliLWZvcm1hdFwiIG9uQ2xpY2s9e3RoaXMuZm9jdXN9PlxuICAgICAgICA8U3R5bGUgcnVsZXM9e2VkaXRvclN0eWxlKCl9IC8+XG4gICAgICAgIDxFZGl0b3JcbiAgICAgICAgICBlZGl0b3JTdGF0ZT17dGhpcy5wcm9wcy5lZGl0b3JTdGF0ZX1cbiAgICAgICAgICBibG9ja1N0eWxlRm49e2Jsb2NrU3R5bGVGbn1cbiAgICAgICAgICBibG9ja1JlbmRlck1hcD17dGhpcy5zdGF0ZS5ibG9ja1JlbmRlck1hcH1cbiAgICAgICAgICBjdXN0b21TdHlsZU1hcD17Y3VzdG9tU3R5bGVNYXB9XG4gICAgICAgICAgaGFuZGxlS2V5Q29tbWFuZD17dGhpcy5oYW5kbGVLZXlDb21tYW5kfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICByZWY9XCJlZGl0b3JcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZXJMaWJFZGl0b3I7XG4iXX0=