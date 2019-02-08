webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/createElementFromSource/createComponentFromSource.js":
/*!******************************************************************!*\
  !*** ./src/createElementFromSource/createComponentFromSource.js ***!
  \******************************************************************/
/*! exports provided: createFunction, evalSource, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFunction", function() { return createFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalSource", function() { return evalSource; });
/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-memoize */ "./node_modules/fast-memoize/src/index.js");
/* harmony import */ var fast_memoize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_memoize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transformSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformSource */ "./src/createElementFromSource/transformSource.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../babel */ "./src/babel/index.js");



 // eslint-disable-next-line no-new-func

var createFunction = fast_memoize__WEBPACK_IMPORTED_MODULE_0___default()(function (source) {
  return new Function(_babel__WEBPACK_IMPORTED_MODULE_3__["resolverId"], source);
});
/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 */

var evalSource = fast_memoize__WEBPACK_IMPORTED_MODULE_0___default()(function (source, resolver) {
  var evalWithResolver = createFunction(source);
  return evalWithResolver(resolver);
});
/**
 * Creates a valid React Component from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 * @param {String} source A string that contains the source code
 */

var createComponentFromSource = function createComponentFromSource(babelConfig, resolver, resolverContext, source) {
  var transformed = Object(_transformSource__WEBPACK_IMPORTED_MODULE_2__["default"])(babelConfig, source);

  var resolverWithContext = function resolverWithContext(importName) {
    return resolver(importName, resolverContext);
  };

  var component = evalSource(transformed, resolverWithContext);

  if (!react_is__WEBPACK_IMPORTED_MODULE_1__["isValidElementType"](component)) {
    throw new Error("Render: your source should have a default export with a React component");
  }

  return component;
};

/* harmony default export */ __webpack_exports__["default"] = (createComponentFromSource);

/***/ })

})
//# sourceMappingURL=index.js.6a6d557f98cbc17466c4.hot-update.js.map