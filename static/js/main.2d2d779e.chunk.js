(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"good","title":"Good"},{"name":"neutral","title":"Neutral"},{"name":"bad","title":"Bad"}]')},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(0),o=n.n(i),s=n(8),l=n.n(s),d=(n(22),n(23),n(9)),b=n(10),j=n(11),u=n(17),h=n(16),x=n(2),p=n(3),f=p.a.div(a||(a=Object(x.a)(["\n  text-align: center;\n  font-size: 20px;\n\n  button {\n    padding: 10px;\n    border: 4px solid gray;\n    border-radius: 0 20px 0 20px;\n    font-weight: 500;\n    background-color: transparent;\n\n    &:not(:last-child) {\n      margin-right: 20px;\n    }\n  }\n\n  .good {\n    &:hover {\n      background-color: #76ba1b;\n    }\n  }\n\n  .neutral {\n    &:hover {\n      background-color: #ffdfc4;\n    }\n  }\n\n  .bad {\n    &:hover {\n      background-color: #ff483f;\n    }\n  }\n"]))),g=n(29),O=n(1),v=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(O.jsx)(f,{children:n.map((function(e){return Object(O.jsx)("button",{type:"button",name:e.name,className:e.name,onClick:t,children:e.title},Object(g.a)())}))})},k=p.a.section(c||(c=Object(x.a)(["\n  min-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n\n  .sectionTitle {\n    font-size: 40px;\n  }\n"]))),m=function(e){var t=e.children,n=e.title;return Object(O.jsxs)(k,{children:[Object(O.jsx)("h2",{className:"sectionTitle",children:n}),t]})},w=p.a.ul(r||(r=Object(x.a)(["\n  text-align: center;\n  width: 400px;\n  margin: 0 auto;\n  text-align: left;\n  list-style: none;\n  font-size: 20px;\n  font-weight: 500;\n"]))),y=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(O.jsxs)(w,{children:[Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Good: ",t]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Neutral: ",n]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Bad: ",a]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Total feedback: ",c]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("p",{children:["Positive feedback: ",r," %"]})})]})},N=n(15),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.feedbackIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(d.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=Object.values(e.state),n=0;return t.map((function(e){return n+=e})),n},e}return Object(j.a)(n,[{key:"positivePercentage",value:function(){var e=this.countTotalFeedback();return 0===e?0:parseInt(this.state.good/e*100)}},{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.positivePercentage();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{title:"Please leave feedback",children:Object(O.jsx)(v,{options:N,onLeaveFeedback:this.feedbackIncrement})}),e<1?Object(O.jsx)("h2",{className:"noStatisticTitle",children:"No feedback given"}):Object(O.jsx)(m,{title:"Statistics",children:Object(O.jsx)(y,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})})]})}}]),n}(i.Component);l.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2d2d779e.chunk.js.map