"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[631],{83439:(t,a,e)=>{e.d(a,{Z:()=>i});var r=e(1519),s=e.n(r)()((function(t){return t[1]}));s.push([t.id,".electron-report[data-v-0d3a45ba]{display:flex;flex-direction:column;height:100%;overflow:auto}",""]);const i=s},34910:(t,a,e)=>{e.d(a,{Z:()=>s});const r={name:"ReportDetail",props:{data:{default:{}}},watch:{"data.id":{handler:function(t){t>0&&this.sendRead()},immediate:!0}},methods:{sendRead:function(){this.$store.dispatch("call",{url:"report/read",data:{ids:[this.data.id]}}).then((function(){})).catch((function(){}))}}};const s=(0,e(51900).Z)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"report-detail"},[e("div",{staticClass:"report-title"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"report-detail-context"},[e("Form",{staticClass:"report-form",attrs:{"label-width":"auto",inline:""}},[e("FormItem",{attrs:{label:t.$L("汇报人")}},[e("UserAvatar",{attrs:{userid:t.data.userid,size:28}})],1),t._v(" "),e("FormItem",{attrs:{label:t.$L("提交时间")}},[t._v("\n                "+t._s(t.data.created_at)+"\n            ")]),t._v(" "),e("FormItem",{attrs:{label:t.$L("汇报对象")}},t._l(t.data.receives_user,(function(t,a){return e("UserAvatar",{key:a,attrs:{userid:t.userid,size:28}})})),1)],1),t._v(" "),e("Form",{staticClass:"report-form",attrs:{"label-width":"auto"}},[e("FormItem",{attrs:{label:t.$L("汇报内容")}},[e("div",{staticClass:"report-content",domProps:{innerHTML:t._s(t.data.content)}})])],1)],1)])}),[],!1,null,null,null).exports},77631:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});const r={components:{ReportDetail:e(34910).Z},data:function(){return{detailData:{}}},watch:{$route:{handler:function(){this.getDetail()},immediate:!0}},methods:{getDetail:function(){var t=this;this.$store.dispatch("call",{url:"report/detail",data:{id:$A.runNum(this.$route.params.id)}}).then((function(a){var e=a.data;t.detailData=e})).catch((function(t){var a=t.msg;$A.messageError(a)}))}}};var s=e(93379),i=e.n(s),n=e(83439),l={insert:"head",singleton:!1};i()(n.Z,l);n.Z.locals;const o=(0,e(51900).Z)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.$L("报告详情")}}),t._v(" "),e("ReportDetail",{attrs:{data:t.detailData}})],1)}),[],!1,null,"0d3a45ba",null).exports}}]);