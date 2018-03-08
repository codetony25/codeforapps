'use strict';exports.__esModule=true;exports.usernameOrEmailValidation=undefined;var _helpers=require('./_helpers');var _constants=require('./_constants');var errorType='username-or-email-validation';var usernameOrEmailValidation=exports.usernameOrEmailValidation=function usernameOrEmailValidation(formState,fieldName){var field=formState.fields[fieldName];var value=field.value;var isEmail=value.includes('@');if(isEmail){value=value.replace(_constants.emailPatternReplace,'');if(!value||!value.match(_constants.emailPatternMatch)){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Not a valid Username or E-Mail.')}if(value.length>_constants.emailLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'E-Mail should be less than '+_constants.emailLenMax+' characters.')}}else{value=value.replace(_constants.usernamePatternReplace,'');if(value.length<_constants.usernameLenMin||value.length>_constants.usernameLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Username should be between '+_constants.usernameLenMin+' and '+_constants.usernameLenMax+' characters.')}}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/usernameOrEmailValidation.js');__REACT_HOT_LOADER__.register(usernameOrEmailValidation,'usernameOrEmailValidation','core/utils/form_handling/validations/client/usernameOrEmailValidation.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJuYW1lT3JFbWFpbFZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZXJyb3JUeXBlIiwidXNlcm5hbWVPckVtYWlsVmFsaWRhdGlvbiIsImZvcm1TdGF0ZSIsImZpZWxkTmFtZSIsImZpZWxkIiwiZmllbGRzIiwidmFsdWUiLCJpc0VtYWlsIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwibWF0Y2giLCJkZWZhdWx0RXJyb3JNZXNzYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiaUZBQUEsbUNBQ0EsdUNBV0EsR0FBTUEsV0FBWSw4QkFBbEIsQ0FFTyxHQUFNQyw2REFBNEIsUUFBNUJBLDBCQUE0QixDQUFDQyxTQUFELENBQVlDLFNBQVosQ0FBMEIsQ0FDakUsR0FBTUMsT0FBUUYsVUFBVUcsTUFBVixDQUFpQkYsU0FBakIsQ0FBZCxDQUNBLEdBQUlHLE9BQVFGLE1BQU1FLEtBQWxCLENBRUEsR0FBTUMsU0FBVUQsTUFBTUUsUUFBTixDQUFlLEdBQWYsQ0FBaEIsQ0FFQSxHQUFJRCxPQUFKLENBQWEsQ0FFWEQsTUFBUUEsTUFBTUcsT0FBTixnQ0FBbUMsRUFBbkMsQ0FBUixDQUNBLEdBQUksQ0FBQ0gsS0FBRCxFQUFVLENBQUNBLE1BQU1JLEtBQU4sOEJBQWYsQ0FBK0MsQ0FDN0MsTUFBTyx5QkFDTE4sS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1PLG1CQUFOLEVBQTZCLGlDQUh4QixDQUtSLENBQ0QsR0FBSUwsTUFBTU0sTUFBTix1QkFBSixDQUFnQyxDQUM5QixNQUFPLHlCQUNMUixLQURLLENBRUxKLFNBRkssQ0FHTEksTUFBTU8sbUJBQU4scUVBSEssQ0FNUixDQUNGLENBbEJELElBa0JPLENBRUxMLE1BQVFBLE1BQU1HLE9BQU4sbUNBQXNDLEVBQXRDLENBQVIsQ0FDQSxHQUFJSCxNQUFNTSxNQUFOLDRCQUFpQ04sTUFBTU0sTUFBTiwwQkFBckMsQ0FBb0UsQ0FDbEUsTUFBTyx5QkFDTFIsS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1PLG1CQUFOLDBHQUhLLENBTVIsQ0FDRixDQUNELE1BQU8sb0JBQU9QLEtBQVAsQ0FDUixDQXJDTSxDLHlHQUZESixTLHVIQUVPQyx5QiIsImZpbGUiOiJ1c2VybmFtZU9yRW1haWxWYWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRXJyb3IsIHBhc3NlZCB9IGZyb20gJy4vX2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgZW1haWxQYXR0ZXJuUmVwbGFjZSxcbiAgZW1haWxQYXR0ZXJuTWF0Y2gsXG4gIGVtYWlsTGVuTWF4LFxuICBlbWFpbExlbk1pbixcbiAgdXNlcm5hbWVQYXR0ZXJuUmVwbGFjZSxcbiAgdXNlcm5hbWVQYXR0ZXJuTWF0Y2gsXG4gIHVzZXJuYW1lTGVuTWF4LFxuICB1c2VybmFtZUxlbk1pblxufSBmcm9tICcuL19jb25zdGFudHMnO1xuXG5jb25zdCBlcnJvclR5cGUgPSAndXNlcm5hbWUtb3ItZW1haWwtdmFsaWRhdGlvbic7XG5cbmV4cG9ydCBjb25zdCB1c2VybmFtZU9yRW1haWxWYWxpZGF0aW9uID0gKGZvcm1TdGF0ZSwgZmllbGROYW1lKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZm9ybVN0YXRlLmZpZWxkc1tmaWVsZE5hbWVdO1xuICBsZXQgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgLy8gT25seSBFbWFpbHMgY2FuIGluY2x1ZGUgdGhlIEAgc3ltYm9sLlxuICBjb25zdCBpc0VtYWlsID0gdmFsdWUuaW5jbHVkZXMoJ0AnKTtcblxuICBpZiAoaXNFbWFpbCkge1xuICAgIC8vIFdvcmtpbmcgd2l0aCBFTWFpbFxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShlbWFpbFBhdHRlcm5SZXBsYWNlLCAnJyk7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUubWF0Y2goZW1haWxQYXR0ZXJuTWF0Y2gpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICAgIGZpZWxkLFxuICAgICAgICBlcnJvclR5cGUsXG4gICAgICAgIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2UgfHwgJ05vdCBhIHZhbGlkIFVzZXJuYW1lIG9yIEUtTWFpbC4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodmFsdWUubGVuZ3RoID4gZW1haWxMZW5NYXgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcnJvcihcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGVycm9yVHlwZSxcbiAgICAgICAgZmllbGQuZGVmYXVsdEVycm9yTWVzc2FnZVxuICAgICAgICB8fCBgRS1NYWlsIHNob3VsZCBiZSBsZXNzIHRoYW4gJHtlbWFpbExlbk1heH0gY2hhcmFjdGVycy5gXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXb3JraW5nIHdpdGggVXNlcm5hbWVcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UodXNlcm5hbWVQYXR0ZXJuUmVwbGFjZSwgJycpO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCB1c2VybmFtZUxlbk1pbiB8fCB2YWx1ZS5sZW5ndGggPiB1c2VybmFtZUxlbk1heCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgZXJyb3JUeXBlLFxuICAgICAgICBmaWVsZC5kZWZhdWx0RXJyb3JNZXNzYWdlXG4gICAgICAgIHx8IGBVc2VybmFtZSBzaG91bGQgYmUgYmV0d2VlbiAke3VzZXJuYW1lTGVuTWlufSBhbmQgJHt1c2VybmFtZUxlbk1heH0gY2hhcmFjdGVycy5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFzc2VkKGZpZWxkKTtcbn07XG4iXX0=