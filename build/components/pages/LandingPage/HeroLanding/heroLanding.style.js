'use strict';exports.__esModule=true;var _scheme=require('../../../../styles/shared/scheme.style');var _variables=require('../../../../styles/shared/variables.style');var _mixin=require('../../../../styles/shared/mixin.style');var heroLandingStyle=function heroLandingStyle(){return{'.hero-container':{mixin:(0,_mixin.flexDeadCenter)(),background:_scheme.landingColor.bg,padding:'0 15px',textAlign:'center',position:'relative',overflow:'hidden',height:'calc(100vh + 72px)'},'.hero-video-container':{mixin:(0,_mixin.positionAbsoluteCenter)(),background:'no-repeat center center / cover'},'.hero-video':{position:'absolute',minWidth:'100%',minHeight:'100%',width:'auto',height:'auto',top:'50%',left:'50%',transform:'translate(-50%, -50%)'},'.hero-arrow-container':{position:'absolute',textAlign:'center',cursor:'pointer',bottom:50,left:'50%',animation:'bounce 2s infinite both','.icon':{marginLeft:-15,position:'relative',fontSize:'3rem',color:_scheme.landingColor.icon}},'.hero-video-overlay':{mixin:(0,_mixin.positionAbsoluteCenter)(),width:'100%',height:'100%',pointerEvents:'none',background:_scheme.landingColor.overlay},'.hero-slogan':{position:'relative',zIndex:10},'.hero-slogan-text':{mixin:(0,_mixin.fontResponsive)({fontFamily:_variables.font.primary.extraBold,maxSize:55,minSize:40}),color:_scheme.landingColor.textDefault,margin:0,textShadow:'5px 5px 20px '+_scheme.landingColor.textShadow,letterSpacing:'1.5px'},'.hero-second-slogan':{mixin:(0,_mixin.fontResponsive)({fontFamily:_variables.font.primary.thin,maxSize:28,minSize:20}),color:_scheme.landingColor.textDefault,textShadow:'5px 5px 20px '+_scheme.landingColor.textShadow},'.hero-action-container':{paddingTop:42,minHeight:122}}};var _default=heroLandingStyle;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(heroLandingStyle,'heroLandingStyle','components/pages/LandingPage/HeroLanding/heroLanding.style.js');__REACT_HOT_LOADER__.register(_default,'default','components/pages/LandingPage/HeroLanding/heroLanding.style.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9MYW5kaW5nLnN0eWxlLmpzIl0sIm5hbWVzIjpbImhlcm9MYW5kaW5nU3R5bGUiLCJtaXhpbiIsImJhY2tncm91bmQiLCJiZyIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJjdXJzb3IiLCJib3R0b20iLCJhbmltYXRpb24iLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJjb2xvciIsImljb24iLCJwb2ludGVyRXZlbnRzIiwib3ZlcmxheSIsInpJbmRleCIsImZvbnRGYW1pbHkiLCJwcmltYXJ5IiwiZXh0cmFCb2xkIiwibWF4U2l6ZSIsIm1pblNpemUiLCJ0ZXh0RGVmYXVsdCIsIm1hcmdpbiIsInRleHRTaGFkb3ciLCJsZXR0ZXJTcGFjaW5nIiwidGhpbiIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiJxQ0FBQSw4REFDQSxvRUFDQSw0REFNQSxHQUFNQSxrQkFBbUIsUUFBbkJBLGlCQUFtQixFQUFNLENBQzdCLE1BQU8sQ0FDTCxrQkFBbUIsQ0FDakJDLE1BQU8sMkJBRFUsQ0FFakJDLFdBQVkscUJBQWFDLEVBRlIsQ0FHakJDLFFBQVMsUUFIUSxDQUlqQkMsVUFBVyxRQUpNLENBS2pCQyxTQUFVLFVBTE8sQ0FNakJDLFNBQVUsUUFOTyxDQU9qQkMsT0FBUSxvQkFQUyxDQURkLENBVUwsd0JBQXlCLENBQ3ZCUCxNQUFPLG1DQURnQixDQUV2QkMsV0FBWSxpQ0FGVyxDQVZwQixDQWNMLGNBQWUsQ0FDYkksU0FBVSxVQURHLENBRWJHLFNBQVUsTUFGRyxDQUdiQyxVQUFXLE1BSEUsQ0FJYkMsTUFBTyxNQUpNLENBS2JILE9BQVEsTUFMSyxDQU1iSSxJQUFLLEtBTlEsQ0FPYkMsS0FBTSxLQVBPLENBUWJDLFVBQVcsdUJBUkUsQ0FkVixDQXdCTCx3QkFBeUIsQ0FDdkJSLFNBQVUsVUFEYSxDQUV2QkQsVUFBVyxRQUZZLENBR3ZCVSxPQUFRLFNBSGUsQ0FJdkJDLE9BQVEsRUFKZSxDQUt2QkgsS0FBTSxLQUxpQixDQU12QkksVUFBVyx5QkFOWSxDQU92QixRQUFTLENBQ1BDLFdBQVksQ0FBQyxFQUROLENBRVBaLFNBQVUsVUFGSCxDQUdQYSxTQUFVLE1BSEgsQ0FJUEMsTUFBTyxxQkFBYUMsSUFKYixDQVBjLENBeEJwQixDQXNDTCxzQkFBdUIsQ0FDckJwQixNQUFPLG1DQURjLENBRXJCVSxNQUFPLE1BRmMsQ0FHckJILE9BQVEsTUFIYSxDQUlyQmMsY0FBZSxNQUpNLENBS3JCcEIsV0FBWSxxQkFBYXFCLE9BTEosQ0F0Q2xCLENBNkNMLGVBQWdCLENBQ2RqQixTQUFVLFVBREksQ0FFZGtCLE9BQVEsRUFGTSxDQTdDWCxDQWlETCxvQkFBcUIsQ0FDbkJ2QixNQUFPLDBCQUFlLENBQ3BCd0IsV0FBWSxnQkFBS0MsT0FBTCxDQUFhQyxTQURMLENBRXBCQyxRQUFTLEVBRlcsQ0FHcEJDLFFBQVMsRUFIVyxDQUFmLENBRFksQ0FNbkJULE1BQU8scUJBQWFVLFdBTkQsQ0FPbkJDLE9BQVEsQ0FQVyxDQVFuQkMsMkJBQTRCLHFCQUFhQSxVQVJ0QixDQVNuQkMsY0FBZSxPQVRJLENBakRoQixDQTRETCxzQkFBdUIsQ0FDckJoQyxNQUFPLDBCQUFlLENBQ3BCd0IsV0FBWSxnQkFBS0MsT0FBTCxDQUFhUSxJQURMLENBRXBCTixRQUFTLEVBRlcsQ0FHcEJDLFFBQVMsRUFIVyxDQUFmLENBRGMsQ0FNckJULE1BQU8scUJBQWFVLFdBTkMsQ0FPckJFLDJCQUE0QixxQkFBYUEsVUFQcEIsQ0E1RGxCLENBcUVMLHlCQUEwQixDQUN4QkcsV0FBWSxFQURZLENBRXhCekIsVUFBVyxHQUZhLENBckVyQixDQTBFUixDQTNFRCxDLGFBNkVlVixnQixtSUE3RVRBLGdCIiwiZmlsZSI6Imhlcm9MYW5kaW5nLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL0lkZWFQcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhbmRpbmdDb2xvciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvc2NoZW1lLnN0eWxlJztcbmltcG9ydCB7IGZvbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3ZhcmlhYmxlcy5zdHlsZSc7XG5pbXBvcnQge1xuICBmbGV4RGVhZENlbnRlcixcbiAgcG9zaXRpb25BYnNvbHV0ZUNlbnRlcixcbiAgZm9udFJlc3BvbnNpdmVcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9taXhpbi5zdHlsZSc7XG5cbmNvbnN0IGhlcm9MYW5kaW5nU3R5bGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5oZXJvLWNvbnRhaW5lcic6IHtcbiAgICAgIG1peGluOiBmbGV4RGVhZENlbnRlcigpLFxuICAgICAgYmFja2dyb3VuZDogbGFuZGluZ0NvbG9yLmJnLFxuICAgICAgcGFkZGluZzogJzAgMTVweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoICsgNzJweCknXG4gICAgfSxcbiAgICAnLmhlcm8tdmlkZW8tY29udGFpbmVyJzoge1xuICAgICAgbWl4aW46IHBvc2l0aW9uQWJzb2x1dGVDZW50ZXIoKSxcbiAgICAgIGJhY2tncm91bmQ6ICduby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyJ1xuICAgIH0sXG4gICAgJy5oZXJvLXZpZGVvJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgfSxcbiAgICAnLmhlcm8tYXJyb3ctY29udGFpbmVyJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBib3R0b206IDUwLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICBhbmltYXRpb246ICdib3VuY2UgMnMgaW5maW5pdGUgYm90aCcsXG4gICAgICAnLmljb24nOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IC0xNSxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGZvbnRTaXplOiAnM3JlbScsXG4gICAgICAgIGNvbG9yOiBsYW5kaW5nQ29sb3IuaWNvblxuICAgICAgfVxuICAgIH0sXG4gICAgJy5oZXJvLXZpZGVvLW92ZXJsYXknOiB7XG4gICAgICBtaXhpbjogcG9zaXRpb25BYnNvbHV0ZUNlbnRlcigpLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZDogbGFuZGluZ0NvbG9yLm92ZXJsYXlcbiAgICB9LFxuICAgICcuaGVyby1zbG9nYW4nOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMTBcbiAgICB9LFxuICAgICcuaGVyby1zbG9nYW4tdGV4dCc6IHtcbiAgICAgIG1peGluOiBmb250UmVzcG9uc2l2ZSh7XG4gICAgICAgIGZvbnRGYW1pbHk6IGZvbnQucHJpbWFyeS5leHRyYUJvbGQsXG4gICAgICAgIG1heFNpemU6IDU1LFxuICAgICAgICBtaW5TaXplOiA0MFxuICAgICAgfSksXG4gICAgICBjb2xvcjogbGFuZGluZ0NvbG9yLnRleHREZWZhdWx0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdGV4dFNoYWRvdzogYDVweCA1cHggMjBweCAke2xhbmRpbmdDb2xvci50ZXh0U2hhZG93fWAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMS41cHgnXG4gICAgfSxcbiAgICAnLmhlcm8tc2Vjb25kLXNsb2dhbic6IHtcbiAgICAgIG1peGluOiBmb250UmVzcG9uc2l2ZSh7XG4gICAgICAgIGZvbnRGYW1pbHk6IGZvbnQucHJpbWFyeS50aGluLFxuICAgICAgICBtYXhTaXplOiAyOCxcbiAgICAgICAgbWluU2l6ZTogMjBcbiAgICAgIH0pLFxuICAgICAgY29sb3I6IGxhbmRpbmdDb2xvci50ZXh0RGVmYXVsdCxcbiAgICAgIHRleHRTaGFkb3c6IGA1cHggNXB4IDIwcHggJHtsYW5kaW5nQ29sb3IudGV4dFNoYWRvd31gXG4gICAgfSxcbiAgICAnLmhlcm8tYWN0aW9uLWNvbnRhaW5lcic6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDQyLFxuICAgICAgbWluSGVpZ2h0OiAxMjJcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZXJvTGFuZGluZ1N0eWxlO1xuIl19