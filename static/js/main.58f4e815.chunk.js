(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(14),r=n.n(c),s=(n(24),n(0)),o=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{className:"h1",children:" Employee Directory "})})},i=n(3),l=n(4),h=n(15),d=n(16),j=n(19),u=n(18),m=(n(26),function(e){return Object(s.jsxs)("nav",{className:"navbar  justify-content-center",children:[Object(s.jsx)("h5",{children:"Search For an Employee"}),Object(s.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(s.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search for Employee"})})]})}),b=(n(27),function(e){return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Picture"}),Object(s.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(s.jsx)("span",{onClick:function(){return e.onSort("name","last","first")},children:"Name"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.onSort("phone")},children:"Phone"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.onSort("email")},children:"Email"})}),Object(s.jsx)("th",{scope:"col",children:Object(s.jsx)("span",{onClick:function(){return e.onSort("dob","date")},children:"DOB"})})]})}),Object(s.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,a=n.first,c=n.last,r="".concat(a," ").concat(c),o=e.formatDate(t.dob.date);return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{className:"img",src:t.picture.thumbnail,alt:r})}),Object(s.jsx)("td",{className:"row-data",children:r}),Object(s.jsx)("td",{className:"row-data",children:Object(s.jsx)("a",{href:"tel:".concat(t.phone),children:t.phone})}),Object(s.jsx)("td",{className:"row-data email",children:Object(s.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(s.jsx)("td",{className:"row-data",children:o})]})}))})]})}),p=n(17),f=n.n(p),O=function(){return f.a.get("https://randomuser.me/api/?results=100&nat=us")};n(46);var x=function(e){var t=e.children;return Object(s.jsx)("div",{className:"wrapper",children:t})},y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],search:"",filteredEmployees:[],sorting:e.initialsorting},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.searchEmployees(n.trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.onSort=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=e.state.filteredEmployees;e.state.sorting[t]?e.setState({filteredEmployees:c.reverse(),sorting:Object(l.a)(Object(l.a)({},e.initialsorting),{},Object(i.a)({},t,"asc"===e.state.sorting[t]?"desc":"asc"))}):(c=e.state.filteredEmployees.sort((function(e,c){return e=e[t],c=c[t],n?a&&e[n]===c[n]?e[a].localeCompare(c[a]):e[n].localeCompare(c[n]):e.localeCompare(c)})),e.setState({filteredEmployees:c,sorting:Object(l.a)(Object(l.a)({},e.initialsorting),{},Object(i.a)({},t,"asc"))}))},e.searchEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.concat(" ",n.name.last).includes(t)||n.phone.includes(t)||n.phone.includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(""+(e.getMonth()+1)),t.push(""+e.getDate()),t.push(e.getFullYear()),t.join("/")},e}return Object(d.a)(n,[{key:"initialsorting",get:function(){return{name:"",phone:"",email:"",dob:""}}},{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)(x,{children:[Object(s.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(s.jsx)("div",{className:"container mt-4",children:Object(s.jsx)(b,{state:this.state,onSort:this.onSort,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(a.Component);n(47);var v=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("span",{children:"Employee Directory 2021"})})};var g=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{children:Object(s.jsx)(y,{})}),Object(s.jsx)(v,{})]})};n(48),n(49);r.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.58f4e815.chunk.js.map