(this.webpackJsonplistool=this.webpackJsonplistool||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),i=a.n(l),r=(a(15),a(16),a(9)),s=a(2),m=a(8),u=a.n(m),o=Object(n.createContext)(),d=function(e){var t=JSON.parse(localStorage.getItem("items"))||[],a=Object(n.useState)(t),l=Object(s.a)(a,2),i=l[0],m=l[1],d=Object(n.useState)(null),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(n.useEffect)((function(){localStorage.setItem("items",JSON.stringify(i))}),[i]);return c.a.createElement(o.Provider,{value:{items:i,addItem:function(e){m([].concat(Object(r.a)(i),[{title:e,id:u()()}]))},removeItem:function(e){m(i.filter((function(t){return t.id!==e})))},clearList:function(){m([])},findItem:function(e){var t=i.find((function(t){return t.id===e}));b(t)},editListItem:function(e,t){var a=i.map((function(a){return a.id===t?{title:e,id:t}:a}));m(a),b(null)},editItem:E}},e.children)},f=function(e){var t=e.item,a=Object(n.useContext)(o),l=a.removeItem,i=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return i(t.id)},className:"btn-edit task-btn"},c.a.createElement("i",{className:"fas fa-pen"})),c.a.createElement("button",{onClick:function(){return l(t.id)},className:"btn-delete task-btn"},c.a.createElement("i",{className:"fas fa-trash-alt"}))))},E=function(){var e=Object(n.useContext)(o).items;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(f,{item:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"No Items"))},b=function(){var e=Object(n.useContext)(o),t=e.addItem,a=e.clearList,l=e.editItem,i=e.editListItem,r=Object(n.useState)(""),m=Object(s.a)(r,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){d(l?l.title:"")}),[l]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l?i(u,l.id):(t(u),d(""))},className:"form"},c.a.createElement("input",{onChange:function(e){d(e.target.value)},value:u,type:"text",className:"task-input",placeholder:"Add item...",required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn"},l?"Edit Item":"Add Item"),c.a.createElement("button",{onClick:a,type:"reset",className:"btn clear-btn"},"Clear List")))},p=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Shopping List"))};var v=function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(p,null),c.a.createElement(b,null),c.a.createElement(E,null))))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5419132f.chunk.js.map