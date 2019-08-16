'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _dec,_class,_class2,_temp,_jsxFileName='components/layouts/HeaderLayout/HeaderLayout.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _mobxReact=require('mobx-react');var _reactRouter=require('react-router');var _reactScroll=require('react-scroll');var _jassy=require('jassy');var _headerLayout=require('./headerLayout.style');var _headerLayout2=_interopRequireDefault(_headerLayout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var HeaderLayout=(_dec=(0,_mobxReact.observer)(['LayoutStore']),_dec(_class=(_temp=_class2=function(_React$Component){(0,_inherits3.default)(HeaderLayout,_React$Component);function HeaderLayout(props){(0,_classCallCheck3.default)(this,HeaderLayout);var _this=(0,_possibleConstructorReturn3.default)(this,(HeaderLayout.__proto__||(0,_getPrototypeOf2.default)(HeaderLayout)).call(this,props));_this.renderHomeLink=function(){return _this.__renderHomeLink__REACT_HOT_LOADER__.apply(_this,arguments)};return _this}(0,_createClass3.default)(HeaderLayout,[{key:'componentDidMount',value:function componentDidMount(){var LayoutStore=this.props.LayoutStore;LayoutStore.currentPageName=this.props.displayName||''}},{key:'__renderHomeLink__REACT_HOT_LOADER__',value:function __renderHomeLink__REACT_HOT_LOADER__(){return this.__renderHomeLink__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderHomeLink__REACT_HOT_LOADER__',value:function __renderHomeLink__REACT_HOT_LOADER__(){return this.__renderHomeLink__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderHomeLink__REACT_HOT_LOADER__',value:function __renderHomeLink__REACT_HOT_LOADER__(){return this.__renderHomeLink__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__renderHomeLink__REACT_HOT_LOADER__',value:function __renderHomeLink__REACT_HOT_LOADER__(currentPageName){if(currentPageName==='LandingPage'){return _react2.default.createElement(_reactScroll.Link,{to:'hero',smooth:true,duration:1500,offset:-55,__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement('img',{src:'/assets/images/logos/logo.svg',alt:'',__source:{fileName:_jsxFileName,lineNumber:32}}),_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:33}},'EverLib'))}else{return _react2.default.createElement(_reactRouter.Link,{to:'/',__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement('img',{src:'/assets/images/logos/logo.svg',alt:'',__source:{fileName:_jsxFileName,lineNumber:39}}),_react2.default.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:40}},'EverLib'))}}},{key:'render',value:function render(){var LayoutStore=this.props.LayoutStore;var profileImg='http://boooya.aqvatarius.com/assets/images/users/user_1.jpg';return _react2.default.createElement('header',{className:LayoutStore.headerContainerClass,__source:{fileName:_jsxFileName,lineNumber:52}},_react2.default.createElement(_jassy.Style,{rules:(0,_headerLayout2.default)(),__source:{fileName:_jsxFileName,lineNumber:53}}),_react2.default.createElement('div',{className:'header-navicon',__source:{fileName:_jsxFileName,lineNumber:54}},_react2.default.createElement('ul',{__source:{fileName:_jsxFileName,lineNumber:55}},_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:56}},_react2.default.createElement('a',{href:'#',__source:{fileName:_jsxFileName,lineNumber:57}},_react2.default.createElement('i',{className:'fa fa-bars',__source:{fileName:_jsxFileName,lineNumber:57}}))))),_react2.default.createElement('div',{className:'header-logo',__source:{fileName:_jsxFileName,lineNumber:61}},this.renderHomeLink(LayoutStore.currentPageName)),_react2.default.createElement('nav',{className:'header-navigation',__source:{fileName:_jsxFileName,lineNumber:64}},_react2.default.createElement('ul',{__source:{fileName:_jsxFileName,lineNumber:65}},_react2.default.createElement('li',{className:'header-links',__source:{fileName:_jsxFileName,lineNumber:66}},_react2.default.createElement('ul',{__source:{fileName:_jsxFileName,lineNumber:67}},_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:68}},_react2.default.createElement(_reactScroll.Link,{to:'features',smooth:true,offset:-55,duration:1500,__source:{fileName:_jsxFileName,lineNumber:69}},'Features')),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(_reactScroll.Link,{to:'benefits',smooth:true,duration:1500,offset:-55,__source:{fileName:_jsxFileName,lineNumber:79}},'Benefits')),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:88}},_react2.default.createElement(_reactScroll.Link,{to:'guide',smooth:true,duration:1500,offset:-55,__source:{fileName:_jsxFileName,lineNumber:89}},'Quick guide')),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:98}},_react2.default.createElement(_reactScroll.Link,{to:'testimonials',smooth:true,duration:1500,offset:-55,__source:{fileName:_jsxFileName,lineNumber:99}},'Testimonals')),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:108}},_react2.default.createElement(_reactRouter.Link,{to:'/register',__source:{fileName:_jsxFileName,lineNumber:108}},'Register')),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:109}},_react2.default.createElement(_reactRouter.Link,{to:'/login',__source:{fileName:_jsxFileName,lineNumber:109}},'Login')))),_react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:112}},_react2.default.createElement('div',{className:'header-profile',__source:{fileName:_jsxFileName,lineNumber:113}},_react2.default.createElement('div',{className:'profile-image',__source:{fileName:_jsxFileName,lineNumber:114}},_react2.default.createElement(_reactRouter.Link,{to:'/home',__source:{fileName:_jsxFileName,lineNumber:115}},_react2.default.createElement('img',{src:profileImg,alt:'',__source:{fileName:_jsxFileName,lineNumber:115}}))))))))}}]);return HeaderLayout}(_react2.default.Component),_class2.displayName='HeaderLayout',_temp))||_class);var _default=HeaderLayout;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(HeaderLayout,'HeaderLayout','components/layouts/HeaderLayout/HeaderLayout.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/layouts/HeaderLayout/HeaderLayout.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRlckxheW91dC5qc3giXSwibmFtZXMiOlsiSGVhZGVyTGF5b3V0IiwicHJvcHMiLCJyZW5kZXJIb21lTGluayIsIkxheW91dFN0b3JlIiwiY3VycmVudFBhZ2VOYW1lIiwiZGlzcGxheU5hbWUiLCJwcm9maWxlSW1nIiwiaGVhZGVyQ29udGFpbmVyQ2xhc3MiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJpeUJBQUEsNEIsMkNBQ0EscUNBQ0EseUNBQ0EseUNBQ0EsNEJBRUEsa0QsOElBR01BLGEsT0FETCx3QkFBUyxDQUFDLGFBQUQsQ0FBVCxDLDZHQUtDLHNCQUFZQyxLQUFaLENBQW1CLHVMQUNYQSxLQURXLFNBU25CQyxjQVRtQixrR0FFbEIsQyxtR0FFbUIsSUFDVkMsWUFEVSxDQUNNLEtBQUtGLEtBRFgsQ0FDVkUsV0FEVSxDQUVsQkEsWUFBWUMsZUFBWixDQUE4QixLQUFLSCxLQUFMLENBQVdJLFdBQVgsRUFBMEIsRUFDekQsQyxtbUJBRWlCRCxlLENBQW9CLENBQ3BDLEdBQUlBLGtCQUFvQixhQUF4QixDQUF1QyxDQUNyQyxNQUNFLGtEQUNFLEdBQUcsTUFETCxDQUVFLE9BQVEsSUFGVixDQUdFLFNBQVUsSUFIWixDQUlFLE9BQVEsQ0FBQyxFQUpYLGlEQU1FLHFDQUFLLElBQUksK0JBQVQsQ0FBeUMsSUFBSSxFQUE3QyxpREFORixDQU9FLGdHQVBGLENBVUgsQ0FaRCxJQVlPLENBQ0wsTUFDRSxrREFBTSxHQUFJLEdBQVYsaURBQ0UscUNBQUssSUFBSSwrQkFBVCxDQUF5QyxJQUFJLEVBQTdDLGlEQURGLENBRUUsZ0dBRkYsQ0FLSCxDQUNGLEMsdUNBRVEsSUFDQ0QsWUFERCxDQUNpQixLQUFLRixLQUR0QixDQUNDRSxXQURELENBRVAsR0FBTUcsWUFDSiw2REFERixDQUdBLE1BQ0UseUNBQVEsVUFBV0gsWUFBWUksb0JBQS9CLGlEQUNFLDRDQUFPLE1BQU8sNEJBQWQsaURBREYsQ0FFRSxxQ0FBSyxVQUFVLGdCQUFmLGlEQUNFLG9GQUNFLG9GQUNFLG1DQUFHLEtBQUssR0FBUixpREFBWSxtQ0FBRyxVQUFVLFlBQWIsaURBQVosQ0FERixDQURGLENBREYsQ0FGRixDQVNFLHFDQUFLLFVBQVUsYUFBZixpREFDRyxLQUFLTCxjQUFMLENBQW9CQyxZQUFZQyxlQUFoQyxDQURILENBVEYsQ0FZRSxxQ0FBSyxVQUFVLG1CQUFmLGlEQUNFLG9GQUNFLG9DQUFJLFVBQVUsY0FBZCxpREFDRSxvRkFDRSxvRkFDRSxpREFDRSxHQUFHLFVBREwsQ0FFRSxPQUFRLElBRlYsQ0FHRSxPQUFRLENBQUMsRUFIWCxDQUlFLFNBQVUsSUFKWiw0REFERixDQURGLENBV0Usb0ZBQ0UsaURBQ0UsR0FBRyxVQURMLENBRUUsT0FBUSxJQUZWLENBR0UsU0FBVSxJQUhaLENBSUUsT0FBUSxDQUFDLEVBSlgsNERBREYsQ0FYRixDQXFCRSxvRkFDRSxpREFDRSxHQUFHLE9BREwsQ0FFRSxPQUFRLElBRlYsQ0FHRSxTQUFVLElBSFosQ0FJRSxPQUFRLENBQUMsRUFKWCwrREFERixDQXJCRixDQStCRSxvRkFDRSxpREFDRSxHQUFHLGNBREwsQ0FFRSxPQUFRLElBRlYsQ0FHRSxTQUFVLElBSFosQ0FJRSxPQUFRLENBQUMsRUFKWCwrREFERixDQS9CRixDQXlDRSxxRkFBSSxpREFBTSxHQUFJLFdBQVYsNkRBQUosQ0F6Q0YsQ0EwQ0UscUZBQUksaURBQU0sR0FBSSxRQUFWLDBEQUFKLENBMUNGLENBREYsQ0FERixDQStDRSxxRkFDRSxxQ0FBSyxVQUFVLGdCQUFmLGtEQUNFLHFDQUFLLFVBQVUsZUFBZixrREFDRSxpREFBTSxHQUFJLE9BQVYsa0RBQW1CLHFDQUFLLElBQUtFLFVBQVYsQ0FBc0IsSUFBSSxFQUExQixrREFBbkIsQ0FERixDQURGLENBREYsQ0EvQ0YsQ0FERixDQVpGLENBdUVILEMseUJBakh3QixnQkFBTUUsUyxVQUV4QkgsVyxDQUFjLGMsK0JBbUhSTCxZLG9JQXJIVEEsWSIsImZpbGUiOiJIZWFkZXJMYXlvdXQuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ2phc3N5JztcblxuaW1wb3J0IGhlYWRlckxheW91dFN0eWxlIGZyb20gJy4vaGVhZGVyTGF5b3V0LnN0eWxlJztcblxuQG9ic2VydmVyKFsnTGF5b3V0U3RvcmUnXSlcbmNsYXNzIEhlYWRlckxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0hlYWRlckxheW91dCc7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IExheW91dFN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgIExheW91dFN0b3JlLmN1cnJlbnRQYWdlTmFtZSA9IHRoaXMucHJvcHMuZGlzcGxheU5hbWUgfHwgJyc7XG4gIH1cblxuICByZW5kZXJIb21lTGluayA9IChjdXJyZW50UGFnZU5hbWUpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2VOYW1lID09PSAnTGFuZGluZ1BhZ2UnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgIHRvPVwiaGVyb1wiXG4gICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgIGR1cmF0aW9uPXsxNTAwfVxuICAgICAgICAgIG9mZnNldD17LTU1fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvcy9sb2dvLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPHNwYW4+RXZlckxpYjwvc3Bhbj5cbiAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgdG89eycvJ30+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvcy9sb2dvLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPHNwYW4+RXZlckxpYjwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgTGF5b3V0U3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJvZmlsZUltZyA9XG4gICAgICAnaHR0cDovL2Jvb295YS5hcXZhdGFyaXVzLmNvbS9hc3NldHMvaW1hZ2VzL3VzZXJzL3VzZXJfMS5qcGcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtMYXlvdXRTdG9yZS5oZWFkZXJDb250YWluZXJDbGFzc30+XG4gICAgICAgIDxTdHlsZSBydWxlcz17aGVhZGVyTGF5b3V0U3R5bGUoKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2aWNvblwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgLz48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XG4gICAgICAgICAge3RoaXMucmVuZGVySG9tZUxpbmsoTGF5b3V0U3RvcmUuY3VycmVudFBhZ2VOYW1lKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtzXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cImZlYXR1cmVzXCJcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey01NX1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezE1MDB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cImJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTUwMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNTV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEJlbmVmaXRzXG4gICAgICAgICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cImd1aWRlXCJcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17MTUwMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNTV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFF1aWNrIGd1aWRlXG4gICAgICAgICAgICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cInRlc3RpbW9uaWFsc1wiXG4gICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezE1MDB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTU1fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBUZXN0aW1vbmFsc1xuICAgICAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPXsnL3JlZ2lzdGVyJ30+UmVnaXN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89eycvbG9naW4nfT5Mb2dpbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvaG9tZSd9PjxpbWcgc3JjPXtwcm9maWxlSW1nfSBhbHQ9XCJcIiAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckxheW91dDtcbiJdfQ==