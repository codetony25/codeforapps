'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _class,_temp,_jsxFileName='components/pages/ContactPage/ContactPage.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _jassy=require('jassy');var _forms=require('../../forms');var _contactPage=require('./contactPage.style');var _contactPage2=_interopRequireDefault(_contactPage);var _client=require('../../../core/utils/form_handling/validations/client');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ContactView=(_temp=_class=function(_React$Component){(0,_inherits3.default)(ContactView,_React$Component);function ContactView(props){(0,_classCallCheck3.default)(this,ContactView);var _this=(0,_possibleConstructorReturn3.default)(this,(ContactView.__proto__||(0,_getPrototypeOf2.default)(ContactView)).call(this,props));_this.renderInputFields=[{fieldName:'email',hideOnFocus:true,labelName:'Contact E-Mail *',doValidation:[_client.emailValidation],placeholder:'Enter your contact E-mail',required:true},{inputType:'textarea',fieldName:'message',hideOnFocus:true,labelName:'Message *',doValidation:[_client.messageValidation],placeholder:'Enter your message between 10 and 500 characters...',required:true}];return _this}(0,_createClass3.default)(ContactView,[{key:'render',value:function render(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_jassy.Style,{rules:(0,_contactPage2.default)(),__source:{fileName:_jsxFileName,lineNumber:42}}),_react2.default.createElement('div',{className:'contact-view container',__source:{fileName:_jsxFileName,lineNumber:43}},_react2.default.createElement(_forms.PanelForm,{inputFields:this.renderInputFields,panelHeaderText:'Contact Us',titleHeaderText:'Send Us a Message',titleSubHeaderText:'Questions, Concerns or Suggestions!',formErrorMsg:'Username/E-Mail and Password combination invalid.',submitButtonText:'Send',hasCaptcha:false,onSubmitFormName:'doContactMessageForm',formType:'contact',__source:{fileName:_jsxFileName,lineNumber:44}})))}}]);return ContactView}(_react2.default.Component),_class.displayName='ContactPage',_temp);var _default=ContactView;exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ContactView,'ContactView','components/pages/ContactPage/ContactPage.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/ContactPage/ContactPage.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhY3RQYWdlLmpzeCJdLCJuYW1lcyI6WyJDb250YWN0VmlldyIsInByb3BzIiwicmVuZGVySW5wdXRGaWVsZHMiLCJmaWVsZE5hbWUiLCJoaWRlT25Gb2N1cyIsImxhYmVsTmFtZSIsImRvVmFsaWRhdGlvbiIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJpbnB1dFR5cGUiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Imd4QkFBQSw0QiwyQ0FDQSw0QkFFQSxrQ0FDQSxnRCx1REFDQSw0RSxxRkFLTUEsWSwrRkFJSixxQkFBWUMsS0FBWixDQUFtQixvTEFDWEEsS0FEVyxHQUdqQixNQUFLQyxpQkFBTCxDQUF5QixDQUN2QixDQUNFQyxVQUFXLE9BRGIsQ0FFRUMsWUFBYSxJQUZmLENBR0VDLFVBQVcsa0JBSGIsQ0FJRUMsYUFBYyx5QkFKaEIsQ0FLRUMsWUFBYSwyQkFMZixDQU1FQyxTQUFVLElBTlosQ0FEdUIsQ0FTdkIsQ0FDRUMsVUFBVyxVQURiLENBRUVOLFVBQVcsU0FGYixDQUdFQyxZQUFhLElBSGYsQ0FJRUMsVUFBVyxXQUpiLENBS0VDLGFBQWMsMkJBTGhCLENBTUVDLFlBQWEscURBTmYsQ0FPRUMsU0FBVSxJQVBaLENBVHVCLENBQXpCLENBSGlCLFlBc0JsQixDLDRFQUVRLENBQ1AsTUFDRSxzRkFDRSw0Q0FBTyxNQUFPLDJCQUFkLGlEQURGLENBRUUscUNBQUssVUFBVSx3QkFBZixpREFDRSxnREFDRSxZQUFhLEtBQUtOLGlCQURwQixDQUVFLGdCQUFnQixZQUZsQixDQUdFLGdCQUFnQixtQkFIbEIsQ0FJRSxtQkFBbUIscUNBSnJCLENBS0UsYUFBYSxtREFMZixDQU1FLGlCQUFpQixNQU5uQixDQU9FLFdBQVksS0FQZCxDQVFFLGlCQUFpQixzQkFSbkIsQ0FTRSxTQUFTLFNBVFgsaURBREYsQ0FGRixDQWlCSCxDLHdCQS9DdUIsZ0JBQU1RLFMsU0FFdkJDLFcsQ0FBYyxhLHFCQWlEUlgsVyxvSUFuRFRBLFciLCJmaWxlIjoiQ29udGFjdFBhZ2UuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL0lkZWFQcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ2phc3N5JztcblxuaW1wb3J0IHsgUGFuZWxGb3JtIH0gZnJvbSAnLi4vLi4vZm9ybXMnO1xuaW1wb3J0IGNvbnRhY3RWaWV3U3R5bGUgZnJvbSAnLi9jb250YWN0UGFnZS5zdHlsZSc7XG5pbXBvcnQge1xuICBlbWFpbFZhbGlkYXRpb24sXG4gIG1lc3NhZ2VWYWxpZGF0aW9uXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvZm9ybV9oYW5kbGluZy92YWxpZGF0aW9ucy9jbGllbnQnO1xuXG5jbGFzcyBDb250YWN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NvbnRhY3RQYWdlJztcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVuZGVySW5wdXRGaWVsZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGZpZWxkTmFtZTogJ2VtYWlsJyxcbiAgICAgICAgaGlkZU9uRm9jdXM6IHRydWUsXG4gICAgICAgIGxhYmVsTmFtZTogJ0NvbnRhY3QgRS1NYWlsIConLFxuICAgICAgICBkb1ZhbGlkYXRpb246IFtlbWFpbFZhbGlkYXRpb25dLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgY29udGFjdCBFLW1haWwnLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5wdXRUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICBmaWVsZE5hbWU6ICdtZXNzYWdlJyxcbiAgICAgICAgaGlkZU9uRm9jdXM6IHRydWUsXG4gICAgICAgIGxhYmVsTmFtZTogJ01lc3NhZ2UgKicsXG4gICAgICAgIGRvVmFsaWRhdGlvbjogW21lc3NhZ2VWYWxpZGF0aW9uXSxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG1lc3NhZ2UgYmV0d2VlbiAxMCBhbmQgNTAwIGNoYXJhY3RlcnMuLi4nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHlsZSBydWxlcz17Y29udGFjdFZpZXdTdHlsZSgpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdmlldyBjb250YWluZXJcIj5cbiAgICAgICAgICA8UGFuZWxGb3JtXG4gICAgICAgICAgICBpbnB1dEZpZWxkcz17dGhpcy5yZW5kZXJJbnB1dEZpZWxkc31cbiAgICAgICAgICAgIHBhbmVsSGVhZGVyVGV4dD1cIkNvbnRhY3QgVXNcIlxuICAgICAgICAgICAgdGl0bGVIZWFkZXJUZXh0PVwiU2VuZCBVcyBhIE1lc3NhZ2VcIlxuICAgICAgICAgICAgdGl0bGVTdWJIZWFkZXJUZXh0PVwiUXVlc3Rpb25zLCBDb25jZXJucyBvciBTdWdnZXN0aW9ucyFcIlxuICAgICAgICAgICAgZm9ybUVycm9yTXNnPVwiVXNlcm5hbWUvRS1NYWlsIGFuZCBQYXNzd29yZCBjb21iaW5hdGlvbiBpbnZhbGlkLlwiXG4gICAgICAgICAgICBzdWJtaXRCdXR0b25UZXh0PVwiU2VuZFwiXG4gICAgICAgICAgICBoYXNDYXB0Y2hhPXtmYWxzZX1cbiAgICAgICAgICAgIG9uU3VibWl0Rm9ybU5hbWU9XCJkb0NvbnRhY3RNZXNzYWdlRm9ybVwiXG4gICAgICAgICAgICBmb3JtVHlwZT1cImNvbnRhY3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RWaWV3O1xuIl19