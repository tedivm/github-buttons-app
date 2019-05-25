(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0c3e":function(t,e,o){},"1d5e":function(t,e,o){"use strict";var n=o("0c3e"),r=o.n(n);r.a},4646:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("form",{attrs:{autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:"false"}},[o("fieldset",{staticClass:"form-group"},[o("h4",[t._v("Choose a button")]),o("div",{staticClass:"row"},t._l(t.types,function(e){return o("div",{key:e.value,staticClass:"col-9 col-sm-6 col-md-4 col-lg-2"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.type,expression:"options.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"type"},domProps:{value:e.value,checked:t._q(t.options.type,e.value)},on:{change:function(o){return t.$set(t.options,"type",e.value)}}}),t._v(t._s(t._f("capitalize")(e.value))),o("br"),o("github-button",{attrs:{href:"#","data-size":"large","data-icon":e.icon,"data-text":t.$options.filters.capitalize(e.value),"aria-hidden":"true"}})],1)])])}),0)]),o("hr"),t.options.type?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6 col-md-4"},[o("h4",[t._v("Button options")]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.user,expression:"options.user"}],ref:"user",staticClass:"form-control",class:{"is-invalid":""!==t.options.user&&!t.isValidUser},attrs:{type:"text",maxlength:"39",placeholder:":user",autofocus:"autofocus"},domProps:{value:t.options.user},on:{input:function(e){e.target.composing||t.$set(t.options,"user",e.target.value)}}}),t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.repo,expression:"options.repo"}],ref:"repo",staticClass:"form-control",class:{"is-invalid":""!==t.options.repo&&!t.isValidRepo},attrs:{type:"text",maxlength:"100",placeholder:":repo",disabled:"follow"===t.options.type},domProps:{value:t.options.repo},on:{input:function(e){e.target.composing||t.$set(t.options,"repo",e.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.largeButton,expression:"options.largeButton"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.largeButton)?t._i(t.options.largeButton,null)>-1:t.options.largeButton},on:{change:function(e){var o=t.options.largeButton,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,a=t._i(o,s);n.checked?a<0&&t.$set(t.options,"largeButton",o.concat([s])):a>-1&&t.$set(t.options,"largeButton",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"largeButton",r)}}}),t._v(" Large button\n            ")])]),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showCount,expression:"options.showCount"}],attrs:{type:"checkbox",disabled:"download"===t.options.type},domProps:{checked:Array.isArray(t.options.showCount)?t._i(t.options.showCount,null)>-1:t.options.showCount},on:{change:function(e){var o=t.options.showCount,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,a=t._i(o,s);n.checked?a<0&&t.$set(t.options,"showCount",o.concat([s])):a>-1&&t.$set(t.options,"showCount",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"showCount",r)}}}),t._v(" Show count\n            ")])]),o("div",{staticClass:"checkbox"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.standardIcon,expression:"options.standardIcon"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.standardIcon)?t._i(t.options.standardIcon,null)>-1:t.options.standardIcon},on:{change:function(e){var o=t.options.standardIcon,n=e.target,r=!!n.checked;if(Array.isArray(o)){var s=null,a=t._i(o,s);n.checked?a<0&&t.$set(t.options,"standardIcon",o.concat([s])):a>-1&&t.$set(t.options,"standardIcon",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"standardIcon",r)}}}),t._v(" Standard icon\n            ")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"syntax"}},[t._v("Syntax")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.syntax,expression:"options.syntax"}],staticClass:"custom-select",attrs:{id:"syntax"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.options,"syntax",e.target.multiple?o:o[0])}}},[o("option",[t._v("html")]),o("option",{attrs:{value:"vue"}},[t._v("vue-github-button")]),o("option",{attrs:{value:"react"}},[t._v("react-github-btn")])])])]),o("div",{staticClass:"col-12 col-sm-6 col-md-8"},[o("h4",[t._v("Preview and code")]),o("p",[t._v("Try out your button, then copy and paste the code below into the HTML for your site.")]),o("p",{style:{height:t.options.largeButton?"28px":"20px"}},[o("github-button",t._b({},"github-button",t.getPreviewAttrs(),!1))],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.templateHTML}})],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.scriptHTML}})],1)])]):t._e()])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-append input-group-prepend"},[o("span",{staticClass:"input-group-text"},[t._v("/")])])}],a=(o("6b54"),o("a481"),o("cebc")),i=(o("db43"),o("e878")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{rows:t.code.split("\n").length,readonly:""},domProps:{value:t.code},on:{click:function(e){return t.$el.select()},focus:function(e){return t.$el.select()},mouseup:function(t){t.preventDefault()},input:function(e){e.target.composing||(t.code=e.target.value)}}})},u=[],l={name:"snippet",props:["code"]},p=l,d=(o("1d5e"),o("2877")),f=Object(d["a"])(p,c,u,!1,null,"067918b6",null),h=f.exports,v={name:"app",components:{GithubButton:i["a"],Snippet:h},data:function(){return{types:[{value:"follow",icon:"octicon-mark-github"},{value:"watch",icon:"octicon-eye"},{value:"star",icon:"octicon-star"},{value:"fork",icon:"octicon-repo-forked"},{value:"issue",icon:"octicon-issue-opened"},{value:"download",icon:"octicon-cloud-download"}],options:{user:"",repo:"",type:null,largeButton:!1,showCount:!1,standardIcon:!1,syntax:function(t){return/\bvue-github-button\b/i.test(t)?"vue":/\breact-github-btn\b/i.test(t)?"react":"html"}(document.referrer)},timeoutID:0}},watch:{"options.type":function(){var t=this;this.$nextTick(function(){document.activeElement!==t.$refs.user&&document.activeElement!==t.$refs.repo&&("follow"===t.options.type||!t.isValidUser||t.isValidUser&&t.isValidRepo?t.$refs.user.focus():t.$refs.repo.focus())})},"attrs.href":function(){var t=this;this.attrs["data-show-count"]&&(clearTimeout(this.timeoutID),this.timeoutID=setTimeout(function(){t.timeoutID=0},300))}},computed:{isValidUser:function(){var t=this.options.user;return t.length>0&&t.length<40&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(t)},isValidRepo:function(){var t=this.options.repo;return t.length>0&&t.length<101&&!/[^\w-.]|\.git$|^\.\.?$/i.test(t)},attrs:function(){var t=this,e=Object(a["a"])({},this.options);return this.isValidUser&&(this.isValidRepo||"follow"===e.type)||(e.user="ntkme",e.repo="github-buttons"),{href:function(){var t="https://github.com",o="/"+e.user,n=o+"/"+e.repo;switch(e.type){case"follow":return t+o;case"watch":return t+n+"/subscription";case"star":return t+n;case"fork":return t+n+"/fork";case"issue":return t+n+"/issues";case"download":return t+n+"/archive/master.zip";default:return t}}(),"data-text":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type?" @"+e.user:"")}(),"data-icon":function(){if(!e.standardIcon)switch(e.type){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download"}}(),"data-size":function(){if(e.largeButton)return"large"}(),"data-show-count":function(){if(e.showCount)switch(e.type){case"download":return;default:return!0}}(),"aria-label":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type?" @"+e.user:" "+e.user+"/"+e.repo)+" on GitHub"}()}},templateHTML:function(){var t=this,e=document.createElement("a");"html"===this.options.syntax&&(e.className="github-button");var o=this.attrs;for(var n in o)null!=o[n]&&("data-text"===n?e.textContent=o[n]:e.setAttribute(n,o[n]));return"\x3c!-- Place this tag where you want the button to render. --\x3e\n"+function(e){switch(t.options.syntax){case"vue":return e.replace(/^<a/,"<github-button").replace(/a>$/,"github-button>");case"react":return e.replace(/^<a/,"<GitHubButton").replace(/a>$/,"GitHubButton>");default:return e}}(e.outerHTML)},scriptHTML:function(){switch(this.options.syntax){case"vue":return"import GithubButton from 'vue-github-button'\n\nexport default {\n  components: {\n    GithubButton\n  },\n  // ...\n}";case"react":return"import GitHubButton from 'react-github-btn'";default:return'\x3c!-- Place this tag in your head or just before your close body tag. --\x3e\n<script async defer src="https://gitbuttons.tedivm.com/buttons.js"><\/script>'}}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{getPreviewAttrs:function(){return Object(a["a"])({},this.attrs,{"data-show-count":this.attrs["data-show-count"]&&!this.timeoutID})}}},m=v,b=(o("aeaf"),Object(d["a"])(m,r,s,!1,null,"f27fbf52",null)),g=b.exports;window.onbeforeunload=function(){},n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},aeaf:function(t,e,o){"use strict";var n=o("4646"),r=o.n(n);r.a},db43:function(t,e,o){}});
//# sourceMappingURL=app.5ea9b2e8.js.map