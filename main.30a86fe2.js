!function(e){function t(t){for(var l,u,o=t[0],d=t[1],c=t[2],i=0,s=[];i<o.length;i++)u=o[i],r[u]&&s.push(r[u][0]),r[u]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(l=!1)}l&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var l={},r={2:0},a=[];function u(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise(function(t,l){n=r[e]=[t,l]});t.push(n[2]=l);var a,o=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=function(e){return u.p+"templates/"+({0:"vendors~QuickStart~Sandbox~Usage",1:"vendors~Sandbox~Usage",3:"Sandbox",4:"QuickStart",5:"Usage",7:"vendors~Sandbox",8:"vendors~QuickStart"}[e]||e)+"."+{0:"3bae6134",1:"c1243ed9",3:"50453177",4:"a0b21739",5:"5a11fe9c",7:"3bb2f0af",8:"b51be31d"}[e]+".js"}(e),a=function(t){d.onerror=d.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var l=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+l+": "+a+")");u.type=l,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:d})},12e4);d.onerror=d.onload=a,o.appendChild(d)}return Promise.all(t)},u.m=e,u.c=l,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)u.d(n,l,function(t){return e[t]}.bind(null,l));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/react-source-render/",u.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var f=d;a.push([275,6]),n()}({0:function(e,t){e.exports=React},108:function(e,t){e.exports=ReactDOM},165:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="object"===("undefined"==typeof document?"undefined":l(document))&&null!==document,a="object"===("undefined"==typeof window?"undefined":l(window))&&null!==window&&window.self===window,u=r&&a;t.default=u},2:function(e,t){e.exports=PropTypes},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),r=o(n(108)),a=n(3),u=o(n(277));function o(e){return e&&e.__esModule?e:{default:e}}var d=u.default;if(t.default=d,"undefined"!=typeof document){var c=r.default.hydrate||r.default.render;!function(e){c(l.default.createElement(a.AppContainer,null,l.default.createElement(e,null)),document.getElementById("root"))}(u.default)}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=v(n(106)),r=v(n(102)),a=v(n(76)),u=v(n(243)),o=v(n(107)),d=v(n(271)),c=v(n(568)),f=v(n(569)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};l.get||l.set?Object.defineProperty(t,n,l):t[n]=e[n]}return t.default=e,t}(n(0)),s=v(n(570)),m=v(n(576)),p=v(n(581)),b=v(n(641)),E=v(n(642));function v(e){return e&&e.__esModule?e:{default:e}}var h=function(){return i.default.createElement(i.Fragment,null,i.default.createElement("style",null,"body {background: #f7f7f7}"),i.default.createElement(p.default,null),i.default.createElement(f.default,null,i.default.createElement(c.default,{hidden:!0}),i.default.createElement(o.default,{as:"h2"},"Solved problem"),i.default.createElement(l.default,{basic:!0,style:{background:"rgb(255, 255, 255)",boxShadow:"rgb(204, 204, 204) 0px 1px 2px"}},i.default.createElement("p",null,"This component was initially designed to replace the"," ",i.default.createElement("a",{href:"https://github.com/Semantic-Org/Semantic-UI-React/blob/e786724c73a6446fc5e86828ba446c18d4a9baab/docs/src/components/ComponentDoc/ComponentExample/renderExampleSourceCode.js",rel:"noopener noreferrer",target:"_blank"},"existing render")," ","playground in Semantic UI React docs. React Source Render is designed to be used with"," ",i.default.createElement("a",{href:"https://babeljs.io/docs/en/next/babel-standalone.html",rel:"noopener noreferrer",target:"_blank"},"Babel Standalone"),". The component consists from the parts:"),i.default.createElement(u.default,{bulleted:!0},i.default.createElement(u.default.Item,null,"rendering component"),i.default.createElement(u.default.Item,null,"Babel plugin to transform imports and resoolve them"),i.default.createElement(u.default.Item,null,"Babel plugin to transform code to IIFE"))),i.default.createElement(b.default,null),i.default.createElement(m.default,null),i.default.createElement(s.default,null),i.default.createElement(E.default,null)),i.default.createElement(l.default,{basic:!0,inverted:!0},i.default.createElement(d.default,{as:f.default,columns:2},i.default.createElement(d.default.Column,null,i.default.createElement("a",{href:"https://github.com/layershifter",rel:"noopener noreferrer",title:"Follow me on Github"},i.default.createElement(a.default,{color:"grey",name:"github",size:"large"})),i.default.createElement("a",{href:"https://www.linkedin.com/in/layershifter/",rel:"noopener noreferrer",title:"Check my profile in LinkedIn"},i.default.createElement(a.default,{color:"grey",name:"linkedin in",size:"large"}))),i.default.createElement(d.default.Column,{textAlign:"right"},"Proudly powered by",i.default.createElement("a",{href:"https://react.semantic-ui.com",rel:"noopener noreferrer",style:{color:"#fff"},target:"_blank"},i.default.createElement(r.default,{style:{height:20,marginRight:2},spaced:!0,src:"/logo-sui.png"})," Semantic UI")))))};t.default=h},570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(571)),r=d(n(106)),a=d(n(243)),u=d(n(107)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};l.get||l.set?Object.defineProperty(t,n,l):t[n]=e[n]}return t.default=e,t}(n(0));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement(o.Fragment,null,o.default.createElement(u.default,{as:"h2"},"Component props"),o.default.createElement(r.default,{basic:!0,style:{background:"rgb(255, 255, 255)",boxShadow:"rgb(204, 204, 204) 0px 1px 2px"}},o.default.createElement(l.default,{basic:"very"},o.default.createElement(l.default.Body,null,o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"babelConfig")),o.default.createElement(l.default.Cell,null,"A config for Babel.")),o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"onError")),o.default.createElement(l.default.Cell,null,o.default.createElement("p",null,"A callback that will be called after the render process that ended with an error."),o.default.createElement(a.default,{bulleted:!0},o.default.createElement(a.default.Item,null,o.default.createElement("code",null,"{Error}"," error")),o.default.createElement(a.default.Item,null,o.default.createElement("code",null,"{Object}"," props"))))),o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"onError")),o.default.createElement(l.default.Cell,null,o.default.createElement("p",null,"A callback that will be called after the render process that ended successfully."),o.default.createElement(a.default,{bulleted:!0},o.default.createElement(a.default.Item,null,o.default.createElement("code",null,"{Null}"," null")),o.default.createElement(a.default.Item,null,o.default.createElement("code",null,"{Object}"," props"))))),o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"onSuccess")),o.default.createElement(l.default.Cell,null)),o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"resolver")),o.default.createElement(l.default.Cell,null,"A function for the imports resolution.")),o.default.createElement(l.default.Row,null,o.default.createElement(l.default.Cell,null,o.default.createElement("code",null,"source")),o.default.createElement(l.default.Cell,null,"A string that contains the source code."))))))};t.default=c},576:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(162)),r=o(n(163)),a=o(n(164)),u=o(n(104));function o(e){return e&&e.__esModule?e:{default:e}}var d=o(n(165)).default?(0,u.default)((0,r.default)({id:"./Sandbox",file:"C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\Sandbox\\index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(7),n.e(3)]).then(n.t.bind(null,272,7))]).then(function(e){return e[0]})},path:function(){return l.default.join(e,"./Sandbox")},resolve:function(){return 272},chunkName:function(){return"Sandbox"}}),{loading:function(){return React.createElement(a.default,{active:!0,inline:"centered"})}}):function(){return null};t.default=d}).call(this,"/")},577:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=577},579:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=579},581:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(106)),r=f(n(172)),a=f(n(102)),u=f(n(107)),o=f(n(2)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};l.get||l.set?Object.defineProperty(t,n,l):t[n]=e[n]}return t.default=e,t}(n(0)),c=n(582);function f(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.version;return d.default.createElement(d.Fragment,null,d.default.createElement(c.Head,null,d.default.createElement("title",null,"React Sandbox Render")),d.default.createElement(l.default,{color:"teal",inverted:!0,textAlign:"center",style:{minHeight:"20em",padding:"1em 0em"},vertical:!0},d.default.createElement(a.default,{centered:!0,size:"small",src:"/logo-white.png"}),d.default.createElement(u.default,{as:"h1",content:"React Source Render",inverted:!0,style:{fontSize:"3em",fontWeight:"normal"},subheader:"An irreplaceable thing for sandbox with React."}),d.default.createElement(r.default,null,t)))};i.propTypes={version:o.default.string.isRequired};var s=(0,c.withSiteData)(i);t.default=s},641:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(162)),r=o(n(163)),a=o(n(164)),u=o(n(104));function o(e){return e&&e.__esModule?e:{default:e}}var d=o(n(165)).default?(0,u.default)((0,r.default)({id:"./QuickStart",file:"C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\QuickStart\\index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(8),n.e(4)]).then(n.t.bind(null,273,7))]).then(function(e){return e[0]})},path:function(){return l.default.join(e,"./QuickStart")},resolve:function(){return 273},chunkName:function(){return"QuickStart"}}),{loading:function(){return React.createElement(a.default,{active:!0,inline:"centered"})}}):function(){return null};t.default=d}).call(this,"/")},642:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(162)),r=o(n(163)),a=o(n(164)),u=o(n(104));function o(e){return e&&e.__esModule?e:{default:e}}var d=o(n(165)).default?(0,u.default)((0,r.default)({id:"./Usage",file:"C:\\Users\\value\\WebstormProjects\\react-source-render\\docs\\components\\Usage\\index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.t.bind(null,274,7))]).then(function(e){return e[0]})},path:function(){return l.default.join(e,"./Usage")},resolve:function(){return 274},chunkName:function(){return"Usage"}}),{loading:function(){return React.createElement(a.default,{active:!0,inline:"centered"})}}):function(){return null};t.default=d}).call(this,"/")},643:function(e,t){e.exports=ReactDOMServer},644:function(e,t){e.exports=Babel}});