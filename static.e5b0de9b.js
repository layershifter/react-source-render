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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Table/Table");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Segment/Segment");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Header/Header");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/List/List");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.cleanPath = cleanPath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.getPluginHooks = getPluginHooks;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _swimmer = __webpack_require__(55);

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        scheme = _string$split2[0],
        path = _string$split2[1];

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
}

function cleanPath(path) {
  // Resolve the local path
  if (!path || path === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    path = path.replace(window.location.origin, '');
    path = path.replace(/#.*/, '');
    path = path.replace(/\?.*/, '');
  }

  if (true) {
    path = path.replace(new RegExp("^\\/?".concat("react-source-render", "\\/")), '');
  }

  path = path || '/';
  return pathJoin(path);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function getPluginHooks() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined; // The flat hooks

  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(cleanPath, "cleanPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  reactHotLoader.register(getPluginHooks, "getPluginHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/shared.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Label/Label");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Grid/Grid");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.needsPrefetch = needsPrefetch;
exports.prefetch = prefetch;
exports.getComponentForPath = getComponentForPath;
exports.registerTemplateIDForPath = registerTemplateIDForPath;
exports.clearTemplateIDs = clearTemplateIDs;
exports.onLoading = exports.setLoading = exports.getRouteInfo = exports.reloadRouteData = exports.propsByHash = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _axios = _interopRequireDefault(__webpack_require__(31));

var _shared = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var propsByHash = {};
exports.propsByHash = propsByHash;
var erroredPaths = {};
var inflightRouteInfo = {};
var inflightPropHashes = {};
var loading = 0;
var loadingSubscribers = [];
var disableRouteInfoWarning = "false" === 'true';
var requestPool = (0, _shared.createPool)({
  concurrency: Number("3") || 3
});

var reloadRouteData = function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, propsByHash, erroredPaths, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload
  // clearTemplateIDs()

  global.reloadAll();
}; // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data


exports.reloadRouteData = reloadRouteData;

if (false) { var run, io; }

var getRouteInfo =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref5,
        priority,
        originalPath,
        routeInfo,
        _ref6,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref7,
        _data,
        _ref8,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref5 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref5.priority;

            if (!(typeof document === 'undefined')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            originalPath = path;
            path = (0, _shared.cleanPath)(path); // Check the cache first

            if (!routeInfoByPath[path]) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 7:
            if (!erroredPaths[path]) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return");

          case 9:
            _context2.prev = 9;

            if (true) {
              _context2.next = 19;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 14;
            return inflightRouteInfo[path];

          case 14:
            _ref6 = _context2.sent;
            data = _ref6.data;
            routeInfo = data;
            _context2.next = 36;
            break;

          case 19:
            routeInfoRoot = ( false ? undefined : "https://layershifter.github.io/react-source-render/") || '/';
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _shared.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster);

            if (!priority) {
              _context2.next = 30;
              break;
            }

            _context2.next = 25;
            return _axios.default.get(getPath);

          case 25:
            _ref7 = _context2.sent;
            _data = _ref7.data;
            routeInfo = _data;
            _context2.next = 36;
            break;

          case 30:
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 33;
            return inflightRouteInfo[path];

          case 33:
            _ref8 = _context2.sent;
            _data2 = _ref8.data;
            routeInfo = _data2;

          case 36:
            _context2.next = 44;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t0 = _context2["catch"](9);
            erroredPaths[path] = true;

            if (false) {}

            return _context2.abrupt("return");

          case 43:
            console.warn("Could not load routeInfo for path: ".concat(originalPath, ". If this is a static route, make sure any link to this page is valid! If this is not a static route, you can desregard this warning."));

          case 44:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            routeInfoByPath[path] = routeInfo;
            return _context2.abrupt("return", routeInfoByPath[path]);

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[9, 38]]);
  }));

  return function getRouteInfo(_x) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRouteInfo = getRouteInfo;

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref9,
        priority,
        routeInfo,
        allProps,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref9 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref9.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.allProps) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", routeInfo.allProps);

          case 8:
            // Request and build the props one by one
            allProps = _objectSpread({}, routeInfo.localProps || {}); // Request the template and loop over the routeInfo.sharedPropsHashes, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedPropsHashes).map(
            /*#__PURE__*/
            function () {
              var _ref11 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref12, prop, _ref13, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedPropsHashes[key]; // Check the propsByHash first

                        if (propsByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _shared.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref12 = _context3.sent;
                        prop = _ref12.data;
                        propsByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _shared.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref13 = _context3.sent;
                        _prop = _ref13.data; // Place it in the cache

                        propsByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        allProps[key] = propsByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x6) {
                return _ref11.apply(this, arguments);
              };
            }()));

          case 11:
            // Cache the entire props for the route
            routeInfo.allProps = allProps; // Return the props

            return _context4.abrupt("return", routeInfo.allProps);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref10,
        priority,
        routeInfo,
        pathTemplate,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref10 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref10.priority; // Clean the path

            path = (0, _shared.cleanPath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path);

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              registerTemplateIDForPath(path, routeInfo.templateID);
            } // Preload the template if available


            pathTemplate = getComponentForPath(path);

            if (!(pathTemplate && pathTemplate.preload)) {
              _context5.next = 17;
              break;
            }

            if (!priority) {
              _context5.next = 13;
              break;
            }

            _context5.next = 11;
            return pathTemplate.preload();

          case 11:
            _context5.next = 15;
            break;

          case 13:
            _context5.next = 15;
            return requestPool.add(function () {
              return pathTemplate.preload();
            });

          case 15:
            routeInfo.templateLoaded = true;
            return _context5.abrupt("return", pathTemplate);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function needsPrefetch(_x4) {
  return _needsPrefetch.apply(this, arguments);
}

function _needsPrefetch() {
  _needsPrefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        routeInfo,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _shared.cleanPath)(path);

            if (path) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", false);

          case 4:
            _context6.next = 6;
            return getRouteInfo(path, options);

          case 6:
            routeInfo = _context6.sent;

            if (routeInfo) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", true);

          case 9:
            if (!(!routeInfo.allProps || !routeInfo.templateLoaded)) {
              _context6.next = 11;
              break;
            }

            return _context6.abrupt("return", true);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _needsPrefetch.apply(this, arguments);
}

