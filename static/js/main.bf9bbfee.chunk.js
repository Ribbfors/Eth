(this.webpackJsonpethereum=this.webpackJsonpethereum||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(2),i=c.n(a),n=c(14),l=c.n(n),r=(c(19),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),i(e),n(e),l(e)}))}),s=(c(20),c(4)),o=c(3),j=c.n(o),u=(c(39),c(0));var d=function(){var e=Object(a.useState)({articleTitle:null,img:null,articleTitle2:null,img2:null,articleTitle3:null,img3:null}),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){j()({baseURL:"https://newsapi.org/v2/everything",method:"get",headers:{"X-Api-Key":"443e1a16066942518bc1e5cff0cca6f4"},params:{q:"ethereum",from:"",to:"",language:"en",sortBy:""}}).then((function(e){console.log(e),i({articleTitle:e.data.articles[0].title,img:e.data.articles[0].urlToImage,articleTitle2:e.data.articles[1].title,img2:e.data.articles[1].urlToImage,articleTitle3:e.data.articles[2].title,img3:e.data.articles[2].urlToImage})}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"article-wrapper",children:[Object(u.jsxs)("div",{className:"article",children:[Object(u.jsx)("img",{src:c.img,alt:""}),Object(u.jsx)("h3",{children:c.articleTitle})]}),Object(u.jsxs)("div",{className:"article",children:[Object(u.jsx)("img",{src:c.img2,alt:""}),Object(u.jsx)("h3",{children:c.articleTitle2})]}),Object(u.jsxs)("div",{className:"article",children:[Object(u.jsx)("img",{src:c.img3,alt:""}),Object(u.jsx)("h3",{children:c.articleTitle3})]})]})})};c(41);var h=function(){var e=Object(a.useState)({name:null,price:null}),t=Object(s.a)(e,2),c=t[0],i=t[1],n="/cryptocurrency/quotes/latest";return Object(a.useEffect)((function(){j.a.get("".concat(n),{headers:{"X-CMC_PRO_API_KEY":"34b01556-7946-4852-8b6a-06270dea216c",Accept:"application / json"},params:{id:1027,convert:"GBP"}}).then((function(e){console.log(e),i({name:e.data.data[1027].name,price:e.data.data[1027].quote.GBP.price.toFixed(2)})})).catch((function(e){console.log(e)}))}),[n]),Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("div",{className:"ethValue",children:[Object(u.jsxs)("h1",{children:[c.name," is currently valued at:"]}),Object(u.jsxs)("h1",{children:["\xa3",c.price]})]})})};c(42);var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{})]})})};l.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),r()}},[[43,1,2]]]);
//# sourceMappingURL=main.bf9bbfee.chunk.js.map