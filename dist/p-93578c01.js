var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(t,r)};function t(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var r=function(){return(r=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function e(n){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(f){o={error:f}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function i(n,t){for(var r=0,e=t.length,o=n.length;r<e;r++,o++)n[o]=t[r];return n}var u=function(){function n(n){void 0===n&&(n={}),this.adapter=n}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}(),f=function(){function n(n,t){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];this.root=n,this.initialize.apply(this,i([],o(r))),this.foundation=void 0===t?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return n.attachTo=function(t){return new n(t,new u({}))},n.prototype.initialize=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},n.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},n.prototype.initialSyncWithDOM=function(){},n.prototype.destroy=function(){this.foundation.destroy()},n.prototype.listen=function(n,t,r){this.root.addEventListener(n,t,r)},n.prototype.unlisten=function(n,t,r){this.root.removeEventListener(n,t,r)},n.prototype.emit=function(n,t,r){var e;void 0===r&&(r=!1),"function"==typeof CustomEvent?e=new CustomEvent(n,{bubbles:r,detail:t}):(e=document.createEvent("CustomEvent")).initCustomEvent(n,r,!1,t),this.root.dispatchEvent(e)},n}();export{u as M,t as _,r as a,f as b,e as c,i as d,o as e}