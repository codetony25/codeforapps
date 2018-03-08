'use strict';exports.__esModule=true;var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_initialiseProps,_jsxFileName='components/pages/EditorPage/SidebarEditor/ChapterSidebar.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactSortableHoc=require('react-sortable-hoc');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ChapterSidebar=(_temp=_class=function(_React$Component){(0,_inherits3.default)(ChapterSidebar,_React$Component);function ChapterSidebar(props){(0,_classCallCheck3.default)(this,ChapterSidebar);var _this=(0,_possibleConstructorReturn3.default)(this,(ChapterSidebar.__proto__||(0,_getPrototypeOf2.default)(ChapterSidebar)).call(this,props));_initialiseProps.call(_this);_this.state={showSearch:true,searchTerm:''};return _this}(0,_createClass3.default)(ChapterSidebar,[{key:'__shouldComponentUpdate__REACT_HOT_LOADER__',value:function __shouldComponentUpdate__REACT_HOT_LOADER__(){return this.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__shouldComponentUpdate__REACT_HOT_LOADER__',value:function __shouldComponentUpdate__REACT_HOT_LOADER__(nextProps,nextState){return this.props.selectedChapter!==nextProps.selectedChapter||this.props.searchTerm!==nextProps.searchTerm||this.props.book.draft.chapterList.join('')!==nextProps.book.draft.chapterList.join('')||this.props.book.draft.chapters!==nextProps.book.draft.chapters}},{key:'__onSortEnd__REACT_HOT_LOADER__',value:function __onSortEnd__REACT_HOT_LOADER__(){return this.__onSortEnd__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__onSortEnd__REACT_HOT_LOADER__',value:function __onSortEnd__REACT_HOT_LOADER__(_ref){var oldIndex=_ref.oldIndex;var newIndex=_ref.newIndex;var chapterList=(0,_reactSortableHoc.arrayMove)(this.props.book.draft.chapterList,oldIndex,newIndex);var draft=(0,_assign2.default)({},this.props.book.draft);draft.chapterList=chapterList;this.props.methods.saveDraft(draft)}},{key:'__handleSearchClick__REACT_HOT_LOADER__',value:function __handleSearchClick__REACT_HOT_LOADER__(){return this.__handleSearchClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleSearchClick__REACT_HOT_LOADER__',value:function __handleSearchClick__REACT_HOT_LOADER__(){this.setState({showSearch:!this.state.showSearch})}},{key:'__handleSearchInputChange__REACT_HOT_LOADER__',value:function __handleSearchInputChange__REACT_HOT_LOADER__(){return this.__handleSearchInputChange__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleSearchInputChange__REACT_HOT_LOADER__',value:function __handleSearchInputChange__REACT_HOT_LOADER__(event){this.setState({searchTerm:event.target.value})}},{key:'__renderSearch__REACT_HOT_LOADER__',value:function __renderSearch__REACT_HOT_LOADER__(){return this.__renderSearch__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderSearch__REACT_HOT_LOADER__',value:function __renderSearch__REACT_HOT_LOADER__(){var _this2=this;return this.state.showSearch?_react2.default.createElement('div',{className:'chapter-search',__source:{fileName:_jsxFileName,lineNumber:102}},_react2.default.createElement('input',{type:'text',placeholder:'Search book...',onChange:this.handleSearchInputChange,value:this.state.searchTerm,__source:{fileName:_jsxFileName,lineNumber:103}}),_react2.default.createElement('i',{className:'icon ion-ios-close-outline',onClick:function onClick(){return _this2.setState({searchTerm:''})},__source:{fileName:_jsxFileName,lineNumber:109}})):null}},{key:'render',value:function render(){var _this3=this;console.log('Rendering BookEditChapterSidebar');return _react2.default.createElement('div',{className:'sidebar-chapters-container',__source:{fileName:_jsxFileName,lineNumber:120}},this.renderSearch(),_react2.default.createElement(this.SortableList,{chapterList:this.props.book.draft.chapterList,onSortEnd:this.onSortEnd,useDragHandle:true,__source:{fileName:_jsxFileName,lineNumber:122}}),_react2.default.createElement('div',{className:'chapter-action-icons',__source:{fileName:_jsxFileName,lineNumber:127}},_react2.default.createElement('button',{className:'btn-success',onClick:function onClick(){return _this3.props.methods.handleCreateChapter()},__source:{fileName:_jsxFileName,lineNumber:128}},'NEW'),_react2.default.createElement('button',{className:'btn-danger',onClick:function onClick(){return _this3.props.methods.handleDeleteChapter()},__source:{fileName:_jsxFileName,lineNumber:134}},_react2.default.createElement('i',{className:'icon ion-trash-b',__source:{fileName:_jsxFileName,lineNumber:138}}))))}}]);return ChapterSidebar}(_react2.default.Component),_class.displayName='ChapterSidebar',_initialiseProps=function _initialiseProps(){var _this4=this;this.shouldComponentUpdate=function(){return _this4.__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this4,arguments)};this.DragHandle=(0,_reactSortableHoc.SortableHandle)(function(){return _react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement('i',{className:'icon ion-drag',__source:{fileName:_jsxFileName,lineNumber:42}}))});this.SortableItem=(0,_reactSortableHoc.SortableElement)(function(props){return _react2.default.createElement('li',{className:props.clKey===_this4.props.selectedChapter?'highlight':'',onClick:function onClick(){return _this4.props.methods.handleSelectChapter(props.clKey)},__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement(_this4.DragHandle,{__source:{fileName:_jsxFileName,lineNumber:51}}),_this4.props.book.draft.chapters[props.clKey].title)});this.SortableList=(0,_reactSortableHoc.SortableContainer)(function(_ref2){var chapterList=_ref2.chapterList;return _react2.default.createElement('ul',{className:'chapter-list',__source:{fileName:_jsxFileName,lineNumber:62}},chapterList.map(function(clKey,index){return _react2.default.createElement(_this4.SortableItem,{key:clKey,index:index,clKey:clKey,__source:{fileName:_jsxFileName,lineNumber:64}})}))});this.onSortEnd=function(){return _this4.__onSortEnd__REACT_HOT_LOADER__.apply(_this4,arguments)};this.handleSearchClick=function(){return _this4.__handleSearchClick__REACT_HOT_LOADER__.apply(_this4,arguments)};this.handleSearchInputChange=function(){return _this4.__handleSearchInputChange__REACT_HOT_LOADER__.apply(_this4,arguments)};this.renderSearch=function(){return _this4.__renderSearch__REACT_HOT_LOADER__.apply(_this4,arguments)}},_temp);var _default=ChapterSidebar;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ChapterSidebar,'ChapterSidebar','components/pages/EditorPage/SidebarEditor/ChapterSidebar.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/EditorPage/SidebarEditor/ChapterSidebar.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYXB0ZXJTaWRlYmFyLmpzeCJdLCJuYW1lcyI6WyJDaGFwdGVyU2lkZWJhciIsInByb3BzIiwic3RhdGUiLCJzaG93U2VhcmNoIiwic2VhcmNoVGVybSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInNlbGVjdGVkQ2hhcHRlciIsImJvb2siLCJkcmFmdCIsImNoYXB0ZXJMaXN0Iiwiam9pbiIsImNoYXB0ZXJzIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm1ldGhvZHMiLCJzYXZlRHJhZnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJTZWFyY2giLCJvblNvcnRFbmQiLCJoYW5kbGVDcmVhdGVDaGFwdGVyIiwiaGFuZGxlRGVsZXRlQ2hhcHRlciIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiRHJhZ0hhbmRsZSIsIlNvcnRhYmxlSXRlbSIsImNsS2V5IiwiaGFuZGxlU2VsZWN0Q2hhcHRlciIsInRpdGxlIiwiU29ydGFibGVMaXN0IiwibWFwIiwiaW5kZXgiLCJoYW5kbGVTZWFyY2hDbGljayJdLCJtYXBwaW5ncyI6Ink1QkFBQSw0QiwyQ0FDQSxtQ0FDQSxvRCxxRkFPTUEsZSxrR0FJSix3QkFBWUMsS0FBWixDQUFtQiw2TEFDWEEsS0FEVyxnQ0FHakIsTUFBS0MsS0FBTCxDQUFhLENBQ1hDLFdBQVksSUFERCxDQUVYQyxXQUFZLEVBRkQsQ0FBYixDQUhpQixZQU9sQixDLHdWQVF3QkMsUyxDQUFXQyxTLFFBQ2xDLE1BQUtMLEtBQUwsQ0FBV00sZUFBWCxHQUErQkYsVUFBVUUsZUFBekMsRUFDQSxLQUFLTixLQUFMLENBQVdHLFVBQVgsR0FBMEJDLFVBQVVELFVBRHBDLEVBRUMsS0FBS0gsS0FBTCxDQUFXTyxJQUFYLENBQWdCQyxLQUFoQixDQUFzQkMsV0FBdEIsQ0FBa0NDLElBQWxDLENBQXVD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RDZCLENBQWhCLEMsTUFjZkMsWSxDQUFlLHdDQUFrQixlQUFxQixJQUFsQjFCLFlBQWtCLE9BQWxCQSxXQUFrQixDQUNwRCxNQUNFLHFDQUFJLFVBQVUsY0FBZCxpREFDR0EsWUFBWTJCLEdBQVosQ0FBZ0IsU0FBQ0osS0FBRCxDQUFRSyxLQUFSLFFBQ2Ysc0NBQU0sWUFBTixFQUFtQixJQUFLTCxLQUF4QixDQUErQixNQUFPSyxLQUF0QyxDQUE2QyxNQUFPTCxLQUFwRCxpREFEZSxDQUFoQixDQURILENBTUgsQ0FSYyxDLE1BYWZSLFMsd0ZBY0FjLGlCLGdHQU1BbEIsdUIsc0dBTUFHLFksMkdBZ0RheEIsYyxvSUF6SVRBLGMiLCJmaWxlIjoiQ2hhcHRlclNpZGViYXIuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1xuICBTb3J0YWJsZUNvbnRhaW5lcixcbiAgU29ydGFibGVFbGVtZW50LFxuICBTb3J0YWJsZUhhbmRsZSxcbiAgYXJyYXlNb3ZlXG59IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5cbmNsYXNzIENoYXB0ZXJTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ2hhcHRlclNpZGViYXInO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dTZWFyY2g6IHRydWUsXG4gICAgICBzZWFyY2hUZXJtOiAnJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsbHkgeW91IHdvdWxkbid0IHdhbnQgdG8gam9pbiBhbiBhcnJheSBhcyBhIHN0cmluZyBhbmQgdGhlbiBjb21wYXJlXG4gICAqIHRoZSBzdHJpbmcgdG8gc2VlIGlmIHRoZSBhcnJheSBoYXMgY2hhbmdlZCAoYmVjYXVzZSBvZiBlbXB0eSBzdHJpbmdzIGFuZFxuICAgKiBvdGhlciB2YXJpb3VzIHJlYXNvbnMpIGJ1dCBpbiB0aGlzIGNhc2UsIHNpbmNlIHdlIGtub3cgaXQncyBhIGhleCBzdHJpbmdcbiAgICogaXQncyBva1xuICAgKi9cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wcywgbmV4dFN0YXRlKSA9PlxuICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRDaGFwdGVyICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWRDaGFwdGVyIHx8XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hUZXJtICE9PSBuZXh0UHJvcHMuc2VhcmNoVGVybSB8fFxuICAgICh0aGlzLnByb3BzLmJvb2suZHJhZnQuY2hhcHRlckxpc3Quam9pbignJykgIT09XG4gICAgbmV4dFByb3BzLmJvb2suZHJhZnQuY2hhcHRlckxpc3Quam9pbignJykpIHx8XG4gICAgdGhpcy5wcm9wcy5ib29rLmRyYWZ0LmNoYXB0ZXJzICE9PSBuZXh0UHJvcHMuYm9vay5kcmFmdC5jaGFwdGVycztcblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogVGhpcyBzZWN0aW9uIG9mIGNvbXBvbmVudHMgaXMgZm9yIGhhbmRsaW5nIGRyYWcgYW5kIGRyb3BcbiAgICovXG5cbiAgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+XG4gICAgPHNwYW4+XG4gICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1kcmFnXCIgLz5cbiAgICA8L3NwYW4+XG4gICk7XG5cbiAgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KChwcm9wcykgPT5cbiAgICA8bGlcbiAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xLZXkgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWRDaGFwdGVyID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubWV0aG9kcy5oYW5kbGVTZWxlY3RDaGFwdGVyKHByb3BzLmNsS2V5KX1cbiAgICA+XG4gICAgICA8dGhpcy5EcmFnSGFuZGxlIC8+XG4gICAgICB7dGhpcy5wcm9wcy5ib29rLmRyYWZ0LmNoYXB0ZXJzW3Byb3BzLmNsS2V5XS50aXRsZX1cbiAgICA8L2xpPlxuICApO1xuXG4gIC8qKlxuICAgKiBjaGFwdGVyTGlzdCBpcyBhbiBhcnJheSBvZiB0aGUgaWQga2V5cyBvZiBhbGwgdGhlIGNoYXB0ZXJzLlxuICAgKiBjbEtleSAtPiBjaGFwdGVyTGlzdEtleVxuICAgKi9cbiAgU29ydGFibGVMaXN0ID0gU29ydGFibGVDb250YWluZXIoKHsgY2hhcHRlckxpc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcHRlci1saXN0XCI+XG4gICAgICAgIHtjaGFwdGVyTGlzdC5tYXAoKGNsS2V5LCBpbmRleCkgPT5cbiAgICAgICAgICA8dGhpcy5Tb3J0YWJsZUl0ZW0ga2V5PXtjbEtleX0gaW5kZXg9e2luZGV4fSBjbEtleT17Y2xLZXl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHdoYXQgaGFwcGVucyBhZnRlciBvdXIgYXJyYXlzIGFyZSBkb25lIG1vdmluZy5cbiAgICovXG4gIG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XG4gICAgLy8gUGVyZm9ybSB0aGUgcmVhcnJhbmdlbWVudFxuICAgIGNvbnN0IGNoYXB0ZXJMaXN0ID1cbiAgICAgIGFycmF5TW92ZSh0aGlzLnByb3BzLmJvb2suZHJhZnQuY2hhcHRlckxpc3QsIG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgLy8gVXBkYXRlIHRoZSBkcmFmdFxuICAgIGNvbnN0IGRyYWZ0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5ib29rLmRyYWZ0KTtcbiAgICBkcmFmdC5jaGFwdGVyTGlzdCA9IGNoYXB0ZXJMaXN0O1xuICAgIHRoaXMucHJvcHMubWV0aG9kcy5zYXZlRHJhZnQoZHJhZnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgZHJhZyBhbmQgZHJvcCBmdW5jdGlvbmFsaXR5XG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBoYW5kbGVTZWFyY2hDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dTZWFyY2g6ICF0aGlzLnN0YXRlLnNob3dTZWFyY2hcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVGVybTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5zaG93U2VhcmNoKSA/XG4gICAgICAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcHRlci1zZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJvb2suLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaW9uLWlvcy1jbG9zZS1vdXRsaW5lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXJtOiAnJyB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUmVuZGVyaW5nIEJvb2tFZGl0Q2hhcHRlclNpZGViYXInKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNoYXB0ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJTZWFyY2goKX1cbiAgICAgICAgPHRoaXMuU29ydGFibGVMaXN0XG4gICAgICAgICAgY2hhcHRlckxpc3Q9e3RoaXMucHJvcHMuYm9vay5kcmFmdC5jaGFwdGVyTGlzdH1cbiAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfVxuICAgICAgICAgIHVzZURyYWdIYW5kbGU9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcHRlci1hY3Rpb24taWNvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm1ldGhvZHMuaGFuZGxlQ3JlYXRlQ2hhcHRlcigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5FV1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5tZXRob2RzLmhhbmRsZURlbGV0ZUNoYXB0ZXIoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi10cmFzaC1iXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclNpZGViYXI7XG4iXX0=