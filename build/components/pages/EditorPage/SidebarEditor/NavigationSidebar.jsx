'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='components/pages/EditorPage/SidebarEditor/NavigationSidebar.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRouter=require('react-router');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var NavigationSidebar=(_temp=_class=function(_React$Component){(0,_inherits3.default)(NavigationSidebar,_React$Component);function NavigationSidebar(props){(0,_classCallCheck3.default)(this,NavigationSidebar);return(0,_possibleConstructorReturn3.default)(this,(NavigationSidebar.__proto__||(0,_getPrototypeOf2.default)(NavigationSidebar)).call(this,props))}(0,_createClass3.default)(NavigationSidebar,[{key:'render',value:function render(){var _this2=this;console.log('Rendering NavigationSidebar');return _react2.default.createElement('div',{className:'sidebar-navigation-container',__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement('div',{className:'book-edit-sidebar-home-icon',onClick:function onClick(){return _reactRouter.browserHistory.push('/book/'+_this2.props.titleSlug)},__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement('i',{className:'icon ion-android-home',__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:21}},'Book Home')),_react2.default.createElement('div',{className:this.props.active=='Chapters'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Chapters')},__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement('i',{className:'icon ion-ios-book',__source:{fileName:_jsxFileName,lineNumber:30}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:31}},'Chapters')),_react2.default.createElement('div',{className:this.props.active=='Details'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Details')},__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement('i',{className:'icon ion-information-circled',__source:{fileName:_jsxFileName,lineNumber:40}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:41}},'Details')),_react2.default.createElement('div',{className:this.props.active=='Images'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Images')},__source:{fileName:_jsxFileName,lineNumber:43}},_react2.default.createElement('i',{className:'icon ion-images',__source:{fileName:_jsxFileName,lineNumber:50}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:51}},'Images')),_react2.default.createElement('div',{className:this.props.active=='Help'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Help')},__source:{fileName:_jsxFileName,lineNumber:53}},_react2.default.createElement('i',{className:'icon ion-help-circled',__source:{fileName:_jsxFileName,lineNumber:60}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:61}},'Help')),_react2.default.createElement('div',{className:this.props.active=='Settings'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Settings')},__source:{fileName:_jsxFileName,lineNumber:63}},_react2.default.createElement('i',{className:'icon ion-ios-gear',__source:{fileName:_jsxFileName,lineNumber:70}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:71}},'Settings')),_react2.default.createElement('div',{className:this.props.active=='Publish'&&!this.props.settings.isSidebarContentHidden?'active':'',onClick:function onClick(){return _this2.props.show('Publish')},__source:{fileName:_jsxFileName,lineNumber:73}},_react2.default.createElement('i',{className:'icon ion-upload',__source:{fileName:_jsxFileName,lineNumber:80}}),_react2.default.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:81}},'Publish')),_react2.default.createElement('div',{className:'book-edit-sidebar-toggle',onClick:function onClick(){return _this2.props.methods.handleSidebarContentToggle()},__source:{fileName:_jsxFileName,lineNumber:84}},_react2.default.createElement('i',{className:'icon ion-arrow-swap',__source:{fileName:_jsxFileName,lineNumber:88}})))}}]);return NavigationSidebar}(_react2.default.Component),_class.displayName='NavigationSidebar',_temp);var _default=NavigationSidebar;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(NavigationSidebar,'NavigationSidebar','components/pages/EditorPage/SidebarEditor/NavigationSidebar.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/EditorPage/SidebarEditor/NavigationSidebar.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmlnYXRpb25TaWRlYmFyLmpzeCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uU2lkZWJhciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ0aXRsZVNsdWciLCJhY3RpdmUiLCJzZXR0aW5ncyIsImlzU2lkZWJhckNvbnRlbnRIaWRkZW4iLCJzaG93IiwibWV0aG9kcyIsImhhbmRsZVNpZGViYXJDb250ZW50VG9nZ2xlIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiJteUJBQUEsNEIsMkNBQ0EseUMscUZBRU1BLGtCLHFHQUlKLDJCQUFZQyxLQUFaLENBQW1CLGtNQUNYQSxLQURXLEVBRWxCLEMsa0ZBRVEsaUJBQ1BDLFFBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUNBLE1BQ0Usc0NBQUssVUFBVSw4QkFBZixpREFDRSxxQ0FDRSxVQUFVLDZCQURaLENBRUUsUUFBUyx5QkFBTSw2QkFBZUMsSUFBZixVQUE2QixPQUFLSCxLQUFMLENBQVdJLFNBQXhDLENBQU4sQ0FGWCxpREFJRSxtQ0FBRyxVQUFVLHVCQUFiLGlEQUpGLENBS0UsK0ZBTEYsQ0FERixDQVFFLHFDQUNFLFVBQ0UsS0FBS0osS0FBTCxDQUFXSyxNQUFYLEVBQXFCLFVBQXJCLEVBQ0EsQ0FBQyxLQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JDLHNCQURyQixDQUM4QyxRQUQ5QyxDQUN5RCxFQUg3RCxDQUtFLFFBQVMseUJBQU0sUUFBS1AsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFVBQWhCLENBQU4sQ0FMWCxpREFPRSxtQ0FBRyxVQUFVLG1CQUFiLGlEQVBGLENBUUUsOEZBUkYsQ0FSRixDQWtCRSxxQ0FDRSxVQUNFLEtBQUtSLEtBQUwsQ0FBV0ssTUFBWCxFQUFxQixTQUFyQixFQUNBLENBQUMsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxzQkFEckIsQ0FDOEMsUUFEOUMsQ0FDeUQsRUFIN0QsQ0FLRSxRQUFTLHlCQUFNLFFBQUtQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQixTQUFoQixDQUFOLENBTFgsaURBT0UsbUNBQUcsVUFBVSw4QkFBYixpREFQRixDQVFFLDZGQVJGLENBbEJGLENBNEJFLHFDQUNFLFVBQ0UsS0FBS1IsS0FBTCxDQUFXSyxNQUFYLEVBQXFCLFFBQXJCLEVBQ0EsQ0FBQyxLQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JDLHNCQURyQixDQUM4QyxRQUQ5QyxDQUN5RCxFQUg3RCxDQUtFLFFBQVMseUJBQU0sUUFBS1AsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFFBQWhCLENBQU4sQ0FMWCxpREFPRSxtQ0FBRyxVQUFVLGlCQUFiLGlEQVBGLENBUUUsNEZBUkYsQ0E1QkYsQ0FzQ0UscUNBQ0UsVUFDRSxLQUFLUixLQUFMLENBQVdLLE1BQVgsRUFBcUIsTUFBckIsRUFDQSxDQUFDLEtBQUtMLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsc0JBRHJCLENBQzhDLFFBRDlDLENBQ3lELEVBSDdELENBS0UsUUFBUyx5QkFBTSxRQUFLUCxLQUFMLENBQVdRLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBTixDQUxYLGlEQU9FLG1DQUFHLFVBQVUsdUJBQWIsaURBUEYsQ0FRRSwwRkFSRixDQXRDRixDQWdERSxxQ0FDRSxVQUNFLEtBQUtSLEtBQUwsQ0FBV0ssTUFBWCxFQUFxQixVQUFyQixFQUNBLENBQUMsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxzQkFEckIsQ0FDOEMsUUFEOUMsQ0FDeUQsRUFIN0QsQ0FLRSxRQUFTLHlCQUFNLFFBQUtQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQixVQUFoQixDQUFOLENBTFgsaURBT0UsbUNBQUcsVUFBVSxtQkFBYixpREFQRixDQVFFLDhGQVJGLENBaERGLENBMERFLHFDQUNFLFVBQ0UsS0FBS1IsS0FBTCxDQUFXSyxNQUFYLEVBQXFCLFNBQXJCLEVBQ0EsQ0FBQyxLQUFLTCxLQUFMLENBQVdNLFFBQVgsQ0FBb0JDLHNCQURyQixDQUM4QyxRQUQ5QyxDQUN5RCxFQUg3RCxDQUtFLFFBQVMseUJBQU0sUUFBS1AsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFNBQWhCLENBQU4sQ0FMWCxpREFPRSxtQ0FBRyxVQUFVLGlCQUFiLGlEQVBGLENBUUUsNkZBUkYsQ0ExREYsQ0FxRUUscUNBQ0UsVUFBVSwwQkFEWixDQUVFLFFBQVMseUJBQU0sUUFBS1IsS0FBTCxDQUFXUyxPQUFYLENBQW1CQywwQkFBbkIsRUFBTixDQUZYLGlEQUlFLG1DQUFHLFVBQVUscUJBQWIsaURBSkYsQ0FyRUYsQ0E2RUgsQyw4QkF4RjZCLGdCQUFNQyxTLFNBRTdCQyxXLENBQWMsbUIscUJBMEZSYixpQixvSUE1RlRBLGlCIiwiZmlsZSI6Ik5hdmlnYXRpb25TaWRlYmFyLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9Qcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIE5hdmlnYXRpb25TaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvblNpZGViYXInO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgTmF2aWdhdGlvblNpZGViYXInKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hdmlnYXRpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJib29rLWVkaXQtc2lkZWJhci1ob21lLWljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJyb3dzZXJIaXN0b3J5LnB1c2goYC9ib29rLyR7dGhpcy5wcm9wcy50aXRsZVNsdWd9YCl9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1hbmRyb2lkLWhvbWVcIiAvPlxuICAgICAgICAgIDxwPkJvb2sgSG9tZTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmUgPT0gJ0NoYXB0ZXJzJyAmJlxuICAgICAgICAgICAgIXRoaXMucHJvcHMuc2V0dGluZ3MuaXNTaWRlYmFyQ29udGVudEhpZGRlbiA/IFwiYWN0aXZlXCIgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNob3coJ0NoYXB0ZXJzJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1pb3MtYm9va1wiIC8+XG4gICAgICAgICAgPHA+Q2hhcHRlcnM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlID09ICdEZXRhaWxzJyAmJlxuICAgICAgICAgICAgIXRoaXMucHJvcHMuc2V0dGluZ3MuaXNTaWRlYmFyQ29udGVudEhpZGRlbiA/IFwiYWN0aXZlXCIgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNob3coJ0RldGFpbHMnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWluZm9ybWF0aW9uLWNpcmNsZWRcIiAvPlxuICAgICAgICAgIDxwPkRldGFpbHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlID09ICdJbWFnZXMnICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5zZXR0aW5ncy5pc1NpZGViYXJDb250ZW50SGlkZGVuID8gXCJhY3RpdmVcIiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvdygnSW1hZ2VzJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGlvbi1pbWFnZXNcIiAvPlxuICAgICAgICAgIDxwPkltYWdlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmUgPT0gJ0hlbHAnICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5zZXR0aW5ncy5pc1NpZGViYXJDb250ZW50SGlkZGVuID8gXCJhY3RpdmVcIiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvdygnSGVscCcpfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24taGVscC1jaXJjbGVkXCIgLz5cbiAgICAgICAgICA8cD5IZWxwPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZSA9PSAnU2V0dGluZ3MnICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5zZXR0aW5ncy5pc1NpZGViYXJDb250ZW50SGlkZGVuID8gXCJhY3RpdmVcIiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvdygnU2V0dGluZ3MnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWlvcy1nZWFyXCIgLz5cbiAgICAgICAgICA8cD5TZXR0aW5nczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmUgPT0gJ1B1Ymxpc2gnICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5zZXR0aW5ncy5pc1NpZGViYXJDb250ZW50SGlkZGVuID8gXCJhY3RpdmVcIiA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvdygnUHVibGlzaCcpfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tdXBsb2FkXCIgLz5cbiAgICAgICAgICA8cD5QdWJsaXNoPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9vay1lZGl0LXNpZGViYXItdG9nZ2xlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm1ldGhvZHMuaGFuZGxlU2lkZWJhckNvbnRlbnRUb2dnbGUoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWFycm93LXN3YXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uU2lkZWJhcjtcbiJdfQ==