'use strict';exports.__esModule=true;exports.mark=undefined;var _code_rules=require('./rules/code_rules');var _code_rules2=_interopRequireDefault(_code_rules);var _front_line_rules=require('./rules/front_line_rules');var _front_line_rules2=_interopRequireDefault(_front_line_rules);var _wrapper_rules=require('./rules/wrapper_rules');var _wrapper_rules2=_interopRequireDefault(_wrapper_rules);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var code=[];var handleParagraphBlocks=function handleParagraphBlocks(str){if(!str)return str;var secs=str.split('\n');secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.blockquote);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.h1);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.h2);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.h3);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.hr);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.hrDouble);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.hrThick);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.tip);secs=_front_line_rules2.default.parse(secs,_front_line_rules2.default.warning);str='<div class="paragraph">'+secs.join('</div><div class="paragraph">')+'</div>';str=_wrapper_rules2.default.parse(str,_wrapper_rules2.default.icon);str=_wrapper_rules2.default.parse(str,_wrapper_rules2.default.italic);str=_wrapper_rules2.default.parse(str,_wrapper_rules2.default.strike);str=_wrapper_rules2.default.parse(str,_wrapper_rules2.default.strong);return str};var handleCodeRules=function handleCodeRules(str){if(!str)return str;var moreToReplace=true;while(moreToReplace){var idx1=str.indexOf('```');var idx2=str.indexOf('```',idx1+3);if(idx1<idx2){var codeStr=str.slice(idx1,idx2+4);var lang='';var file='';var topStr=(codeStr.match(/```(.+)\n/)||[])[1];if(topStr){var _idx=topStr.indexOf('[');var _idx2=topStr.indexOf(']');if(_idx<_idx2){file=topStr.slice(_idx+1,_idx2)}lang=topStr.replace('['+file+']','')}var langSpan='';if(lang){langSpan='<span class="language '+lang.toLowerCase()+'">'+lang+'</span>'}var fileSpan='';if(file){fileSpan='<span class="file '+lang.toLowerCase()+'">'+file+'</span>'}str=str.replace(codeStr,'[%-!code'+code.length+'!-%]');codeStr=codeStr.replace(topStr,'');codeStr=codeStr.replace('```','');codeStr=codeStr.replace('```','');code.push('\n        <div class="codeblock">\n          <span class="title-bar">\n            '+langSpan+'\n            '+fileSpan+'\n          </span>\n          <pre>\n            '+_code_rules2.default.parse(codeStr,lang)+'\n          </pre>\n        </div>')}else{moreToReplace=false}}console.log(code);return str};var handleInternalMarkers=function handleInternalMarkers(str){code.forEach(function(c,i){return str=str.replace('[%-!code'+i+'!-%]',c)});code=[];return str};var mark=exports.mark=function mark(str){str=handleCodeRules(str);str=handleParagraphBlocks(str);str=handleInternalMarkers(str);console.log(str);return str};;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(code,'code','core/modules/markdown/mark.js');__REACT_HOT_LOADER__.register(handleParagraphBlocks,'handleParagraphBlocks','core/modules/markdown/mark.js');__REACT_HOT_LOADER__.register(handleCodeRules,'handleCodeRules','core/modules/markdown/mark.js');__REACT_HOT_LOADER__.register(handleInternalMarkers,'handleInternalMarkers','core/modules/markdown/mark.js');__REACT_HOT_LOADER__.register(mark,'mark','core/modules/markdown/mark.js')}();;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmsuanMiXSwibmFtZXMiOlsiY29kZSIsImhhbmRsZVBhcmFncmFwaEJsb2NrcyIsInN0ciIsInNlY3MiLCJzcGxpdCIsInBhcnNlIiwiYmxvY2txdW90ZSIsImgxIiwiaDIiLCJoMyIsImhyIiwiaHJEb3VibGUiLCJoclRoaWNrIiwidGlwIiwid2FybmluZyIsImpvaW4iLCJpY29uIiwiaXRhbGljIiwic3RyaWtlIiwic3Ryb25nIiwiaGFuZGxlQ29kZVJ1bGVzIiwibW9yZVRvUmVwbGFjZSIsImlkeDEiLCJpbmRleE9mIiwiaWR4MiIsImNvZGVTdHIiLCJzbGljZSIsImxhbmciLCJmaWxlIiwidG9wU3RyIiwibWF0Y2giLCJyZXBsYWNlIiwibGFuZ1NwYW4iLCJ0b0xvd2VyQ2FzZSIsImZpbGVTcGFuIiwibGVuZ3RoIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbnRlcm5hbE1hcmtlcnMiLCJmb3JFYWNoIiwiYyIsImkiLCJtYXJrIl0sIm1hcHBpbmdzIjoiNERBQUEsOEMscURBQ0EsMEQsaUVBQ0Esb0QsNklBR0EsR0FBSUEsTUFBTyxFQUFYLENBT0EsR0FBTUMsdUJBQXdCLFFBQXhCQSxzQkFBd0IsQ0FBQ0MsR0FBRCxDQUFTLENBQ3JDLEdBQUksQ0FBQ0EsR0FBTCxDQUFVLE1BQU9BLElBQVAsQ0FDVixHQUFJQyxNQUFPRCxJQUFJRSxLQUFKLENBQVUsSUFBVixDQUFYLENBQ0FELEtBQU8sMkJBQWVFLEtBQWYsQ0FBcUJGLElBQXJCLENBQTJCLDJCQUFlRyxVQUExQyxDQUFQLENBQ0FILEtBQU8sMkJBQWVFLEtBQWYsQ0FBcUJGLElBQXJCLENBQTJCLDJCQUFlSSxFQUExQyxDQUFQLENBQ0FKLEtBQU8sMkJBQWVFLEtBQWYsQ0FBcUJGLElBQXJCLENBQTJCLDJCQUFlSyxFQUExQyxDQUFQLENBQ0FMLEtBQU8sMkJBQWVFLEtBQWYsQ0FBcUJGLElBQXJCLENBQTJCLDJCQUFlTSxFQUExQyxDQUFQLENBQ0FOLEtBQU8sMkJBQWVFLEtB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RCxDQTdDRCxJQTZDTyxDQUNMTixjQUFnQixLQUNqQixDQUNGLENBQ0RnQixRQUFRQyxHQUFSLENBQVl0QyxJQUFaLEVBQ0EsTUFBT0UsSUFDUixDQTNERCxDQTZEQSxHQUFNcUMsdUJBQXdCLFFBQXhCQSxzQkFBd0IsQ0FBQ3JDLEdBQUQsQ0FBUyxDQUlyQ0YsS0FBS3dDLE9BQUwsQ0FBYSxTQUFDQyxDQUFELENBQUlDLENBQUosUUFBVXhDLEtBQU1BLElBQUk2QixPQUFKLFlBQXVCVyxDQUF2QixRQUFnQ0QsQ0FBaEMsQ0FBaEIsQ0FBYixFQUNBekMsS0FBTyxFQUFQLENBQ0EsTUFBT0UsSUFDUixDQVBELENBU08sR0FBTXlDLG1CQUFPLFFBQVBBLEtBQU8sQ0FBQ3pDLEdBQUQsQ0FBUyxDQUkzQkEsSUFBTWtCLGdCQUFnQmxCLEdBQWhCLENBQU4sQ0FFQUEsSUFBTUQsc0JBQXNCQyxHQUF0QixDQUFOLENBRUFBLElBQU1xQyxzQkFBc0JyQyxHQUF0QixDQUFOLENBRUFtQyxRQUFRQyxHQUFSLENBQVlwQyxHQUFaLEVBRUEsTUFBT0EsSUFDUixDQWJNLEMseUdBckdIRixJLHVFQU9FQyxxQix3RkF3QkFtQixlLGtGQTZEQW1CLHFCLHdGQVNPSSxJIiwiZmlsZSI6Im1hcmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29kZVJ1bGVzIGZyb20gJy4vcnVsZXMvY29kZV9ydWxlcyc7XG5pbXBvcnQgZnJvbnRMaW5lUnVsZXMgZnJvbSAnLi9ydWxlcy9mcm9udF9saW5lX3J1bGVzJztcbmltcG9ydCB3cmFwcGVyUnVsZXMgICBmcm9tICcuL3J1bGVzL3dyYXBwZXJfcnVsZXMnO1xuXG4vLyBGb3IgaGFuZGxpbmcgY29kZSBibG9ja3NcbmxldCBjb2RlID0gW107XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBydWxlcyB0aGF0IGNhbid0IGNyb3NzIHRocm91Z2ggbmV3IGxpbmVzXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBoYW5kbGVQYXJhZ3JhcGhCbG9ja3MgPSAoc3RyKSA9PiB7XG4gIGlmICghc3RyKSByZXR1cm4gc3RyO1xuICBsZXQgc2VjcyA9IHN0ci5zcGxpdCgnXFxuJyk7XG4gIHNlY3MgPSBmcm9udExpbmVSdWxlcy5wYXJzZShzZWNzLCBmcm9udExpbmVSdWxlcy5ibG9ja3F1b3RlKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmgxKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmgyKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmgzKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmhyKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmhyRG91YmxlKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLmhyVGhpY2spO1xuICBzZWNzID0gZnJvbnRMaW5lUnVsZXMucGFyc2Uoc2VjcywgZnJvbnRMaW5lUnVsZXMudGlwKTtcbiAgc2VjcyA9IGZyb250TGluZVJ1bGVzLnBhcnNlKHNlY3MsIGZyb250TGluZVJ1bGVzLndhcm5pbmcpO1xuXG4gIHN0ciA9IGA8ZGl2IGNsYXNzPVwicGFyYWdyYXBoXCI+JHtzZWNzLmpvaW4oJzwvZGl2PjxkaXYgY2xhc3M9XFxcInBhcmFncmFwaFxcXCI+Jyl9PC9kaXY+YDtcbiAgXG4gIHN0ciA9IHdyYXBwZXJSdWxlcy5wYXJzZShzdHIsIHdyYXBwZXJSdWxlcy5pY29uKTtcbiAgc3RyID0gd3JhcHBlclJ1bGVzLnBhcnNlKHN0ciwgd3JhcHBlclJ1bGVzLml0YWxpYyk7XG4gIHN0ciA9IHdyYXBwZXJSdWxlcy5wYXJzZShzdHIsIHdyYXBwZXJSdWxlcy5zdHJpa2UpO1xuICBzdHIgPSB3cmFwcGVyUnVsZXMucGFyc2Uoc3RyLCB3cmFwcGVyUnVsZXMuc3Ryb25nKTtcblxuICByZXR1cm4gc3RyO1xuXG59O1xuXG5jb25zdCBoYW5kbGVDb2RlUnVsZXMgPSAoc3RyKSA9PiB7XG4gIGlmICghc3RyKSByZXR1cm4gc3RyO1xuICBsZXQgbW9yZVRvUmVwbGFjZSA9IHRydWU7XG4gIHdoaWxlIChtb3JlVG9SZXBsYWNlKSB7XG4gICAgbGV0IGlkeDEgPSBzdHIuaW5kZXhPZignYGBgJyk7XG4gICAgbGV0IGlkeDIgPSBzdHIuaW5kZXhPZignYGBgJywgaWR4MSArIDMpO1xuXG4gICAgLy8gaWYgY29kZWJsb2NrIGZvdW5kXG4gICAgaWYgKGlkeDEgPCBpZHgyKSB7XG4gICAgICAvLyBncmFiIHRoZSBjb21wbGV0ZSBjb2RlIHN0cmluZyB3aXRoIHRpY2tzIGFuZCBsYW5ndWFnZVxuICAgICAgbGV0IGNvZGVTdHIgPSBzdHIuc2xpY2UoaWR4MSwgaWR4Mis0KTtcblxuICAgICAgLy8gZ3JhYiB0aGUgbGFuZ3VhZ2UgYW5kIGZpbGVuYW1lIGlmIHRoZXkgZXhpc3QgZnJvbSB0aGUgdG9wXG4gICAgICBsZXQgbGFuZyA9ICcnO1xuICAgICAgbGV0IGZpbGUgPSAnJztcbiAgICAgIGxldCB0b3BTdHIgPSAoY29kZVN0ci5tYXRjaCgvYGBgKC4rKVxcbi8pIHx8IFtdKVsxXTtcbiAgICAgIGlmICh0b3BTdHIpIHtcbiAgICAgICAgY29uc3QgaWR4MSA9IHRvcFN0ci5pbmRleE9mKCdbJyk7XG4gICAgICAgIGNvbnN0IGlkeDIgPSB0b3BTdHIuaW5kZXhPZignXScpO1xuICAgICAgICBpZiAoaWR4MSA8IGlkeDIpIHtcbiAgICAgICAgICBmaWxlID0gdG9wU3RyLnNsaWNlKGlkeDErMSxpZHgyKTtcbiAgICAgICAgfVxuICAgICAgICBsYW5nID0gdG9wU3RyLnJlcGxhY2UoYFske2ZpbGV9XWAsICcnKTtcbiAgICAgIH1cblxuICAgICAgLy8gY3JlYXRlIHRoZSBsYW5ndWFnZSBhbmQgZmlsZW5hbWUgc3BhbnNcbiAgICAgIGxldCBsYW5nU3BhbiA9ICcnO1xuICAgICAgaWYgKGxhbmcpIHtcbiAgICAgICAgbGFuZ1NwYW4gPSBgPHNwYW4gY2xhc3M9XCJsYW5ndWFnZSAke2xhbmcudG9Mb3dlckNhc2UoKX1cIj4ke2xhbmd9PC9zcGFuPmA7XG4gICAgICB9XG4gICAgICBsZXQgZmlsZVNwYW4gPSAnJztcbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIGZpbGVTcGFuID0gYDxzcGFuIGNsYXNzPVwiZmlsZSAke2xhbmcudG9Mb3dlckNhc2UoKX1cIj4ke2ZpbGV9PC9zcGFuPmA7XG4gICAgICB9XG4gICAgICAvLyByZXBsYWNlIHRoZSBjb2RlIHN0cmluZyB3aXRoIGFuIGludGVybmFsIG1hcmtlciBpbiB0aGUgb3JpZ2luYWwgc3RyaW5nXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShjb2RlU3RyLCAnWyUtIWNvZGUnICsgY29kZS5sZW5ndGggKyAnIS0lXScpO1xuXG4gICAgICAvLyBjbGVhbiB1cCB0aGUgY29kZSBzdHJpbmcgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlIGNvZGVSdWxlcyBoaWdobGlnaHRlclxuICAgICAgY29kZVN0ciA9IGNvZGVTdHIucmVwbGFjZSh0b3BTdHIsICcnKTtcbiAgICAgIGNvZGVTdHIgPSBjb2RlU3RyLnJlcGxhY2UoJ2BgYCcsJycpO1xuICAgICAgY29kZVN0ciA9IGNvZGVTdHIucmVwbGFjZSgnYGBgJywnJyk7XG5cbiAgICAgIC8vIHB1c2ggdGhlIGhpZ2hsaWdodCByZXN1bHQgaW50byB0aGUgY29kZSBnbG9iYWxcbiAgICAgIGNvZGUucHVzaChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlYmxvY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLWJhclwiPlxuICAgICAgICAgICAgJHtsYW5nU3Bhbn1cbiAgICAgICAgICAgICR7ZmlsZVNwYW59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAke2NvZGVSdWxlcy5wYXJzZShjb2RlU3RyLCBsYW5nKX1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vcmVUb1JlcGxhY2UgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coY29kZSk7XG4gIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBoYW5kbGVJbnRlcm5hbE1hcmtlcnMgPSAoc3RyKSA9PiB7XG4gIC8vIEZvciBlYWNoIGl0ZW0gaW4gY29kZVtdLCByZXBsYWNlIG91ciBpbnRlcm5hbCBtYXJrZXIgd2l0aCBpdFxuICAvLyBvdXIgaW50ZXJuYWwgbWFya2VyIGZvciBjb2RlIGlzIFslLSFjb2RlIyEtJV0gd2hlcmUgIyBpcyB0aGUgaW5kZXggaW5cbiAgLy8gdGhlIGNvZGUgYXJyYXkuXG4gIGNvZGUuZm9yRWFjaCgoYywgaSkgPT4gc3RyID0gc3RyLnJlcGxhY2UoYFslLSFjb2RlJHtpfSEtJV1gLCBjKSk7XG4gIGNvZGUgPSBbXTtcbiAgcmV0dXJuIHN0cjtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXJrID0gKHN0cikgPT4ge1xuXG4gIC8vIEZpcnN0IHdlJ3JlIGdvaW5nIHRvIGNoZWNrIGZvciBjb2RlLCBwdWxsIHRoZW0gb3V0IGFuZCByZXBsYWNlIHRoZW0gd2l0aCBpbnRlcm5hbFxuICAvLyBtYXJrZXJzIHRvIHRoZWlyIGxvY2F0aW9uLCBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IG11bmdlZCBieSBvdGhlciBydWxlc1xuICBzdHIgPSBoYW5kbGVDb2RlUnVsZXMoc3RyKTtcbiAgLy8gTm93IHJ1biBvdXIgcnVsZXMgdGhhdCBhcmUgYm91bmQgYnkgcGFyYWdyYXBoXG4gIHN0ciA9IGhhbmRsZVBhcmFncmFwaEJsb2NrcyhzdHIpO1xuICAvLyBOb3cgd2UgY2FuIHJlcGxhY2Ugb3VyIGludGVybmFsIG1hcmtlcnNcbiAgc3RyID0gaGFuZGxlSW50ZXJuYWxNYXJrZXJzKHN0cik7XG5cbiAgY29uc29sZS5sb2coc3RyKTtcbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRcbiAgcmV0dXJuIHN0cjtcbn07XG4iXX0=