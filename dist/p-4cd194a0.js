import{r as t,h as p,g as i}from"./p-45e5d0c1.js";import{U as a}from"./p-12df985d.js";import{U as o}from"./p-82de3962.js";import{u as r}from"./p-e282851d.js";import{_ as e,a as n}from"./p-66181af4.js";import{M as d,a as s}from"./p-7176408e.js";import{M as c}from"./p-a228c569.js";var m={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},h={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},b={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},l=function(t){function p(i){return t.call(this,n(n({},p.defaultAdapter),i))||this}return e(p,t),Object.defineProperty(p,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(p,"cssClasses",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(p,"numbers",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(p,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),p.prototype.handleTargetScroll=function(){},p.prototype.handleWindowResize=function(){},p.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},p}(d),f=function(t){function p(p){var i=t.call(this,p)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return e(p,t),p.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},p.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),p=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=p,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},p.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()}),h.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0}),h.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},p.prototype.checkForUpdate_=function(){var t=this.currentAppBarOffsetTop_>-this.topAppBarHeight_,p=this.currentAppBarOffsetTop_<0&&t;if(p)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==t)return this.isDockedShowing_=t,!0}return p},p.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-h.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},p.prototype.throttledResizeHandler_=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},p}(l),u=function(t){function p(){var p=null!==t&&t.apply(this,arguments)||this;return p.wasScrolled_=!1,p}return e(p,t),p.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(m.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(m.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},p}(f),g=function(t){function p(p){var i=t.call(this,p)||this;return i.isCollapsed_=!1,i.isAlwaysCollapsed_=!1,i}return e(p,t),Object.defineProperty(p.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!1,configurable:!0}),p.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(m.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(m.SHORT_COLLAPSED_CLASS))},p.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed_=!!t,this.isAlwaysCollapsed_?this.collapse_():this.maybeCollapseBar_()},p.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed_},p.prototype.handleTargetScroll=function(){this.maybeCollapseBar_()},p.prototype.maybeCollapseBar_=function(){this.isAlwaysCollapsed_||(this.adapter.getViewportScrollY()<=0?this.isCollapsed_&&this.uncollapse_():this.isCollapsed_||this.collapse_())},p.prototype.uncollapse_=function(){this.adapter.removeClass(m.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1},p.prototype.collapse_=function(){this.adapter.addClass(m.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0},p}(l),x=function(t){function p(){return null!==t&&t.apply(this,arguments)||this}return e(p,t),p.attachTo=function(t){return new p(t)},p.prototype.initialize=function(t){void 0===t&&(t=function(t){return c.attachTo(t)}),this.navIcon_=this.root.querySelector(b.NAVIGATION_ICON_SELECTOR);var p=[].slice.call(this.root.querySelectorAll(b.ACTION_ITEM_SELECTOR));this.navIcon_&&p.push(this.navIcon_),this.iconRipples_=p.map((function(p){var i=t(p);return i.unbounded=!0,i})),this.scrollTarget_=window},p.prototype.initialSyncWithDOM=function(){this.handleNavigationClick_=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize_=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll_=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.addEventListener("click",this.handleNavigationClick_);var t=this.root.classList.contains(m.FIXED_CLASS);this.root.classList.contains(m.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize_)},p.prototype.destroy=function(){this.iconRipples_.forEach((function(t){return t.destroy()})),this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.navIcon_&&this.navIcon_.removeEventListener("click",this.handleNavigationClick_);var p=this.root.classList.contains(m.FIXED_CLASS);this.root.classList.contains(m.SHORT_CLASS)||p||window.removeEventListener("resize",this.handleWindowResize_),t.prototype.destroy.call(this)},p.prototype.setScrollTarget=function(t){this.scrollTarget_.removeEventListener("scroll",this.handleTargetScroll_),this.scrollTarget_=t,this.handleTargetScroll_=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget_.addEventListener("scroll",this.handleTargetScroll_)},p.prototype.getDefaultFoundation=function(){var t=this,p={hasClass:function(p){return t.root.classList.contains(p)},addClass:function(p){return t.root.classList.add(p)},removeClass:function(p){return t.root.classList.remove(p)},setStyle:function(p,i){return t.root.style.setProperty(p,i)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){return t.emit(b.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var p=t.scrollTarget_;return void 0!==p.pageYOffset?p.pageYOffset:t.scrollTarget_.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(b.ACTION_ITEM_SELECTOR).length}};return this.root.classList.contains(m.SHORT_CLASS)?new g(p):this.root.classList.contains(m.FIXED_CLASS)?new u(p):new f(p)},p}(s);function _(t){return r("mat"),new x(t)}const w={header:"mdc-top-app-bar",fixed:"mdc-top-app-bar--fixed",short:"mdc-top-app-bar--short",dense:"mdc-top-app-bar--dense",prominent:"mdc-top-app-bar--prominent",collapsed:"mdc-top-app-bar--short-collapsed",row:"mdc-top-app-bar__row",section:"mdc-top-app-bar__section",start:"mdc-top-app-bar__section--align-start",end:"mdc-top-app-bar__section--align-end",title:"mdc-top-app-bar__title",navIcon:"mdc-top-app-bar__navigation-icon",actionItem:"mdc-top-app-bar__action-item",pro:"uni-header"};function v(t){const{pro:p,mode:i,dense:a,prominent:o,collapsed:r}=t;return{[w.header]:!0,[w.pro]:p,[w.fixed]:"fixed"===i,[w.short]:"short"===i,[w.dense]:a,[w.prominent]:o,[w.collapsed]:"short"===i&&r}}let y=class{constructor(p){t(this,p),this.pro=!1,this.mode="standard",this.dense=!1,this.prominent=!1,this.collapsed=!1,this.only=!1}get data(){const{pro:t,mode:p,dense:i,prominent:a,collapsed:o}=this;return{pro:t,mode:p,dense:i,prominent:a,collapsed:o}}render(){const t=v(this.data);return this.only?o({classes:t},p("slot",null)):a(p("header",{class:t},p("uni-header-row",null,p("slot",null))))}componentDidRender(){this.el&&this.el.firstElementChild&&_(this.el.firstElementChild)}componentDidLoad(){r("mat"),this.el&&this.el.firstElementChild&&_(this.el.firstElementChild)}get el(){return i(this)}};y.style=".mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{-ms-flex-pack:start;justify-content:flex-start;-ms-flex-order:-1;order:-1}.mdc-top-app-bar__section--align-end{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-order:1;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;-webkit-transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{-ms-flex-item-align:end;align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{-ms-flex-item-align:start;align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:-webkit-box-shadow 200ms linear;transition:-webkit-box-shadow 200ms linear;transition:box-shadow 200ms linear;transition:box-shadow 200ms linear, -webkit-box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);-webkit-transition:-webkit-box-shadow 200ms linear;transition:-webkit-box-shadow 200ms linear;transition:box-shadow 200ms linear;transition:box-shadow 200ms linear, -webkit-box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1);transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}.uni-header.mdc-top-app-bar{background:-webkit-gradient(linear, left top, right top, from(#185079), to(#0ACDB7));background:linear-gradient(90deg, #185079 0%, #0ACDB7 100%);z-index:4}.uni-header .mdc-top-app-bar__navigation-icon{display:inline-block}.uni-header .mdc-top-app-bar__section--align-start{padding:0!important}.mdc-top-app-bar--dense .mdc-select--filled .mdc-select__anchor{height:48px}";export{y as U,w as a,v as b,_ as u}