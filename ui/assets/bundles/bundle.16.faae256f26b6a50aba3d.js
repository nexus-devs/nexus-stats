(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{186:function(t,e,a){"use strict";a.r(e);var n=a(874),s=a(370);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a(837);var r=a(4),u=Object(r.a)(s.default,n.a,n.b,!1,null,"9dcc9ae0",null);e.default=u.exports},197:function(t,e,a){},206:function(t,e,a){"use strict";var n=a(197);a.n(n).a},208:function(t,e,a){"use strict";a.r(e);a(206);var n=a(4),s=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{staticClass:"blobs",attrs:{src:"/img/ui/header-blobs-outline.svg"}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"container"},[this._t("default")],2),this._v(" "),this._t("sub")],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background-container"},[e("div",{staticClass:"background"})])}],!1,null,"2eba4017",null);e.default=s.exports},228:function(t,e,a){"use strict";a.r(e);var n=a(229),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=s.a},229:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a(205));e.default={components:{notifications:n.default},computed:{game:function(){return this.$store.state.game.name}},watch:{$route:function(t,e){this.$store.commit("setActiveGame",t.fullPath.split("/")[1])}},beforeCreate:function(){this.$store.commit("setActiveGame",this.$route.fullPath.split("/")[1])},storeModule:{name:"game",state:{name:""},mutations:{setActiveGame:function(t,e){t.name=e}}}}},230:function(t,e,a){},370:function(t,e,a){"use strict";a.r(e);var n=a(371),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=s.a},371:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a(372)),s=o(a(203)),i=o(a(201)),r=o(a(202)),u=o(a(208));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{navigation:n.default,appContent:s.default,sidebar:i.default,sidebarSearch:r.default,uiHeader:u.default},computed:{user:function(){return this.$store.state.user?this.$store.state.user.name:"there"}}}},372:function(t,e,a){"use strict";a.r(e);var n=a(416),s=a(228);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a(373);var r=a(4),u=Object(r.a)(s.default,n.a,n.b,!1,null,"02401bce",null);e.default=u.exports},373:function(t,e,a){"use strict";var n=a(230);a.n(n).a},375:function(t,e,a){},416:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"row"},[e("div",{staticClass:"nav-l"},[e("router-link",{attrs:{to:"/warframe",exact:""}},[e("img",{staticClass:"logo ico-h-20",attrs:{src:"/img/brand/nexushub-logo-typeface.svg",alt:"Nexushub Logo"}})])],1),this._v(" "),e("div",{staticClass:"nav-r"},[e("notifications")],1)])},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},837:function(t,e,a){"use strict";var n=a(375);a.n(n).a},874:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigation"),t._v(" "),a("sidebar",[a("sidebar-search")],1),t._v(" "),a("app-content",[a("ui-header",[a("h1",[t._v("Hey "+t._s(t.user)+"!")]),t._v(" "),a("p",[t._v("Wanna talk with us, or just feeling lonely? Hit us up on one of the channels below!")]),t._v(" "),a("a",{staticClass:"interactive comm discord",attrs:{href:"https://discord.gg/TCxe6P4",target:"_blank"}},[a("img",{attrs:{src:"/img/contact/discord.svg",alt:"Discord"}}),t._v(" "),a("span",[t._v("Discord")])]),t._v(" "),a("a",{staticClass:"interactive comm mail",attrs:{href:"mailto:contact@nexus-stats.com?Subject=Regarding%20NexusHub"}},[a("img",{attrs:{src:"/img/contact/mail.svg",alt:"Mail"}}),t._v(" "),a("span",[t._v("Good ol' Mail")])])]),t._v(" "),a("div",{staticClass:"container"},[a("section",[a("img",{staticClass:"ico-h-24",attrs:{src:"/img/ui/info.svg",alt:"Information about Discord"}}),t._v(" "),a("span",[t._v("Please note: Discord is the superior "),a("s",[t._v("siege engine")]),t._v(" way to talk to us.")])])])],1)],1)},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})}}]);