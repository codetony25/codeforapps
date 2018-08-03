'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='core/modules/everlib_editor/buttons/block_type_button.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _draftJs=require('draft-js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var BlockTypeButton=(_temp=_class=function(_React$Component){(0,_inherits3.default)(BlockTypeButton,_React$Component);function BlockTypeButton(props,context){(0,_classCallCheck3.default)(this,BlockTypeButton);var _this=(0,_possibleConstructorReturn3.default)(this,(BlockTypeButton.__proto__||(0,_getPrototypeOf2.default)(BlockTypeButton)).call(this,props,context));_this.toggleBlockType=function(){return _this.__toggleBlockType__REACT_HOT_LOADER__.apply(_this,arguments)};_this.isBlockTypeActive=function(){return _this.__isBlockTypeActive__REACT_HOT_LOADER__.apply(_this,arguments)};_this.renderIconOrChildren=function(){return _this.__renderIconOrChildren__REACT_HOT_LOADER__.apply(_this,arguments)};_this.renderLi=function(){return _this.__renderLi__REACT_HOT_LOADER__.apply(_this,arguments)};_this.renderSpan=function(){return _this.__renderSpan__REACT_HOT_LOADER__.apply(_this,arguments)};console.log('Current content in block type button: ',_draftJs.EditorState);return _this}(0,_createClass3.default)(BlockTypeButton,[{key:'__toggleBlockType__REACT_HOT_LOADER__',value:function __toggleBlockType__REACT_HOT_LOADER__(){return this.__toggleBlockType__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__toggleBlockType__REACT_HOT_LOADER__',value:function __toggleBlockType__REACT_HOT_LOADER__(e,blockType){e.preventDefault();this.context.closeToolbar();this.context.handleChange(_draftJs.RichUtils.toggleBlockType(this.context.editorState,blockType))}},{key:'__isBlockTypeActive__REACT_HOT_LOADER__',value:function __isBlockTypeActive__REACT_HOT_LOADER__(){return this.__isBlockTypeActive__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__isBlockTypeActive__REACT_HOT_LOADER__',value:function __isBlockTypeActive__REACT_HOT_LOADER__(blockType){var selection=this.context.editorState.getSelection();var currentBlockType=this.context.editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();return blockType===currentBlockType?'active':''}},{key:'__renderIconOrChildren__REACT_HOT_LOADER__',value:function __renderIconOrChildren__REACT_HOT_LOADER__(){return this.__renderIconOrChildren__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderIconOrChildren__REACT_HOT_LOADER__',value:function __renderIconOrChildren__REACT_HOT_LOADER__(){if(this.props.icon){return _react2.default.createElement('i',{className:this.props.icon,__source:{fileName:_jsxFileName,lineNumber:52}})}return this.props.children}},{key:'__renderLi__REACT_HOT_LOADER__',value:function __renderLi__REACT_HOT_LOADER__(){return this.__renderLi__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderLi__REACT_HOT_LOADER__',value:function __renderLi__REACT_HOT_LOADER__(){var _this2=this;return _react2.default.createElement('li',{className:''+this.isBlockTypeActive(this.props.blockType),onMouseDown:function onMouseDown(event){return _this2.toggleBlockType(event,_this2.props.blockType)},__source:{fileName:_jsxFileName,lineNumber:62}},this.renderIconOrChildren())}},{key:'__renderSpan__REACT_HOT_LOADER__',value:function __renderSpan__REACT_HOT_LOADER__(){return this.__renderSpan__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderSpan__REACT_HOT_LOADER__',value:function __renderSpan__REACT_HOT_LOADER__(){var _this3=this;return _react2.default.createElement('span',{className:'toolbar-btn '+this.isBlockTypeActive(this.props.blockType),onMouseDown:function onMouseDown(event){return _this3.toggleBlockType(event,_this3.props.blockType)},__source:{fileName:_jsxFileName,lineNumber:74}},this.renderIconOrChildren())}},{key:'render',value:function render(){return this.props.li?this.renderLi():this.renderSpan()}}]);return BlockTypeButton}(_react2.default.Component),_class.contextTypes={editorState:_react2.default.PropTypes.object,handleChange:_react2.default.PropTypes.func,closeToolbar:_react2.default.PropTypes.func},_temp);var _default=BlockTypeButton;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(BlockTypeButton,'BlockTypeButton','core/modules/everlib_editor/buttons/block_type_button.jsx');__REACT_HOT_LOADER__.register(_default,'default','core/modules/everlib_editor/buttons/block_type_button.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrX3R5cGVfYnV0dG9uLmpzeCJdLCJuYW1lcyI6WyJCbG9ja1R5cGVCdXR0b24iLCJwcm9wcyIsImNvbnRleHQiLCJ0b2dnbGVCbG9ja1R5cGUiLCJpc0Jsb2NrVHlwZUFjdGl2ZSIsInJlbmRlckljb25PckNoaWxkcmVuIiwicmVuZGVyTGkiLCJyZW5kZXJTcGFuIiwiY29uc29sZSIsImxvZyIsImUiLCJibG9ja1R5cGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlVG9vbGJhciIsImhhbmRsZUNoYW5nZSIsImVkaXRvclN0YXRlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiY3VycmVudEJsb2NrVHlwZSIsImdldEN1cnJlbnRDb250ZW50IiwiZ2V0QmxvY2tGb3JLZXkiLCJnZXRTdGFydEtleSIsImdldFR5cGUiLCJpY29uIiwiY2hpbGRyZW4iLCJldmVudCIsImxpIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6IjZ4QkFBQSw0QiwyQ0FDQSxpQyxxRkFRTUEsZ0IsbUdBUUoseUJBQVlDLEtBQVosQ0FBbUJDLE9BQW5CLENBQTRCLGdNQUNwQkQsS0FEb0IsQ0FDYkMsT0FEYSxTQU01QkMsZUFONEIsNkZBc0I1QkMsaUJBdEI0QiwrRkErQjVCQyxvQkEvQjRCLGtHQTBDNUJDLFFBMUM0QixzRkFzRDVCQyxVQXRENEIsa0ZBRzFCQyxRQUFRQyxHQUFSLENBQVksd0NBQVosdUJBSDBCLFlBSTNCLEMsMlRBRWtCQyxDLENBQUdDLFMsQ0FBYyxDQUNsQ0QsRUFBRUUsY0FBRixHQUNBLEtBQUtWLE9BQUwsQ0FBYVcsWUFBYixHQUVBLEtBQUtYLE9BQUwsQ0FBYVksWUFBYixDQUNFLG1CQUFVWCxlQUFWLENBQ0UsS0FBS0QsT0FBTCxDQUFhYSxXQURmLENBRUVKLFNBRkYsQ0FERixDQU1ELEMsNFJBTW9CQSxTLENBQWMsQ0FDakMsR0FBTUssV0FBWSxLQUFLZCxPQUFMLENBQWFhLFdBQWIsQ0FBeUJFLFlBQXpCLEVBQWxCLENBQ0EsR0FBTUMsa0JBQW1CLEtBQUtoQixPQUFMLENBQWFhLFdBQWIsQ0FDdEJJLGlCQURzQixHQUV0QkMsY0FGc0IsQ0FFUEosVUFBVUssV0FBVixFQUZPLEVBR3RCQyxPQUhzQixFQUF6QixDQUlBLE1BQVFYLGFBQWNPLGdCQUFmLENBQW1DLFFBQW5DLENBQThDLEVBQ3RELEMsNFNBRTRCLENBQzNCLEdBQUksS0FBS2pCLEtBQUwsQ0FBV3NCLElBQWYsQ0FBcUIsQ0FDbkIsTUFDRSxvQ0FBRyxVQUFXLEtBQUt0QixLQUFMLENBQVdzQixJQUF6QixpREFFSCxDQUNELE1BQ0UsTUFBS3RCLEtBQUwsQ0FBV3VCLFFBRWQsQyxnUEFFZ0IsaUJBQ2YsTUFDRSxxQ0FDRSxhQUFjLEtBQUtwQixpQkFBTCxDQUF1QixLQUFLSCxLQUFMLENBQVdVLFNBQWxDLENBRGhCLENBRUUsWUFBYSxxQkFBQ2MsS0FBRCxRQUNYLFFBQUt0QixlQUFMLENBQXFCc0IsS0FBckIsQ0FBNEIsT0FBS3hCLEtBQUwsQ0FBV1UsU0FBdkMsQ0FEVyxDQUZmLGlEQUtHLEtBQUtOLG9CQUFMLEVBTEgsQ0FRSCxDLDBQQUVrQixpQkFDakIsTUFDRSx1Q0FDRSx5QkFDa0IsS0FBS0QsaUJBQUwsQ0FBdUIsS0FBS0gsS0FBTCxDQUFXVSxTQUFsQyxDQUZwQixDQUdFLFlBQWEscUJBQUNjLEtBQUQsUUFDWCxRQUFLdEIsZUFBTCxDQUFxQnNCLEtBQXJCLENBQTRCLE9BQUt4QixLQUFMLENBQVdVLFNBQXZDLENBRFcsQ0FIZixpREFNRyxLQUFLTixvQkFBTCxFQU5ILENBU0gsQyx1Q0FFUSxDQUNQLE1BQVEsTUFBS0osS0FBTCxDQUFXeUIsRUFBWixDQUFrQixLQUFLcEIsUUFBTCxFQUFsQixDQUFvQyxLQUFLQyxVQUFMLEVBQzVDLEMsNEJBN0UyQixnQkFBTW9CLFMsU0FFM0JDLFksQ0FBZSxDQUNwQmIsWUFBYSxnQkFBTWMsU0FBTixDQUFnQkMsTUFEVCxDQUVwQmhCLGFBQWMsZ0JBQU1lLFNBQU4sQ0FBZ0JFLElBRlYsQ0FHcEJsQixhQUFjLGdCQUFNZ0IsU0FBTixDQUFnQkUsSUFIVixDLHFCQThFVC9CLGUsb0lBaEZUQSxlIiwiZmlsZSI6ImJsb2NrX3R5cGVfYnV0dG9uLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9JZGVhUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRWRpdG9yLFxuICBFZGl0b3JTdGF0ZSxcbiAgUmljaFV0aWxzLFxuICBEZWZhdWx0RHJhZnRCbG9ja1JlbmRlck1hcCxcbiAgY29udmVydFRvUmF3XG59IGZyb20gJ2RyYWZ0LWpzJztcblxuY2xhc3MgQmxvY2tUeXBlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGVkaXRvclN0YXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGhhbmRsZUNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xvc2VUb29sYmFyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgY29udGVudCBpbiBibG9jayB0eXBlIGJ1dHRvbjogJywgRWRpdG9yU3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2tUeXBlID0gKGUsIGJsb2NrVHlwZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VUb29sYmFyKCk7XG5cbiAgICB0aGlzLmNvbnRleHQuaGFuZGxlQ2hhbmdlKFxuICAgICAgUmljaFV0aWxzLnRvZ2dsZUJsb2NrVHlwZShcbiAgICAgICAgdGhpcy5jb250ZXh0LmVkaXRvclN0YXRlLFxuICAgICAgICBibG9ja1R5cGVcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICdhY3RpdmUnIGlmIGlzIGN1cnJlbnQgYmxvY2tUeXBlIG90aGVyd2lzZSAnJ1xuICAgKiBAcGFyYW0gYmxvY2tUeXBlXG4gICAqL1xuICBpc0Jsb2NrVHlwZUFjdGl2ZSA9IChibG9ja1R5cGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQuZWRpdG9yU3RhdGUuZ2V0U2VsZWN0aW9uKCk7XG4gICAgY29uc3QgY3VycmVudEJsb2NrVHlwZSA9IHRoaXMuY29udGV4dC5lZGl0b3JTdGF0ZVxuICAgICAgLmdldEN1cnJlbnRDb250ZW50KClcbiAgICAgIC5nZXRCbG9ja0ZvcktleShzZWxlY3Rpb24uZ2V0U3RhcnRLZXkoKSlcbiAgICAgIC5nZXRUeXBlKCk7XG4gICAgcmV0dXJuIChibG9ja1R5cGUgPT09IGN1cnJlbnRCbG9ja1R5cGUpID8gJ2FjdGl2ZScgOiAnJztcbiAgfTtcblxuICByZW5kZXJJY29uT3JDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5pY29uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbn0gLz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJMaSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5pc0Jsb2NrVHlwZUFjdGl2ZSh0aGlzLnByb3BzLmJsb2NrVHlwZSl9YH1cbiAgICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT5cbiAgICAgICAgICB0aGlzLnRvZ2dsZUJsb2NrVHlwZShldmVudCwgdGhpcy5wcm9wcy5ibG9ja1R5cGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJJY29uT3JDaGlsZHJlbigpfVxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclNwYW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZSA9XG4gICAgICAgICAge2B0b29sYmFyLWJ0biAke3RoaXMuaXNCbG9ja1R5cGVBY3RpdmUodGhpcy5wcm9wcy5ibG9ja1R5cGUpfWB9XG4gICAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+XG4gICAgICAgICAgdGhpcy50b2dnbGVCbG9ja1R5cGUoZXZlbnQsIHRoaXMucHJvcHMuYmxvY2tUeXBlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucmVuZGVySWNvbk9yQ2hpbGRyZW4oKX1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMubGkpID8gdGhpcy5yZW5kZXJMaSgpIDogdGhpcy5yZW5kZXJTcGFuKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tUeXBlQnV0dG9uO1xuIl19