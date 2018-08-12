'use strict';exports.__esModule=true;var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='components/pages/EditorPage/EditorPage.jsx';var _jassy=require('jassy');var _react=require('react');var _react2=_interopRequireDefault(_react);var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);var _book_edit_helpers=require('../../../core/utils/book_helpers/book_edit_helpers');var _MainEditor=require('./MainEditor');var _MainEditor2=_interopRequireDefault(_MainEditor);var _editorPage=require('./editorPage.style');var _editorPage2=_interopRequireDefault(_editorPage);var _SidebarEditor=require('./SidebarEditor');var _SidebarEditor2=_interopRequireDefault(_SidebarEditor);var _modals=require('../../modals');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EditorPage=(_temp=_class=function(_React$Component){(0,_inherits3.default)(EditorPage,_React$Component);function EditorPage(props){(0,_classCallCheck3.default)(this,EditorPage);var _this=(0,_possibleConstructorReturn3.default)(this,(EditorPage.__proto__||(0,_getPrototypeOf2.default)(EditorPage)).call(this,props));_this.componentWillReceiveProps=function(){return _this.__componentWillReceiveProps__REACT_HOT_LOADER__.apply(_this,arguments)};_this.saveDraft=function(){return _this.__saveDraft__REACT_HOT_LOADER__.apply(_this,arguments)};_this.setSetting=function(){return _this.__setSetting__REACT_HOT_LOADER__.apply(_this,arguments)};_this.atFirstChapter=function(){return _this.__atFirstChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.atLastChapter=function(){return _this.__atLastChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.selectNextChapter=function(){return _this.__selectNextChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.selectPreviousChapter=function(){return _this.__selectPreviousChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.handleSelectChapter=function(){return _this.__handleSelectChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.handleCreateChapter=function(){return _this.__handleCreateChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.handleDeleteChapter=function(){return _this.__handleDeleteChapter__REACT_HOT_LOADER__.apply(_this,arguments)};_this.handleSidebarContentToggle=function(){return _this.__handleSidebarContentToggle__REACT_HOT_LOADER__.apply(_this,arguments)};_this.handleToggleLanguageModal=function(){return _this.__handleToggleLanguageModal__REACT_HOT_LOADER__.apply(_this,arguments)};_this.state={style:(0,_editorPage2.default)(),selectedChapter:'chkey1',loaded:false,showLanguageModal:false,settings:{lastSaved:'',showMarkdownToolbar:true,showBookStats:true,isSidebarContentHidden:false,previewLocation:'bottom'}};_this.methods={setSetting:_this.setSetting,atFirstChapter:_this.atFirstChapter,atLastChapter:_this.atLastChapter,selectNextChapter:_this.selectNextChapter,selectPreviousChapter:_this.selectPreviousChapter,handleSelectChapter:_this.handleSelectChapter,handleCreateChapter:_this.handleCreateChapter,handleDeleteChapter:_this.handleDeleteChapter,handleSidebarContentToggle:_this.handleSidebarContentToggle,handleToggleLanguageModal:_this.handleToggleLanguageModal,saveDraft:_this.saveDraft};_this.fakeProps={book:{titleSlug:'fake-book',draft:{chapterList:['chkey1'],chapters:{'chkey1':{title:'Chapter 1',text:'<h1>Hello world.</h1>'}}}}};return _this}(0,_createClass3.default)(EditorPage,[{key:'__componentWillReceiveProps__REACT_HOT_LOADER__',value:function __componentWillReceiveProps__REACT_HOT_LOADER__(){return this.__componentWillReceiveProps__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__componentWillReceiveProps__REACT_HOT_LOADER__',value:function __componentWillReceiveProps__REACT_HOT_LOADER__(nextProps){this.setState({selectedChapter:this.fakeProps.book.draft.chapterList[0]});this.setState({loaded:true})}},{key:'__saveDraft__REACT_HOT_LOADER__',value:function __saveDraft__REACT_HOT_LOADER__(){return this.__saveDraft__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__saveDraft__REACT_HOT_LOADER__',value:function __saveDraft__REACT_HOT_LOADER__(draft,successCallback,errorCallback){this.setSetting('lastSaved','Saving...')}},{key:'__setSetting__REACT_HOT_LOADER__',value:function __setSetting__REACT_HOT_LOADER__(){return this.__setSetting__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__setSetting__REACT_HOT_LOADER__',value:function __setSetting__REACT_HOT_LOADER__(key,value){var settings=(0,_assign2.default)({},this.state.settings);settings[key]=value;this.setState({settings:settings})}},{key:'__atFirstChapter__REACT_HOT_LOADER__',value:function __atFirstChapter__REACT_HOT_LOADER__(){return this.__atFirstChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__atFirstChapter__REACT_HOT_LOADER__',value:function __atFirstChapter__REACT_HOT_LOADER__(){return this.fakeProps.book.draft.chapterList.indexOf(this.state.selectedChapter)===0}},{key:'__atLastChapter__REACT_HOT_LOADER__',value:function __atLastChapter__REACT_HOT_LOADER__(){return this.__atLastChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__atLastChapter__REACT_HOT_LOADER__',value:function __atLastChapter__REACT_HOT_LOADER__(){return this.fakeProps.book.draft.chapterList.indexOf(this.state.selectedChapter)===this.fakeProps.book.draft.chapterList.length-1}},{key:'__selectNextChapter__REACT_HOT_LOADER__',value:function __selectNextChapter__REACT_HOT_LOADER__(){return this.__selectNextChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__selectNextChapter__REACT_HOT_LOADER__',value:function __selectNextChapter__REACT_HOT_LOADER__(){var chapterList=this.fakeProps.book.draft.chapterList;var idx=chapterList.indexOf(this.state.selectedChapter);if(chapterList[idx+1]){this.setState({selectedChapter:chapterList[idx+1]})}}},{key:'__selectPreviousChapter__REACT_HOT_LOADER__',value:function __selectPreviousChapter__REACT_HOT_LOADER__(){return this.__selectPreviousChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__selectPreviousChapter__REACT_HOT_LOADER__',value:function __selectPreviousChapter__REACT_HOT_LOADER__(){var chapterList=this.fakeProps.book.draft.chapterList;var idx=chapterList.indexOf(this.state.selectedChapter);if(chapterList[idx-1]){this.setState({selectedChapter:chapterList[idx-1]})}}},{key:'__handleSelectChapter__REACT_HOT_LOADER__',value:function __handleSelectChapter__REACT_HOT_LOADER__(){return this.__handleSelectChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleSelectChapter__REACT_HOT_LOADER__',value:function __handleSelectChapter__REACT_HOT_LOADER__(selectedChapter){this.setState({selectedChapter:selectedChapter})}},{key:'__handleCreateChapter__REACT_HOT_LOADER__',value:function __handleCreateChapter__REACT_HOT_LOADER__(){return this.__handleCreateChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleCreateChapter__REACT_HOT_LOADER__',value:function __handleCreateChapter__REACT_HOT_LOADER__(){var _this2=this;var draft=(0,_assign2.default)({},this.fakeProps.book.draft);var chapterKey='CHANGE ME';draft.chapters[chapterKey]=_book_edit_helpers.newChapter;draft.chapterList.push(chapterKey);this.saveDraft(draft,function(){_this2.setState({selectedChapter:chapterKey})})}},{key:'__handleDeleteChapter__REACT_HOT_LOADER__',value:function __handleDeleteChapter__REACT_HOT_LOADER__(){return this.__handleDeleteChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleDeleteChapter__REACT_HOT_LOADER__',value:function __handleDeleteChapter__REACT_HOT_LOADER__(){var _this3=this;var draft=(0,_assign2.default)({},this.fakeProps.book.draft);if(draft.chapterList.length>1){var idx=draft.chapterList.indexOf(this.state.selectedChapter);draft.chapterList.splice(idx,1);this.saveDraft(draft,function(){if(idx>=draft.chapterList.length){idx--}_this3.setState({selectedChapter:draft.chapterList[idx]})})}}},{key:'__handleSidebarContentToggle__REACT_HOT_LOADER__',value:function __handleSidebarContentToggle__REACT_HOT_LOADER__(){return this.__handleSidebarContentToggle__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleSidebarContentToggle__REACT_HOT_LOADER__',value:function __handleSidebarContentToggle__REACT_HOT_LOADER__(){var open=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var settings=(0,_assign2.default)({},this.state.settings);if(open){settings.isSidebarContentHidden=false}else{settings.isSidebarContentHidden=!settings.isSidebarContentHidden}this.setState({settings:settings})}},{key:'__handleToggleLanguageModal__REACT_HOT_LOADER__',value:function __handleToggleLanguageModal__REACT_HOT_LOADER__(){return this.__handleToggleLanguageModal__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleToggleLanguageModal__REACT_HOT_LOADER__',value:function __handleToggleLanguageModal__REACT_HOT_LOADER__(){console.log('handleToggleLanguageModal',this.state.showLanguageModal);this.setState({showLanguageModal:!this.state.showLanguageModal})}},{key:'render',value:function render(){console.log('Rendering EditorPage');if(this.state.loaded||true){return _react2.default.createElement('div',{className:'editor-view-container',__source:{fileName:_jsxFileName,lineNumber:223}},_react2.default.createElement(_jassy.Style,{rules:this.state.style,__source:{fileName:_jsxFileName,lineNumber:224}}),_react2.default.createElement(_modals.PanelModal,{show:this.state.showLanguageModal,__source:{fileName:_jsxFileName,lineNumber:225}}),_react2.default.createElement('div',{className:'main-sidebar-wrapper',__source:{fileName:_jsxFileName,lineNumber:226}},_react2.default.createElement(_SidebarEditor2.default,{book:this.fakeProps.book,selectedChapter:this.state.selectedChapter,settings:this.state.settings,methods:this.methods,__source:{fileName:_jsxFileName,lineNumber:227}})),_react2.default.createElement('div',{className:'main-book-content-wrapper',__source:{fileName:_jsxFileName,lineNumber:234}},_react2.default.createElement(_MainEditor2.default,{book:this.fakeProps.book,selectedChapter:this.state.selectedChapter,settings:this.state.settings,methods:this.methods,__source:{fileName:_jsxFileName,lineNumber:235}})))}return null}}]);return EditorPage}(_react2.default.Component),_class.displayName='EditorPage',_temp);var _default=EditorPage;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(EditorPage,'EditorPage','components/pages/EditorPage/EditorPage.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/EditorPage/EditorPage.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkaXRvclBhZ2UuanN4Il0sIm5hbWVzIjpbIkVkaXRvclBhZ2UiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzYXZlRHJhZnQiLCJzZXRTZXR0aW5nIiwiYXRGaXJzdENoYXB0ZXIiLCJhdExhc3RDaGFwdGVyIiwic2VsZWN0TmV4dENoYXB0ZXIiLCJzZWxlY3RQcmV2aW91c0NoYXB0ZXIiLCJoYW5kbGVTZWxlY3RDaGFwdGVyIiwiaGFuZGxlQ3JlYXRlQ2hhcHRlciIsImhhbmRsZURlbGV0ZUNoYXB0ZXIiLCJoYW5kbGVTaWRlYmFyQ29udGVudFRvZ2dsZSIsImhhbmRsZVRvZ2dsZUxhbmd1YWdlTW9kYWwiLCJzdGF0ZSIsInN0eWxlIiwic2VsZWN0ZWRDaGFwdGVyIiwibG9hZGVkIiwic2hvd0xhbmd1YWdlTW9kYWwiLCJzZXR0aW5ncyIsImxhc3RTYXZlZCIsInNob3dNYXJrZG93blRvb2xiYXIiLCJzaG93Qm9va1N0YXRzIiwiaXNTaWRlYmFyQ29udGVudEhpZGRlbiIsInByZXZpZXdMb2NhdGlvbiIsIm1ldGhvZHMiLCJmYWtlUHJvcHMiLCJib29rIiwidGl0bGVTbHVnIiwiZHJhZnQiLCJjaGFwdGVyTGlzdCIsImNoYXB0ZXJzIiwidGl0bGUiLCJ0ZXh0IiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwia2V5IiwidmFsdWUiLCJpbmRleE9mIiwibGVuZ3RoIiwiaWR4IiwiY2hhcHRlcktleSIsInB1c2giLCJzcGxpY2UiLCJvcGVuIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiczNCQUFBLDRCQUNBLDRCLDJDQUNBLDhCLDZDQUdBLHFGQUNBLHdDLHFEQUNBLDhDLHFEQUNBLDhDLDJEQUNBLG9DLHFGQU1NQSxXLDhGQU9KLG9CQUFZQyxLQUFaLENBQW1CLGlMQUNYQSxLQURXLFNBa0RuQkMseUJBbERtQix1R0F1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S00sT0FKaEIsa0RBREYsQ0FIRixDQVdFLHFDQUFLLFVBQVUsMkJBQWYsa0RBQ0Usb0RBQ0UsS0FBTSxLQUFLQyxTQUFMLENBQWVDLElBRHZCLENBRUUsZ0JBQWlCLEtBQUtiLEtBQUwsQ0FBV0UsZUFGOUIsQ0FHRSxTQUFVLEtBQUtGLEtBQUwsQ0FBV0ssUUFIdkIsQ0FJRSxRQUFTLEtBQUtNLE9BSmhCLGtEQURGLENBWEYsQ0FxQkgsQ0FDRCxNQUFPLEtBQ1IsQyx1QkF0T3NCLGdCQUFNd0IsUyxTQUV0QkMsVyxDQUFjLFkscUJBcVFSbEQsVSxvSUF2UVRBLFUiLCJmaWxlIjoiRWRpdG9yUGFnZS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vRG9jdW1lbnRzL0dpdEh1Yi9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlIH0gZnJvbSAnamFzc3knO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIGltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbmV3Q2hhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvYm9va19oZWxwZXJzL2Jvb2tfZWRpdF9oZWxwZXJzJztcbmltcG9ydCBNYWluRWRpdG9yIGZyb20gJy4vTWFpbkVkaXRvcic7XG5pbXBvcnQgZWRpdG9yUGFnZVN0eWxlIGZyb20gJy4vZWRpdG9yUGFnZS5zdHlsZSc7XG5pbXBvcnQgU2lkZWJhckVkaXRvciBmcm9tICcuL1NpZGViYXJFZGl0b3InO1xuaW1wb3J0IHsgUGFuZWxNb2RhbCB9IGZyb20gJy4uLy4uL21vZGFscyc7XG4vLyBpbXBvcnQgeyBCb29rcyB9IGZyb20gJy9pbXBvcnRzL2FwaS9ib29rcyc7XG5cbi8vIFRPRE86IFdlIHdpbGwgaGF2ZSB0byBtYWtlIHN1cmUgdGhlIGJvb2sgZXhpc3RzIHdoZW4gaGl0dGluZyB0aGlzIHBhZ2Vcbi8vIFRPRE86IElmIG5vdCB0aGUgdXNlciBzaG91bGQgYmUgcmVkaXJlY3RlZC5cblxuY2xhc3MgRWRpdG9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0VkaXRvclBhZ2UnO1xuXG4gIC8qKlxuICAgKiBFZGl0b3JQYWdlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3Igb3VyIGVkaXRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTZXQgdXAgb3VyIGluaXRpYWwgc3RhdGUgZm9yIG91ciBlbnRpcmUgYm9vayBlZGl0aW5nIGNvbXBvbmVudC5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IGVkaXRvclBhZ2VTdHlsZSgpLFxuICAgICAgc2VsZWN0ZWRDaGFwdGVyOiAnY2hrZXkxJyxcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICBzaG93TGFuZ3VhZ2VNb2RhbDogZmFsc2UsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBsYXN0U2F2ZWQ6ICcnLFxuICAgICAgICBzaG93TWFya2Rvd25Ub29sYmFyOiB0cnVlLFxuICAgICAgICBzaG93Qm9va1N0YXRzOiB0cnVlLFxuICAgICAgICBpc1NpZGViYXJDb250ZW50SGlkZGVuOiBmYWxzZSxcbiAgICAgICAgcHJldmlld0xvY2F0aW9uOiAnYm90dG9tJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBXZSBkb24ndCBoYXZlIHRvIHB1dCBtZXRob2RzIG9uIHN0YXRlLCB0aGV5IGFyZSBzdGF0aWMgJiB3aWxsIG5vdCBjaGFuZ2VcbiAgICB0aGlzLm1ldGhvZHMgPSB7XG4gICAgICBzZXRTZXR0aW5nOiB0aGlzLnNldFNldHRpbmcsXG4gICAgICBhdEZpcnN0Q2hhcHRlcjogdGhpcy5hdEZpcnN0Q2hhcHRlcixcbiAgICAgIGF0TGFzdENoYXB0ZXI6IHRoaXMuYXRMYXN0Q2hhcHRlcixcbiAgICAgIHNlbGVjdE5leHRDaGFwdGVyOiB0aGlzLnNlbGVjdE5leHRDaGFwdGVyLFxuICAgICAgc2VsZWN0UHJldmlvdXNDaGFwdGVyOiB0aGlzLnNlbGVjdFByZXZpb3VzQ2hhcHRlcixcbiAgICAgIGhhbmRsZVNlbGVjdENoYXB0ZXI6IHRoaXMuaGFuZGxlU2VsZWN0Q2hhcHRlcixcbiAgICAgIGhhbmRsZUNyZWF0ZUNoYXB0ZXI6IHRoaXMuaGFuZGxlQ3JlYXRlQ2hhcHRlcixcbiAgICAgIGhhbmRsZURlbGV0ZUNoYXB0ZXI6IHRoaXMuaGFuZGxlRGVsZXRlQ2hhcHRlcixcbiAgICAgIGhhbmRsZVNpZGViYXJDb250ZW50VG9nZ2xlOiB0aGlzLmhhbmRsZVNpZGViYXJDb250ZW50VG9nZ2xlLFxuICAgICAgaGFuZGxlVG9nZ2xlTGFuZ3VhZ2VNb2RhbDogdGhpcy5oYW5kbGVUb2dnbGVMYW5ndWFnZU1vZGFsLFxuICAgICAgc2F2ZURyYWZ0OiB0aGlzLnNhdmVEcmFmdFxuICAgIH07XG5cbiAgICAvLyBUT0RPOiBGYWtlIHBhc3Npbmcgc29tZSBib29rIGRhdGFcbiAgICB0aGlzLmZha2VQcm9wcyA9IHtcbiAgICAgIGJvb2s6IHtcbiAgICAgICAgdGl0bGVTbHVnOiAnZmFrZS1ib29rJyxcbiAgICAgICAgZHJhZnQ6IHtcbiAgICAgICAgICBjaGFwdGVyTGlzdDogWydjaGtleTEnXSxcbiAgICAgICAgICBjaGFwdGVyczoge1xuICAgICAgICAgICAgJ2Noa2V5MSc6IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdDaGFwdGVyIDEnLFxuICAgICAgICAgICAgICB0ZXh0OiAnPGgxPkhlbGxvIHdvcmxkLjwvaDE+J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gKG5leHRQcm9wcykgPT4ge1xuICAgIC8qIFRPRE86IEFkZGluZyBGYWtlIGRhdGEgaGVyZSwgaG9vayB1cCB0byBuZXcgYXBpICovXG4gICAgLy8gSWYgd2UncmUgbm8gbG9uZ2VyIGxvYWRpbmcgJiBib29rIGlzIG51bGwsIHdlIGRvbid0IGhhdmUgcHJvcGVyIGFjY2Vzcy5cbiAgICAvLyBpZiAoIW5leHRQcm9wcy5zdWJzY3JpcHRpb25Mb2FkaW5nICYmICFuZXh0UHJvcHMuYm9vaykge1xuICAgIC8vICAgLy8gV2Ugd2FudCB0byB1c2UgcmVwbGFjZSBpbnN0ZWFkIG9mIHB1c2hcbiAgICAvLyAgIC8vIHNvIHRoZSBiYWQgdXJsIGRvZXNuJ3Qgc3RheSBpbiBoaXN0b3J5XG4gICAgLy8gICBicm93c2VySGlzdG9yeS5yZXBsYWNlKCcvJyk7XG4gICAgLy8gfVxuICAgIC8vIElmIHdlJ3JlIG5vdCB3YWl0aW5nIG9uIHRoZSBzdWJzY3JpcHRpb24gYW55bW9yZSwgJiB3ZSBoYXZlbid0IHNldCB1cCBvdXJcbiAgICAvLyBzdGF0ZSBiYXNlZCBvZmYgc29tZSBib29rIHByb3BlcnRpZXMsIGxldCdzIGRvIHRoYXQgbm93LlxuICAgIC8vIGlmICghbmV4dFByb3BzLnN1YnNjcmlwdGlvbkxvYWRpbmcgJiZcbiAgICAvLyAgIG5leHRQcm9wcy5ib29rICYmICF0aGlzLnN0YXRlLmxvYWRlZCkge1xuICAgIC8vICAgLy8gVGhlIHNlbGVjdGVkIGNoYXB0ZXIgd2lsbCBiZSB0aGUgZmlyc3Qga2V5IGluIHRoZSBjaGFwdGVyIGxpc3RcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaGFwdGVyOiB0aGlzLmZha2VQcm9wcy5ib29rLmRyYWZ0LmNoYXB0ZXJMaXN0WzBdIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSk7XG4gICAgLy8gfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgYmUgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHNhdmluZyB0aGUgZHJhZnRcbiAgICovXG4gIHNhdmVEcmFmdCA9IChkcmFmdCwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSA9PiB7XG4gICAgdGhpcy5zZXRTZXR0aW5nKCdsYXN0U2F2ZWQnLCAnU2F2aW5nLi4uJyk7XG4gICAgLyogVE9ETzogTm8gbG9uZ2VyIHVzaW5nIE1ldGVvciAqL1xuICAgIC8vIE1ldGVvci5jYWxsKCd1cGRhdGVCb29rRHJhZnQnLCB0aGlzLmZha2VQcm9wcy5ib29rLl9pZCwgZHJhZnQsIChlcnIpID0+IHtcbiAgICAvLyAgIGlmICghZXJyKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U2V0dGluZyhcbiAgICAvLyAgICAgICAnbGFzdFNhdmVkJyxcbiAgICAvLyAgICAgICBgTGFzdCBzYXZlZDogJHttb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KCdoOm1tOnNzIGEnKX1gXG4gICAgLy8gICAgICk7XG4gICAgLy8gICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAvLyAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0Vycm9yIHNhdmluZyB0aGUgZHJhZnQ6ICcsIGVycik7XG4gICAgLy8gICAgIGlmIChlcnJvckNhbGxiYWNrKSB7XG4gICAgLy8gICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgc2V0U2V0dGluZyA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNldHRpbmdzKTtcbiAgICBzZXR0aW5nc1trZXldID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzIH0pO1xuICB9O1xuXG4gIGF0Rmlyc3RDaGFwdGVyID0gKCkgPT5cbiAgdGhpcy5mYWtlUHJvcHMuYm9vay5kcmFmdC5jaGFwdGVyTGlzdC5pbmRleE9mKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFwdGVyKSA9PT0gMDtcblxuICBhdExhc3RDaGFwdGVyID0gKCkgPT5cbiAgdGhpcy5mYWtlUHJvcHMuYm9vay5kcmFmdC5jaGFwdGVyTGlzdC5pbmRleE9mKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFwdGVyKSA9PT1cbiAgKHRoaXMuZmFrZVByb3BzLmJvb2suZHJhZnQuY2hhcHRlckxpc3QubGVuZ3RoIC0gMSk7XG5cbiAgc2VsZWN0TmV4dENoYXB0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhcHRlckxpc3QgPSB0aGlzLmZha2VQcm9wcy5ib29rLmRyYWZ0LmNoYXB0ZXJMaXN0O1xuICAgIGNvbnN0IGlkeCA9IGNoYXB0ZXJMaXN0LmluZGV4T2YodGhpcy5zdGF0ZS5zZWxlY3RlZENoYXB0ZXIpO1xuICAgIGlmIChjaGFwdGVyTGlzdFtpZHggKyAxXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2hhcHRlcjogY2hhcHRlckxpc3RbaWR4ICsgMV0gfSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdFByZXZpb3VzQ2hhcHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFwdGVyTGlzdCA9IHRoaXMuZmFrZVByb3BzLmJvb2suZHJhZnQuY2hhcHRlckxpc3Q7XG4gICAgY29uc3QgaWR4ID0gY2hhcHRlckxpc3QuaW5kZXhPZih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcHRlcik7XG4gICAgaWYgKGNoYXB0ZXJMaXN0W2lkeCAtIDFdKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaGFwdGVyOiBjaGFwdGVyTGlzdFtpZHggLSAxXSB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgZ2V0IHBhc3NlZCBkb3duIHRocm91Z2ggcHJvcHMgc28gdGhhdCB3ZSBjYW5cbiAgICogc2VsZWN0IGEgY2hhcHRlciBmcm9tIGEgY2hpbGQgY29tcG9uZW50IGFuZCBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoaXNcbiAgICogY29tcG9uZW50LlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0Q2hhcHRlciA9IChzZWxlY3RlZENoYXB0ZXIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaGFwdGVyIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNyZWF0ZUNoYXB0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZHJhZnQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZha2VQcm9wcy5ib29rLmRyYWZ0KTtcbiAgICAvKiBUT0RPOiBGaWd1cmUgb3V0IG5ldyB3YXkgdG8gZG8gY2hhcHRlciBrZXkgKi9cbiAgICBjb25zdCBjaGFwdGVyS2V5ID0gJ0NIQU5HRSBNRSc7XG4gICAgZHJhZnQuY2hhcHRlcnNbY2hhcHRlcktleV0gPSBuZXdDaGFwdGVyO1xuICAgIGRyYWZ0LmNoYXB0ZXJMaXN0LnB1c2goY2hhcHRlcktleSk7XG4gICAgdGhpcy5zYXZlRHJhZnQoZHJhZnQsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZENoYXB0ZXI6IGNoYXB0ZXJLZXkgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIFwiZGVsZXRpbmdcIiBhIGNoYXB0ZXIgZnJvbSB0aGUgZHJhZnRcbiAgICogYXMganVzdCByZW1vdmluZyB0aGUga2V5IGZyb20gdGhlIGNoYXB0ZXIgbGlzdC4gVGhpcyB3YXkgd2UgY291bGQgYWRkXG4gICAqIGZ1bmN0aW9uYWxpdHkgZm9yIHVzZXJzIHRvIHNlZSB0aGVpciBkZWxldGVkIGNoYXB0ZXJzLCAmIHRoZW4gJ3Blcm1hbmVudGx5J1xuICAgKiBkZWxldGUgdGhvc2UgY2hhcHRlcnMuXG4gICAqXG4gICAqIElmIHRoZXJlJ3Mgb25seSAxIGNoYXB0ZXIgcmVtYWluaW5nLCBsZXQncyBub3QgbGV0IHRoZW0gZGVsZXRlIGl0LlxuICAgKi9cbiAgaGFuZGxlRGVsZXRlQ2hhcHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkcmFmdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmFrZVByb3BzLmJvb2suZHJhZnQpO1xuICAgIC8vIERvbid0IGRlbGV0ZSB0aGUgbGFzdCBjaGFwdGVyLiBBIGJvb2sgbmVlZHMgYXQgbGVhc3QgMSBjaGFwdGVyLlxuICAgIGlmIChkcmFmdC5jaGFwdGVyTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgaWR4ID0gZHJhZnQuY2hhcHRlckxpc3QuaW5kZXhPZih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcHRlcik7XG4gICAgICBkcmFmdC5jaGFwdGVyTGlzdC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuc2F2ZURyYWZ0KGRyYWZ0LCAoKSA9PiB7XG4gICAgICAgIGlmIChpZHggPj0gZHJhZnQuY2hhcHRlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgaWR4LS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2hhcHRlcjogZHJhZnQuY2hhcHRlckxpc3RbaWR4XSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc2lkZWJhciwgdW5sZXNzIHRydWUgaXMgcGFzc2VkIGluLiBUaGlzIGVuc3VyZXNcbiAgICogdGhlIHNpZGViYXIgaXMgc2hvd24uXG4gICAqIEBwYXJhbSBvcGVuXG4gICAqL1xuICBoYW5kbGVTaWRlYmFyQ29udGVudFRvZ2dsZSA9IChvcGVuID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2V0dGluZ3MpO1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBzZXR0aW5ncy5pc1NpZGViYXJDb250ZW50SGlkZGVuID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldHRpbmdzLmlzU2lkZWJhckNvbnRlbnRIaWRkZW4gPSAhc2V0dGluZ3MuaXNTaWRlYmFyQ29udGVudEhpZGRlbjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZUxhbmd1YWdlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZVRvZ2dsZUxhbmd1YWdlTW9kYWwnLCB0aGlzLnN0YXRlLnNob3dMYW5ndWFnZU1vZGFsKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dMYW5ndWFnZU1vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TGFuZ3VhZ2VNb2RhbFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgcGFnZSBpcyBsb2FkaW5nIGRvIG9uZSB0aGluZywgb25jZSB0aGUgcGFnZSBpcyBkb25lIGxvYWRpbmcgZG8gYVxuICAgKiBjaGVjayB0byBtYWtlIHN1cmUgdGhlcmUgaXMgYSBib29rIHRvIHZpZXcuXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1JlbmRlcmluZyBFZGl0b3JQYWdlJyk7XG4gICAgLy8gT3RoZXJ3aXNlLCBsZXQncyBtYWtlIHN1cmUgdGhlcmUncyBhIGJvb2sgb3RoZXJ3aXNlIHJlZGlyZWN0XG4gICAgLy8gVGhlIHF1ZXJ5IGl0c2VsZiBmcm9tIHRoZSBzZXJ2ZXIgd2lsbFxuICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSByaWdodCBib29rIGlzIHJldHVybmVkIGlmXG4gICAgLy8gaXQgZXhpc3RzIGZvciB0aGlzIHVzZXIuIFdlIHdvdWxkbid0IGxlYXZlIHRoYXQgdXAgdG8gdGhlIGNsaWVudC5cblxuICAgIC8vIFRPRE86IFNFVFRJTkcgVEhJUyBUTyBBTFdBWVMgTE9BREVEIEZPUiBOT1dcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkZWQgfHwgdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3Itdmlldy1jb250YWluZXJcIj5cbiAgICAgICAgICA8U3R5bGUgcnVsZXM9e3RoaXMuc3RhdGUuc3R5bGV9IC8+XG4gICAgICAgICAgPFBhbmVsTW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TGFuZ3VhZ2VNb2RhbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICA8U2lkZWJhckVkaXRvclxuICAgICAgICAgICAgICBib29rPXt0aGlzLmZha2VQcm9wcy5ib29rfVxuICAgICAgICAgICAgICBzZWxlY3RlZENoYXB0ZXI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDaGFwdGVyfVxuICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5zdGF0ZS5zZXR0aW5nc31cbiAgICAgICAgICAgICAgbWV0aG9kcz17dGhpcy5tZXRob2RzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9vay1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxNYWluRWRpdG9yXG4gICAgICAgICAgICAgIGJvb2s9e3RoaXMuZmFrZVByb3BzLmJvb2t9XG4gICAgICAgICAgICAgIHNlbGVjdGVkQ2hhcHRlcj17dGhpcy5zdGF0ZS5zZWxlY3RlZENoYXB0ZXJ9XG4gICAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnN0YXRlLnNldHRpbmdzfVxuICAgICAgICAgICAgICBtZXRob2RzPXt0aGlzLm1ldGhvZHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHdoZXJlIHdlIGFkZCBvdXIgYm9vayB0byB0aGUgcHJvcHMgb2Ygb3VyIGNvbXBvbmVudC5cbiAqIFNvbWUgdGhpbmdzIHRvIG5vdGUgYWJvdXQgdGhpcy4gV2hlbiBwcm9wcyBjaGFuZ2UsIGl0IGNvdWxkIGNhdXNlIG91clxuICogY29tcG9uZW50cyB0byByZS1yZW5kZXIuIElmIHdlJ3JlIHRha2luZyB0aGUgZW50aXJlIGJvb2sgb2JqZWN0LCB3aGVuXG4gKiBhIHJlYWRlciBpcyBhZGRlZCwgb3IgYW5vdGhlciB2YWx1ZSBpcyBjaGFuZ2VkIGl0IG1heSBjYXVzZSBzb21lIHVud2FudGVkXG4gKiByZW5kZXJpbmcuIFdlIHdpbGwgaGF2ZSB0byBjYXJlZnVsbHkgaW5zcGVjdCB0aGlzIGFjdGl2aXR5IGFuZCBwcm9wZXJseVxuICogYWRqdXN0IGluIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuXG4gKlxuICogcmV0dXJuOiBib29rIGFuZCBsb2FkaW5nIGFyZSBib3RoIHJlYWN0aXZlIGRhdGEgc291cmNlcy4gYm9vayBpcyByZWFjdGl2ZVxuICogYmVjYXVzZSBpdCBjb21lcyBmcm9tIGEgbWV0ZW9yIG1vbmdvZGIgcmVhY3RpdmUgZW52aXJvbm1lbnQuIGxvYWRpbmcgaXMgYVxuICogcmVhY3RpdmUgdmFyaWFibGUgdGhhdCBpcyB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIgZm9yIGJvb2suIFdoZW4gdGhlXG4gKiBzdWJzY3JpcHRpb24gaXMgcmVhZHksIGxvYWRpbmcgd2lsbCBiZSBmYWxzZSAoYmVjYXVzZSB3ZSBhcmUgYXNzaWduaW5nIGl0XG4gKiB0aGUgbmVnYXRlIHZhbHVlIG9mIHRoZSBoYW5kbGVyLnJlYWR5KCkgZnVuY3Rpb24pXG4gKi9cbi8vIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhaW5lcigocHJvcHMpID0+IHtcbi8vICAgLy8gR2V0IHRoZSBib29rIGZyb20gdGhlIHNsdWdcbi8vICAgY29uc3QgYm9va0hhbmRsZSA9IE1ldGVvci5zdWJzY3JpYmUoXG4vLyAgICAgJ2dldEJvb2tGb3JCb29rRWRpdCcsXG4vLyAgICAgcHJvcHMucGFyYW1zLmJvb2tTbHVnXG4vLyAgICk7XG4vLyAgIC8vIEEgdmFyaWFibGUgdG8gc2VlIGlmIHRoZSBib29rIGlzIHN0aWxsIGxvYWRpbmdcbi8vICAgY29uc3Qgc3Vic2NyaXB0aW9uTG9hZGluZyA9ICFib29rSGFuZGxlLnJlYWR5KCk7XG4vLyAgIGNvbnN0IGJvb2sgPSBCb29rcy5maW5kKHt9KS5mZXRjaCgpWzBdO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHN1YnNjcmlwdGlvbkxvYWRpbmcsXG4vLyAgICAgYm9va1xuLy8gICB9O1xuLy8gfSwgRWRpdG9yUGFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclBhZ2U7XG5cbiJdfQ==