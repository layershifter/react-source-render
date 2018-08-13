(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/react-source-render/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Segment/Segment");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Header/Header");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Icon/Icon");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Loader/Loader");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(32);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(34);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(35);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, {
            preload: true,
            preloadWeak: true
          });
          return Component;
        });
      }
    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(component, options, props),
            requireSync = _req2.requireSync;

        var Component = requireSync(props, context);
        if (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, {
            preload: true,
            preloadWeak: true
          });
        }

        return Component;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document !== null;
var hasWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window !== null && window.self === window;
var isBrowser = hasDocument && hasWindow;
var _default = isBrowser;
exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Label/Label");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("brace/theme/github");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Image/Image");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\List/List");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\collections\\Grid/Grid");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return __webpack_require__(33)(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _Message2 = _interopRequireDefault(__webpack_require__(41));

var _Label2 = _interopRequireDefault(__webpack_require__(10));

var _Icon2 = _interopRequireDefault(__webpack_require__(4));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _Grid2 = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactAce = _interopRequireDefault(__webpack_require__(11));

var _reactSourceRender = _interopRequireDefault(__webpack_require__(42));

__webpack_require__(20);

__webpack_require__(57);

__webpack_require__(12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var imports = {
  react: _react.default
};

var resolver = function resolver(path) {
  return imports[path];
};

var Sandbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Sandbox, _Component);

  function Sandbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sandbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sandbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      markup: "",
      source: "import React from \"react\";\n\nconst Example = <div>Hello world!</div>;\n \nexport default Example\n"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSourceChange", function (source) {
      return _this.setState({
        source: source
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRenderError", function (error) {
      return _this.setState({
        error: error
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRenderSuccess", function (error, _ref) {
      var markup = _ref.markup;
      return _this.setState({
        error: error,
        markup: markup
      });
    });

    return _this;
  }

  _createClass(Sandbox, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          markup = _this$state.markup,
          source = _this$state.source;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Header2.default, {
        as: "h2"
      }, "Live sandbox"), _react.default.createElement(_Segment2.default, {
        basic: true,
        attached: "top",
        style: {
          background: "rgb(255, 255, 255)",
          boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
        }
      }, _react.default.createElement(_Grid2.default, {
        columns: 2,
        divided: true
      }, _react.default.createElement(_Grid2.default.Column, null, _react.default.createElement(_Label2.default, {
        attached: "top left",
        color: "teal",
        size: "tiny"
      }, "Preview"), _react.default.createElement(_reactSourceRender.default, {
        onError: this.handleRenderError,
        onSuccess: this.handleRenderSuccess,
        resolver: resolver,
        source: source
      })), _react.default.createElement(_Grid2.default.Column, null, _react.default.createElement(_Label2.default, {
        attached: "top right",
        color: "teal",
        size: "tiny"
      }, "Rendered HTML"), _react.default.createElement(_reactAce.default, {
        editorProps: {
          $blockScrolling: Infinity
        },
        highlightActiveLine: false,
        highlightGutterLine: false,
        maxLines: Infinity,
        mode: "html",
        name: "html-editor",
        readOnly: true,
        showCursor: false,
        showGutter: false,
        showPrintMargin: false,
        tabSize: 2,
        theme: "github",
        value: markup,
        width: "100%"
      })))), _react.default.createElement(_Segment2.default, {
        attached: error ? true : "bottom",
        style: {
          padding: 0
        }
      }, _react.default.createElement(_reactAce.default, {
        editorProps: {
          $blockScrolling: Infinity
        },
        maxLines: Infinity,
        minLines: 10,
        mode: "jsx",
        name: "jsx-editor",
        onChange: this.handleSourceChange,
        tabSize: 2,
        theme: "github",
        value: source,
        width: "100%"
      }), _react.default.createElement(_Label2.default, {
        as: "a",
        attached: "bottom right",
        color: "black",
        href: "https://github.com/layershifter/react-source-render/blob/master/docs/components/Sandbox",
        size: "tiny",
        target: "blank"
      }, _react.default.createElement(_Icon2.default, {
        name: "github"
      }), " View source")), error && _react.default.createElement(_Message2.default, {
        attached: "bottom",
        error: true
      }, _react.default.createElement("pre", null, error.toString())));
    }
  }]);

  return Sandbox;
}(_react.Component);

