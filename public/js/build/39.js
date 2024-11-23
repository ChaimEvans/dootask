"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[39],{89039:(t,e,a)=>{a.r(e),a.d(e,{default:()=>L});function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const i={name:"SystemSetting",data:function(){return{loadIng:0,formDatum:{}}},mounted:function(){this.systemSetting()},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.formDatum_bak)},formArchived:function(t){this.formDatum=n(n({},this.formDatum),{},{auto_archived:t})},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/setting?type="+(t?"save":"all"),data:this.formDatum}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.formDatum=o,e.formDatum_bak=$A.cloneJSON(e.formDatum)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};var l=a(14486);const m=(0,l.A)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-component-item"},[e("Form",{ref:"formDatum",attrs:{model:t.formDatum,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:t.$L("允许注册"),prop:"reg"}},[e("RadioGroup",{model:{value:t.formDatum.reg,callback:function(e){t.$set(t.formDatum,"reg",e)},expression:"formDatum.reg"}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("允许")))]),t._v(" "),e("Radio",{attrs:{label:"invite"}},[t._v(t._s(t.$L("邀请码")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("禁止")))])],1),t._v(" "),"open"==t.formDatum.reg?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("允许：开放注册功能。")))]):"invite"==t.formDatum.reg?[e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("邀请码：注册时需填写下方邀请码。")))]),t._v(" "),e("Input",{staticStyle:{width:"200px","margin-top":"6px"},model:{value:t.formDatum.reg_invite,callback:function(e){t.$set(t.formDatum,"reg_invite",e)},expression:"formDatum.reg_invite"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$L("邀请码")))])])]:t._e()],2),t._v(" "),e("FormItem",{attrs:{label:t.$L("登录验证码"),prop:"loginCode"}},[e("RadioGroup",{model:{value:t.formDatum.login_code,callback:function(e){t.$set(t.formDatum,"login_code",e)},expression:"formDatum.login_code"}},[e("Radio",{attrs:{label:"auto"}},[t._v(t._s(t.$L("自动")))]),t._v(" "),e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"auto"==t.formDatum.login_code?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("自动：密码输入错误后必须添加验证码。")))]):t._e()],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("密码策略"),prop:"passwordPolicy"}},[e("RadioGroup",{model:{value:t.formDatum.password_policy,callback:function(e){t.$set(t.formDatum,"password_policy",e)},expression:"formDatum.password_policy"}},[e("Radio",{attrs:{label:"simple"}},[t._v(t._s(t.$L("简单")))]),t._v(" "),e("Radio",{attrs:{label:"complex"}},[t._v(t._s(t.$L("复杂")))])],1),t._v(" "),"simple"==t.formDatum.password_policy?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("简单：大于或等于6个字符。")))]):"complex"==t.formDatum.password_policy?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("复杂：大于或等于6个字符，包含数字、字母大小写或者特殊字符。")))]):t._e()],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("邀请项目"),prop:"projectInvite"}},[e("RadioGroup",{model:{value:t.formDatum.project_invite,callback:function(e){t.$set(t.formDatum,"project_invite",e)},expression:"formDatum.project_invite"}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"open"==t.formDatum.project_invite?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("开启：项目管理员可生成链接邀请成员加入项目。")))]):t._e()],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("聊天昵称"),prop:"chatNickname"}},[e("RadioGroup",{model:{value:t.formDatum.chat_nickname,callback:function(e){t.$set(t.formDatum,"chat_nickname",e)},expression:"formDatum.chat_nickname"}},[e("Radio",{attrs:{label:"optional"}},[t._v(t._s(t.$L("可选")))]),t._v(" "),e("Radio",{attrs:{label:"required"}},[t._v(t._s(t.$L("必填")))])],1),t._v(" "),"required"==t.formDatum.chat_nickname?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("必填：发送聊天内容前必须设置昵称。")))]):e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("如果必填，发送聊天前必须设置昵称。")))])],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("自动归档任务"),prop:"autoArchived"}},[e("RadioGroup",{attrs:{value:t.formDatum.auto_archived},on:{"on-change":t.formArchived}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("任务完成后自动归档。")))]),t._v(" "),"open"==t.formDatum.auto_archived?e("ETooltip",{attrs:{placement:"right"}},[e("div",{staticClass:"setting-auto-day"},[e("Input",{attrs:{type:"number"},model:{value:t.formDatum.archived_day,callback:function(e){t.$set(t.formDatum,"archived_day",e)},expression:"formDatum.archived_day"}},[e("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$L("天")))])])],1),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("任务完成 % 天后自动归档。",t.formDatum.archived_day)))])]):t._e()],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("是否启动首页"),prop:"startHome"}},[e("RadioGroup",{model:{value:t.formDatum.start_home,callback:function(e){t.$set(t.formDatum,"start_home",e)},expression:"formDatum.start_home"}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("仅支持网页版。")))]),t._v(" "),"open"==t.formDatum.start_home?e("Input",{staticStyle:{margin:"8px 0 -8px"},attrs:{type:"textarea",rows:2,autosize:{minRows:2,maxRows:8},placeholder:t.$L("首页底部：首页底部网站备案号等信息")},model:{value:t.formDatum.home_footer,callback:function(e){t.$set(t.formDatum,"home_footer",e)},expression:"formDatum.home_footer"}}):t._e()],1)],1),t._v(" "),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports;var c=a(95353);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,e||"default");if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==u(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const _={name:"SystemTaskPriority",data:function(){return{loadIng:0,formDatum:[],nullDatum:{name:"",priority:1,days:1,color:"#8bcf70"}}},mounted:function(){this.systemSetting()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,c.aH)(["taskPriority"])),watch:{taskPriority:{handler:function(t){this.formDatum=$A.cloneJSON(t),0===this.formDatum.length&&this.addDatum()},immediate:!0}},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.taskPriority)},addDatum:function(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum:function(t){this.formDatum.splice(t,1),0===this.formDatum.length&&this.addDatum()},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/priority?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.$store.state.taskPriority=$A.cloneJSON(o)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};const v=(0,l.A)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-component-item"},[e("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{staticClass:"setting-color"},[e("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("名称")))]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("ETooltip",{attrs:{content:t.$L("数值越小级别越高"),"max-width":"auto",placement:"top",transfer:""}},[e("div",[e("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("级别")))],1)])],1),t._v(" "),e("Col",{attrs:{span:"4"}},[e("ETooltip",{attrs:{content:t.$L("任务完成时间"),"max-width":"auto",placement:"top",transfer:""}},[e("div",[e("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("天数")))],1)])],1),t._v(" "),e("Col",{attrs:{span:"4"}},[t._v(t._s(t.$L("颜色")))])],1),t._v(" "),t._l(t.formDatum,(function(a,o){return e("Row",{key:o,staticClass:"setting-color"},[e("Col",{attrs:{span:"12"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("请输入名称"),clearable:""},on:{"on-clear":function(e){return t.delDatum(o)}},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),t._v(" "),e("Col",{attrs:{span:"4"}},[e("Input",{attrs:{type:"number"},model:{value:a.priority,callback:function(e){t.$set(a,"priority",e)},expression:"item.priority"}})],1),t._v(" "),e("Col",{attrs:{span:"4"}},[e("Input",{attrs:{type:"number"},model:{value:a.days,callback:function(e){t.$set(a,"days",e)},expression:"item.days"}})],1),t._v(" "),e("Col",{attrs:{span:"4"}},[e("ColorPicker",{attrs:{recommend:"",transfer:""},model:{value:a.color,callback:function(e){t.$set(a,"color",e)},expression:"item.color"}})],1)],1)})),t._v(" "),e("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("添加优先级")))])],2),t._v(" "),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports;function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function h(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=d(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,e||"default");if("object"!=d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==d(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const g={name:"SystemColumnTemplate",data:function(){return{loadIng:0,formDatum:[],nullDatum:{name:"",columns:""}}},mounted:function(){this.systemSetting()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,c.aH)(["columnTemplate"])),watch:{columnTemplate:{handler:function(t){this.formDatum=$A.cloneJSON(t),0===this.formDatum.length&&this.addDatum()},immediate:!0}},methods:{submitForm:function(){var t=this;this.$refs.formDatum.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formDatum=$A.cloneJSON(this.columnTemplate)},addDatum:function(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum:function(t){this.formDatum.splice(t,1),0===this.formDatum.length&&this.addDatum()},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/column/template?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.$store.state.columnTemplate=$A.cloneJSON(o).map((function(t){return $A.isArray(t.columns)&&(t.columns=t.columns.join(",")),t}))})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))}}};const y={name:"SystemEmailSetting",data:function(){return{loadIng:0,formData:{smtp_server:"",port:"",account:"",password:"",reg_verify:"colse",notice:"open",task_remind_hours:0,task_remind_hours2:0},ruleData:{}}},mounted:function(){this.systemSetting()},methods:{submitForm:function(){var t=this;this.$refs.formData.validate((function(e){e&&t.systemSetting(!0)}))},resetForm:function(){this.formData=$A.cloneJSON(this.formDatum_bak)},systemSetting:function(t){var e=this;this.loadIng++,this.$store.dispatch("call",{url:"system/setting/email?type="+(t?"save":"all"),data:this.formData}).then((function(a){var o=a.data;t&&$A.messageSuccess("修改成功"),e.loadIng--,e.formData=o,e.formDatum_bak=$A.cloneJSON(e.formData)})).catch((function(a){var o=a.msg;t&&$A.modalError(o),e.loadIng--}))},hoursChange:function(t){var e=this;10*t%5!=0&&(setTimeout((function(){e.formData.task_remind_hours=1})),$A.messageError("任务提醒只能是0.5的倍数"))},hours2Change:function(t){var e=this;10*t%5!=0&&(setTimeout((function(){e.formData.task_remind_hours2=1})),$A.messageError("第二次任务提醒只能是0.5的倍数"))},checkEmailSend:function(){var t=this;$A.modalInput({title:"测试邮件",placeholder:"请输入收件人地址",onOk:function(e,a){if(e)return $A.isEmail(e)?void t.$store.dispatch("call",{url:"system/email/check",data:Object.assign(t.formData,{to:e})}).then((function(t){var e=t.msg;$A.messageSuccess(e),a()})).catch((function(t){var e=t.msg;$A.modalError(e,301),a()})):($A.modalError("请输入正确的收件人地址",301),void a());a()}})}}};const $={name:"SystemTaskPriority",data:function(){return{formDatum:[],nullDatum:{id:-1,name:"",url_wan:"",url_lan:"",get_info_user:"",get_info_user_passwd:""}}},mounted:function(){this.getSVNs()},methods:{getSVNs:function(){var t=this;this.$store.dispatch("call",{url:"svn/lists_info"}).then((function(e){for(var a=e.data,o=0;o<a.length;o++)a[o].get_info_user_passwd="******";t.formDatum=a})).catch((function(t){var e=t.msg;$A.modalError(e)}))},submitForm:function(){var t=this,e=0;this.formDatum.forEach((function(a){e++,a.id>0?("******"==a.get_info_user_passwd&&delete a.get_info_user_passwd,t.$store.dispatch("call",{url:"svn/update",method:"post",data:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){--e<=0&&$A.messageSuccess("修改成功")})).catch((function(t){var e=t.msg;$A.modalError(e)}))):t.$store.dispatch("call",{url:"svn/add",method:"post",data:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){--e<=0&&$A.messageSuccess("修改成功")})).catch((function(t){var e=t.msg;$A.modalError(e)}))}))},addDatum:function(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum:function(t){this.formDatum.splice(t,1)}}};const D={components:{SystemColumnTemplate:(0,l.A)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-component-item"},[e("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{staticClass:"setting-template"},[e("Col",{attrs:{span:"8"}},[t._v(t._s(t.$L("名称")))]),t._v(" "),e("Col",{attrs:{span:"16"}},[t._v(t._s(t.$L("项目模板")))])],1),t._v(" "),t._l(t.formDatum,(function(a,o){return e("Row",{key:o,staticClass:"setting-template"},[e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("请输入名称"),clearable:""},on:{"on-clear":function(e){return t.delDatum(o)}},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),t._v(" "),e("Col",{attrs:{span:"16"}},[e("TagInput",{model:{value:a.columns,callback:function(e){t.$set(a,"columns",e)},expression:"item.columns"}})],1)],1)})),t._v(" "),e("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("添加模板")))])],2),t._v(" "),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports,SystemTaskPriority:v,SystemSetting:m,SystemEmailSetting:(0,l.A)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-component-item"},[e("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"email-setting-box"},[e("h3",[t._v(t._s(t.$L("邮箱服务器设置")))]),t._v(" "),e("FormItem",{attrs:{label:t.$L("SMTP服务器"),prop:"smtp_server"}},[e("Input",{model:{value:t.formData.smtp_server,callback:function(e){t.$set(t.formData,"smtp_server",e)},expression:"formData.smtp_server"}})],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("端口"),prop:"port"}},[e("Input",{attrs:{maxlength:20},model:{value:t.formData.port,callback:function(e){t.$set(t.formData,"port",e)},expression:"formData.port"}})],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("账号"),prop:"account"}},[e("Input",{attrs:{maxlength:128},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("密码"),prop:"password"}},[e("Input",{attrs:{maxlength:128,type:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),e("FormItem",[e("Button",{on:{click:t.checkEmailSend}},[t._v(t._s(t.$L("邮件发送测试")))])],1)],1),t._v(" "),e("div",{staticClass:"email-setting-placeholder"}),t._v(" "),e("div",{staticClass:"email-setting-box"},[e("h3",[t._v(t._s(t.$L("邮件通知设置")))]),t._v(" "),e("FormItem",{attrs:{label:t.$L("开启注册验证"),prop:"reg_verify"}},[e("RadioGroup",{model:{value:t.formData.reg_verify,callback:function(e){t.$set(t.formData,"reg_verify",e)},expression:"formData.reg_verify"}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1),t._v(" "),"open"==t.formData.reg_verify?e("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("开启后账号需验证通过才可登录")))]):t._e()],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("开启通知"),prop:"notice"}},[e("RadioGroup",{model:{value:t.formData.notice,callback:function(e){t.$set(t.formData,"notice",e)},expression:"formData.notice"}},[e("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("开启")))]),t._v(" "),e("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("关闭")))])],1)],1),t._v(" "),"open"==t.formData.notice?[e("FormItem",{attrs:{label:t.$L("任务提醒:"),prop:"task_remind_hours"}},[e("label",[t._v(t._s(t.$L("到期前")))]),t._v(" "),e("InputNumber",{attrs:{min:.5,step:.5},on:{"on-change":t.hoursChange},model:{value:t.formData.task_remind_hours,callback:function(e){t.$set(t.formData,"task_remind_hours",e)},expression:"formData.task_remind_hours"}}),t._v(" "),e("label",[t._v(t._s(t.$L("小时")))])],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("第二次任务提醒:"),prop:"task_remind_hours2"}},[e("label",[t._v(t._s(t.$L("到期后")))]),t._v(" "),e("InputNumber",{attrs:{min:.5,step:.5},on:{"on-change":t.hours2Change},model:{value:t.formData.task_remind_hours2,callback:function(e){t.$set(t.formData,"task_remind_hours2",e)},expression:"formData.task_remind_hours2"}}),t._v(" "),e("label",[t._v(t._s(t.$L("小时")))])],1)]:t._e()],2)]),t._v(" "),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports,SVNSetting:(0,l.A)($,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-component-item"},[e("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{staticClass:"setting-color"},[e("Col",{attrs:{span:"0"}},[t._v(t._s(t.$L("#")))]),t._v(" "),e("Col",{attrs:{span:"4"}},[t._v(t._s(t.$L("名称")))]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v(t._s(t.$L("外网URL")))]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v(t._s(t.$L("内网URL")))]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("ETooltip",{attrs:{content:t.$L("仅用于获取仓库信息和日志"),"max-width":"auto",placement:"top",transfer:""}},[e("div",[e("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("用户名")))],1)])],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("ETooltip",{attrs:{content:t.$L("仅用于获取仓库信息和日志"),"max-width":"auto",placement:"top",transfer:""}},[e("div",[e("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("密码")))],1)])],1)],1),t._v(" "),t._l(t.formDatum,(function(a,o){return e("Row",{key:o,staticClass:"setting-color"},[e("Col",{attrs:{span:"0"}},[e("Input",{attrs:{disabled:""},model:{value:a.id,callback:function(e){t.$set(a,"id",e)},expression:"item.id"}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:t.$L("请输入名称"),clearable:""},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"item.name"}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:t.$L("请输入外网URL"),clearable:""},model:{value:a.url_wan,callback:function(e){t.$set(a,"url_wan",e)},expression:"item.url_wan"}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:t.$L("请输入内网URL"),clearable:""},model:{value:a.url_lan,callback:function(e){t.$set(a,"url_lan",e)},expression:"item.url_lan"}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:t.$L("请输入用户名"),clearable:""},model:{value:a.get_info_user,callback:function(e){t.$set(a,"get_info_user",e)},expression:"item.get_info_user"}})],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:t.$L("请输入密码"),clearable:""},model:{value:a.get_info_user_passwd,callback:function(e){t.$set(a,"get_info_user_passwd",e)},expression:"item.get_info_user_passwd"}})],1),t._v(" "),e("Col",{attrs:{span:"2"}},[e("Button",{attrs:{shape:"circle",icon:"md-remove"},on:{click:function(e){return t.delDatum(o)}}})],1)],1)})),t._v(" "),e("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("添加仓库")))])],2),t._v(" "),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("提交")))]),t._v(" "),e("Button",{staticStyle:{"margin-left":"8px"},on:{click:t.getSVNs}},[t._v(t._s(t.$L("重置")))])],1)],1)}),[],!1,null,null,null).exports},data:function(){return{tabAction:"setting"}}};const L=(0,l.A)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"setting-item submit"},[e("Tabs",{model:{value:t.tabAction,callback:function(e){t.tabAction=e},expression:"tabAction"}},[e("TabPane",{attrs:{label:t.$L("系统设置"),name:"setting"}},[e("SystemSetting")],1),t._v(" "),e("TabPane",{attrs:{label:t.$L("任务优先级"),name:"taskPriority"}},[e("SystemTaskPriority")],1),t._v(" "),e("TabPane",{attrs:{label:t.$L("项目模板"),name:"columnTemplate"}},[e("SystemColumnTemplate")],1),t._v(" "),e("TabPane",{attrs:{label:t.$L("邮件设置"),name:"emailSetting"}},[e("SystemEmailSetting")],1),t._v(" "),e("TabPane",{attrs:{label:t.$L("SVN仓库"),name:"SVNSetting"}},[e("SVNSetting")],1)],1)],1)}),[],!1,null,null,null).exports}}]);