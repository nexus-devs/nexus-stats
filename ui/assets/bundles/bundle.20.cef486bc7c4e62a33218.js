(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{139:function(t,e,n){"use strict";n.r(e);var r=n(805),i=n(279);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n(741);var a=n(3),s=Object(a.a)(i.default,r.a,r.b,!1,null,"752a49f0",null);e.default=s.exports},149:function(t,e,n){"use strict";n.r(e);var r=n(204),i=n(156);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n(196);var a=n(3),s=Object(a.a)(i.default,r.a,r.b,!1,null,"e33bf702",null);e.default=s.exports},156:function(t,e,n){"use strict";n.r(e);var r=n(157),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(67));e.default={components:{progressbar:r.default}}},158:function(t,e,n){},177:function(t,e,n){"use strict";n.r(e);var r=n(178),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(153));e.default={components:{notifications:r.default},computed:{game:function(){return this.$store.state.game.name}},watch:{$route:function(t,e){this.$store.commit("setActiveGame",t.fullPath.split("/")[1])}},beforeCreate:function(){this.$store.commit("setActiveGame",this.$route.fullPath.split("/")[1])},storeModule:{name:"game",state:{name:""},mutations:{setActiveGame:function(t,e){t.name=e}}}}},179:function(t,e,n){},196:function(t,e,n){"use strict";var r=n(158);n.n(r).a},204:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module"},[e("div",{staticClass:"header"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"body"},[this._t("body")],2),this._v(" "),e("div",{staticClass:"footer"},[this._t("footer")],2),this._v(" "),e("progressbar",{ref:"progress"})],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},261:function(t,e,n){"use strict";n.r(e);var r=n(383),i=n(177);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n(262);var a=n(3),s=Object(a.a)(i.default,r.a,r.b,!1,null,"02401bce",null);e.default=s.exports},262:function(t,e,n){"use strict";var r=n(179);n.n(r).a},279:function(t,e,n){"use strict";n.r(e);var r=n(280),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},280:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=c(n(152)),i=c(n(149)),o=c(n(261)),a=c(n(281)),s=c(n(150)),u=c(n(151));function c(t){return t&&t.__esModule?t:{default:t}}if(t.browser)var f=n(740).VueTyper;else f={};e.default={components:{navigation:o.default,appContent:r.default,sidebar:s.default,sidebarSearch:u.default,vueTyper:f,noSsr:a.default,module:i.default},methods:{demoNotifications:function(){this.$store.commit("addNotification",{title:"This notification box..",body:"..to be precise."})}}}}).call(this,n(69))},281:function(t,e,n){"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,i=e.props,o=r(),a=o.default;void 0===a&&(a=[]);var s=o.placeholder;return n._isMounted?a:(n.$once("hook:mounted",function(){n.$forceUpdate()}),i.placeholderTag&&(i.placeholder||s)?t(i.placeholderTag,{class:["no-ssr-placeholder"]},i.placeholder||s):a.length>0?a.map(function(){return t(!1)}):t(!1))}};t.exports=r},282:function(t,e,n){},383:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"row"},[e("div",{staticClass:"nav-l"},[e("router-link",{attrs:{to:"/warframe",exact:""}},[e("img",{staticClass:"logo ico-h-20",attrs:{src:"/img/brand/nexushub-logo-typeface.svg",alt:"Nexushub Logo"}})])],1),this._v(" "),e("div",{staticClass:"nav-r"},[e("notifications")],1)])},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},740:function(t,e,n){
/*!
 * vue-typer v1.2.0
 * Copyright 2016-2017 Chris Nguyen
 * Released under the MIT license.
 */
t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),i=n(0),o=n(30),a=n(34),s=function(t,e,n){var u,c,f,l=t&s.F,p=t&s.G,d=t&s.S,h=t&s.P,v=t&s.B,y=t&s.W,m=p?i:i[e]||(i[e]={}),b=m.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(c=!l&&g&&void 0!==g[u])&&u in m||(f=c?g[u]:n[u],m[u]=p&&"function"!=typeof g[u]?n[u]:v&&c?o(f,r):y&&g[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[u]=f,t&s.R&&b&&!b[u]&&a(b,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:o,options:s}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=c[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));c[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(d)return h;r.parentNode.removeChild(r)}if(v){var o=p++;r=l||(l=i()),e=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(64),c={},f=s&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,d=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){d=n;var i=u(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=c[a.id];s.refs--,n.push(s)}e?r(i=u(t,e)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete c[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(36),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){n(63);var r=n(7)(n(19),n(60),"data-v-c41bac74",null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueTyper=void 0;var r=n(12),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.VueTyper=i.default,e.default={install:function(t){t.component("vue-typer",i.default)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return"number"==typeof t&&!(0,u.default)(t)&&(0,a.default)(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),a=r(o),s=n(21),u=r(s);e.default=function(t,e){return function(t,e){return i(t)&&i(e)&&t<=e}(t,e)?(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t):-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}},function(t,e,n){"use strict";function r(t,e,n){if(e!==n){var r=t[e];t[e]=t[n],t[n]=r}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){if(t instanceof Array)for(var e=t.length-1;e>0;e--){var n=(0,o.default)(0,e);r(t,e,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{animation:{type:String,default:"blink",validator:function(t){return/^solid$|^blink$|^smooth$|^phase$|^expand$/.test(t)}}},computed:{animationClass:function(){return"vue-typer-caret-"+this.animation}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{val:{type:String,default:""}},computed:{classes:function(){return{newline:0===this.val.indexOf("\n")}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),o=r(i),a=n(56),s=r(a),u=n(57),c=r(u),f=n(15),l=r(f),p=n(16),d=r(p),h=n(55),v=r(h),y={IDLE:"idle",TYPING:"typing",ERASING:"erasing",COMPLETE:"complete"},m={BACKSPACE:"backspace",SELECT_BACK:"select-back",SELECT_ALL:"select-all",CLEAR:"clear"};e.default={name:"VueTyper",components:{Caret:s.default,Char:c.default},props:{text:{type:[String,Array],required:!0,validator:function(t){return"string"==typeof t?t.length>0:t.every(function(t){return"string"==typeof t&&t.length>0})}},repeat:{type:Number,default:1/0,validator:function(t){return t>=0}},shuffle:{type:Boolean,default:!1},initialAction:{type:String,default:y.TYPING,validator:function(t){return!!t.match("^"+y.TYPING+"|"+y.ERASING+"$")}},preTypeDelay:{type:Number,default:70,validator:function(t){return t>=0}},typeDelay:{type:Number,default:70,validator:function(t){return t>=0}},preEraseDelay:{type:Number,default:2e3,validator:function(t){return t>=0}},eraseDelay:{type:Number,default:250,validator:function(t){return t>=0}},eraseStyle:{type:String,default:m.SELECT_ALL,validator:function(t){return(0,o.default)(m).some(function(e){return m[e]===t})}},eraseOnComplete:{type:Boolean,default:!1},caretAnimation:String},data:function(){return{state:y.IDLE,nextState:null,spool:[],spoolIndex:-1,previousTextIndex:-1,currentTextIndex:-1,repeatCounter:0,actionTimeout:0,actionInterval:0}},computed:{caretClasses:function(){var t=this.state===y.IDLE;return{idle:t,"pre-type":t&&this.nextState===y.TYPING,"pre-erase":t&&this.nextState===y.ERASING,typing:this.state===y.TYPING,selecting:this.state===y.ERASING&&this.isSelectionBasedEraseStyle,erasing:this.state===y.ERASING&&!this.isSelectionBasedEraseStyle,complete:this.state===y.COMPLETE}},rightCharClasses:function(){return{selected:this.state===y.ERASING&&this.isSelectionBasedEraseStyle,erased:this.state!==y.ERASING||this.state===y.ERASING&&!this.isSelectionBasedEraseStyle}},isSelectionBasedEraseStyle:function(){return!!this.eraseStyle.match("^"+m.SELECT_BACK+"|"+m.SELECT_ALL+"$")},isEraseAllStyle:function(){return!!this.eraseStyle.match("^"+m.CLEAR+"|"+m.SELECT_ALL+"$")},isDoneTyping:function(){return this.currentTextIndex>=this.currentTextLength},isDoneErasing:function(){return this.isSelectionBasedEraseStyle?this.currentTextIndex<=0&&this.previousTextIndex<=0:this.currentTextIndex<=0},onLastWord:function(){return this.spoolIndex===this.spool.length-1},shouldRepeat:function(){return this.repeatCounter<this.repeat},currentText:function(){return this.spoolIndex>=0&&this.spoolIndex<this.spool.length?this.spool[this.spoolIndex]:""},currentTextArray:function(){return(0,v.default)(this.currentText,"")},currentTextLength:function(){return this.currentTextArray.length},numLeftChars:function(){return this.currentTextIndex<0?0:this.currentTextIndex},numRightChars:function(){return this.currentTextLength-this.numLeftChars}},mounted:function(){this.init()},beforeDestroy:function(){this.cancelCurrentAction()},methods:{init:function(){if("string"==typeof this.text)this.spool=[this.text];else{var t=this.text.slice();t=t.filter(function(t){return t.length>0}),this.spool=t}this.repeatCounter=0,this.resetSpool(),this.initialAction===y.TYPING?this.startTyping():this.initialAction===y.ERASING&&(this.moveCaretToEnd(),this.onTyped())},reset:function(){this.cancelCurrentAction(),this.init()},resetSpool:function(){this.spoolIndex=0,this.shuffle&&this.spool.length>1&&(0,d.default)(this.spool)},cancelCurrentAction:function(){this.actionInterval&&(clearInterval(this.actionInterval),this.actionInterval=0),this.actionTimeout&&(clearTimeout(this.actionTimeout),this.actionTimeout=0)},shiftCaret:function(t){this.previousTextIndex=this.currentTextIndex;var e=this.currentTextIndex+t;this.currentTextIndex=Math.min(Math.max(e,0),this.currentTextLength)},moveCaretToStart:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=0},moveCaretToEnd:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=this.currentTextLength},typeStep:function(){if(!this.isDoneTyping){this.shiftCaret(1);var t=this.previousTextIndex,e=this.currentTextArray[t];this.$emit("typed-char",e,t)}this.isDoneTyping&&(this.cancelCurrentAction(),this.$nextTick(this.onTyped))},eraseStep:function(){this.isDoneErasing||(this.isEraseAllStyle?this.moveCaretToStart():this.shiftCaret(-1)),this.isDoneErasing&&(this.cancelCurrentAction(),this.$nextTick(this.onErased))},startTyping:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToStart(),this.state=y.IDLE,this.nextState=y.TYPING,this.actionTimeout=setTimeout(function(){t.state=y.TYPING,t.typeStep(),t.isDoneTyping||(t.actionInterval=setInterval(t.typeStep,t.typeDelay))},this.preTypeDelay))},startErasing:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToEnd(),this.state=y.IDLE,this.nextState=y.ERASING,this.actionTimeout=setTimeout(function(){t.state=y.ERASING,t.eraseStep(),t.isDoneErasing||(t.actionInterval=setInterval(t.eraseStep,t.eraseDelay))},this.preEraseDelay))},onTyped:function(){this.$emit("typed",this.currentText),this.onLastWord?this.eraseOnComplete||this.shouldRepeat?this.startErasing():this.onComplete():this.startErasing()},onErased:function(){this.$emit("erased",this.currentText),this.onLastWord?this.shouldRepeat?(this.repeatCounter++,this.resetSpool(),this.startTyping()):this.onComplete():(this.spoolIndex++,this.startTyping())},onComplete:function(){this.state=y.COMPLETE,this.nextState=null,this.$emit("completed")}},watch:{text:function(t,e){t===e||(0,l.default)(t,e)||this.reset()},repeat:function(){this.reset()},shuffle:function(){this.reset()}}}},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){t.exports={default:n(24),__esModule:!0}},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){n(49),t.exports=n(0).Number.isFinite},function(t,e,n){n(50),t.exports=n(0).Number.isNaN},function(t,e,n){n(51),t.exports=n(0).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),i=n(45),o=n(44);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),f=o(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),i=n(41);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(4)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27),i=n(35),o=n(47),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(33),i=n(11),o=n(28)(!1),a=n(42)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(38),i=n(32);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(3),i=n(0),o=n(4);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(43)("keys"),i=n(48);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(10),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3),i=n(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(3);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(46),i=n(39);n(40)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){(t.exports=n(6)()).push([t.i,".char[data-v-302772ec]{display:inline-block;white-space:pre-wrap}.newline[data-v-302772ec]{display:inline}.typed[data-v-302772ec]{color:#000;background-color:transparent}.selected[data-v-302772ec]{color:#000;background-color:#accef7}.erased[data-v-302772ec]{display:none}",""])},function(t,e,n){(t.exports=n(6)()).push([t.i,'@keyframes vue-typer-caret-blink{50%{opacity:0}to{opacity:1}}@keyframes vue-typer-caret-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes vue-typer-caret-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes vue-typer-caret-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.vue-typer-caret-blink[data-v-a16e0f02]{animation:vue-typer-caret-blink 1s step-start 0s infinite}.vue-typer-caret-smooth[data-v-a16e0f02]{animation:vue-typer-caret-smooth .5s ease-in-out 0s infinite alternate}.vue-typer-caret-phase[data-v-a16e0f02]{animation:vue-typer-caret-phase .5s ease-in-out 0s infinite alternate}.vue-typer-caret-expand[data-v-a16e0f02]{animation:vue-typer-caret-expand .5s ease-in-out 0s infinite alternate}span.caret[data-v-a16e0f02]:empty:before{content:"\\200B"}span[data-v-a16e0f02]{display:inline-block;width:1px}.idle[data-v-a16e0f02],.typing[data-v-a16e0f02]{background-color:#000}.selecting[data-v-a16e0f02]{display:none;background-color:#000}.erasing[data-v-a16e0f02]{background-color:#000}.complete[data-v-a16e0f02]{display:none;background-color:#000}',""])},function(t,e,n){(t.exports=n(6)()).push([t.i,"span.vue-typer[data-v-c41bac74]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span.vue-typer span.left[data-v-c41bac74],span.vue-typer span.right[data-v-c41bac74]{display:inline}",""])},function(t,e,n){(function(t,n){function r(t){return I.test(t)}function i(t){return r(t)?function(t){return t.match(E)||[]}(t):function(t){return t.split("")}(t)}function o(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&$.call(t)==v}(t))return B?B.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}function a(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}(t,e,n)}function s(t,e,n){if(!u(n))return!1;var r=typeof e;return!!("number"==r?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=f}(t.length)&&!function(t){var e=u(t)?$.call(t):"";return e==p||e==d}(t)}(n)&&function(t,e){return!!(e=null==e?f:e)&&("number"==typeof t||y.test(t))&&t>-1&&t%1==0&&t<e}(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var c=1/0,f=9007199254740991,l=4294967295,p="[object Function]",d="[object GeneratorFunction]",h="[object RegExp]",v="[object Symbol]",y=/^(?:0|[1-9]\d*)$/,m="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",b="\\ud83c[\\udffb-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",C="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",g,x].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*",T="[\\ufe0e\\ufe0f]?"+_+C,S="(?:"+["[^\\ud800-\\udfff]"+m+"?",m,g,x,"[\\ud800-\\udfff]"].join("|")+")",E=RegExp(b+"(?="+b+")|"+S+T,"g"),I=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),w="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,A=w||j||Function("return this")(),N="object"==typeof e&&e&&!e.nodeType&&e,O=N&&"object"==typeof n&&n&&!n.nodeType&&n,M=O&&O.exports===N,k=M&&w.process,L=function(){try{return k&&k.binding("util")}catch(t){}}(),P=L&&L.isRegExp,R=Object.prototype,$=R.toString,D=A.Symbol,G=D?D.prototype:void 0,B=G?G.toString:void 0,F=P?function(t){return function(e){return t(e)}}(P):function(t){return u(t)&&$.call(t)==h};n.exports=function(t,e,n){return n&&"number"!=typeof n&&s(t,e,n)&&(e=n=void 0),(n=void 0===n?l:n>>>0)?(t=function(t){return null==t?"":o(t)}(t))&&("string"==typeof e||null!=e&&!F(e))&&!(e=o(e))&&r(t)?a(i(t),0,n):t.split(e,n):[]}}).call(e,n(65),n(66)(t))},function(t,e,n){n(62);var r=n(7)(n(17),n(59),"data-v-a16e0f02",null);t.exports=r.exports},function(t,e,n){n(61);var r=n(7)(n(18),n(58),"data-v-302772ec",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"char",class:t.classes},[t._v(t._s(t.val))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"caret custom",class:t.animationClass})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vue-typer"},[n("span",{staticClass:"left"},t._l(t.numLeftChars,function(e){return n("char",{staticClass:"custom typed",attrs:{val:t.currentTextArray[e-1]}})})),n("caret",{class:t.caretClasses,attrs:{animation:t.caretAnimation}}),n("span",{staticClass:"right"},t._l(t.numRightChars,function(e){return n("char",{staticClass:"custom",class:t.rightCharClasses,attrs:{val:t.currentTextArray[t.numLeftChars+e-1]}})}))],1)},staticRenderFns:[]}},function(t,e,n){var r=n(52);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("3bfdc45b",r,!0)},function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0dba035c",r,!0)},function(t,e,n){var r=n(54);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(8)("0f4cea8e",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],c=o[3],f={id:t+":"+i,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])},741:function(t,e,n){"use strict";var r=n(282);n.n(r).a},805:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navigation"),t._v(" "),n("sidebar",[n("sidebar-search")],1),t._v(" "),n("app-content",[n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h1",[t._v("\n              Building a platform "),n("br"),t._v("that matters\n            ")]),t._v(" "),n("p",[t._v("\n              NexusHub is an open source project completely\n              powered by its community, so anyone is welcome to\n              build their own vision of this platform for any game they like.\n              All while getting the full revenue for what you've built in return!\n            ")]),t._v(" "),n("p",{staticClass:"typer"},[n("span",[t._v("Want to")]),t._v(" "),n("no-ssr",[n("vue-typer",{attrs:{text:["join a family of developers?","create awesome tools for the game you love?","make a living with your passion for games?"]}})],1)],1),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"https://discord.gg/TCxe6P4",target:"_blank"}},[t._v("\n              Join us on Discord\n            ")])]),t._v(" "),n("div",{staticClass:"col img-col"},[n("img",{staticClass:"codez",attrs:{src:"/img/open-source/coding.svg",alt:""}})])])])]),t._v(" "),n("section",[n("div",{staticClass:"container repos"},[n("h2",[t._v("Here's some stuff that we've built so far.")]),t._v(" "),n("div",{staticClass:"row-margin"},[n("a",{staticClass:"col-b",attrs:{href:"https://github.com/nexus-devs/NexusHub",target:"_blank"}},[n("module",{staticClass:"interactive"},[n("template",{slot:"header"},[n("img",{staticClass:"ico-h-32",attrs:{src:"/img/brand/nexushub-logo-bw.svg",alt:"NexusHub"}}),t._v(" "),n("h3",[t._v("NexusHub")])]),t._v(" "),n("template",{slot:"body"},[n("p",[t._v("Economy Analytics and Game Data for Warframe.")])])],2)],1),t._v(" "),n("a",{staticClass:"col-b",attrs:{href:"https://github.com/cubic-js/cubic",target:"_blank"}},[n("module",{staticClass:"interactive"},[n("template",{slot:"header"},[n("img",{staticClass:"ico-h-32",attrs:{src:"/img/open-source/cubic.svg",alt:"NexusHub"}}),t._v(" "),n("h3",[t._v("Cubic")])]),t._v(" "),n("template",{slot:"body"},[n("p",[t._v("Fully Modular Javascript App Platform.")])])],2)],1),t._v(" "),n("a",{staticClass:"col-b",attrs:{href:"https://github.com/nexus-devs/beholder",target:"_blank"}},[n("module",{staticClass:"interactive"},[n("template",{slot:"header"},[n("img",{staticClass:"ico-h-32",attrs:{src:"/img/open-source/beholder.svg",alt:"NexusHub"}}),t._v(" "),n("h3",[t._v("Beholder")])]),t._v(" "),n("template",{slot:"body"},[n("p",[t._v("Layout detection framework for DirectX11 applications.")])])],2)],1),t._v(" "),n("a",{staticClass:"col-b",attrs:{href:"https://github.com/WFCD/warframe-items",target:"_blank"}},[n("module",{staticClass:"interactive"},[n("template",{slot:"header"},[n("img",{staticClass:"ico-h-32",attrs:{src:"/img/open-source/warframe-items.svg",alt:"NexusHub"}}),t._v(" "),n("h3",[t._v("warframe-items")])]),t._v(" "),n("template",{slot:"body"},[n("p",[t._v("Complete collection of data for every item in Warframe.")])])],2)],1)])])])])],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})}}]);