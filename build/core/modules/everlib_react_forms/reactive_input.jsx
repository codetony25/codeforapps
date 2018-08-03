'use strict';exports.__esModule=true;exports.ReactiveInput=undefined;var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _jsxFileName='core/modules/everlib_react_forms/reactive_input.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _helpers=require('./_helpers.js');var H=_interopRequireWildcard(_helpers);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ReactiveInput=exports.ReactiveInput=function ReactiveInput(props,context){var state=context.state,methods=context.methods;var className=props.className,classNameValid=props.classNameValid,classNameInvalid=props.classNameInvalid,classNameNeutral=props.classNameNeutral;var field=state.fields[props.fieldName];if(H.shouldHideReactive(props,context)){classNameValid='';classNameInvalid=''}if(H.fieldIsValid(field)&&classNameValid){className=classNameValid}else if(H.fieldIsInvalidAndTouched(field)&&classNameInvalid){className=classNameInvalid}else if(classNameNeutral){className=classNameNeutral}var newProps=(0,_assign2.default)({props:props},{className:'reactive-input '+className,placeholder:props.placeholder,onChange:methods.handleChange.bind(undefined,props.fieldName),onBlur:methods.handleBlur.bind(undefined,props.fieldName),onFocus:methods.handleFocus.bind(undefined,props.fieldName),type:props.type,value:state.fields[props.fieldName].value});delete newProps.props;return _react2.default.createElement('input',(0,_extends3.default)({},newProps,{__source:{fileName:_jsxFileName,lineNumber:43}}))};ReactiveInput.propTypes={fieldName:_react2.default.PropTypes.string.isRequired,hideReactiveUntilFirstBlur:_react2.default.PropTypes.bool,hideReactiveOnFocus:_react2.default.PropTypes.bool,className:_react2.default.PropTypes.string,classNameValid:_react2.default.PropTypes.string,classNameInvalid:_react2.default.PropTypes.string,classNameNeutral:_react2.default.PropTypes.string,validations:_react2.default.PropTypes.array.isRequired};ReactiveInput.contextTypes={state:_react2.default.PropTypes.object,methods:_react2.default.PropTypes.object};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ReactiveInput,'ReactiveInput','core/modules/everlib_react_forms/reactive_input.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aXZlX2lucHV0LmpzeCJdLCJuYW1lcyI6WyJIIiwiUmVhY3RpdmVJbnB1dCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibWV0aG9kcyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVZhbGlkIiwiY2xhc3NOYW1lSW52YWxpZCIsImNsYXNzTmFtZU5ldXRyYWwiLCJmaWVsZCIsImZpZWxkcyIsImZpZWxkTmFtZSIsInNob3VsZEhpZGVSZWFjdGl2ZSIsImZpZWxkSXNWYWxpZCIsImZpZWxkSXNJbnZhbGlkQW5kVG91Y2hlZCIsIm5ld1Byb3BzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkJsdXIiLCJoYW5kbGVCbHVyIiwib25Gb2N1cyIsImhhbmRsZUZvY3VzIiwidHlwZSIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhpZGVSZWFjdGl2ZVVudGlsRmlyc3RCbHVyIiwiYm9vbCIsImhpZGVSZWFjdGl2ZU9uRm9jdXMiLCJ2YWxpZGF0aW9ucyIsImFycmF5IiwiY29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiMlZBQUEsNEIsMkNBQ0Esc0MsR0FBWUEsRSw0VkFFTCxHQUFNQyxxQ0FBZ0IsUUFBaEJBLGNBQWdCLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFvQixJQUN2Q0MsTUFEdUMsQ0FDcEJELE9BRG9CLENBQ3ZDQyxLQUR1QyxDQUNoQ0MsT0FEZ0MsQ0FDcEJGLE9BRG9CLENBQ2hDRSxPQURnQyxJQUUxQ0MsVUFGMEMsQ0FFd0JKLEtBRnhCLENBRTFDSSxTQUYwQyxDQUUvQkMsY0FGK0IsQ0FFd0JMLEtBRnhCLENBRS9CSyxjQUYrQixDQUVmQyxnQkFGZSxDQUV3Qk4sS0FGeEIsQ0FFZk0sZ0JBRmUsQ0FFR0MsZ0JBRkgsQ0FFd0JQLEtBRnhCLENBRUdPLGdCQUZILENBSS9DLEdBQU1DLE9BQVFOLE1BQU1PLE1BQU4sQ0FBYVQsTUFBTVUsU0FBbkIsQ0FBZCxDQUdBLEdBQUlaLEVBQUVhLGtCQUFGLENBQXFCWCxLQUFyQixDQUE0QkMsT0FBNUIsQ0FBSixDQUEwQyxDQUN4Q0ksZUFBaUIsRUFBakIsQ0FDQUMsaUJBQW1CLEVBQ3BCLENBR0QsR0FBSVIsRUFBRWMsWUFBRixDQUFlSixLQUFmLEdBQXlCSCxjQUE3QixDQUE2QyxDQUMzQ0QsVUFBWUMsY0FDYixDQUZELElBSUssSUFBSVAsRUFBRWUsd0JBQUYsQ0FBMkJMLEtBQTNCLEdBQXFDRixnQkFBekMsQ0FBMkQsQ0FDOURGLFVBQVlFLGdCQUNiLENBRkksSUFHQSxJQUFJQyxnQkFBSixDQUFzQixDQUN6QkgsVUFBWUcsZ0JBQ2IsQ0FHRCxHQUFNTyxVQUFXLHFCQUNmLENBQUNkLFdBQUQsQ0FEZSxDQUVmLENBQ0VJLDRCQUE2QkEsU0FEL0IsQ0FFRVcsWUFBYWYsTUFBTWUsV0FGckIsQ0FHRUMsU0FBVWIsUUFBUWMsWUFBUixDQUFxQkMsSUFBckIsV0FBZ0NsQixNQUFNVSxTQUF0QyxDQUhaLENBSUVTLE9BQVFoQixRQUFRaUIsVUFBUixDQUFtQkYsSUFBbkIsV0FBOEJsQixNQUFNVSxTQUFwQyxDQUpWLENBS0VXLFFBQVNsQixRQUFRbUIsV0FBUixDQUFvQkosSUFBcEIsV0FBK0JsQixNQUFNVSxTQUFyQyxDQUxYLENBTUVhLEtBQU12QixNQUFNdUIsSUFOZCxDQU9FQyxNQUFPdEIsTUFBTU8sTUFBTixDQUFhVCxNQUFNVSxTQUFuQixFQUE4QmMsS0FQdkMsQ0FGZSxDQUFqQixDQVlBLE1BQU9WLFVBQVNkLEtBQWhCLENBQ0EsTUFDRSxnRUFBV2MsUUFBWCxtREFFSCxDQXpDTSxDQTJDUGYsY0FBYzBCLFNBQWQsQ0FBMEIsQ0FDeEJmLFVBQVcsZ0JBQU1nQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEVixDQUV4QkMsMkJBQTRCLGdCQUFNSCxTQUFOLENBQWdCSSxJQUZwQixDQUd4QkMsb0JBQXFCLGdCQUFNTCxTQUFOLENBQWdCSSxJQUhiLENBSXhCMUIsVUFBVyxnQkFBTXNCLFNBQU4sQ0FBZ0JDLE1BSkgsQ0FLeEJ0QixlQUFnQixnQkFBTXFCLFNBQU4sQ0FBZ0JDLE1BTFIsQ0FNeEJyQixpQkFBa0IsZ0JBQU1vQixTQUFOLENBQWdCQyxNQU5WLENBT3hCcEIsaUJBQWtCLGdCQUFNbUIsU0FBTixDQUFnQkMsTUFQVixDQVF4QkssWUFBYSxnQkFBTU4sU0FBTixDQUFnQk8sS0FBaEIsQ0FBc0JMLFVBUlgsQ0FBMUIsQ0FXQTdCLGNBQWNtQyxZQUFkLENBQTZCLENBQzNCaEMsTUFBTyxnQkFBTXdCLFNBQU4sQ0FBZ0JTLE1BREksQ0FFM0JoQyxRQUFTLGdCQUFNdUIsU0FBTixDQUFnQlMsTUFGRSxDQUE3QixDLHlHQXREYXBDLGEiLCJmaWxlIjoicmVhY3RpdmVfaW5wdXQuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL0lkZWFQcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBIIGZyb20gJy4vX2hlbHBlcnMuanMnO1xuXG5leHBvcnQgY29uc3QgUmVhY3RpdmVJbnB1dCA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBtZXRob2RzIH0gPSBjb250ZXh0O1xuICBsZXQge2NsYXNzTmFtZSwgY2xhc3NOYW1lVmFsaWQsIGNsYXNzTmFtZUludmFsaWQsIGNsYXNzTmFtZU5ldXRyYWwgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGZpZWxkID0gc3RhdGUuZmllbGRzW3Byb3BzLmZpZWxkTmFtZV07XG5cbiAgLy8gSGlkZSBSZWFjdGl2ZSBjbGFzc2VzIGlmIHRoZXNlIHNldHRpbmdzIGFyZSB0cnVlXG4gIGlmIChILnNob3VsZEhpZGVSZWFjdGl2ZShwcm9wcywgY29udGV4dCkpIHtcbiAgICBjbGFzc05hbWVWYWxpZCA9ICcnO1xuICAgIGNsYXNzTmFtZUludmFsaWQgPSAnJztcbiAgfVxuXG4gIC8vIFNldCB0aGUgcHJvcGVyIGNsYXNzTmFtZVxuICBpZiAoSC5maWVsZElzVmFsaWQoZmllbGQpICYmIGNsYXNzTmFtZVZhbGlkKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lVmFsaWQ7XG4gIH1cbiAgLy8gU28gd2UgZG9uJ3Qgc3RhcnQgb2ZmIGludmFsaWQgb24gcmVxdWlyZWQgZmllbGRzIHVubGVzcyB0aGV5J3ZlIGJlZW4gY2hhbmdlZFxuICBlbHNlIGlmIChILmZpZWxkSXNJbnZhbGlkQW5kVG91Y2hlZChmaWVsZCkgJiYgY2xhc3NOYW1lSW52YWxpZCkge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZUludmFsaWQ7XG4gIH1cbiAgZWxzZSBpZiAoY2xhc3NOYW1lTmV1dHJhbCkge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZU5ldXRyYWw7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgdG8ga2VlcCBhbGwgb3RoZXIgcHJvcHMsIHRoZW4gb3ZlcndyaXRlIHRoZSBvbmVzIHdlIGNhcmUgYWJvdXRcbiAgY29uc3QgbmV3UHJvcHMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtwcm9wc30sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgcmVhY3RpdmUtaW5wdXQgJHtjbGFzc05hbWV9YCxcbiAgICAgIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIG9uQ2hhbmdlOiBtZXRob2RzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsIHByb3BzLmZpZWxkTmFtZSksXG4gICAgICBvbkJsdXI6IG1ldGhvZHMuaGFuZGxlQmx1ci5iaW5kKHRoaXMsIHByb3BzLmZpZWxkTmFtZSksXG4gICAgICBvbkZvY3VzOiBtZXRob2RzLmhhbmRsZUZvY3VzLmJpbmQodGhpcywgcHJvcHMuZmllbGROYW1lKSxcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZTogc3RhdGUuZmllbGRzW3Byb3BzLmZpZWxkTmFtZV0udmFsdWVcbiAgICB9KTtcblxuICBkZWxldGUgbmV3UHJvcHMucHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGlucHV0IHsuLi5uZXdQcm9wc30gLz5cbiAgKTtcbn07XG5cblJlYWN0aXZlSW5wdXQucHJvcFR5cGVzID0ge1xuICBmaWVsZE5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGlkZVJlYWN0aXZlVW50aWxGaXJzdEJsdXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBoaWRlUmVhY3RpdmVPbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWVWYWxpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lSW52YWxpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lTmV1dHJhbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsaWRhdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdGl2ZUlucHV0LmNvbnRleHRUeXBlcyA9IHtcbiAgc3RhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIG1ldGhvZHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG4iXX0=