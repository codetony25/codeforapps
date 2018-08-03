'use strict';exports.__esModule=true;var wrapperRules={parse:function parse(str,rule){if(!str)return str;var moreToReplace=true;while(moreToReplace){var idx1=str.indexOf(rule.begin);var idx2=str.indexOf(rule.end,idx1+rule.begin.length);if(idx1<idx2){str=str.replace(rule.begin,rule.newBegin);str=str.replace(rule.end,rule.newEnd)}else{moreToReplace=false}}return str},icon:{begin:'[icon="',end:'"]',newBegin:'<i class="icon ',newEnd:'" ></i>'},italic:{begin:'_',end:'_',newBegin:'<div class="italic">',newEnd:'</div>'},strike:{begin:'~~',end:'~~',newBegin:'<div class="strike">',newEnd:'</div>'},strong:{begin:'**',end:'**',newBegin:'<div class="strong">',newEnd:'</div>'}};var _default=wrapperRules;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(wrapperRules,'wrapperRules','core/modules/markdown/rules/wrapper_rules.js');__REACT_HOT_LOADER__.register(_default,'default','core/modules/markdown/rules/wrapper_rules.js')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXJfcnVsZXMuanMiXSwibmFtZXMiOlsid3JhcHBlclJ1bGVzIiwicGFyc2UiLCJzdHIiLCJydWxlIiwibW9yZVRvUmVwbGFjZSIsImlkeDEiLCJpbmRleE9mIiwiYmVnaW4iLCJpZHgyIiwiZW5kIiwibGVuZ3RoIiwicmVwbGFjZSIsIm5ld0JlZ2luIiwibmV3RW5kIiwiaWNvbiIsIml0YWxpYyIsInN0cmlrZSIsInN0cm9uZyJdLCJtYXBwaW5ncyI6InFDQUFBLEdBQU1BLGNBQWUsQ0FDbkJDLE1BQU8sZUFBQ0MsR0FBRCxDQUFNQyxJQUFOLENBQWUsQ0FDcEIsR0FBSSxDQUFDRCxHQUFMLENBQVUsTUFBT0EsSUFBUCxDQUNWLEdBQUlFLGVBQWdCLElBQXBCLENBQ0EsTUFBT0EsYUFBUCxDQUFzQixDQUNwQixHQUFJQyxNQUFPSCxJQUFJSSxPQUFKLENBQVlILEtBQUtJLEtBQWpCLENBQVgsQ0FDQSxHQUFJQyxNQUFPTixJQUFJSSxPQUFKLENBQVlILEtBQUtNLEdBQWpCLENBQXNCSixLQUFPRixLQUFLSSxLQUFMLENBQVdHLE1BQXhDLENBQVgsQ0FFQSxHQUFJTCxLQUFPRyxJQUFYLENBQWlCLENBQ2ZOLElBQU1BLElBQUlTLE9BQUosQ0FBWVIsS0FBS0ksS0FBakIsQ0FBdUJKLEtBQUtTLFFBQTVCLENBQU4sQ0FDQVYsSUFBTUEsSUFBSVMsT0FBSixDQUFZUixLQUFLTSxHQUFqQixDQUFxQk4sS0FBS1UsTUFBMUIsQ0FDUCxDQUhELElBR08sQ0FDTFQsY0FBZ0IsS0FDakIsQ0FDRixDQUNELE1BQU9GLElBQ1IsQ0FoQmtCLENBaUJuQlksS0FBTSxDQUNKUCxlQURJLENBRUpFLFFBRkksQ0FHSkcsMEJBSEksQ0FJSkMsZ0JBSkksQ0FqQmEsQ0F1Qm5CRSxPQUFRLENBQ05SLE1BQU8sR0FERCxDQUVORSxJQUFLLEdBRkMsQ0FHTkcsK0JBSE0sQ0FJTkMsT0FBUSxRQUpGLENBdkJXLENBNkJuQkcsT0FBUSxDQUNOVCxNQUFPLElBREQsQ0FFTkUsSUFBSyxJQUZDLENBR05HLCtCQUhNLENBSU5DLE9BQVEsUUFKRixDQTdCVyxDQW1DbkJJLE9BQVEsQ0FDTlYsTUFBTyxJQURELENBRU5FLElBQUssSUFGQyxDQUdORywrQkFITSxDQUlOQyxPQUFRLFFBSkYsQ0FuQ1csQ0FBckIsQyxhQTRDZWIsWSxtSUE1Q1RBLFkiLCJmaWxlIjoid3JhcHBlcl9ydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9ueW5ndXllbi9JZGVhUHJvamVjdHMvY29kZWZvcmFwcHMvdG9vbHMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3cmFwcGVyUnVsZXMgPSB7XG4gIHBhcnNlOiAoc3RyLCBydWxlKSA9PiB7XG4gICAgaWYgKCFzdHIpIHJldHVybiBzdHI7XG4gICAgbGV0IG1vcmVUb1JlcGxhY2UgPSB0cnVlO1xuICAgIHdoaWxlIChtb3JlVG9SZXBsYWNlKSB7XG4gICAgICBsZXQgaWR4MSA9IHN0ci5pbmRleE9mKHJ1bGUuYmVnaW4pO1xuICAgICAgbGV0IGlkeDIgPSBzdHIuaW5kZXhPZihydWxlLmVuZCwgaWR4MSArIHJ1bGUuYmVnaW4ubGVuZ3RoKTtcblxuICAgICAgaWYgKGlkeDEgPCBpZHgyKSB7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJ1bGUuYmVnaW4scnVsZS5uZXdCZWdpbik7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJ1bGUuZW5kLHJ1bGUubmV3RW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vcmVUb1JlcGxhY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcbiAgaWNvbjoge1xuICAgIGJlZ2luOiBgW2ljb249XCJgLFxuICAgIGVuZDogYFwiXWAsXG4gICAgbmV3QmVnaW46IGA8aSBjbGFzcz1cImljb24gYCxcbiAgICBuZXdFbmQ6IGBcIiA+PC9pPmBcbiAgfSxcbiAgaXRhbGljOiB7XG4gICAgYmVnaW46ICdfJyxcbiAgICBlbmQ6ICdfJyxcbiAgICBuZXdCZWdpbjogYDxkaXYgY2xhc3M9XCJpdGFsaWNcIj5gLFxuICAgIG5ld0VuZDogJzwvZGl2PidcbiAgfSxcbiAgc3RyaWtlOiB7XG4gICAgYmVnaW46ICd+ficsXG4gICAgZW5kOiAnfn4nLFxuICAgIG5ld0JlZ2luOiBgPGRpdiBjbGFzcz1cInN0cmlrZVwiPmAsXG4gICAgbmV3RW5kOiAnPC9kaXY+J1xuICB9LFxuICBzdHJvbmc6IHtcbiAgICBiZWdpbjogJyoqJyxcbiAgICBlbmQ6ICcqKicsXG4gICAgbmV3QmVnaW46IGA8ZGl2IGNsYXNzPVwic3Ryb25nXCI+YCxcbiAgICBuZXdFbmQ6ICc8L2Rpdj4nXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclJ1bGVzOyJdfQ==