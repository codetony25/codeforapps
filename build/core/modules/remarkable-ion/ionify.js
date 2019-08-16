'use strict';exports.__esModule=true;exports.ionify=undefined;var _setIon=require('./setIon');var ionify=exports.ionify=function ionify(md){return ion.bind(null,md)};function get(state,line){var pos=state.bMarks[line];var max=state.eMarks[line];return state.src.substr(pos,max-pos)}function ion(md,state,start,end){if(start!==0||state.blkIndent!==0){return false}if(state.tShift[start]<0){return false}var data=[];for(var line=start;line<end;line++){var str=get(state,line);if(str.match(/^---$/)){break}if(state.tShift[line]<0){break}data.push((0,_setIon.setIon)(str))}state.src=data.join('\n')||{};if(line>=end){return false}state.line=line+1;return true};var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(ionify,'ionify','core/modules/remarkable-ion/ionify.js');__REACT_HOT_LOADER__.register(get,'get','core/modules/remarkable-ion/ionify.js');__REACT_HOT_LOADER__.register(ion,'ion','core/modules/remarkable-ion/ionify.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbmlmeS5qcyJdLCJuYW1lcyI6WyJpb25pZnkiLCJtZCIsImlvbiIsImJpbmQiLCJnZXQiLCJzdGF0ZSIsImxpbmUiLCJwb3MiLCJiTWFya3MiLCJtYXgiLCJlTWFya3MiLCJzcmMiLCJzdWJzdHIiLCJzdGFydCIsImVuZCIsImJsa0luZGVudCIsInRTaGlmdCIsImRhdGEiLCJzdHIiLCJtYXRjaCIsInB1c2giLCJqb2luIl0sIm1hcHBpbmdzIjoiOERBQUEsZ0NBRU8sR0FBTUEsdUJBQVMsUUFBVEEsT0FBUyxDQUFDQyxFQUFELENBQVEsQ0FDNUIsTUFBT0MsS0FBSUMsSUFBSixDQUFTLElBQVQsQ0FBZUYsRUFBZixDQUNSLENBRk0sQ0FJUCxRQUFTRyxJQUFULENBQWFDLEtBQWIsQ0FBb0JDLElBQXBCLENBQTBCLENBQ3hCLEdBQUlDLEtBQU1GLE1BQU1HLE1BQU4sQ0FBYUYsSUFBYixDQUFWLENBQ0EsR0FBSUcsS0FBTUosTUFBTUssTUFBTixDQUFhSixJQUFiLENBQVYsQ0FDQSxNQUFPRCxPQUFNTSxHQUFOLENBQVVDLE1BQVYsQ0FBaUJMLEdBQWpCLENBQXNCRSxJQUFNRixHQUE1QixDQUNSLENBRUQsUUFBU0wsSUFBVCxDQUFhRCxFQUFiLENBQWlCSSxLQUFqQixDQUF3QlEsS0FBeEIsQ0FBK0JDLEdBQS9CLENBQW9DLENBQ2xDLEdBQUlELFFBQVUsQ0FBVixFQUFlUixNQUFNVSxTQUFOLEdBQW9CLENBQXZDLENBQTBDLENBQ3hDLE1BQU8sTUFDUixDQUNELEdBQUlWLE1BQU1XLE1BQU4sQ0FBYUgsS0FBYixFQUFzQixDQUExQixDQUE2QixDQUMzQixNQUFPLE1BQ1IsQ0FDRCxHQUFJSSxNQUFPLEVBQVgsQ0FDQSxJQUFLLEdBQUlYLE1BQU9PLEtBQWhCLENBQXVCUCxLQUFPUSxHQUE5QixDQUFtQ1IsTUFBbkMsQ0FBMkMsQ0FDekMsR0FBSVksS0FBTWQsSUFBSUMsS0FBSixDQUFXQyxJQUFYLENBQVYsQ0FDQSxHQUFJWSxJQUFJQyxLQUFKLENBQVUsT0FBVixDQUFKLENBQXdCLENBQ3RCLEtBQ0QsQ0FDRCxHQUFJZCxNQUFNVyxNQUFOLENBQWFWLElBQWIsRUFBcUIsQ0FBekIsQ0FBNEIsQ0FDMUIsS0FDRCxDQUNEVyxLQUFLRyxJQUFMLENBQVUsbUJBQU9GLEdBQVAsQ0FBVixDQUNELENBR0RiLE1BQU1NLEdBQU4sQ0FBWU0sS0FBS0ksSUFBTCxDQUFVLElBQVYsR0FBbUIsRUFBL0IsQ0FFQSxHQUFJZixNQUFRUSxHQUFaLENBQWlCLENBQ2YsTUFBTyxNQUNSLENBQ0RULE1BQU1DLElBQU4sQ0FBYUEsS0FBTyxDQUFwQixDQUNBLE1BQU8sS0FDUixDLHlHQXJDWU4sTSxpRkFJSkksRyw4RUFNQUYsRyIsImZpbGUiOiJpb25pZnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbnluZ3V5ZW4vUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRJb24gfSBmcm9tICcuL3NldElvbic7XG5cbmV4cG9ydCBjb25zdCBpb25pZnkgPSAobWQpID0+IHtcbiAgcmV0dXJuIGlvbi5iaW5kKG51bGwsIG1kKTtcbn07XG5cbmZ1bmN0aW9uIGdldChzdGF0ZSwgbGluZSkge1xuICB2YXIgcG9zID0gc3RhdGUuYk1hcmtzW2xpbmVdO1xuICB2YXIgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdO1xuICByZXR1cm4gc3RhdGUuc3JjLnN1YnN0cihwb3MsIG1heCAtIHBvcyk7XG59XG5cbmZ1bmN0aW9uIGlvbihtZCwgc3RhdGUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ICE9PSAwIHx8IHN0YXRlLmJsa0luZGVudCAhPT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoc3RhdGUudFNoaWZ0W3N0YXJ0XSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGEgPSBbXTtcbiAgZm9yICh2YXIgbGluZSA9IHN0YXJ0OyBsaW5lIDwgZW5kOyBsaW5lKyspIHtcbiAgICB2YXIgc3RyID0gZ2V0KHN0YXRlLCBsaW5lKTtcbiAgICBpZiAoc3RyLm1hdGNoKC9eLS0tJC8pKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHN0YXRlLnRTaGlmdFtsaW5lXSA8IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkYXRhLnB1c2goc2V0SW9uKHN0cikpO1xuICB9XG5cblxuICBzdGF0ZS5zcmMgPSBkYXRhLmpvaW4oJ1xcbicpIHx8IHt9O1xuXG4gIGlmIChsaW5lID49IGVuZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGF0ZS5saW5lID0gbGluZSArIDE7XG4gIHJldHVybiB0cnVlO1xufSJdfQ==