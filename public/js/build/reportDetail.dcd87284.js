import{R as o}from"./ReportDetail.89aa7188.js";import{n as a}from"./app.3bbdc795.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.7f412117.js";import"./@traptitech.b72bbaf2.js";import"./katex.3c1bf5d3.js";import"./localforage.6e66292a.js";import"./markdown-it.6d8b0284.js";import"./entities.797c3e49.js";import"./uc.micro.3245408e.js";import"./mdurl.ddaf799d.js";import"./linkify-it.43898b73.js";import"./punycode.e2700674.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.b71582de.js";import"./axios.6ec123f8.js";import"./le5le-store.bd86c9e9.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.5bf49d78.js";import"./clipboard.152d4248.js";import"./view-design-hi.da5871a0.js";import"./vuedraggable.6a7e382b.js";import"./sortablejs.36894852.js";import"./vue-resize-observer.e5bfd86a.js";import"./element-sea.e8c47496.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.c9b3d7aa.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.7d64741a.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.$L("\u62A5\u544A\u8BE6\u60C5")}}),e("ReportDetail",{attrs:{data:t.detailData}})],1)},m=[];const s={components:{ReportDetail:o},data(){return{detailData:{}}},computed:{reportDetailId(){const{reportDetailId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)}},watch:{reportDetailId:{handler(){this.getDetail()},immediate:!0}},methods:{getDetail(){this.reportDetailId<=0||this.$store.dispatch("call",{url:"report/detail",data:{id:this.reportDetailId}}).then(({data:t})=>{this.detailData=t}).catch(({msg:t})=>{$A.messageError(t)})}}},i={};var l=a(s,p,m,!1,n,"76126c11",null,null);function n(t){for(let r in i)this[r]=i[r]}var Q=function(){return l.exports}();export{Q as default};