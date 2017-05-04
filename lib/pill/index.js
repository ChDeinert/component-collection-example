'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pillStyle = {
  display: 'block',
  float: 'left',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleType: 'none',
  marginLeft: '2px',
  position: 'relative'
};
var linkStyle = {
  border: '1px solid rgb(200, 200, 200)',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  boxSizing: 'borderBox',
  color: 'rgb(51, 122, 183)',
  cursor: 'auto',
  display: 'block',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sansSerif',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleImage: 'none',
  listStylePosition: 'outside',
  listStyleType: 'none',
  paddingBottom: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '10px',
  position: 'relative',
  textAlign: 'left',
  textDecorationColor: 'rgb(51, 122, 183)',
  textDecorationLine: 'none',
  textDecorationStyle: 'solid',
  textSizeAdjust: '100%'
};

var Pill = function Pill(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'li',
    { style: pillStyle },
    _react2.default.createElement(
      'a',
      { style: linkStyle, href: '#', onClick: onClick },
      children
    )
  );
};

Pill.propTypes = {
  children: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Pill;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map