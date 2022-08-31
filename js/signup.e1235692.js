"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[830],{8580:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("loading",{attrs:{active:e.vueLoading.isLoading,"can-cancel":!1,"is-full-page":e.vueLoading.fullPage,loader:e.vueLoading.loader,transition:e.vueLoading.transition,color:e.vueLoading.color,height:e.vueLoading.height,width:e.vueLoading.width,"background-color":e.vueLoading.bgColor,opacity:e.vueLoading.opacity,"enforce-focus":!0,"lock-scroll":!0,blur:e.vueLoading.blur}}),r("div",{staticClass:"col-12 col-md-6"},[r("form",{staticClass:"m-4 p-3 rounded shadow-lg animate__animated animate__zoomIn animate__delay-1",staticStyle:{"background-color":"#584194"},attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.newUser.apply(null,arguments)}}},[r("p",{staticClass:"fs-2 text-white text-center font-monoton"},[e._v("Registro de Usuario ")]),r("div",{staticClass:"text-center p-3"},[r("div",{staticClass:"input-group mt-4",attrs:{id:"email"}},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.user.$model,expression:"$v.user.$model",modifiers:{trim:!0}}],ref:"user",staticClass:"form-control",class:{border:e.$v.user.$error,"border-danger":e.$v.user.$error},attrs:{type:"email",placeholder:"Correo","aria-labelledby":"email"},domProps:{value:e.$v.user.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.user,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.user.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su usuario ")]),e.$v.user.email?e._e():r("div",{staticClass:"text-danger"},[e._v(" dirección de correo invalido ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd1"}},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.pwd1.$model,expression:"$v.pwd1.$model",modifiers:{trim:!0}}],ref:"pwd1",staticClass:"form-control",class:{border:e.$v.pwd1.$error,"border-danger":e.$v.pwd1.$error},attrs:{type:"password",placeholder:"Contraseña","aria-labelledby":"pwd1"},domProps:{value:e.$v.pwd1.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.pwd1,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.pwd1.required?e._e():r("div",{staticClass:"text-danger"},[e._v(" ingrese su contraseña ")]),e.$v.pwd1.minLength?e._e():r("div",{staticClass:"text-danger"},[e._v(" la contraseña debe de ser de al menos "+e._s(e.$v.pwd1.$params.minLength.min)+" caracteres ")]),r("div",{staticClass:"input-group mt-4",attrs:{id:"pwd2"}},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.pwd2.$model,expression:"$v.pwd2.$model",modifiers:{trim:!0}}],ref:"pwd2",staticClass:"form-control",class:{border:e.$v.pwd2.$error,"border-danger":e.$v.pwd2.$error},attrs:{type:"password",placeholder:"Repita la Contraseña","aria-labelledby":"pwd2"},domProps:{value:e.$v.pwd2.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.pwd2,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e.$v.pwd2.sameAsPwd1?e._e():r("div",{staticClass:"text-danger"},[e._v(" la contraseñas deben de ser identicas ")]),r("div",{staticClass:"d-grid gap-2 mt-3"},[r("input",e._b({staticClass:"btn btn-outline-primary",attrs:{type:"submit",value:"Registrar Usuario"}},"input",e.buttonAttr,!1))])])])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-at"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-text"},[r("i",{staticClass:"bi bi-key-fill"})])}],s=r(1801),o=r(5457),n=r(3233),d=r.n(n),l=r(6409),u={name:"SignUpView",created(){document.title="CMVP Movies Demo - SignUp"},data(){return{user:"",pwd1:"",pwd2:"",vueLoading:{loader:"bars",isLoading:!1,fullPage:!0,transition:"fade",color:"#007BFF",height:"128",width:"128",bgColor:"#000",opacity:"0.9",blur:"2px"}}},components:{Loading:d()},validations:{user:{required:l.C1,email:l.Do},pwd1:{required:l.C1,minLength:(0,l.Ei)(6)},pwd2:{sameAsPwd1:(0,l.sH)("pwd1")}},methods:{async newUser(){if(!this.user)return this.$refs.user.focus(),void(0,o.w)("warning","Por favor ingresa un emaíl");if(0===this.pwd1.length||0===this.pwd2.length)return 0===this.pwd1.length?this.$refs.pwd1.focus():this.$refs.pwd2.focus(),void(0,o.w)("warning","Por favor ingrese una Contraseña");try{this.vueLoading.isLoading=!0,await s.Z.add_user(this.user,this.pwd1),this.$router.push("/auth/login")}catch(e){(0,o.w)("error",e)}}},computed:{buttonAttr(){return!0===(this.$v.user.$error||this.$v.pwd1.$error||this.$v.pwd2.$error)?{disabled:!0}:{disabled:!1}}}},c=u,p=r(1001),m=(0,p.Z)(c,a,i,!1,null,null,null),v=m.exports}}]);
//# sourceMappingURL=signup.e1235692.js.map