(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[929],{2019:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v(" "+t._s(t.movieStore)+" "),i("loading",{attrs:{active:t.vueLoading.isLoading,"can-cancel":!1,"is-full-page":t.vueLoading.fullPage,loader:t.vueLoading.loader,transition:t.vueLoading.transition,color:t.vueLoading.color,height:t.vueLoading.height,width:t.vueLoading.width,"background-color":t.vueLoading.bgColor,opacity:t.vueLoading.opacity,"enforce-focus":!0,"lock-scroll":!0,blur:t.vueLoading.blur}}),i("div",{staticClass:"row mt-4 p-3 d-none d-sm-block"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[""!=t.preview?i("youtube",{ref:"youtube",staticClass:"card-img",attrs:{"video-id":t.preview,"player-vars":t.playerVars},on:{playing:t.playing}}):t._e(),i("div",{staticClass:"row card-img-overlay"},[i("div",{staticClass:"col-4 align-self-md-center"},[i("img",{staticClass:"img-thumbnail",attrs:{src:t.picture,alt:t.title}})]),i("div",{staticClass:"col-8 text-white"},[i("div",[i("h2",[t._v(t._s(t.title))])]),i("p",[t._v(t._s(t.plot))]),i("i",{staticClass:"bi bi-calendar mx-1"},[t._v(" "+t._s(t.year))]),t._v(" | "),i("i",{staticClass:"bi bi-clock mx-1"},[t._v(" "+t._s(t.time))]),t._v(" | "),i("i",{staticClass:"bi bi-person-video3 mx-1"},[t._v(" Clasificación "+t._s(t.rating))]),t._v(" | "),t._l(t.genders,(function(e){return i("span",{key:e,staticClass:"badge rounded-pill bg-secondary mx-1"},[t._v(t._s(e))])}))],2)])],1)])]),i("div",{staticClass:"row mt-4 p-3 d-block d-sm-none"},[i("div",{staticClass:"col-12"},[i("img",{staticClass:"img-thumbnail",attrs:{src:t.picture,alt:t.title}})]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"text-center"},[i("h2",[t._v(t._s(t.title))])]),i("p",[t._v(t._s(t.plot))]),i("div",[i("i",{staticClass:"bi bi-calendar mx-1"},[t._v(" "+t._s(t.year))]),t._v(" | "),i("i",{staticClass:"bi bi-clock mx-1"},[t._v(" "+t._s(t.time))]),t._v(" | "),i("i",{staticClass:"bi bi-person-video3 mx-1"},[t._v(" Clasificación "+t._s(t.rating))]),t._v(" | "),t._l(t.genders,(function(e){return i("span",{key:e,staticClass:"badge rounded-pill bg-secondary mx-1"},[t._v(t._s(e))])}))],2)])]),i("div",{staticClass:"row mt-4 p-3 g-1"},[i("hr"),i("h4",[t._v("Pictografías Relacionadas")]),t._l(t.request_image,(function(t){return i("div",{key:t,staticClass:"col-auto"},[i("img",{staticClass:"rounded img-fluid",attrs:{src:t.src,alt:t.alt}})])}))],2),i("div",{staticClass:"row mt-4 p-3 g-2"},[i("hr"),i("h4",[t._v("Videografías Relacionadas")]),t._l(t.request_video,(function(t){return i("div",{key:t,staticClass:"col-auto"},[i("iframe",{staticClass:"d-block w-100",attrs:{width:"640",height:"auto",src:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}))],2),i("div",{staticClass:"row mt-4 p-3 g-2"},[i("hr"),i("h4",[t._v("Enlaces Relacionados")]),t._l(t.request_text,(function(e){return i("div",{key:e,staticClass:"col-auto"},[i("a",{staticClass:"text-decoration-none border rounded-pill p-1 hvr-underline-from-left",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.title))])])}))],2)],1)},s=[],r=i(7906),n=i(6198),l=(i(2222),i(4916),i(5306),i(6699),i(2023),i(9254),i(7042),i(615)),o=i(6166),c=i.n(o),u=i(3233),d=i.n(u),v="c20ccad0c3mshec0054931e45f28p18bfe4jsnf9f56ac71fe1",g={name:"MovieView",created:function(){document.title="CMVP Movies Demo - Movie: ".concat(l.Z.state.movie.title)},data:function(){return{film:"",title:"",picture:"",preview:"",year:"",time:"",plot:"",genders:[],rating:"",request_text:null,request_image:null,request_video:null,playerVars:{autoplay:1,loop:1,modestbranding:1,rel:0,showinfo:0,controls:0,disablekb:1,playlist:""},vueLoading:{loader:"bars",isLoading:!0,fullPage:!0,transition:"fade",color:"#007BFF",height:"128",width:"128",bgColor:"#000",opacity:"0.9",blur:"2px"}}},components:{Loading:d()},methods:{requestAPI:function(){var t=this;return(0,n.Z)((0,r.Z)().mark((function e(){var i,a,s,n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=3,a=["video","image","search"],s=["+trailer","+scenes+wallpaper","&num=30"];case 3:if(!(i>0)){e.next=10;break}return n={method:"Get",url:"https://google-search3.p.rapidapi.com/api/v1/".concat(a[i-1],"/q=").concat(t.title.replace(" ","+")).concat(s[i-1]),headers:{"X-User-Agent":"desktop","X-Proxy-Location":"MX","X-RapidAPI-Key":v,"X-RapidAPI-Host":"google-search3.p.rapidapi.com"}},e.next=7,c()(n).then((function(e){if(3==i&&(t.request_text=e.data.results),2==i){t.request_image=[];for(var a=0;a<e.data.image_results.length;a+=1){var s=e.data.image_results[a];t.request_image.push(s.image)}}if(1==i){t.request_video=[];for(var r=0;r<e.data.results.length;r+=1){var n=e.data.results[r];if(n.link.includes("https://www.youtube.com/watch?v="))if(r>0)t.request_video.push(n.link.replace("/watch?v=","/embed/"));else{var l="https://www.youtube.com/watch?v=".length;t.preview=n.link.slice(l),t.playerVars.playlist=t.preview}}setTimeout((function(){t.vueLoading.isLoading=!1}),1e4)}})).catch((function(t){console.error(t)}));case 7:i-=1,e.next=3;break;case 10:case"end":return e.stop()}}),e)})))()},playing:function(){this.player.playVideo(),this.player.mute()}},computed:{movieStore:function(){this.vueLoading.isLoading=!0,this.film=l.Z.state.movie,this.title=this.film.title,this.year=this.film.year,this.picture=this.film.picture,this.time=this.film.duration,this.plot=this.film.synopsis,this.title=this.film.title,this.genders=[];for(var t=0;t<this.film.gender.length;t+=1)this.genders.push(this.film.gender[t].gender);for(var e=0;e<l.Z.state.ratings.length;e+=1)l.Z.state.ratings[e].id==this.film.rating&&(this.rating=l.Z.state.ratings[e].rating);this.requestAPI()},player:function(){return this.$refs.youtube.player}}},p=g,h=i(1001),f=(0,h.Z)(p,a,s,!1,null,null,null),m=f.exports},4230:function(t,e,i){var a=i(1702),s=i(4488),r=i(1340),n=/"/g,l=a("".replace);t.exports=function(t,e,i,a){var o=r(s(t)),c="<"+e;return""!==i&&(c+=" "+i+'="'+l(r(a),n,"&quot;")+'"'),c+">"+o+"</"+e+">"}},3429:function(t,e,i){var a=i(7293);t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},9254:function(t,e,i){"use strict";var a=i(2109),s=i(4230),r=i(3429);a({target:"String",proto:!0,forced:r("link")},{link:function(t){return s(this,"a","href",t)}})}}]);
//# sourceMappingURL=movie-legacy.b910fa93.js.map