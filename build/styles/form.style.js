'use strict';exports.__esModule=true;var _scheme=require('./shared/scheme.style');var _variables=require('./shared/variables.style');var _mixin=require('./shared/mixin.style');var formStyle={'.label-default':{mixin:(0,_mixin.fontMixin)({fontFamily:_variables.font.primary.normal,fontSize:_variables.font.size.tiny}),color:_scheme.formColor.labelDefaultText,marginRight:8},'.input-default':{mixin:(0,_mixin.fontMixin)({fontFamily:_variables.font.primary.normal,fontSize:_variables.font.size.tiny}),border:'1px solid '+_scheme.formColor.inputBoxBorder,boxShadow:'inset 0 1px 2px '+_scheme.formColor.inputBoxBorder,backgroundColor:_scheme.formColor.inputBg,borderRadius:3,padding:9,transition:'.2s',color:_scheme.formColor.inputText,'&.input-large':{mixin:(0,_mixin.fontMixin)({fontFamily:_variables.font.primary.normal,fontSize:_variables.font.size.extraSmall}),padding:14},'&.error':{border:'1px solid '+_scheme.formColor.inputErrorBorder},':focus':{border:'1px solid '+_scheme.formColor.inputFocusBorder}}};var _default=formStyle;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(formStyle,'formStyle','styles/form.style.js');__REACT_HOT_LOADER__.register(_default,'default','styles/form.style.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uc3R5bGUuanMiXSwibmFtZXMiOlsiZm9ybVN0eWxlIiwibWl4aW4iLCJmb250RmFtaWx5IiwicHJpbWFyeSIsIm5vcm1hbCIsImZvbnRTaXplIiwic2l6ZSIsInRpbnkiLCJjb2xvciIsImxhYmVsRGVmYXVsdFRleHQiLCJtYXJnaW5SaWdodCIsImJvcmRlciIsImlucHV0Qm94Qm9yZGVyIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwiaW5wdXRCZyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwiaW5wdXRUZXh0IiwiZXh0cmFTbWFsbCIsImlucHV0RXJyb3JCb3JkZXIiLCJpbnB1dEZvY3VzQm9yZGVyIl0sIm1hcHBpbmdzIjoicUNBQUEsNkNBQ0EsbURBQ0EsMkNBRUEsR0FBTUEsV0FBWSxDQUNoQixpQkFBa0IsQ0FDaEJDLE1BQU8scUJBQVUsQ0FDZkMsV0FBWSxnQkFBS0MsT0FBTCxDQUFhQyxNQURWLENBRWZDLFNBQVUsZ0JBQUtDLElBQUwsQ0FBVUMsSUFGTCxDQUFWLENBRFMsQ0FLaEJDLE1BQU8sa0JBQVVDLGdCQUxELENBTWhCQyxZQUFhLENBTkcsQ0FERixDQVNoQixpQkFBa0IsQ0FDaEJULE1BQU8scUJBQVUsQ0FDZkMsV0FBWSxnQkFBS0MsT0FBTCxDQUFhQyxNQURWLENBRWZDLFNBQVUsZ0JBQUtDLElBQUwsQ0FBVUMsSUFGTCxDQUFWLENBRFMsQ0FLaEJJLG9CQUFxQixrQkFBVUMsY0FMZixDQU1oQkMsNkJBQThCLGtCQUFVRCxjQU54QixDQU9oQkUsZ0JBQWlCLGtCQUFVQyxPQVBYLENBUWhCQyxhQUFjLENBUkUsQ0FTaEJDLFFBQVMsQ0FUTyxDQVVoQkMsV0FBWSxLQVZJLENBV2hCVixNQUFPLGtCQUFVVyxTQVhELENBWWhCLGdCQUFpQixDQUNmbEIsTUFBTyxxQkFBVSxDQUNmQyxXQUFZLGdCQUFLQyxPQUFMLENBQWFDLE1BRFYsQ0FFZkMsU0FBVSxnQkFBS0MsSUFBTCxDQUFVYyxVQUZMLENBQVYsQ0FEUSxDQUtmSCxRQUFTLEVBTE0sQ0FaRCxDQW1CaEIsVUFBVyxDQUNUTixvQkFBcUIsa0JBQVVVLGdCQUR0QixDQW5CSyxDQXNCaEIsU0FBVSxDQUNSVixvQkFBcUIsa0JBQVVXLGdCQUR2QixDQXRCTSxDQVRGLENBQWxCLEMsYUFzQ2V0QixTLG1JQXRDVEEsUyIsImZpbGUiOiJmb3JtLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL1Byb2plY3RzL2NvZGVmb3JhcHBzL3Rvb2xzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybUNvbG9yIH0gZnJvbSAnLi9zaGFyZWQvc2NoZW1lLnN0eWxlJztcbmltcG9ydCB7IGZvbnQgfSBmcm9tICcuL3NoYXJlZC92YXJpYWJsZXMuc3R5bGUnO1xuaW1wb3J0IHsgZm9udE1peGluIH0gZnJvbSAnLi9zaGFyZWQvbWl4aW4uc3R5bGUnO1xuXG5jb25zdCBmb3JtU3R5bGUgPSB7XG4gICcubGFiZWwtZGVmYXVsdCc6IHtcbiAgICBtaXhpbjogZm9udE1peGluKHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnQucHJpbWFyeS5ub3JtYWwsXG4gICAgICBmb250U2l6ZTogZm9udC5zaXplLnRpbnlcbiAgICB9KSxcbiAgICBjb2xvcjogZm9ybUNvbG9yLmxhYmVsRGVmYXVsdFRleHQsXG4gICAgbWFyZ2luUmlnaHQ6IDhcbiAgfSxcbiAgJy5pbnB1dC1kZWZhdWx0Jzoge1xuICAgIG1peGluOiBmb250TWl4aW4oe1xuICAgICAgZm9udEZhbWlseTogZm9udC5wcmltYXJ5Lm5vcm1hbCxcbiAgICAgIGZvbnRTaXplOiBmb250LnNpemUudGlueVxuICAgIH0pLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2Zvcm1Db2xvci5pbnB1dEJveEJvcmRlcn1gLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMXB4IDJweCAke2Zvcm1Db2xvci5pbnB1dEJveEJvcmRlcn1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogZm9ybUNvbG9yLmlucHV0QmcsXG4gICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgIHBhZGRpbmc6IDksXG4gICAgdHJhbnNpdGlvbjogJy4ycycsXG4gICAgY29sb3I6IGZvcm1Db2xvci5pbnB1dFRleHQsXG4gICAgJyYuaW5wdXQtbGFyZ2UnOiB7XG4gICAgICBtaXhpbjogZm9udE1peGluKHtcbiAgICAgICAgZm9udEZhbWlseTogZm9udC5wcmltYXJ5Lm5vcm1hbCxcbiAgICAgICAgZm9udFNpemU6IGZvbnQuc2l6ZS5leHRyYVNtYWxsXG4gICAgICB9KSxcbiAgICAgIHBhZGRpbmc6IDE0XG4gICAgfSxcbiAgICAnJi5lcnJvcic6IHtcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2Zvcm1Db2xvci5pbnB1dEVycm9yQm9yZGVyfWBcbiAgICB9LFxuICAgICc6Zm9jdXMnOiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmb3JtQ29sb3IuaW5wdXRGb2N1c0JvcmRlcn1gXG4gICAgfVxuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1TdHlsZTtcbiJdfQ==