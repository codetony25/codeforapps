'use strict';exports.__esModule=true;exports.emailValidation=undefined;var _helpers=require('./_helpers');var _constants=require('./_constants');var errorType='email-validation';var emailValidation=exports.emailValidation=function emailValidation(formState,fieldName){var field=formState.fields[fieldName];field.value=field.value.replace(_constants.emailPatternReplace,'');var value=field.value;if(!value||!value.match(_constants.emailPatternMatch)){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Please enter a valid E-Mail.')}if(value.length>_constants.emailLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'E-Mail should be less than '+_constants.emailLenMax+' characters.')}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/emailValidation.js');__REACT_HOT_LOADER__.register(emailValidation,'emailValidation','core/utils/form_handling/validations/client/emailValidation.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsVmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJlcnJvclR5cGUiLCJlbWFpbFZhbGlkYXRpb24iLCJmb3JtU3RhdGUiLCJmaWVsZE5hbWUiLCJmaWVsZCIsImZpZWxkcyIsInZhbHVlIiwicmVwbGFjZSIsIm1hdGNoIiwiZGVmYXVsdEVycm9yTWVzc2FnZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6InVFQUFBLG1DQUNBLHVDQU1BLEdBQU1BLFdBQVksa0JBQWxCLENBRU8sR0FBTUMseUNBQWtCLFFBQWxCQSxnQkFBa0IsQ0FBQ0MsU0FBRCxDQUFZQyxTQUFaLENBQTBCLENBQ3ZELEdBQU1DLE9BQVFGLFVBQVVHLE1BQVYsQ0FBaUJGLFNBQWpCLENBQWQsQ0FDQUMsTUFBTUUsS0FBTixDQUFjRixNQUFNRSxLQUFOLENBQVlDLE9BQVosZ0NBQXlDLEVBQXpDLENBQWQsQ0FDQSxHQUFNRCxPQUFRRixNQUFNRSxLQUFwQixDQUNBLEdBQUksQ0FBQ0EsS0FBRCxFQUFVLENBQUNBLE1BQU1FLEtBQU4sOEJBQWYsQ0FBK0MsQ0FDN0MsTUFBTyx5QkFDTEosS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1LLG1CQUFOLEVBQTZCLDhCQUh4QixDQUtSLENBQ0QsR0FBSUgsTUFBTUksTUFBTix1QkFBSixDQUFnQyxDQUM5QixNQUFPLHlCQUNMTixLQURLLENBRUxKLFNBRkssQ0FHTEksTUFBTUssbUJBQU4scUVBSEssQ0FNUixDQUNELE1BQU8sb0JBQU9MLEtBQVAsQ0FDUixDQXBCTSxDLHlHQUZESixTLDZHQUVPQyxlIiwiZmlsZSI6ImVtYWlsVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9JZGVhUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFcnJvciwgcGFzc2VkIH0gZnJvbSAnLi9faGVscGVycyc7XG5pbXBvcnQge1xuICBlbWFpbExlbk1heCxcbiAgZW1haWxQYXR0ZXJuTWF0Y2gsXG4gIGVtYWlsUGF0dGVyblJlcGxhY2Vcbn0gZnJvbSAnLi9fY29uc3RhbnRzJztcblxuY29uc3QgZXJyb3JUeXBlID0gJ2VtYWlsLXZhbGlkYXRpb24nO1xuXG5leHBvcnQgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gKGZvcm1TdGF0ZSwgZmllbGROYW1lKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZm9ybVN0YXRlLmZpZWxkc1tmaWVsZE5hbWVdO1xuICBmaWVsZC52YWx1ZSA9IGZpZWxkLnZhbHVlLnJlcGxhY2UoZW1haWxQYXR0ZXJuUmVwbGFjZSwgJycpO1xuICBjb25zdCB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5tYXRjaChlbWFpbFBhdHRlcm5NYXRjaCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICBmaWVsZCxcbiAgICAgIGVycm9yVHlwZSxcbiAgICAgIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2UgfHwgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIEUtTWFpbC4nXG4gICAgKTtcbiAgfVxuICBpZiAodmFsdWUubGVuZ3RoID4gZW1haWxMZW5NYXgpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICBmaWVsZCxcbiAgICAgIGVycm9yVHlwZSxcbiAgICAgIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2VcbiAgICAgIHx8IGBFLU1haWwgc2hvdWxkIGJlIGxlc3MgdGhhbiAke2VtYWlsTGVuTWF4fSBjaGFyYWN0ZXJzLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwYXNzZWQoZmllbGQpO1xufTtcbiJdfQ==