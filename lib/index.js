'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResizeDetector = require('react-resize-detector');

var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (relWidth, relHeight) {
  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(_class2, _Component);

      function _class2(props) {
        _classCallCheck(this, _class2);

        var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

        _this.computeDimensions = function () {
          var containerWidth = _this.container.offsetWidth;
          var containerHeight = _this.container.offsetHeight;
          var computedWidth = void 0;
          var computedHeight = void 0;

          // Width !> containerWidth
          // height !> containerHeight
          // Width used primarily for aspect ratio
          // Unless computedHeight exceeds container height

          computedWidth = containerWidth;
          computedHeight = containerWidth / relWidth * relHeight;
          if (computedHeight > containerHeight) {
            computedHeight = containerHeight;
            computedWidth = containerHeight / relHeight * relWidth;
          }

          _this.setState({
            width: computedWidth,
            height: computedHeight,
            canShow: true
          });
        };

        _this.state = {
          canShow: false,
          width: '100%',
          height: '100%'
        };
        return _this;
      }

      _createClass(_class2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.computeDimensions(this.container.offsetWidth, this.container.offsetHeight);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _state = this.state,
              width = _state.width,
              height = _state.height,
              canShow = _state.canShow;


          var wrapperStyles = {
            width: width,
            height: height,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          };

          return _react2.default.createElement(
            'div',
            {
              ref: function ref(container) {
                return _this2.container = container;
              },
              style: { opacity: canShow ? 1 : 0, width: '100%', height: '100%' }
            },
            _react2.default.createElement(_reactResizeDetector2.default, {
              handleWidth: true,
              handleHeight: true,
              onResize: this.computeDimensions
            }),
            _react2.default.createElement(
              'div',
              { style: wrapperStyles },
              _react2.default.createElement(WrappedComponent, this.props)
            )
          );
        }
      }]);

      return _class2;
    }(_react.Component);
  };
};