exports.default = Sandbox;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "exportToIifePlugin", {
  enumerable: true,
  get: function get() {
    return _exportToIifePlugin.default;
  }
});
Object.defineProperty(exports, "importResolverPlugin", {
  enumerable: true,
  get: function get() {
    return _importResolverPlugin.default;
  }
});
Object.defineProperty(exports, "resolverId", {
  enumerable: true,
  get: function get() {
    return _importResolverPlugin.resolverId;
  }
});

var _exportToIifePlugin = _interopRequireDefault(__webpack_require__(49));

var _importResolverPlugin = _interopRequireWildcard(__webpack_require__(50));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/jsx");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactAce = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(58);

__webpack_require__(12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "$ yarn add react-source-render\n# or\n$ npm install react-source-render --save";

var QuickStart = function QuickStart() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Header2.default, {
    as: "h2"
  }, "Quick Start"), _react.default.createElement(_Segment2.default, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, _react.default.createElement(_reactAce.default, {
    editorProps: {
      $blockScrolling: Infinity
    },
    highlightActiveLine: false,
    highlightGutterLine: false,
    maxLines: 3,
    mode: "sh",
    name: "quick-start",
    readOnly: true,
    showCursor: false,
    showGutter: false,
    showPrintMargin: false,
    tabSize: 2,
    theme: "github",
    value: code,
    width: "100%"
  })));
};

var _default = QuickStart;
exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _Label2 = _interopRequireDefault(__webpack_require__(10));

var _Icon2 = _interopRequireDefault(__webpack_require__(4));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(59));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactAce = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(20);

__webpack_require__(12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var code = "\nimport _ from 'lodash'\nimport React from 'react'\n\nconst babelConfig = [\n  presets: [\n    'env',\n    'react',\n  ],  \n]\n\nconst imports = {\n  lodash: _,\n  react: React,\n}\n\nconst importResolver = importName => imports[name]\n\nconst Render = ({ sourceCode }) => (\n  <SourceRender\n    babelConfig={babelConfig}\n    onError={error => console.log(error)}\n    onSuccess={error, { markup } => console.log('HTML', markup)}\n    resolver={importResolver}\n    source={sourceCode}\n  />\n)\n\nexport default Render\n";

var Usage =
/*#__PURE__*/
function (_Component) {
  _inherits(Usage, _Component);

  function Usage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Usage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Usage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      copied: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCopyClick", function () {
      (0, _copyToClipboard.default)(code);

      _this.setState({
        copied: true
      });

      setTimeout(function () {
        _this.setState({
          copied: false
        });
      }, 3000);
    });

    return _this;
  }

  _createClass(Usage, [{
    key: "render",
    value: function render() {
      var copied = this.state.copied;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Header2.default, {
        as: "h2"
      }, "Example usage"), _react.default.createElement(_Segment2.default, {
        basic: true,
        style: {
          background: "rgb(255, 255, 255)",
          boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
        }
      }, _react.default.createElement(_reactAce.default, {
        editorProps: {
          $blockScrolling: Infinity
        },
        highlightActiveLine: false,
        highlightGutterLine: false,
        maxLines: 50,
        mode: "jsx",
        name: "quick-start",
        readOnly: true,
        showCursor: false,
        showGutter: false,
        showPrintMargin: false,
        tabSize: 2,
        theme: "github",
        value: code,
        width: "100%"
      }), _react.default.createElement(_Label2.default, {
        as: "a",
        attached: "bottom right",
        onClick: this.handleCopyClick,
        size: "tiny"
      }, copied ? _react.default.createElement("span", null, _react.default.createElement(_Icon2.default, {
        color: "green",
        name: "checkmark"
      }), " Copied") : _react.default.createElement("span", null, _react.default.createElement(_Icon2.default, {
        name: "copy"
      }), " Copy source"))));
    }
  }]);

  return Usage;
}(_react.Component);

exports.default = Usage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(13));

var _reactHotLoader = __webpack_require__(24);

var _App = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Your top level component
// Export your top level component as JSX (for static rendering)
var _default = _App.default; // Render your app

exports.default = _default;

