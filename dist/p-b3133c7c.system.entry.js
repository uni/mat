System.register(["./p-83ac2996.system.js","./p-86f76cc8.system.js","./p-0eb911f9.system.js","./p-6051a079.system.js","./p-a5f2118c.system.js"],(function(t){"use strict";var n,e,s,r;return{setters:[function(t){n=t.r;e=t.g},function(t){s=t.u},function(t){r=t.u},function(){},function(){}],execute:function(){var i='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-jp" viewBox="0 0 640 480">\n  <defs>\n    <clipPath id="jp-a">\n      <path fill-opacity=".7" d="M-88 32h640v480H-88z"/>\n    </clipPath>\n  </defs>\n  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#jp-a)" transform="translate(88 -32)">\n    <path fill="#fff" d="M-128 32h720v480h-720z"/>\n    <circle cx="523.1" cy="344.1" r="194.9" fill="#d30000" transform="translate(-168.4 8.6) scale(.76554)"/>\n  </g>\n</svg>\n';var a='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-jp" viewBox="0 0 512 512">\n  <defs>\n    <clipPath id="a">\n      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"/>\n    </clipPath>\n  </defs>\n  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(-128) scale(.72249)">\n    <path fill="#fff" d="M0 0h1063v708.7H0z"/>\n    <circle cx="523.1" cy="344.1" r="194.9" fill="#d30000" transform="translate(-59.7 -34.5) scale(1.1302)"/>\n  </g>\n</svg>\n';var l=t("uni_flag_jp",function(){function t(t){n(this,t);this.square=false;this.round=false}t.prototype.onSquare=function(t){this.el.innerHTML=t?a:i};t.prototype.onRound=function(t){r(this.el,t)};t.prototype.componentWillLoad=function(){this.el.innerHTML=this.square?a:i;s(this.el);r(this.el,this.round)};Object.defineProperty(t.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{square:["onSquare"],round:["onRound"]}},enumerable:false,configurable:true});return t}())}}}));