'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
};

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { style: buttonStyles, onClick: onClick },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Button;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map