'use strict';exports.__esModule=true;exports.confirmPasswordValidation=undefined;var _helpers=require('./_helpers');var errorType='confirm-password-validation';var confirmPasswordValidation=exports.confirmPasswordValidation=function confirmPasswordValidation(formState,fieldName){var field=formState.fields[fieldName];var value=field.value;if(!value||!formState||!formState.fields||!formState.fields.password){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Password & Confirm Password are required.')}if(value!==formState.fields.password.value){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Passwords do not match.')}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/confirmPasswordValidation.js');__REACT_HOT_LOADER__.register(confirmPasswordValidation,'confirmPasswordValidation','core/utils/form_handling/validations/client/confirmPasswordValidation.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1QYXNzd29yZFZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZXJyb3JUeXBlIiwiY29uZmlybVBhc3N3b3JkVmFsaWRhdGlvbiIsImZvcm1TdGF0ZSIsImZpZWxkTmFtZSIsImZpZWxkIiwiZmllbGRzIiwidmFsdWUiLCJwYXNzd29yZCIsImRlZmF1bHRFcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiJpRkFBQSxtQ0FFQSxHQUFNQSxXQUFZLDZCQUFsQixDQUVPLEdBQU1DLDZEQUE0QixRQUE1QkEsMEJBQTRCLENBQUNDLFNBQUQsQ0FBWUMsU0FBWixDQUEwQixDQUNqRSxHQUFNQyxPQUFRRixVQUFVRyxNQUFWLENBQWlCRixTQUFqQixDQUFkLENBQ0EsR0FBTUcsT0FBUUYsTUFBTUUsS0FBcEIsQ0FDQSxHQUFJLENBQUNBLEtBQUQsRUFBVSxDQUFDSixTQUFYLEVBQXdCLENBQUNBLFVBQVVHLE1BQW5DLEVBQTZDLENBQUNILFVBQVVHLE1BQVYsQ0FBaUJFLFFBQW5FLENBQTZFLENBQzNFLE1BQU8seUJBQ0xILEtBREssQ0FFTEosU0FGSyxDQUdMSSxNQUFNSSxtQkFBTixFQUE2QiwyQ0FIeEIsQ0FLUixDQUNELEdBQUlGLFFBQVVKLFVBQVVHLE1BQVYsQ0FBaUJFLFFBQWpCLENBQTBCRCxLQUF4QyxDQUErQyxDQUM3QyxNQUFPLHlCQUNMRixLQURLLENBQ0VKLFNBREYsQ0FDYUksTUFBTUksbUJBQU4sRUFBNkIseUJBRDFDLENBR1IsQ0FDRCxNQUFPLG9CQUFPSixLQUFQLENBQ1IsQ0FoQk0sQyx5R0FGREosUyx1SEFFT0MseUIiLCJmaWxlIjoiY29uZmlybVBhc3N3b3JkVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9Qcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVycm9yLCBwYXNzZWQgfSBmcm9tICcuL19oZWxwZXJzJztcblxuY29uc3QgZXJyb3JUeXBlID0gJ2NvbmZpcm0tcGFzc3dvcmQtdmFsaWRhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBjb25maXJtUGFzc3dvcmRWYWxpZGF0aW9uID0gKGZvcm1TdGF0ZSwgZmllbGROYW1lKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZm9ybVN0YXRlLmZpZWxkc1tmaWVsZE5hbWVdO1xuICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICBpZiAoIXZhbHVlIHx8ICFmb3JtU3RhdGUgfHwgIWZvcm1TdGF0ZS5maWVsZHMgfHwgIWZvcm1TdGF0ZS5maWVsZHMucGFzc3dvcmQpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICBmaWVsZCxcbiAgICAgIGVycm9yVHlwZSxcbiAgICAgIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2UgfHwgJ1Bhc3N3b3JkICYgQ29uZmlybSBQYXNzd29yZCBhcmUgcmVxdWlyZWQuJ1xuICAgICk7XG4gIH1cbiAgaWYgKHZhbHVlICE9PSBmb3JtU3RhdGUuZmllbGRzLnBhc3N3b3JkLnZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVycm9yKFxuICAgICAgZmllbGQsIGVycm9yVHlwZSwgZmllbGQuZGVmYXVsdEVycm9yTWVzc2FnZSB8fCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGFzc2VkKGZpZWxkKTtcbn07XG4iXX0=