function prefetch(_x5) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(path) {
    var options,
        type,
        data,
        _ref14,
        _ref15,
        _args7 = arguments;

    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {}; // Clean the path

            path = (0, _shared.cleanPath)(path);
            type = options.type;

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context7.next = 10;
              break;
            }

            _context7.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context7.sent;
            _context7.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context7.next = 15;
              break;
            }

            _context7.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context7.next = 21;
            break;

          case 15:
            ;
            _context7.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref14 = _context7.sent;
            _ref15 = _slicedToArray(_ref14, 1);
            data = _ref15[0];

          case 21:
            if (options.priority) {
              requestPool.start();
            }

            return _context7.abrupt("return", data);

          case 23:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _prefetch.apply(this, arguments);
}

var setLoading = function setLoading(d) {
  if (loading !== d) {
    loading = d;
    loadingSubscribers.forEach(function (s) {
      return s();
    });
  }
};

exports.setLoading = setLoading;

var onLoading = function onLoading(cb) {
  var ccb = function ccb() {
    return cb(loading);
  };

  loadingSubscribers.push(ccb);
  return function () {
    loadingSubscribers = loadingSubscribers.filter(function (d) {
      return d !== ccb;
    });
  };
};

exports.onLoading = onLoading;

function getComponentForPath(path) {
  path = (0, _shared.cleanPath)(path);
  return global.reactStaticGetComponentForPath && global.reactStaticGetComponentForPath(path);
}

function registerTemplateIDForPath(path, templateID) {
  path = (0, _shared.cleanPath)(path);
  return global.reactStaticGetComponentForPath && global.reactStaticRegisterTemplateIDForPath(path, templateID);
}

function clearTemplateIDs() {
  return global.clearTemplateIDs && global.clearTemplateIDs();
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(propsByHash, "propsByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(erroredPaths, "erroredPaths", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(loading, "loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(loadingSubscribers, "loadingSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(disableRouteInfoWarning, "disableRouteInfoWarning", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(needsPrefetch, "needsPrefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(setLoading, "setLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getComponentForPath, "getComponentForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateIDForPath, "registerTemplateIDForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(clearTemplateIDs, "clearTemplateIDs", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Loader/Loader");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(51);

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

var _reportChunks = __webpack_require__(53);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(54);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(26);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
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
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

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
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
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

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
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
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document !== null;
var hasWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window !== null && window.self === window;
var isBrowser = hasDocument && hasWindow;
/* harmony default export */ __webpack_exports__["a"] = (isBrowser);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(26);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(52)('' + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Image/Image");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(23);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
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
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/DevSpinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var DevSpinner = function DevSpinner() {
  return null;
}; // eslint-disable-line


if (false) {}

var _default = DevSpinner;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DevSpinner, "DevSpinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/DevSpinner.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/DevSpinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("brace/theme/github");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Container/Container");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cleanPath", {
  enumerable: true,
  get: function get() {
    return _shared.cleanPath;
  }
});
Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function get() {
    return _browser.prefetch;
  }
});
Object.defineProperty(exports, "onLoading", {
  enumerable: true,
  get: function get() {
    return _browser.onLoading;
  }
});
Object.defineProperty(exports, "Prompt", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Prompt;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Route;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.Switch;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.matchPath;
  }
});
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function get() {
    return _reactRouterDom.withRouter;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _Loading.default;
  }
});
Object.defineProperty(exports, "withLoading", {
  enumerable: true,
  get: function get() {
    return _Loading.withLoading;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "PrefetchWhenSeen", {
  enumerable: true,
  get: function get() {
    return _PrefetchWhenSeen.default;
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function get() {
    return _Router.default;
  }
});
Object.defineProperty(exports, "Redirect", {
  enumerable: true,
  get: function get() {
    return _Redirect.default;
  }
});
Object.defineProperty(exports, "NavLink", {
  enumerable: true,
  get: function get() {
    return _Link.NavLink;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.Link;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _routes.default;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
exports.getSiteData = exports.getRouteProps = void 0;

var _shared = __webpack_require__(9);

var _browser = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(17);

var _reactHelmet = __webpack_require__(32);

var _RouteData = _interopRequireWildcard(__webpack_require__(56));

var _SiteData = _interopRequireWildcard(__webpack_require__(57));

var _Loading = _interopRequireWildcard(__webpack_require__(58));

var _Prefetch = _interopRequireDefault(__webpack_require__(59));

var _PrefetchWhenSeen = _interopRequireDefault(__webpack_require__(33));

var _Router = _interopRequireDefault(__webpack_require__(60));

var _Redirect = _interopRequireDefault(__webpack_require__(68));

var _Link = __webpack_require__(69);

var _routes = _interopRequireDefault(__webpack_require__(70));

var _scrollTo = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Deprecations


var getRouteProps = function getRouteProps() {
  (0, _shared.deprecate)('getRouteProps', 'withRouteData');
  return _browser.withRouteData.apply(void 0, arguments);
};

exports.getRouteProps = getRouteProps;

var getSiteData = function getSiteData() {
  (0, _shared.deprecate)('getSiteData', 'withSiteData');
  return _browser.withSiteData.apply(void 0, arguments);
};

exports.getSiteData = getSiteData;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRouteProps, "getRouteProps", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(getSiteData, "getSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _shared = __webpack_require__(9);

var _ = __webpack_require__(15);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/PrefetchWhenSeen.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ioIsSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window;

var handleIntersection = function handleIntersection(element, callback) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
};

var PrefetchWhenSeen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrefetchWhenSeen, _React$Component);

  function PrefetchWhenSeen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrefetchWhenSeen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrefetchWhenSeen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, type, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad, type = _this$props.type;
                cleanedPath = (0, _shared.cleanPath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath, {
                  type: type
                });

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (ref) {
      if (ioIsSupported && ref) {
        handleIntersection(ref, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(PrefetchWhenSeen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!ioIsSupported) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["component", "render", "children"]);

      if (component) {
        return _react.default.createElement(component, {
          handleRef: this.handleRef
        });
      }

      if (render) {
        return render({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PrefetchWhenSeen;
}(_react.default.Component);

exports.default = PrefetchWhenSeen;

_defineProperty(PrefetchWhenSeen, "defaultProps", {
  children: null,
  path: null,
  className: null,
  type: null,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ioIsSupported, "ioIsSupported", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/PrefetchWhenSeen.js");
  reactHotLoader.register(handleIntersection, "handleIntersection", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/PrefetchWhenSeen.js");
  reactHotLoader.register(PrefetchWhenSeen, "PrefetchWhenSeen", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/PrefetchWhenSeen.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(34));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof window !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    (0, _raf.default)(step);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/jsx");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_mode_sh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var brace_mode_sh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_mode_sh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_5__);






var code = "$ yarn add react-source-render\n# or\n$ npm install react-source-render --save";

var QuickStart = function QuickStart() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "h2"
  }, "Quick Start"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0___default.a, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

/* harmony default export */ __webpack_exports__["default"] = (QuickStart);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usage; });
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Label_Label__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Label_Label__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Icon_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var brace_mode_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var brace_mode_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace_mode_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_8__);





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
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(code);

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Header_Header__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: "h2"
      }, "Example usage"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Segment_Segment__WEBPACK_IMPORTED_MODULE_0___default.a, {
        basic: true,
        style: {
          background: "rgb(255, 255, 255)",
          boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_ace__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Label_Label__WEBPACK_IMPORTED_MODULE_1___default.a, {
        as: "a",
        attached: "bottom right",
        onClick: this.handleCopyClick,
        size: "tiny"
      }, copied ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Icon_Icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        color: "green",
        name: "checkmark"
      }), " Copied") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Icon_Icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        name: "copy"
      }), " Copy source"))));
    }
  }]);

  return Usage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Segment/Segment"
