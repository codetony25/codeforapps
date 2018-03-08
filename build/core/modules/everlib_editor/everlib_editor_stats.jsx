'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _jsxFileName='core/modules/everlib_editor/everlib_editor_stats.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _underscore=require('underscore.string');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EverLibEditorStats=function(_React$Component){(0,_inherits3.default)(EverLibEditorStats,_React$Component);function EverLibEditorStats(props){(0,_classCallCheck3.default)(this,EverLibEditorStats);var _this=(0,_possibleConstructorReturn3.default)(this,(EverLibEditorStats.__proto__||(0,_getPrototypeOf2.default)(EverLibEditorStats)).call(this,props));_this.getWordsInBook=function(){return _this.__getWordsInBook__REACT_HOT_LOADER__.apply(_this,arguments)};_this.getPagesInBook=function(){return _this.__getPagesInBook__REACT_HOT_LOADER__.apply(_this,arguments)};_this.getWordsInChapter=function(){return _this.__getWordsInChapter__REACT_HOT_LOADER__.apply(_this,arguments)};return _this}(0,_createClass3.default)(EverLibEditorStats,[{key:'__getWordsInBook__REACT_HOT_LOADER__',value:function __getWordsInBook__REACT_HOT_LOADER__(){return this.__getWordsInBook__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__getWordsInBook__REACT_HOT_LOADER__',value:function __getWordsInBook__REACT_HOT_LOADER__(){var _props$book$draft=this.props.book.draft;var chapterList=_props$book$draft.chapterList;var chapters=_props$book$draft.chapters;var wordsInBook=0;chapterList.forEach(function(key){return wordsInBook+=(0,_underscore.words)(chapters[key].text).length});return wordsInBook}},{key:'__getPagesInBook__REACT_HOT_LOADER__',value:function __getPagesInBook__REACT_HOT_LOADER__(){return this.__getPagesInBook__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__getPagesInBook__REACT_HOT_LOADER__',value:function __getPagesInBook__REACT_HOT_LOADER__(){return~~(this.getWordsInBook()/250)+1}},{key:'__getWordsInChapter__REACT_HOT_LOADER__',value:function __getWordsInChapter__REACT_HOT_LOADER__(){return this.__getWordsInChapter__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__getWordsInChapter__REACT_HOT_LOADER__',value:function __getWordsInChapter__REACT_HOT_LOADER__(){return(0,_underscore.words)(this.props.book.draft.chapters[this.props.selectedChapter].text).length}},{key:'render',value:function render(){console.log('Rendering BookEditStats');return this.props.settings.showBookStats?_react2.default.createElement('div',{className:'book-edit-stats',__source:{fileName:_jsxFileName,lineNumber:29}},_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:30}},'Words in Chapter: ',this.getWordsInChapter()),_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:31}},'Words in Book: ',this.getWordsInBook()),_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:32}},'Pages in Book: ',this.getPagesInBook()),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:33}},this.props.settings.lastSaved)):null}}]);return EverLibEditorStats}(_react2.default.Component);var _default=EverLibEditorStats;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(EverLibEditorStats,'EverLibEditorStats','core/modules/everlib_editor/everlib_editor_stats.jsx');__REACT_HOT_LOADER__.register(_default,'default','core/modules/everlib_editor/everlib_editor_stats.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZXJsaWJfZWRpdG9yX3N0YXRzLmpzeCJdLCJuYW1lcyI6WyJFdmVyTGliRWRpdG9yU3RhdHMiLCJwcm9wcyIsImdldFdvcmRzSW5Cb29rIiwiZ2V0UGFnZXNJbkJvb2siLCJnZXRXb3Jkc0luQ2hhcHRlciIsImJvb2siLCJkcmFmdCIsImNoYXB0ZXJMaXN0IiwiY2hhcHRlcnMiLCJ3b3Jkc0luQm9vayIsImZvckVhY2giLCJrZXkiLCJ0ZXh0IiwibGVuZ3RoIiwic2VsZWN0ZWRDaGFwdGVyIiwiY29uc29sZSIsImxvZyIsInNldHRpbmdzIiwic2hvd0Jvb2tTdGF0cyIsImxhc3RTYXZlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjJ3QkFBQSw0QiwyQ0FDQSw2QyxxRkFFTUEsbUIsd0ZBRUosNEJBQVlDLEtBQVosQ0FBbUIseU1BQ1hBLEtBRFcsU0FJbkJDLGNBSm1CLDRGQVluQkMsY0FabUIsNEZBZW5CQyxpQkFmbUIscUdBRWxCLEMsMFRBRXNCLHVCQUNhLEtBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkMsS0FEN0IsSUFDYkMsWUFEYSxtQkFDYkEsV0FEYSxJQUNBQyxTQURBLG1CQUNBQSxRQURBLENBRXJCLEdBQUlDLGFBQWMsQ0FBbEIsQ0FDQUYsWUFBWUcsT0FBWixDQUFvQixTQUFDQyxHQUFELFFBQ2xCRixjQUFlLHNCQUFNRCxTQUFTRyxHQUFULEVBQWNDLElBQXBCLEVBQTBCQyxNQUR2QixDQUFwQixFQUVBLE1BQU9KLFlBQ1IsQyxxUkFHQyxDQUFDLEVBQUUsS0FBS1AsY0FBTCxHQUF3QixHQUExQixDQUFELENBQWtDLEMscVNBR2xDLHNCQUNFLEtBQUtELEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0JFLFFBQXRCLENBQStCLEtBQUtQLEtBQUwsQ0FBV2EsZUFBMUMsRUFBMkRGLElBRDdELEVBRUVDLE0sd0NBRUssQ0FDUEUsUUFBUUMsR0FBUixDQUFZLHlCQUFaLEVBQ0EsTUFBUSxNQUFLZixLQUFMLENBQVdnQixRQUFYLENBQW9CQyxhQUFyQixDQUNKLHFDQUFLLFVBQVUsaUJBQWYsaURBQ0MsMkdBQXlCLEtBQUtkLGlCQUFMLEVBQXpCLENBREQsQ0FFQyx3R0FBc0IsS0FBS0YsY0FBTCxFQUF0QixDQUZELENBR0Msd0dBQXNCLEtBQUtDLGNBQUwsRUFBdEIsQ0FIRCxDQUlDLG1GQUFJLEtBQUtGLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JFLFNBQXhCLENBSkQsQ0FESSxDQU1LLElBQ2IsQywrQkEvQjhCLGdCQUFNQyxTLGVBbUN4QnBCLGtCLG1JQW5DVEEsa0IiLCJmaWxlIjoiZXZlcmxpYl9lZGl0b3Jfc3RhdHMuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSAndW5kZXJzY29yZS5zdHJpbmcnO1xuXG5jbGFzcyBFdmVyTGliRWRpdG9yU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgZ2V0V29yZHNJbkJvb2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFwdGVyTGlzdCwgY2hhcHRlcnMgfSA9IHRoaXMucHJvcHMuYm9vay5kcmFmdDtcbiAgICBsZXQgd29yZHNJbkJvb2sgPSAwO1xuICAgIGNoYXB0ZXJMaXN0LmZvckVhY2goKGtleSkgPT5cbiAgICAgIHdvcmRzSW5Cb29rICs9IHdvcmRzKGNoYXB0ZXJzW2tleV0udGV4dCkubGVuZ3RoKTtcbiAgICByZXR1cm4gd29yZHNJbkJvb2s7XG4gIH07XG5cbiAgZ2V0UGFnZXNJbkJvb2sgPSAoKSA9PlxuICAgIH5+KHRoaXMuZ2V0V29yZHNJbkJvb2soKSAvIDI1MCkgKyAxO1xuXG4gIGdldFdvcmRzSW5DaGFwdGVyID0gKCkgPT5cbiAgICB3b3JkcyhcbiAgICAgIHRoaXMucHJvcHMuYm9vay5kcmFmdC5jaGFwdGVyc1t0aGlzLnByb3BzLnNlbGVjdGVkQ2hhcHRlcl0udGV4dFxuICAgICkubGVuZ3RoO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUmVuZGVyaW5nIEJvb2tFZGl0U3RhdHMnKTtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuc2V0dGluZ3Muc2hvd0Jvb2tTdGF0cykgP1xuICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiYm9vay1lZGl0LXN0YXRzXCI+XG4gICAgICAgIDxzcGFuPldvcmRzIGluIENoYXB0ZXI6IHt0aGlzLmdldFdvcmRzSW5DaGFwdGVyKCl9PC9zcGFuPlxuICAgICAgICA8c3Bhbj5Xb3JkcyBpbiBCb29rOiB7dGhpcy5nZXRXb3Jkc0luQm9vaygpfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+UGFnZXMgaW4gQm9vazoge3RoaXMuZ2V0UGFnZXNJbkJvb2soKX08L3NwYW4+XG4gICAgICAgIDxwPnt0aGlzLnByb3BzLnNldHRpbmdzLmxhc3RTYXZlZH08L3A+XG4gICAgICA8L2Rpdj4pIDogbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZXJMaWJFZGl0b3JTdGF0cztcbiJdfQ==