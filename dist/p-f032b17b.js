import{r as t,c as r,g as i}from"./p-adbebb84.js";import{u as e}from"./p-78249524.js";import{U as n}from"./p-54e06294.js";import{_ as a,a as o,M as s,b as d}from"./p-acecdfb5.js";import{F as c}from"./p-209fada4.js";import{M as m,a as h}from"./p-b19be74a.js";import{U as l}from"./p-994c4b97.js";var p={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},f={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},g=function(t){function r(i){var e=t.call(this,o(o({},r.defaultAdapter),i))||this;return e.animationFrame_=0,e.animationTimer_=0,e}return a(r,t),Object.defineProperty(r,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},r.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(p.OPEN),this.adapter.addClass(p.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter.addClass(p.OPENING)})),this.adapter.saveFocus())},r.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(p.CLOSING)},r.prototype.isOpen=function(){return this.adapter.hasClass(p.OPEN)},r.prototype.isOpening=function(){return this.adapter.hasClass(p.OPENING)||this.adapter.hasClass(p.ANIMATE)},r.prototype.isClosing=function(){return this.adapter.hasClass(p.CLOSING)},r.prototype.handleKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&this.close()},r.prototype.handleTransitionEnd=function(t){var r=p.OPENING,i=p.CLOSING,e=p.OPEN,n=p.ANIMATE,a=p.ROOT;this.isElement_(t.target)&&this.adapter.elementHasClass(t.target,a)&&(this.isClosing()?(this.adapter.removeClass(e),this.closed_(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened_(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(r),this.adapter.removeClass(i))},r.prototype.opened_=function(){},r.prototype.closed_=function(){},r.prototype.runNextAnimationFrame_=function(t){var r=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){r.animationFrame_=0,clearTimeout(r.animationTimer_),r.animationTimer_=setTimeout(t,0)}))},r.prototype.isElement_=function(t){return Boolean(t.classList)},r}(s),u=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return a(r,t),r.prototype.handleScrimClick=function(){this.close()},r.prototype.opened_=function(){this.adapter.trapFocus()},r.prototype.closed_=function(){this.adapter.releaseFocus()},r}(g),b=g.cssClasses,w=g.strings,y=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return a(r,t),r.attachTo=function(t){return new r(t)},Object.defineProperty(r.prototype,"open",{get:function(){return this.foundation.isOpen()},set:function(t){t?this.foundation.open():this.foundation.close()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"list",{get:function(){return this.list_},enumerable:!0,configurable:!0}),r.prototype.initialize=function(t,r){void 0===t&&(t=function(t){return new c(t)}),void 0===r&&(r=function(t){return new h(t)});var i=this.root.querySelector("."+m.cssClasses.ROOT);i&&(this.list_=r(i),this.list_.wrapFocus=!0),this.focusTrapFactory_=t},r.prototype.initialSyncWithDOM=function(){var t=this,r=b.MODAL;this.scrim_=this.root.parentNode.querySelector(w.SCRIM_SELECTOR),this.scrim_&&this.root.classList.contains(r)&&(this.handleScrimClick_=function(){return t.foundation.handleScrimClick()},this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=(0,this.focusTrapFactory_)(this.root,{skipInitialFocus:!0})),this.handleKeydown_=function(r){return t.foundation.handleKeydown(r)},this.handleTransitionEnd_=function(r){return t.foundation.handleTransitionEnd(r)},this.listen("keydown",this.handleKeydown_),this.listen("transitionend",this.handleTransitionEnd_)},r.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy(),this.scrim_&&this.handleScrimClick_&&this.root.classList.contains(b.MODAL)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)},r.prototype.getDefaultFoundation=function(){var t=this,r={addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},hasClass:function(r){return t.root.classList.contains(r)},elementHasClass:function(t,r){return t.classList.contains(r)},saveFocus:function(){return t.previousFocus_=document.activeElement},restoreFocus:function(){var r=t.previousFocus_;r&&r.focus&&t.root.contains(document.activeElement)&&r.focus()},focusActiveNavigationItem:function(){var r=t.root.querySelector("."+m.cssClasses.LIST_ITEM_ACTIVATED_CLASS);r&&r.focus()},notifyClose:function(){return t.emit(w.CLOSE_EVENT,{},!0)},notifyOpen:function(){return t.emit(w.OPEN_EVENT,{},!0)},trapFocus:function(){return t.focusTrap_.trapFocus()},releaseFocus:function(){return t.focusTrap_.releaseFocus()}},i=b.DISMISSIBLE,e=b.MODAL;if(this.root.classList.contains(i))return new g(r);if(this.root.classList.contains(e))return new u(r);throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are "+i+" and "+e+".")},r}(d);function x(t){return new y(t)}function v(t,r,i,e){return Object.assign({[l.drawer]:!0,"uni-aside-pro":r,"uni-aside__bar":i,"uni-header__fixed-adjust":"fixed"===e},"permanent"!==t?{[l[t]]:!!l[t]}:{})}const _=class{constructor(i){t(this,i),this.event=r(this,"uniAsideInitialized",7),this.active=!1,this.mode="permanent",this.pro=!1,this.bar=!1}onUniListInitialized(){this.onTypeChanged()}onUniListWrapInitialized(){this.onTypeChanged()}onActiveChanged(t){this.aside&&"permanent"!==this.mode&&(this.aside.open=t)}onTypeChanged(){"permanent"!==this.mode&&setTimeout((()=>{this.aside=x(this.el),this.aside.open=this.active}))}render(){const t=v(this.mode,this.pro,this.bar,this.header);return n({classes:t})}componentDidLoad(){e("uni-aside","import"),this.el.querySelector("uni-list, uni-list-wrap")||this.onTypeChanged()}get el(){return i(this)}static get watchers(){return{active:["onActiveChanged"],mode:["onTypeChanged"]}}};_.style='.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{-webkit-transform:translateX(-100%);transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{-webkit-transform:translateX(100%);transform:translateX(100%)}.mdc-drawer--opening{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition-duration:250ms;transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{-webkit-transform:translateX(0);transform:translateX(0)}.mdc-drawer--closing{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition-duration:200ms;transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{-webkit-transform:translateX(100%);transform:translateX(100%)}.mdc-drawer__header{-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:-ms-flexbox;display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{-webkit-box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:-ms-flexbox;display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{-webkit-transition-duration:250ms;transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{-webkit-transition-duration:200ms;transition-duration:200ms;opacity:0}.uni-aside-pro.mdc-drawer{position:fixed;z-index:2;left:48px}.uni-aside-pro .mdc-drawer__content{overflow-y:auto}.uni-aside-pro .mdc-drawer__header{min-height:48px;padding:0 0 0 16px;-webkit-box-shadow:0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)}.uni-aside-pro .mdc-drawer__title::before{height:33px}.uni-aside__bar.mdc-drawer{left:48px}.uni-header__fixed-adjust{padding-top:48px}';export{_ as U,v as a,x as u}