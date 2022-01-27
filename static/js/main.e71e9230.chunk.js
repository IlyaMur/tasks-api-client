(this["webpackJsonprest-client-tasks"]=this["webpackJsonprest-client-tasks"]||[]).push([[0],{134:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(30),c=a.n(n),i=a(27),l=(a(134),a(6)),o=a(7),u=a(263),d=a(261),j=a(127),b=a(268),m=a(20),h=a(11),p=a.n(h),x=a(31),O=a.n(x),v="https://rest-todoapp.herokuapp.com/api",f=a(37),g=function(){var e=Object(m.a)(p.a.mark((function e(t,a,s){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"/signup",{method:"POST",body:JSON.stringify({email:t,password:s,username:a}),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t,a){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v+"/login",{method:"POST",body:JSON.stringify({email:t,password:a}),headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),localStorage.removeItem("user"),e.next=4,fetch(v+"/logout",{method:"DELETE",body:JSON.stringify({refreshToken:t.refreshToken})});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("user")),e.prev=1,e.next=4,O.a.post(v+"/refresh",{refreshToken:a.refreshToken});case 4:return s=e.sent,r=s.data,console.log("Got new access token and refresh token"),localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(r)),t.response.config.headers.Authorization="Bearer "+r.accessToken,e.abrupt("return",Promise.resolve());case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),w={signup:g,login:k,logout:N,getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))},refreshAuthLogic:y,isJWTExpired:function(){var e=w.getCurrentUser();return 1e3*Object(f.a)(e.refreshToken).exp<Date.now()}},S=a(266),C=a(260),T=a(47),E=a(25),I=a(1),B=function(e){var t=e.setUsername,a=e.setIsAuth,r=Object(s.useState)([]),n=Object(l.a)(r,2),c=n[0],o=n[1],u=E.a().shape({password:E.b().required("*Password is required"),email:E.b().email("*Must be a valid email address").max(100,"*Email must be less than 100 characters").required("*Email is required")}),d=function(){var e=Object(m.a)(p.a.mark((function e(s){var r,n,c,i,l,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.email,n=s.password,e.next=3,w.login(r,n);case 3:return c=e.sent,e.next=6,c.text();case 6:i=e.sent,l=JSON.parse(i),c.ok?(a(!0),localStorage.setItem("user",JSON.stringify(l)),u=Object(f.a)(l.accessToken),t(u.name)):o(l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"p-3 mt-4",children:[Object(I.jsx)(T.a,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:d,children:function(e){var t=e.values,a=e.errors,s=e.touched,r=e.handleChange,n=e.handleBlur,c=e.handleSubmit;return Object(I.jsxs)(S.a,{onSubmit:c,children:[Object(I.jsx)("h1",{className:"text-center",children:" Login "}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(I.jsx)(S.a.Label,{children:"Email address"}),Object(I.jsx)(S.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:r,onBlur:n,value:t.email,className:s.email&&a.email?"error":null}),s.email&&a.email?Object(I.jsx)("div",{className:"error-message",children:a.email}):null]}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(S.a.Label,{children:"Password"}),Object(I.jsx)(S.a.Control,{name:"password",type:"password",onChange:r,onBlur:n,placeholder:"Password",value:t.password,className:s.password&&a.password?"error":null}),s.password&&a.password?Object(I.jsx)("div",{className:"error-message",children:a.password}):null]}),"Don't have an account? ",Object(I.jsx)(i.b,{to:"/signup",children:"Sign up"}),"! ",Object(I.jsx)("div",{}),Object(I.jsx)(C.a,{variant:"primary",type:"submit",className:"mt-4",children:"Log In"})]})}}),c.general&&Object(I.jsx)("p",{className:"text-danger text-end",children:c.general})]})},L=function(e){var t=e.setIsAuth,a=e.setUsername,r=Object(s.useState)([]),n=Object(l.a)(r,2),c=n[0],o=n[1],u=E.a().shape({password:E.b().required("*Password is required"),email:E.b().email("*Must be a valid email address").max(100,"*Email must be less than 100 characters").required("*Email is required"),username:E.b().max(15,"*Username must be less than 15 characters").required("*Username is required")}),d=function(){var e=Object(m.a)(p.a.mark((function e(s){var r,n,c,i,l,u,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.email,n=s.password,c=s.username,e.next=3,w.signup(r,c,n);case 3:return i=e.sent,e.next=6,i.text();case 6:l=e.sent,u=JSON.parse(l),i.ok?(t(!0),localStorage.setItem("user",JSON.stringify(u)),d=Object(f.a)(u.accessToken),a(d.name)):o(u);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"p-3 mt-4",children:[Object(I.jsx)(T.a,{initialValues:{email:"",password:"",username:""},validationSchema:u,onSubmit:d,children:function(e){var t=e.values,a=e.errors,s=e.touched,r=e.handleChange,n=e.handleBlur,c=e.handleSubmit;return Object(I.jsxs)(S.a,{onSubmit:c,children:[Object(I.jsx)("h1",{className:"text-center",children:" Signup "}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(I.jsx)(S.a.Label,{children:"Email address"}),Object(I.jsx)(S.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:r,onBlur:n,value:t.email,className:s.email&&a.email?"error":null}),s.email&&a.email?Object(I.jsx)("div",{className:"error-message",children:a.email}):null]}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(I.jsx)(S.a.Label,{children:"Username"}),Object(I.jsx)(S.a.Control,{name:"username",type:"text",placeholder:"Enter your username",onChange:r,onBlur:n,value:t.username,className:s.username&&a.username?"error":null}),s.username&&a.username?Object(I.jsx)("div",{className:"error-message",children:a.username}):null]}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(S.a.Label,{children:"Password"}),Object(I.jsx)(S.a.Control,{name:"password",type:"password",onChange:r,onBlur:n,placeholder:"Password",value:t.password,className:s.password&&a.password?"error":null}),s.password&&a.password?Object(I.jsx)("div",{className:"error-message",children:a.password}):null]}),"Already have an acount? ",Object(I.jsx)(i.b,{to:"/login",children:"Log in!"}),"! ",Object(I.jsx)("div",{}),Object(I.jsx)(C.a,{variant:"primary",type:"submit",className:"mt-3",children:"Sign Up"})]})}}),c.email&&Object(I.jsx)("p",{className:"text-danger text-end",children:c.email})]})},A=function(e){var t=e.addTask,a=e.errors,s=E.a().shape({title:E.b().max(100,"*Title must be less than 100 characters").required("*Title is required"),body:E.b().max(250,"*Email must be less than 100 characters").required("*Description is required")});return Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:"p-3 mt-4",children:[Object(I.jsx)(T.a,{initialValues:{title:"",body:""},validationSchema:s,onSubmit:function(e){var a=e.body,s=e.title;t({title:s,body:a,completed:!1})},children:function(e){var t=e.values,a=e.errors,s=e.touched,r=e.handleChange,n=e.handleBlur,c=e.handleSubmit;return Object(I.jsxs)(S.a,{onSubmit:c,children:[Object(I.jsx)("h3",{className:"text-center",children:"Tasks"}),Object(I.jsxs)(S.a.Group,{className:"mb-3",children:[Object(I.jsx)(S.a.Label,{children:"Task title"}),Object(I.jsx)(S.a.Control,{name:"title",type:"text",placeholder:"Enter title",onChange:r,onBlur:n,value:t.title,className:s.title&&a.title?"error":null}),s.title&&a.title?Object(I.jsx)("div",{className:"error-message",children:a.title}):null]}),Object(I.jsxs)(S.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(I.jsx)(S.a.Label,{children:"Task description"}),Object(I.jsx)(S.a.Control,{as:"textarea",name:"body",type:"text",onChange:r,onBlur:n,placeholder:"Enter description",value:t.body,className:s.body&&a.body?"error":null}),s.body&&a.body?Object(I.jsx)("div",{className:"error-message",children:a.body}):null]}),Object(I.jsx)(C.a,{variant:"primary",type:"submit",className:"mt-2 mb-4",children:"Add Task"})]})}}),a.general&&Object(I.jsx)("p",{className:"text-danger text-end",children:a.general})]})})},J=a(262),U=a(265),q=function(e){var t=e.id,a=e.title,r=e.description,n=e.completed,c=e.changeTaskState,i=e.editTask,o=e.deleteTask,u=Object(s.useState)(!1),b=Object(l.a)(u,2),m=b[0],h=b[1],p=Object(s.useState)(a),x=Object(l.a)(p,2),O=x[0],v=x[1],f=Object(s.useState)(r),g=Object(l.a)(f,2),k=g[0],N=g[1],y=function(){h(!1),v(a),N(r)};return Object(I.jsx)("div",{children:Object(I.jsxs)(j.a,{className:"justify-content-center ps-5 pb-3",children:[Object(I.jsxs)(d.a,{className:"border-bottom",children:[Object(I.jsxs)(j.a,{children:[Object(I.jsx)("h5",{children:a}),Object(I.jsx)("p",{children:r}),Object(I.jsx)("p",{children:n?Object(I.jsx)(J.a,{bg:"success",className:"my-2",children:"Completed!"}):""})]}),Object(I.jsxs)(j.a,{md:2,className:"p-2",children:[Object(I.jsx)(S.a,{children:Object(I.jsx)(C.a,{variant:"info",size:"sm",className:"my-1 btn-block",onClick:function(){v(a),N(r),h(!0)},children:"Edit"})}),n?Object(I.jsx)(S.a,{children:Object(I.jsx)(C.a,{variant:"secondary",size:"sm",className:"my-1 btn-block",onClick:function(){return c(t)},children:"Undo"})}):Object(I.jsx)(S.a,{children:Object(I.jsx)(C.a,{variant:"success",size:"sm",className:"my-1 btn-block",onClick:function(){return c(t)},children:"Complete"})}),Object(I.jsx)(S.a,{children:Object(I.jsx)(C.a,{variant:"danger",size:"sm",className:"my-1 btn-block",onClick:function(){return o(t)},children:"Delete"})})]})]}),Object(I.jsxs)(U.a,{show:m,onHide:y,children:[Object(I.jsx)(U.a.Header,{closeButton:!0,children:Object(I.jsx)(U.a.Title,{children:"Edit Task"})}),Object(I.jsx)(U.a.Body,{children:Object(I.jsxs)(S.a,{children:[Object(I.jsxs)(S.a.Group,{controlId:"title",children:[Object(I.jsx)(S.a.Label,{children:"Title"}),Object(I.jsx)(S.a.Control,{type:"text",value:O,onChange:function(e){return v(e.target.value)}})]}),Object(I.jsxs)(S.a.Group,{controlId:"description",children:[Object(I.jsx)(S.a.Label,{children:"Description"}),Object(I.jsx)(S.a.Control,{type:"text",value:k,onChange:function(e){return N(e.target.value)}})]})]})}),Object(I.jsxs)(U.a.Footer,{children:[Object(I.jsx)(C.a,{variant:"secondary",onClick:y,children:"Close"}),Object(I.jsx)(C.a,{variant:"primary",onClick:function(){return function(e,a){y(),""!==e&&""!==a&&(i({id:t,title:e,body:a}),v(e),N(a))}(O,k)},children:"Save Changes"})]})]})]})})},P=a(264);function G(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{headers:{Authorization:"Bearer "+e.accessToken}}:{}}var z=a(267),D=a(128),M=a.n(D),H=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)([]),c=Object(l.a)(n,2),i=c[0],o=c[1],b=Object(s.useState)(!1),h=Object(l.a)(b,2),x=h[0],f=h[1],g=Object(s.useState)(!1),k=Object(l.a)(g,2),N=k[0],y=k[1],S=Object(s.useState)(!1),C=Object(l.a)(S,2),T=C[0],E=C[1],B=Object(s.useState)(!0),L=Object(l.a)(B,2),J=L[0],U=L[1];M()(O.a,w.refreshAuthLogic),Object(s.useEffect)((function(){w.getCurrentUser()&&D()}),[]);var D=function(){var e=Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(v+"/tasks",G());case 3:t=e.sent,a=t.data,r(a),U(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post(v+"/tasks",t,G());case 3:D(),R(),f(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(m.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=a.find((function(e){return e.id===t}))).completed=!s.completed,e.prev=2,e.next=5,O.a.patch(v+"/tasks/".concat(t),s,G());case 5:D(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.patch(v+"/tasks/".concat(t.id),t,G());case 3:R(),E(!0),D(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete(v+"/tasks/".concat(t),G());case 3:R(),y(!0),D(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){f(!1),y(!1),E(!1)};return Object(I.jsx)("div",{className:"wrapper",children:w.getCurrentUser&&Object(I.jsx)(u.a,{children:Object(I.jsxs)(d.a,{className:"justify-content-center",children:[Object(I.jsxs)("div",{className:"mt-2",children:[Object(I.jsx)(z.a,{onClose:function(){return f(!1)},dismissible:!0,show:x,variant:"success",children:"Task was added"}),Object(I.jsx)(z.a,{onClose:function(){return y(!1)},dismissible:!0,show:N,variant:"danger",children:"Task was deleted"}),Object(I.jsx)(z.a,{onClose:function(){return E(!1)},dismissible:!0,show:T,variant:"warning",children:"Task was edited"})]}),Object(I.jsxs)(j.a,{children:[Object(I.jsx)(A,{addTask:H,errors:i,setErrors:o}),J?Object(I.jsx)("div",{style:{padding:"15px",display:"flex",justifyContent:"center"},children:Object(I.jsx)(P.a,{animation:"border",variant:"info",role:"status",children:Object(I.jsx)("span",{className:"visually-hidden text-center p-3",children:"Loading..."})})}):a.map((function(e,t){return Object(I.jsx)(q,{errors:i,setErrors:o,id:e.id,title:e.title,completed:e.completed,description:e.body,changeTaskState:V,editTask:W,deleteTask:F},t)}))]})]})})})};a(257);var V=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(""),c=Object(l.a)(n,2),m=c[0],h=c[1],p=function(){w.logout(),r(!1)};Object(s.useEffect)((function(){var e=w.getCurrentUser();if(e){if(w.isJWTExpired())return console.log("Refresh Token expired"),void p();r(!0);var t=Object(f.a)(e.accessToken);h(t.name)}}),[]);var x=function(e){var t=e.auth.isAuthenticated,a=e.children;return t?a:Object(I.jsx)(o.a,{to:"/login"})},O=function(e){var t=e.auth.isAuthenticated,a=e.children;return t?a:Object(I.jsx)(o.a,{to:"/home"})};return Object(I.jsxs)("div",{children:[Object(I.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(I.jsxs)("div",{className:"container",children:[Object(I.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{to:"/",className:"nav-link",children:Object(I.jsx)("strong",{children:" MyTasks"})})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)("a",{href:"https://github.com/ilyamur/mytasks_app",className:"nav-link",children:"GitHub"})})]}),a?Object(I.jsxs)("div",{className:"navbar-nav ms-auto",children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsxs)("span",{className:"nav-link",children:["Welcome ",Object(I.jsxs)("strong",{children:[m," "]})]})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{to:"/login",className:"nav-link",onClick:p,children:"Logout"})})]}):Object(I.jsxs)("div",{className:"navbar-nav ms-auto",children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(i.b,{to:"/signup",className:"nav-link",children:"Sign up"})})]})]})}),Object(I.jsx)("div",{className:"container",children:Object(I.jsx)(u.a,{children:Object(I.jsx)(d.a,{className:"justify-content-center pt-5",children:Object(I.jsx)(j.a,{md:"8",children:Object(I.jsx)(b.a,{children:Object(I.jsxs)(o.d,{children:[Object(I.jsx)(o.b,{path:"/",element:Object(I.jsxs)(x,{auth:{isAuthenticated:a},children:[" ",Object(I.jsx)(H,{})," "]})}),Object(I.jsx)(o.b,{path:"/home",element:Object(I.jsxs)(x,{auth:{isAuthenticated:a},children:[" ",Object(I.jsx)(H,{})," "]})}),Object(I.jsx)(o.b,{path:"/signup",element:Object(I.jsxs)(O,{auth:{isAuthenticated:!a},children:[" ",Object(I.jsx)(L,{setIsAuth:r,username:m,setUsername:h})," "]})}),Object(I.jsx)(o.b,{path:"/login",element:Object(I.jsxs)(O,{auth:{isAuthenticated:!a},children:[" ",Object(I.jsx)(B,{username:m,setUsername:h,setIsAuth:r})," "]})})]})})})})})})]})};c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(i.a,{children:Object(I.jsx)(V,{})})}),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.e71e9230.chunk.js.map