(this.webpackJsonpfoodpicker=this.webpackJsonpfoodpicker||[]).push([[0],{36:function(e,t,c){},41:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(26),s=c.n(i),a=(c(36),c(29)),o=c(2),j=c(16),d=c.n(j),l=c(27),h=c(3),u=c(63),b=c(62),p=c(1),x=function(e){return Object(p.jsx)(p.Fragment,{children:e.data.map((function(e){return Object(p.jsx)(b.a,{src:e.strMealThumb,width:171,height:180,fluid:!0},"{i}")}))})},O=(c(41),function(e){var t=Object(n.useState)(!1),c=Object(h.a)(t,2),r=c[0],i=c[1],s=e.data[0],a=[];if(s)for(var o=1;o<=20&&s["strIngredient"+o];o++)a.push("".concat(s["strIngredient"+o]," - ").concat(s["strMeasure"+o]));return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"accordion",children:Object(p.jsxs)("div",{className:"accordion-item",children:[Object(p.jsxs)("div",{className:"accordion-title",onClick:function(){i(!r)},children:[Object(p.jsx)("div",{children:"Ingredients"}),Object(p.jsx)("div",{children:r?"-":"+"})]}),r&&Object(p.jsx)("div",{className:"accordion-content",children:a.join("\n")})]})})})}),f=c(28),v=c.n(f),m=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1];return Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsx)("h1",{children:"Welcome to the Food Picker App"}),Object(p.jsx)("p",{children:"To choose what food you would like, please select a button."}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(p.jsx)(u.a,{variant:"primary",onClick:function(){return function(){var e="https://www.themealdb.com/api/json/v1/1/random.php";function t(){return(t=Object(l.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(e);case 3:c=t.sent,r(c.data.meals),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}()},children:"Random Food"})," "]}),Object(p.jsx)("div",{children:c.length?Object(p.jsx)("p",{children:c.map((function(e){return e.strMeal}))}):Object(p.jsx)("p",{children:"Click for Recipe!"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:c.map((function(e){return e.strInstructions}))})}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{data:c})}),Object(p.jsx)("div",{children:Object(p.jsx)(O,{data:c})})]})};var k=function(){return Object(p.jsx)(a.a,{basename:"/Recipe-Picker",children:Object(p.jsx)(o.c,{children:Object(p.jsx)(o.a,{path:"/",element:Object(p.jsx)(m,{}),exact:!0})})})};c(60);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c90390ff.chunk.js.map