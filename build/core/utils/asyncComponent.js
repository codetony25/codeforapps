'use strict';exports.__esModule=true;var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _jsxFileName='core/utils/asyncComponent.js';var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function asyncComponent(getComponent){var _class,_temp2;return _temp2=_class=function(_React$Component){(0,_inherits3.default)(AsyncComponent,_React$Component);function AsyncComponent(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,AsyncComponent);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=AsyncComponent.__proto__||(0,_getPrototypeOf2.default)(AsyncComponent)).call.apply(_ref,[this].concat(args))),_this),_this.state={Component:AsyncComponent.Component},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret)}(0,_createClass3.default)(AsyncComponent,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;if(!this.state.Component){getComponent().then(function(Component){AsyncComponent.Component=Component;_this2.setState({Component:Component})})}}},{key:'render',value:function render(){var Component=this.state.Component;if(Component){return _react2.default.createElement(Component,(0,_extends3.default)({},this.props,{__source:{fileName:_jsxFileName,lineNumber:25}}))}return null}}]);return AsyncComponent}(_react2.default.Component),_class.Component=null,_temp2}var _default=asyncComponent;exports.default=_default;;var _temp3=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(asyncComponent,'asyncComponent','core/utils/asyncComponent.js');__REACT_HOT_LOADER__.register(_default,'default','core/utils/asyncComponent.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImFzeW5jQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50Iiwic3RhdGUiLCJDb21wb25lbnQiLCJBc3luY0NvbXBvbmVudCIsInRoZW4iLCJzZXRTdGF0ZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiMDFCQUFBLDRCLDZIQU9BLFFBQVNBLGVBQVQsQ0FBd0JDLFlBQXhCLENBQXNDLG1CQUNwQyw2ZkFHRUMsS0FIRixDQUdVLENBQUVDLFVBQVdDLGVBQWVELFNBQTVCLENBSFYsbUtBS3VCLGlCQUNuQixHQUFJLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxTQUFoQixDQUEyQixDQUN6QkYsZUFBZUksSUFBZixDQUFvQixtQkFBYSxDQUMvQkQsZUFBZUQsU0FBZixDQUEyQkEsU0FBM0IsQ0FDQSxPQUFLRyxRQUFMLENBQWMsQ0FBRUgsbUJBQUYsQ0FBZCxDQUNELENBSEQsQ0FJRCxDQUNGLENBWkgsdUNBYVcsSUFDQ0EsVUFERCxDQUNlLEtBQUtELEtBRHBCLENBQ0NDLFNBREQsQ0FFUCxHQUFJQSxTQUFKLENBQWUsQ0FDYixNQUFPLCtCQUFDLFNBQUQsMEJBQWUsS0FBS0ksS0FBcEIsbURBQ1IsQ0FDRCxNQUFPLEtBQ1IsQ0FuQkgsMkJBQW9DLGdCQUFNSixTQUExQyxTQUVTQSxTQUZULENBRXFCLElBRnJCLE9Bc0JELEMsYUFFY0gsYyxvSUF6Qk5BLGMiLCJmaWxlIjoiYXN5bmNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIGdldENvbXBvbmVudCBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2VcbiAqIGZvciBhIGNvbXBvbmVudCwgSXQgd2lsbCBub3QgYmUgY2FsbGVkIHVudGlsIHRoZVxuICogZmlyc3QgbW91bnQuXG4gKi9cbmZ1bmN0aW9uIGFzeW5jQ29tcG9uZW50KGdldENvbXBvbmVudCkge1xuICByZXR1cm4gY2xhc3MgQXN5bmNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIENvbXBvbmVudCA9IG51bGw7XG4gICAgc3RhdGUgPSB7IENvbXBvbmVudDogQXN5bmNDb21wb25lbnQuQ29tcG9uZW50IH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuQ29tcG9uZW50KSB7XG4gICAgICAgIGdldENvbXBvbmVudCgpLnRoZW4oQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICBBc3luY0NvbXBvbmVudC5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IENvbXBvbmVudCB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNDb21wb25lbnQ7XG5cbi8vIEV4YW1wbGU6XG5cbi8vIGNvbnN0IEZvbyA9IGFzeW5jQ29tcG9uZW50KCgpID0+XG4vLyAgIFN5c3RlbS5pbXBvcnQoJy4vRm9vJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpXG4vLyApXG4vLyBjb25zdCBCYXIgPSBhc3luY0NvbXBvbmVudCgoKSA9PlxuLy8gICBTeXN0ZW0uaW1wb3J0KCcuL0JhcicpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KVxuLy8gKVxuLy9cbi8vIGNvbnN0IEFwcCA9ICgpID0+XG4vLyAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgIDxMaW5rIHRvPVwiL2Zvb1wiPkZvbzwvTGluaz5cbi8vICAgICA8TGluayB0bz1cIi9iYXJcIj5CYXI8L0xpbms+XG4vL1xuLy8gICAgIDxNYXRjaCBwYXR0ZXJuPVwiL2Zvb1wiIGNvbXBvbmVudD17Rm9vfSAvPlxuLy8gICAgIDxNYXRjaCBwYXR0ZXJuPVwiL2JhclwiIGNvbXBvbmVudD17QmFyfSAvPlxuLy8gICA8L0Jyb3dzZXJSb3V0ZXI+XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgQXBwXG4iXX0=