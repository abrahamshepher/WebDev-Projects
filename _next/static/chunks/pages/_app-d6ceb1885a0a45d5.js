(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(8970)}])},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,h=a.disabled||!g,i=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(i.current&&(i.current(),i.current=void 0),!h&&!l)return o&&o.tagName&&(i.current=j(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==i.current||i.current(),i.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,h,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(9311),g="function"==typeof IntersectionObserver,h=new Map,i=[];function j(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),h.delete(e);var b=i.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&i.splice(b,1)}}}function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=i.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=h.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},i.push(c),h.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},8970:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return p}});var d=c(1799),e=c(5893),f=c(7294),g=function(){return(0,e.jsx)("section",{className:"pt-[3rem] ",children:(0,e.jsx)("footer",{className:"text-gray-600 body-font",children:(0,e.jsx)("div",{className:"bg-secondary",children:(0,e.jsx)("div",{className:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",children:(0,e.jsxs)("p",{className:"text-gray-500 text-sm text-center sm:text-left",children:["\xa9 2022 Techaholix -",(0,e.jsx)("a",{href:"https://twitter.com/knyttneve",rel:"noopener noreferrer",className:"text-gray-600 ml-1",target:"_blank",children:"All Rights Reserved"})]})})})})})},h=c(8357);function i(a){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(a)}var j=c(3854);function k(a){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"}}]}]})(a)}var l=c(1664),m=c.n(l),n=function(){var a=(0,f.useState)(!1),b=a[0],c=a[1],d=(0,f.useState)(!1),g=d[0],h=d[1];return(0,f.useEffect)(function(){var a=function(){window.scrollY>=90?c(!0):c(!1)};window.addEventListener("scroll",a)},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("nav",{className:"".concat(b?"bg-white":" "," p-5 md:hidden sticky top-0 z-50"),children:(0,e.jsxs)("div",{className:"flex justify-between items-center",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{className:"w-[8rem] relative bottom-[4px]",src:"https://i.postimg.cc/mDHSWV31/logo2.png",alt:"logo"})}),(0,e.jsx)("div",{className:"text-3xl",children:g?(0,e.jsx)(k,{onClick:function(){return h(!1)}}):(0,e.jsx)(i,{onClick:function(){return h(!0)}})}),g&&(0,e.jsx)("div",{className:"bg-slate-100 border rounded-lg absolute right-6 top-[40px] mt-[1rem] min-w-[200px] shadow-md flex flex-col justify-end items-center",children:(0,e.jsxs)("div",{className:"list-none p-4 space-y-4 font-semibold text-center",children:[(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Home"})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/services",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Services "})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/portfolio",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Portfolio"})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/contact",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Contact"})})})]})})]})}),(0,e.jsx)("nav",{className:"".concat(b?"bg-white":" "," p-5 md:block hidden sticky top-0 z-50"),children:(0,e.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{className:"w-[8rem] relative bottom-[4px]",src:"https://i.postimg.cc/mDHSWV31/logo2.png",alt:"logo"})}),(0,e.jsx)("div",{children:(0,e.jsxs)("ul",{className:"flex space-x-6 text-secondary font-semibold ",children:[(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Home"})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/services",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Services "})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/portfolio",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Portfolio"})})}),(0,e.jsx)("li",{children:(0,e.jsx)(m(),{href:"/contact",children:(0,e.jsx)("a",{className:"hover:text-primary",children:"Contact"})})})]})}),(0,e.jsx)("div",{children:(0,e.jsx)(m(),{href:"/contact",children:(0,e.jsxs)("button",{className:"flex items-center bg-primary py-2 px-7 text-white rounded font-semibold hover:bg-secondary",children:[(0,e.jsx)("a",{children:"Let's Talk"}),(0,e.jsx)("span",{className:"ml-1",children:(0,e.jsx)(j.WFu,{})})]})})})]})})]})},o=n;c(906);var p=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o,{}),(0,e.jsx)(b,(0,d.Z)({},c)),(0,e.jsx)(g,{})]})}},906:function(){},1664:function(a,b,c){a.exports=c(8418)},3854:function(a,b,c){"use strict";c.d(b,{JbR:function(){return g},WFu:function(){return e},gx3:function(){return f}});var d=c(8357);function e(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(a)}function f(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",clipRule:"evenodd"}}]})(a)}function g(a){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(a)}},8357:function(a,b,c){"use strict";c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])