(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(20),s=n.n(r),o=(n(25),n(1)),i=n.n(o),u=n(6),l=n(5),p=(n(7),n(3)),d=n.n(p),b=n.p+"static/media/premium-icon-trash-can-4914888.25b0789a.png",h=n(0);var j=function(e){var t=e.todo,n=e.onChange,c=e.deleteTodo,r=e.editing,s=Object(a.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],p=Object(a.useState)(""),d=Object(l.a)(p,2),j=d[0],f=d[1],x=["titleToDo"];return t.done&&x.push("done"),Object(h.jsxs)("section",{className:"td",children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("span",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(){return n(t.uuid,t.done,t.name)},checked:t.done}),Object(h.jsx)("span",{className:"test"})]})}),i?Object(h.jsx)("form",{className:"input-for-edit",onBlur:function(){console.log(123),u(!1)},onSubmit:function(e){return function(e){e.preventDefault(),j.trim()&&(r(t.uuid,j,t.done),u(!1))}(e)},children:Object(h.jsx)("input",{autoFocus:!0,onKeyDown:function(e){return function(e){"Escape"===e.key&&u(!1)}(e)},value:j,onChange:function(e){return f(e.target.value)},placeholder:"I want to do..."})}):Object(h.jsx)("button",{onClick:function(){u(!0)},className:"qwe",children:Object(h.jsxs)("span",{className:x.join(" "),children:[" ",t.name," "]})})]}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("label",{className:"lbltext",children:[" ",t.createdAt.slice(0,10)," "]}),Object(h.jsx)("input",{type:"image",className:"btnD trash",src:b,title:"Delete plan",onClick:function(){c(t.uuid),u(!1)}})]})]})};var f=function(e){var t=e.sortedTodos,n=e.doneTodo,a=e.removeTodo,c=e.edit;return Object(h.jsx)("main",{className:"tds",children:t.length?t.map((function(e){return Object(h.jsx)(j,{editing:c,todo:e,onChange:n,deleteTodo:a})})):Object(h.jsx)("p",{className:"noTD",children:"You dont have ToDos"})})},x=n.p+"static/media/right.ad2ded34.png",m=n.p+"static/media/left.50078bca.png";var g=function(e){for(var t=e.todosLength,n=e.todosPerPage,a=e.pageClick,c=e.prevPage,r=e.nextPage,s=e.currentPage,o=[],i=1;i<=Math.ceil(t/n);i++)o.push(i);return o.length>1?Object(h.jsxs)("section",{className:"footer",children:[Object(h.jsx)("input",{class:"btnD arrows",type:"image",src:m,title:"Previous page",onClick:c}),o.map((function(e){return e===s?Object(h.jsx)("input",{className:"footer-item active",type:"button",value:e,onClick:function(){return a(e)}}):Object(h.jsx)("input",{className:"footer-item",type:"button",value:e,onClick:function(){return a(e)}})})),Object(h.jsx)("input",{class:"btnD arrows",type:"image",src:x,title:"Next page",onClick:r})]}):Object(h.jsx)("span",{})};var k=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(h.jsx)("section",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),s("")},children:[Object(h.jsx)("input",{autoFocus:!0,type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"I want to do...",className:"inpTD",title:"Write your plan here"}),Object(h.jsx)("button",{type:"submit",className:"btnAdd",title:"Add your plan",children:"Add"})]})})},v=n.p+"static/media/premium-icon-up-arrow-3987238.b7a7a2fa.png",O=n.p+"static/media/reverse.003aadf9.png";n(45);n(46).config();var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(1),s=Object(l.a)(r,2),o=s[0],p=s[1],b=Object(a.useState)("all"),j=Object(l.a)(b,2),x=j[0],m=j[1],y=n.slice(5*o-5,5*o);function w(){return(w=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(n.filter((function(e){return e.uuid!==t}))),e.next=4,d.a.delete("https://todo-api-learning.herokuapp.com/v1/task/4/".concat(t));case 4:y.length-1===0&&1!=o&&p(o-1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(){return(N=Object(u.a)(i.a.mark((function e(t,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.patch("https://todo-api-learning.herokuapp.com/v1/task/4/".concat(t),{name:r,done:!a});case 3:c(n.map((function(e){return e.uuid===t&&(e.done=!e.done),e}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(t,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.patch("https://todo-api-learning.herokuapp.com/v1/task/4/".concat(t),{name:a,done:r});case 3:c(n.map((function(e){return e.uuid===t&&(e.name=a),e}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function D(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function e(t){var n,a,r,s,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"up"!==t){e.next=22;break}if("all"!==x){e.next=9;break}return e.next=5,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=asc");case 5:n=e.sent,c(n.data),e.next=20;break;case 9:if("done"!==x){e.next=16;break}return e.next=12,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=asc");case 12:a=e.sent,c(a.data),e.next=20;break;case 16:return e.next=18,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=asc");case 18:r=e.sent,c(r.data);case 20:e.next=40;break;case 22:if("all"!==x){e.next=29;break}return e.next=25,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=desc");case 25:s=e.sent,c(s.data),e.next=40;break;case 29:if("done"!==x){e.next=36;break}return e.next=32,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=desc");case 32:o=e.sent,c(o.data),e.next=40;break;case 36:return e.next=38,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=desc");case 38:u=e.sent,c(u.data);case 40:e.next=45;break;case 42:e.prev=42,e.t0=e.catch(0),alert(e.t0.response.data.message);case 45:case"end":return e.stop()}}),e,null,[[0,42]])})))).apply(this,arguments)}function T(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p(1),"all"!==t){e.next=7;break}A(),m("all"),e.next=20;break;case 7:if("done"!==t){e.next=15;break}return e.next=10,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=done&order=desc");case 10:n=e.sent,m("done"),c(n.data),e.next=20;break;case 15:return e.next=17,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?filterBy=undone&order=desc");case 17:a=e.sent,c(a.data),m("undone");case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),alert(e.t0.response.data.message);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function B(){return(B=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m("all"),e.next=4,d.a.post("https://todo-api-learning.herokuapp.com/v1/task/4",{name:t,done:!1});case 4:A(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function A(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/4?order=desc");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){A()}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("body",{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("section",{children:Object(h.jsx)("p",{className:"title",children:"ToDo"})}),Object(h.jsx)(k,{addTodo:function(e){return B.apply(this,arguments)}}),Object(h.jsxs)("section",{className:"control",children:[Object(h.jsxs)("section",{className:"dund",children:["all"===x?Object(h.jsx)("input",{type:"button",onClick:function(){return T("all")},value:"All",className:"active",title:"Show all plans"}):Object(h.jsx)("input",{type:"button",onClick:function(){return T("all")},value:"All",title:"Show all plans"}),"done"===x?Object(h.jsx)("input",{type:"button",onClick:function(){return T("done")},value:"Done",className:"active",title:"Show completed plans"}):Object(h.jsx)("input",{type:"button",onClick:function(){return T("done")},value:"Done",title:"Show completed plans"}),"undone"===x?Object(h.jsx)("input",{type:"button",onClick:function(){return T("undone")},value:"Undone",className:"active",title:"Show uncompleted plans"}):Object(h.jsx)("input",{type:"button",onClick:function(){return T("undone")},value:"Undone",title:"Show uncompleted plans"})]}),Object(h.jsxs)("section",{className:"dund",children:[Object(h.jsx)("span",{className:"lblar",children:" Sort by date "}),Object(h.jsx)("input",{className:"btnD",onClick:function(){return D("up")},type:"image",src:v,title:"New first"}),Object(h.jsx)("input",{className:"btnD",onClick:function(){return D("down")},type:"image",src:O,title:"Old first"})]})]})]}),Object(h.jsx)(f,{edit:function(e,t,n){return C.apply(this,arguments)},sortedTodos:y,doneTodo:function(e,t,n){return N.apply(this,arguments)},removeTodo:function(e){return w.apply(this,arguments)}}),Object(h.jsx)("footer",{children:Object(h.jsx)(g,{currentPage:o,todosLength:n.length,todosPerPage:5,pageClick:function(e){p(e)},nextPage:function(){o!=Math.ceil(n.length/5)&&p(o+1)},prevPage:function(){1!=o&&p(o-1)}})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),w()},7:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.bd23bbdf.chunk.js.map