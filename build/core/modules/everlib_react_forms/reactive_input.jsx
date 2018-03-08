'use strict';exports.__esModule=true;exports.ReactiveInput=undefined;var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _jsxFileName='core/modules/everlib_react_forms/reactive_input.jsx';var _react=require('react');var _react2=_interopRequireDefault(_react);var _helpers=require('./_helpers.js');var H=_interopRequireWildcard(_helpers);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ReactiveInput=exports.ReactiveInput=function ReactiveInput(props,context){var state=context.state;var methods=context.methods;var className=props.className;var classNameValid=props.classNameValid;var classNameInvalid=props.classNameInvalid;var classNameNeutral=props.classNameNeutral;var field=state.fields[props.fieldName];if(H.shouldHideReactive(props,context)){classNameValid='';classNameInvalid=''}if(H.fieldIsValid(field)&&classNameValid){className=classNameValid}else if(H.fieldIsInvalidAndTouched(field)&&classNameInvalid){className=classNameInvalid}else if(classNameNeutral){className=classNameNeutral}var newProps=(0,_assign2.default)({props:props},{className:'reactive-input '+className,placeholder:props.placeholder,onChange:methods.handleChange.bind(undefined,props.fieldName),onBlur:methods.handleBlur.bind(undefined,props.fieldName),onFocus:methods.handleFocus.bind(undefined,props.fieldName),type:props.type,value:state.fields[props.fieldName].value});delete newProps.props;return _react2.default.createElement('input',(0,_extends3.default)({},newProps,{__source:{fileName:_jsxFileName,lineNumber:43}}))};ReactiveInput.propTypes={fieldName:_react2.default.PropTypes.string.isRequired,hideReactiveUntilFirstBlur:_react2.default.PropTypes.bool,hideReactiveOnFocus:_react2.default.PropTypes.bool,className:_react2.default.PropTypes.string,classNameValid:_react2.default.PropTypes.string,classNameInvalid:_react2.default.PropTypes.string,classNameNeutral:_react2.default.PropTypes.string,validations:_react2.default.PropTypes.array.isRequired};ReactiveInput.contextTypes={state:_react2.default.PropTypes.object,methods:_react2.default.PropTypes.object};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ReactiveInput,'ReactiveInput','core/modules/everlib_react_forms/reactive_input.jsx')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aXZlX2lucHV0LmpzeCJdLCJuYW1lcyI6WyJIIiwiUmVhY3RpdmVJbnB1dCIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibWV0aG9kcyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVZhbGlkIiwiY2xhc3NOYW1lSW52YWxpZCIsImNsYXNzTmFtZU5ldXRyYWwiLCJmaWVsZCIsImZpZWxkcyIsImZpZWxkTmFtZSIsInNob3VsZEhpZGVSZWFjdGl2ZSIsImZpZWxkSXNWYWxpZCIsImZpZWxkSXNJbnZhbGlkQW5kVG91Y2hlZCIsIm5ld1Byb3BzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkJsdXIiLCJoYW5kbGVCbHVyIiwib25Gb2N1cyIsImhhbmRsZUZvY3VzIiwidHlwZSIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhpZGVSZWFjdGl2ZVVudGlsRmlyc3RCbHVyIiwiYm9vbCIsImhpZGVSZWFjdGl2ZU9uRm9jdXMiLCJ2YWxpZGF0aW9ucyIsImFycmF5IiwiY29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiMlZBQUEsNEIsMkNBQ0Esc0MsR0FBWUEsRSw0VkFFTCxHQUFNQyxxQ0FBZ0IsUUFBaEJBLGNBQWdCLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFvQixJQUN2Q0MsTUFEdUMsQ0FDcEJELE9BRG9CLENBQ3ZDQyxLQUR1QyxJQUNoQ0MsUUFEZ0MsQ0FDcEJGLE9BRG9CLENBQ2hDRSxPQURnQyxJQUUxQ0MsVUFGMEMsQ0FFd0JKLEtBRnhCLENBRTFDSSxTQUYwQyxJQUUvQkMsZUFGK0IsQ0FFd0JMLEtBRnhCLENBRS9CSyxjQUYrQixJQUVmQyxpQkFGZSxDQUV3Qk4sS0FGeEIsQ0FFZk0sZ0JBRmUsSUFFR0MsaUJBRkgsQ0FFd0JQLEtBRnhCLENBRUdPLGdCQUZILENBSS9DLEdBQU1DLE9BQVFOLE1BQU1PLE1BQU4sQ0FBYVQsTUFBTVUsU0FBbkIsQ0FBZCxDQUdBLEdBQUlaLEVBQUVhLGtCQUFGLENBQXFCWCxLQUFyQixDQUE0QkMsT0FBNUIsQ0FBSixDQUEwQyxDQUN4Q0ksZUFBaUIsRUFBakIsQ0FDQUMsaUJBQW1CLEVBQ3BCLENBR0QsR0FBSVIsRUFBRWMsWUFBRixDQUFlSixLQUFmLEdBQXlCSCxjQUE3QixDQUE2QyxDQUMzQ0QsVUFBWUMsY0FDYixDQUZELElBSUssSUFBSVAsRUFBRWUsd0JBQUYsQ0FBMkJMLEtBQTNCLEdBQXFDRixnQkFBekMsQ0FBMkQsQ0FDOURGLFVBQVlFLGdCQUNiLENBRkksSUFHQSxJQUFJQyxnQkFBSixDQUFzQixDQUN6QkgsVUFBWUcsZ0JBQ2IsQ0FHRCxHQUFNTyxVQUFXLHFCQUNmLENBQUNkLFdBQUQsQ0FEZSxDQUVmLENBQ0VJLDRCQUE2QkEsU0FEL0IsQ0FFRVcsWUFBYWYsTUFBTWUsV0FGckIsQ0FHRUMsU0FBVWIsUUFBUWMsWUFBUixDQUFxQkMsSUFBckIsV0FBZ0NsQixNQUFNVSxTQUF0QyxDQUhaLENBSUVTLE9BQVFoQixRQUFRaUIsVUFBUixDQUFtQkYsSUFBbkIsV0FBOEJsQixNQUFNVSxTQUFwQyxDQUpWLENBS0VXLFFBQVNsQixRQUFRbUIsV0FBUixDQUFvQkosSUFBcEIsV0FBK0JsQixNQUFNVSxTQUFyQyxDQUxYLENBTUVhLEtBQU12QixNQUFNdUIsSUFOZCxDQU9FQyxNQUFPdEIsTUFBTU8sTUFBTixDQUFhVCxNQUFNVSxTQUFuQixFQUE4QmMsS0FQdkMsQ0FGZSxDQUFqQixDQVlBLE1BQU9WLFVBQVNkLEtBQWhCLENBQ0EsTUFDRSxnRUFBV2MsUUFBWCxtREFFSCxDQXpDTSxDQTJDUGYsY0FBYzBCLFNBQWQsQ0FBMEIsQ0FDeEJmLFVBQVcsZ0JBQU1nQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEVixDQUV4QkMsMkJBQTRCLGdCQUFNSCxTQUFOLENBQWdCSSxJQUZwQixDQUd4QkMsb0JBQXFCLGdCQUFNTCxTQUFOLENBQWdCSSxJQUhiLENBSXhCMUIsVUFBVyxnQkFBTXNCLFNBQU4sQ0FBZ0JDLE1BSkgsQ0FLeEJ0QixlQUFnQixnQkFBTXFCLFNBQU4sQ0FBZ0JDLE1BTFIsQ0FNeEJyQixpQkFBa0IsZ0JBQU1vQixTQUFOLENBQWdCQyxNQU5WLENBT3hCcEIsaUJBQWtCLGdCQUFNbUIsU0FBTixDQUFnQkMsTUFQVixDQVF4QkssWUFBYSxnQkFBTU4sU0FBTixDQUFnQk8sS0FBaEIsQ0FBc0JMLFVBUlgsQ0FBMUIsQ0FXQTdCLGNBQWNtQyxZQUFkLENBQTZCLENBQzNCaEMsTUFBTyxnQkFBTXdCLFNBQU4sQ0FBZ0JTLE1BREksQ0FFM0JoQyxRQUFTLGdCQUFNdUIsU0FBTixDQUFnQlMsTUFGRSxDQUE3QixDLHlHQXREYXBDLGEiLCJmaWxlIjoicmVhY3RpdmVfaW5wdXQuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEggZnJvbSAnLi9faGVscGVycy5qcyc7XG5cbmV4cG9ydCBjb25zdCBSZWFjdGl2ZUlucHV0ID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IGNvbnRleHQ7XG4gIGxldCB7Y2xhc3NOYW1lLCBjbGFzc05hbWVWYWxpZCwgY2xhc3NOYW1lSW52YWxpZCwgY2xhc3NOYW1lTmV1dHJhbCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZmllbGQgPSBzdGF0ZS5maWVsZHNbcHJvcHMuZmllbGROYW1lXTtcblxuICAvLyBIaWRlIFJlYWN0aXZlIGNsYXNzZXMgaWYgdGhlc2Ugc2V0dGluZ3MgYXJlIHRydWVcbiAgaWYgKEguc2hvdWxkSGlkZVJlYWN0aXZlKHByb3BzLCBjb250ZXh0KSkge1xuICAgIGNsYXNzTmFtZVZhbGlkID0gJyc7XG4gICAgY2xhc3NOYW1lSW52YWxpZCA9ICcnO1xuICB9XG5cbiAgLy8gU2V0IHRoZSBwcm9wZXIgY2xhc3NOYW1lXG4gIGlmIChILmZpZWxkSXNWYWxpZChmaWVsZCkgJiYgY2xhc3NOYW1lVmFsaWQpIHtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVWYWxpZDtcbiAgfVxuICAvLyBTbyB3ZSBkb24ndCBzdGFydCBvZmYgaW52YWxpZCBvbiByZXF1aXJlZCBmaWVsZHMgdW5sZXNzIHRoZXkndmUgYmVlbiBjaGFuZ2VkXG4gIGVsc2UgaWYgKEguZmllbGRJc0ludmFsaWRBbmRUb3VjaGVkKGZpZWxkKSAmJiBjbGFzc05hbWVJbnZhbGlkKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lSW52YWxpZDtcbiAgfVxuICBlbHNlIGlmIChjbGFzc05hbWVOZXV0cmFsKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lTmV1dHJhbDtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB0byBrZWVwIGFsbCBvdGhlciBwcm9wcywgdGhlbiBvdmVyd3JpdGUgdGhlIG9uZXMgd2UgY2FyZSBhYm91dFxuICBjb25zdCBuZXdQcm9wcyA9IE9iamVjdC5hc3NpZ24oXG4gICAge3Byb3BzfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGByZWFjdGl2ZS1pbnB1dCAke2NsYXNzTmFtZX1gLFxuICAgICAgcGxhY2Vob2xkZXI6IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgb25DaGFuZ2U6IG1ldGhvZHMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgcHJvcHMuZmllbGROYW1lKSxcbiAgICAgIG9uQmx1cjogbWV0aG9kcy5oYW5kbGVCbHVyLmJpbmQodGhpcywgcHJvcHMuZmllbGROYW1lKSxcbiAgICAgIG9uRm9jdXM6IG1ldGhvZHMuaGFuZGxlRm9jdXMuYmluZCh0aGlzLCBwcm9wcy5maWVsZE5hbWUpLFxuICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgIHZhbHVlOiBzdGF0ZS5maWVsZHNbcHJvcHMuZmllbGROYW1lXS52YWx1ZVxuICAgIH0pO1xuXG4gIGRlbGV0ZSBuZXdQcm9wcy5wcm9wcztcbiAgcmV0dXJuIChcbiAgICA8aW5wdXQgey4uLm5ld1Byb3BzfSAvPlxuICApO1xufTtcblxuUmVhY3RpdmVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGZpZWxkTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUmVhY3RpdmVVbnRpbEZpcnN0Qmx1cjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVSZWFjdGl2ZU9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZVZhbGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWVJbnZhbGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWVOZXV0cmFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2YWxpZGF0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cblJlYWN0aXZlSW5wdXQuY29udGV4dFR5cGVzID0ge1xuICBzdGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbWV0aG9kczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcbiJdfQ==