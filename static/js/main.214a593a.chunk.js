(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),c=(a(12),a(3)),s=a(4),l=a(5),m=a(6),h=function(e){var t=e.id,a=e.name,n=e.twitter;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"test?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",a," "),r.a.createElement("p",null,"  ",n," ")))},u=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:a,id:t[a].id,name:t[a].name,twitter:t[a].twitter})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=[{id:1,name:"Rick",username:"rickalarcon1",twitter:"https://twitter.com/rick_alarcon1"},{id:2,name:"Halim",username:"haliminfinity",twitter:"https://twitter.com/haliminfinity"},{id:3,name:"Saurav",username:"satomar42",twitter:"https://twitter.com/satomar42"},{id:4,name:"Patricia Lebsack",username:"Karianne",twitter:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",twitter:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",twitter:"Karley_Dach@jasper.info"}],b=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=(a(13),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:f,searchfield:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"}," RoboFriend "),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(u,{robots:t})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.214a593a.chunk.js.map