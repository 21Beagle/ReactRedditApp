(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(3),a=c.n(i),r=(c(17),c(5)),o=(c(18),c(19),c(1));var d=function(){return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)("h1",{children:"Reddit App"}),Object(o.jsxs)("div",{className:"SearchBar",children:[Object(o.jsx)("input",{placeholder:"Search These Posts"}),Object(o.jsx)("button",{className:"SearchButton",children:"Search"})]})]})},l=(c(21),c(8)),u=(c(22),function(e){var t;return Object(o.jsx)("div",{className:"media-container",children:Object(o.jsx)("img",(t={className:"media",src:e.media.url,alt:""},Object(l.a)(t,"className","post-image"),Object(l.a)(t,"width","100%"),t))})}),j=function(e){return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)("a",{href:"https://www.reddit.com"+e.article.permalink,children:Object(o.jsx)("h3",{className:"title",children:e.article.title})}),Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)(u,{media:e.article}),Object(o.jsx)("p",{})]}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("p",{className:"comments",children:["By ",e.article.author]}),Object(o.jsxs)("p",{className:"upvotes",children:[e.article.score," Upvotes"]})]})]})},h=function(e){return Object(o.jsxs)("div",{className:"redditFeed",children:[Object(o.jsxs)("h2",{children:["Feed - www.reddit.com",e.title]}),null!=e.articles?e.articles.map((function(e,t){return Object(o.jsx)(j,{article:e.data},t)})):""]})},b=(c(23),function(e){return Object(o.jsxs)("div",{className:"subRedditList",children:[Object(o.jsx)("h2",{children:"Subreddits"}),e.subs.map((function(t,c){return Object(o.jsx)("button",{type:"submit",onClick:function(){return c=t.data.url,void e.onChange(c);var c},className:"subReddit",children:t.data.title},c)}))]})});var m=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(r.a)(i,2),l=a[0],u=a[1],j=Object(n.useState)("r/popular"),m=Object(r.a)(j,2),O=m[0],f=m[1];return Object(n.useEffect)((function(){return fetch("https://www.reddit.com/".concat(O,".json")).then((function(e){200===e.status?e.json().then((function(e){null!==e&&u(e.data.children)})):console.log("ERROR")}))}),[O]),Object(n.useEffect)((function(){return fetch("https://www.reddit.com/subreddits.json").then((function(e){200===e.status?e.json().then((function(e){null!==e&&s(e.data.children)})):console.log("ERROR")}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"Main",children:[Object(o.jsx)(h,{articles:l,title:O}),Object(o.jsx)(b,{subs:c,onChange:function(e){f(e)}})]})]})},O=c(4),f=Object(O.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),x=f.actions,p=(x.increment,x.decrement,x.incrementByAmount,f.reducer),v=Object(O.a)({reducer:{counter:p}}),w=c(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(w.a,{store:v,children:Object(o.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.05f8d7ca.chunk.js.map