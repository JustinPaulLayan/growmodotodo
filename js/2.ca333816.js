(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"243f":function(t,a,e){},"713b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),a("div",{staticClass:"q-px-lg q-pt-xl q-mb-md"},[a("div",{staticClass:"text-h3"},[t._v("Todo")]),a("div",{staticClass:"text-subtitle1"},[t._v(t._s(t.todaysDate))])]),a("q-img",{staticClass:"header-image absolute-top",attrs:{src:e("ed6a")}})],1),a("q-drawer",{attrs:{"show-if-above":"",width:250,breakpoint:600},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 192px)","margin-top":"192px","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"inbox"}})],1),a("q-item-section",[t._v("\n              Todo\n            ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/help",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"help"}})],1),a("q-item-section",[t._v("\n              Help\n            ")])],1)],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"192px"},attrs:{src:e("ed6a")}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("div",{staticClass:"text-weight-bold"},[t._v("Justin Paul Layan")]),a("div",[t._v("@JPL25")])],1)])],1),a("q-page-container",[a("keep-alive",[a("router-view")],1)],1)],1)},r=[],n=function(){var t=this,a=t._self._c;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},s=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},c=o,l=e("2877"),p=e("66e5"),u=e("4074"),d=e("0016"),m=e("0170"),v=e("eebe"),q=e.n(v),b=Object(l["a"])(c,n,s,!1,null,null,null),f=b.exports;q()(b,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:d["a"],QItemLabel:m["a"]});var h=e("bd4c");const w=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var k={name:"MainLayout",components:{EssentialLink:f},data(){return{leftDrawerOpen:!1,essentialLinks:w}},computed:{todaysDate(){const t=Date.now();return h["a"].formatDate(t,"dddd D MMMM")}}},g=k,Q=(e("fa97"),e("4d5a")),_=e("e359"),x=e("65c6"),y=e("9c40"),D=e("068f"),C=e("9404"),L=e("4983"),S=e("1c1c"),I=e("cb32"),O=e("09e3"),M=e("714f"),j=Object(l["a"])(g,i,r,!1,null,null,null);a["default"]=j.exports;q()(j,"components",{QLayout:Q["a"],QHeader:_["a"],QToolbar:x["a"],QBtn:y["a"],QImg:D["a"],QDrawer:C["a"],QScrollArea:L["a"],QList:S["a"],QItem:p["a"],QItemSection:u["a"],QIcon:d["a"],QAvatar:I["a"],QPageContainer:O["a"]}),q()(j,"directives",{Ripple:M["a"]})},ed6a:function(t,a,e){t.exports=e.p+"img/lake.b2161186.jpg"},fa97:function(t,a,e){"use strict";e("243f")}}]);