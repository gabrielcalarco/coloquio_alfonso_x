(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3Yj6":function(e,t,n){e.exports=n.p+"static/logo2-a6f0fa96498a77ec35e52807d1bf2f0a.png"},"7oih":function(e,t,n){"use strict";var r=n("dI71"),i=n("q1tI"),a=n.n(i),o=n("TJpk"),c=n.n(o),u=n("Wbzz"),l=(n("kpl1"),n("obyI")),s=n.n(l),A=n("sYkf"),E=n.n(A),T=n("3Yj6"),f=n.n(T),p=n("vfNa"),d=n.n(p),m=n("zHzg"),I=n.n(m),S=n("kiQ0"),g=n.n(S),h=n("mizr"),R=n.n(h),b=n("ntGo"),y=n.n(b),O=n("fSQ7"),P=n.n(O);function M(){return a.a.createElement("footer",{id:"footer"},a.a.createElement("ul",{className:"copyright"},a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("img",{src:E.a,width:"400em"}),"      ",a.a.createElement("img",{src:d.a,width:"400em",height:"64em"}),"  ",a.a.createElement("img",{src:I.a,width:"160em",height:"90em"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("img",{src:f.a,height:"80em"}),"      ",a.a.createElement("img",{src:y.a,width:"180em",height:"80em"}),"    ",a.a.createElement("img",{src:g.a,width:"400em",height:"80em"}),"  ",a.a.createElement("img",{src:P.a,width:"120em",height:"100em"})," ",a.a.createElement("img",{src:R.a,height:"80em"}),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement("br",null),a.a.createElement("ul",{className:"icons"},a.a.createElement("p",null,"Correo de contacto:"),s.a.socialLinks.map((function(e){var t=e.style,n=e.icon,r=e.name,i=e.url;return a.a.createElement("li",{key:i},a.a.createElement("a",{target:"_blank",href:i,className:"icon "+t+" "+n},a.a.createElement("span",{className:"label"},r)))}))),a.a.createElement("ul",{className:"logos"},a.a.createElement("li",null,"Publicado bajo licencia ",a.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank"},"Creative Commons Attribution-Share Alike 4.0 International"),"."),a.a.createElement("br",null)))}var C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=(e.fullMenu,this.state.isPreloaded);return a.a.createElement(u.StaticQuery,{query:"3649515864",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Alfonso X"},{name:"keywords",content:"site, web"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},a.a.createElement("div",{id:"page-wrapper"},t,a.a.createElement(M,null))))}})},t}(i.Component);t.a=C},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n("q1tI"),a=r(i),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function A(){l=e(s.map((function(e){return e.props}))),E.canUseDOM?t(l):n&&(l=n(l))}var E=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=i.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){s.push(this),A()},c.componentDidUpdate=function(){A()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),A()},c.render=function(){return a.createElement(r,this.props)},i}(i.Component);return c(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(E,"canUseDOM",u),E}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var l=a[u];if(!c(l))return!1;var s=e[l],A=t[l];if(!1===(i=n?n.call(r,s,A,l):void 0)||void 0===i&&s!==A)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=A(n("q1tI")),o=A(n("17x9")),c=A(n("8+s/")),u=A(n("bmMU")),l=n("v1p5"),s=n("hFT/");function A(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,m,I=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),S=(p=I,m=d=function(e){function t(){return T(this,t),f(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,a=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(i.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[i.type]=c,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},o)})}return r({},a,((n={})[i.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=E(i,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),a.default.createElement(p,i)},i(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(a.default.Component),d.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),A=r(n);if(s&&A){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=A)return!1;var E=t instanceof Date,T=n instanceof Date;if(E!=T)return!1;if(E&&T)return t.getTime()==n.getTime();var f=t instanceof RegExp,p=n instanceof RegExp;if(f!=p)return!1;if(f&&p)return t.toString()==n.toString();var d=i(t);if((u=d.length)!==i(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,d[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=d[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},fSQ7:function(e,t){e.exports="data:image/jpeg;base64,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"},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kiQ0:function(e,t,n){e.exports=n.p+"static/logo5-42b5b6d525d03d953155ec759846a9d9.png"},kpl1:function(e,t,n){},mizr:function(e,t,n){e.exports=n.p+"static/logo6-1026e904ef0a0a59c7cf97fd2bc5b063.png"},ntGo:function(e,t,n){e.exports=n.p+"static/logo7-1defbe7037ccd24e9d9be18768a4d7b5.png"},obyI:function(e,t){e.exports={siteTitle:"Coloquio 800A Alfonso X",manifestName:"congreso",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/coloquio_alfonso_x",heading:"Coloquio Internacional",subHeading:"Buenos Aires -  Argentina. 9, 10 y 11 de diciembre de 2021",socialLinks:[{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:coloquio800a@unsam.edu.ar"}]}},sYkf:function(e,t,n){e.exports=n.p+"static/logo1-c064714a6cd246ed688760a09473e45c.png"},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=u(n("q1tI")),o=u(n("YVoz")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},f=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},p=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&h("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var u=a[o],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),u=0;u<a.length;u++){var l=a[u],s=(0,o.default)({},i[l],r[l]);i[l]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),I=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||I:e.cancelAnimationFrame||I,h=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},R=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,A=e.styleTags,E=e.title,T=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,i),O(E,T);var f={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,a),metaTags:M(c.TAG_NAMES.META,o),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,u),scriptTags:M(c.TAG_NAMES.SCRIPT,s),styleTags:M(c.TAG_NAMES.STYLE,A)},p={},d={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=f[e].oldTags)})),t&&t(),l(e,p,d)},y=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=y(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),u=0;u<o.length;u++){var l=o[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var A=a.indexOf(l);-1!==A&&a.splice(A,1)}for(var E=a.length-1;E>=0;E--)n.removeAttribute(a[E]);i.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},C=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,i=v(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=C(n),a=y(t);return i?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+s(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return v(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){R&&g(R),e.defer?R=S((function(){b(e,(function(){R=null}))})):(b(e),R=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,A=e.title,E=void 0===A?"":A,T=e.titleAttributes;return{base:N(c.TAG_NAMES.BASE,t,r),bodyAttributes:N(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(c.ATTRIBUTE_NAMES.HTML,i,r),link:N(c.TAG_NAMES.LINK,a,r),meta:N(c.TAG_NAMES.META,o,r),noscript:N(c.TAG_NAMES.NOSCRIPT,u,r),script:N(c.TAG_NAMES.SCRIPT,l,r),style:N(c.TAG_NAMES.STYLE,s,r),title:N(c.TAG_NAMES.TITLE,{title:E,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:f([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:A(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=h}).call(this,n("yLpj"))},vfNa:function(e,t,n){e.exports=n.p+"static/logo3-cf252db88bdad0e3a019da746bd90293.png"},zHzg:function(e,t,n){e.exports=n.p+"static/logo4-d31025c382220f2d3113585d9d02f87b.png"}}]);
//# sourceMappingURL=ea09d5c2387ec203e82630a6b749316b364427f1-69a9414de6064fafe4f7.js.map