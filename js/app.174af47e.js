(function(e){function t(t){for(var n,r,o=t[0],l=t[1],m=t[2],c=0,u=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,m||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/<family-hub>/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var m=0;m<o.length;m++)t(o[m]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2465:function(e,t,a){"use strict";var n=a("64fb"),i=a.n(n);i.a},"32db":function(e,t,a){e.exports=a.p+"img/logofinal.dc4de94a.png"},"4e69":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("nav-bar"),a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("div",{staticClass:"row"},[this.isLogged?a("div",{staticClass:"col-xs-12 col-sm-4 col-md-4 col-lg-2 px-0 py-0"},[a("sidemenu")],1):e._e(),a("div",{staticClass:"col-xs-12 px-0 py-0",class:e.appStyle},[a("router-view")],1)])]),a("b-footer")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticStyle:{"background-image":"linear-gradient(to right,rgb(225,225,225),rgb(255,255,255))"},attrs:{fixed:"","scroll-off-screen":""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("router-link",{attrs:{to:"/",tag:"a"}},[a("span",[e._v("Family HUB")]),a("span",{staticClass:"font-weight-light"},[e._v("grupa C")])])],1),a("v-spacer"),e.isLogged?e._e():a("login"),e.isLogged?e._e():a("v-col",{staticClass:"hidden-md-and-up",attrs:{sm:"2","justify-self":"center","align-self":"center"}},[a("v-dialog",{attrs:{"max-width":"450px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({on:{click:e.login}},n),[a("span",[e._v("SIGN IN")])])]}}],null,!1,679725560),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-container",{staticClass:"d-flex align-center justify-center",staticStyle:{background:"rgba(255,255,255,0.75)"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",[a("v-text-field",{staticStyle:{margin:"10px"},attrs:{"background-color":"white",solo:"","hide-details":"",label:"login","prepend-inner-icon":"fas fa-user-circle"},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1),a("v-row",[a("v-text-field",{staticStyle:{margin:"10px"},attrs:{"background-color":"white",solo:"","hide-details":"",label:"password",type:"password","prepend-inner-icon":"fas fa-key"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-row",[a("v-btn",{staticStyle:{margin:"10px"},on:{click:e.login}},[a("span",[e._v("SIGN UP")])])],1)],1)],1)],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{sm:"3"}},[a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-text-field",{attrs:{"background-color":"white",solo:"","hide-details":"",label:"Email","prepend-inner-icon":"fas fa-user-circle"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{sm:"3"}},[a("v-toolbar-items",[a("v-text-field",{attrs:{"background-color":"white",solo:"","hide-details":"",label:"password",type:"password","prepend-inner-icon":"fas fa-key"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-col",{staticClass:"hidden-sm-and-down",attrs:{sm:"2","justify-self":"center","align-self":"center"}},[a("v-btn",{on:{click:e.login}},[a("span",[e._v("SIGN IN")])])],1)],1)},m=[],d=a("bc3a"),c=a.n(d),u=a("2f62"),h=a("00e7"),p=a.n(h);const g="token";let f={expires:"8h"};var b={setTokenCookie(e){p.a.set(g,e,f)},getTokenCookie(){return p.a.get(g)},deleteTokenCookie(){var e=new Date;p.a.set(g,"",{expires:e.getDate()-10}),p.a.delete(g)},hasTokenCookie(){return!!p.a.get(g)}};n["a"].use(u["a"]);var v=new u["a"].Store({state:{user:null},getters:{user:e=>e.user},mutations:{storeUser(e,t){e.user=t},deleteUser(e){e.user=null}},actions:{async setSession({commit:e},t){e("storeUser",t)},deleteSession({commit:e}){b.deleteTokenCookie(),e("deleteUser")}}}),x={name:"login",data(){return{password:"",email:"",alert:null}},methods:{async login(){let e=await c.a.post("auth/login",{email:this.email,password:this.password});try{if(e)if(e.data[0].access_token){this.alert=null,b.setTokenCookie(e.data[0].access_token);let t=await c.a.get("auth/user");v.dispatch("setSession",t.data),"admin"===t.data.type?this.$router.push("admin/logs"):this.$router.push("news")}else this.alert={state:!0,type:"error",content:"Passwords must be the same!"};else this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"}}catch{return void(this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"})}}}},y=x,w=a("2877"),k=a("6544"),j=a.n(k),C=a("8336"),S=a("62ad"),_=a("0fd9"),V=a("8654"),I=a("2a7f"),T=Object(w["a"])(y,l,m,!1,null,null,null),P=T.exports;j()(T,{VBtn:C["a"],VCol:S["a"],VRow:_["a"],VTextField:V["a"],VToolbarItems:I["a"]});var O={name:"navbar",data(){return{nickname:null,password:null,dialog:!1}},components:{login:P},computed:{...Object(u["b"])({isLogged:"user"})},methods:{async login(){let e=await axios.post("auth/login",{login:this.login,password:this.password});e||(this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"})},async logout(){let e=await axios.get("auth/logout");e||(this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"})}}},E=O,A=(a("a963"),a("40dc")),J=a("a523"),G=a("169a"),D=a("2fa4"),$=Object(w["a"])(E,r,o,!1,null,"7b466787",null),M=$.exports;j()($,{VAppBar:A["a"],VBtn:C["a"],VCol:S["a"],VContainer:J["a"],VDialog:G["a"],VRow:_["a"],VSpacer:D["a"],VTextField:V["a"],VToolbarTitle:I["b"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"foot",attrs:{padless:"",fixed:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v("\n\t\t"+e._s((new Date).getFullYear())+" —\n\t\t"),a("strong",[e._v("Projektowanie i programowanie systemów internetowych II")])])],1)},L=[],R={name:"b-footer"},F=R,U=(a("2465"),a("553a")),q=Object(w["a"])(F,N,L,!1,null,"79d56d7f",null),B=q.exports;j()(q,{VCol:S["a"],VFooter:U["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"sidemenu"},[e.isAdmin?a("div",[a("v-row",{staticClass:"title text-center"},[e._v("ADMINISTRATION PANEL")]),a("v-row",[a("v-btn",{attrs:{to:"/admin/userspanel",rounded:""}},[e._v("USERS")])],1),a("v-row",[a("v-btn",{attrs:{to:"/admin/families",rounded:""}},[e._v("FAMILIES")])],1),a("v-row",[a("v-btn",{attrs:{to:"/admin/news",rounded:""}},[e._v("NEWS")])],1),a("v-row",[a("v-btn",{attrs:{to:"/admin/systemlogs",rounded:""}},[e._v("SYSTEM LOGS")])],1),a("v-row",[a("v-btn",{attrs:{to:"/admin/affinities",rounded:""}},[e._v("AFFINITIES")])],1)],1):e._e(),!e.isAdmin&&e.isLogged?a("div",[a("v-row",{staticClass:"title text-center"},[e._v("USER PANEL")]),a("v-row",[a("v-btn",{attrs:{to:"/panel/profile",rounded:""}},[e._v("PROFILE")])],1),a("v-row",[a("v-btn",{attrs:{to:"/panel/tree",rounded:""}},[e._v("TREE")])],1),a("v-row",[a("v-btn",{attrs:{to:"/panel/gallery",rounded:""}},[e._v("GALLERY")])],1),a("v-row",[a("v-btn",{attrs:{to:"/panel/news",rounded:""}},[e._v("NEWS")])],1)],1):e._e(),a("v-row",[a("v-btn",{attrs:{rounded:"","min-width":"100px !important","max-width":"200px !important",color:"red"},on:{click:e.signout}},[e._v("SIGN OUT")])],1)],1)},z=[],Y={components:{},computed:{...Object(u["b"])({entity:"user"}),isAdmin(){return"admin"===this.entity.type},isLogged(){return!!this.entity}},methods:{signout(){let e=c.a.get("addresshere");e&&(v.dispatch("deleteSession"),this.$router.push("/"))}}},Q=Y,H=(a("a422"),Object(w["a"])(Q,W,z,!1,null,"3a325e98",null)),K=H.exports;j()(H,{VBtn:C["a"],VCol:S["a"],VRow:_["a"]});var X={name:"App",data(){return{hasSidebar:!0}},components:{NavBar:M,BFooter:B,sidemenu:K},computed:{appStyle(){return this.isLogged?"col-sm-8 col-md-8 col-lg-10":"col-sm-12"},...Object(u["b"])({isLogged:"user"})},async created(){let e=b.getTokenCookie();if(e){let e=await c.a.get("auth/user");e?v.dispatch("setSession",e.data):v.dispatch("deleteSession")}}},Z=X,ee=a("7496"),te=Object(w["a"])(Z,i,s,!1,null,null,null),ae=te.exports;j()(te,{VApp:ee["a"],VContainer:J["a"]});var ne=a("8c4f"),ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex align-center justify-center px-0 bg",attrs:{md:"6"}},[n("div",{staticClass:"background-img"},[n("v-img",{staticClass:"img",attrs:{src:a("32db"),"max-width":"200px","max-height":"400px"}})],1)]),n("registration")],1)],1)},se=[],re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"d-flex align-content-center justify-center",attrs:{sm:"12",md:"6"}},[a("v-card",{attrs:{color:"transparent",flat:"","max-width":"400px"}},[a("div",{staticClass:"title"},[a("div",{staticClass:"headline mb-2 text-center"},[e._v("REGISTER YOUR FAMILLY")]),e.alert?a("v-alert",{attrs:{type:e.alert.type}},[e._v(e._s(e.alert.content))]):e._e()],1),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-text",[a("v-text-field",{attrs:{"background-color":"rgba(255, 255, 255, 0.9)",color:"grey",outlined:"",label:"Familly name"},model:{value:e.surname,callback:function(t){e.surname=t},expression:"surname"}}),a("v-text-field",{attrs:{"background-color":"rgba(255, 255, 255, 0.9)",color:"grey",outlined:"",label:"e-mail",rules:[e.rules.required,e.rules.email]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"background-color":"rgba(255, 255, 255, 0.9)",color:"grey",outlined:"","append-icon":e.showPassword?"fas fa-eye":"fas fa-eye-slash",rules:[e.rules.required,e.rules.min],type:e.showPassword?"text":"password",label:"password","prepend-inner-icon":"fas fa-key"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{"background-color":"rgba(255, 255, 255, 0.9)",color:"grey",outlined:"",rules:[e.rules.required,e.rules.min],type:e.showPassword?"text":"password",label:"repeat password","prepend-inner-icon":"fas fa-key"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}}),a("div",{staticClass:"btn text-center"},[a("v-btn",{attrs:{rounded:"",width:"200px"},on:{click:e.signUp}},[e._v("SIGN UP")])],1)],1)],1)],1)],1)},oe=[],le={name:"registration",data(){return{showPassword:!1,password:"",repeatPassword:"",surname:"",email:"",valid:null,alert:null,rules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}}}},components:{},methods:{async signUp(){if(this.alert=null,this.$refs.form.validate())try{let e=await c.a.post("auth/signup",{email:this.email,password:this.password,password_confirmation:this.repeatPassword,name:this.surname});e?e.data?this.alert={state:!0,type:"success",content:e.data.message}:this.alert={state:!0,type:"error",content:"Passwords must be the same!"}:this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"}}catch{return void(this.alert={state:!0,type:"error",content:"Something goes wrong! Try again"})}},save(e){this.$refs.menu.save(e)}}},me=le,de=a("0798"),ce=a("b0af"),ue=a("99d9"),he=a("4bd4"),pe=Object(w["a"])(me,re,oe,!1,null,"39b6b85e",null),ge=pe.exports;j()(pe,{VAlert:de["a"],VBtn:C["a"],VCard:ce["a"],VCardText:ue["b"],VCol:S["a"],VForm:he["a"],VTextField:V["a"]});var fe={components:{registration:ge}},be=fe,ve=(a("cccb"),a("adda")),xe=Object(w["a"])(be,ie,se,!1,null,null,null),ye=xe.exports;j()(xe,{VCol:S["a"],VContainer:J["a"],VImg:ve["a"],VRow:_["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("v-card",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Users")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"fas fa-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Surname"},model:{value:e.editedItem.surname,callback:function(t){e.$set(e.editedItem,"surname",t)},expression:"editedItem.surname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Birthday"},model:{value:e.editedItem.date,callback:function(t){e.$set(e.editedItem,"date",t)},expression:"editedItem.date"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.editedItem.mail,callback:function(t){e.$set(e.editedItem,"mail",t)},expression:"editedItem.mail"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-checkbox",{attrs:{color:"green",label:"IsVerified"},model:{value:e.editedItem.boolean,callback:function(t){e.$set(e.editedItem,"boolean",t)},expression:"editedItem.boolean"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.boolean",fn:function(t){var n=t.item;return[a("v-icon",[e._v(e._s(n.boolean?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"))])]}},{key:"item.action",fn:function(t){var n=t.item;return[a("v-btn",{staticClass:"mx-2",attrs:{small:"",depressed:"",fab:"",dark:"",color:"green"},on:{click:function(t){return e.editItem(n)}}},[a("v-icon",{attrs:{dark:"",small:""}},[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mx-2",attrs:{small:"",depressed:"",fab:"",dark:"",color:"red"},on:{click:function(t){return e.deleteItem(n)}}},[a("v-icon",{attrs:{dark:"",small:""}},[e._v("mdi-delete")])],1)]}},{key:"no-data",fn:function(){return[e._v("NO DATA")]},proxy:!0}])})],1)],1)],1)},ke=[],je={data(){return{test:!0,dialog:!1,search:"",headers:[{text:"ID",align:"left",sortable:!1,value:"number"},{text:"name",value:"name"},{text:"surname",value:"surname"},{text:"date of birth",value:"date"},{text:"e-mail",value:"mail"},{text:" IsVerified",value:"boolean"},{text:" Actions",value:"action"}],editedIndex:-1,editedItem:{name:"",surname:0,date:0,mail:0,boolean:!1},defaultItem:{name:"",surname:0,date:0,mail:0,boolean:!1},users:[{number:"1",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"2",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!1},{number:"3",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"4",name:"Joe",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"5",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"6",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"7",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"8",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"9",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0},{number:"10",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:!0}]}},computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()}},methods:{editItem(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){const t=this.users.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.users.splice(t,1)},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){this.editedIndex>-1?Object.assign(this.users[this.editedIndex],this.editedItem):this.users.push(this.editedItem),this.close()}}},Ce=je,Se=a("ac7c"),_e=a("8fea"),Ve=a("ce7e"),Ie=a("132d"),Te=a("71d9"),Pe=Object(w["a"])(Ce,we,ke,!1,null,"f7afcdaa",null),Oe=Pe.exports;j()(Pe,{VBtn:C["a"],VCard:ce["a"],VCardActions:ue["a"],VCardText:ue["b"],VCardTitle:ue["c"],VCheckbox:Se["a"],VCol:S["a"],VContainer:J["a"],VDataTable:_e["a"],VDialog:G["a"],VDivider:Ve["a"],VIcon:Ie["a"],VRow:_["a"],VSpacer:D["a"],VTextField:V["a"],VToolbar:Te["a"],VToolbarTitle:I["b"]});var Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("v-card",[a("v-card-title",[e._v("\n\t\t\t\tUsers\n\t\t\t\t"),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"fas fa-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search,options:e.options,"server-items-length":e.totalSurnames,loading:e.loading},on:{"update:options":function(t){e.options=t}}})],1)],1)],1)},Ae=[],Je={data(){return{search:"",headers:[{text:"ID",align:"left",sortable:!1,value:"number"},{text:"name",value:"name"},{text:"surname",value:"surname"},{text:"date of birth",value:"date"},{text:"e-mail",value:"mail"},{text:" IsVerified",value:"boolean"}],users:[{number:"1",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"2",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"3",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"4",name:"Joe",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"5",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"6",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"7",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"8",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"9",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"10",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"}]}}},Ge=Je,De=Object(w["a"])(Ge,Ee,Ae,!1,null,"df2cbf54",null),$e=De.exports;j()(De,{VCard:ce["a"],VCardTitle:ue["c"],VCol:S["a"],VContainer:J["a"],VDataTable:_e["a"],VSpacer:D["a"],VTextField:V["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("v-card",[a("v-card-title",[e._v("\n\t\t\t\tUsers\n\t\t\t\t"),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"fas fa-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search,options:e.options,"server-items-length":e.totalSurnames,loading:e.loading},on:{"update:options":function(t){e.options=t}}})],1)],1)],1)},Ne=[],Le={data(){return{search:"",headers:[{text:"ID",align:"left",sortable:!1,value:"number"},{text:"name",value:"name"},{text:"surname",value:"surname"},{text:"date of birth",value:"date"},{text:"e-mail",value:"mail"},{text:" IsVerified",value:"boolean"}],users:[{number:"1",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"2",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"3",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"4",name:"Joe",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"5",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"6",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"7",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"8",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"9",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"10",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"}]}}},Re=Le,Fe=Object(w["a"])(Re,Me,Ne,!1,null,"3ab48043",null),Ue=Fe.exports;j()(Fe,{VCard:ce["a"],VCardTitle:ue["c"],VCol:S["a"],VContainer:J["a"],VDataTable:_e["a"],VSpacer:D["a"],VTextField:V["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("v-card",[a("v-card-title",[e._v("\n\t\t\t\tUsers\n\t\t\t\t"),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"fas fa-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,search:e.search,options:e.options,"server-items-length":e.totalSurnames,loading:e.loading},on:{"update:options":function(t){e.options=t}}})],1)],1)],1)},Be=[],We={data(){return{search:"",headers:[{text:"ID",align:"left",sortable:!1,value:"number"},{text:"name",value:"name"},{text:"surname",value:"surname"},{text:"date of birth",value:"date"},{text:"e-mail",value:"mail"},{text:" IsVerified",value:"boolean"}],users:[{number:"1",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"2",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"3",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"4",name:"Joe",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"5",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"no"},{number:"6",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"7",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"8",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"9",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"},{number:"10",name:"John",surname:"Smith",date:"12-06-97",mail:"jsmith@mail.com",boolean:"yes"}]}}},ze=We,Ye=Object(w["a"])(ze,qe,Be,!1,null,"690d834c",null),Qe=Ye.exports;j()(Ye,{VCard:ce["a"],VCardTitle:ue["c"],VCol:S["a"],VContainer:J["a"],VDataTable:_e["a"],VSpacer:D["a"],VTextField:V["a"]});var He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("button",{attrs:{id:"btn"}},[e._v("Group")]),a("div",{attrs:{id:"tree"}})])],1)},Ke=[],Xe={data(){return{familly:[{id:1,tags:["f1"],name:"King George VI",img:"https://balkangraph.com/js/img/f1.png"},{id:2,tags:["f1"],name:"Queen Elizabeth",title:"The Queen Mother",img:"https://balkangraph.com/js/img/f2.png"},{id:3,tags:["f2"],pid:2,name:"Prince Philip",title:"Duke of Edinburgh",img:"https://balkangraph.com/js/img/f3.png"},{id:4,tags:["f2"],pid:2,name:"Queen Elizabeth II",img:"https://balkangraph.com/js/img/f5.png"},{id:5,pid:2,name:"Princess Margaret",img:"https://balkangraph.com/js/img/f6.png"},{id:6,tags:["f3"],pid:4,name:"Camila",title:"Duchess of Cornwall",img:"https://balkangraph.com/js/img/f7.png"},{id:7,tags:["f3"],pid:4,name:"Charles",title:"Prince of Wales",img:"https://balkangraph.com/js/img/f8.png"},{id:8,tags:["f3"],pid:4,name:"Diana",title:"Princess of Wales",img:"https://balkangraph.com/js/img/f9.png"},{id:9,pid:4,name:"Anne",title:"Princess Royal",img:"https://balkangraph.com/js/img/f10.png"},{id:10,pid:4,name:"Prince Andrew",title:"Duke of York",img:"https://balkangraph.com/js/img/f11.png"},{id:11,pid:4,name:"Prince Edward",title:"Earl of Wessex",img:"https://balkangraph.com/js/img/f12.png"},{id:12,tags:["f4"],pid:7,name:"Catherine",title:"Duchess of Cambridge",img:"https://balkangraph.com/js/img/f13.png"},{id:13,tags:["f4"],pid:7,name:"Prince William",title:"Duch of Cambridge",img:"https://balkangraph.com/js/img/f14.png"},{id:14,tags:["f7"],pid:7,name:"Prince Harry",img:"https://balkangraph.com/js/img/f15.png"},{id:15,tags:["f7"],pid:7,name:"Meghan Markle",img:"https://balkangraph.com/js/img/f16.png"},{id:16,pid:12,name:"Prince George of Cambridge",img:"https://balkangraph.com/js/img/f17.png"},{id:17,pid:12,name:"Prince Charlotte of Cambridge",img:"https://balkangraph.com/js/img/f18.png"},{id:18,pid:12,name:"Prince Louis of Cambridge",img:"https://balkangraph.com/js/img/f19.png"}],familyGroupTag:{},tags:{}}},methods:{newGroup(){this.tags[`f${Object.keys(this.tags).length+1}`]=this.familyGroupTag}},mounted(){this.familyGroupTag={group:!0,template:"group_grey",groupState:OrgChart.EXPAND},this.tags={f1:this.familyGroupTag,f2:this.familyGroupTag,f3:this.familyGroupTag,f4:this.familyGroupTag,f5:this.familyGroupTag,f6:this.familyGroupTag},this.newGroup();new OrgChart(document.getElementById("tree"),{template:"diva",nodeMouseClick:OrgChart.action.details,nodeMenu:{details:{text:"Details"},add:{text:"Add New"},edit:{text:"Edit"},remove:{text:"Remove"}},nodeBinding:{field_0:"name",field_1:"title",img_0:"img"},tags:this.tags,nodes:this.familly})}},Ze=Xe,et=Object(w["a"])(Ze,He,Ke,!1,null,"35c56f9f",null),tt=et.exports;j()(et,{VCol:S["a"],VContainer:J["a"]});var at,nt,it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"box",attrs:{fluid:"","fill-height":""}},[a("v-col",{attrs:{sm:"12"}},[a("button",{attrs:{id:"btn"}},[e._v("Group")]),a("div",{attrs:{id:"tree"}})])],1)},st=[],rt={data(){return{familly:[{id:1,tags:["f1"],name:"King George VI",img:"https://balkangraph.com/js/img/f1.png"},{id:2,tags:["f1"],name:"Queen Elizabeth",title:"The Queen Mother",img:"https://balkangraph.com/js/img/f2.png"},{id:3,tags:["f2"],pid:2,name:"Prince Philip",title:"Duke of Edinburgh",img:"https://balkangraph.com/js/img/f3.png"},{id:4,tags:["f2"],pid:2,name:"Queen Elizabeth II",img:"https://balkangraph.com/js/img/f5.png"},{id:5,pid:2,name:"Princess Margaret",img:"https://balkangraph.com/js/img/f6.png"},{id:6,tags:["f3"],pid:4,name:"Camila",title:"Duchess of Cornwall",img:"https://balkangraph.com/js/img/f7.png"},{id:7,tags:["f3"],pid:4,name:"Charles",title:"Prince of Wales",img:"https://balkangraph.com/js/img/f8.png"},{id:8,tags:["f3"],pid:4,name:"Diana",title:"Princess of Wales",img:"https://balkangraph.com/js/img/f9.png"},{id:9,pid:4,name:"Anne",title:"Princess Royal",img:"https://balkangraph.com/js/img/f10.png"},{id:10,pid:4,name:"Prince Andrew",title:"Duke of York",img:"https://balkangraph.com/js/img/f11.png"},{id:11,pid:4,name:"Prince Edward",title:"Earl of Wessex",img:"https://balkangraph.com/js/img/f12.png"},{id:12,tags:["f4"],pid:7,name:"Catherine",title:"Duchess of Cambridge",img:"https://balkangraph.com/js/img/f13.png"},{id:13,tags:["f4"],pid:7,name:"Prince William",title:"Duch of Cambridge",img:"https://balkangraph.com/js/img/f14.png"},{id:14,tags:["f7"],pid:7,name:"Prince Harry",img:"https://balkangraph.com/js/img/f15.png"},{id:15,tags:["f7"],pid:7,name:"Meghan Markle",img:"https://balkangraph.com/js/img/f16.png"},{id:16,pid:12,name:"Prince George of Cambridge",img:"https://balkangraph.com/js/img/f17.png"},{id:17,pid:12,name:"Prince Charlotte of Cambridge",img:"https://balkangraph.com/js/img/f18.png"},{id:18,pid:12,name:"Prince Louis of Cambridge",img:"https://balkangraph.com/js/img/f19.png"}],familyGroupTag:{},tags:{}}},methods:{newGroup(){this.tags[`f${Object.keys(this.tags).length+1}`]=this.familyGroupTag}},mounted(){this.familyGroupTag={group:!0,template:"group_grey",groupState:OrgChart.EXPAND},this.tags={f1:this.familyGroupTag,f2:this.familyGroupTag,f3:this.familyGroupTag,f4:this.familyGroupTag,f5:this.familyGroupTag,f6:this.familyGroupTag},this.newGroup();new OrgChart(document.getElementById("tree"),{template:"diva",nodeMouseClick:OrgChart.action.details,nodeMenu:{details:{text:"Details"},add:{text:"Add New"},edit:{text:"Edit"},remove:{text:"Remove"}},nodeBinding:{field_0:"name",field_1:"title",img_0:"img"},tags:this.tags,nodes:this.familly})}},ot=rt,lt=Object(w["a"])(ot,it,st,!1,null,"91d28458",null),mt=lt.exports;j()(lt,{VCol:S["a"],VContainer:J["a"]});var dt,ct,ut={},ht=Object(w["a"])(ut,at,nt,!1,null,null,null),pt=ht.exports,gt={},ft=Object(w["a"])(gt,dt,ct,!1,null,null,null),bt=ft.exports;a("252a");n["a"].use(ne["a"]);const vt=new ne["a"]({mode:"history",base:"/<family-hub>/",routes:[{path:"/",name:"landing-page",component:ye},{path:"/admin/logs",name:"logs-panel",component:Ue,meta:{requiresAdmin:!0}},{path:"/admin/users",name:"users-panel",component:Oe,meta:{requiresAdmin:!0}},{path:"/admin/families",name:"families-panel",component:$e,meta:{requiresAdmin:!0}},{path:"/admin/news",name:"news-panel",component:$e,meta:{requiresAdmin:!0}},{path:"/admin/affinities",name:"affienities-panel",component:Qe,meta:{requiresAdmin:!0}},{path:"/news",name:"news",component:mt,meta:{requiresAuth:!0}},{path:"/tree",name:"tree",component:tt,meta:{requiresAuth:!0}},{path:"/gallery",name:"gallery",component:pt,meta:{requiresAuth:!0}},{path:"/profile/:id",name:"profile",component:bt,meta:{requiresAuth:!0}}]});vt.beforeEach(async(e,t,a)=>{let n,i=b.getTokenCookie();if(i){let e=await c.a.get("auth/user");e?(v.dispatch("setSession",e.data),n=e.data):v.dispatch("deleteSession")}if(null===n&&(n=!1),e.matched.some(e=>e.meta.requiresAdmin)){if(!i&&!n||"admin"!==n.type)return void a({path:"/"})}else if(e.matched.some(e=>e.meta.requiresAuth)){if(!i)return void a({path:"/"});if(n&&"admin"===n.type)return void a({path:"/admin/logs"})}else{if(i)return"admin"===n.type?void a({path:"/admin/logs"}):void a({path:"/news"});v.dispatch("deleteSession")}a()});var xt=vt,yt=a("f309");n["a"].use(yt["a"]);var wt=new yt["a"]({icons:{iconfont:"mdi"}}),kt=a("a7fe"),jt=a.n(kt);n["a"].config.productionTip=!1,n["a"].use(jt.a,c.a),n["a"].axios.defaults.baseURL="http://family.przedprojekt.com/api/",n["a"].axios.interceptors.request.use(e=>{let t=b.getTokenCookie();return t&&(e.headers["Authorization"]=`Bearer ${t}`),e.headers["Access-Control-Allow-Origin"]="*",e},e=>{return Promise.reject(e)}),n["a"].axios.interceptors.response.use(e=>{return e},async e=>{return e.response?v.dispatch("deleteSession"):(xt.push({name:"login"}),e.response={data:{success:!1,message:"Connection error"}}),Promise.reject(e.response)}),new n["a"]({router:xt,store:v,vuetify:wt,render:e=>e(ae)}).$mount("#app")},"64fb":function(e,t,a){},"84ab":function(e,t,a){},"9fe4":function(e,t,a){},a422:function(e,t,a){"use strict";var n=a("9fe4"),i=a.n(n);i.a},a963:function(e,t,a){"use strict";var n=a("84ab"),i=a.n(n);i.a},cccb:function(e,t,a){"use strict";var n=a("4e69"),i=a.n(n);i.a}});
//# sourceMappingURL=app.174af47e.js.map