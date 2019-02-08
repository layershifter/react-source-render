webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/babel/import-resolver-plugin.js":
/*!*********************************************!*\
  !*** ./src/babel/import-resolver-plugin.js ***!
  \*********************************************/
/*! exports provided: resolverId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolverId", function() { return resolverId; });
var resolverId = "__resolverFn__";

var createVariableDeclaration = function createVariableDeclaration(t, specifier, source) {
  return t.variableDeclaration("const", [t.variableDeclarator(t.identifier(specifier.local.name), t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]))]);
};

var createDeclaration = function createDeclaration(t, specifier, source) {
  return t.variableDeclaration("const", [t.variableDeclarator(t.identifier(t.identifier(specifier.local.name)), t.memberExpression(t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]), t.identifier(specifier.imported.name)))]);
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
            return createDeclaration(t, specifier, path.node.source);
          }

          return null;
        });
        path.replaceWithMultiple(replacements);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (importResolverPlugin);

/***/ })

})
//# sourceMappingURL=index.js.3f75b4b8cfedea134492.hot-update.js.map