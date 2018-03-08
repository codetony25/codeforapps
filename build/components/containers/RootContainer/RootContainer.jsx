'use strict';exports.__esModule=true;var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='components/containers/RootContainer/RootContainer.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRouter=require('react-router');var _mobxReact=require('mobx-react');var _stores=require('../../../stores');var stores=_interopRequireWildcard(_stores);var _containers=require('../../containers');var _pages=require('../../pages');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var RootContainer=(_temp=_class=function(_React$Component){(0,_inherits3.default)(RootContainer,_React$Component);function RootContainer(props){(0,_classCallCheck3.default)(this,RootContainer);var _this=(0,_possibleConstructorReturn3.default)(this,(RootContainer.__proto__||(0,_getPrototypeOf2.default)(RootContainer)).call(this,props));_this.handleScrollTop=function(){return _this.__handleScrollTop__REACT_HOT_LOADER__.apply(_this,arguments)};return _this}(0,_createClass3.default)(RootContainer,[{key:'__handleScrollTop__REACT_HOT_LOADER__',value:function __handleScrollTop__REACT_HOT_LOADER__(){return this.__handleScrollTop__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__handleScrollTop__REACT_HOT_LOADER__',value:function __handleScrollTop__REACT_HOT_LOADER__(){window.scrollTo(0,0)}},{key:'render',value:function render(){if(__IS_CLIENT__){this.handleScrollTop()}var appState=this.props.appState;var mergeStateWithStores=(0,_extends3.default)({},stores,{appState:appState});var MatchWithLayout=function MatchWithLayout(_ref){var Component=_ref.component;var rest=(0,_objectWithoutProperties3.default)(_ref,['component']);var componentViewName=(0,_extends3.default)({},Component);var mergeRest=(0,_extends3.default)({},rest,componentViewName);return _react2.default.createElement(_reactRouter.Match,(0,_extends3.default)({},mergeRest,{render:function render(matchProps){return _react2.default.createElement(_containers.LayoutContainer,(0,_extends3.default)({},mergeRest,{__source:{fileName:_jsxFileName,lineNumber:69}}),_react2.default.createElement(Component,(0,_extends3.default)({},matchProps,{__source:{fileName:_jsxFileName,lineNumber:70}})))},__source:{fileName:_jsxFileName,lineNumber:68}}))};return _react2.default.createElement(_mobxReact.Provider,(0,_extends3.default)({},mergeStateWithStores,{__source:{fileName:_jsxFileName,lineNumber:77}}),_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(MatchWithLayout,{pattern:'/',exactly:true,component:_pages.LandingPage,__source:{fileName:_jsxFileName,lineNumber:79}}),_react2.default.createElement(MatchWithLayout,{pattern:'/home',component:_pages.HomePage,__source:{fileName:_jsxFileName,lineNumber:80}}),_react2.default.createElement(MatchWithLayout,{pattern:'/faq',component:_pages.FaqPage,__source:{fileName:_jsxFileName,lineNumber:81}}),_react2.default.createElement(MatchWithLayout,{pattern:'/contact',component:_pages.ContactPage,__source:{fileName:_jsxFileName,lineNumber:82}}),_react2.default.createElement(MatchWithLayout,{pattern:'/register',component:_pages.AuthPage,__source:{fileName:_jsxFileName,lineNumber:83}}),_react2.default.createElement(MatchWithLayout,{pattern:'/login',component:_pages.AuthPage,__source:{fileName:_jsxFileName,lineNumber:84}}),_react2.default.createElement(MatchWithLayout,{pattern:'/search',component:_pages.SearchPage,__source:{fileName:_jsxFileName,lineNumber:85}}),_react2.default.createElement(MatchWithLayout,{pattern:'/dashboard',component:_pages.DashboardPage,__source:{fileName:_jsxFileName,lineNumber:86}}),_react2.default.createElement(_reactRouter.Miss,{component:_pages.NotFoundPage,__source:{fileName:_jsxFileName,lineNumber:87}})))}}]);return RootContainer}(_react2.default.Component),_class.displayName='RootContainer',_temp);var _default=RootContainer;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(RootContainer,'RootContainer','components/containers/RootContainer/RootContainer.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/containers/RootContainer/RootContainer.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvb3RDb250YWluZXIuanN4Il0sIm5hbWVzIjpbInN0b3JlcyIsIlJvb3RDb250YWluZXIiLCJwcm9wcyIsImhhbmRsZVNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiX19JU19DTElFTlRfXyIsImFwcFN0YXRlIiwibWVyZ2VTdGF0ZVdpdGhTdG9yZXMiLCJNYXRjaFdpdGhMYXlvdXQiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwiY29tcG9uZW50Vmlld05hbWUiLCJtZXJnZVJlc3QiLCJtYXRjaFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiJ1aUNBQUEsNEIsMkNBQ0EseUNBQ0EscUNBRUEsdUMsR0FBWUEsTyxrQ0FDWiw0Q0FDQSxrQyw0VEFXTUMsYyxpR0FJSix1QkFBWUMsS0FBWixDQUFtQiwwTEFDWEEsS0FEVyxTQUtuQkMsZUFMbUIsbUdBRWxCLEMsMFRBR3VCLENBQ3RCQyxPQUFPQyxRQUFQLENBQWdCLENBQWhCLENBQW1CLENBQW5CLENBQ0QsQyx1Q0FFUSxDQUdQLEdBQUlDLGFBQUosQ0FBbUIsQ0FDakIsS0FBS0gsZUFBTCxFQUNELENBTE0sR0FRQ0ksU0FSRCxDQVFjLEtBQUtMLEtBUm5CLENBUUNLLFFBUkQsQ0FjUCxHQUFNQywrQ0FBNEJSLE1BQTVCLEVBQW9DTyxpQkFBcEMsRUFBTixDQVNBLEdBQU1FLGlCQUFrQixRQUFsQkEsZ0JBQWtCLE1BQXVDLElBQXpCQyxVQUF5QixNQUFwQ0MsU0FBb0MsSUFBWEMsS0FBVywyREFVN0QsR0FBTUMsNENBQXlCSCxTQUF6QixDQUFOLENBQ0EsR0FBTUksb0NBQWlCRixJQUFqQixDQUEwQkMsaUJBQTFCLENBQU4sQ0FFQSxNQUNFLDJFQUFXQyxTQUFYLEVBQXNCLE9BQVEsZ0JBQUNDLFVBQUQsUUFDNUIsb0ZBQXFCRCxTQUFyQixtREFDRSw4QkFBQyxTQUFELDBCQUFlQyxVQUFmLG1EQURGLENBRDRCLENBQTlCLGtEQU1ILENBcEJELENBc0JBLE1BQ0UsNEVBQWNQLG9CQUFkLG1EQUNFLHFGQUNFLDhCQUFDLGVBQUQsRUFBaUIsUUFBUSxHQUF6QixDQUE2QixRQUFTLElBQXRDLENBQTRDLDRCQUE1QyxpREFERixDQUVFLDhCQUFDLGVBQUQsRUFBaUIsUUFBUSxPQUF6QixDQUFpQyx5QkFBakMsaURBRkYsQ0FHRSw4QkFBQyxlQUFELEVBQWlCLFFBQVEsTUFBekIsQ0FBZ0Msd0JBQWhDLGlEQUhGLENBSUUsOEJBQUMsZUFBRCxFQUFpQixRQUFRLFVBQXpCLENBQW9DLDRCQUFwQyxpREFKRixDQUtFLDhCQUFDLGVBQUQsRUFBaUIsUUFBUSxXQUF6QixDQUFxQyx5QkFBckMsaURBTEYsQ0FNRSw4QkFBQyxlQUFELEVBQWlCLFFBQVEsUUFBekIsQ0FBa0MseUJBQWxDLGlEQU5GLENBT0UsOEJBQUMsZUFBRCxFQUFpQixRQUFRLFNBQXpCLENBQW1DLDJCQUFuQyxpREFQRixDQVFFLDhCQUFDLGVBQUQsRUFBaUIsUUFBUSxZQUF6QixDQUFzQyw4QkFBdEMsaURBUkYsQ0FTRSxpREFBTSw2QkFBTixpREFURixDQURGLENBY0gsQywwQkF6RXlCLGdCQUFNRSxTLFNBRXpCTSxXLENBQWMsZSxxQkEyRVJmLGEsb0lBN0VUQSxhIiwiZmlsZSI6IlJvb3RDb250YWluZXIuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1pc3MsIE1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbmltcG9ydCAqIGFzIHN0b3JlcyBmcm9tICcuLi8uLi8uLi9zdG9yZXMnO1xuaW1wb3J0IHsgTGF5b3V0Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29udGFpbmVycyc7XG5pbXBvcnQge1xuICBMYW5kaW5nUGFnZSxcbiAgSG9tZVBhZ2UsXG4gIEZhcVBhZ2UsXG4gIEF1dGhQYWdlLFxuICBDb250YWN0UGFnZSxcbiAgRGFzaGJvYXJkUGFnZSxcbiAgU2VhcmNoUGFnZSxcbiAgTm90Rm91bmRQYWdlXG59IGZyb20gJy4uLy4uL3BhZ2VzJztcblxuY2xhc3MgUm9vdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ1Jvb3RDb250YWluZXInO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy8gT24gcm91dGUgY2hhbmdlLCB3ZSBtYWtlIHN1cmUgdG8gc2Nyb2xsIHRvIHRoZSB0b3BcbiAgaGFuZGxlU2Nyb2xsVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICAvLyBGdW5jdGlvbnMgd2Ugd2FudCB0byBjYWxsIHdoZW4gdGhlIGNsaWVudC1zaWRlIGlzIHJlbmRlcmVkXG4gICAgaWYgKF9fSVNfQ0xJRU5UX18pIHtcbiAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsVG9wKCk7XG4gICAgfVxuXG4gICAgLy8gR3JhYiBvdXIgaW5pdGlhbCBzdGF0ZSBmcm9tIHNlcnZlci1zaWRlXG4gICAgY29uc3QgeyBhcHBTdGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8qKlxuICAgICAqICBNZXJnZSBib3RoIG91ciBzdG9yZXMgYW5kIGluaXRpYWwgc3RhdGVcbiAgICAgKiAgdG9nZXRoZXIgdG8gaW5zZXJ0IG91ciBwcm92aWRlclxuICAgICAqL1xuICAgIGNvbnN0IG1lcmdlU3RhdGVXaXRoU3RvcmVzID0geyAuLi5zdG9yZXMsIGFwcFN0YXRlIH07XG5cbiAgICAvKipcbiAgICAgKiBXZSBhcmUgd3JhcHBpbmcgb3VyIE1hdGNoIGNvbXBvbmVudCB0aGF0IHJlYWN0IHJvdXRlciBwcm92aWRlcyBpblxuICAgICAqIGJldHdlZW4gdGhlIExheW91dENvbnRhaW5lciwgdGhpcyB3aWxsIGdpdmUgdXMgYSBsb3Qgb2YgY29udHJvbFxuICAgICAqIG9mIHdoYXQgd2Ugd2FudCB0byBkbyB3aXRoIHRoZSBsYXlvdXQuIFRoaXMgd2lsbCBhbGxvdyB1cyB0b1xuICAgICAqIHBhc3Mgcm91dGluZyAvIGhpc3RvcnkgaW5mb3JtYXRpb24gYW5kIGFzIHdlbGwgbW9yZSBkYXRhIGlmXG4gICAgICogbmVlZGVkLlxuICAgICAqL1xuICAgIGNvbnN0IE1hdGNoV2l0aExheW91dCA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBXZSBncmFiIHRoZSBjb21wb25lbnQncyBkaXNwbGF5IG5hbWUgYW5kIHRoZSBwYXRoIG5hbWUgcm91dGUuXG4gICAgICAgKiBXZSBzaG91bGQgYmUgdXNpbmcgdGhlIHZpZXcgY29tcG9uZW50J3MgZGlzcGxheU5hbWUgdG8gY29tcGFyZVxuICAgICAgICogaW4gb3VyIGxheW91dCBpbnN0ZWFkLCBhbmQgbm90IHRoZSByb3V0ZSBwYXRoIHN0cmluZy5cbiAgICAgICAqXG4gICAgICAgKiBOT1RFOiBBbnl0aGluZyB3ZSBnaXZlIG91ciB2aWV3cyB0aGF0IGlzIGRlY2xhcmVkIHdpdGhcbiAgICAgICAqIGBzdGF0aWNgIGl0IHdpbGwgYmUgcGFzc2VkIGluIGhlcmUgYXMgd2VsbC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgY29tcG9uZW50Vmlld05hbWUgPSB7IC4uLkNvbXBvbmVudCB9O1xuICAgICAgY29uc3QgbWVyZ2VSZXN0ID0geyAuLi5yZXN0LCAuLi5jb21wb25lbnRWaWV3TmFtZSB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWF0Y2ggey4uLm1lcmdlUmVzdH0gcmVuZGVyPXsobWF0Y2hQcm9wcykgPT4gKFxuICAgICAgICAgIDxMYXlvdXRDb250YWluZXIgey4uLm1lcmdlUmVzdH0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5tYXRjaFByb3BzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0Q29udGFpbmVyPlxuICAgICAgICApfSAvPlxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciB7Li4ubWVyZ2VTdGF0ZVdpdGhTdG9yZXN9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNYXRjaFdpdGhMYXlvdXQgcGF0dGVybj1cIi9cIiBleGFjdGx5PXt0cnVlfSBjb21wb25lbnQ9e0xhbmRpbmdQYWdlfSAvPlxuICAgICAgICAgIDxNYXRjaFdpdGhMYXlvdXQgcGF0dGVybj1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICA8TWF0Y2hXaXRoTGF5b3V0IHBhdHRlcm49XCIvZmFxXCIgY29tcG9uZW50PXtGYXFQYWdlfSAvPlxuICAgICAgICAgIDxNYXRjaFdpdGhMYXlvdXQgcGF0dGVybj1cIi9jb250YWN0XCIgY29tcG9uZW50PXtDb250YWN0UGFnZX0gLz5cbiAgICAgICAgICA8TWF0Y2hXaXRoTGF5b3V0IHBhdHRlcm49XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e0F1dGhQYWdlfSAvPlxuICAgICAgICAgIDxNYXRjaFdpdGhMYXlvdXQgcGF0dGVybj1cIi9sb2dpblwiIGNvbXBvbmVudD17QXV0aFBhZ2V9IC8+XG4gICAgICAgICAgPE1hdGNoV2l0aExheW91dCBwYXR0ZXJuPVwiL3NlYXJjaFwiIGNvbXBvbmVudD17U2VhcmNoUGFnZX0gLz5cbiAgICAgICAgICA8TWF0Y2hXaXRoTGF5b3V0IHBhdHRlcm49XCIvZGFzaGJvYXJkXCIgY29tcG9uZW50PXtEYXNoYm9hcmRQYWdlfSAvPlxuICAgICAgICAgIDxNaXNzIGNvbXBvbmVudD17Tm90Rm91bmRQYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3RDb250YWluZXI7XG4iXX0=