var Segment_ = __webpack_require__(4);
var Segment_default = /*#__PURE__*/__webpack_require__.n(Segment_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/collections/Message/Message"
var Message_ = __webpack_require__(45);
var Message_default = /*#__PURE__*/__webpack_require__.n(Message_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Label/Label"
var Label_ = __webpack_require__(11);
var Label_default = /*#__PURE__*/__webpack_require__.n(Label_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Icon/Icon"
var Icon_ = __webpack_require__(10);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Header/Header"
var Header_ = __webpack_require__(6);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/collections/Grid/Grid"
var Grid_ = __webpack_require__(13);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-ace"
var external_react_ace_ = __webpack_require__(14);
var external_react_ace_default = /*#__PURE__*/__webpack_require__.n(external_react_ace_);

// EXTERNAL MODULE: external "fast-deep-equal"
var external_fast_deep_equal_ = __webpack_require__(46);
var external_fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(external_fast_deep_equal_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(47);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/babel/export-to-iife-plugin.js
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

/* harmony default export */ var export_to_iife_plugin = (exportToIIFEPlugin);
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/babel/import-resolver-plugin.js
var resolverId = "__resolverFn__";

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

/* harmony default export */ var import_resolver_plugin = (importResolverPlugin);
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/babel/index.js


// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/createElementFromSource/evalSource.js

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 */

var evalSource_evalSource = function evalSource(source, resolver, resolverContext) {
  var resolverWithContext = function resolverWithContext(importName) {
    return resolver(importName, resolverContext);
  }; // eslint-disable-next-line no-new-func


  var evalWithResolver = new Function(resolverId, "return ".concat(source));
  return evalWithResolver(resolverWithContext);
};

/* harmony default export */ var createElementFromSource_evalSource = (evalSource_evalSource);
// EXTERNAL MODULE: external "@babel/standalone"
var standalone_ = __webpack_require__(25);

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(48);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// EXTERNAL MODULE: external "fast-memoize"
var external_fast_memoize_ = __webpack_require__(49);
var external_fast_memoize_default = /*#__PURE__*/__webpack_require__.n(external_fast_memoize_);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/createElementFromSource/transformSource.js




standalone_["registerPlugin"]("export-to-iife", export_to_iife_plugin);
standalone_["registerPlugin"]("import-resolver", import_resolver_plugin);
/**
 * Transform passed ES6 code to the evaluable code using plugins and a passed config.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {String} source A string that contains the source code
 *
 * @return {String}
 */

var transformSource_transformSource = function transformSource(babelConfig, source) {
  var config = external_deepmerge_default()({
    plugins: ["import-resolver", "export-to-iife"],
    presets: ["react"]
  }, babelConfig);

  var _Babel$transform = standalone_["transform"](source, config),
      code = _Babel$transform.code;

  return code;
};

/* harmony default export */ var createElementFromSource_transformSource = (external_fast_memoize_default()(transformSource_transformSource));
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/createElementFromSource/createElementFromSource.js



/**
 * Creates a valid React Element from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 * @param {String} source A string that contains the source code
 */

var createElementFromSource_createElementFromSource = function createElementFromSource(babelConfig, resolver, resolverContext, source) {
  var transformed = createElementFromSource_transformSource(babelConfig, source);
  var component = createElementFromSource_evalSource(transformed, resolver, resolverContext);
  return typeof component === "function" ? Object(external_react_["createElement"])(component) : component;
};

/* harmony default export */ var src_createElementFromSource_createElementFromSource = (createElementFromSource_createElementFromSource);
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/createElementFromSource/index.js

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/util/noop.js
var noop = function noop() {};

/* harmony default export */ var util_noop = (noop);
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/util/index.js
// eslint-disable-next-line

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/SourceRender.js
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









var SourceRender_SourceRender =
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
      return !external_fast_deep_equal_default()(this.props, nextProps);
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
      if (this.ref) Object(external_react_dom_["unmountComponentAtNode"])(this.ref);
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
            renderHtml = _this2$props.renderHtml,
            resolver = _this2$props.resolver,
            source = _this2$props.source,
            rest = _objectWithoutProperties(_this2$props, ["babelConfig", "onError", "onSuccess", "renderHtml", "resolver", "source"]);

        var prevElement = _this2.state.element;
        Object(external_react_dom_["unmountComponentAtNode"])(_this2.ref);

        try {
          var element = src_createElementFromSource_createElementFromSource(babelConfig, resolver, rest, source);
          var markup = renderHtml ? Object(server_["renderToStaticMarkup"])(element) : null;
          Object(external_react_dom_["render"])(element, _this2.ref);
          onSuccess(null, _objectSpread({}, _this2.props, {
            element: element,
            markup: markup
          }));

          _this2.setState({
            element: element
          });
        } catch (error) {
          onError(error, _this2.props);
          Object(external_react_dom_["render"])(prevElement, _this2.ref);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        ref: this.handleRef
      });
    }
  }]);

  return SourceRender;
}(external_react_["Component"]);

_defineProperty(SourceRender_SourceRender, "defaultProps", {
  babelConfig: {},
  onError: util_noop,
  onSuccess: util_noop,
  renderHtml: true
});


// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/src/index.js

// EXTERNAL MODULE: external "brace/mode/jsx"
var jsx_ = __webpack_require__(36);

// EXTERNAL MODULE: external "brace/mode/html"
var html_ = __webpack_require__(71);

// EXTERNAL MODULE: external "brace/theme/github"
var github_ = __webpack_require__(28);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/Sandbox/Sandbox.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sandbox_Sandbox; });







