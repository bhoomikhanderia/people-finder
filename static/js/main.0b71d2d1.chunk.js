(this["webpackJsonppeople-finder"]=this["webpackJsonppeople-finder"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),l=(t(13),t(3)),i=t(4),s=t(6),u=t(5),h=t(7),p=(t(14),t(15),t(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"person",src:"https://robohash.org/".concat(e.person.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.person.name),r.a.createElement("p",null," ",e.person.email," "))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.people.map((function(e){return r.a.createElement(p,{key:e.id,person:e})})))},m=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search-box",type:"search",placeholder:n,onChange:t})}),f=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={people:[],searchField:""},e}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({people:n})}))}},{key:"render",value:function(){var e=this.state,n=e.people,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People Finder"),r.a.createElement(m,{placeholder:"Search People",handleChange:this.handleChange}),r.a.createElement(d,{people:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0b71d2d1.chunk.js.map