"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[535],{9556:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("loading",{attrs:{active:t.vueLoading.isLoading,"can-cancel":!1,"is-full-page":t.vueLoading.fullPage,loader:t.vueLoading.loader,transition:t.vueLoading.transition,color:t.vueLoading.color,height:t.vueLoading.height,width:t.vueLoading.width,"background-color":t.vueLoading.bgColor,opacity:t.vueLoading.opacity,"enforce-focus":!0,"lock-scroll":!0,blur:t.vueLoading.blur}}),r("div",{staticClass:"col-6"},[r("form",{staticClass:"form-group m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1",staticStyle:{"background-color":"#263238"},on:{submit:function(e){return e.preventDefault(),t.loginUser.apply(null,arguments)}}},[r("img",{staticClass:"img-fluid rounded mx-auto d-block mt-3",attrs:{src:"",width:"90",alt:""}}),r("p",{staticClass:"fs-2 text-white text-center font-monoton"},[t._v("Cartelera CMVP")]),r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"input-group mt-4",attrs:{id:"user"}},[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.user.$model,expression:"$v.user.$model",modifiers:{trim:!0}}],ref:"user",staticClass:"form-control",class:{border:t.$v.user.$error,"border-danger":t.$v.user.$error},attrs:{type:"email",placeholder:"Correo","aria-labelledby":"user"},domProps:{value:t.$v.user.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.user,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.user.required?t._e():r("div",{staticClass:"text-danger"},[t._v(" ingrese su usuario ")]),t.$v.user.email?t._e():r("div",{staticClass:"text-danger"},[t._v(" dirección de correo invalido ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd"}},[t._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.pwd.$model,expression:"$v.pwd.$model",modifiers:{trim:!0}}],ref:"pwd",staticClass:"form-control",class:{border:t.$v.pwd.$error,"border-danger":t.$v.pwd.$error},attrs:{type:"password",placeholder:"Contraseña","aria-labelledby":"pwd"},domProps:{value:t.$v.pwd.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.pwd,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.$v.pwd.required?t._e():r("div",{staticClass:"text-danger"},[t._v(" ingrese su contraseña ")]),r("div",{staticClass:"d-grid gap-2 mt-3"},[r("input",t._b({staticClass:"btn btn-outline-primary",attrs:{type:"submit",value:"Verificar Datos"}},"input",t.buttonAttr,!1))]),r("div",{staticClass:"mt-4"},[r("div",{staticClass:"d-flex justify-content-center links text-white"},[t._v(" ¿No tienes una cuenta? "),r("router-link",{staticClass:"mx-1 text-decoration-none",attrs:{to:"/auth/signup"}},[t._v(" Registrate ")])],1),r("div",{staticClass:"d-flex justify-content-center links"},[r("router-link",{staticClass:"mx-1 text-decoration-none",attrs:{to:"/auth/pwd-reset"}},[t._v(" ¿Olvidaste tu contraseña? ")])],1)])])])])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-at"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])}],s=r(1801),o=r(5457),n=r(3233),l=r.n(n),d=r(6409),u={name:"LoginView",created(){document.title="CMVP Movies Demo - LogIn"},data(){return{user:"",pwd:"",vueLoading:{loader:"bars",isLoading:!1,fullPage:!0,transition:"fade",color:"#007BFF",height:"128",width:"128",bgColor:"#000",opacity:"0.9",blur:"2px"}}},components:{Loading:l()},validations:{user:{required:d.C1,email:d.Do},pwd:{required:d.C1}},methods:{async loginUser(t){if(t.preventDefault(),!this.user)return this.$refs.user.focus(),void(0,o.w)("warning","Por favor ingresa un emaíl");if(0===this.pwd.length)return this.$refs.pwd.focus(),void(0,o.w)("warning","Por favor ingrese una Contraseña");try{this.vueLoading.isLoading=!0,await s.Z.login(this.user,this.pwd),this.vueLoading.isLoading=!1}catch(e){(0,o.w)("error",e)}}},computed:{buttonAttr(){return!0===(this.$v.user.$error||this.$v.pwd.$error)?{disabled:!0}:{disabled:!1}}}},c=u,v=r(1001),p=(0,v.Z)(c,a,i,!1,null,null,null),m=p.exports}}]);
//# sourceMappingURL=login.87b8124b.js.map