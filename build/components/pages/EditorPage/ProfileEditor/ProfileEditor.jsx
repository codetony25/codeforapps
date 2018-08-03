'use strict';exports.__esModule=true;var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _jsxFileName='components/pages/EditorPage/ProfileEditor/ProfileEditor.jsx';var _reactMeteorData=require('meteor/react-meteor-data');var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRouter=require('react-router');var _books=require('/imports/api/books');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var BookProfileView=function(_React$Component){(0,_inherits3.default)(BookProfileView,_React$Component);function BookProfileView(props){(0,_classCallCheck3.default)(this,BookProfileView);var _this=(0,_possibleConstructorReturn3.default)(this,(BookProfileView.__proto__||(0,_getPrototypeOf2.default)(BookProfileView)).call(this,props));_this.componentWillReceiveProps=function(){return _this.__componentWillReceiveProps__REACT_HOT_LOADER__.apply(_this,arguments)};_this.state={loaded:false};_this.displayName='BookProfileView';return _this}(0,_createClass3.default)(BookProfileView,[{key:'__componentWillReceiveProps__REACT_HOT_LOADER__',value:function __componentWillReceiveProps__REACT_HOT_LOADER__(){return this.__componentWillReceiveProps__REACT_HOT_LOADER__.apply(this,arguments)}},{key:'__componentWillReceiveProps__REACT_HOT_LOADER__',value:function __componentWillReceiveProps__REACT_HOT_LOADER__(nextProps){if(!nextProps.subscriptionLoading&&!nextProps.book){_reactRouter.browserHistory.replace('/404')}if(!nextProps.subscriptionLoading&&nextProps.book&&!this.state.loaded){this.setState({loaded:true})}}},{key:'render',value:function render(){if(!this.state.loaded){return null}return _react2.default.createElement('div',{className:'book-profile-view',__source:{fileName:_jsxFileName,lineNumber:42}},this.props.book.title)}}]);return BookProfileView}(_react2.default.Component);var _default=(0,_reactMeteorData.createContainer)(function(props){var bookHandle=Meteor.subscribe('getBookForBookProfile',props.params.bookSlug);var subscriptionLoading=!bookHandle.ready();var book=_books.Books.find({}).fetch()[0];return{subscriptionLoading:subscriptionLoading,book:book}},BookProfileView);exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return}__REACT_HOT_LOADER__.register(BookProfileView,'BookProfileView','components/pages/EditorPage/ProfileEditor/ProfileEditor.jsx');__REACT_HOT_LOADER__.register(_default,'default','components/pages/EditorPage/ProfileEditor/ProfileEditor.jsx')}();;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGVFZGl0b3IuanN4Il0sIm5hbWVzIjpbIkJvb2tQcm9maWxlVmlldyIsInByb3BzIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInN0YXRlIiwibG9hZGVkIiwiZGlzcGxheU5hbWUiLCJuZXh0UHJvcHMiLCJzdWJzY3JpcHRpb25Mb2FkaW5nIiwiYm9vayIsInJlcGxhY2UiLCJzZXRTdGF0ZSIsInRpdGxlIiwiQ29tcG9uZW50IiwiYm9va0hhbmRsZSIsIk1ldGVvciIsInN1YnNjcmliZSIsInBhcmFtcyIsImJvb2tTbHVnIiwicmVhZHkiLCJmaW5kIiwiZmV0Y2giXSwibWFwcGluZ3MiOiJreEJBQUEseURBRUEsNEIsMkNBQ0EseUNBRUEseUMscUZBRU1BLGdCLHFGQUVKLHlCQUFZQyxLQUFaLENBQW1CLGdNQUNYQSxLQURXLFNBVW5CQyx5QkFWbUIsaUdBR2pCLE1BQUtDLEtBQUwsQ0FBYSxDQUNYQyxPQUFRLEtBREcsQ0FBYixDQUlBLE1BQUtDLFdBQUwsQ0FBbUIsaUJBQW5CLENBUGlCLFlBUWxCLEMsNldBRTRCQyxTLENBQWMsQ0FFekMsR0FBSSxDQUFDQSxVQUFVQyxtQkFBWCxFQUFrQyxDQUFDRCxVQUFVRSxJQUFqRCxDQUF1RCxDQUVyRCw0QkFBZUMsT0FBZixDQUF1QixNQUF2QixDQUNELENBR0QsR0FBSSxDQUFDSCxVQUFVQyxtQkFBWCxFQUFrQ0QsVUFBVUUsSUFBNUMsRUFBb0QsQ0FBQyxLQUFLTCxLQUFMLENBQVdDLE1BQXBFLENBQTRFLENBRzFFLEtBQUtNLFFBQUwsQ0FBYyxDQUFFTixPQUFRLElBQVYsQ0FBZCxDQUNELENBQ0YsQyx1Q0FFUSxDQUNQLEdBQUksQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQWhCLENBQXdCLENBRXRCLE1BQU8sS0FDUixDQUVELE1BQ0Usc0NBQUssVUFBVSxtQkFBZixpREFDRyxLQUFLSCxLQUFMLENBQVdPLElBQVgsQ0FBZ0JHLEtBRG5CLENBSUgsQyw0QkF0QzJCLGdCQUFNQyxTLGVBeUNyQixxQ0FBZ0IsU0FBQ1gsS0FBRCxDQUFXLENBRXhDLEdBQU1ZLFlBQ0pDLE9BQU9DLFNBQVAsQ0FBaUIsdUJBQWpCLENBQTBDZCxNQUFNZSxNQUFOLENBQWFDLFFBQXZELENBREYsQ0FHQSxHQUFNVixxQkFBc0IsQ0FBQ00sV0FBV0ssS0FBWCxFQUE3QixDQUNBLEdBQU1WLE1BQU8sYUFBTVcsSUFBTixDQUFXLEVBQVgsRUFBZUMsS0FBZixHQUF1QixDQUF2QixDQUFiLENBQ0EsTUFBTyxDQUNMYix1Q0FESyxDQUVMQyxTQUZLLENBSVIsQ0FYYyxDQVdaUixlQVhZLEMsbUlBekNUQSxlIiwiZmlsZSI6IlByb2ZpbGVFZGl0b3IuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b255bmd1eWVuL0lkZWFQcm9qZWN0cy9jb2RlZm9yYXBwcy90b29scyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lciB9IGZyb20gJ21ldGVvci9yZWFjdC1tZXRlb3ItZGF0YSc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IEJvb2tzIH0gZnJvbSAnL2ltcG9ydHMvYXBpL2Jvb2tzJztcblxuY2xhc3MgQm9va1Byb2ZpbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9ICdCb29rUHJvZmlsZVZpZXcnO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IChuZXh0UHJvcHMpID0+IHtcbiAgICAvLyBJZiB3ZSdyZSBubyBsb25nZXIgbG9hZGluZyBhbmQgdGhlIGJvb2sgaXMgbnVsbCwgaXQgZG9lc24ndCBleGlzdC5cbiAgICBpZiAoIW5leHRQcm9wcy5zdWJzY3JpcHRpb25Mb2FkaW5nICYmICFuZXh0UHJvcHMuYm9vaykge1xuICAgICAgLy8gV2Ugd2FudCB0byB1c2UgcmVwbGFjZSBpbnN0ZWFkIG9mIHB1c2ggc28gdGhhdCB0aGUgYmFkIHVybCBkb2Vzbid0IHN0YXkgaW4gaGlzdG9yeVxuICAgICAgYnJvd3Nlckhpc3RvcnkucmVwbGFjZSgnLzQwNCcpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSBub3Qgd2FpdGluZyBvbiB0aGUgc3Vic2NyaXB0aW9uIGFueSBsb25nZXIsIGFuZCB3ZSBoYXZlbid0IHNldCB1cCBvdXJcbiAgICAvLyBzdGF0ZSBiYXNlZCBvZmYgc29tZSBib29rIHByb3BlcnRpZXMsIGxldCdzIGRvIHRoYXQgbm93LlxuICAgIGlmICghbmV4dFByb3BzLnN1YnNjcmlwdGlvbkxvYWRpbmcgJiYgbmV4dFByb3BzLmJvb2sgJiYgIXRoaXMuc3RhdGUubG9hZGVkKSB7XG4gICAgICAvLyBUT0RPOiBJZiB0aGVyZSBpcyBubyBwdWJsaXNoZWQgdmVyc2lvbiBvZiB0aGlzIGJvb2ssIG1ha2Ugc3VyZSB0aGF0IG9ubHlcbiAgICAgIC8vIFRPRE86IFRoZSBhdXRob3JzIGFuIGNvbnRyaWJ1dG9ycyBjYW4gc2VlIGl0LlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkZWQpIHtcbiAgICAgIC8vIFRPRE86IERvIHNvbWUgbG9hZGluZyB0aGluZ1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1wcm9maWxlLXZpZXdcIj5cbiAgICAgICAge3RoaXMucHJvcHMuYm9vay50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyKChwcm9wcykgPT4ge1xuICAvLyBHZXQgdGhlIGJvb2sgZnJvbSB0aGUgc2x1Z1xuICBjb25zdCBib29rSGFuZGxlID1cbiAgICBNZXRlb3Iuc3Vic2NyaWJlKCdnZXRCb29rRm9yQm9va1Byb2ZpbGUnLCBwcm9wcy5wYXJhbXMuYm9va1NsdWcpO1xuICAvLyBBIHZhcmlhYmxlIHRvIHNlZSBpZiB0aGUgYm9vayBpcyBzdGlsbCBsb2FkaW5nXG4gIGNvbnN0IHN1YnNjcmlwdGlvbkxvYWRpbmcgPSAhYm9va0hhbmRsZS5yZWFkeSgpO1xuICBjb25zdCBib29rID0gQm9va3MuZmluZCh7fSkuZmV0Y2goKVswXTtcbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpcHRpb25Mb2FkaW5nLFxuICAgIGJvb2tcbiAgfTtcbn0sIEJvb2tQcm9maWxlVmlldyk7Il19