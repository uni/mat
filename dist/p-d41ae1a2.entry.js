import{r as c,c as e,h as o,F as t,g as r}from"./p-05f4a60f.js";import{U as i}from"./p-049db068.js";import{u as a}from"./p-e282851d.js";import{b as n,c as d}from"./p-1ba80c95.js";import{M as m,a as b}from"./p-608e635a.js";import{a as k,b as h,M as s}from"./p-7ba3bd01.js";import{m as l}from"./p-9579904e.js";import"./p-12df985d.js";var p={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function u(c,e){if(function(c){return Boolean(c.document)&&"function"==typeof c.document.createElement}(c)&&e in p){var o=c.document.createElement("div"),t=p[e];return t.cssProperty in o.style?t.standard:t.prefixed}return e}var x={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},f={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},_={ANIM_END_LATCH_MS:250},g=function(c){function e(o){var t=c.call(this,d(d({},e.defaultAdapter),o))||this;return t.currentCheckState_=f.TRANSITION_STATE_INIT,t.currentAnimationClass_="",t.animEndLatchTimer_=0,t.enableAnimationEndHandler_=!1,t}return n(e,c),Object.defineProperty(e,"cssClasses",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter.addClass(x.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(c){this.adapter.setNativeControlDisabled(c),c?this.adapter.addClass(x.DISABLED):this.adapter.removeClass(x.DISABLED)},e.prototype.handleAnimationEnd=function(){var c=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){c.adapter.removeClass(c.currentAnimationClass_),c.enableAnimationEndHandler_=!1}),_.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter.hasNativeControl()){var c=this.currentCheckState_,e=this.determineCheckState_();if(c!==e){this.updateAriaChecked_();var o=x.SELECTED;e===f.TRANSITION_STATE_UNCHECKED?this.adapter.removeClass(o):this.adapter.addClass(o),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(c,e),this.currentCheckState_=e,this.adapter.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var c=f.TRANSITION_STATE_INDETERMINATE,e=f.TRANSITION_STATE_CHECKED,o=f.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?c:this.adapter.isChecked()?e:o},e.prototype.getTransitionAnimationClass_=function(c,o){var t=f.TRANSITION_STATE_CHECKED,r=f.TRANSITION_STATE_UNCHECKED,i=e.cssClasses,a=i.ANIM_UNCHECKED_CHECKED,n=i.ANIM_UNCHECKED_INDETERMINATE,d=i.ANIM_CHECKED_UNCHECKED,m=i.ANIM_CHECKED_INDETERMINATE,b=i.ANIM_INDETERMINATE_CHECKED,k=i.ANIM_INDETERMINATE_UNCHECKED;switch(c){case f.TRANSITION_STATE_INIT:return o===r?"":o===t?b:k;case r:return o===t?a:n;case t:return o===r?d:m;default:return o===t?b:k}},e.prototype.updateAriaChecked_=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(f.ARIA_CHECKED_ATTR,f.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(f.ARIA_CHECKED_ATTR)},e}(m),v=["checked","indeterminate"],y=function(c){function e(){var e=null!==c&&c.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return n(e,c),e.attachTo=function(c){return new e(c)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(c){this.nativeControl_.checked=c},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(c){this.nativeControl_.indeterminate=c},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(c){this.foundation.setDisabled(c)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(c){this.nativeControl_.value=c},enumerable:!1,configurable:!0}),e.prototype.initialize=function(){var c=f.DATA_INDETERMINATE_ATTR;this.nativeControl_.indeterminate="true"===this.nativeControl_.getAttribute(c),this.nativeControl_.removeAttribute(c)},e.prototype.initialSyncWithDOM=function(){var c=this;this.handleChange_=function(){return c.foundation.handleChange()},this.handleAnimationEnd_=function(){return c.foundation.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(u(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},e.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(u(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),c.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var c=this;return new g({addClass:function(e){return c.root.classList.add(e)},forceLayout:function(){return c.root.offsetWidth},hasNativeControl:function(){return!!c.nativeControl_},isAttachedToDOM:function(){return Boolean(c.root.parentNode)},isChecked:function(){return c.checked},isIndeterminate:function(){return c.indeterminate},removeClass:function(e){c.root.classList.remove(e)},removeNativeControlAttr:function(e){c.nativeControl_.removeAttribute(e)},setNativeControlAttr:function(e,o){c.nativeControl_.setAttribute(e,o)},setNativeControlDisabled:function(e){c.nativeControl_.disabled=e}})},e.prototype.createRipple_=function(){var c=this,e=d(d({},k.createAdapter(this)),{deregisterInteractionHandler:function(e,o){return c.nativeControl_.removeEventListener(e,o,h())},isSurfaceActive:function(){return l(c.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,o){return c.nativeControl_.addEventListener(e,o,h())}});return new k(this.root,new s(e))},e.prototype.installPropertyChangeHooks_=function(){var c=this,e=this.nativeControl_,o=Object.getPrototypeOf(e);v.forEach((function(t){var r=Object.getOwnPropertyDescriptor(o,t);w(r)&&Object.defineProperty(e,t,{configurable:r.configurable,enumerable:r.enumerable,get:r.get,set:function(o){r.set.call(e,o),c.foundation.handleChange()}})}))},e.prototype.uninstallPropertyChangeHooks_=function(){var c=this.nativeControl_,e=Object.getPrototypeOf(c);v.forEach((function(o){var t=Object.getOwnPropertyDescriptor(e,o);w(t)&&Object.defineProperty(c,o,t)}))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var c=f.NATIVE_CONTROL_SELECTOR,e=this.root.querySelector(c);if(!e)throw new Error("Checkbox component requires a "+c+" element");return e},enumerable:!1,configurable:!0}),e}(b);function w(c){return!!c&&"function"==typeof c.set}const z=class{constructor(o){c(this,o),this.uniCheckboxInitialized=e(this,"uniCheckboxInitialized",7),this.uniCheckboxChecked=e(this,"uniCheckboxChecked",7),this.value="unchecked",this.disabled=!1}componentWillLoad(){this.checkboxId=this.dataId||Math.random().toString(9).substring(15)}componentDidLoad(){a("mat"),this.el.firstElementChild.addEventListener("change",(c=>{this.uniCheckboxChecked.emit(c.target.checked)})),setTimeout((()=>{this.uniCheckboxInitialized.emit(new y(this.el))}),300)}render(){const{disabled:c}=this,e="indeterminate"===this.value,r={checked:"checked"===this.value,indeterminate:e,"data-indeterminate":e.toString(),disabled:c};return i({classes:{"mdc-checkbox":!0}},o(t,null,o("input",Object.assign({type:"checkbox",id:this.checkboxId},r,{class:"mdc-checkbox__native-control"})),o("div",{class:"mdc-checkbox__background"},o("svg",{class:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},o("path",{fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59",class:"mdc-checkbox__checkmark-path"})),o("div",{class:"mdc-checkbox__mixedmark"})),o("div",{class:"mdc-checkbox__ripple"})))}get el(){return r(this)}};z.style='.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-ripple-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-ripple-size, 40px);height:40px;height:var(--mdc-checkbox-ripple-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@-webkit-keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@-webkit-keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786;animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786;animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),-webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),-webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{-webkit-animation-duration:180ms;animation-duration:180ms;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 48px) - var(--mdc-checkbox-ripple-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - var(--mdc-checkbox-touch-target-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-touch-target-size, 48px);height:48px;height:var(--mdc-checkbox-touch-target-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),-webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1),-webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),-webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),-webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-checkbox .mdc-checkbox__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox{z-index:0}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}';export{z as uni_checkbox}