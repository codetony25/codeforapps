'use strict';exports.__esModule=true;exports.bookTitleValidation=undefined;var _helpers=require('./_helpers');var _constants=require('./_constants');var errorType='book-title-validation';var bookTitleValidation=exports.bookTitleValidation=function bookTitleValidation(formState,fieldName){var field=formState.fields[fieldName];var value=field.value;if(!value){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Book title is required.')}if(value.length<_constants.bookTitleLenMin||value.length>_constants.bookTitleLenMax){return(0,_helpers.createError)(field,errorType,field.defaultErrorMessage||'Book title should be between '+_constants.bookTitleLenMin+' and '+_constants.bookTitleLenMax+' characters.')}return(0,_helpers.passed)(field)};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(errorType,'errorType','core/utils/form_handling/validations/client/bookTitleValidation.js');__REACT_HOT_LOADER__.register(bookTitleValidation,'bookTitleValidation','core/utils/form_handling/validations/client/bookTitleValidation.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tUaXRsZVZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZXJyb3JUeXBlIiwiYm9va1RpdGxlVmFsaWRhdGlvbiIsImZvcm1TdGF0ZSIsImZpZWxkTmFtZSIsImZpZWxkIiwiZmllbGRzIiwidmFsdWUiLCJkZWZhdWx0RXJyb3JNZXNzYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiMkVBQUEsbUNBQ0EsdUNBRUEsR0FBTUEsV0FBWSx1QkFBbEIsQ0FFTyxHQUFNQyxpREFBc0IsUUFBdEJBLG9CQUFzQixDQUFDQyxTQUFELENBQVlDLFNBQVosQ0FBMEIsQ0FDM0QsR0FBTUMsT0FBUUYsVUFBVUcsTUFBVixDQUFpQkYsU0FBakIsQ0FBZCxDQUVBLEdBQU1HLE9BQVFGLE1BQU1FLEtBQXBCLENBQ0EsR0FBSSxDQUFDQSxLQUFMLENBQVksQ0FDVixNQUFPLHlCQUNMRixLQURLLENBQ0VKLFNBREYsQ0FDYUksTUFBTUcsbUJBQU4sRUFBNkIseUJBRDFDLENBR1IsQ0FDRCxHQUFJRCxNQUFNRSxNQUFOLDZCQUFrQ0YsTUFBTUUsTUFBTiwyQkFBdEMsQ0FBc0UsQ0FDcEUsTUFBTyx5QkFDTEosS0FESyxDQUVMSixTQUZLLENBR0xJLE1BQU1HLG1CQUFOLDhHQUhLLENBTVIsQ0FDRCxNQUFPLG9CQUFPSCxLQUFQLENBQ1IsQ0FsQk0sQyx5R0FGREosUyxpSEFFT0MsbUIiLCJmaWxlIjoiYm9va1RpdGxlVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9Qcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVycm9yLCBwYXNzZWQgfSBmcm9tICcuL19oZWxwZXJzJztcbmltcG9ydCB7IGJvb2tUaXRsZUxlbk1pbiwgYm9va1RpdGxlTGVuTWF4IH0gZnJvbSAnLi9fY29uc3RhbnRzJztcblxuY29uc3QgZXJyb3JUeXBlID0gJ2Jvb2stdGl0bGUtdmFsaWRhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBib29rVGl0bGVWYWxpZGF0aW9uID0gKGZvcm1TdGF0ZSwgZmllbGROYW1lKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZm9ybVN0YXRlLmZpZWxkc1tmaWVsZE5hbWVdO1xuXG4gIGNvbnN0IHZhbHVlID0gZmllbGQudmFsdWU7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoXG4gICAgICBmaWVsZCwgZXJyb3JUeXBlLCBmaWVsZC5kZWZhdWx0RXJyb3JNZXNzYWdlIHx8ICdCb29rIHRpdGxlIGlzIHJlcXVpcmVkLidcbiAgICApO1xuICB9XG4gIGlmICh2YWx1ZS5sZW5ndGggPCBib29rVGl0bGVMZW5NaW4gfHwgdmFsdWUubGVuZ3RoID4gYm9va1RpdGxlTGVuTWF4KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVycm9yKFxuICAgICAgZmllbGQsXG4gICAgICBlcnJvclR5cGUsXG4gICAgICBmaWVsZC5kZWZhdWx0RXJyb3JNZXNzYWdlIHx8XG4gICAgICAgIGBCb29rIHRpdGxlIHNob3VsZCBiZSBiZXR3ZWVuICR7Ym9va1RpdGxlTGVuTWlufSBhbmQgJHtib29rVGl0bGVMZW5NYXh9IGNoYXJhY3RlcnMuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHBhc3NlZChmaWVsZCk7XG59O1xuIl19