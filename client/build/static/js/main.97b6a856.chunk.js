(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{50:function(e,t,n){e.exports=n(86)},59:function(e,t,n){},61:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(24),c=n.n(o),l=n(3),i=(n(59),n(21)),s=n(20),u=n(43),d=n.n(u),m=(n(61),n(8)),p=n(10),h=n(11),f=n(13),E=n(12),g=n(14),y=n(44),b=n(26);function v(){var e=function(e){};return r.a.createElement(y.GoogleLogin,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",render:function(e){return r.a.createElement("button",{id:"signup-google",onClick:e.onClick,disabled:e.disabled},r.a.createElement(b.b,{id:"google-icon"}),r.a.createElement("span",null,"Log in with Google"))},buttonText:"Login with Google",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})}var C=n(45),S=n.n(C).a.create({baseURL:"/",headers:{"x-auth":localStorage.getItem("x-auth-moneymath")}}),w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password};S.post("/login",a).then((function(e){if(e.data.passwordError)n.setState({error:e.data.passwordError});else if(e.data.token){var t=e.data,a=t.token;t.user;localStorage.setItem("x-auth-moneymath",a),window.location.href="/"}})).catch((function(e){console.log(e)}))},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state={email:"",password:"",error:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=!t||n.length<8?{backgroundColor:"lightgray"}:{};return r.a.createElement("div",{id:"signup-main-div",style:{paddingBottom:"25px",marginBottom:"150px"}},r.a.createElement("h1",{id:"signup-header"},"moneyMath"),r.a.createElement("div",{id:"signup-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("button",{disabled:!t||n.length<8,id:"signup-submit-button",type:"submit",style:o},"Log In"))),a?r.a.createElement("p",{style:{color:"red",fontSize:"13px",letterSpacing:"1px",width:"260px",lineHeight:"20px",marginBottom:"10px"}},a):"",r.a.createElement(i.b,{id:"signup-third-p",style:{margin:"5px 0 10px",textDecoration:"none"},to:"/"},"Forgot password?"),r.a.createElement("p",{id:"signup-third-p"},"Don't have an account? ",r.a.createElement(i.b,{to:"/signup",style:{textDecoration:"none"}},"Sign up")),r.a.createElement("div",{id:"signup-form-separater",style:{margin:"0px 0 20px"}},r.a.createElement("hr",null),r.a.createElement("p",null,"OR"),r.a.createElement("hr",null)),r.a.createElement(v,null))}}]),t}(r.a.Component),k=Object(l.b)()(w);var A=function(){return r.a.createElement("div",{id:"signup-page"},r.a.createElement(k,null))},x=function(e){return{type:"SET_INCOMES",payload:e}},O=function(e){return function(t){S.post("/incomes",e).then((function(e){"object"===typeof e.data&&t({type:"ADD_INCOME",payload:e.data})})).catch((function(e){console.log(e)}))}},N=function(e,t){return function(n){S.put("/incomes/".concat(e),t).then((function(e){"object"===typeof e.data&&n({type:"EDIT_INCOME",payload:e.data})})).catch((function(e){console.log(e)}))}},T=function(e){return function(t){S.put("/incomes",e).then((function(e){var n=e.data;Array.isArray(n)&&t(x(e.data))})).catch((function(e){console.log(e)}))}},j=function(e){return function(t){S.put("/incomes_delete",e).then((function(e){var n=e.data;Array.isArray(n)&&t(x(e.data))})).catch((function(e){console.log(e)}))}},_=function(e){return{type:"SET_EXPENSES",payload:e}},B=function(e){return function(t){S.post("/expenses",e).then((function(e){"object"===typeof e.data&&t({type:"ADD_EXPENSE",payload:e.data})})).catch((function(e){console.log(e)}))}},I=function(e,t){return function(n){S.put("/expenses/".concat(e),t).then((function(e){"object"===typeof e.data&&n({type:"EDIT_EXPENSE",payload:e.data})})).catch((function(e){console.log(e)}))}},D=function(e){return function(t){S.put("/expenses",e).then((function(e){var n=e.data;Array.isArray(n)&&t(_(n))})).catch((function(e){console.log(e)}))}},L=function(e){return function(t){S.put("/expenses_delete",e).then((function(e){var n=e.data;Array.isArray(n)&&t(_(n))})).catch((function(e){console.log(e)}))}},F=function(e){return{type:"SET_BORROWS",payload:e}},R=function(e){return function(t){S.post("/borrows",e).then((function(e){"object"===typeof e.data&&t({type:"ADD_BORROW",payload:e.data})})).catch((function(e){console.log(e)}))}},P=function(e,t){return function(n){S.put("/borrows/".concat(e),t).then((function(e){"object"===typeof e.data&&n({type:"EDIT_BORROW",payload:e.data})})).catch((function(e){console.log(e)}))}},M=function(e){return function(t){S.put("/borrows",e).then((function(e){var n=e.data;Array.isArray(n)&&t(F(n))})).catch((function(e){console.log(e)}))}},U=function(e){return function(t){S.put("/borrows_delete",e).then((function(e){var n=e.data;Array.isArray(n)&&t(F(n))})).catch((function(e){console.log(e)}))}},G=function(e){return{type:"SET_LENDS",payload:e}},W=function(e){return function(t){S.post("/lends",e).then((function(e){"object"===typeof e.data&&t({type:"ADD_LEND",payload:e.data})})).catch((function(e){console.log(e)}))}},X=function(e,t){return function(n){S.put("/lends/".concat(e),t).then((function(e){"object"===typeof e.data&&n({type:"EDIT_LEND",payload:e.data})})).catch((function(e){console.log(e)}))}},q=function(e){return function(t){S.put("/lends",e).then((function(e){var n=e.data;Array.isArray(n)&&t(G(n))})).catch((function(e){console.log(e)}))}},z=function(e){return function(t){S.put("/lends_delete",e).then((function(e){var n=e.data;Array.isArray(n)&&t(G(n))})).catch((function(e){console.log(e)}))}},$=function(e){return{type:"SET_CATEGORIES",payload:e}},H=function(e){return function(t){S.post("/categories",e).then((function(e){"object"===typeof e.data&&t({type:"ADD_CATEGORY",payload:e.data})})).catch((function(e){console.log(e)}))}},J=function(e){return{type:"SET_USER",payload:e}},Y=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.username,o=t.password,c=/\S+@\S+\.\S+/;if(c.test(a)||r||o)if(c.test(a))if(r)if(o){var l={email:a,username:r,password:o};S.post("/register",l).then((function(e){if(e.data.errmsg)n.setState({emailError:"* Email already exist. Please login"});else if(!e.data.errors){var t=e.data,a=t.user,r=t.token;localStorage.setItem("x-auth-moneymath",r),n.props.dispatch(J(a)),n.props.history.push("/")}})).catch((function(e){console.log(e)}))}else n.setState({passwordError:"* Password requires 8 chars min."});else n.setState({usernameError:"* Username requires 5 chars min."});else n.setState({emailError:"* Invalid Email."});else n.setState({emailError:"* Invalid Email.",usernameError:"* Username requires 5 chars min.",passwordError:"* Password requires 8 chars min."})},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state={email:"",emailError:"",username:"",usernameError:"",fullName:"",password:"",passwordError:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.emailError,n=e.usernameError,a=e.passwordError;return r.a.createElement("div",{id:"signup-page"},r.a.createElement("div",{id:"signup-main-div"},r.a.createElement("h1",{id:"signup-header"},"moneyMath"),r.a.createElement("p",{id:"signup-first-p"},"Sign up to do some Math on Money for better finance."),r.a.createElement(v,null),r.a.createElement("div",{id:"signup-form-separater"},r.a.createElement("hr",null),r.a.createElement("p",null,"OR"),r.a.createElement("hr",null)),r.a.createElement("div",{id:"signup-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Email",name:"email",value:this.state.mobile,onChange:this.handleChange}),this.state.emailError?r.a.createElement("p",{style:{color:"red",fontSize:"13px",letterSpacing:"1px",textAlign:"left",width:"260px"}}," ",t," "):"",r.a.createElement("input",{placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.usernameError?r.a.createElement("p",{style:{color:"red",fontSize:"13px",letterSpacing:"1px",textAlign:"left",width:"260px"}}," ",n," "):"",r.a.createElement("input",{disabled:!0,style:{backgroundColor:"gray"},placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange}),this.state.passwordError?r.a.createElement("p",{style:{color:"red",fontSize:"13px",letterSpacing:"1px",textAlign:"left",width:"260px"}}," ",a," "):"",r.a.createElement("button",{id:"signup-submit-button",type:"submit"},"Sign Up"))),r.a.createElement("p",{id:"signup-second-p"},"By signing up, you agree to our ",r.a.createElement("b",null,"Terms"),", ",r.a.createElement("b",null,"Data Policy")," and ",r.a.createElement("b",null,"Cookies Policy"),"."),r.a.createElement("p",{id:"signup-third-p"},"Have an account ? ",r.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},"Log In"))))}}]),t}(r.a.Component),K=Object(l.b)()(Y),Q=(n(80),n(81),n(5)),V=n(47),Z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault()},n.handleChange=function(e){n.setState({search:e.target.value})},n.handleFocus=function(){document.getElementById("NB-search-bar").style.cssText="background-color:rgb(263, 263, 263); box-shadow: 2px 2px 10px 5px black;",document.getElementById("NB-button-one").style.cssText="color:black"},n.handleBlur=function(){document.getElementById("NB-search-bar").style.cssText="background-color:rgba(255, 255, 255, 0.301); box-shadow:none",document.getElementById("NB-button-one").style.cssText="color:rgb(243, 243, 243)"},n.handleClick=function(){n.setState({search:""})},n.state={search:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.search?1:0;return r.a.createElement("form",{id:"NB-search-bar",onSubmit:this.handleSubmit},r.a.createElement("button",{id:"NB-button-one"},r.a.createElement(Q.f,null)),r.a.createElement("input",{placeholder:"Search statement",value:this.state.search,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur}),r.a.createElement("button",{id:"NB-button",style:{opacity:e,color:"black"},onClick:this.handleClick},r.a.createElement(V.a,null)))}}]),t}(r.a.Component);var ee=Object(l.b)((function(e){return{user:e.user}}))((function(e){return r.a.createElement("div",{id:"NB-user-profile"},r.a.createElement("span",null,e.user&&e.user.username?e.user.username[0].toUpperCase():""),r.a.createElement("div",{id:"NB-logout"},r.a.createElement("button",{onClick:function(){S.delete("/logout").then((function(t){"logged_out"===t.data&&(localStorage.removeItem("x-auth-moneymath"),e.dispatch(J({})),e.dispatch(x([])),e.dispatch(_([])),e.dispatch(F([])),e.dispatch(G([])),e.dispatch($([])))})).catch((function(e){console.log(e)}))}},"Log out")))}));var te=function(e){return r.a.createElement("div",{id:"NB-container"},r.a.createElement("div",{id:"NB-icon"},r.a.createElement(b.a,{id:"NB-cal-icon"}),r.a.createElement("span",null,"MoneyMath")),r.a.createElement("div",{id:"NB-sb-up"},r.a.createElement(Z,null),r.a.createElement(ee,null)))},ne=(n(82),n(19)),ae=n(27),re=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){n.setState({name:e.target.value})},n.handleSubmit=function(){var e={name:n.state.name,type:n.props.type};n.state.name?(n.props.dispatch(H(e)),n.props.handleAddForm("AC-form","none"),n.setState({name:""})):n.setState({nameError:"* Field required."})},n.state={name:"",nameError:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.nameError?{borderColor:"red"}:{};return r.a.createElement("div",{id:"AC-form",style:e},r.a.createElement("input",{placeholder:"Enter new category",value:this.state.name,onChange:this.handleChange}),r.a.createElement("button",{type:"button",onClick:this.handleSubmit},r.a.createElement(ae.a,null)))}}]),t}(r.a.Component),oe=Object(l.b)()(re),ce=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.amount,r=t.category,o={amount:a,category:r,description:t.description};if(a||r)if(r)if(a){switch(n.state.type){case"income":n.props.dispatch(O(o));break;case"expense":n.props.dispatch(B(o));break;case"borrow":n.props.dispatch(R(o));break;case"lend":n.props.dispatch(W(o))}n.props.handleAddForm("SB-add-new-form","none"),n.setState({amount:"",category:"",description:""})}else n.setState({amountError:!0});else n.setState({categoryError:!0});else n.setState({categoryError:!0,amountError:!0})},n.handleChange=function(e){var t;n.setState((t={},Object(m.a)(t,e.target.name,e.target.value),Object(m.a)(t,e.target.name+"Error",!1),t))},n.handleClick=function(e,t){for(var n=0,a=["income","expense","borrow","lend"];n<a.length;n++){var r=a[n];document.getElementById(r).style.display="none",document.getElementById("NT-"+r).style.borderBottom="4px solid rgba(255, 255, 255, 0)"}document.getElementById(e).style.display="block",document.getElementById("NT-"+e).style.borderBottom="4px solid "+t},n.state={type:"income",category:"",categoryError:!1,amount:"",amountError:!1,description:""},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=(t.type,t.category,t.categoryError),a=(t.amount,t.amountError),o=(t.description,n?{borderColor:"red"}:{}),c=a?{outline:"0.5px solid red"}:{},l=a?{border:"none"}:{border:"1px solid rgb(165, 165, 165)"};return r.a.createElement("div",{id:"SB-add-new-form"},r.a.createElement("button",{id:"AN-close-btn",onClick:function(){return e.props.handleAddForm("SB-add-new-form","none")}},r.a.createElement(ne.b,{id:"AN-close-btn-icon"})),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"AN-radios"},r.a.createElement("input",{type:"radio",name:"type",value:"income",checked:"income"===this.state.type,onChange:this.handleChange,id:"AN-income-radio",onClick:function(){e.handleClick("income","green")}}),r.a.createElement("label",{id:"AN-income-label",htmlFor:"AN-income-radio"},"Income"),r.a.createElement("input",{type:"radio",name:"type",value:"expense",checked:"expense"===this.state.type,onChange:this.handleChange,id:"AN-expense-radio",onClick:function(){e.handleClick("expense","red")}}),r.a.createElement("label",{htmlFor:"AN-expense-radio"},"Expense")),r.a.createElement("div",{className:"AN-radios"},r.a.createElement("input",{id:"AN-borrow-radio",type:"radio",name:"type",value:"borrow",checked:"borrow"===this.state.type,onChange:this.handleChange,onClick:function(){e.handleClick("borrow","black")}}),r.a.createElement("label",{id:"AN-borrow-label",htmlFor:"AN-borrow-radio"},"Borrow"),r.a.createElement("input",{id:"AN-lend-radio",type:"radio",name:"type",value:"lend",checked:"lend"===this.state.type,onChange:this.handleChange,onClick:function(){e.handleClick("lend","orange")}}),r.a.createElement("label",{htmlFor:"AN-lend-radio"},"Lend")),r.a.createElement("div",{id:"AN-category-div"},r.a.createElement("label",null,"Category"),r.a.createElement("button",{type:"button",onClick:function(){return e.props.handleAddForm("AC-form","flex")}},r.a.createElement(ne.e,{className:"AN-category-add-icon"}))),r.a.createElement(oe,{handleAddForm:this.props.handleAddForm,type:this.state.type}),r.a.createElement("select",{id:"AN-category-select",onChange:this.handleChange,name:"category",value:this.state.category,style:o},r.a.createElement("option",{value:""},"Select"),this.props.categories.filter((function(t){return t.type===e.state.type})).map((function(e){return r.a.createElement("option",{className:"AN-category-option",key:e._id,value:e._id},e.name)}))),r.a.createElement("label",null,"Amount"),r.a.createElement("div",{style:c,id:"AN-amount-input"},r.a.createElement("span",null,"$"),r.a.createElement("input",{style:l,name:"amount",value:this.state.amount,onChange:this.handleChange,placeholder:"Amount"})),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{id:"AN-description-textarea",name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{id:"AN-add-btn",type:"submit",value:"Add"})))}}]),t}(r.a.Component),le=Object(l.b)((function(e){return{categories:e.categories}}))(ce);var ie=function(e){var t=function(e,t){document.getElementById(e).style.display=t};return r.a.createElement("div",null,r.a.createElement("button",{id:"SB-add-new-btn",onClick:function(){return t("SB-add-new-form","block")}},"add new ",r.a.createElement("span",null,"$")),r.a.createElement(le,{handleAddForm:t}))};var se=function(e){return r.a.createElement("div",{id:"Card"},r.a.createElement("h4",null,e.title),r.a.createElement("h1",null,"$ ",e.total,"/-"),r.a.createElement("p",null,e.body))};var ue=Object(l.b)((function(e){return{incomes:e.incomes.filter((function(e){return!e.isTrashed})),expenses:e.expenses.filter((function(e){return!e.isTrashed})),borrows:e.borrows.filter((function(e){return!e.isTrashed})),lends:e.lends.filter((function(e){return!e.isTrashed}))}}))((function(e){var t=e.incomes.reduce((function(e,t){return e+t.amount}),0),n=e.expenses.reduce((function(e,t){return e+t.amount}),0),a=e.borrows.filter((function(e){return e.isPending})).reduce((function(e,t){return e+t.amount}),0),o=e.lends.filter((function(e){return e.isPending})).reduce((function(e,t){return e+t.amount}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{total:t-n,title:"Total Saving",body:"This is all you save till now."}),r.a.createElement(se,{total:t-n+a-o,title:"Cash on Hand",body:"Total money you have with you."}),r.a.createElement(se,{total:a,title:"Borrowed Money",body:"This is what you have to give back."}),r.a.createElement(se,{total:o,title:"Lended Money",body:"This is what you have to take back."}))}));var de=function(e){return r.a.createElement("div",{id:"SB-main-div"},r.a.createElement(ie,null),r.a.createElement(ue,null))};n(83),n(84);var me=function(e){var t=function(e,t){for(var n=0,a=["income","expense","borrow","lend"];n<a.length;n++){var r=a[n];document.getElementById(r).style.display="none",document.getElementById("NT-"+r).style.borderBottom="4px solid rgba(255, 255, 255, 0)"}document.getElementById(e).style.display="block",document.getElementById("NT-"+e).style.borderBottom="4px solid "+t};return r.a.createElement("div",{id:"NT-main-div"},r.a.createElement("button",{id:"NT-income",onClick:function(){t("income","green")}},"Income"),r.a.createElement("button",{id:"NT-expense",onClick:function(){t("expense","red")}},"Expense"),r.a.createElement("button",{id:"NT-borrow",onClick:function(){t("borrow","black")}},"Borrow"),r.a.createElement("button",{id:"NT-lend",onClick:function(){t("lend","orange")}},"Lend"))},pe=(n(85),n(4)),he=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e,t,a,r){n.setState({editId:e,amount:t,category:a,description:r})},n.handleAllSelects=function(){n.setState({selects:n.state.selects.length===n.state.statements.filter((function(e){return e.isTrashed===n.state.isTrashList})).length?[]:n.state.statements.filter((function(e){return e.isTrashed===n.state.isTrashList})).map((function(e){return e._id}))},(function(){console.log(n.state.selects)}))},n.handleSelects=function(e){n.setState((function(t){return{selects:t.selects.includes(e)?t.selects.filter((function(t){return t!==e})):[].concat(Object(pe.a)(t.selects),[e])}}))},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleFilterCategory=function(e){var t=e.target.value;n.setState((function(){return{filterCategory:t,statements:t?n.props.statements.filter((function(e){return e.category._id===t})):n.props.statements,selects:[]}}))},n.handleSubmit=function(){var e=n.state,t=e.editId,a={amount:e.amount,category:e.category,description:e.description};switch(n.props.type){case"income":n.props.dispatch(N(t,a));break;case"expense":n.props.dispatch(I(t,a));break;case"borrow":n.props.dispatch(P(t,a));break;case"lend":n.props.dispatch(X(t,a))}n.setState({editId:"",amount:"",category:"",description:""})},n.handleTrashAndFav=function(e,t,a){var r=a?[a]:n.state.selects;switch(n.props.type){case"income":n.props.dispatch(T({selects:r,propType:e,value:t}));break;case"expense":n.props.dispatch(D({selects:r,propType:e,value:t}));break;case"borrow":n.props.dispatch(M({selects:r,propType:e,value:t}));break;case"lend":n.props.dispatch(q({selects:r,propType:e,value:t}))}},n.handleDeleteTrash=function(e){var t=e?[e]:n.state.selects;switch(n.props.type){case"income":n.props.dispatch(j({selects:t}));break;case"expense":n.props.dispatch(L({selects:t}));break;case"borrow":n.props.dispatch(U({selects:t}));break;case"lend":n.props.dispatch(z({selects:t}))}},n.handleTrashAndStarList=function(e,t){var a;n.setState((a={},Object(m.a)(a,e,t),Object(m.a)(a,"selects",[]),a))},n.state={isTrashList:!1,isStarList:!1,statements:e.statements,filterCategory:"",editId:"",amount:"",category:"",description:"",selects:[]},n}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({statements:e.statements})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isTrashList,a=t.isStarList,o=t.statements,c=t.selects,l=t.filterCategory,i=t.editId,s=t.amount,u=t.category,d=t.description;return o.length?r.a.createElement("div",{id:this.props.type},r.a.createElement("div",{id:"statement-top-div"},r.a.createElement("button",{onClick:this.handleAllSelects}," ",o.filter((function(e){return e.isTrashed===n})).length===c.length?r.a.createElement(Q.a,{style:{color:"black"}}):r.a.createElement(Q.b,null)),n?r.a.createElement("button",{onClick:function(){return e.handleDeleteTrash()}},r.a.createElement(Q.c,null)):r.a.createElement("button",{onClick:function(){return e.handleTrashAndFav("isTrashed",!0)}},r.a.createElement(Q.c,null)),r.a.createElement("select",{value:l,onChange:this.handleFilterCategory},r.a.createElement("option",{value:""},"All"),this.props.categories.filter((function(t){return t.type===e.props.type})).map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),r.a.createElement("button",{onClick:function(){return e.handleTrashAndStarList("isStarList",!a)}},a?r.a.createElement(ne.f,{style:{color:"gold"}}):r.a.createElement(Q.g,null)," "),r.a.createElement("button",{onClick:function(){return e.handleTrashAndStarList("isTrashList",!n)}},n?r.a.createElement(Q.c,{style:{color:"red"}}):r.a.createElement(Q.c,null))),r.a.createElement("ul",null,o.filter((function(e){return e.isTrashed===n&&(!a||e.isStarred)})).map((function(t){var a=t.isPending?{backgroundColor:"#c2dbff"}:{};return r.a.createElement("li",{style:a,id:"statement",key:t._id},r.a.createElement("button",{className:"statement-icons",onClick:function(){return e.handleSelects(t._id)}},c.includes(t._id)?r.a.createElement(Q.a,null):r.a.createElement(Q.b,null)),r.a.createElement("button",{className:"statement-icons",onClick:function(){return e.handleTrashAndFav("isStarred",!t.isStarred,t._id)}},t.isStarred?r.a.createElement(ne.f,{style:{color:"gold"}}):r.a.createElement(Q.g,null)),i===t._id?r.a.createElement("input",{className:"statement-amount-input",autoComplete:"off",name:"amount",value:s,onChange:e.handleChange}):r.a.createElement("p",{id:"statement-amount"},"$ ",t.amount),r.a.createElement("div",{id:"statement-dscp-date"},r.a.createElement("div",{id:"statement-catg-dscp"},i===t._id?r.a.createElement("select",{className:"statement-catg-select",name:"category",value:u,onChange:e.handleChange},e.props.categories.filter((function(t){return t.type===e.props.type.toLowerCase()})).map((function(e){return r.a.createElement("option",{name:"category",value:e._id,key:e._id},e.name)}))):r.a.createElement("p",{id:"statement-catg"},t.category.name),i===t._id?r.a.createElement("textarea",{className:"statement-dscp-textarea",name:"description",value:d,onChange:e.handleChange}):r.a.createElement("p",{id:"statement-dscp"},t.description)),r.a.createElement("div",{style:{display:"flex",height:"fit-content"}},r.a.createElement("p",{id:"statement-date"},t.createdAt.slice(0,10)),r.a.createElement("button",{className:"statement-button statement-icons"},r.a.createElement(ae.b,null)),n?r.a.createElement("button",{className:"statement-button statement-icons",onClick:function(){return e.handleDeleteTrash(t._id)}},r.a.createElement(Q.c,null)):i===t._id?r.a.createElement("button",{className:"statement-button statement-icons",onClick:e.handleSubmit},r.a.createElement(ne.d,null)):r.a.createElement("button",{className:"statement-button statement-icons",onClick:function(){e.handleClick(t._id,t.amount,t.category._id,t.description)}},r.a.createElement(Q.d,null)),r.a.createElement("button",{className:"statement-button statement-icons",onClick:function(){return e.handleTrashAndFav("isTrashed",!n,t._id)}},n?r.a.createElement(Q.e,null):r.a.createElement(Q.c,null)),"borrow"===e.props.type||"lend"===e.props.type?r.a.createElement("button",{className:"statement-button statement-icons",onClick:function(){return e.handleTrashAndFav("isPending",!t.isPending,t._id)}},t.isPending?r.a.createElement(ne.a,null):r.a.createElement(ne.c,null)):"")))})))):r.a.createElement("p",{id:this.props.type,className:"no-statement"},"No statements are available. Add one to See.")}}]),t}(r.a.Component),fe=Object(l.b)((function(e){return{categories:e.categories}}))(he);var Ee=Object(l.b)((function(e){return{incomes:e.incomes}}))((function(e){return r.a.createElement(fe,{statements:e.incomes,type:"income"})}));var ge=Object(l.b)((function(e){return{expenses:e.expenses}}))((function(e){return r.a.createElement(fe,{statements:e.expenses,type:"expense"})}));var ye=Object(l.b)((function(e){return{borrows:e.borrows}}))((function(e){return r.a.createElement(fe,{statements:e.borrows,type:"borrow"})}));var be=Object(l.b)((function(e){return{lends:e.lends}}))((function(e){return r.a.createElement(fe,{statements:e.lends,type:"lend"})}));var ve=function(e){return r.a.createElement("div",{id:"IEBLs"},r.a.createElement(Ee,null),r.a.createElement(ge,null),r.a.createElement(ye,null),r.a.createElement(be,null))};var Ce=function(e){return r.a.createElement("div",{id:"Container-main-div"},r.a.createElement(me,null),r.a.createElement(ve,null))};var Se=function(e){return r.a.createElement("div",{id:"MM-main-div"},r.a.createElement(te,null),r.a.createElement("div",{id:"SideBar-Container-mian-div"},r.a.createElement(de,null),r.a.createElement(Ce,null)))};var we=Object(l.b)((function(e){return{user:e.user}}))((function(e){return r.a.createElement(i.a,null,d.a.isEmpty(e.user)?r.a.createElement(s.a,{path:"/",component:A,exact:!0}):r.a.createElement(s.a,{path:"/",component:Se,exact:!0}),r.a.createElement(s.a,{path:"/signup",component:K}))})),ke=n(22),Ae=n(48),xe=n(49),Oe={},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;default:return Object(xe.a)({},e)}},Te=[],je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INCOMES":return t.payload;case"ADD_INCOME":return[].concat(Object(pe.a)(e),[t.payload]);case"EDIT_INCOME":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return Object(pe.a)(e)}},_e=[],Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EXPENSES":return t.payload;case"ADD_EXPENSE":return[].concat(Object(pe.a)(e),[t.payload]);case"EDIT_EXPENSE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return Object(pe.a)(e)}},Ie=[],De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BORROWS":return t.payload;case"ADD_BORROW":return[].concat(Object(pe.a)(e),[t.payload]);case"EDIT_BORROW":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return Object(pe.a)(e)}},Le=[],Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LENDS":return t.payload;case"ADD_LEND":return[].concat(Object(pe.a)(e),[t.payload]);case"EDIT_LEND":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return Object(pe.a)(e)}},Re=[],Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return t.payload;case"ADD_CATEGORY":return[].concat(Object(pe.a)(e),[t.payload]);default:return Object(pe.a)(e)}},Me=function(){return Object(ke.d)(Object(ke.c)({user:Ne,incomes:je,expenses:Be,borrows:De,lends:Fe,categories:Pe}),Object(ke.a)(Ae.a))}();localStorage.getItem("x-auth-moneymath")&&Me.dispatch((function(e){S.get("/user").then((function(t){var n=t.data;n.username&&n.email?(e(J(n)),e((function(e){S.get("/incomes").then((function(t){var n=t.data;Array.isArray(n)&&e(x(n))})).catch((function(e){console.log(e)}))})),e((function(e){S.get("/expenses").then((function(t){var n=t.data;Array.isArray(n)&&e(_(n))})).catch((function(e){console.log(e)}))})),e((function(e){S.get("/borrows").then((function(t){var n=t.data;Array.isArray(n)&&e(F(n))})).catch((function(e){console.log(e)}))})),e((function(e){S.get("/lends").then((function(t){var n=t.data;Array.isArray(n)&&e(G(n))})).catch((function(e){console.log(e)}))})),e((function(e){S.get("/categories").then((function(t){var n=t.data;Array.isArray(n)&&e($(n))})).catch((function(e){console.log(e)}))}))):(localStorage.removeItem("x-auth-moneymath"),window.location.href="/")})).catch((function(e){console.log(e)}))}));var Ue=r.a.createElement(l.a,{store:Me},r.a.createElement(we,null));c.a.render(Ue,document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.97b6a856.chunk.js.map