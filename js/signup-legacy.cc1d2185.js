"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[830],{8580:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("loading",{attrs:{active:e.vueLoading.isLoading,"can-cancel":!1,"is-full-page":e.vueLoading.fullPage,loader:e.vueLoading.loader,transition:e.vueLoading.transition,color:e.vueLoading.color,height:e.vueLoading.height,width:e.vueLoading.width,"background-color":e.vueLoading.bgColor,opacity:e.vueLoading.opacity,"enforce-focus":!0,"lock-scroll":!0,blur:e.vueLoading.blur}}),r("div",{staticClass:"col-12 col-md-6"},[r("form",{staticClass:"m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1",staticStyle:{"background-color":"#584194"},attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.newUser.apply(null,arguments)}}},[r("p",{staticClass:"fs-2 text-white text-center font-monoton"},[e._v("Registro de Usuario ")]),r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"input-group mt-4",attrs:{id:"email"}},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.user.$model,expression:"$v.user.$model",modifiers:{trim:!0}}],ref:"user",staticClass:"form-control",class:{border:e.$v.user.$error,"border-danger":e.$v.user.$error},attrs:{type:"email",placeholder:"Correo","aria-labelledby":"email"},domProps:{value:e.$v.user.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.user.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su usuario ")]),e.$v.user.email?e._e():r("div",{staticClass:"text-danger"},[e._v(" dirección de correo invalido ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd1"}},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.pwd1.$model,expression:"$v.pwd1.$model",modifiers:{trim:!0}}],ref:"pwd1",staticClass:"form-control",class:{border:e.$v.pwd1.$error,"border-danger":e.$v.pwd1.$error},attrs:{type:"password",placeholder:"Contraseña","aria-labelledby":"pwd1"},domProps:{value:e.$v.pwd1.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.pwd1,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.pwd1.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su contraseña ")]),e.$v.pwd1.minLength?e._e():r("div",{staticClass:"text-danger"},[e._v(" la contraseña debe de ser de al menos "+e._s(e.$v.pwd1.$params.minLength.min)+" caracteres ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd2"}},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.pwd2.$model,expression:"$v.pwd2.$model",modifiers:{trim:!0}}],ref:"pwd2",staticClass:"form-control",class:{border:e.$v.pwd2.$error,"border-danger":e.$v.pwd2.$error},attrs:{type:"password",placeholder:"Repita la Contraseña","aria-labelledby":"pwd2"},domProps:{value:e.$v.pwd2.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.pwd2,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.pwd2.sameAsPwd1?e._e():r("div",{staticClass:"text-danger"},[e._v(" la contraseñas deben de ser identicas ")]),r("div",{staticClass:"d-grid gap-2 mt-3"},[r("input",e._b({staticClass:"btn btn-outline-primary",attrs:{type:"submit",value:"Registrar Usuario"}},"input",e.buttonAttr,!1))])])])])],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-at"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])}],i=r(7906),n=r(6198),o=r(1801),d=r(5457),l=r(3233),u=r.n(l),c=r(6409),p={name:"SignUpView",created:function(){document.title="CMVP Movies Demo - SignUp"},data:function(){return{user:"",pwd1:"",pwd2:"",vueLoading:{loader:"bars",isLoading:!1,fullPage:!0,transition:"fade",color:"#007BFF",height:"128",width:"128",bgColor:"#000",opacity:"0.9",blur:"2px"}}},components:{Loading:u()},validations:{user:{required:c.C1,email:c.Do},pwd1:{required:c.C1,minLength:(0,c.Ei)(6)},pwd2:{sameAsPwd1:(0,c.sH)("pwd1")}},methods:{newUser:function(){var e=this;return(0,n.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.user){t.next=4;break}return e.$refs.user.focus(),(0,d.w)("warning","Por favor ingresa un emaíl"),t.abrupt("return");case 4:if(0!==e.pwd1.length&&0!==e.pwd2.length){t.next=8;break}return 0===e.pwd1.length?e.$refs.pwd1.focus():e.$refs.pwd2.focus(),(0,d.w)("warning","Por favor ingrese una Contraseña"),t.abrupt("return");case 8:return t.prev=8,e.vueLoading.isLoading=!0,t.next=12,o.Z.add_user(e.user,e.pwd1);case 12:e.$router.push("/auth/login"),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](8),(0,d.w)("error",t.t0);case 18:case"end":return t.stop()}}),t,null,[[8,15]])})))()}},computed:{buttonAttr:function(){return!0===(this.$v.user.$error||this.$v.pwd1.$error||this.$v.pwd2.$error)?{disabled:!0}:{disabled:!1}}}},v=p,m=r(1001),g=(0,m.Z)(v,a,s,!1,null,null,null),f=g.exports}}]);
//# sourceMappingURL=signup-legacy.cc1d2185.js.map