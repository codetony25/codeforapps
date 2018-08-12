'use strict';exports.__esModule=true;var _defineProperty2=require('babel-runtime/helpers/defineProperty');var _defineProperty3=_interopRequireDefault(_defineProperty2);var _scheme=require('../../../styles/shared/scheme.style');var _variables=require('../../../styles/shared/variables.style');var _mixin=require('../../../styles/shared/mixin.style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var headerLayoutStyle=function headerLayoutStyle(){var _headerLinks,_headerContainer;return{'.header-container':(_headerContainer={display:'flex',justifyContent:'space-between',position:'fixed',alignItems:'center',width:'100%',minHeight:55,zIndex:100,background:_scheme.headerColor.bgTransparent,transform:'translateY(50%)',boxShadow:'none',top:0,padding:'0 15px',transition:'.4s ease-in-out','&.is-scrolled':{background:_scheme.headerColor.bg,transform:'translateY(0%)',boxShadow:'0 2px 2px rgba(0, 0, 0, .4)'}},(0,_defineProperty3.default)(_headerContainer,_variables.media.large,{padding:'0 45px'}),(0,_defineProperty3.default)(_headerContainer,'ul li i',{transition:'.4s',fontSize:20,padding:8,color:_scheme.headerColor.icon,position:'relative',top:3,':hover':{color:_scheme.headerColor.iconHover}}),(0,_defineProperty3.default)(_headerContainer,'.header-navicon',(0,_defineProperty3.default)({},_variables.media.large,{display:'none'})),(0,_defineProperty3.default)(_headerContainer,'.header-navigation',{'ul':{display:'flex',alignItems:'center'},'.header-links':(_headerLinks={display:'none'},(0,_defineProperty3.default)(_headerLinks,_variables.media.large,{display:'flex',position:'relative',top:4}),(0,_defineProperty3.default)(_headerLinks,'li a',{mixin:(0,_mixin.fontMixin)({fontFamily:_variables.font.primary.bold,fontSize:_variables.font.size.extraSmall}),transition:'.4s',marginRight:45,color:_scheme.headerColor.link,':hover':{color:_scheme.headerColor.linkHover}}),_headerLinks)}),(0,_defineProperty3.default)(_headerContainer,'.header-logo',{position:'relative','a':{display:'flex',alignItems:'flex-end',justifyContent:'space-between',color:_scheme.headerColor.textLogo,width:120,'img':{height:24},'span':{mixin:(0,_mixin.fontMixin)({fontFamily:_variables.font.primary.extraBold,fontSize:_variables.font.size.large}),position:'relative',top:5}}}),(0,_defineProperty3.default)(_headerContainer,'.header-settings ul',{display:'flex',alignItems:'center'}),(0,_defineProperty3.default)(_headerContainer,'.header-profile',{display:'flex',alignItems:'center','.profile-image':{'a':{transition:'.4s',width:40,height:40,borderRadius:'50%',display:'inline-block',background:_scheme.headerColor.borderImage,':hover':{background:_scheme.headerColor.borderImageHover}}},'img':{width:33,position:'relative',top:4,left:4,borderRadius:'50%',verticalAlign:'middle',marginRight:10}}),_headerContainer)}};var _default=headerLayoutStyle;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(headerLayoutStyle,'headerLayoutStyle','components/layouts/HeaderLayout/headerLayout.style.js');__REACT_HOT_LOADER__.register(_default,'default','components/layouts/HeaderLayout/headerLayout.style.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlckxheW91dC5zdHlsZS5qcyJdLCJuYW1lcyI6WyJoZWFkZXJMYXlvdXRTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsIndpZHRoIiwibWluSGVpZ2h0IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJnVHJhbnNwYXJlbnQiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJ0b3AiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsImJnIiwibGFyZ2UiLCJmb250U2l6ZSIsImNvbG9yIiwiaWNvbiIsImljb25Ib3ZlciIsIm1peGluIiwiZm9udEZhbWlseSIsInByaW1hcnkiLCJib2xkIiwic2l6ZSIsImV4dHJhU21hbGwiLCJtYXJnaW5SaWdodCIsImxpbmsiLCJsaW5rSG92ZXIiLCJ0ZXh0TG9nbyIsImhlaWdodCIsImV4dHJhQm9sZCIsImJvcmRlclJhZGl1cyIsImJvcmRlckltYWdlIiwiYm9yZGVySW1hZ2VIb3ZlciIsImxlZnQiLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoid0tBQUEsMkRBQ0EsaUVBQ0EseUQsa0ZBRUEsR0FBTUEsbUJBQW9CLFFBQXBCQSxrQkFBb0IsRUFBTSxtQ0FDOUIsTUFBTyxDQUNMLHVDQUNFQyxRQUFTLE1BRFgsQ0FFRUMsZUFBZ0IsZUFGbEIsQ0FHRUMsU0FBVSxPQUhaLENBSUVDLFdBQVksUUFKZCxDQUtFQyxNQUFPLE1BTFQsQ0FNRUMsVUFBVyxFQU5iLENBT0VDLE9BQVEsR0FQVixDQVFFQyxXQUFZLG9CQUFZQyxhQVIxQixDQVNFQyxVQUFXLGlCQVRiLENBVUVDLFVBQVcsTUFWYixDQVdFQyxJQUFLLENBWFAsQ0FZRUMsUUFBUyxRQVpYLENBYUVDLFdBQVksaUJBYmQsQ0FjRSxnQkFBaUIsQ0FDZk4sV0FBWSxvQkFBWU8sRUFEVCxDQUVmTCxVQUFXLGdCQUZJLENBR2ZDLFVBQVcsNkJBSEksQ0FkbkIsZ0RBbUJHLGlCQUFNSyxLQW5CVCxDQW1CaUIsQ0FDYkgsUUFBUyxRQURJLENBbkJqQixnREFzQkUsU0F0QkYsQ0FzQmEsQ0FDVEMsV0FBWSxLQURILENBRVRHLFNBQVUsRUFGRCxDQUdUSixRQUFTLENBSEEsQ0FJVEssTUFBTyxvQkFBWUMsSUFKVixDQUtUaEIsU0FBVSxVQUxELENBTVRTLElBQUssQ0FOSSxDQU9ULFNBQVUsQ0FDUk0sTUFBTyxvQkFBWUUsU0FEWCxDQVBELENBdEJiLGdEQWlDRSxpQkFqQ0YsaUNBa0NLLGlCQUFNSixLQWxDWCxDQWtDbUIsQ0FDYmYsUUFBUyxNQURJLENBbENuQixpREFzQ0Usb0JBdENGLENBc0N3QixDQUNwQixLQUFNLENBQ0pBLFFBQVMsTUFETCxDQUVKRyxXQUFZLFFBRlIsQ0FEYyxDQUtwQiwrQkFDRUgsUUFBUyxNQURYLDRDQUVHLGlCQUFNZSxLQUZULENBRWlCLENBQ2JmLFFBQVMsTUFESSxDQUViRSxTQUFVLFVBRkcsQ0FHYlMsSUFBSyxDQUhRLENBRmpCLDRDQU9FLE1BUEYsQ0FPVSxDQUNOUyxNQUFPLHFCQUFVLENBQ2ZDLFdBQVksZ0JBQUtDLE9BQUwsQ0FBYUMsSUFEVixDQUVmUCxTQUFVLGdCQUFLUSxJQUFMLENBQVVDLFVBRkwsQ0FBVixDQURELENBS05aLFdBQVksS0FMTixDQU1OYSxZQUFhLEVBTlAsQ0FPTlQsTUFBTyxvQkFBWVUsSUFQYixDQVFOLFNBQVUsQ0FDUlYsTUFBTyxvQkFBWVcsU0FEWCxDQVJKLENBUFYsZUFMb0IsQ0F0Q3hCLGdEQWdFRSxjQWhFRixDQWdFa0IsQ0FDZDFCLFNBQVUsVUFESSxDQUVkLElBQUssQ0FDSEYsUUFBUyxNQUROLENBRUhHLFdBQVksVUFGVCxDQUdIRixlQUFnQixlQUhiLENBSUhnQixNQUFPLG9CQUFZWSxRQUpoQixDQUtIekIsTUFBTyxHQUxKLENBTUgsTUFBTyxDQUNMMEIsT0FBUSxFQURILENBTkosQ0FTSCxPQUFRLENBQ05WLE1BQU8scUJBQVUsQ0FDZkMsV0FBWSxnQkFBS0MsT0FBTCxDQUFhUyxTQURWLENBRWZmLFNBQVUsZ0JBQUtRLElBQUwsQ0FBVVQsS0FGTCxDQUFWLENBREQsQ0FLTmIsU0FBVSxVQUxKLENBTU5TLElBQUssQ0FOQyxDQVRMLENBRlMsQ0FoRWxCLGdEQXFGRSxxQkFyRkYsQ0FxRnlCLENBQ3JCWCxRQUFTLE1BRFksQ0FFckJHLFdBQVksUUFGUyxDQXJGekIsZ0RBeUZFLGlCQXpGRixDQXlGcUIsQ0FDakJILFFBQVMsTUFEUSxDQUVqQkcsV0FBWSxRQUZLLENBR2pCLGlCQUFrQixDQUNoQixJQUFLLENBQ0hVLFdBQVksS0FEVCxDQUVIVCxNQUFPLEVBRkosQ0FHSDBCLE9BQVEsRUFITCxDQUlIRSxhQUFjLEtBSlgsQ0FLSGhDLFFBQVMsY0FMTixDQU1ITyxXQUFZLG9CQUFZMEIsV0FOckIsQ0FRSCxTQUFVLENBQ1IxQixXQUFZLG9CQUFZMkIsZ0JBRGhCLENBUlAsQ0FEVyxDQUhELENBaUJqQixNQUFPLENBQ0w5QixNQUFPLEVBREYsQ0FFTEYsU0FBVSxVQUZMLENBR0xTLElBQUssQ0FIQSxDQUlMd0IsS0FBTSxDQUpELENBS0xILGFBQWMsS0FMVCxDQU1MSSxjQUFlLFFBTlYsQ0FPTFYsWUFBYSxFQVBSLENBakJVLENBekZyQixtQkFESyxDQXVIUixDQXhIRCxDLGFBMEhlM0IsaUIsbUlBMUhUQSxpQiIsImZpbGUiOiJoZWFkZXJMYXlvdXQuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vRG9jdW1lbnRzL0dpdEh1Yi9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlYWRlckNvbG9yIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC9zY2hlbWUuc3R5bGUnO1xuaW1wb3J0IHsgZm9udCwgbWVkaWEgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL3ZhcmlhYmxlcy5zdHlsZSc7XG5pbXBvcnQgeyBmb250TWl4aW4gfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL21peGluLnN0eWxlJztcblxuY29uc3QgaGVhZGVyTGF5b3V0U3R5bGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJy5oZWFkZXItY29udGFpbmVyJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluSGVpZ2h0OiA1NSxcbiAgICAgIHpJbmRleDogMTAwLFxuICAgICAgYmFja2dyb3VuZDogaGVhZGVyQ29sb3IuYmdUcmFuc3BhcmVudCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNTAlKScsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxuICAgICAgdHJhbnNpdGlvbjogJy40cyBlYXNlLWluLW91dCcsXG4gICAgICAnJi5pcy1zY3JvbGxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogaGVhZGVyQ29sb3IuYmcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgLjQpJ1xuICAgICAgfSxcbiAgICAgIFttZWRpYS5sYXJnZV06IHtcbiAgICAgICAgcGFkZGluZzogJzAgNDVweCdcbiAgICAgIH0sXG4gICAgICAndWwgbGkgaSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJy40cycsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgY29sb3I6IGhlYWRlckNvbG9yLmljb24sXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0b3A6IDMsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGhlYWRlckNvbG9yLmljb25Ib3ZlclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJy5oZWFkZXItbmF2aWNvbic6IHtcbiAgICAgICAgW21lZGlhLmxhcmdlXToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJy5oZWFkZXItbmF2aWdhdGlvbic6IHtcbiAgICAgICAgJ3VsJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICAnLmhlYWRlci1saW5rcyc6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgW21lZGlhLmxhcmdlXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB0b3A6IDRcbiAgICAgICAgICB9LFxuICAgICAgICAgICdsaSBhJzoge1xuICAgICAgICAgICAgbWl4aW46IGZvbnRNaXhpbih7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZvbnQucHJpbWFyeS5ib2xkLFxuICAgICAgICAgICAgICBmb250U2l6ZTogZm9udC5zaXplLmV4dHJhU21hbGxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJy40cycsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogNDUsXG4gICAgICAgICAgICBjb2xvcjogaGVhZGVyQ29sb3IubGluayxcbiAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBoZWFkZXJDb2xvci5saW5rSG92ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnLmhlYWRlci1sb2dvJzoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgJ2EnOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBjb2xvcjogaGVhZGVyQ29sb3IudGV4dExvZ28sXG4gICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAnaW1nJzoge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3NwYW4nOiB7XG4gICAgICAgICAgICBtaXhpbjogZm9udE1peGluKHtcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogZm9udC5wcmltYXJ5LmV4dHJhQm9sZCxcbiAgICAgICAgICAgICAgZm9udFNpemU6IGZvbnQuc2l6ZS5sYXJnZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIHRvcDogNVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcuaGVhZGVyLXNldHRpbmdzIHVsJzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICB9LFxuICAgICAgJy5oZWFkZXItcHJvZmlsZSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgJy5wcm9maWxlLWltYWdlJzoge1xuICAgICAgICAgICdhJzoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJy40cycsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogaGVhZGVyQ29sb3IuYm9yZGVySW1hZ2UsXG5cbiAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGhlYWRlckNvbG9yLmJvcmRlckltYWdlSG92ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdpbWcnOiB7XG4gICAgICAgICAgd2lkdGg6IDMzLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogNCxcbiAgICAgICAgICBsZWZ0OiA0LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJMYXlvdXRTdHlsZTtcbiJdfQ==