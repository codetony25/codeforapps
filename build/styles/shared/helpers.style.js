'use strict';exports.__esModule=true;var _tinycolor=require('tinycolor2');var _tinycolor2=_interopRequireDefault(_tinycolor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={darken:function darken(color,percentage){return(0,_tinycolor2.default)(color).darken(percentage).toHexString()},lighten:function lighten(color,percentage){return(0,_tinycolor2.default)(color).lighten(percentage).toHexString()},rgb:function rgb(color){return(0,_tinycolor2.default)(color).toRgbString()},rgba:function rgba(color,percentage){return(0,_tinycolor2.default)(color).setAlpha(percentage).toRgbString()},hsl:function hsl(color){return(0,_tinycolor2.default)(color).toHslString()},hsla:function hsla(color,percentage){return(0,_tinycolor2.default)(color).setAlpha(percentage).toHslString()},desaturate:function desaturate(color,percentage){return(0,_tinycolor2.default)(color).desaturate(percentage).toString()},saturate:function saturate(color,percentage){return(0,_tinycolor2.default)(color).saturate(percentage).toString()},spin:function spin(color,percentage){return(0,_tinycolor2.default)(color).spin(percentage).toString()},complement:function complement(color){return(0,_tinycolor2.default)(color).complement().toHexString()},randomizeColor:_tinycolor2.default.random(),getAnalogous:function getAnalogous(color){return color.analogous()},getMonochromatic:function getMonochromatic(color){return color.monochromatic()},getSplitComplement:function getSplitComplement(color){return color.splitcomplement()},getTriad:function getTriad(color){return color.triad()},getTetrad:function getTetrad(color){return color.tetrad()}};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(_default,'default','styles/shared/helpers.style.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuc3R5bGUuanMiXSwibmFtZXMiOlsiZGFya2VuIiwiY29sb3IiLCJwZXJjZW50YWdlIiwidG9IZXhTdHJpbmciLCJsaWdodGVuIiwicmdiIiwidG9SZ2JTdHJpbmciLCJyZ2JhIiwic2V0QWxwaGEiLCJoc2wiLCJ0b0hzbFN0cmluZyIsImhzbGEiLCJkZXNhdHVyYXRlIiwidG9TdHJpbmciLCJzYXR1cmF0ZSIsInNwaW4iLCJjb21wbGVtZW50IiwicmFuZG9taXplQ29sb3IiLCJyYW5kb20iLCJnZXRBbmFsb2dvdXMiLCJhbmFsb2dvdXMiLCJnZXRNb25vY2hyb21hdGljIiwibW9ub2Nocm9tYXRpYyIsImdldFNwbGl0Q29tcGxlbWVudCIsInNwbGl0Y29tcGxlbWVudCIsImdldFRyaWFkIiwidHJpYWQiLCJnZXRUZXRyYWQiLCJ0ZXRyYWQiXSwibWFwcGluZ3MiOiJxQ0FBQSxxQyxrSkFFZSxDQUNiQSxPQUFRLGdCQUFDQyxLQUFELENBQVFDLFVBQVIsUUFDTix3QkFBVUQsS0FBVixFQUFpQkQsTUFBakIsQ0FBd0JFLFVBQXhCLEVBQW9DQyxXQUFwQyxFQURNLENBREssQ0FHYkMsUUFBUyxpQkFBQ0gsS0FBRCxDQUFRQyxVQUFSLFFBQ1Asd0JBQVVELEtBQVYsRUFBaUJHLE9BQWpCLENBQXlCRixVQUF6QixFQUFxQ0MsV0FBckMsRUFETyxDQUhJLENBS2JFLElBQUssYUFBQ0osS0FBRCxRQUNILHdCQUFVQSxLQUFWLEVBQWlCSyxXQUFqQixFQURHLENBTFEsQ0FPYkMsS0FBTSxjQUFDTixLQUFELENBQVFDLFVBQVIsUUFDSix3QkFBVUQsS0FBVixFQUFpQk8sUUFBakIsQ0FBMEJOLFVBQTFCLEVBQXNDSSxXQUF0QyxFQURJLENBUE8sQ0FTYkcsSUFBSyxhQUFDUixLQUFELFFBQ0gsd0JBQVVBLEtBQVYsRUFBaUJTLFdBQWpCLEVBREcsQ0FUUSxDQVdiQyxLQUFNLGNBQUNWLEtBQUQsQ0FBUUMsVUFBUixRQUNKLHdCQUFVRCxLQUFWLEVBQWlCTyxRQUFqQixDQUEwQk4sVUFBMUIsRUFBc0NRLFdBQXRDLEVBREksQ0FYTyxDQWFiRSxXQUFZLG9CQUFDWCxLQUFELENBQVFDLFVBQVIsUUFDVix3QkFBVUQsS0FBVixFQUFpQlcsVUFBakIsQ0FBNEJWLFVBQTVCLEVBQXdDVyxRQUF4QyxFQURVLENBYkMsQ0FlYkMsU0FBVSxrQkFBQ2IsS0FBRCxDQUFRQyxVQUFSLFFBQ1Isd0JBQVVELEtBQVYsRUFBaUJhLFFBQWpCLENBQTBCWixVQUExQixFQUFzQ1csUUFBdEMsRUFEUSxDQWZHLENBaUJiRSxLQUFNLGNBQUNkLEtBQUQsQ0FBUUMsVUFBUixRQUNKLHdCQUFVRCxLQUFWLEVBQWlCYyxJQUFqQixDQUFzQmIsVUFBdEIsRUFBa0NXLFFBQWxDLEVBREksQ0FqQk8sQ0FtQmJHLFdBQVksb0JBQUNmLEtBQUQsUUFDVix3QkFBVUEsS0FBVixFQUFpQmUsVUFBakIsR0FBOEJiLFdBQTlCLEVBRFUsQ0FuQkMsQ0FxQmJjLGVBQWdCLG9CQUFVQyxNQUFWLEVBckJILENBc0JiQyxhQUFjLHNCQUFDbEIsS0FBRCxRQUFXQSxPQUFNbUIsU0FBTixFQUFYLENBdEJELENBdUJiQyxpQkFBa0IsMEJBQUNwQixLQUFELFFBQVdBLE9BQU1xQixhQUFOLEVBQVgsQ0F2QkwsQ0F3QmJDLG1CQUFvQiw0QkFBQ3RCLEtBQUQsUUFBV0EsT0FBTXVCLGVBQU4sRUFBWCxDQXhCUCxDQXlCYkMsU0FBVSxrQkFBQ3hCLEtBQUQsUUFBV0EsT0FBTXlCLEtBQU4sRUFBWCxDQXpCRyxDQTBCYkMsVUFBVyxtQkFBQzFCLEtBQUQsUUFBV0EsT0FBTTJCLE1BQU4sRUFBWCxDQTFCRSxDIiwiZmlsZSI6ImhlbHBlcnMuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vRG9jdW1lbnRzL0dpdEh1Yi9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGFya2VuOiAoY29sb3IsIHBlcmNlbnRhZ2UpID0+XG4gICAgdGlueWNvbG9yKGNvbG9yKS5kYXJrZW4ocGVyY2VudGFnZSkudG9IZXhTdHJpbmcoKSxcbiAgbGlnaHRlbjogKGNvbG9yLCBwZXJjZW50YWdlKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikubGlnaHRlbihwZXJjZW50YWdlKS50b0hleFN0cmluZygpLFxuICByZ2I6IChjb2xvcikgPT5cbiAgICB0aW55Y29sb3IoY29sb3IpLnRvUmdiU3RyaW5nKCksXG4gIHJnYmE6IChjb2xvciwgcGVyY2VudGFnZSkgPT5cbiAgICB0aW55Y29sb3IoY29sb3IpLnNldEFscGhhKHBlcmNlbnRhZ2UpLnRvUmdiU3RyaW5nKCksXG4gIGhzbDogKGNvbG9yKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikudG9Ic2xTdHJpbmcoKSxcbiAgaHNsYTogKGNvbG9yLCBwZXJjZW50YWdlKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikuc2V0QWxwaGEocGVyY2VudGFnZSkudG9Ic2xTdHJpbmcoKSxcbiAgZGVzYXR1cmF0ZTogKGNvbG9yLCBwZXJjZW50YWdlKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikuZGVzYXR1cmF0ZShwZXJjZW50YWdlKS50b1N0cmluZygpLFxuICBzYXR1cmF0ZTogKGNvbG9yLCBwZXJjZW50YWdlKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikuc2F0dXJhdGUocGVyY2VudGFnZSkudG9TdHJpbmcoKSxcbiAgc3BpbjogKGNvbG9yLCBwZXJjZW50YWdlKSA9PlxuICAgIHRpbnljb2xvcihjb2xvcikuc3BpbihwZXJjZW50YWdlKS50b1N0cmluZygpLFxuICBjb21wbGVtZW50OiAoY29sb3IpID0+XG4gICAgdGlueWNvbG9yKGNvbG9yKS5jb21wbGVtZW50KCkudG9IZXhTdHJpbmcoKSxcbiAgcmFuZG9taXplQ29sb3I6IHRpbnljb2xvci5yYW5kb20oKSxcbiAgZ2V0QW5hbG9nb3VzOiAoY29sb3IpID0+IGNvbG9yLmFuYWxvZ291cygpLFxuICBnZXRNb25vY2hyb21hdGljOiAoY29sb3IpID0+IGNvbG9yLm1vbm9jaHJvbWF0aWMoKSxcbiAgZ2V0U3BsaXRDb21wbGVtZW50OiAoY29sb3IpID0+IGNvbG9yLnNwbGl0Y29tcGxlbWVudCgpLFxuICBnZXRUcmlhZDogKGNvbG9yKSA9PiBjb2xvci50cmlhZCgpLFxuICBnZXRUZXRyYWQ6IChjb2xvcikgPT4gY29sb3IudGV0cmFkKClcbn07XG4iXX0=