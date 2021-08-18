(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),o=n.n(a),i=(n(12),n(7)),u=n(2),s=(n(13),n(17)),d=n(0);function b(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),b=i[0],l=i[1],j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":l(r);break;default:return}};return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(0,e.onAdd)({id:Object(s.a)(),name:c,number:b})},children:[Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:j}),Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:j}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}var l=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsxs)("li",{children:[e.name,": ",e.number,Object(d.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},j=function(e){var t=e.contactFilter,n=e.onChange;return Object(d.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},value:t,placeholder:"Enter name "})},m=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function h(){var e=Object(r.useState)((function(){var e;return null!==(e=function(){var e=localStorage.getItem("contacts");return JSON.parse(e)}())&&void 0!==e?e:m})),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(u.a)(a,2),s=o[0],h=o[1];Object(r.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var O=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(b,{onAdd:function(e){c([].concat(Object(i.a)(n),[e]))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(j,{contactFilter:s,onChange:h}),Object(d.jsx)(l,{contacts:O,onRemove:function(e){c(n.filter((function(t){return t.id!==e})))}})]})}o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3e6fdb0.chunk.js.map