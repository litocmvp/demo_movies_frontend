"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[535],{9556:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("loading",{attrs:{active:e.vueLoading.isLoading,"can-cancel":!1,"is-full-page":e.vueLoading.fullPage,loader:e.vueLoading.loader,transition:e.vueLoading.transition,color:e.vueLoading.color,height:e.vueLoading.height,width:e.vueLoading.width,"background-color":e.vueLoading.bgColor,opacity:e.vueLoading.opacity,"enforce-focus":!0,"lock-scroll":!0,blur:e.vueLoading.blur}}),r("div",{staticClass:"col-6"},[r("form",{staticClass:"form-group m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1",staticStyle:{"background-color":"#263238"},on:{submit:function(t){return t.preventDefault(),e.loginUser.apply(null,arguments)}}},[r("img",{staticClass:"img-fluid rounded mx-auto d-block mt-3",attrs:{src:"",width:"90",alt:""}}),r("p",{staticClass:"fs-2 text-white text-center font-monoton"},[e._v("Cartelera CMVP")]),r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"input-group mt-4",attrs:{id:"user"}},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.user.$model,expression:"$v.user.$model",modifiers:{trim:!0}}],ref:"user",staticClass:"form-control",class:{border:e.$v.user.$error,"border-danger":e.$v.user.$error},attrs:{type:"email",placeholder:"Correo","aria-labelledby":"user"},domProps:{value:e.$v.user.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.user.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su usuario ")]),e.$v.user.email?e._e():r("div",{staticClass:"text-danger"},[e._v(" dirección de correo invalido ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd"}},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.pwd.$model,expression:"$v.pwd.$model",modifiers:{trim:!0}}],ref:"pwd",staticClass:"form-control",class:{border:e.$v.pwd.$error,"border-danger":e.$v.pwd.$error},attrs:{type:"password",placeholder:"Contraseña","aria-labelledby":"pwd"},domProps:{value:e.$v.pwd.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.pwd,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.pwd.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su contraseña ")]),r("div",{staticClass:"d-grid gap-2 mt-3"},[r("input",e._b({staticClass:"btn btn-outline-primary",attrs:{type:"submit",value:"Verificar Datos"}},"input",e.buttonAttr,!1))]),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"d-flex justify-content-center links text-white"},[e._v(" ¿No tienes una cuenta? "),r("router-link",{staticClass:"mx-1 text-decoration-none",attrs:{to:"/auth/signup"}},[e._v(" Registrate ")])],1),r("div",{staticClass:"d-flex justify-content-center links"},[r("router-link",{staticClass:"mx-1 text-decoration-none",attrs:{to:"/auth/pwd-reset"}},[e._v(" ¿Olvidaste tu contraseña? ")])],1)])])])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-at"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])}],n=r(7906),s=r(6198),o=r(1801),u=r(5457),l=r(3233),d=r.n(l),c=r(6409),v={name:"LoginView",created:function(){document.title="CMVP Movies Demo - LogIn"},data:function(){return{user:"",pwd:"",vueLoading:{loader:"bars",isLoading:!1,fullPage:!0,transition:"fade",color:"#007BFF",height:"128",width:"128",bgColor:"#000",opacity:"0.9",blur:"2px"}}},components:{Loading:d()},validations:{user:{required:c.C1,email:c.Do},pwd:{required:c.C1}},methods:{loginUser:function(e){var t=this;return(0,s.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.preventDefault(),t.user){r.next=5;break}return t.$refs.user.focus(),(0,u.w)("warning","Por favor ingresa un emaíl"),r.abrupt("return");case 5:if(0!==t.pwd.length){r.next=9;break}return t.$refs.pwd.focus(),(0,u.w)("warning","Por favor ingrese una Contraseña"),r.abrupt("return");case 9:return r.prev=9,t.vueLoading.isLoading=!0,r.next=13,o.Z.login(t.user,t.pwd);case 13:t.vueLoading.isLoading=!1,r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](9),(0,u.w)("error",r.t0);case 19:case"end":return r.stop()}}),r,null,[[9,16]])})))()}},computed:{buttonAttr:function(){return!0===(this.$v.user.$error||this.$v.pwd.$error)?{disabled:!0}:{disabled:!1}}}},p=v,m=r(1001),g=(0,m.Z)(p,a,i,!1,null,null,null),f=g.exports}}]);
//# sourceMappingURL=login-legacy.261e81bc.js.map