(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.MyLib={},t.Vue))})(this,function(t,e){"use strict";const f="",r=(o,i)=>{const n=o.__vccOpts||o;for(const[c,s]of i)n[c]=s;return n},d={props:{email:{type:String,default:""}},data(){return{message:"Hello World"}}},_={class:"vite-alert"},a={class:"vite-alert__content"},l={class:"red"};function p(o,i,n,c,s,m){return e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("div",a,[e.createElementVNode("h1",l,e.toDisplayString(s.message)+" - "+e.toDisplayString(n.email),1)])])}const u=r(d,[["render",p],["__scopeId","data-v-a0c35605"]]);t.ViteAlert=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});