function Sandbox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sandbox_typeof = function _typeof(obj) { return typeof obj; }; } else { Sandbox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sandbox_typeof(obj); }

function Sandbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sandbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sandbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sandbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sandbox_defineProperties(Constructor, staticProps); return Constructor; }

function Sandbox_possibleConstructorReturn(self, call) { if (call && (Sandbox_typeof(call) === "object" || typeof call === "function")) { return call; } return Sandbox_assertThisInitialized(self); }

function Sandbox_getPrototypeOf(o) { Sandbox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sandbox_getPrototypeOf(o); }

function Sandbox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sandbox_setPrototypeOf(subClass, superClass); }

function Sandbox_setPrototypeOf(o, p) { Sandbox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sandbox_setPrototypeOf(o, p); }

function Sandbox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sandbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var imports = {
  react: external_react_default.a
};

var Sandbox_resolver = function resolver(path) {
  return imports[path];
};

var Sandbox_Sandbox =
/*#__PURE__*/
function (_Component) {
  Sandbox_inherits(Sandbox, _Component);

  function Sandbox() {
    var _getPrototypeOf2;

    var _this;

    Sandbox_classCallCheck(this, Sandbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Sandbox_possibleConstructorReturn(this, (_getPrototypeOf2 = Sandbox_getPrototypeOf(Sandbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Sandbox_defineProperty(Sandbox_assertThisInitialized(Sandbox_assertThisInitialized(_this)), "state", {
      markup: "",
      source: "import React from \"react\";\n\nconst Example = <div>Hello world!</div>;\n \nexport default Example\n"
    });

    Sandbox_defineProperty(Sandbox_assertThisInitialized(Sandbox_assertThisInitialized(_this)), "handleSourceChange", function (source) {
      return _this.setState({
        source: source
      });
    });

    Sandbox_defineProperty(Sandbox_assertThisInitialized(Sandbox_assertThisInitialized(_this)), "handleRenderError", function (error) {
      return _this.setState({
        error: error
      });
    });

    Sandbox_defineProperty(Sandbox_assertThisInitialized(Sandbox_assertThisInitialized(_this)), "handleRenderSuccess", function (error, _ref) {
      var markup = _ref.markup;
      return _this.setState({
        error: error,
        markup: markup
      });
    });

    return _this;
  }

  Sandbox_createClass(Sandbox, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          markup = _this$state.markup,
          source = _this$state.source;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Header_default.a, {
        as: "h2"
      }, "Live sandbox"), external_react_default.a.createElement(Segment_default.a, {
        basic: true,
        attached: "top",
        style: {
          background: "rgb(255, 255, 255)",
          boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
        }
      }, external_react_default.a.createElement(Grid_default.a, {
        columns: 2,
        divided: true
      }, external_react_default.a.createElement(Grid_default.a.Column, null, external_react_default.a.createElement(Label_default.a, {
        attached: "top left",
        color: "teal",
        size: "tiny"
      }, "Preview"), external_react_default.a.createElement(SourceRender_SourceRender, {
        onError: this.handleRenderError,
        onSuccess: this.handleRenderSuccess,
        resolver: Sandbox_resolver,
        source: source
      })), external_react_default.a.createElement(Grid_default.a.Column, null, external_react_default.a.createElement(Label_default.a, {
        attached: "top right",
        color: "teal",
        size: "tiny"
      }, "Rendered HTML"), external_react_default.a.createElement(external_react_ace_default.a, {
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
      })))), external_react_default.a.createElement(Segment_default.a, {
        attached: error ? true : "bottom",
        style: {
          padding: 0
        }
      }, external_react_default.a.createElement(external_react_ace_default.a, {
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
      }), external_react_default.a.createElement(Label_default.a, {
        as: "a",
        attached: "bottom right",
        color: "black",
        href: "https://github.com/layershifter/react-source-render/blob/master/docs/components/Sandbox",
        size: "tiny",
        style: {
          zIndex: 10
        },
        target: "blank"
      }, external_react_default.a.createElement(Icon_default.a, {
        name: "github"
      }), " View source")), error && external_react_default.a.createElement(Message_default.a, {
        attached: "bottom",
        error: true
      }, external_react_default.a.createElement("pre", null, error.toString())));
    }
  }]);

  return Sandbox;
}(external_react_["Component"]);



/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Divider/Divider");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);






/* harmony default export */ __webpack_exports__["a"] = (_lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] ? react_universal_component__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "./Sandbox",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Sandbox */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, "./Sandbox");
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "Sandbox";
  }
}), {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Button/Button");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);






/* harmony default export */ __webpack_exports__["a"] = (_lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] ? react_universal_component__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "./QuickStart",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | QuickStart */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, "./QuickStart");
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "QuickStart";
  }
}), {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);






