"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[771],{2771:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const a={data:function(){return{curPath:this.$route.path}},mounted:function(){},computed:i(i({},(0,n(20629).rn)(["userInfo","userIsAdmin"])),{},{menu:function(){var t=[{path:"personal",name:"个人设置"},{path:"password",name:"密码设置"}];return this.userIsAdmin&&t.push.apply(t,[{path:"system",name:"系统设置",divided:!0},{path:"priority",name:"任务等级"}]),t},titleNameRoute:function(){var t=this.curPath,e=this.menu,n="";return e.some((function(e){if($A.leftExists(t,"/manage/setting/"+e.path))return n=e.name,!0})),n||"设置"}}),watch:{$route:function(t){this.curPath=t.path}},methods:{toggleRoute:function(t){this.goForward({path:"/manage/setting/"+t})},classNameRoute:function(t,e){return{active:$A.leftExists(this.curPath,"/manage/setting/"+t),divided:!!e}}}};const o=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-setting"},[n("PageTitle",{attrs:{title:t.$L(t.titleNameRoute)}}),t._v(" "),n("div",{staticClass:"setting-head"},[n("div",{staticClass:"setting-titbox"},[n("div",{staticClass:"setting-title"},[n("h1",[t._v(t._s(t.$L("设置")))])])])]),t._v(" "),n("div",{staticClass:"setting-box"},[n("div",{staticClass:"setting-menu"},[n("ul",t._l(t.menu,(function(e,s){return n("li",{key:s,class:t.classNameRoute(e.path,e.divided),on:{click:function(n){return t.toggleRoute(e.path)}}},[t._v(t._s(t.$L(e.name)))])})),0)]),t._v(" "),n("div",{staticClass:"setting-content"},[n("div",{staticClass:"setting-content-title"},[t._v(t._s(t.$L(t.titleNameRoute)))]),t._v(" "),n("div",{staticClass:"setting-content-view"},[n("router-view",{staticClass:"setting-router-view"})],1)])])],1)}),[],!1,null,null,null).exports}}]);