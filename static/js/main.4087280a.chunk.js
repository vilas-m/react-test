(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{100:function(t,e,n){},105:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(9),s=n.n(a),o=n(25),i=n(45),r=n(64),l="GET_POSTS",d="DELETE_POST",j="CREATE_POST",u={posts:[]};var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;return e.type===l?e.payload&&(t.posts=e.payload):e.type===j?e.payload&&(e.payload.id=String(Math.random()),t.posts=[e.payload].concat(Object(r.a)(t.posts))):e.type===d&&e.payload&&(t.posts=t.posts.filter((function(t){return t.id!==e.payload}))),t},b=n(58),O=Object(i.b)(p,Object(i.a)(b.a)),h=n(63),f=n(11),y=n(38),x=n.n(y),v="https://jsonplaceholder.typicode.com";var m=n(65),N=n(138),P=n(147),g=n(142),E=n(143),T=(n(100),n(144)),C=n(6),S=function(t){var e=t.data,n=t.deletePost,a=Object(c.useState)(!1),s=Object(m.a)(a,2),o=s[0],i=s[1];return Object(C.jsxs)(N.a,{className:"card",children:[Object(C.jsx)(P.a,{title:e.title,action:Object(C.jsx)(g.a,{"aria-label":"settings",onClick:function(){return i((function(t){return!t})),void n()},disabled:o,children:Object(C.jsx)(E.a,{})})}),Object(C.jsx)(T.a,{children:e.body})]})},w=n(146),k=n(145),_=(n(57),function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.posts})),n=Object(c.useRef)(null);Object(c.useEffect)((function(){t((function(t){return t({type:l}),x.a.get("".concat(v,"/posts")).then((function(e){t({type:l,payload:e.data})}))}))}),[t]);var a=function(e){t(function(t){return function(e){return e({type:d}),x.a.delete("".concat(v,"/posts/").concat(t)).then((function(n){e({type:d,payload:t})}))}}(e))};return Object(C.jsxs)("div",{className:"mainContainer",children:[Object(C.jsxs)("div",{className:"newPostContainer",children:[Object(C.jsx)("h2",{children:" New Post"}),Object(C.jsxs)("form",{ref:n,className:"inputForm",children:[Object(C.jsx)(w.a,{label:"Title",name:"title",className:"inputs"}),Object(C.jsx)("br",{}),Object(C.jsx)(w.a,{label:"Body",name:"body",className:"inputs"})]}),Object(C.jsx)(k.a,{variant:"contained",onClick:function(){var e=n.current,c={id:1};c.title=e.title.value,c.body=e.body.value,t(function(t){return function(e){return e({type:j}),x.a.post("".concat(v,"/posts"),t).then((function(t){e({type:j,payload:t.data})}))}}(c)),e.title.value="",e.body.value=""},children:"Post"})]}),Object(C.jsxs)("div",{className:"postsContainer",children:[Object(C.jsx)("h3",{children:" Posts "}),e.map((function(t){return Object(C.jsx)(S,{data:t,deletePost:function(){return a(t.id)},className:"post"},t.id)}))]})]})});var B=function(){return Object(C.jsx)("div",{style:{height:"100vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:Object(C.jsx)(h.a,{children:Object(C.jsx)(f.c,{children:Object(C.jsx)(f.a,{path:"/",children:Object(C.jsx)(_,{})})})})})},D=document.getElementById("root");s.a.render(Object(C.jsx)(o.a,{store:O,children:Object(C.jsx)(B,{})}),D)},57:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.4087280a.chunk.js.map