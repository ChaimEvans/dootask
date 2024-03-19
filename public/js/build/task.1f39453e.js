import{b as i}from"./TaskDetail.3b4d176f.js";import{m as s}from"./vuex.cc7cb26e.js";import{n as a}from"./app.e270b9c8.js";import"./ProjectLog.daa51f0a.js";import"./DialogWrapper.3081f823.js";import"./le5le-store.b40f9152.js";import"./longpress.5305f240.js";import"./index.97842761.js";import"./quill.39606372.js";import"./@traptitech.363dce05.js";import"./katex.0b94f27c.js";import"./quill-mention-hi.3bd68010.js";import"./vue-jsonp.be27271b.js";import"./vue-virtual-scroll-list-hi.f3f58d09.js";import"./vue.eaf71fac.js";import"./ImgUpload.927252f3.js";import"./view-design-hi.9dd1e616.js";import"./details.9a2c5369.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.b300acb9.js";import"./localforage.7c4ff801.js";import"./markdown-it.f3afa976.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.87a5269f.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./axios.6ec123f8.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.4402036c.js";import"./clipboard.d74ec60d.js";import"./vuedraggable.c8fae132.js";import"./sortablejs.8b819437.js";import"./vue-resize-observer.5fb00380.js";import"./element-sea.b954f5d6.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e60103ad.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.289edf0d.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.43e0261b.js";import"./TEditor.0587a548.js";import"./tinymce.e0553569.js";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"electron-task"},[r("PageTitle",{attrs:{title:t.taskInfo.name}}),t.loadIng>0?r("Loading"):r("TaskDetail",{ref:"taskDetail",attrs:{"task-id":t.taskInfo.id,"open-task":t.taskInfo,"can-update-blur":t.canUpdateBlur}})],1)},p=[];const m={components:{TaskDetail:i},data(){return{loadIng:0,canUpdateBlur:!0}},mounted(){document.addEventListener("keydown",this.shortcutEvent),this.$isSubElectron&&(window.__onBeforeUnload=()=>{if(this.$refs.taskDetail.checkUpdate())return this.canUpdateBlur=!1,$A.modalConfirm({content:"\u4FEE\u6539\u7684\u5185\u5BB9\u5C1A\u672A\u4FDD\u5B58\uFF0C\u771F\u7684\u8981\u653E\u5F03\u4FEE\u6539\u5417\uFF1F",cancelText:"\u53D6\u6D88",okText:"\u653E\u5F03",onOk:()=>{this.$Electron.sendMessage("windowDestroy")},onCancel:()=>{this.$refs.taskDetail.checkUpdate(!1),this.canUpdateBlur=!0}}),!0})},beforeDestroy(){document.removeEventListener("keydown",this.shortcutEvent)},computed:{...s(["cacheTasks"]),taskId(){const{taskId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},taskInfo(){return this.cacheTasks.find(({id:t})=>t===this.taskId)||{}}},watch:{taskId:{handler(){this.getInfo()},immediate:!0}},methods:{getInfo(){this.taskId<=0||(this.loadIng++,this.$store.dispatch("getTaskOne",{task_id:this.taskId,archived:"all"}).then(()=>{this.$store.dispatch("getTaskContent",this.taskId),this.$store.dispatch("getTaskFiles",this.taskId),this.$store.dispatch("getTaskForParent",this.taskId).catch(()=>{}),this.$store.dispatch("getTaskPriority").catch(()=>{})}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{this.$Electron&&window.close()}})}).finally(t=>{this.loadIng--}))},shortcutEvent(t){(t.metaKey||t.ctrlKey)&&t.keyCode===83&&(t.preventDefault(),this.$refs.taskDetail.checkUpdate(!0))}}},o={};var c=a(m,n,p,!1,d,"7af6ba13",null,null);function d(t){for(let e in o)this[e]=o[e]}var nt=function(){return c.exports}();export{nt as default};