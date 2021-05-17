System.register(["./p-b299e400.system.js","./p-a821f331.system.js","./p-79aa49b7.system.js","./p-fdeb947e.system.js","./p-b1ed920b.system.js","./p-0acf0044.system.js","./p-6db829f7.system.js"],(function(t){"use strict";var e,i,n,o,a,r,l,d,s,c,u,m,f,p,g,h;return{setters:[function(t){e=t.r;i=t.c;n=t.h;o=t.F;a=t.g},function(t){r=t.u},function(t){l=t.U},function(t){d=t._;s=t.a;c=t.M;u=t.c;m=t.b},function(t){f=t.F},function(t){p=t.m;g=t.c},function(t){h=t.M}],execute:function(){t({a:y,u:D});var x={dialog:"mdc-dialog",scrim:"mdc-dialog__scrim",container:"mdc-dialog__container",surface:"mdc-dialog__surface",title:"mdc-dialog__title",content:"mdc-dialog__content",actions:"mdc-dialog__actions",button:"mdc-dialog__button"};function y(){var t;return t={},t[x.dialog]=true,t}function _(t,e,i){return e(t,{initialFocusEl:i})}function b(t){return t?t.scrollHeight>t.offsetHeight:false}function E(t){return t?t.scrollTop===0:false}function v(t){return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:false}function C(t){var e=new Set;[].forEach.call(t,(function(t){return e.add(t.offsetTop)}));return e.size>1}var S=function(){function t(){this.rafIDs=new Map}t.prototype.request=function(t,e){var i=this;this.cancel(t);var n=requestAnimationFrame((function(n){i.rafIDs.delete(t);e(n)}));this.rafIDs.set(t,n)};t.prototype.cancel=function(t){var e=this.rafIDs.get(t);if(e){cancelAnimationFrame(e);this.rafIDs.delete(t)}};t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,i){t.cancel(i)}))};t.prototype.getQueue=function(){var t=[];this.rafIDs.forEach((function(e,i){t.push(i)}));return t};return t}();var O={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer"};var T={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"};var w={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};var A;(function(t){t["POLL_SCROLL_POS"]="poll_scroll_position"})(A||(A={}));var L=function(t){d(e,t);function e(i){var n=t.call(this,s(s({},e.defaultAdapter),i))||this;n.dialogOpen=false;n.isFullscreen=false;n.animationFrame=0;n.animationTimer=0;n.layoutFrame=0;n.escapeKeyAction=T.CLOSE_ACTION;n.scrimClickAction=T.CLOSE_ACTION;n.autoStackButtons=true;n.areButtonsStacked=false;n.suppressDefaultPressSelector=T.SUPPRESS_DEFAULT_PRESS_SELECTOR;n.animFrame=new S;n.contentScrollHandler=function(){n.handleScrollEvent()};return n}Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:true,configurable:true});Object.defineProperty(e,"strings",{get:function(){return T},enumerable:true,configurable:true});Object.defineProperty(e,"numbers",{get:function(){return w},enumerable:true,configurable:true});Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){return undefined},addClass:function(){return undefined},areButtonsStacked:function(){return false},clickDefaultButton:function(){return undefined},eventTargetMatches:function(){return false},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return false},isContentScrollable:function(){return false},notifyClosed:function(){return undefined},notifyClosing:function(){return undefined},notifyOpened:function(){return undefined},notifyOpening:function(){return undefined},releaseFocus:function(){return undefined},removeBodyClass:function(){return undefined},removeClass:function(){return undefined},reverseButtons:function(){return undefined},trapFocus:function(){return undefined},registerContentEventHandler:function(){return undefined},deregisterContentEventHandler:function(){return undefined},isScrollableContentAtTop:function(){return false},isScrollableContentAtBottom:function(){return false}}},enumerable:true,configurable:true});e.prototype.init=function(){if(this.adapter.hasClass(O.STACKED)){this.setAutoStackButtons(false)}this.isFullscreen=this.adapter.hasClass(O.FULLSCREEN)};e.prototype.destroy=function(){if(this.dialogOpen){this.close(T.DESTROY_ACTION)}if(this.animationTimer){clearTimeout(this.animationTimer);this.handleAnimationTimerEnd()}if(this.layoutFrame){cancelAnimationFrame(this.layoutFrame);this.layoutFrame=0}if(this.isFullscreen&&this.adapter.isContentScrollable()){this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler)}};e.prototype.open=function(){var t=this;this.dialogOpen=true;this.adapter.notifyOpening();this.adapter.addClass(O.OPENING);if(this.isFullscreen&&this.adapter.isContentScrollable()){this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler)}this.runNextAnimationFrame((function(){t.adapter.addClass(O.OPEN);t.adapter.addBodyClass(O.SCROLL_LOCK);t.layout();t.animationTimer=setTimeout((function(){t.handleAnimationTimerEnd();t.adapter.trapFocus(t.adapter.getInitialFocusEl());t.adapter.notifyOpened()}),w.DIALOG_ANIMATION_OPEN_TIME_MS)}))};e.prototype.close=function(t){var e=this;if(t===void 0){t=""}if(!this.dialogOpen){return}this.dialogOpen=false;this.adapter.notifyClosing(t);this.adapter.addClass(O.CLOSING);this.adapter.removeClass(O.OPEN);this.adapter.removeBodyClass(O.SCROLL_LOCK);if(this.isFullscreen&&this.adapter.isContentScrollable()){this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler)}cancelAnimationFrame(this.animationFrame);this.animationFrame=0;clearTimeout(this.animationTimer);this.animationTimer=setTimeout((function(){e.adapter.releaseFocus();e.handleAnimationTimerEnd();e.adapter.notifyClosed(t)}),w.DIALOG_ANIMATION_CLOSE_TIME_MS)};e.prototype.isOpen=function(){return this.dialogOpen};e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction};e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t};e.prototype.getScrimClickAction=function(){return this.scrimClickAction};e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t};e.prototype.getAutoStackButtons=function(){return this.autoStackButtons};e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t};e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector};e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t};e.prototype.layout=function(){var t=this;if(this.layoutFrame){cancelAnimationFrame(this.layoutFrame)}this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal();t.layoutFrame=0}))};e.prototype.handleClick=function(t){var e=this.adapter.eventTargetMatches(t.target,T.SCRIM_SELECTOR);if(e&&this.scrimClickAction!==""){this.close(this.scrimClickAction)}else{var i=this.adapter.getActionFromEvent(t);if(i){this.close(i)}}};e.prototype.handleKeydown=function(t){var e=t.key==="Enter"||t.keyCode===13;if(!e){return}var i=this.adapter.getActionFromEvent(t);if(i){return}var n=t.composedPath?t.composedPath()[0]:t.target;var o=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(n,this.suppressDefaultPressSelector):true;if(e&&o){this.adapter.clickDefaultButton()}};e.prototype.handleDocumentKeydown=function(t){var e=t.key==="Escape"||t.keyCode===27;if(e&&this.escapeKeyAction!==""){this.close(this.escapeKeyAction)}};e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(A.POLL_SCROLL_POS,(function(){t.toggleScrollDividerHeader();t.toggleScrollDividerFooter()}))};e.prototype.layoutInternal=function(){if(this.autoStackButtons){this.detectStackedButtons()}this.toggleScrollableClasses()};e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0;this.adapter.removeClass(O.OPENING);this.adapter.removeClass(O.CLOSING)};e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame);this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0;clearTimeout(e.animationTimer);e.animationTimer=setTimeout(t,0)}))};e.prototype.detectStackedButtons=function(){this.adapter.removeClass(O.STACKED);var t=this.adapter.areButtonsStacked();if(t){this.adapter.addClass(O.STACKED)}if(t!==this.areButtonsStacked){this.adapter.reverseButtons();this.areButtonsStacked=t}};e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(O.SCROLLABLE);if(this.adapter.isContentScrollable()){this.adapter.addClass(O.SCROLLABLE);if(this.isFullscreen){this.toggleScrollDividerHeader();this.toggleScrollDividerFooter()}}};e.prototype.toggleScrollDividerHeader=function(){if(!this.adapter.isScrollableContentAtTop()){this.adapter.addClass(O.SCROLL_DIVIDER_HEADER)}else if(this.adapter.hasClass(O.SCROLL_DIVIDER_HEADER)){this.adapter.removeClass(O.SCROLL_DIVIDER_HEADER)}};e.prototype.toggleScrollDividerFooter=function(){if(!this.adapter.isScrollableContentAtBottom()){this.adapter.addClass(O.SCROLL_DIVIDER_FOOTER)}else if(this.adapter.hasClass(O.SCROLL_DIVIDER_FOOTER)){this.adapter.removeClass(O.SCROLL_DIVIDER_FOOTER)}};return e}(c);var k=L.strings;var I=function(t){d(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:true,configurable:true});e.attachTo=function(t){return new e(t)};e.prototype.initialize=function(t){var e,i;if(t===void 0){t=function(t,e){return new f(t,e)}}var n=this.root.querySelector(k.CONTAINER_SELECTOR);if(!n){throw new Error("Dialog component requires a "+k.CONTAINER_SELECTOR+" container element")}this.container=n;this.content=this.root.querySelector(k.CONTENT_SELECTOR);this.buttons=[].slice.call(this.root.querySelectorAll(k.BUTTON_SELECTOR));this.defaultButton=this.root.querySelector("["+k.BUTTON_DEFAULT_ATTRIBUTE+"]");this.focusTrapFactory=t;this.buttonRipples=[];try{for(var o=u(this.buttons),a=o.next();!a.done;a=o.next()){var r=a.value;this.buttonRipples.push(new h(r))}}catch(l){e={error:l}}finally{try{if(a&&!a.done&&(i=o.return))i.call(o)}finally{if(e)throw e.error}}};e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=_(this.container,this.focusTrapFactory,this.getInitialFocusEl()||undefined);this.handleClick=this.foundation.handleClick.bind(this.foundation);this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation);this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation);this.handleLayout=this.layout.bind(this);var e=["resize","orientationchange"];this.handleOpening=function(){e.forEach((function(e){window.addEventListener(e,t.handleLayout)}));document.addEventListener("keydown",t.handleDocumentKeydown)};this.handleClosing=function(){e.forEach((function(e){window.removeEventListener(e,t.handleLayout)}));document.removeEventListener("keydown",t.handleDocumentKeydown)};this.listen("click",this.handleClick);this.listen("keydown",this.handleKeydown);this.listen(k.OPENING_EVENT,this.handleOpening);this.listen(k.CLOSING_EVENT,this.handleClosing)};e.prototype.destroy=function(){this.unlisten("click",this.handleClick);this.unlisten("keydown",this.handleKeydown);this.unlisten(k.OPENING_EVENT,this.handleOpening);this.unlisten(k.CLOSING_EVENT,this.handleClosing);this.handleClosing();this.buttonRipples.forEach((function(t){t.destroy()}));t.prototype.destroy.call(this)};e.prototype.layout=function(){this.foundation.layout()};e.prototype.open=function(){this.foundation.open()};e.prototype.close=function(t){if(t===void 0){t=""}this.foundation.close(t)};e.prototype.getDefaultFoundation=function(){var t=this;var e={addBodyClass:function(t){return document.body.classList.add(t)},addClass:function(e){return t.root.classList.add(e)},areButtonsStacked:function(){return C(t.buttons)},clickDefaultButton:function(){if(t.defaultButton){t.defaultButton.click()}},eventTargetMatches:function(t,e){return t?p(t,e):false},getActionFromEvent:function(t){if(!t.target){return""}var e=g(t.target,"["+k.ACTION_ATTRIBUTE+"]");return e&&e.getAttribute(k.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(e){return t.root.classList.contains(e)},isContentScrollable:function(){return b(t.content)},notifyClosed:function(e){return t.emit(k.CLOSED_EVENT,e?{action:e}:{})},notifyClosing:function(e){return t.emit(k.CLOSING_EVENT,e?{action:e}:{})},notifyOpened:function(){return t.emit(k.OPENED_EVENT,{})},notifyOpening:function(){return t.emit(k.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(t){return document.body.classList.remove(t)},removeClass:function(e){return t.root.classList.remove(e)},reverseButtons:function(){t.buttons.reverse();t.buttons.forEach((function(t){t.parentElement.appendChild(t)}))},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(e,i){if(t.content instanceof HTMLElement){t.content.addEventListener(e,i)}},deregisterContentEventHandler:function(e,i){if(t.content instanceof HTMLElement){t.content.removeEventListener(e,i)}},isScrollableContentAtTop:function(){return E(t.content)},isScrollableContentAtBottom:function(){return v(t.content)}};return new L(e)};e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+k.INITIAL_FOCUS_ATTRIBUTE+"]")};return e}(m);function D(t){return new I(t)}var N='.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}@media (max-width: 960px) and (max-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;max-width:560px}}@media (max-width: 720px) and (max-height: 1023px) and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 112px)}}@media (max-width: 720px) and (max-height: 1023px) and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:560px}}@media (max-width: 720px) and (max-height: 1023px) and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px) and (max-height: 1023px) and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px) and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:100vw;width:100vw;max-height:100vh;height:100vh;border-radius:0}}@media (max-width: 600px) and (max-height: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:100vw;width:100vw;max-height:100vh;height:100vh;border-radius:0}}@media (min-width: 960px) and (min-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 400px)}}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;-webkit-box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{display:-ms-inline-flexbox;display:inline-flex;padding:0 16px 9px;border-bottom:1px solid transparent;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.mdc-dialog--fullscreen .mdc-dialog__title{padding:0;border-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{width:24px;height:24px;padding:0px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:-ms-flexbox;display:flex}.mdc-dialog--opening .mdc-dialog__scrim{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{-webkit-transition:opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{-webkit-transform:none;transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{-webkit-transform:none;transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}';var F=t("U",function(){function t(t){e(this,t);this.uniDialogClosing=i(this,"uniDialogClosing",7);this.active=false;this.role="dialog";this.modal="true";this.labelled="uni-dialog-title";this.described="uni-dialog-content"}t.prototype.activeHandler=function(t){if(t){this.dialog.open()}else if(this.dialog){this.dialog.close()}};t.prototype.onUniDialogContainerInitialized=function(){var t=this;this.dialog=D(this.el);this.activeHandler(this.active);this.dialog.listen("MDCDialog:opened",(function(){document.body.setAttribute("aria-hidden","true")}));this.dialog.listen("MDCDialog:closing",(function(){document.body.removeAttribute("aria-hidden");t.uniDialogClosing.emit(t.dialog)}))};t.prototype.render=function(){var t=this,e=t.role,i=t.modal,a=t.labelled,r=t.described;var d={role:e,modal:i,labelled:a,described:r};var s=y();return l({classes:s},n(o,null,n("uni-dialog-container",null,n("uni-dialog-surface",Object.assign({},d),n("slot",null))),n("uni-dialog-scrim",null)))};t.prototype.componentDidLoad=function(){r("uni-dialog","open")};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"]}},enumerable:false,configurable:true});return t}());F.style=N}}}));