/* harmony default export */ __webpack_exports__["a"] = (_lib_isBrowser__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] ? react_universal_component__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "./Usage",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Usage */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, "./Usage");
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "Usage";
  }
}), {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react_dist_commonjs_elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      active: true,
      inline: "centered"
    });
  }
}) : function () {
  return null;
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Message/Message");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("fast-memoize");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(26);

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

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
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
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
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
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 23,
	"./": 23,
	"./index": 23,
	"./index.js": 23
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 52;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
/* 54 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _reactRouterDom = __webpack_require__(17);

var _ = __webpack_require__(15);

var _shared = __webpack_require__(9);

var _DevSpinner = _interopRequireDefault(__webpack_require__(27));

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var warnedPaths = {};
var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.reloadRouteData();
  });
};

var RouteData = (0, _reactRouterDom.withRouter)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reloadRouteData", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.loadRouteData();

              case 2:
                _this.forceUpdate();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadRouteData", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this$props, is404, pathname, path;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = _this.props, is404 = _this$props.is404, pathname = _this$props.location.pathname;
                path = (0, _shared.cleanPath)(is404 ? '404' : pathname);
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _.prefetch)(path);

              case 5:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this.setState({
                    loaded: true
                  }, resolve);
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", new Promise(function (resolve) {
                  _this.setState({
                    loaded: true
                  }, resolve);
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }))();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (false) {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (false) {}
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          render = _this$props2.render,
          children = _this$props2.children,
          pathname = _this$props2.location.pathname,
          rest = _objectWithoutProperties(_this$props2, ["component", "render", "children", "location"]);

      var loaded = this.state.loaded;
      var path = (0, _shared.cleanPath)(rest.is404 ? '404' : pathname);
      var allProps; // Attempt to get routeInfo from window (first-load on browser)

      if (typeof window !== 'undefined' && window.__routeInfo && (window.__routeInfo.path === path || window.__routeInfo.path === '404')) {
        loaded = true; // Since these are synchronous, override loading to true

        allProps = window.__routeInfo.allProps;
      } // Attempt to get routeInfo from context (SSR)


      if (!allProps && this.context.routeInfo && this.context.routeInfo.allProps) {
        loaded = true; // Override loaded to true

        allProps = this.context.routeInfo && this.context.routeInfo.allProps;
      } else if (_.routeInfoByPath[path]) {
        // Otherwise, get it from the routeInfoByPath (subsequent client side)
        loaded = true; // Override loaded to true

        allProps = _.routeInfoByPath[path].allProps;
      }

      if (!allProps && !rest.is404 && !warnedPaths[path]) {
        warnedPaths[path] = true;
        console.warn("RouteData or withRouteData couldn't find any props for path: ".concat(path, ". You are either missing a route.getData function or you are relying on RouteData/withRouteData where you don't need to."));
      }

      if (!loaded) {
        if (false) {}

        return null;
      }

      var finalProps = _objectSpread({}, rest, allProps);

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "contextTypes", {
  routeInfo: _propTypes.default.object
}), _temp));
var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  return function ConnectedRouteData(props) {
    return _react.default.createElement(RouteData, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }));
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(warnedPaths, "warnedPaths", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _axios = _interopRequireDefault(__webpack_require__(31));

var _DevSpinner = _interopRequireDefault(__webpack_require__(27));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var siteDataPromise;

var SiteData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      siteData: false
    });

    return _this;
  }

  _createClass(SiteData, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _ref, siteData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (true) {
                  _context.next = 8;
                  break;
                }

                _context.next = 3;
                return function () {
                  if (siteDataPromise) {
                    return siteDataPromise;
                  }

                  siteDataPromise = _axios.default.get('/__react-static__/siteData');
                  return siteDataPromise;
                }();

              case 3:
                _ref = _context.sent;
                siteData = _ref.data;

                if (!this.unmounting) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                this.setState({
                  siteData: siteData
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          render = _this$props.render,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["component", "render", "children"]);

      var siteData; // Get siteInfo from window

      if (typeof window !== 'undefined') {
        if (window.__routeInfo) {
          siteData = window.__routeInfo.siteData;
        }
      } // Get siteInfo from context (SSR)


      if (!siteData && this.context.routeInfo && this.context.routeInfo.siteData) {
        siteData = this.context.routeInfo && this.context.routeInfo.siteData;
      } // Get siteInfo from request


      if (!siteData && this.state.siteData) {
        siteData = this.state.siteData;
      }

      if (!siteData) {
        if (false) {}

        return null;
      }

      var finalProps = _objectSpread({}, rest, siteData);

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component);

exports.default = SiteData;

_defineProperty(SiteData, "contextTypes", {
  routeInfo: _propTypes.default.object
});

function withSiteData(Comp) {
  return function ConnectedSiteData(props) {
    return _react.default.createElement(SiteData, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLoading = withLoading;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(15);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Loading.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Loading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: _.loading
    });

    return _this;
  }

  _createClass(Loading, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.unsubscribe = (0, _.onLoading)(function (loading) {
        return _this2.setState({
          loading: loading
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          render = _this$props.render,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["component", "render", "children"]);

      var finalProps = _objectSpread({}, rest, {
        loading: this.state.loading
      });

      if (component) {
        return _react.default.createElement(component, finalProps, children);
      }

      if (render) {
        return render(finalProps);
      }

      return children(finalProps);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Loading;
}(_react.default.Component);

exports.default = Loading;

function withLoading(Comp) {
  return function ConnectedLoading(props) {
    return _react.default.createElement(Loading, _extends({
      component: Comp
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Loading.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Loading.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _shared = __webpack_require__(9);

var _ = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    _classCallCheck(this, Prefetch);

    return _possibleConstructorReturn(this, _getPrototypeOf(Prefetch).apply(this, arguments));
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, type, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, path = _this$props.path, onLoad = _this$props.onLoad, type = _this$props.type;
                cleanedPath = (0, _shared.cleanPath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath, {
                  type: type
                });

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return (0, _shared.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  type: null,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(16));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _createBrowserHistory = _interopRequireDefault(__webpack_require__(61));

var _createMemoryHistory = _interopRequireDefault(__webpack_require__(62));

var _createHashHistory = _interopRequireDefault(__webpack_require__(63));

var _reactRouterDom = __webpack_require__(17);

var _shared = __webpack_require__(9);

var _ = __webpack_require__(15);

var _RouterScroller = _interopRequireDefault(__webpack_require__(64));

var _DevSpinner = _interopRequireDefault(__webpack_require__(27));

var _ErrorWrapper = _interopRequireDefault(__webpack_require__(65));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Router.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router(props, context) {
    var _this;

    _classCallCheck(this, Router);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this)); // In SRR and production, synchronously register the templateID for the
    // initial path

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ready: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bootstrapRouteInfo", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var href, path, allProps, routeInfo;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof window !== 'undefined')) {
                  _context.next = 13;
                  break;
                } // Get the entry path from location


                href = decodeURIComponent(window.location.href);
                path = (0, _shared.cleanPath)(href); // Injest and cache the embedded routeInfo in the page if possible

                if (window.__routeInfo && window.__routeInfo.path === path) {
                  allProps = window.__routeInfo.allProps;
                  Object.keys(window.__routeInfo.sharedPropsHashes).forEach(function (propKey) {
                    _.propsByHash[window.__routeInfo.sharedPropsHashes[propKey]] = allProps[propKey];
                  });
                } // In dev mode, request the templateID and ready the router


                if (true) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return (0, _.getRouteInfo)(path, {
                  priority: true
                });

              case 8:
                routeInfo = _context.sent;

                if (routeInfo) {
                  (0, _.registerTemplateIDForPath)(path, routeInfo.templateID);
                }

              case 10:
                _context.prev = 10;

                _this.setState({
                  ready: true
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5,, 10, 13]]);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "patchHistoryNavigation", function (resolvedHistory) {
      // Only patch navigation once
      if (_this.patchedNavigation) {
        return;
      } // Here, we patch the push and replace methods on history so we can
      // intercept them.


      ;
      ['push', 'replace'].forEach(function (method) {
        // Hold on to the original method, we will need it.
        var originalMethod = resolvedHistory[method]; // Replace it with our own patched version

        resolvedHistory[method] =
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var _len,
              args,
              _key,
              path,
              shouldPrefetch,
              _args2 = arguments;

          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args2[_key];
                  } // Clean the path first


                  path = (0, _shared.cleanPath)(typeof args[0] === 'string' ? args[0] : args[0].path); // Notify a soft loading state

                  (0, _.setLoading)(1); // Determine as quickly as possible if we need to fetch data for this route

                  _context2.next = 5;
                  return (0, _.needsPrefetch)(path, {
                    priority: true
                  });

                case 5:
                  shouldPrefetch = _context2.sent;

                  if (!shouldPrefetch) {
                    _context2.next = 10;
                    break;
                  } // Notify with a hard loading state


                  (0, _.setLoading)(2); // Prefetch any data or templates needed with a high priority

                  _context2.next = 10;
                  return (0, _.prefetch)(path, {
                    priority: true
                  });

                case 10:
                  // Notify we're done loading
                  (0, _.setLoading)(0); // Apply the original method and arguments as if nothing happened

                  originalMethod.apply(resolvedHistory, args);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }); // Only patch navigation once :)

      _this.patchedNavigation = true;
    });

    var _routeInfo = context.routeInfo;

    var _path = (0, _shared.cleanPath)(context.staticURL);

    if (typeof window !== 'undefined') {
      _routeInfo = window.__routeInfo;
      var href = decodeURIComponent(window.location.href);
      _path = (0, _shared.cleanPath)(href);
    }

    if (_routeInfo) {
      (0, _.registerTemplateIDForPath)(_path, _routeInfo.templateID);
    }

    return _this;
  }

  _createClass(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bootstrapRouteInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          history = _this$props.history,
          type = _this$props.type,
          children = _this$props.children,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          showErrorsInProduction = _this$props.showErrorsInProduction,
          rest = _objectWithoutProperties(_this$props, ["history", "type", "children", "autoScrollToTop", "autoScrollToHash", "scrollToTopDuration", "scrollToHashDuration", "scrollToHashOffset", "showErrorsInProduction"]);

      var staticURL = this.context.staticURL;
      var context = staticURL ? {} : undefined;
      var disableRoutePrefixing = "false" === 'true';
      var ready = this.state.ready;
      var ResolvedRouter;
      var resolvedHistory; // If statically rendering, use the static router

      if (staticURL) {
        ResolvedRouter = _reactRouterDom.StaticRouter;
        resolvedHistory = undefined;
      } else {
        ResolvedRouter = _reactRouterDom.Router;
        resolvedHistory = history || global.__reactStaticRouterHistory;

        if (!resolvedHistory) {
          if (type === 'memory') {
            resolvedHistory = (0, _createMemoryHistory.default)();
          } else if (type === 'hash') {
            resolvedHistory = (0, _createHashHistory.default)();
          } else {
            var options = disableRoutePrefixing ? {} : {
              basename: "react-source-render"
            };
            resolvedHistory = (0, _createBrowserHistory.default)(options);
          }
        }

        global.__reactStaticRouterHistory = resolvedHistory;
        this.patchHistoryNavigation(resolvedHistory);
      }

      if (false) {}

      return _react.default.createElement(_ErrorWrapper.default, {
        showErrorsInProduction: showErrorsInProduction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, _extends({
        history: resolvedHistory,
        location: staticURL,
        context: context,
        basename: disableRoutePrefixing ? '' : "react-source-render"
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), _react.default.createElement(_RouterScroller.default, _extends({
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Router;
}(_react.default.Component);

exports.default = Router;

_defineProperty(Router, "defaultProps", {
  type: 'browser',
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0,
  showErrorsInProduction: false
});

_defineProperty(Router, "contextTypes", {
  staticURL: _propTypes.default.string,
  routeInfo: _propTypes.default.object
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Router, "Router", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Router.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("history/createHashHistory");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(17);

var _raf = _interopRequireDefault(__webpack_require__(34));

var _shared = __webpack_require__(9);

var _scrollTo = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller = (0, _reactRouterDom.withRouter)(
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset,
          hash = _this$props2.location.hash;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Do not scroll to top on initial page load if hash does not exist
      this.scrollToHash({
        orScrollToTop: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev) {
      if (prev.location.pathname !== this.props.location.pathname && !this.props.location.hash) {
        if (window.__noScrollTo) {
          window.__noScrollTo = false;
          return;
        }

        this.scrollToTop();
        return;
      }

      if (prev.location.hash !== this.props.location.hash) {
        this.scrollToHash();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _shared.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component));
var _default = RouterScroller;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouterScroller.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouterScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _ErrorCatcher = _interopRequireDefault(__webpack_require__(66));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/index.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ErrorWrapper = function ErrorWrapper(_ref) {
  var showErrorsInProduction = _ref.showErrorsInProduction,
      children = _ref.children;

  if ("production" === 'development' || showErrorsInProduction) {
    return _react.default.createElement(_ErrorCatcher.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, children);
  }

  return _react.default.Children.only(children);
};

ErrorWrapper.defaultProps = {
  showErrorsInProduction: false
};
var _default = ErrorWrapper;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorWrapper, "ErrorWrapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/index.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _ErrorUI = _interopRequireDefault(__webpack_require__(67));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/ErrorCatcher.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorCatcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorCatcher, _React$Component);

  function ErrorCatcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorCatcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorCatcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      errorInfo: null
    });

    return _this;
  }

  _createClass(ErrorCatcher, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any child components and re-renders with an error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error; // Fallback UI if an error occurs

      if (error) {
        return _react.default.createElement(_ErrorUI.default, _extends({}, this.state, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      }

      return _react.default.Children.only(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorCatcher;
}(_react.default.Component);

exports.default = ErrorCatcher;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorCatcher, "ErrorCatcher", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/ErrorCatcher.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(8));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/ErrorUI.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ErrorUI = function ErrorUI(_ref) {
  var error = _ref.error,
      errorInfo = _ref.errorInfo;
  return _react.default.createElement("div", {
    style: {
      margin: '1rem',
      padding: '1rem',
      background: 'rgba(0,0,0,0.05)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("pre", {
    style: {
      whiteSpace: 'normal',
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, error && error.toString())), _react.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "This error occurred here:"), _react.default.createElement("pre", {
    style: {
      color: 'red',
      overflow: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _react.default.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, errorInfo.componentStack)), _react.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "For more information, please see the console."));
};

var _default = ErrorUI;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorUI, "ErrorUI", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/ErrorUI.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorWrapper/ErrorUI.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(17);

var _reactHelmet = _interopRequireDefault(__webpack_require__(32));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Redirect.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
} //


var Redirect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Redirect).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          _this$props$delay = _this$props.delay,
          delay = _this$props$delay === void 0 ? 0 : _this$props$delay,
          fromPath = _this$props.fromPath,
          rest = _objectWithoutProperties(_this$props, ["to", "delay", "fromPath"]);

      if (typeof document === 'undefined') {
        var resolvedTo = _typeof(to) === 'object' ? to.pathname : to;

        if (!resolvedTo.includes('//')) {
          resolvedTo = "".concat("https://layershifter.github.io/react-source-render/").concat(resolvedTo === '/' ? '' : resolvedTo);
        }

        return (// ReactRouterRedirect
          _react.default.createElement(_reactHelmet.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, fromPath && _react.default.createElement("title", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "".concat("https://layershifter.github.io/react-source-render/").concat(fromPath === '/' ? '' : fromPath)), _react.default.createElement("link", {
            rel: "canonical",
            href: resolvedTo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }), _react.default.createElement("meta", {
            name: "robots",
            content: "noindex",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "content-type",
            content: "text/html; charset=utf-8",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }), _react.default.createElement("meta", {
            httpEquiv: "refresh",
            content: "".concat(delay, "; url=").concat(resolvedTo),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }))
        );
      }

      return _react.default.createElement(_reactRouterDom.Redirect, _extends({
        to: to
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Redirect;
}(_react.default.Component);

exports.default = Redirect;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Redirect, "Redirect", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Redirect.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.Link = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(17);

var _shared = __webpack_require__(9);

var _PrefetchWhenSeen = _interopRequireDefault(__webpack_require__(33));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} //
// Detects internal link url schemas


function isRoutingUrl(to) {
  if (typeof to === 'undefined') return false;
  return !to.match(/^([A-z]?)+:/) && // starts with external protocol
  !to.match(/^#/) && // starts with hash fragment
  !to.match(/^[a-z]{1,10}:\/\//) // starts with double slash protocol
  ;
}

var reactRouterProps = ['activeClassName', 'activeStyle', 'exact', 'isActive', 'location', 'strict', 'to', 'replace'];

function SmartLink(_ref) {
  var _ref$prefetch = _ref.prefetch,
      prefetch = _ref$prefetch === void 0 ? true : _ref$prefetch,
      _ref$scrollToTop = _ref.scrollToTop,
      scrollToTop = _ref$scrollToTop === void 0 ? true : _ref$scrollToTop,
      _onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["prefetch", "scrollToTop", "onClick"]);

  var to = rest.to;
  var resolvedTo = to;

  if ((0, _shared.isObject)(to)) {
    if (!to.pathname && to.path) {
      console.warn('You are using the `path` key in a <Link to={...} /> when you should be using the `pathname` key. This will be deprecated in future versions!');
      to.pathname = to.path;
      delete to.path;
      resolvedTo = to.pathname;
    } else if (to.pathname) {
      resolvedTo = to.pathname;
    }
  } // Router Link


  if (isRoutingUrl(resolvedTo)) {
    var finalRest = _objectSpread({}, rest, {
      onClick: function onClick(e) {
        if (typeof document !== 'undefined' && !scrollToTop) {
          window.__noScrollTo = true;
        }

        if (_onClick) {
          _onClick(e);
        }
      }
    });

    if (prefetch) {
      return _react.default.createElement(_PrefetchWhenSeen.default, {
        path: resolvedTo,
        type: prefetch,
        render: function render(_ref2) {
          var handleRef = _ref2.handleRef;
          return _react.default.createElement(_reactRouterDom.NavLink, _extends({}, finalRest, {
            innerRef: handleRef,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }

    return _react.default.createElement(_reactRouterDom.NavLink, _extends({}, finalRest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }));
  } // Browser Link


  var children = rest.children,
      aRest = _objectWithoutProperties(rest, ["children"]);

  aRest.href = aRest.to;
  delete aRest.to;
  reactRouterProps.filter(function (prop) {
    return aRest[prop];
  }).forEach(function (prop) {
    console.warn("Warning: ".concat(prop, " makes no sense on a <Link to=\"").concat(aRest.href, "\">."));
  });
  reactRouterProps.forEach(function (prop) {
    return delete aRest[prop];
  });
  return _react.default.createElement("a", _extends({}, aRest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), children);
}

var Link = SmartLink;
exports.Link = Link;
var NavLink = SmartLink;
exports.NavLink = NavLink;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isRoutingUrl, "isRoutingUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js");
  reactHotLoader.register(reactRouterProps, "reactRouterProps", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js");
  reactHotLoader.register(SmartLink, "SmartLink", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js");
  reactHotLoader.register(Link, "Link", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js");
  reactHotLoader.register(NavLink, "NavLink", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Link.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-static/routes");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/html");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("brace/mode/sh");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(12);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-hot-loader"
var external_react_hot_loader_ = __webpack_require__(1);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Segment/Segment"
var Segment_ = __webpack_require__(4);
var Segment_default = /*#__PURE__*/__webpack_require__.n(Segment_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Image/Image"
var Image_ = __webpack_require__(24);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Icon/Icon"
var Icon_ = __webpack_require__(10);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/List/List"
var List_ = __webpack_require__(7);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Header/Header"
var Header_ = __webpack_require__(6);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/collections/Grid/Grid"
var Grid_ = __webpack_require__(13);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Divider/Divider"
var Divider_ = __webpack_require__(40);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Container/Container"
var Container_ = __webpack_require__(29);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/collections/Table/Table"
var Table_ = __webpack_require__(2);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/Props.js






var Props_Usage = function Usage() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Header_default.a, {
    as: "h2"
  }, "Component props"), external_react_default.a.createElement(Segment_default.a, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, external_react_default.a.createElement(Table_default.a, {
    basic: "very"
  }, external_react_default.a.createElement(Table_default.a.Body, null, external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "babelConfig")), external_react_default.a.createElement(Table_default.a.Cell, null, "A config for Babel.")), external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "onError")), external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("p", null, "A callback that will be called after the render process that ended with an error."), external_react_default.a.createElement(List_default.a, {
    bulleted: true
  }, external_react_default.a.createElement(List_default.a.Item, null, external_react_default.a.createElement("code", null, "{Error}", " error")), external_react_default.a.createElement(List_default.a.Item, null, external_react_default.a.createElement("code", null, "{Object}", " props"))))), external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "onSuccess")), external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("p", null, "A callback that will be called after the render process that ended successfully."), external_react_default.a.createElement(List_default.a, {
    bulleted: true
  }, external_react_default.a.createElement(List_default.a.Item, null, external_react_default.a.createElement("code", null, "{Null}", " null")), external_react_default.a.createElement(List_default.a.Item, null, external_react_default.a.createElement("code", null, "{Object}", " props"))))), external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "renderHtml")), external_react_default.a.createElement(Table_default.a.Cell, null, "An option that controls rendering of HTML with ReactDOM server, it allows to omit rendering when you are using portals.")), external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "resolver")), external_react_default.a.createElement(Table_default.a.Cell, null, "A function for the imports resolution.")), external_react_default.a.createElement(Table_default.a.Row, null, external_react_default.a.createElement(Table_default.a.Cell, null, external_react_default.a.createElement("code", null, "source")), external_react_default.a.createElement(Table_default.a.Cell, null, "A string that contains the source code."))))));
};

