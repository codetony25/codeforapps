'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='components/pages/EditorPage/SidebarEditor/SettingSidebar.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var SettingSidebar=(_temp=_class=function(_React$Component){(0,_inherits3.default)(SettingSidebar,_React$Component);function SettingSidebar(props){(0,_classCallCheck3.default)(this,SettingSidebar);var _this=(0,_possibleConstructorReturn3.default)(this,(SettingSidebar.__proto__||(0,_getPrototypeOf2.default)(SettingSidebar)).call(this,props));_this.renderSettingsToggleByKey=function(){return _this.__renderSettingsToggleByKey__REACT_HOT_LOADER__.apply(_this,arguments)};return _this}(0,_createClass3.default)(SettingSidebar,[{key:'__renderSettingsToggleByKey__REACT_HOT_LOADER__',value:function __renderSettingsToggleByKey__REACT_HOT_LOADER__(){return this.__renderSettingsToggleByKey__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderSettingsToggleByKey__REACT_HOT_LOADER__',value:function __renderSettingsToggleByKey__REACT_HOT_LOADER__(key){return this.props.settings[key]?_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:13}},'Showing'):_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:13}},'Hiding')}},{key:'render',value:function render(){var _this2=this;console.log('Rendering SettingSidebar');return _react2.default.createElement('div',{className:'sidebar-settings-container',__source:{fileName:_jsxFileName,lineNumber:19}},_react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:20}},'Settings'),_react2.default.createElement('div',{className:'sidebar-content-block',onClick:function onClick(){return _this2.props.methods.setSetting('showMarkdownToolbar',!_this2.props.settings.showMarkdownToolbar)},__source:{fileName:_jsxFileName,lineNumber:21}},'Toolbar ',this.renderSettingsToggleByKey('showMarkdownToolbar'),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:27}},'Hide or Show the toolbar'),_react2.default.createElement('div',{className:'switch',__source:{fileName:_jsxFileName,lineNumber:28}},_react2.default.createElement('input',{id:'switch-1',type:'checkbox',className:'switch-input',__source:{fileName:_jsxFileName,lineNumber:29}}),_react2.default.createElement('label',{className:'switch-label',__source:{fileName:_jsxFileName,lineNumber:30}}))),_react2.default.createElement('div',{className:'sidebar-content-block',onClick:function onClick(){return _this2.props.methods.setSetting('showBookStats',!_this2.props.settings.showBookStats)},__source:{fileName:_jsxFileName,lineNumber:33}},'Stats ',this.renderSettingsToggleByKey('showBookStats'),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:39}},'Hide or Show Book Stats'),_react2.default.createElement('span',{className:'switch',__source:{fileName:_jsxFileName,lineNumber:40}},_react2.default.createElement('input',{type:'checkbox',className:'toggle-input',__source:{fileName:_jsxFileName,lineNumber:41}}))),_react2.default.createElement('div',{className:'sidebar-content-block',__source:{fileName:_jsxFileName,lineNumber:44}},'Preview Screen',_react2.default.createElement('form',{__source:{fileName:_jsxFileName,lineNumber:46}},_react2.default.createElement('select',{value:this.props.settings.previewLocation,onChange:function onChange(event){return _this2.props.methods.setSetting('previewLocation',event.target.value)},__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement('option',{value:'bottom',__source:{fileName:_jsxFileName,lineNumber:54}},'On Bottom'),_react2.default.createElement('option',{value:'side',__source:{fileName:_jsxFileName,lineNumber:55}},'On Side'),_react2.default.createElement('option',{value:'tab',__source:{fileName:_jsxFileName,lineNumber:56}},'In Tab on Toolbar')))))}}]);return SettingSidebar}(_react2.default.Component),_class.displayName='SettingSidebar',_temp);var _default=SettingSidebar;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(SettingSidebar,'SettingSidebar','components/pages/EditorPage/SidebarEditor/SettingSidebar.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/EditorPage/SidebarEditor/SettingSidebar.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmdTaWRlYmFyLmpzeCJdLCJuYW1lcyI6WyJTZXR0aW5nU2lkZWJhciIsInByb3BzIiwicmVuZGVyU2V0dGluZ3NUb2dnbGVCeUtleSIsImtleSIsInNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJzZXRTZXR0aW5nIiwic2hvd01hcmtkb3duVG9vbGJhciIsInNob3dCb29rU3RhdHMiLCJwcmV2aWV3TG9jYXRpb24iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiJneUJBQUEsNEIsZ0lBRU1BLGUsa0dBSUosd0JBQVlDLEtBQVosQ0FBbUIsNkxBQ1hBLEtBRFcsU0FJbkJDLHlCQUptQiw2R0FFbEIsQyw0V0FFNEJDLEcsQ0FBUSxDQUNuQyxNQUFRLE1BQUtGLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkQsR0FBcEIsQ0FBRCxDQUNMLGdHQURLLENBQ2tCLCtGQUMxQixDLHVDQUVRLGlCQUNQRSxRQUFRQyxHQUFSLENBQVksMEJBQVosRUFDQSxNQUNFLHNDQUFLLFVBQVUsNEJBQWYsaURBQ0UsK0ZBREYsQ0FFRSxxQ0FDRSxVQUFVLHVCQURaLENBRUUsUUFBUyx5QkFBTSxRQUFLTCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJDLFVBQW5CLENBQ2IscUJBRGEsQ0FDVSxDQUFDLE9BQUtQLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkssbUJBRC9CLENBQU4sQ0FGWCw0REFLVyxLQUFLUCx5QkFBTCxDQUErQixxQkFBL0IsQ0FMWCxDQU1FLDhHQU5GLENBT0UscUNBQUssVUFBVSxRQUFmLGlEQUNFLHVDQUFPLEdBQUcsVUFBVixDQUFxQixLQUFLLFVBQTFCLENBQXFDLFVBQVUsY0FBL0MsaURBREYsQ0FFRSx1Q0FBTyxVQUFVLGNBQWpCLGlEQUZGLENBUEYsQ0FGRixDQWNFLHFDQUNFLFVBQVUsdUJBRFosQ0FFRSxRQUFTLHlCQUFNLFFBQUtELEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsVUFBbkIsQ0FDYixlQURhLENBQ0ksQ0FBQyxPQUFLUCxLQUFMLENBQVdHLFFBQVgsQ0FBb0JNLGFBRHpCLENBQU4sQ0FGWCwwREFLUyxLQUFLUix5QkFBTCxDQUErQixlQUEvQixDQUxULENBTUUsNkdBTkYsQ0FPRSxzQ0FBTSxVQUFVLFFBQWhCLGlEQUNFLHVDQUFPLEtBQUssVUFBWixDQUF1QixVQUFVLGNBQWpDLGlEQURGLENBUEYsQ0FkRixDQXlCRSxxQ0FBSyxVQUFVLHVCQUFmLGtFQUVFLHNGQUNFLHdDQUNFLE1BQU8sS0FBS0QsS0FBTCxDQUFXRyxRQUFYLENBQW9CTyxlQUQ3QixDQUVFLFNBQVUsa0JBQUNDLEtBQUQsUUFDUixRQUFLWCxLQUFMLENBQVdNLE9BQVgsQ0FDR0MsVUFESCxDQUNjLGlCQURkLENBQ2lDSSxNQUFNQyxNQUFOLENBQWFDLEtBRDlDLENBRFEsQ0FGWixpREFPRSx3Q0FBUSxNQUFNLFFBQWQsNkRBUEYsQ0FRRSx3Q0FBUSxNQUFNLE1BQWQsMkRBUkYsQ0FTRSx3Q0FBUSxNQUFNLEtBQWQscUVBVEYsQ0FERixDQUZGLENBekJGLENBMkNILEMsMkJBM0QwQixnQkFBTUMsUyxTQUUxQkMsVyxDQUFjLGdCLHFCQTZEUmhCLGMsb0lBL0RUQSxjIiwiZmlsZSI6IlNldHRpbmdTaWRlYmFyLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9JZGVhUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZXR0aW5nU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1NldHRpbmdTaWRlYmFyJztcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlclNldHRpbmdzVG9nZ2xlQnlLZXkgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuICh0aGlzLnByb3BzLnNldHRpbmdzW2tleV0pID9cbiAgICAgIDxzcGFuPlNob3dpbmc8L3NwYW4+IDogPHNwYW4+SGlkaW5nPC9zcGFuPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1JlbmRlcmluZyBTZXR0aW5nU2lkZWJhcicpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2V0dGluZ3MtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5TZXR0aW5nczwvaDM+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubWV0aG9kcy5zZXRTZXR0aW5nKFxuICAgICAgICAgICAgJ3Nob3dNYXJrZG93blRvb2xiYXInLCAhdGhpcy5wcm9wcy5zZXR0aW5ncy5zaG93TWFya2Rvd25Ub29sYmFyKX1cbiAgICAgICAgPlxuICAgICAgICAgIFRvb2xiYXIge3RoaXMucmVuZGVyU2V0dGluZ3NUb2dnbGVCeUtleSgnc2hvd01hcmtkb3duVG9vbGJhcicpfVxuICAgICAgICAgIDxwPkhpZGUgb3IgU2hvdyB0aGUgdG9vbGJhcjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic3dpdGNoLTFcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1sYWJlbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1jb250ZW50LWJsb2NrXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm1ldGhvZHMuc2V0U2V0dGluZyhcbiAgICAgICAgICAgICdzaG93Qm9va1N0YXRzJywgIXRoaXMucHJvcHMuc2V0dGluZ3Muc2hvd0Jvb2tTdGF0cyl9XG4gICAgICAgID5cbiAgICAgICAgICBTdGF0cyB7dGhpcy5yZW5kZXJTZXR0aW5nc1RvZ2dsZUJ5S2V5KCdzaG93Qm9va1N0YXRzJyl9XG4gICAgICAgICAgPHA+SGlkZSBvciBTaG93IEJvb2sgU3RhdHM8L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwidG9nZ2xlLWlucHV0XCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgUHJldmlldyBTY3JlZW5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2V0dGluZ3MucHJldmlld0xvY2F0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWV0aG9kc1xuICAgICAgICAgICAgICAgICAgLnNldFNldHRpbmcoJ3ByZXZpZXdMb2NhdGlvbicsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm90dG9tXCI+T24gQm90dG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaWRlXCI+T24gU2lkZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGFiXCI+SW4gVGFiIG9uIFRvb2xiYXI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1NpZGViYXI7XG4iXX0=