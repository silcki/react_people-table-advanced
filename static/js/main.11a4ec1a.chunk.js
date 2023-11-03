(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var r=c(26),n=(c(36),c(37),c(9)),a=c(3),s=c(0),l=c.n(s),i=c(10),o=c.n(i),j=c(1),d=function(){var e=function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})};return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:e,children:"Home"}),Object(j.jsx)(n.c,{to:"/people",className:e,children:"People"})]})})})},b=(c(39),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(a.b,{})})})]})}),h=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},u=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},O=c(8),x=(c(40),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=c(15),p=c(5),f=c(4),v=c(7),N="https://mate-academy.github.io/react_people-table/api/people.json";function g(e){return new Promise((function(t){return setTimeout(t,e)}))}function y(){return(y=Object(v.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(500).then((function(){return fetch(N)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=l.a.createContext({people:[],loading:!1,errorMessage:"",query:"",sort:"",order:"",sex:"",centuries:[]}),k=function(e){var t=e.children,c=Object(n.d)(),r=Object(p.a)(c,1)[0],a=Object(s.useState)([]),l=Object(p.a)(a,2),i=l[0],o=l[1],d=Object(s.useState)(!1),b=Object(p.a)(d,2),h=b[0],u=b[1],O=Object(s.useState)(""),x=Object(p.a)(O,2),f=x[0],v=x[1],N=r.get("query")||"",g=r.get("sort")||"",k=r.get("order")||"",S=r.get("sex")||"",F=r.getAll("century")||[],C=function(e){var t=e.map((function(t){var c,r;return t.motherName&&(c=e.find((function(e){var c=e.name;return t.motherName===c}))),t.fatherName&&(r=e.find((function(e){var c=e.name;return t.fatherName===c}))),Object(m.a)(Object(m.a)({},t),{},{father:r,mother:c})}));o(t)};Object(s.useEffect)((function(){u(!0),function(){return y.apply(this,arguments)}().then(C).catch((function(){v("Unable to load people")})).finally((function(){u(!1)}))}),[]);var P=Object(s.useMemo)((function(){return{people:i,loading:h,errorMessage:f,query:N,sort:g,order:k,sex:S,centuries:F}}),[h,f,r.toString()]);return Object(j.jsx)(w.Provider,{value:P,children:t})};function S(){return Object(s.useContext)(w)}var F=function(e){var t=e.person,c=Object(a.n)().search;return Object(j.jsx)(n.b,{to:{pathname:t.slug,search:c},className:o()({"has-text-danger":"f"===t.sex}),children:t.name})},C=c(27);function P(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(p.a)(e,2),r=t[0],n=t[1];null===n?c.delete(r):Array.isArray(n)?(c.delete(r),n.forEach((function(e){c.append(r,e)}))):c.set(r,n)})),c.toString()}var L=["children","params"],M=function(e){var t=e.children,c=e.params,r=Object(C.a)(e,L),a=Object(n.d)(),s=Object(p.a)(a,1)[0];return Object(j.jsx)(n.b,Object(m.a)(Object(m.a)({to:{search:P(s,c)}},r),{},{children:t}))},q=function(e){var t=e.sortField,c=e.children,r=S(),n=r.sort,a=r.order,s=n===t,l="desc"===a,i={sort:s&&l?null:t,order:s&&!l?"desc":null},d=o()("fas",{"fa-sort":!n&&!a,"fa-sort-up":s&&!a,"fa-sort-down":s&&a});return Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[c,Object(j.jsx)(M,{params:i,children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:d})})})]})},A=function(e){var t=e.people,c=Object(a.r)().slug,r=null!==c&&void 0!==c?c:null;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)(q,{sortField:"name",children:"Name"})}),Object(j.jsx)("th",{children:Object(j.jsx)(q,{sortField:"sex",children:"Sex"})}),Object(j.jsx)("th",{children:Object(j.jsx)(q,{sortField:"born",children:"Born"})}),Object(j.jsx)("th",{children:Object(j.jsx)(q,{sortField:"died",children:"Died"})}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":e.slug===r}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(F,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(F,{person:e.mother}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(F,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},E=function(){var e=Object(n.d)(),t=Object(p.a)(e,2),c=t[0],r=t[1],a=S(),s=a.query,l=a.sex,i=a.centuries;return Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(j.jsx)(M,{className:o()({"is-active":!l}),params:{sex:null},children:"All"}),Object(j.jsx)(M,{className:o()({"is-active":"m"===l}),params:{sex:"m"},children:"Male"}),Object(j.jsx)(M,{className:o()({"is-active":"f"===l}),params:{sex:"f"},children:"Female"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:s,onChange:function(e){r(P(c,{query:e.target.value||null}))}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(j.jsx)(M,{className:o()("button mr-1",{"is-info":i.includes(e)}),params:{century:i.includes(e.toString())?i.filter((function(t){return t!==e})):[].concat(Object(O.a)(i),[e])},children:e},e)}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)(M,{className:o()("button is-success",{"is-outlined":!!i.length}),params:{century:null},children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)(M,{className:"button is-link is-outlined is-fullwidth",params:{query:null,sex:null,century:null},children:"Reset all filters"})})]})},_=function(){var e=S(),t=e.people,c=e.loading,r=e.errorMessage,n=e.sort,a=e.order,s=e.query,l=e.sex,i=e.centuries,o=Object(O.a)(t);if(n)switch(n){case"name":case"sex":o.sort((function(e,t){return e[n].localeCompare(t[n])}));break;case"born":case"died":o.sort((function(e,t){return e[n]-t[n]}));break;default:throw new Error("There are no people matching the current search criteria")}return a&&o.reverse(),l&&(o=o.filter((function(e){return e.sex===l}))),s&&(o=o.filter((function(e){var t,c,r=s.toLowerCase();return e.name.toLowerCase().includes(r)||(null===(t=e.fatherName)||void 0===t?void 0:t.toLowerCase().includes(r))||(null===(c=e.motherName)||void 0===c?void 0:c.toLowerCase().includes(r))}))),i.length>0&&(o=o.filter((function(e){return i.includes(Math.ceil(e.born/100).toString())}))),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!c&&!!o.length&&Object(j.jsx)(E,{})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[c&&Object(j.jsx)(x,{}),!!o.length&&Object(j.jsx)(A,{people:o}),!c&&!o.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),r&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})})]})},T=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(k,{children:Object(j.jsx)(a.e,{children:Object(j.jsxs)(a.c,{path:"/",element:Object(j.jsx)(b,{}),children:[Object(j.jsx)(a.c,{path:"*",element:Object(j.jsx)(u,{})}),Object(j.jsx)(a.c,{index:!0,element:Object(j.jsx)(h,{})}),Object(j.jsx)(a.c,{path:"people",element:Object(j.jsx)(_,{}),children:Object(j.jsx)(a.c,{path:":slug",element:Object(j.jsx)(_,{})})}),Object(j.jsx)(a.c,{path:"home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})})]})})})})};Object(r.createRoot)(document.getElementById("root")).render(Object(j.jsx)(T,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.11a4ec1a.chunk.js.map