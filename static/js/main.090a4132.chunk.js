(this["webpackJsonpcountry-quiz"]=this["webpackJsonpcountry-quiz"]||[]).push([[0],{26:function(t,e,s){},28:function(t,e,s){},29:function(t,e,s){},30:function(t,e,s){},31:function(t,e,s){},33:function(t,e,s){},34:function(t,e,s){},35:function(t,e,s){},36:function(t,e,s){},37:function(t,e,s){},38:function(t,e,s){"use strict";s.r(e);var n=s(2),a=s.n(n),o=s(19),i=s.n(o),r=(s(26),s(4)),c=s(5),u=s(3),l=s(7),d=s(6),h=s(21),p=s(20),j=(s(28),s(29),s(30),s.p+"static/media/undraw_Around_the_world_re_n353.2934a5eb.png"),b=(s(31),s(0)),f=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).handleGetStarted=n.handleGetStarted.bind(Object(u.a)(n)),n.handleRestart=n.handleRestart.bind(Object(u.a)(n)),n}return Object(c.a)(s,[{key:"handleGetStarted",value:function(){this.props.onGetStarted()}},{key:"handleRestart",value:function(){this.props.onRestart()}},{key:"render",value:function(){return Object(b.jsx)("button",{onClick:this.props.onRestart?this.handleRestart:this.handleGetStarted,className:"Button",children:this.props.text})}}]),s}(a.a.Component),O=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"IntroBox",children:[Object(b.jsx)("img",{className:"World",src:j,alt:"Around the world illustration",width:"500",height:"343"}),Object(b.jsx)("h2",{className:"Welcome",children:"Welcome to the biggest, baddest country quiz you ever did play!"}),Object(b.jsx)("p",{className:"Intro",children:"You'll face 10 questions. They could be about any country on Earth so let's hope you've done your homework..."}),Object(b.jsx)(f,{text:"Let's get started!",countries:this.props.countries,disabled:this.props.disabled,onGetStarted:this.props.onGetStarted})]})}}]),s}(a.a.Component),m=(s(33),s(34),function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={status:"Default"},n.handleSelection=n.handleSelection.bind(Object(u.a)(n)),n}return Object(c.a)(s,[{key:"componentDidUpdate",value:function(){this.props.answer.alpha2Code===this.props.code&&"confirmed"===this.props.questionStatus&&"Correct"!==this.state.status?this.setState({status:"Correct"}):this.props.selected===this.props.code&&"chosen"===this.props.questionStatus&&"Selected"!==this.state.status?this.setState({status:"Selected"}):this.props.selected!==this.props.code&&"chosen"===this.props.questionStatus&&"Default"!==this.state.status?this.setState({status:"Default"}):this.props.selected===this.props.code&&this.props.selected!==this.props.answer.answer2Code&&"confirmed"===this.props.questionStatus&&"Wrong"!==this.state.status?this.setState({status:"Wrong"}):"confirmed"===this.props.questionStatus&&"Default"===this.state.status&&this.setState({status:"Option"})}},{key:"handleSelection",value:function(){this.props.onSelection(this.props.code)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"Option ".concat(this.state.status),onClick:"confirmed"!==this.props.questionStatus?this.handleSelection:null,children:this.props.text})})}}]),s}(a.a.Component)),S=(s(35),function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).handleConfirm=n.handleConfirm.bind(Object(u.a)(n)),n}return Object(c.a)(s,[{key:"handleConfirm",value:function(){this.props.onConfirm()}},{key:"render",value:function(){return Object(b.jsx)("button",{className:"Confirm",onClick:this.handleConfirm,children:"Confirm"})}}]),s}(a.a.Component));s(36);var v=function(t){return Object(b.jsx)("button",{className:"Proceed",onClick:function(){t.onUpdateQuestion()},children:"Continue \u2192"})},x=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={questionStatus:"new",options:[],answer:"",selected:""},n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.handleSelection=n.handleSelection.bind(Object(u.a)(n)),n.handleConfirm=n.handleConfirm.bind(Object(u.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"getQuestion",value:function(){var t=this.props.currentQuestion-1,e=this.props.questions[t],s=e[Math.floor(Math.random()*e.length)];this.setState({options:e,answer:s,questionStatus:"new",selected:""})}},{key:"handleSelection",value:function(t){this.setState({questionStatus:"chosen",selected:t})}},{key:"handleConfirm",value:function(){this.state.answer.alpha2Code===this.state.selected&&(this.setState({selected:""}),this.props.onUpdateScore()),this.setState({questionStatus:"confirmed"})}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Question ",this.props.currentQuestion]}),Object(b.jsxs)("p",{children:[this.state.answer.capital," is the capital city of which country?"]}),this.state.options.map((function(e){return Object(b.jsx)(m,{code:e.alpha2Code,selected:t.state.selected,text:e.name,onSelection:t.handleSelection,answer:t.state.answer,questionStatus:t.state.questionStatus,correct:t.state.correct},e.alpha2Code)})),Object(b.jsxs)(b.Fragment,{children:["chosen"===this.state.questionStatus?Object(b.jsx)(S,{onConfirm:this.handleConfirm}):Object(b.jsx)(b.Fragment,{}),"confirmed"===this.state.questionStatus?Object(b.jsx)(v,{currentQuestion:this.props.currentQuestion,onUpdateQuestion:this.props.onUpdateQuestion}):Object(b.jsx)(b.Fragment,{})]})]})}}]),s}(a.a.Component),y=s.p+"static/media/undraw_winners.d76bfdf8.svg";s(37);var C=function(t){return Object(b.jsxs)("div",{className:"Results",children:[Object(b.jsx)("img",{className:"Winners",src:y,alt:"Around the world illustration",width:"500",height:"343"}),Object(b.jsx)("h2",{className:"Curtain",children:"That's it, the show's over folks!"}),Object(b.jsxs)("p",{className:"Announcement",children:["You scored... ",Object(b.jsxs)("span",{className:"Score",children:[t.score," / 10"]})]}),t.score>6?Object(b.jsx)("p",{className:"Line",children:"Nice work, you really do know your stuff!"}):Object(b.jsx)("p",{className:"Line",children:"Oh dear. You've let yourself down and I'm deeply ashamed of you. Do better."}),Object(b.jsx)(f,{text:"Start again",onRestart:t.onRestart})]})};var Q=function(t){return 0===t.currentQuestion?Object(b.jsx)("div",{className:"Box",children:Object(b.jsx)(O,{disabled:t.disabled,onGetStarted:t.onGetStarted})}):t.currentQuestion>10?Object(b.jsx)("div",{className:"Box",children:Object(b.jsx)(C,{score:t.score,onRestart:t.onRestart})}):t.currentQuestion?Object(b.jsx)("div",{className:"Box",children:Object(b.jsx)(x,{currentQuestion:t.currentQuestion,questions:t.questions,score:t.score,onUpdateScore:t.onUpdateScore,onUpdateQuestion:t.onUpdateQuestion},t.currentQuestion)}):void 0},g=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={disabled:!0,currentQuestion:0,allCountries:[],questions:[],score:0},n.getStarted=n.getStarted.bind(Object(u.a)(n)),n.updateScore=n.updateScore.bind(Object(u.a)(n)),n.updateQuestion=n.updateQuestion.bind(Object(u.a)(n)),n.restart=n.restart.bind(Object(u.a)(n)),n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(e){t.setState({allCountries:e,disabled:!1})}),(function(e){t.setState({error:e})}))}},{key:"getStarted",value:function(){var t=this.state.allCountries,e=Object(p.a)(t,(function(t){return""===t.capital})),s=Object(h.a)(e,40),n=s.slice(0,4),a=s.slice(4,8),o=s.slice(8,12),i=s.slice(12,16),r=s.slice(16,20),c=s.slice(20,24),u=s.slice(24,28),l=s.slice(28,32),d=s.slice(32,36),j=s.slice(36);this.setState({questions:[n,a,o,i,r,c,u,l,d,j],currentQuestion:1})}},{key:"updateScore",value:function(){var t=this.state.score;t++,this.setState({score:t})}},{key:"updateQuestion",value:function(){var t=this.state.currentQuestion;t++,this.setState({currentQuestion:t})}},{key:"restart",value:function(){this.setState({disabled:!1,currentQuestion:0,allCountries:[],questions:[],score:0})}},{key:"render",value:function(){var t=this.state.error;return t?Object(b.jsxs)("div",{className:"Error",children:["Error: ",t.message]}):Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"Container",children:Object(b.jsx)(Q,{currentQuestion:this.state.currentQuestion,questions:this.state.questions,disabled:this.state.disabled,onGetStarted:this.getStarted,score:this.state.score,onUpdateScore:this.updateScore,onUpdateQuestion:this.updateQuestion,onRestart:this.restart})})})}}]),s}(a.a.Component),k=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.090a4132.chunk.js.map