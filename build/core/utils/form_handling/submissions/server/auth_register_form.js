'use strict';var _meteor=require('meteor/meteor');var _validations=require('../../validations');_meteor.Meteor.methods({'doAuthRegisterForm':function doAuthRegisterForm(formState){_meteor.Meteor.call('doAllValidations',[{validation:_validations.doUsernameValidation,fieldName:'username'},{validation:_validations.doPasswordValidation,fieldName:'password'},{validation:_validations.doConfirmPasswordValidation,fieldName:'confirm'},{validation:_validations.doEmailValidation,fieldName:'email'},{validation:_validations.doNameValidation,fieldName:'name'},{validation:'checkUsernameExists',fieldName:'username'},{validation:'checkEmailExists',fieldName:'email'},{validation:'recaptchaValidation'}],formState);var user={username:formState.fields.username.value,password:formState.fields.password.value,email:formState.fields.email.value,name:formState.fields.name.value};_meteor.Meteor.call('createUser',user)}});;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhfcmVnaXN0ZXJfZm9ybS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZm9ybVN0YXRlIiwiY2FsbCIsInZhbGlkYXRpb24iLCJmaWVsZE5hbWUiLCJ1c2VyIiwidXNlcm5hbWUiLCJmaWVsZHMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiZW1haWwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiYUFBQSxxQ0FDQSw4Q0FRQSxlQUFPQSxPQUFQLENBQWUsQ0FDYixxQkFBc0IsNEJBQVNDLFNBQVQsQ0FBb0IsQ0FFeEMsZUFBT0MsSUFBUCxDQUNFLGtCQURGLENBRUUsQ0FDRSxDQUNFQyw0Q0FERixDQUVFQyxVQUFXLFVBRmIsQ0FERixDQUlLLENBQ0RELDRDQURDLENBRURDLFVBQVcsVUFGVixDQUpMLENBT0ssQ0FDREQsbURBREMsQ0FFREMsVUFBVyxTQUZWLENBUEwsQ0FVSyxDQUNERCx5Q0FEQyxDQUVEQyxVQUFXLE9BRlYsQ0FWTCxDQWFLLENBQ0RELHdDQURDLENBRURDLFVBQVcsTUFGVixDQWJMLENBZ0JLLENBQ0RELFdBQVkscUJBRFgsQ0FFREMsVUFBVyxVQUZWLENBaEJMLENBbUJLLENBQ0RELFdBQVksa0JBRFgsQ0FFREMsVUFBVyxPQUZWLENBbkJMLENBc0JLLENBQ0RELFdBQVkscUJBRFgsQ0F0QkwsQ0FGRixDQTRCRUYsU0E1QkYsRUErQkEsR0FBTUksTUFBTyxDQUNYQyxTQUFVTCxVQUFVTSxNQUFWLENBQWlCRCxRQUFqQixDQUEwQkUsS0FEekIsQ0FFWEMsU0FBVVIsVUFBVU0sTUFBVixDQUFpQkUsUUFBakIsQ0FBMEJELEtBRnpCLENBR1hFLE1BQU9ULFVBQVVNLE1BQVYsQ0FBaUJHLEtBQWpCLENBQXVCRixLQUhuQixDQUlYRyxLQUFNVixVQUFVTSxNQUFWLENBQWlCSSxJQUFqQixDQUFzQkgsS0FKakIsQ0FBYixDQU9BLGVBQU9OLElBQVAsQ0FBWSxZQUFaLENBQTBCRyxJQUExQixDQUNELENBMUNZLENBQWYsRSIsImZpbGUiOiJhdXRoX3JlZ2lzdGVyX2Zvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vRG9jdW1lbnRzL0dpdEh1Yi9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHtcbiAgZG9Vc2VybmFtZVZhbGlkYXRpb24sXG4gIGRvUGFzc3dvcmRWYWxpZGF0aW9uLFxuICBkb0NvbmZpcm1QYXNzd29yZFZhbGlkYXRpb24sXG4gIGRvRW1haWxWYWxpZGF0aW9uLFxuICBkb05hbWVWYWxpZGF0aW9uXG59IGZyb20gJy4uLy4uL3ZhbGlkYXRpb25zJztcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAnZG9BdXRoUmVnaXN0ZXJGb3JtJzogZnVuY3Rpb24oZm9ybVN0YXRlKSB7XG5cbiAgICBNZXRlb3IuY2FsbChcbiAgICAgICdkb0FsbFZhbGlkYXRpb25zJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbGlkYXRpb246IGRvVXNlcm5hbWVWYWxpZGF0aW9uLFxuICAgICAgICAgIGZpZWxkTmFtZTogJ3VzZXJuYW1lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsaWRhdGlvbjogZG9QYXNzd29yZFZhbGlkYXRpb24sXG4gICAgICAgICAgZmllbGROYW1lOiAncGFzc3dvcmQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWxpZGF0aW9uOiBkb0NvbmZpcm1QYXNzd29yZFZhbGlkYXRpb24sXG4gICAgICAgICAgZmllbGROYW1lOiAnY29uZmlybSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHZhbGlkYXRpb246IGRvRW1haWxWYWxpZGF0aW9uLFxuICAgICAgICAgIGZpZWxkTmFtZTogJ2VtYWlsJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsaWRhdGlvbjogZG9OYW1lVmFsaWRhdGlvbixcbiAgICAgICAgICBmaWVsZE5hbWU6ICduYW1lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsaWRhdGlvbjogJ2NoZWNrVXNlcm5hbWVFeGlzdHMnLFxuICAgICAgICAgIGZpZWxkTmFtZTogJ3VzZXJuYW1lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsaWRhdGlvbjogJ2NoZWNrRW1haWxFeGlzdHMnLFxuICAgICAgICAgIGZpZWxkTmFtZTogJ2VtYWlsJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsaWRhdGlvbjogJ3JlY2FwdGNoYVZhbGlkYXRpb24nLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZm9ybVN0YXRlXG4gICAgKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogZm9ybVN0YXRlLmZpZWxkcy51c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtU3RhdGUuZmllbGRzLnBhc3N3b3JkLnZhbHVlLFxuICAgICAgZW1haWw6IGZvcm1TdGF0ZS5maWVsZHMuZW1haWwudmFsdWUsXG4gICAgICBuYW1lOiBmb3JtU3RhdGUuZmllbGRzLm5hbWUudmFsdWVcbiAgICB9O1xuXG4gICAgTWV0ZW9yLmNhbGwoJ2NyZWF0ZVVzZXInLCB1c2VyKTtcbiAgfVxuXG59KTsiXX0=