'use strict';var _meteor=require('meteor/meteor');var _validations=require('/imports/form_handling/validations');_meteor.Meteor.methods({'doLandingSubscriberForm':function doLandingSubscriberForm(formState){_meteor.Meteor.call('doAllValidations',[{validation:_validations.doEmailValidation,fieldName:'email'}],formState);_meteor.Meteor.call('subscribers.insert',formState.fields.email.value)}});;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmdfc3Vic2NyaWJlcl9mb3JtLmpzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJmb3JtU3RhdGUiLCJjYWxsIiwidmFsaWRhdGlvbiIsImZpZWxkTmFtZSIsImZpZWxkcyIsImVtYWlsIiwidmFsdWUiXSwibWFwcGluZ3MiOiJhQUFBLHFDQUNBLCtEQUlBLGVBQU9BLE9BQVAsQ0FBZSxDQUNiLDBCQUEyQixpQ0FBU0MsU0FBVCxDQUFvQixDQUU3QyxlQUFPQyxJQUFQLENBQ0Usa0JBREYsQ0FFRSxDQUNFLENBQ0VDLHlDQURGLENBRUVDLFVBQVcsT0FGYixDQURGLENBRkYsQ0FRRUgsU0FSRixFQVdBLGVBQU9DLElBQVAsQ0FBWSxvQkFBWixDQUFrQ0QsVUFBVUksTUFBVixDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQXpELENBQ0QsQ0FmWSxDQUFmLEUiLCJmaWxlIjoibGFuZGluZ19zdWJzY3JpYmVyX2Zvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vSWRlYVByb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQge1xuICBkb0VtYWlsVmFsaWRhdGlvbixcbn0gZnJvbSAnL2ltcG9ydHMvZm9ybV9oYW5kbGluZy92YWxpZGF0aW9ucyc7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ2RvTGFuZGluZ1N1YnNjcmliZXJGb3JtJzogZnVuY3Rpb24oZm9ybVN0YXRlKSB7XG5cbiAgICBNZXRlb3IuY2FsbChcbiAgICAgICdkb0FsbFZhbGlkYXRpb25zJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbGlkYXRpb246IGRvRW1haWxWYWxpZGF0aW9uLFxuICAgICAgICAgIGZpZWxkTmFtZTogJ2VtYWlsJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZm9ybVN0YXRlXG4gICAgKTtcblxuICAgIE1ldGVvci5jYWxsKCdzdWJzY3JpYmVycy5pbnNlcnQnLCBmb3JtU3RhdGUuZmllbGRzLmVtYWlsLnZhbHVlKTtcbiAgfVxuXG59KTsiXX0=