'use strict';exports.__esModule=true;exports.blockStyleFn=exports.customBlockRenderMap=undefined;var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _jsxFileName='core/modules/everlib_editor/custom_blocks/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _wrapper=require('./wrapper.jsx');var _wrapper2=_interopRequireDefault(_wrapper);var _code=require('./code.jsx');var _code2=_interopRequireDefault(_code);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Immutable=require('immutable');var customBlockRenderMap=exports.customBlockRenderMap=function(_React$Component){(0,_inherits3.default)(customBlockRenderMap,_React$Component);function customBlockRenderMap(){(0,_classCallCheck3.default)(this,customBlockRenderMap);return(0,_possibleConstructorReturn3.default)(this,(customBlockRenderMap.__proto__||(0,_getPrototypeOf2.default)(customBlockRenderMap)).apply(this,arguments))}(0,_createClass3.default)(customBlockRenderMap,[{key:'render',value:function render(){return Immutable.Map({'align-center':{element:'div'},'align-justify':{element:'div'},'align-left':{element:'div'},'align-right':{element:'div'},'blockquote':{element:'div',wrapper:_react2.default.createElement('blockquote',(0,_extends3.default)({},this.props,{__source:{fileName:_jsxFileName,lineNumber:31}}))},'code':{element:'div',wrapper:_react2.default.createElement(_code2.default,(0,_extends3.default)({},this.props,{__source:{fileName:_jsxFileName,lineNumber:35}}))},'information':{element:'div',wrapper:_react2.default.createElement(_wrapper2.default,(0,_extends3.default)({className:'tip'},this.props,{__source:{fileName:_jsxFileName,lineNumber:39}}))},'warning':{element:'div',wrapper:_react2.default.createElement(_wrapper2.default,(0,_extends3.default)({className:'warning'},this.props,{__source:{fileName:_jsxFileName,lineNumber:43}}))}})}}]);return customBlockRenderMap}(_react2.default.Component);var blockStyleFn=exports.blockStyleFn=function blockStyleFn(block){var blockTypeHash={'align-center':'align-center','align-justify':'align-justify','align-left':'align-left','align-right':'align-right','information':'text','warning':'text'};var blockType=block.getType();return blockTypeHash[blockType]};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(customBlockRenderMap,'customBlockRenderMap','core/modules/everlib_editor/custom_blocks/index.js');__REACT_HOT_LOADER__.register(blockStyleFn,'blockStyleFn','core/modules/everlib_editor/custom_blocks/index.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkltbXV0YWJsZSIsInJlcXVpcmUiLCJjdXN0b21CbG9ja1JlbmRlck1hcCIsIk1hcCIsImVsZW1lbnQiLCJ3cmFwcGVyIiwicHJvcHMiLCJDb21wb25lbnQiLCJibG9ja1N0eWxlRm4iLCJibG9jayIsImJsb2NrVHlwZUhhc2giLCJibG9ja1R5cGUiLCJnZXRUeXBlIl0sIm1hcHBpbmdzIjoiNDZCQUFBLDRCLDJDQU1BLHNDLCtDQUNBLGdDLDJIQUpBLEdBQU1BLFdBQVlDLFFBQVEsV0FBUixDQUFsQixDLEdBUWFDLHFCLFNBQUFBLG9CLHNhQUVGLENBQ1AsTUFDRUYsV0FBVUcsR0FBVixDQUFjLENBQ1osZUFBZ0IsQ0FDZEMsUUFBUyxLQURLLENBREosQ0FJWixnQkFBaUIsQ0FDZkEsUUFBUyxLQURNLENBSkwsQ0FPWixhQUFjLENBQ1pBLFFBQVMsS0FERyxDQVBGLENBVVosY0FBZSxDQUNiQSxRQUFTLEtBREksQ0FWSCxDQWFaLGFBQWMsQ0FDWkEsUUFBUyxLQURHLENBRVpDLFFBQVMsb0VBQWdCLEtBQUtDLEtBQXJCLG1EQUZHLENBYkYsQ0FpQlosT0FBUSxDQUNORixRQUFTLEtBREgsQ0FFTkMsUUFBUyxzRUFBVSxLQUFLQyxLQUFmLG1EQUZILENBakJJLENBcUJaLGNBQWUsQ0FDYkYsUUFBUyxLQURJLENBRWJDLFFBQVMsdUVBQVMsVUFBVSxLQUFuQixFQUE2QixLQUFLQyxLQUFsQyxtREFGSSxDQXJCSCxDQXlCWixVQUFXLENBQ1RGLFFBQVMsS0FEQSxDQUVUQyxRQUFTLHVFQUFTLFVBQVUsU0FBbkIsRUFBaUMsS0FBS0MsS0FBdEMsbURBRkEsQ0F6QkMsQ0FBZCxDQStCSCxDLGlDQW5DdUMsZ0JBQU1DLFMsRUF3Q3pDLEdBQU1DLG1DQUFlLFFBQWZBLGFBQWUsQ0FBQ0MsS0FBRCxDQUFXLENBR3JDLEdBQU1DLGVBQWdCLENBQ3BCLGVBQWdCLGNBREksQ0FFcEIsZ0JBQWlCLGVBRkcsQ0FHcEIsYUFBYyxZQUhNLENBSXBCLGNBQWUsYUFKSyxDQUtwQixjQUFlLE1BTEssQ0FNcEIsVUFBVyxNQU5TLENBQXRCLENBUUEsR0FBTUMsV0FBWUYsTUFBTUcsT0FBTixFQUFsQixDQUVBLE1BQU9GLGVBQWNDLFNBQWQsQ0FDUixDQWRNLEMseUdBeENNVCxvQiw0R0F3Q0FNLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBDYW4ndCB1c2UgaW1wb3J0IHN5bnRheCB3aXRoIEltbXV0YWJsZSA6KFxuY29uc3QgSW1tdXRhYmxlID0gcmVxdWlyZSgnaW1tdXRhYmxlJyk7XG5cbi8vIEltcG9ydCBzcGVjaWFsIGN1c3RvbSBibG9jayByZW5kZXJzXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3dyYXBwZXIuanN4JztcbmltcG9ydCBDb2RlIGZyb20gJy4vY29kZS5qc3gnO1xuXG4vLyBUaGlzIHdpbGwgZ2V0IG1peGVkIHdpdGggdGhlIGRlZmF1bHRCbG9ja1JlbmRlck1hcCB0byBtYWtlXG4vLyBjdXN0b20gYmxvY2sgc3R5bGVzLlxuZXhwb3J0IGNsYXNzIGN1c3RvbUJsb2NrUmVuZGVyTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEltbXV0YWJsZS5NYXAoe1xuICAgICAgICAnYWxpZ24tY2VudGVyJzoge1xuICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnXG4gICAgICAgIH0sXG4gICAgICAgICdhbGlnbi1qdXN0aWZ5Jzoge1xuICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnXG4gICAgICAgIH0sXG4gICAgICAgICdhbGlnbi1sZWZ0Jzoge1xuICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnXG4gICAgICAgIH0sXG4gICAgICAgICdhbGlnbi1yaWdodCc6IHtcbiAgICAgICAgICBlbGVtZW50OiAnZGl2J1xuICAgICAgICB9LFxuICAgICAgICAnYmxvY2txdW90ZSc6IHtcbiAgICAgICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgICAgICB3cmFwcGVyOiA8YmxvY2txdW90ZSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfSxcbiAgICAgICAgJ2NvZGUnOiB7XG4gICAgICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICAgICAgd3JhcHBlcjogPENvZGUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH0sXG4gICAgICAgICdpbmZvcm1hdGlvbic6IHtcbiAgICAgICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgICAgICB3cmFwcGVyOiA8V3JhcHBlciBjbGFzc05hbWU9XCJ0aXBcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfSxcbiAgICAgICAgJ3dhcm5pbmcnOiB7XG4gICAgICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICAgICAgd3JhcHBlcjogPFdyYXBwZXIgY2xhc3NOYW1lPVwid2FybmluZ1wiIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxufVxuXG4vLyBUaGlzIGFkZHMgY2xhc3MgbmFtZXMgb24gdG8gY3VzdG9tIGJsb2NrIHN0eWxlc1xuZXhwb3J0IGNvbnN0IGJsb2NrU3R5bGVGbiA9IChibG9jaykgPT4ge1xuICAvLyBMZXQncyBkbyBhIGhhc2ggbG9va3VwIGluc3RlYWQgb2YgYSBidW5jaCBvZiBuZXN0ZWQgaWYncyBmb3IgcGVyZm9ybWFuY2VcbiAgLy8ga2V5OiBibG9ja1R5cGUsIHZhbHVlOiBjbGFzc05hbWVcbiAgY29uc3QgYmxvY2tUeXBlSGFzaCA9IHtcbiAgICAnYWxpZ24tY2VudGVyJzogJ2FsaWduLWNlbnRlcicsXG4gICAgJ2FsaWduLWp1c3RpZnknOiAnYWxpZ24tanVzdGlmeScsXG4gICAgJ2FsaWduLWxlZnQnOiAnYWxpZ24tbGVmdCcsXG4gICAgJ2FsaWduLXJpZ2h0JzogJ2FsaWduLXJpZ2h0JyxcbiAgICAnaW5mb3JtYXRpb24nOiAndGV4dCcsXG4gICAgJ3dhcm5pbmcnOiAndGV4dCdcbiAgfTtcbiAgY29uc3QgYmxvY2tUeXBlID0gYmxvY2suZ2V0VHlwZSgpO1xuXG4gIHJldHVybiBibG9ja1R5cGVIYXNoW2Jsb2NrVHlwZV07XG59O1xuIl19