/* harmony default export */ var Props = (Props_Usage);
// EXTERNAL MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/Sandbox/index.js
var Sandbox = __webpack_require__(41);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Label/Label"
var Label_ = __webpack_require__(11);
var Label_default = /*#__PURE__*/__webpack_require__.n(Label_);

// EXTERNAL MODULE: external "semantic-ui-react/dist/commonjs/elements/Button/Button"
var Button_ = __webpack_require__(42);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(30);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/Title.js









var Title_Title = function Title(_ref) {
  var version = _ref.version;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(lib["Head"], null, external_react_default.a.createElement("title", null, "React Sandbox Render")), external_react_default.a.createElement(Segment_default.a, {
    color: "teal",
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: "20em",
      padding: "1em 0em"
    },
    vertical: true
  }, external_react_default.a.createElement(Image_default.a, {
    centered: true,
    size: "small",
    src: "/logo-white.png"
  }), external_react_default.a.createElement(Header_default.a, {
    as: "h1",
    content: external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("span", null, "React Source Render"), external_react_default.a.createElement(Label_default.a, {
      size: "small"
    }, version)),
    inverted: true,
    style: {
      fontSize: "3em",
      fontWeight: "normal"
    },
    subheader: "An irreplaceable thing for sandbox with React."
  }), external_react_default.a.createElement(Button_default.a, {
    as: "a",
    color: "black",
    compact: true,
    content: "Check source on Github",
    href: "https://github.com/layershifter/react-source-render",
    icon: "github",
    target: "_blank"
  })));
};