if (typeof document !== "undefined") {
  var renderMethod =  false ? undefined : _reactDom.default.hydrate || _reactDom.default.render;

  var render = function render(Comp) {
    renderMethod(_react.default.createElement(_reactHotLoader.AppContainer, null, _react.default.createElement(Comp, null)), document.getElementById("root"));
  }; // Render!


  render(_App.default); // Hot Module Replacement

  if (false) {}
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _Image2 = _interopRequireDefault(__webpack_require__(14));

var _Icon2 = _interopRequireDefault(__webpack_require__(4));

var _List2 = _interopRequireDefault(__webpack_require__(15));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _Grid2 = _interopRequireDefault(__webpack_require__(16));

var _Divider2 = _interopRequireDefault(__webpack_require__(26));

var _Container2 = _interopRequireDefault(__webpack_require__(27));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _Props = _interopRequireDefault(__webpack_require__(28));

var _Sandbox = _interopRequireDefault(__webpack_require__(30));

var _Title = _interopRequireDefault(__webpack_require__(36));

var _QuickStart = _interopRequireDefault(__webpack_require__(39));

var _Usage = _interopRequireDefault(__webpack_require__(40));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("style", null, "body {background: #f7f7f7}"), _react.default.createElement(_Title.default, null), _react.default.createElement(_Container2.default, null, _react.default.createElement(_Divider2.default, {
    hidden: true
  }), _react.default.createElement(_Header2.default, {
    as: "h2"
  }, "Solved problem"), _react.default.createElement(_Segment2.default, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, _react.default.createElement("p", null, "This component was initially designed to replace the", " ", _react.default.createElement("a", {
    href: "https://github.com/Semantic-Org/Semantic-UI-React/blob/e786724c73a6446fc5e86828ba446c18d4a9baab/docs/src/components/ComponentDoc/ComponentExample/renderExampleSourceCode.js",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "existing render"), " ", "playground in Semantic UI React docs. React Source Render is designed to be used with", " ", _react.default.createElement("a", {
    href: "https://babeljs.io/docs/en/next/babel-standalone.html",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Babel Standalone"), ". The component consists from the parts:"), _react.default.createElement(_List2.default, {
    bulleted: true
  }, _react.default.createElement(_List2.default.Item, null, "rendering component"), _react.default.createElement(_List2.default.Item, null, "Babel plugin to transform imports and resoolve them"), _react.default.createElement(_List2.default.Item, null, "Babel plugin to transform code to IIFE"))), _react.default.createElement(_QuickStart.default, null), _react.default.createElement(_Sandbox.default, null), _react.default.createElement(_Props.default, null), _react.default.createElement(_Usage.default, null)), _react.default.createElement(_Segment2.default, {
    basic: true,
    inverted: true
  }, _react.default.createElement(_Grid2.default, {
    as: _Container2.default,
    columns: 2
  }, _react.default.createElement(_Grid2.default.Column, null, _react.default.createElement("a", {
    href: "https://github.com/layershifter",
    rel: "noopener noreferrer",
    title: "Follow me on Github"
  }, _react.default.createElement(_Icon2.default, {
    color: "grey",
    name: "github",
    size: "large"
  })), _react.default.createElement("a", {
    href: "https://www.linkedin.com/in/layershifter/",
    rel: "noopener noreferrer",
    title: "Check my profile in LinkedIn"
  }, _react.default.createElement(_Icon2.default, {
    color: "grey",
    name: "linkedin in",
    size: "large"
  }))), _react.default.createElement(_Grid2.default.Column, {
    textAlign: "right"
  }, "Proudly powered by", _react.default.createElement("a", {
    href: "https://react.semantic-ui.com",
    rel: "noopener noreferrer",
    style: {
      color: "#fff"
    },
    target: "_blank"
  }, _react.default.createElement(_Image2.default, {
    style: {
      height: 20,
      marginRight: 2
    },
    spaced: true,
    src: "/logo-sui.png"
  }), " Semantic UI")))));
};

var _default = App;
exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Divider/Divider");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Container/Container");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Table2 = _interopRequireDefault(__webpack_require__(29));

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _List2 = _interopRequireDefault(__webpack_require__(15));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Usage = function Usage() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Header2.default, {
    as: "h2"
  }, "Component props"), _react.default.createElement(_Segment2.default, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, _react.default.createElement(_Table2.default, {
    basic: "very"
  }, _react.default.createElement(_Table2.default.Body, null, _react.default.createElement(_Table2.default.Row, null, _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("code", null, "babelConfig")), _react.default.createElement(_Table2.default.Cell, null, "A config for Babel.")), _react.default.createElement(_Table2.default.Row, null, _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("code", null, "onError")), _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("p", null, "A callback that will be called after the render process that ended with an error."), _react.default.createElement(_List2.default, {
    bulleted: true
  }, _react.default.createElement(_List2.default.Item, null, _react.default.createElement("code", null, "{Error}", " error")), _react.default.createElement(_List2.default.Item, null, _react.default.createElement("code", null, "{Object}", " props"))))), _react.default.createElement(_Table2.default.Row, null, _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("code", null, "onSuccess")), _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("p", null, "A callback that will be called after the render process that ended successfully."), _react.default.createElement(_List2.default, {
    bulleted: true
  }, _react.default.createElement(_List2.default.Item, null, _react.default.createElement("code", null, "{Null}", " null")), _react.default.createElement(_List2.default.Item, null, _react.default.createElement("code", null, "{Object}", " props"))))), _react.default.createElement(_Table2.default.Row, null, _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("code", null, "resolver")), _react.default.createElement(_Table2.default.Cell, null, "A function for the imports resolution.")), _react.default.createElement(_Table2.default.Row, null, _react.default.createElement(_Table2.default.Cell, null, _react.default.createElement("code", null, "source")), _react.default.createElement(_Table2.default.Cell, null, "A string that contains the source code."))))));
};

