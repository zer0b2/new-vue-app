(function(){"use strict";var n={2677:function(n,t,e){var o=e(9242),s=e(3396);const r={id:"app"};function i(n,t,e,o,i,a){const u=(0,s.up)("MainComponent");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u)])}var a=e(7139);const u={class:"main"},c=["index","onClick"];function f(n,t,e,o,r,i){return(0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.tasks,((t,e)=>((0,s.wg)(),(0,s.iD)("ul",{id:"item-list",key:t.index},[((0,s.wg)(),(0,s.iD)("li",{index:e,class:(0,a.C_)(["menu-item",[{crossedout:1==t.done}]]),key:n.taskToDo,onClick:n=>i.change_class(e)},(0,a.zw)(t.title),11,c))])))),128)),(0,s._)("button",{type:"button",onClick:t[0]||(t[0]=n=>i.saveTasks()),class:(0,a.C_)([{success_save:1==r.success}])}," Сохранить ",2)])}var l={name:"mainComponent",data(){return{tasks:[],success:!1}},methods:{change_class:function(n){this.tasks[n].done=!this.tasks[n].done},getTask(){fetch("tasks.json").then((n=>n.json())).then((n=>this.tasks=n))},saveTasks(){localStorage.setItem("toDoList",JSON.stringify(this.tasks)),JSON.stringify(null!=this.tasks)&&(this.success=!0)}},mounted(){null!=JSON.parse(localStorage.getItem("toDoList"))?this.tasks=JSON.parse(localStorage.getItem("toDoList")):this.getTask()}},p=e(89);const v=(0,p.Z)(l,[["render",f]]);var d=v,h={name:"App",components:{MainComponent:d}};const g=(0,p.Z)(h,[["render",i]]);var k=g;(0,o.ri)(k).mount("#app")}},t={};function e(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(t,o,s,r){if(!o){var i=1/0;for(f=0;f<n.length;f++){o=n[f][0],s=n[f][1],r=n[f][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(a=!1,r<i&&(i=r));if(a){n.splice(f--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var f=n.length;f>0&&n[f-1][2]>r;f--)n[f]=n[f-1];n[f]=[o,s,r]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var s,r,i=o[0],a=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(s in a)e.o(a,s)&&(e.m[s]=a[s]);if(u)var f=u(e)}for(t&&t(o);c<i.length;c++)r=i[c],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(f)},o=self["webpackChunknew_vue_app"]=self["webpackChunknew_vue_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(2677)}));o=e.O(o)})();
//# sourceMappingURL=app.b1b4c815.js.map