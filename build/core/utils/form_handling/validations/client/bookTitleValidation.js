'use strict';exports.__esModule=true;exports.bookTitleValidation=undefined;var _helpers=require('./_helpers');var _constants=require('./_constants');var errorType='book-title-validation';var bookTitleValidation=exports.bookTitleValidation=function bookTitleValidation(formState,fieldName){var field=formState.fields[fieldName];var value=field.value;if(!value){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Book title is required.')}if(value.length<_constants.bookTitleLenMin||value.length>_constants.bookTitleLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Book title should be between '+_constants.bookTitleLenMin+' and '+_constants.bookTitleLenMax+' characters.')}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/bookTitleValidation.js');__REACT_HOT_LOADER__.register(bookTitleValidation,'bookTitleValidation','core/utils/form_handling/validations/client/bookTitleValidation.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tUaXRsZVZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZXJyb3JUeXBlIiwiYm9va1RpdGxlVmFsaWRhdGlvbiIsImZvcm1TdGF0ZSIsImZpZWxkTmFtZSIsImZpZWxkIiwiZmllbGRzIiwidmFsdWUiLCJkZWZhdWx0RXJyb3JNZXNzYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiMkVBQUEsbUNBQ0EsdUNBRUEsR0FBTUEsV0FBWSx1QkFBbEIsQ0FFTyxHQUFNQyxpREFBc0IsUUFBdEJBLG9CQUFzQixDQUFDQyxTQUFELENBQVlDLFNBQVosQ0FBMEIsQ0FDM0QsR0FBTUMsT0FBUUYsVUFBVUcsTUFBVixDQUFpQkYsU0FBakIsQ0FBZCxDQUVBLEdBQU1HLE9BQVFGLE1BQU1FLEtBQXBCLENBQ0EsR0FBSSxDQUFDQSxLQUFMLENBQVksQ0FDVixNQUFPLHlCQUNMRixLQURLLENBQ0VKLFNBREYsQ0FDYUksTUFBTUcsbUJBQU4sRUFBNkIseUJBRDFDLENBR1IsQ0FDRCxHQUFJRCxNQUFNRSxNQUFOLDZCQUFrQ0YsTUFBTUUsTUFBTiwyQkFBdEMsQ0FBc0UsQ0FDcEUsTUFBTyx5QkFDTEosS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1HLG1CQUFOLDhHQUhLLENBTVIsQ0FDRCxNQUFPLG9CQUFPSCxLQUFQLENBQ1IsQ0FsQk0sQyx5R0FGREosUyxpSEFFT0MsbUIiLCJmaWxlIjoiYm9va1RpdGxlVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9Eb2N1bWVudHMvR2l0SHViL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRXJyb3IsIHBhc3NlZCB9IGZyb20gJy4vX2hlbHBlcnMnO1xuaW1wb3J0IHsgYm9va1RpdGxlTGVuTWluLCBib29rVGl0bGVMZW5NYXggfSBmcm9tICcuL19jb25zdGFudHMnO1xuXG5jb25zdCBlcnJvclR5cGUgPSAnYm9vay10aXRsZS12YWxpZGF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJvb2tUaXRsZVZhbGlkYXRpb24gPSAoZm9ybVN0YXRlLCBmaWVsZE5hbWUpID0+IHtcbiAgY29uc3QgZmllbGQgPSBmb3JtU3RhdGUuZmllbGRzW2ZpZWxkTmFtZV07XG5cbiAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcnJvcihcbiAgICAgIGZpZWxkLCBlcnJvclR5cGUsIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2UgfHwgJ0Jvb2sgdGl0bGUgaXMgcmVxdWlyZWQuJ1xuICAgICk7XG4gIH1cbiAgaWYgKHZhbHVlLmxlbmd0aCA8IGJvb2tUaXRsZUxlbk1pbiB8fCB2YWx1ZS5sZW5ndGggPiBib29rVGl0bGVMZW5NYXgpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICBmaWVsZCxcbiAgICAgIGVycm9yVHlwZSxcbiAgICAgIGZpZWxkLmRlZmF1bHRFcnJvck1lc3NhZ2UgfHxcbiAgICAgICAgYEJvb2sgdGl0bGUgc2hvdWxkIGJlIGJldHdlZW4gJHtib29rVGl0bGVMZW5NaW59IGFuZCAke2Jvb2tUaXRsZUxlbk1heH0gY2hhcmFjdGVycy5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGFzc2VkKGZpZWxkKTtcbn07XG4iXX0=