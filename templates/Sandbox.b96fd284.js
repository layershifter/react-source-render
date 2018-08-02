(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(106)),o=d(r(660)),u=d(r(108)),a=d(r(64)),i=d(r(107)),l=d(r(272)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),f=d(r(650)),s=d(r(669));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(659),r(680),r(651);var h={react:c.default},O=function(e){return h[e]},g=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return _(v(v(r=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}(this,(e=m(t)).call.apply(e,[this].concat(o))))),"state",{markup:"",source:'import React from "react";\n\nconst Example = <div>Hello world!</div>;\n \nexport default Example\n'}),_(v(v(r)),"handleSourceChange",function(e){return r.setState({source:e})}),_(v(v(r)),"handleRenderError",function(e){return r.setState({error:e})}),_(v(v(r)),"handleRenderSuccess",function(e,t){var n=t.markup;return r.setState({error:e,markup:n})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c.Component),function(e,t,r){t&&b(e.prototype,t),r&&b(e,r)}(t,[{key:"render",value:function(){var e=this.state,t=e.error,r=e.markup,d=e.source;return c.default.createElement(c.Fragment,null,c.default.createElement(i.default,{as:"h2"},"Live sandbox"),c.default.createElement(n.default,{basic:!0,attached:"top",style:{background:"rgb(255, 255, 255)",boxShadow:"rgb(204, 204, 204) 0px 1px 2px"}},c.default.createElement(l.default,{columns:2,divided:!0},c.default.createElement(l.default.Column,null,c.default.createElement(u.default,{attached:"top left",color:"teal",size:"tiny"},"Preview"),c.default.createElement(s.default,{onError:this.handleRenderError,onSuccess:this.handleRenderSuccess,resolver:O,source:d})),c.default.createElement(l.default.Column,null,c.default.createElement(u.default,{attached:"top right",color:"teal",size:"tiny"},"Rendered HTML"),c.default.createElement(f.default,{editorProps:{$blockScrolling:1/0},highlightActiveLine:!1,highlightGutterLine:!1,maxLines:1/0,mode:"html",name:"html-editor",readOnly:!0,showCursor:!1,showGutter:!1,showPrintMargin:!1,tabSize:2,theme:"github",value:r,width:"100%"})))),c.default.createElement(n.default,{attached:!!t||"bottom",style:{padding:0}},c.default.createElement(f.default,{editorProps:{$blockScrolling:1/0},maxLines:1/0,minLines:10,mode:"jsx",name:"jsx-editor",onChange:this.handleSourceChange,tabSize:2,theme:"github",value:d,width:"100%"}),c.default.createElement(u.default,{as:"a",attached:"bottom right",color:"black",href:"https://github.com/layershifter/react-source-render/blob/master/docs/components/Sandbox",size:"tiny",target:"blank"},c.default.createElement(a.default,{name:"github"})," View source")),t&&c.default.createElement(o.default,{attached:"bottom",error:!0},c.default.createElement("pre",null,t.toString())))}}]),t}();t.default=g},658:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"exportToIifePlugin",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"importResolverPlugin",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"resolverId",{enumerable:!0,get:function(){return o.resolverId}});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(675)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(676))},669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(670))},670:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(2)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),u=r(109),a=r(648),i=c(r(671)),l=c(r(679));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return m(b(b(r=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}(this,(e=d(t)).call.apply(e,[this].concat(o))))),"state",{element:null}),m(b(b(r)),"handleRef",function(e){r.ref=e}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.PureComponent),function(e,t,r){t&&s(e.prototype,t),r&&s(e,r)}(t,[{key:"componentDidMount",value:function(){this.renderElement()}},{key:"componentDidUpdate",value:function(){this.renderElement()}},{key:"componentWillUnmount",value:function(){this.frameId&&cancelAnimationFrame(this.frameId),this.ref&&(0,u.unmountComponentAtNode)(this.ref)}},{key:"renderElement",value:function(){var e=this;this.frameId=requestAnimationFrame(function(){var t=e.props,r=t.babelConfig,n=t.onError,o=t.onSuccess,l=t.resolver,c=t.source,f=e.state.element;(0,u.unmountComponentAtNode)(e.ref);try{var s=(0,i.default)(r,l,c),d=(0,a.renderToStaticMarkup)(s);(0,u.render)(s,e.ref),o(null,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){m(e,t,r[t])})}return e}({},e.props,{element:s,markup:d})),e.setState({element:s})}catch(t){n(t,e.props),(0,u.render)(f,e.ref)}})}},{key:"render",value:function(){return o.default.createElement("div",{ref:this.handleRef})}}]),t}();t.default=y,m(y,"propTypes",{babelConfig:n.default.object,onError:n.default.func,onSuccess:n.default.func,resolver:n.default.func.isRequired,source:n.default.string.isRequired}),m(y,"defaultProps",{babelConfig:{},onError:l.default,onSuccess:l.default})},671:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(672))},672:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(673)),o=u(r(677));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t,r){return(0,n.default)((0,o.default)(e,r),t)};t.default=a},673:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _fastMemoize=_interopRequireDefault(__webpack_require__(674)),_react=__webpack_require__(0),_babel=__webpack_require__(658);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var wrapSource=function(e){return"function"==typeof e?(0,_react.createElement)(e):e},evalSource=(0,_fastMemoize.default)(function(code,resolver){return wrapSource(eval("var ".concat(_babel.resolverId," = resolver; ").concat(code)))}),_default=evalSource;exports.default=_default},675:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t=e.types;return{visitor:{ExportDefaultDeclaration:function(e){var r=e.find(function(e){return e.isProgram()}),n=e.node.declaration;if(t.isClassDeclaration(n))return e.replaceWith(n),void r.pushContainer("body",t.ReturnStatement(t.identifier(n.id.name)));r.pushContainer("body",t.ReturnStatement(t.identifier(n.name))),e.remove()},Program:{exit:function(e){e.replaceWith(function(e,t){return e.program([e.expressionStatement(e.callExpression(e.functionExpression(null,[],e.blockStatement(t)),[]))])}(t,e.node.body)),e.stop()}}}}};t.default=n},676:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.resolverId=void 0;t.resolverId="__resolverFn__";var n=function(e){var t=e.types;return{visitor:{ImportDeclaration:function(e){var r=e.node.specifiers.map(function(r){return t.isImportDefaultSpecifier(r)||t.isImportNamespaceSpecifier(r)?function(e,t,r){return e.variableDeclaration("const",[e.variableDeclarator(e.identifier(t.local.name),e.callExpression(e.identifier("__resolverFn__"),[e.stringLiteral(r.value)]))])}(t,r,e.node.source):t.isImportSpecifier(r)?function(e,t,r){return e.variableDeclaration("const",[e.variableDeclarator(e.objectPattern([e.objectProperty(e.identifier(t.imported.name),e.identifier(t.imported.name),!1,!0)]),e.callExpression(e.identifier("__resolverFn__"),[e.stringLiteral(r.value)]))])}(t,r,e.node.source):null});e.replaceWithMultiple(r)}}}};t.default=n},677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(649)),o=function(e){return e&&e.__esModule?e:{default:e}}(r(678)),u=r(658);n.registerPlugin("export-to-iife",u.exportToIifePlugin),n.registerPlugin("import-resolver",u.importResolverPlugin);var a=function(e,t){var r=(0,o.default)({plugins:["import-resolver","export-to-iife"],presets:["react"]},e);return n.transform(t,r).code};t.default=a},679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){};t.default=n}}]);