'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navStyles = {
  display: 'block',
  fontSize: '14px',
  lineHeight: '20px',
  listStyleType: 'none',
  margin: 0,
  padding: 0
};

var PillNav = function PillNav(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'ul',
    { style: navStyles },
    children
  );
};

PillNav.propTypes = {
  children: _propTypes2.default.array.isRequired
};

exports.default = PillNav;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map