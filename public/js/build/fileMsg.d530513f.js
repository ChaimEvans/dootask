import{_ as o}from"./openpgp_hi.15f91b1d.js";import{m as n}from"./vuex.cc7cb26e.js";import{I as a}from"./IFrame.50e9ad9a.js";import{n as m}from"./app.d2655342.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.379783c5.js";import"./@babel.49d8906a.js";import"./dayjs.255efd15.js";import"./localforage.6f76957a.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"single-file-msg"},[e("PageTitle",{attrs:{title:t.title}}),t.loadIng>0?e("Loading"):t.isWait?t._e():[t.isType("md")?e("VMPreview",{attrs:{value:t.msgDetail.content.content}}):t.isType("text")?e("TEditor",{attrs:{value:t.msgDetail.content.content,height:"100%",readOnly:""}}):t.isType("drawio")?e("Drawio",{attrs:{title:t.msgDetail.msg.name,readOnly:""},model:{value:t.msgDetail.content,callback:function(r){t.$set(t.msgDetail,"content",r)},expression:"msgDetail.content"}}):t.isType("mind")?e("Minder",{attrs:{value:t.msgDetail.content,readOnly:""}}):t.isType("code")?[t.isLongText(t.msgDetail.msg.name)?e("div",{staticClass:"view-code",domProps:{innerHTML:t._s(t.$A.formatTextMsg(t.msgDetail.content.content,t.userId))}}):e("AceEditor",{staticClass:"view-editor",attrs:{ext:t.msgDetail.msg.ext,readOnly:""},model:{value:t.msgDetail.content.content,callback:function(r){t.$set(t.msgDetail.content,"content",r)},expression:"msgDetail.content.content"}})]:t.isType("office")?e("OnlyOffice",{attrs:{code:t.officeCode,documentKey:t.documentKey,readOnly:""},model:{value:t.officeContent,callback:function(r){t.officeContent=r},expression:"officeContent"}}):t.isType("preview")?e("IFrame",{staticClass:"preview-iframe",attrs:{src:t.previewUrl}}):e("div",{staticClass:"no-support"},[t._v(t._s(t.$L("\u4E0D\u652F\u6301\u5355\u72EC\u67E5\u770B\u6B64\u6D88\u606F")))])]],2)},c=[];const d=()=>o(()=>import("./preview.6e13fd0d.js"),["js/build/preview.6e13fd0d.js","js/build/openpgp_hi.15f91b1d.js","js/build/index.40a8e116.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/@babel.49d8906a.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),p=()=>o(()=>import("./TEditor.b78f793e.js"),["js/build/TEditor.b78f793e.js","js/build/tinymce.46b8e261.js","js/build/@babel.49d8906a.js","js/build/ImgUpload.2de2c9c6.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),_=()=>o(()=>import("./AceEditor.695301b8.js"),["js/build/AceEditor.695301b8.js","js/build/vuex.cc7cb26e.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/@babel.49d8906a.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),u=()=>o(()=>import("./OnlyOffice.bbd97e72.js"),["js/build/OnlyOffice.bbd97e72.js","js/build/OnlyOffice.5570973b.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.50e9ad9a.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/@babel.49d8906a.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),g=()=>o(()=>import("./Drawio.9a7d453b.js"),["js/build/Drawio.9a7d453b.js","js/build/Drawio.6a04e353.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.50e9ad9a.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/@babel.49d8906a.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),f=()=>o(()=>import("./Minder.56cfba41.js"),["js/build/Minder.56cfba41.js","js/build/Minder.1839e1ef.css","js/build/IFrame.50e9ad9a.js","js/build/app.d2655342.js","js/build/app.38df9de8.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.379783c5.js","js/build/@babel.49d8906a.js","js/build/dayjs.255efd15.js","js/build/localforage.6f76957a.js","js/build/markdown-it.f48c10fc.js","js/build/entities.797c3e49.js","js/build/uc.micro.39573202.js","js/build/mdurl.2f66c031.js","js/build/linkify-it.3ecfda1e.js","js/build/punycode.c1b51344.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.b5c819e2.js","js/build/vue.c448ed56.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.b40f9152.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.6e355525.js","js/build/clipboard.7eddb2ef.js","js/build/view-design-hi.d2045547.js","js/build/vuedraggable.dbf1607a.js","js/build/sortablejs.20b8ddfe.js","js/build/vue-resize-observer.452c7636.js","js/build/element-sea.e89b014c.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.9f685ce8.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.5f40db32.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),v={components:{IFrame:a,AceEditor:_,TEditor:p,VMPreview:d,OnlyOffice:u,Drawio:g,Minder:f},data(){return{loadIng:0,isWait:!1,msgDetail:{}}},mounted(){},watch:{$route:{handler(){this.getInfo()},immediate:!0}},computed:{...n(["userId"]),msgId(){const{msgId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},title(){const{msg:t}=this.msgDetail;return t&&t.name?t.name:"Loading..."},isType(){const{msgDetail:t}=this;return function(i){return t.type=="file"&&t.file_mode==i}},officeContent(){return{id:this.msgDetail.id||0,type:this.msgDetail.msg.ext,name:this.title}},officeCode(){return"msgFile_"+this.msgDetail.id},previewUrl(){const{name:t,key:i}=this.msgDetail.content;return $A.onlinePreviewUrl(t,i)}},methods:{getInfo(){this.msgId<=0||(setTimeout(t=>{this.loadIng++},600),this.isWait=!0,this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId}}).then(({data:t})=>{this.msgDetail=t}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{this.$Electron&&window.close()}})}).finally(t=>{this.loadIng--,this.isWait=!1}))},documentKey(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId,only_update_at:"yes"}}).then(({data:e})=>{t(`${e.id}-${$A.dayjs(e.update_at).unix()}`)}).catch(e=>{i(e)})})},isLongText(t){return/^LongText-/.test(t)}}},s={};var h=m(v,l,c,!1,D,null,null,null);function D(t){for(let i in s)this[i]=s[i]}var ot=function(){return h.exports}();export{ot as default};