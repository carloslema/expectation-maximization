webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(12),a=o(r),c=n(8),s=o(c);new a.default({el:"#app",template:"<App/>",components:{App:s.default}})},,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),a=o(r);e.default={name:"DemoApp",components:{Demo:a.default}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4);e.default={name:"canvas",data:function(){return{points:[],groups:[]}},methods:{addpoint:function(t){this.points.push([t.clientX,t.clientY]);var e=o(this.points,2);this.groups=e}}}},,function(t,e){},function(t,e){},,function(t,e,n){var o,r;n(5),o=n(2);var a=n(10);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=o},function(t,e,n){var o,r;n(6),o=n(3);var a=n(11);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-7a22ceaa",t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{attrs:{id:"app"}},[e("demo")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("svg",{staticClass:"canvas",on:{click:t.addpoint}},[t._l(t.points,function(t){return e("circle",{attrs:{cx:t[0],cy:t[1],r:"3"}})}),t._v(" "),0===t.points.length?e("text",{attrs:{x:"100",y:"50"}},[t._v("Click to add points")]):t._e(),t._v(" "),t._l(t.groups,function(t){return e("g",[e("circle",{attrs:{fill:"#de9985",cx:t.mu[0],cy:t.mu[1],r:"5"}})])})],!0)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.e85c4366ba5169c75f40.js.map