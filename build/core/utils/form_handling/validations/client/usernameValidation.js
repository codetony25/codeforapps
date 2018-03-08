'use strict';exports.__esModule=true;exports.usernameValidation=undefined;var _helpers=require('./_helpers');var _constants=require('./_constants');var errorType='username-validation';var usernameValidation=exports.usernameValidation=function usernameValidation(formState,fieldName){var field=formState.fields[fieldName];field.value=field.value.replace(_constants.usernamePatternReplace,'');var value=field.value;if(value.length<_constants.usernameLenMin||value.length>_constants.usernameLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Username should be between '+_constants.usernameLenMin+' and '+_constants.usernameLenMax+' characters.')}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/usernameValidation.js');__REACT_HOT_LOADER__.register(usernameValidation,'usernameValidation','core/utils/form_handling/validations/client/usernameValidation.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJuYW1lVmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJlcnJvclR5cGUiLCJ1c2VybmFtZVZhbGlkYXRpb24iLCJmb3JtU3RhdGUiLCJmaWVsZE5hbWUiLCJmaWVsZCIsImZpZWxkcyIsInZhbHVlIiwicmVwbGFjZSIsImxlbmd0aCIsImRlZmF1bHRFcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiIwRUFBQSxtQ0FDQSx1Q0FNQSxHQUFNQSxXQUFZLHFCQUFsQixDQUVPLEdBQU1DLCtDQUFxQixRQUFyQkEsbUJBQXFCLENBQUNDLFNBQUQsQ0FBWUMsU0FBWixDQUEwQixDQUMxRCxHQUFNQyxPQUFRRixVQUFVRyxNQUFWLENBQWlCRixTQUFqQixDQUFkLENBQ0FDLE1BQU1FLEtBQU4sQ0FBY0YsTUFBTUUsS0FBTixDQUFZQyxPQUFaLG1DQUE0QyxFQUE1QyxDQUFkLENBQ0EsR0FBTUQsT0FBUUYsTUFBTUUsS0FBcEIsQ0FFQSxHQUFJQSxNQUFNRSxNQUFOLDRCQUFpQ0YsTUFBTUUsTUFBTiwwQkFBckMsQ0FBb0UsQ0FDbEUsTUFBTyx5QkFDTEosS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1LLG1CQUFOLDBHQUhLLENBTVIsQ0FDRCxNQUFPLG9CQUFPTCxLQUFQLENBQ1IsQ0FkTSxDLHlHQUZESixTLGdIQUVPQyxrQiIsImZpbGUiOiJ1c2VybmFtZVZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFcnJvciwgcGFzc2VkIH0gZnJvbSAnLi9faGVscGVycyc7XG5pbXBvcnQge1xuICB1c2VybmFtZUxlbk1pbixcbiAgdXNlcm5hbWVMZW5NYXgsXG4gIHVzZXJuYW1lUGF0dGVyblJlcGxhY2Vcbn0gZnJvbSAnLi9fY29uc3RhbnRzJztcblxuY29uc3QgZXJyb3JUeXBlID0gJ3VzZXJuYW1lLXZhbGlkYXRpb24nO1xuXG5leHBvcnQgY29uc3QgdXNlcm5hbWVWYWxpZGF0aW9uID0gKGZvcm1TdGF0ZSwgZmllbGROYW1lKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZm9ybVN0YXRlLmZpZWxkc1tmaWVsZE5hbWVdO1xuICBmaWVsZC52YWx1ZSA9IGZpZWxkLnZhbHVlLnJlcGxhY2UodXNlcm5hbWVQYXR0ZXJuUmVwbGFjZSwgJycpO1xuICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuXG4gIGlmICh2YWx1ZS5sZW5ndGggPCB1c2VybmFtZUxlbk1pbiB8fCB2YWx1ZS5sZW5ndGggPiB1c2VybmFtZUxlbk1heCkge1xuICAgIHJldHVybiBjcmVhdGVFcnJvcihcbiAgICAgIGZpZWxkLFxuICAgICAgZXJyb3JUeXBlLFxuICAgICAgZmllbGQuZGVmYXVsdEVycm9yTWVzc2FnZVxuICAgICAgfHwgYFVzZXJuYW1lIHNob3VsZCBiZSBiZXR3ZWVuICR7dXNlcm5hbWVMZW5NaW59IGFuZCAke3VzZXJuYW1lTGVuTWF4fSBjaGFyYWN0ZXJzLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwYXNzZWQoZmllbGQpO1xufTtcbiJdfQ==