var _default = Usage;
exports.default = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\collections\\Table/Table");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path2 = _interopRequireDefault(__webpack_require__(5));

var _universalImport2 = _interopRequireDefault(__webpack_require__(6));

var _Loader2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactUniversalComponent = _interopRequireDefault(__webpack_require__(8));

var _isBrowser = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _isBrowser.default ? (0, _reactUniversalComponent.default)((0, _universalImport2.default)({
  id: "./Sandbox",
  file: "C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\Sandbox\\index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Sandbox */).then(__webpack_require__.t.bind(null, 18, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path2.default.join(__dirname, "./Sandbox");
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return "Sandbox";
  }
}), {
  loading: function loading() {
    return _react.default.createElement(_Loader2.default, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(17);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (usesBabelPlugin) {
          name = name.replace(/\//g, '-');
        }
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Segment2 = _interopRequireDefault(__webpack_require__(1));

var _Label2 = _interopRequireDefault(__webpack_require__(10));

var _Image2 = _interopRequireDefault(__webpack_require__(14));

var _Header2 = _interopRequireDefault(__webpack_require__(2));

var _Button2 = _interopRequireDefault(__webpack_require__(37));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactStatic = __webpack_require__(38);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var version = _ref.version;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactStatic.Head, null, _react.default.createElement("title", null, "React Sandbox Render")), _react.default.createElement(_Segment2.default, {
    color: "teal",
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: "20em",
      padding: "1em 0em"
    },
    vertical: true
  }, _react.default.createElement(_Image2.default, {
    centered: true,
    size: "small",
    src: "/logo-white.png"
  }), _react.default.createElement(_Header2.default, {
    as: "h1",
    content: _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", null, "React Source Render"), _react.default.createElement(_Label2.default, {
      size: "small"
    }, version)),
    inverted: true,
    style: {
      fontSize: "3em",
      fontWeight: "normal"
    },
    subheader: "An irreplaceable thing for sandbox with React."
  }), _react.default.createElement(_Button2.default, {
    as: "a",
    color: "black",
    compact: true,
    content: "Check source on Github",
    href: "https://github.com/layershifter/react-source-render",
    icon: "github",
    target: "_blank"
  })));
};

Title.propTypes = {
  version: _propTypes.default.string.isRequired
};

var _default = (0, _reactStatic.withSiteData)(Title);

exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\elements\\Button/Button");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path2 = _interopRequireDefault(__webpack_require__(5));

var _universalImport2 = _interopRequireDefault(__webpack_require__(6));

var _Loader2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactUniversalComponent = _interopRequireDefault(__webpack_require__(8));

