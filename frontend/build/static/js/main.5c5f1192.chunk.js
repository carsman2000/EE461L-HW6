(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),i=n.n(c),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))}),o=n(4),u=n(5),l=n(7),h=n(6),j=n(0),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).inputChangeHandler=function(e){s.setState({inputName:e.target.value})},s.state={inputName:"",serverResponse:""},s}return Object(u.a)(n,[{key:"setResponse",value:function(e){this.setState({serverResponse:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:"Your Input Request to Server: "}),Object(j.jsx)("input",{type:"text",placeholder:"First Name",value:this.state.inputName,onChange:this.inputChangeHandler}),Object(j.jsx)("button",{type:"button",onClick:function(){fetch("/identify/"+e.state.inputName).then((function(e){return e.json()})).then((function(t){e.setResponse(t.returnName)})).catch((function(e){console.log(e)}))},children:"Submit"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Server Response: "}),Object(j.jsx)("textarea",{value:this.state.serverResponse,readOnly:!0})]})})}}]),n}(s.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),a()}},[[14,1,2]]]);
//# sourceMappingURL=main.5c5f1192.chunk.js.map