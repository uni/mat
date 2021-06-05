System.register(["./p-8a8d84c1.system.js","./p-350814eb.system.js","./p-0acf0044.system.js"],(function(t){"use strict";var e,n,r,o,i,a,c,l,s;return{setters:[function(t){e=t._;n=t.a;r=t.e;o=t.M;i=t.b},function(t){a=t.a;c=t.b;l=t.M},function(t){s=t.m}],execute:function(){t({a:k,b:X,c:G,d:U,e:q,f:z,g:J,h:Q,i:M,j:Y,k:F,l:j,u:B});var u={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"};var f={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};var d=function(){function t(t){this.adapter=t}return t}();var h=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft();var e=this.calculateScrollEdges_().right;return Math.round(e-t)};n.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges_();var n=this.adapter.getScrollAreaScrollLeft();var r=this.clampScrollValue_(e.right-t);return{finalScrollPosition:r,scrollDelta:r-n}};n.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();var n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}};n.prototype.getAnimatingScrollPosition=function(t){return t};n.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();var e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}};n.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)};return n}(d);var p=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)};n.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();var n=this.clampScrollValue_(-t);return{finalScrollPosition:n,scrollDelta:n-e}};n.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();var n=this.clampScrollValue_(e-t);return{finalScrollPosition:n,scrollDelta:n-e}};n.prototype.getAnimatingScrollPosition=function(t,e){return t-e};n.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();var e=this.adapter.getScrollAreaOffsetWidth();return{left:e-t,right:0}};n.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)};return n}(d);var _=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)};n.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();var n=this.clampScrollValue_(t);return{finalScrollPosition:n,scrollDelta:e-n}};n.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();var n=this.clampScrollValue_(e+t);return{finalScrollPosition:n,scrollDelta:e-n}};n.prototype.getAnimatingScrollPosition=function(t,e){return t+e};n.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();var e=this.adapter.getScrollAreaOffsetWidth();return{left:t-e,right:0}};n.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)};return n}(d);var v=function(t){e(o,t);function o(e){var r=t.call(this,n(n({},o.defaultAdapter),e))||this;r.isAnimating_=false;return r}Object.defineProperty(o,"cssClasses",{get:function(){return u},enumerable:false,configurable:true});Object.defineProperty(o,"strings",{get:function(){return f},enumerable:false,configurable:true});Object.defineProperty(o,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return false},addClass:function(){return undefined},removeClass:function(){return undefined},addScrollAreaClass:function(){return undefined},setScrollAreaStyleProperty:function(){return undefined},setScrollContentStyleProperty:function(){return undefined},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){return undefined},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:false,configurable:true});o.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px");this.adapter.addScrollAreaClass(o.cssClasses.SCROLL_AREA_SCROLL)};o.prototype.getScrollPosition=function(){if(this.isRTL_()){return this.computeCurrentScrollPositionRTL_()}var t=this.calculateCurrentTranslateX_();var e=this.adapter.getScrollAreaScrollLeft();return e-t};o.prototype.handleInteraction=function(){if(!this.isAnimating_){return}this.stopScrollAnimation_()};o.prototype.handleTransitionEnd=function(t){var e=t.target;if(!this.isAnimating_||!this.adapter.eventTargetMatchesSelector(e,o.strings.CONTENT_SELECTOR)){return}this.isAnimating_=false;this.adapter.removeClass(o.cssClasses.ANIMATING)};o.prototype.incrementScroll=function(t){if(t===0){return}this.animate_(this.getIncrementScrollOperation_(t))};o.prototype.incrementScrollImmediate=function(t){if(t===0){return}var e=this.getIncrementScrollOperation_(t);if(e.scrollDelta===0){return}this.stopScrollAnimation_();this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition)};o.prototype.scrollTo=function(t){if(this.isRTL_()){return this.scrollToRTL_(t)}this.scrollTo_(t)};o.prototype.getRTLScroller=function(){if(!this.rtlScrollerInstance_){this.rtlScrollerInstance_=this.rtlScrollerFactory_()}return this.rtlScrollerInstance_};o.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none"){return 0}var e=/\((.+?)\)/.exec(t);if(!e){return 0}var n=e[1];var o=r(n.split(","),6),i=o[4];return parseFloat(i)};o.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)};o.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)};o.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();var e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}};o.prototype.scrollTo_=function(t){var e=this.getScrollPosition();var n=this.clampScrollValue_(t);var r=n-e;this.animate_({finalScrollPosition:n,scrollDelta:r})};o.prototype.scrollToRTL_=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)};o.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_()){return this.getRTLScroller().incrementScrollRTL(t)}var e=this.getScrollPosition();var n=t+e;var r=this.clampScrollValue_(n);var o=r-e;return{finalScrollPosition:r,scrollDelta:o}};o.prototype.animate_=function(t){var e=this;if(t.scrollDelta===0){return}this.stopScrollAnimation_();this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition);this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)");this.adapter.computeScrollAreaClientRect();requestAnimationFrame((function(){e.adapter.addClass(o.cssClasses.ANIMATING);e.adapter.setScrollContentStyleProperty("transform","none")}));this.isAnimating_=true};o.prototype.stopScrollAnimation_=function(){this.isAnimating_=false;var t=this.getAnimatingScrollPosition_();this.adapter.removeClass(o.cssClasses.ANIMATING);this.adapter.setScrollContentStyleProperty("transform","translateX(0px)");this.adapter.setScrollAreaScrollLeft(t)};o.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_();var e=this.adapter.getScrollAreaScrollLeft();if(this.isRTL_()){return this.getRTLScroller().getAnimatingScrollPosition(e,t)}return e-t};o.prototype.rtlScrollerFactory_=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0){this.adapter.setScrollAreaScrollLeft(t);return new p(this.adapter)}var n=this.adapter.computeScrollAreaClientRect();var r=this.adapter.computeScrollContentClientRect();var o=Math.round(r.right-n.right);this.adapter.setScrollAreaScrollLeft(t);if(o===e){return new _(this.adapter)}return new h(this.adapter)};o.prototype.isRTL_=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"};return o}(o);var S;function T(t,e){if(e===void 0){e=true}if(e&&typeof S!=="undefined"){return S}var n=t.createElement("div");n.classList.add(u.SCROLL_TEST);t.body.appendChild(n);var r=n.offsetHeight-n.clientHeight;t.body.removeChild(n);if(e){S=r}return r}var g=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.attachTo=function(t){return new n(t)};n.prototype.initialize=function(){this.area_=this.root.querySelector(v.strings.AREA_SELECTOR);this.content_=this.root.querySelector(v.strings.CONTENT_SELECTOR)};n.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(){return t.foundation.handleInteraction()};this.handleTransitionEnd_=function(e){return t.foundation.handleTransitionEnd(e)};this.area_.addEventListener("wheel",this.handleInteraction_,a());this.area_.addEventListener("touchstart",this.handleInteraction_,a());this.area_.addEventListener("pointerdown",this.handleInteraction_,a());this.area_.addEventListener("mousedown",this.handleInteraction_,a());this.area_.addEventListener("keydown",this.handleInteraction_,a());this.content_.addEventListener("transitionend",this.handleTransitionEnd_)};n.prototype.destroy=function(){t.prototype.destroy.call(this);this.area_.removeEventListener("wheel",this.handleInteraction_,a());this.area_.removeEventListener("touchstart",this.handleInteraction_,a());this.area_.removeEventListener("pointerdown",this.handleInteraction_,a());this.area_.removeEventListener("mousedown",this.handleInteraction_,a());this.area_.removeEventListener("keydown",this.handleInteraction_,a());this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)};n.prototype.getDefaultFoundation=function(){var t=this;var e={eventTargetMatchesSelector:function(t,e){return s(t,e)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},addScrollAreaClass:function(e){return t.area_.classList.add(e)},setScrollAreaStyleProperty:function(e,n){return t.area_.style.setProperty(e,n)},setScrollContentStyleProperty:function(e,n){return t.content_.style.setProperty(e,n)},getScrollContentStyleValue:function(e){return window.getComputedStyle(t.content_).getPropertyValue(e)},setScrollAreaScrollLeft:function(e){return t.area_.scrollLeft=e},getScrollAreaScrollLeft:function(){return t.area_.scrollLeft},getScrollContentOffsetWidth:function(){return t.content_.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area_.offsetWidth},computeScrollAreaClientRect:function(){return t.area_.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return T(document)}};return new v(e)};n.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()};n.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth};n.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)};n.prototype.scrollTo=function(t){this.foundation.scrollTo(t)};return n}(i);var A={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"};var E={CONTENT_SELECTOR:".mdc-tab-indicator__content"};var y=function(t){e(r,t);function r(e){return t.call(this,n(n({},r.defaultAdapter),e))||this}Object.defineProperty(r,"cssClasses",{get:function(){return A},enumerable:false,configurable:true});Object.defineProperty(r,"strings",{get:function(){return E},enumerable:false,configurable:true});Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){return undefined},removeClass:function(){return undefined},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){return undefined}}},enumerable:false,configurable:true});r.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()};return r}(o);var m=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.prototype.activate=function(){this.adapter.addClass(y.cssClasses.ACTIVE)};n.prototype.deactivate=function(){this.adapter.removeClass(y.cssClasses.ACTIVE)};return n}(y);var C=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.prototype.activate=function(t){if(!t){this.adapter.addClass(y.cssClasses.ACTIVE);return}var e=this.computeContentClientRect();var n=t.width/e.width;var r=t.left-e.left;this.adapter.addClass(y.cssClasses.NO_TRANSITION);this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+n+")");this.computeContentClientRect();this.adapter.removeClass(y.cssClasses.NO_TRANSITION);this.adapter.addClass(y.cssClasses.ACTIVE);this.adapter.setContentStyleProperty("transform","")};n.prototype.deactivate=function(){this.adapter.removeClass(y.cssClasses.ACTIVE)};return n}(y);var b=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.attachTo=function(t){return new n(t)};n.prototype.initialize=function(){this.content_=this.root.querySelector(y.strings.CONTENT_SELECTOR)};n.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()};n.prototype.getDefaultFoundation=function(){var t=this;var e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},computeContentClientRect:function(){return t.content_.getBoundingClientRect()},setContentStyleProperty:function(e,n){return t.content_.style.setProperty(e,n)}};if(this.root.classList.contains(y.cssClasses.FADE)){return new m(e)}return new C(e)};n.prototype.activate=function(t){this.foundation.activate(t)};n.prototype.deactivate=function(){this.foundation.deactivate()};return n}(i);var L={ACTIVE:"mdc-tab--active"};var R={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};var I=function(t){e(r,t);function r(e){var o=t.call(this,n(n({},r.defaultAdapter),e))||this;o.focusOnActivate_=true;return o}Object.defineProperty(r,"cssClasses",{get:function(){return L},enumerable:false,configurable:true});Object.defineProperty(r,"strings",{get:function(){return R},enumerable:false,configurable:true});Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){return undefined},removeClass:function(){return undefined},hasClass:function(){return false},setAttr:function(){return undefined},activateIndicator:function(){return undefined},deactivateIndicator:function(){return undefined},notifyInteracted:function(){return undefined},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){return undefined}}},enumerable:false,configurable:true});r.prototype.handleClick=function(){this.adapter.notifyInteracted()};r.prototype.isActive=function(){return this.adapter.hasClass(L.ACTIVE)};r.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t};r.prototype.activate=function(t){this.adapter.addClass(L.ACTIVE);this.adapter.setAttr(R.ARIA_SELECTED,"true");this.adapter.setAttr(R.TABINDEX,"0");this.adapter.activateIndicator(t);if(this.focusOnActivate_){this.adapter.focus()}};r.prototype.deactivate=function(){if(!this.isActive()){return}this.adapter.removeClass(L.ACTIVE);this.adapter.setAttr(R.ARIA_SELECTED,"false");this.adapter.setAttr(R.TABINDEX,"-1");this.adapter.deactivateIndicator()};r.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth();var e=this.adapter.getOffsetLeft();var n=this.adapter.getContentOffsetWidth();var r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+n,rootLeft:e,rootRight:e+t}};return r}(o);var O=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.attachTo=function(t){return new n(t)};n.prototype.initialize=function(t,e){if(t===void 0){t=function(t,e){return new l(t,e)}}if(e===void 0){e=function(t){return new b(t)}}this.id=this.root.id;var n=new c(l.createAdapter(this));this.ripple_=t(this.root,n);var r=this.root.querySelector(I.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(r);this.content_=this.root.querySelector(I.strings.CONTENT_SELECTOR)};n.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation.handleClick()};this.listen("click",this.handleClick_)};n.prototype.destroy=function(){this.unlisten("click",this.handleClick_);this.ripple_.destroy();t.prototype.destroy.call(this)};n.prototype.getDefaultFoundation=function(){var t=this;var e={setAttr:function(e,n){return t.root.setAttribute(e,n)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},activateIndicator:function(e){return t.tabIndicator_.activate(e)},deactivateIndicator:function(){return t.tabIndicator_.deactivate()},notifyInteracted:function(){return t.emit(I.strings.INTERACTED_EVENT,{tabId:t.id},true)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content_.offsetLeft},getContentOffsetWidth:function(){return t.content_.offsetWidth},focus:function(){return t.root.focus()}};return new I(e)};Object.defineProperty(n.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:false,configurable:true});Object.defineProperty(n.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:false,configurable:true});n.prototype.activate=function(t){this.foundation.activate(t)};n.prototype.deactivate=function(){this.foundation.deactivate()};n.prototype.computeIndicatorClientRect=function(){return this.tabIndicator_.computeContentClientRect()};n.prototype.computeDimensions=function(){return this.foundation.computeDimensions()};n.prototype.focus=function(){this.root.focus()};return n}(i);var P={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"};var D={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};var N=new Set;N.add(P.ARROW_LEFT_KEY);N.add(P.ARROW_RIGHT_KEY);N.add(P.END_KEY);N.add(P.HOME_KEY);N.add(P.ENTER_KEY);N.add(P.SPACE_KEY);var w=new Map;w.set(D.ARROW_LEFT_KEYCODE,P.ARROW_LEFT_KEY);w.set(D.ARROW_RIGHT_KEYCODE,P.ARROW_RIGHT_KEY);w.set(D.END_KEYCODE,P.END_KEY);w.set(D.HOME_KEYCODE,P.HOME_KEY);w.set(D.ENTER_KEYCODE,P.ENTER_KEY);w.set(D.SPACE_KEYCODE,P.SPACE_KEY);var x=function(t){e(r,t);function r(e){var o=t.call(this,n(n({},r.defaultAdapter),e))||this;o.useAutomaticActivation_=false;return o}Object.defineProperty(r,"strings",{get:function(){return P},enumerable:false,configurable:true});Object.defineProperty(r,"numbers",{get:function(){return D},enumerable:false,configurable:true});Object.defineProperty(r,"defaultAdapter",{get:function(){return{scrollTo:function(){return undefined},incrementScroll:function(){return undefined},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return false},setActiveTab:function(){return undefined},activateTabAtIndex:function(){return undefined},deactivateTabAtIndex:function(){return undefined},focusTabAtIndex:function(){return undefined},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){return undefined}}},enumerable:false,configurable:true});r.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t};r.prototype.activateTab=function(t){var e=this.adapter.getPreviousActiveTabIndex();if(!this.indexIsInRange_(t)||t===e){return}var n;if(e!==-1){this.adapter.deactivateTabAtIndex(e);n=this.adapter.getTabIndicatorClientRectAtIndex(e)}this.adapter.activateTabAtIndex(t,n);this.scrollIntoView(t);this.adapter.notifyTabActivated(t)};r.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(e===undefined){return}if(!this.isActivationKey_(e)){t.preventDefault()}if(this.useAutomaticActivation_){if(this.isActivationKey_(e)){return}var n=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(n);this.scrollIntoView(n)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey_(e)){this.adapter.setActiveTab(r)}else{var n=this.determineTargetFromKey_(r,e);this.adapter.focusTabAtIndex(n);this.scrollIntoView(n)}}};r.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))};r.prototype.scrollIntoView=function(t){if(!this.indexIsInRange_(t)){return}if(t===0){return this.adapter.scrollTo(0)}if(t===this.adapter.getTabListLength()-1){return this.adapter.scrollTo(this.adapter.getScrollContentWidth())}if(this.isRTL_()){return this.scrollIntoViewRTL_(t)}this.scrollIntoView_(t)};r.prototype.determineTargetFromKey_=function(t,e){var n=this.isRTL_();var r=this.adapter.getTabListLength()-1;var o=e===P.END_KEY;var i=e===P.ARROW_LEFT_KEY&&!n||e===P.ARROW_RIGHT_KEY&&n;var a=e===P.ARROW_RIGHT_KEY&&!n||e===P.ARROW_LEFT_KEY&&n;var c=t;if(o){c=r}else if(i){c-=1}else if(a){c+=1}else{c=0}if(c<0){c=r}else if(c>r){c=0}return c};r.prototype.calculateScrollIncrement_=function(t,e,n,r){var o=this.adapter.getTabDimensionsAtIndex(e);var i=o.contentLeft-n-r;var a=o.contentRight-n;var c=a-D.EXTRA_SCROLL_AMOUNT;var l=i+D.EXTRA_SCROLL_AMOUNT;if(e<t){return Math.min(c,0)}return Math.max(l,0)};r.prototype.calculateScrollIncrementRTL_=function(t,e,n,r,o){var i=this.adapter.getTabDimensionsAtIndex(e);var a=o-i.contentLeft-n;var c=o-i.contentRight-n-r;var l=c+D.EXTRA_SCROLL_AMOUNT;var s=a-D.EXTRA_SCROLL_AMOUNT;if(e>t){return Math.max(l,0)}return Math.min(s,0)};r.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,n,r){var o=e.rootLeft-n;var i=e.rootRight-n-r;var a=o+i;var c=o<0||a<0;var l=i>0||a>0;if(c){return t-1}if(l){return t+1}return-1};r.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,n,r,o){var i=o-e.rootLeft-r-n;var a=o-e.rootRight-n;var c=i+a;var l=i>0||c>0;var s=a<0||c<0;if(l){return t+1}if(s){return t-1}return-1};r.prototype.getKeyFromEvent_=function(t){if(N.has(t.key)){return t.key}return w.get(t.keyCode)};r.prototype.isActivationKey_=function(t){return t===P.SPACE_KEY||t===P.ENTER_KEY};r.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter.getTabListLength()};r.prototype.isRTL_=function(){return this.adapter.isRTL()};r.prototype.scrollIntoView_=function(t){var e=this.adapter.getScrollPosition();var n=this.adapter.getOffsetWidth();var r=this.adapter.getTabDimensionsAtIndex(t);var o=this.findAdjacentTabIndexClosestToEdge_(t,r,e,n);if(!this.indexIsInRange_(o)){return}var i=this.calculateScrollIncrement_(t,o,e,n);this.adapter.incrementScroll(i)};r.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter.getScrollPosition();var n=this.adapter.getOffsetWidth();var r=this.adapter.getTabDimensionsAtIndex(t);var o=this.adapter.getScrollContentWidth();var i=this.findAdjacentTabIndexClosestToEdgeRTL_(t,r,e,n,o);if(!this.indexIsInRange_(i)){return}var a=this.calculateScrollIncrementRTL_(t,i,e,n,o);this.adapter.incrementScroll(a)};return r}(o);var K=x.strings;var W=0;var V=function(t){e(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}n.attachTo=function(t){return new n(t)};Object.defineProperty(n.prototype,"focusOnActivate",{set:function(t){this.tabList_.forEach((function(e){return e.focusOnActivate=t}))},enumerable:false,configurable:true});Object.defineProperty(n.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:false,configurable:true});n.prototype.initialize=function(t,e){if(t===void 0){t=function(t){return new O(t)}}if(e===void 0){e=function(t){return new g(t)}}this.tabList_=this.instantiateTabs_(t);this.tabScroller_=this.instantiateTabScroller_(e)};n.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction_=function(e){return t.foundation.handleTabInteraction(e)};this.handleKeyDown_=function(e){return t.foundation.handleKeyDown(e)};this.listen(I.strings.INTERACTED_EVENT,this.handleTabInteraction_);this.listen("keydown",this.handleKeyDown_);for(var e=0;e<this.tabList_.length;e++){if(this.tabList_[e].active){this.scrollIntoView(e);break}}};n.prototype.destroy=function(){t.prototype.destroy.call(this);this.unlisten(I.strings.INTERACTED_EVENT,this.handleTabInteraction_);this.unlisten("keydown",this.handleKeyDown_);this.tabList_.forEach((function(t){return t.destroy()}));if(this.tabScroller_){this.tabScroller_.destroy()}};n.prototype.getDefaultFoundation=function(){var t=this;var e={scrollTo:function(e){return t.tabScroller_.scrollTo(e)},incrementScroll:function(e){return t.tabScroller_.incrementScroll(e)},getScrollPosition:function(){return t.tabScroller_.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller_.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(e){return t.foundation.activateTab(e)},activateTabAtIndex:function(e,n){return t.tabList_[e].activate(n)},deactivateTabAtIndex:function(e){return t.tabList_[e].deactivate()},focusTabAtIndex:function(e){return t.tabList_[e].focus()},getTabIndicatorClientRectAtIndex:function(e){return t.tabList_[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(e){return t.tabList_[e].computeDimensions()},getPreviousActiveTabIndex:function(){for(var e=0;e<t.tabList_.length;e++){if(t.tabList_[e].active){return e}}return-1},getFocusedTabIndex:function(){var e=t.getTabElements_();var n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function(e){for(var n=0;n<t.tabList_.length;n++){if(t.tabList_[n].id===e){return n}}return-1},getTabListLength:function(){return t.tabList_.length},notifyTabActivated:function(e){return t.emit(K.TAB_ACTIVATED_EVENT,{index:e},true)}};return new x(e)};n.prototype.activateTab=function(t){this.foundation.activateTab(t)};n.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)};n.prototype.getTabElements_=function(){return[].slice.call(this.root.querySelectorAll(K.TAB_SELECTOR))};n.prototype.instantiateTabs_=function(t){return this.getTabElements_().map((function(e){e.id=e.id||"mdc-tab-"+ ++W;return t(e)}))};n.prototype.instantiateTabScroller_=function(t){var e=this.root.querySelector(K.TAB_SCROLLER_SELECTOR);if(e){return t(e)}return null};return n}(i);function M(t){return new V(t)}function Y(t){return new g(t)}function F(t){return new O(t)}function j(t){return new b(t)}var H=t("U",{tabs:"mdc-tab-bar",scroller:"mdc-tab-scroller",scrollArea:"mdc-tab-scroller__scroll-area",scrollContent:"mdc-tab-scroller__scroll-content",tab:"mdc-tab",active:"mdc-tab--active",tabRipple:"mdc-tab__ripple",tabContent:"mdc-tab__content",tabIndicator:"mdc-tab-indicator",indicatorActive:"mdc-tab-indicator--active",tabIndicatorContent:"mdc-tab-indicator__content",tabIndicatorContentUnderline:"mdc-tab-indicator__content--underline"});function B(){var t;return t={},t[H.tabs]=true,t}function k(){var t;return t={},t[H.scroller]=true,t}function X(){var t;return t={},t[H.scrollArea]=true,t}function G(){var t;return t={},t[H.scrollContent]=true,t}function U(t){var e;return e={},e[H.tab]=true,e[H.active]=!!t,e}function q(){var t;return t={},t[H.tabRipple]=true,t}function z(){var t;return t={},t[H.tabContent]=true,t}function J(t){var e;return e={},e[H.tabIndicator]=true,e[H.indicatorActive]=!!t,e}function Q(){var t;return t={},t[H.tabIndicatorContent]=true,t[H.tabIndicatorContentUnderline]=true,t}}}}));