(this["webpackJsonpzoomer-eats"]=this["webpackJsonpzoomer-eats"]||[]).push([[0],[,,,,,,,,,,,function(t,e,s){},,function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),r=s(5),c=s.n(r),i=(s(11),s(4)),o=s.n(i),u=s(6),l=s(2),j=(s(13),s(14),s(0)),d=function(){return Object(j.jsx)("div",{className:"loader",children:"Loading..."})},b=(s(16),s.p+"static/media/relevance.b7460081.svg"),O=s.p+"static/media/filter.2970e523.svg",h=a.a.createContext({}),m=function(t){var e=t.children,s=Object(n.useState)({restaurantList:JSON.parse(localStorage.getItem("restaurantList")),restaurantCount:JSON.parse(localStorage.getItem("restaurantCount"))})[0];return Object(j.jsx)(h.Provider,{value:s,children:e})},f=function(){var t=Object(n.useContext)(h).restaurantCount;return Object(j.jsxs)("div",{className:"Toolbar",children:[Object(j.jsxs)("span",{children:[t," Restaurants"]}),Object(j.jsxs)("span",{children:["Relevance ",Object(j.jsx)("img",{src:b,alt:""})]}),Object(j.jsxs)("span",{children:["Filter ",Object(j.jsx)("img",{src:O,alt:""})]})]})},g=(s(17),s.p+"static/media/star.8f5c6246.svg"),x=s.p+"static/media/outlets.fbad31a7.svg",p=function(t){return Object(j.jsxs)("div",{className:"Restaurant",onClick:t.onClick,children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.imageURL,")")}}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"rating",children:[Object(j.jsx)("img",{src:g,alt:""})," ",t.rating]}),Object(j.jsx)("h1",{children:t.name}),Object(j.jsx)("h2",{children:t.cuisines}),Object(j.jsxs)("h3",{id:"time",children:[t.time," mins"]}),Object(j.jsxs)("h3",{id:"price",children:["$",t.cost?t.cost:0," for Two"]}),t.outlets>1?Object(j.jsxs)("h3",{id:"outlets",style:{right:0},children:[t.outlets," Outlets Near You ",Object(j.jsx)("img",{src:x,alt:""})]}):null]})]})},v=function(){var t=Object(n.useContext)(h).restaurantList,e=Object(n.useState)(!1),s=Object(l.a)(e,2),r=s[0],c=s[1],i=Object(n.useState)({show:!0,restaurants:t}),o=Object(l.a)(i,2),u=o[0],b=o[1];Object(n.useEffect)((function(){c(!0),setTimeout((function(){c(!1)}),1500)}),[u,b,c]);return r?Object(j.jsx)(d,{}):Object(j.jsxs)(a.a.Fragment,{children:[u.restaurants.map((function(e){return Object(j.jsx)(p,{name:u.show?e.restaurantName:e.outletName,cuisines:""===e.cuisines?"North Indian, Chinese, Continental":e.cuisines,rating:"0.0"===e.averageReview?(4*Math.random()+1).toFixed(1):e.averageReview,time:e.time,cost:e.costForTwo,outlets:u.show?e.outlet.length:0,imageURL:u.show?e.restaurantImage:e.image,onClick:function(){u.show&&function(e){var s=t.filter((function(t){var s=t.restaurantId;return e===s}))[0].outlet;b({show:!1,restaurants:s})}(e.restaurantId)}},u.show?e.restaurantId:e.outletId)})),u.show?null:Object(j.jsx)("img",{style:{backgroundColor:"#e7e7e7",padding:"15px 30px",display:"inline-block",transform:"scaleX(-1)"},src:x,alt:"",onClick:function(){b({show:!0,restaurants:t})}})]})},w=function(){var t=Object(n.useState)(!0),e=Object(l.a)(t,2),s=e[0],a=e[1];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var e,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({latitude:13.0358481,longitude:80.244455})});case 2:return e=t.sent,t.next=5,e.json();case 5:s=t.sent,localStorage.setItem("restaurantList",JSON.stringify(s.listRestaurants)),localStorage.setItem("restaurantCount",JSON.stringify(s.restaurantCount)),a(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),s?Object(j.jsx)(d,{}):Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)(v,{})]})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{children:Object(j.jsx)(w,{})})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9ce42dc2.chunk.js.map