var _isBrowser = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _isBrowser.default ? (0, _reactUniversalComponent.default)((0, _universalImport2.default)({
  id: "./QuickStart",
  file: "C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\QuickStart\\index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | QuickStart */).then(__webpack_require__.t.bind(null, 21, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path2.default.join(__dirname, "./QuickStart");
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "QuickStart";
  }
}), {
  loading: function loading() {
    return _react.default.createElement(_Loader2.default, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path2 = _interopRequireDefault(__webpack_require__(5));

var _universalImport2 = _interopRequireDefault(__webpack_require__(6));

var _Loader2 = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactUniversalComponent = _interopRequireDefault(__webpack_require__(8));

var _isBrowser = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _isBrowser.default ? (0, _reactUniversalComponent.default)((0, _universalImport2.default)({
  id: "./Usage",
  file: "C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\Usage\\index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Usage */).then(__webpack_require__.t.bind(null, 22, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path2.default.join(__dirname, "./Usage");
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "Usage";
  }
}), {
  loading: function loading() {
    return _react.default.createElement(_Loader2.default, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist\\commonjs\\collections\\Message/Message");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _SourceRender.default;
  }
});

var _SourceRender = _interopRequireDefault(__webpack_require__(43));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fastDeepEqual = _interopRequireDefault(__webpack_require__(44));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactDom = __webpack_require__(13);

var _server = __webpack_require__(45);

var _createElementFromSource = _interopRequireDefault(__webpack_require__(46));

var _util = __webpack_require__(55);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SourceRender =
/*#__PURE__*/
function (_Component) {
  _inherits(SourceRender, _Component);

  function SourceRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SourceRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SourceRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      element: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (c) {
      _this.ref = c;
    });

    return _this;
  }

  _createClass(SourceRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderElement();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _fastDeepEqual.default)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderElement();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.frameId) cancelAnimationFrame(this.frameId);
      if (this.ref) (0, _reactDom.unmountComponentAtNode)(this.ref);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this2 = this;

      this.frameId = requestAnimationFrame(function () {
        var _this2$props = _this2.props,
            babelConfig = _this2$props.babelConfig,
            onError = _this2$props.onError,
            onSuccess = _this2$props.onSuccess,
            resolver = _this2$props.resolver,
            source = _this2$props.source,
            rest = _objectWithoutProperties(_this2$props, ["babelConfig", "onError", "onSuccess", "resolver", "source"]);

        var prevElement = _this2.state.element;
        (0, _reactDom.unmountComponentAtNode)(_this2.ref);

        try {
          var element = (0, _createElementFromSource.default)(babelConfig, resolver, rest, source);
          var markup = (0, _server.renderToStaticMarkup)(element);
          (0, _reactDom.render)(element, _this2.ref);
          onSuccess(null, _objectSpread({}, _this2.props, {
            element: element,
            markup: markup
          }));

          _this2.setState({
            element: element
          });
        } catch (error) {
          onError(error, _this2.props);
          (0, _reactDom.render)(prevElement, _this2.ref);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: this.handleRef
      });
    }
  }]);

  return SourceRender;
}(_react.Component);

exports.default = SourceRender;

_defineProperty(SourceRender, "propTypes", {
  /** A config for Babel. */
  babelConfig: _propTypes.default.object,

  /**
   * A callback that will be called after the render process that ended with an error.
   *
   * @param {Error} error
   * @param {Object} props
   */
  onError: _propTypes.default.func,

  /**
   * A callback that will be called after the render process that ended successfully.
   *
   * @param {Error} error
   * @param {Object} props
   */
  onSuccess: _propTypes.default.func,

  /**
   * A function for the imports resolution.
   *
   * @param {String} importPath
   */
  resolver: _propTypes.default.func.isRequired,

  /** A string that contains the source code. */
  source: _propTypes.default.string.isRequired
});

_defineProperty(SourceRender, "defaultProps", {
  babelConfig: {},
  onError: _util.noop,
  onSuccess: _util.noop
});

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _createElementFromSource.default;
  }
});

var _createElementFromSource = _interopRequireDefault(__webpack_require__(47));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(0);

var _evalSource = _interopRequireDefault(__webpack_require__(48));

