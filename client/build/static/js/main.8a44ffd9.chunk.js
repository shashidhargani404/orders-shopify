(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{125:function(e,t){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),s=a(10),c=(a(78),a(13)),i=a(11);var m=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark sticky-top"},r.a.createElement(c.b,{to:"/",className:"text-decoration-none"},r.a.createElement("span",{className:"font-weight-bold text-light",style:{fontSize:"24px",marginLeft:"34px"}},"Shopify - Book Store Orders")),r.a.createElement("a",{href:"https://saahityabookstore.myshopify.com/",target:"_blank",className:"pr-5 text-light"},"Store"))},d=a(21),u=a(22),h=a(24),p=a(23),f=a(25),E=a(68),b=a(36),g=a.n(b),v=a(62),y=a.n(v),N=a(63),_=a.n(N);var O=function(){var e=document.getElementById("pdfdiv");y()(e).then((function(e){var t=170*e.height/e.width,a=e.toDataURL(),n=new _.a("p","mm","a4");n.addImage(a,"JPEG",20,20,170,t),n.save("shopify_orders.pdf")}))},S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleNewOrders=function(){a.setState((function(){return{newOrder:0}}))},a.handleSearch=function(e){var t=e.target.value;a.setState((function(e){return{search:t,searchItems:e.searchData.filter((function(e){return e.data.includes(t)&&t}))}}))},a.state={newOrder:0,searchData:[],searchItems:[],search:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({searchData:e.orders.map((function(e){return{_id:e._id,data:e.name+" "+g()(e.created_at).format("MMM Do YY, h:mm a")+" "+e.first_name+" "+e.last_name+" "+e.total_price.toFixed(2)}}))}),e.orders.length==1+this.props.orders.length&&this.setState((function(e){return{newOrder:e.newOrder+1}}))}},{key:"render",value:function(){var e=this,t=this.state.search.length?this.props.orders.filter((function(t){return e.state.searchItems.map((function(e){return e._id})).includes(t._id)})):this.props.orders;return r.a.createElement("div",{className:"content-fluid p-5 pt-0"},r.a.createElement("form",{className:"d-flex flex-column align-items-start form-inline my-2 my-lg-0",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:this.state.search,onChange:this.handleSearch}),r.a.createElement("span",{className:"text-secondary mt-1",style:{fontSize:"14px"}},"* Search by Order, Date, Customer or Total")),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center mt-3 mb-2"},r.a.createElement("h6",{className:"m-0"},"Total Orders - ",this.props.orders.length),r.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:O},"Generate PDF")),this.state.newOrder?r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Hey congrats,")," You got ",this.state.newOrder," new order(s).",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:this.handleNewOrders},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):"",r.a.createElement("table",{id:"pdfdiv",className:"table table-hover",style:{backgroundColor:"rgb(240,240,240)"}},r.a.createElement("thead",{className:"bg-secondary text-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Order"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Customer"),r.a.createElement("th",{scope:"col"},"Total"))),r.a.createElement("tbody",null,t.length?t.map((function(e,t){return r.a.createElement("tr",{key:e._id},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null," ",g()(e.created_at).format("MMM Do YY, h:mm a")," "),r.a.createElement("td",null,e.first_name+" "+e.last_name,r.a.createElement(c.b,{to:"/customers/".concat(e._id)},r.a.createElement(E.a,{className:"ml-2"}))),r.a.createElement("td",null,e.total_price.toFixed(2)))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",className:"text-center"},"No orders found")))))}}]),t}(r.a.Component),x=Object(s.b)((function(e){return{orders:e.orders}}))(S),w=a(64),D=a.n(w).a.create({baseURL:"/"}),j=function(e,t){return function(a){D.put("/orders/".concat(t.match.params.id),e).then((function(e){e.data.hasOwnProperty("email")&&(a({type:"EDIT_ORDER",payload:e.data}),t.history.push("/"))})).catch((function(e){console.log(e)}))}},C=a(65),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.first_name,r=t.last_name,l=t.email,o=t.phone,s={first_name:n,last_name:r,email:l,phone:"+91"+o};o&&10!==o.length?a.setState({phoneError:!0}):r&&(l||o)?(a.props.handleSubmit(s),a.setState({loading:!0})):window.alert("Fields are required!")},a.handleChange=function(e){"phone"===e.target.name&&!isNaN(e.target.value)&&e.target.value.length<=10?a.setState({phone:e.target.value}):"phone"!==e.target.name&&a.setState(Object(C.a)({},e.target.name,e.target.value))},a.state={first_name:e.first_name||"",last_name:e.last_name||"",email:e.email||"",phone:e.phone?e.phone.slice(3):"",phoneError:!1,code:"+91",loading:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.first_name,a=e.last_name,n=e.email,l=e.phone,o=e.phoneError,s=e.code,c=e.loading,i=t.length>2?"form-control is-valid":"form-control",m=a.length>2?"form-control is-valid":"form-control is-invalid",d=/\S+@\S+\.\S+/.test(n)||l?"form-control is-valid":"form-control is-invalid",u=10===l.length||n?"form-control is-valid":"form-control is-invalid";return r.a.createElement("div",{className:"container p-4",style:{width:"500px"}},r.a.createElement("h4",{className:"mb-3"},"Edit Customer Details"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"first_name"},"First name"),r.a.createElement("input",{type:"text",name:"first_name",value:t,onChange:this.handleChange,className:i,id:"first_name","aria-describedby":"first_name",placeholder:"First name"}),t?"":r.a.createElement("p",{className:"text-danger mt-2",style:{fontSize:"13px"}},"* First name NA")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"last_name"},"Last name"),r.a.createElement("input",{type:"text",name:"last_name",value:a,onChange:this.handleChange,className:m,id:"last_name","aria-describedby":"last_name",placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",name:"email",value:n,onChange:this.handleChange,className:d,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email address"}),n?"":r.a.createElement("p",{className:"text-danger mt-2",style:{fontSize:"14px"}},"* Email NA")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPhone"},"Phone"),r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},s)),r.a.createElement("input",{type:"phone",name:"phone",value:l,onChange:this.handleChange,className:u,id:"exampleInputPhone",placeholder:"Enter mobile number"})),l?o?r.a.createElement("p",{className:"text-danger mt-2",style:{fontSize:"14px"}},"* It requires 10 digits."):"":r.a.createElement("p",{className:"text-danger mt-2",style:{fontSize:"14px"}},"* Phone number NA.")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")),c&&r.a.createElement("div",{className:"d-flex justify-content-center",style:{position:"fixed",left:"50%",top:"39%"}},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(r.a.Component),R=Object(s.b)()(k);var I=Object(s.b)((function(e,t){return{order:e.orders.find((function(e){return e._id===t.match.params.id}))}}))((function(e){return e.order?r.a.createElement(R,Object.assign({},e.order,{handleSubmit:function(t){e.dispatch(j(t,e))}})):""}));var F=function(e){return r.a.createElement(c.a,null,r.a.createElement(m,null),r.a.createElement(i.a,{path:"/",component:x,exact:!0}),r.a.createElement(i.a,{path:"/customers/:id",component:I}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(66),A=a.n(P),T=a(14),z=a(67),L=a(37),M=[],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ORDERS":return t.payload.reverse();case"ADD_ORDER":return[t.payload].concat(Object(L.a)(e));case"EDIT_ORDER":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return Object(L.a)(e)}},B=function(){return Object(T.d)(Object(T.c)({orders:Y}),Object(T.a)(z.a))}();B.dispatch((function(e){D.get("/orders").then((function(t){Array.isArray(t.data)&&e({type:"SET_ORDERS",payload:t.data})})).catch((function(e){console.log(e)}))})),A()("/").on("new order",(function(e){B.dispatch(function(e){return{type:"ADD_ORDER",payload:e}}(e))}));var J=r.a.createElement(s.a,{store:B},r.a.createElement(F,null));o.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e,t,a){e.exports=a(128)},78:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.8a44ffd9.chunk.js.map