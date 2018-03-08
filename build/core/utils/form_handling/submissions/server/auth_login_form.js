'use strict';var _meteor=require('meteor/meteor');var _validations=require('/imports/form_handling/validations');_meteor.Meteor.methods({'doAuthLoginForm':function doAuthLoginForm(formState){_meteor.Meteor.call('doAllValidations',[{validation:_validations.doUsernameOrEmailValidation,fieldName:'identification'},{validation:_validations.doRequiredValidation,fieldName:'password'}],formState)}});;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhfbG9naW5fZm9ybS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZm9ybVN0YXRlIiwiY2FsbCIsInZhbGlkYXRpb24iLCJmaWVsZE5hbWUiXSwibWFwcGluZ3MiOiJhQUFBLHFDQUNBLCtEQUtBLGVBQU9BLE9BQVAsQ0FBZSxDQUNiLGtCQUFtQix5QkFBU0MsU0FBVCxDQUFvQixDQUVyQyxlQUFPQyxJQUFQLENBQ0Usa0JBREYsQ0FFRSxDQUNFLENBQ0VDLG1EQURGLENBRUVDLFVBQVcsZ0JBRmIsQ0FERixDQUlLLENBQ0RELDRDQURDLENBRURDLFVBQVcsVUFGVixDQUpMLENBRkYsQ0FXRUgsU0FYRixDQWNELENBakJZLENBQWYsRSIsImZpbGUiOiJhdXRoX2xvZ2luX2Zvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7XG4gIGRvVXNlcm5hbWVPckVtYWlsVmFsaWRhdGlvbixcbiAgZG9SZXF1aXJlZFZhbGlkYXRpb25cbn0gZnJvbSAnL2ltcG9ydHMvZm9ybV9oYW5kbGluZy92YWxpZGF0aW9ucyc7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ2RvQXV0aExvZ2luRm9ybSc6IGZ1bmN0aW9uKGZvcm1TdGF0ZSkge1xuXG4gICAgTWV0ZW9yLmNhbGwoXG4gICAgICAnZG9BbGxWYWxpZGF0aW9ucycsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YWxpZGF0aW9uOiBkb1VzZXJuYW1lT3JFbWFpbFZhbGlkYXRpb24sXG4gICAgICAgICAgZmllbGROYW1lOiAnaWRlbnRpZmljYXRpb24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWxpZGF0aW9uOiBkb1JlcXVpcmVkVmFsaWRhdGlvbixcbiAgICAgICAgICBmaWVsZE5hbWU6ICdwYXNzd29yZCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGZvcm1TdGF0ZVxuICAgICk7XG5cbiAgfVxuXG59KTsiXX0=