/* harmony default export */ var components_Title = (Object(lib["withSiteData"])(Title_Title));
// EXTERNAL MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/QuickStart/index.js
var QuickStart = __webpack_require__(43);

// EXTERNAL MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/components/Usage/index.js
var components_Usage = __webpack_require__(44);

// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/App.js















var App_App = function App() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("style", null, "body {background: #f7f7f7}"), external_react_default.a.createElement(components_Title, null), external_react_default.a.createElement(Container_default.a, null, external_react_default.a.createElement(Divider_default.a, {
    hidden: true
  }), external_react_default.a.createElement(Header_default.a, {
    as: "h2"
  }, "Solved problem"), external_react_default.a.createElement(Segment_default.a, {
    basic: true,
    style: {
      background: "rgb(255, 255, 255)",
      boxShadow: "rgb(204, 204, 204) 0px 1px 2px"
    }
  }, external_react_default.a.createElement("p", null, "This component was initially designed to replace the", " ", external_react_default.a.createElement("a", {
    href: "https://github.com/Semantic-Org/Semantic-UI-React/blob/e786724c73a6446fc5e86828ba446c18d4a9baab/docs/src/components/ComponentDoc/ComponentExample/renderExampleSourceCode.js",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "existing render"), " ", "playground in Semantic UI React docs. React Source Render is designed to be used with", " ", external_react_default.a.createElement("a", {
    href: "https://babeljs.io/docs/en/next/babel-standalone.html",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Babel Standalone"), ". The component consists from the parts:"), external_react_default.a.createElement(List_default.a, {
    bulleted: true
  }, external_react_default.a.createElement(List_default.a.Item, null, "rendering component"), external_react_default.a.createElement(List_default.a.Item, null, "Babel plugin to transform imports and resoolve them"), external_react_default.a.createElement(List_default.a.Item, null, "Babel plugin to transform code to IIFE"))), external_react_default.a.createElement(QuickStart["a" /* default */], null), external_react_default.a.createElement(Sandbox["a" /* default */], null), external_react_default.a.createElement(Props, null), external_react_default.a.createElement(components_Usage["a" /* default */], null)), external_react_default.a.createElement(Segment_default.a, {
    basic: true,
    inverted: true
  }, external_react_default.a.createElement(Grid_default.a, {
    as: Container_default.a,
    columns: 2
  }, external_react_default.a.createElement(Grid_default.a.Column, null, external_react_default.a.createElement("a", {
    href: "https://github.com/layershifter",
    rel: "noopener noreferrer",
    title: "Follow me on Github"
  }, external_react_default.a.createElement(Icon_default.a, {
    color: "grey",
    name: "github",
    size: "large"
  })), external_react_default.a.createElement("a", {
    href: "https://www.linkedin.com/in/layershifter/",
    rel: "noopener noreferrer",
    title: "Check my profile in LinkedIn"
  }, external_react_default.a.createElement(Icon_default.a, {
    color: "grey",
    name: "linkedin",
    size: "large"
  }))), external_react_default.a.createElement(Grid_default.a.Column, {
    textAlign: "right"
  }, "Proudly powered by", external_react_default.a.createElement("a", {
    href: "https://react.semantic-ui.com",
    rel: "noopener noreferrer",
    style: {
      color: "#fff"
    },
    target: "_blank"
  }, external_react_default.a.createElement(Image_default.a, {
    style: {
      height: 20,
      marginRight: 2
    },
    spaced: true,
    src: "/logo-sui.png"
  }), " Semantic UI")))));
};

/* harmony default export */ var docs_App = (App_App);
// CONCATENATED MODULE: /home/layershifter/WebstormProjects/react-source-render/docs/index.js


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ var docs = __webpack_exports__["default"] = (docs_App); // Render your app

if (typeof document !== "undefined") {
  var renderMethod =  false ? undefined : external_react_dom_default.a.hydrate || external_react_dom_default.a.render;

  var docs_render = function render(Comp) {
    renderMethod(external_react_default.a.createElement(external_react_hot_loader_["AppContainer"], null, external_react_default.a.createElement(Comp, null)), document.getElementById("root"));
  }; // Render!


  docs_render(docs_App); // Hot Module Replacement

  if (false) {}
}

/***/ })
/******/ ]);
});