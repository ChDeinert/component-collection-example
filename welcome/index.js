'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif'
  },

  logo: {
    width: 200
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a'
  }
};

var Welcome = function (_React$Component) {
  _inherits(Welcome, _React$Component);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: 'showApp',
    value: function showApp(e) {
      e.preventDefault();
      if (this.props.showApp) this.props.showApp();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.main },
        _react2.default.createElement(
          'h1',
          null,
          'Welcome to STORYBOOK'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is a UI component dev environment for your app.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We\'ve added some basic stories inside the',
          ' ',
          _react2.default.createElement(
            'code',
            { style: styles.code },
            'src/stories'
          ),
          ' directory.',
          _react2.default.createElement('br', null),
          'A story is a single state of one or more UI components. You can have as many stories as you want.',
          _react2.default.createElement('br', null),
          '(Basically a story is like a visual test case.)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'See these sample',
          ' ',
          _react2.default.createElement(
            'a',
            { style: styles.link, href: '#', onClick: this.showApp.bind(this) },
            'stories'
          ),
          ' ',
          'for a component called ',
          _react2.default.createElement(
            'code',
            { style: styles.code },
            'Button'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Just like that, you can add your own components as stories.',
          _react2.default.createElement('br', null),
          'You can also edit those components and see changes right away.',
          _react2.default.createElement('br', null),
          '(Try editing the ',
          _react2.default.createElement(
            'code',
            { style: styles.code },
            'Button'
          ),
          ' component located at ',
          _react2.default.createElement(
            'code',
            { style: styles.code },
            'src/stories/Button.js'
          ),
          '.)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is just one thing you can do with Storybook.',
          _react2.default.createElement('br', null),
          'Have a look at the',
          ' ',
          _react2.default.createElement(
            'a',
            {
              style: styles.link,
              href: 'https://github.com/kadirahq/react-storybook',
              target: '_blank'
            },
            'React Storybook'
          ),
          ' ',
          'repo for more information.'
        )
      );
    }
  }]);

  return Welcome;
}(_react2.default.Component);

exports.default = Welcome;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map