var _transformSource = _interopRequireDefault(__webpack_require__(51));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a valid React Element from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 * @param {String} source A string that contains the source code
 */
var createElementFromSource = function createElementFromSource(babelConfig, resolver, resolverContext, source) {
  var transformed = (0, _transformSource.default)(babelConfig, source);
  var component = (0, _evalSource.default)(transformed, resolver, resolverContext);
  return typeof component === "function" ? (0, _react.createElement)(component) : component;
};

var _default = createElementFromSource;
exports.default = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babel = __webpack_require__(19);

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 */
var evalSource = function evalSource(source, resolver, resolverContext) {
  var resolverWithContext = function resolverWithContext(importName) {
    return resolver(importName, resolverContext);
  }; // eslint-disable-next-line no-new-func


  var evalWithResolver = new Function(_babel.resolverId, "return ".concat(source));
  return evalWithResolver(resolverWithContext);
};

var _default = evalSource;
exports.default = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createIIFEProgram = function createIIFEProgram(t, body) {
  return t.program([t.expressionStatement(t.callExpression(t.functionExpression(null, [], t.blockStatement(body)), []))]);
};

var exportToIIFEPlugin = function exportToIIFEPlugin(_ref) {
  var t = _ref.types;
  return {
    visitor: {
      ExportDefaultDeclaration: function ExportDefaultDeclaration(path) {
        var program = path.find(function (parentPath) {
          return parentPath.isProgram();
        });
        var declaration = path.node.declaration;

        if (t.isClassDeclaration(declaration)) {
          path.replaceWith(declaration);
          program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.id.name)));
          return;
        }

        program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.name)));
        path.remove();
      },
      Program: {
        exit: function exit(path) {
          path.replaceWith(createIIFEProgram(t, path.node.body));
          path.stop();
        }
      }
    }
  };
};

var _default = exportToIIFEPlugin;
exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resolverId = void 0;
var resolverId = "__resolverFn__";
exports.resolverId = resolverId;

var createVariableDeclaration = function createVariableDeclaration(t, specifier, source) {
  return t.variableDeclaration("const", [t.variableDeclarator(t.identifier(specifier.local.name), t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]))]);
};

var createDestructedDeclaration = function createDestructedDeclaration(t, specifier, source) {
  return t.variableDeclaration("const", [t.variableDeclarator(t.objectPattern([t.objectProperty(t.identifier(specifier.imported.name), t.identifier(specifier.local.name), false, true)]), t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]))]);
};

var importResolverPlugin = function importResolverPlugin(_ref) {
  var t = _ref.types;
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        var replacements = path.node.specifiers.map(function (specifier) {
          if (t.isImportDefaultSpecifier(specifier) || t.isImportNamespaceSpecifier(specifier)) {
            return createVariableDeclaration(t, specifier, path.node.source);
          }

          if (t.isImportSpecifier(specifier)) {
            return createDestructedDeclaration(t, specifier, path.node.source);
          }

          return null;
        });
        path.replaceWithMultiple(replacements);
      }
    }
  };
};

var _default = importResolverPlugin;
exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Babel = _interopRequireWildcard(__webpack_require__(52));

var _deepmerge = _interopRequireDefault(__webpack_require__(53));

var _fastMemoize = _interopRequireDefault(__webpack_require__(54));

var _babel = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

Babel.registerPlugin("export-to-iife", _babel.exportToIifePlugin);
Babel.registerPlugin("import-resolver", _babel.importResolverPlugin);
/**
 * Transform passed ES6 code to the evaluable code using plugins and a passed config.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {String} source A string that contains the source code
 *
 * @return {String}
 */

var transformSource = function transformSource(babelConfig, source) {
  var config = (0, _deepmerge.default)({
    plugins: ["import-resolver", "export-to-iife"],
    presets: ["react"]
  }, babelConfig);

  var _Babel$transform = Babel.transform(source, config),
      code = _Babel$transform.code;

  return code;
};

var _default = (0, _fastMemoize.default)(transformSource);

exports.default = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("fast-memoize");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return _noop.default;
  }
});

var _noop = _interopRequireDefault(__webpack_require__(56));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var noop = function noop() {};

var _default = noop;
exports.default = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/html");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/sh");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ })
/******/ ]);
});