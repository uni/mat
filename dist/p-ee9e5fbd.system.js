System.register(["./p-1877a707.system.js","./p-1e736fd3.system.js","./p-ff5bc05b.system.js","./p-18333724.system.js","./p-96465e6e.system.js","./p-043fc6fe.system.js","./p-b9d36ed7.system.js","./p-6f5aab31.system.js"],(function(t){"use strict";var e,n,i,r,a,o,s,c,u,f,d,l,h,T;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.g},function(t){a=t.u},function(t){o=t.U},function(t){s=t._;c=t.a},function(t){u=t.M;f=t.a},function(t){d=t.M},function(t){l=t.M;h=t.a},function(t){T=t.U}],execute:function(){t({a:y,u:I});var _={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"};var E={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};var p=new Set;p.add(_.ARROW_LEFT_KEY);p.add(_.ARROW_RIGHT_KEY);p.add(_.END_KEY);p.add(_.HOME_KEY);p.add(_.ENTER_KEY);p.add(_.SPACE_KEY);var b=new Map;b.set(E.ARROW_LEFT_KEYCODE,_.ARROW_LEFT_KEY);b.set(E.ARROW_RIGHT_KEYCODE,_.ARROW_RIGHT_KEY);b.set(E.END_KEYCODE,_.END_KEY);b.set(E.HOME_KEYCODE,_.HOME_KEY);b.set(E.ENTER_KEYCODE,_.ENTER_KEY);b.set(E.SPACE_KEYCODE,_.SPACE_KEY);var v=function(t){s(e,t);function e(n){var i=t.call(this,c(c({},e.defaultAdapter),n))||this;i.useAutomaticActivation_=false;return i}Object.defineProperty(e,"strings",{get:function(){return _},enumerable:false,configurable:true});Object.defineProperty(e,"numbers",{get:function(){return E},enumerable:false,configurable:true});Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){return undefined},incrementScroll:function(){return undefined},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return false},setActiveTab:function(){return undefined},activateTabAtIndex:function(){return undefined},deactivateTabAtIndex:function(){return undefined},focusTabAtIndex:function(){return undefined},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){return undefined}}},enumerable:false,configurable:true});e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t};e.prototype.activateTab=function(t){var e=this.adapter.getPreviousActiveTabIndex();if(!this.indexIsInRange_(t)||t===e){return}var n;if(e!==-1){this.adapter.deactivateTabAtIndex(e);n=this.adapter.getTabIndicatorClientRectAtIndex(e)}this.adapter.activateTabAtIndex(t,n);this.scrollIntoView(t);this.adapter.notifyTabActivated(t)};e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(e===undefined){return}if(!this.isActivationKey_(e)){t.preventDefault()}if(this.useAutomaticActivation_){if(this.isActivationKey_(e)){return}var n=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(n);this.scrollIntoView(n)}else{var i=this.adapter.getFocusedTabIndex();if(this.isActivationKey_(e)){this.adapter.setActiveTab(i)}else{var n=this.determineTargetFromKey_(i,e);this.adapter.focusTabAtIndex(n);this.scrollIntoView(n)}}};e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))};e.prototype.scrollIntoView=function(t){if(!this.indexIsInRange_(t)){return}if(t===0){return this.adapter.scrollTo(0)}if(t===this.adapter.getTabListLength()-1){return this.adapter.scrollTo(this.adapter.getScrollContentWidth())}if(this.isRTL_()){return this.scrollIntoViewRTL_(t)}this.scrollIntoView_(t)};e.prototype.determineTargetFromKey_=function(t,e){var n=this.isRTL_();var i=this.adapter.getTabListLength()-1;var r=e===_.END_KEY;var a=e===_.ARROW_LEFT_KEY&&!n||e===_.ARROW_RIGHT_KEY&&n;var o=e===_.ARROW_RIGHT_KEY&&!n||e===_.ARROW_LEFT_KEY&&n;var s=t;if(r){s=i}else if(a){s-=1}else if(o){s+=1}else{s=0}if(s<0){s=i}else if(s>i){s=0}return s};e.prototype.calculateScrollIncrement_=function(t,e,n,i){var r=this.adapter.getTabDimensionsAtIndex(e);var a=r.contentLeft-n-i;var o=r.contentRight-n;var s=o-E.EXTRA_SCROLL_AMOUNT;var c=a+E.EXTRA_SCROLL_AMOUNT;if(e<t){return Math.min(s,0)}return Math.max(c,0)};e.prototype.calculateScrollIncrementRTL_=function(t,e,n,i,r){var a=this.adapter.getTabDimensionsAtIndex(e);var o=r-a.contentLeft-n;var s=r-a.contentRight-n-i;var c=s+E.EXTRA_SCROLL_AMOUNT;var u=o-E.EXTRA_SCROLL_AMOUNT;if(e>t){return Math.max(c,0)}return Math.min(u,0)};e.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,n,i){var r=e.rootLeft-n;var a=e.rootRight-n-i;var o=r+a;var s=r<0||o<0;var c=a>0||o>0;if(s){return t-1}if(c){return t+1}return-1};e.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,n,i,r){var a=r-e.rootLeft-i-n;var o=r-e.rootRight-n;var s=a+o;var c=a>0||s>0;var u=o<0||s<0;if(c){return t+1}if(u){return t-1}return-1};e.prototype.getKeyFromEvent_=function(t){if(p.has(t.key)){return t.key}return b.get(t.keyCode)};e.prototype.isActivationKey_=function(t){return t===_.SPACE_KEY||t===_.ENTER_KEY};e.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter.getTabListLength()};e.prototype.isRTL_=function(){return this.adapter.isRTL()};e.prototype.scrollIntoView_=function(t){var e=this.adapter.getScrollPosition();var n=this.adapter.getOffsetWidth();var i=this.adapter.getTabDimensionsAtIndex(t);var r=this.findAdjacentTabIndexClosestToEdge_(t,i,e,n);if(!this.indexIsInRange_(r)){return}var a=this.calculateScrollIncrement_(t,r,e,n);this.adapter.incrementScroll(a)};e.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter.getScrollPosition();var n=this.adapter.getOffsetWidth();var i=this.adapter.getTabDimensionsAtIndex(t);var r=this.adapter.getScrollContentWidth();var a=this.findAdjacentTabIndexClosestToEdgeRTL_(t,i,e,n,r);if(!this.indexIsInRange_(a)){return}var o=this.calculateScrollIncrementRTL_(t,a,e,n,r);this.adapter.incrementScroll(o)};return e}(u);var A=v.strings;var g=0;var R=function(t){s(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.attachTo=function(t){return new e(t)};Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.tabList_.forEach((function(e){return e.focusOnActivate=t}))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:false,configurable:true});e.prototype.initialize=function(t,e){if(t===void 0){t=function(t){return new h(t)}}if(e===void 0){e=function(t){return new d(t)}}this.tabList_=this.instantiateTabs_(t);this.tabScroller_=this.instantiateTabScroller_(e)};e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction_=function(e){return t.foundation.handleTabInteraction(e)};this.handleKeyDown_=function(e){return t.foundation.handleKeyDown(e)};this.listen(l.strings.INTERACTED_EVENT,this.handleTabInteraction_);this.listen("keydown",this.handleKeyDown_);for(var e=0;e<this.tabList_.length;e++){if(this.tabList_[e].active){this.scrollIntoView(e);break}}};e.prototype.destroy=function(){t.prototype.destroy.call(this);this.unlisten(l.strings.INTERACTED_EVENT,this.handleTabInteraction_);this.unlisten("keydown",this.handleKeyDown_);this.tabList_.forEach((function(t){return t.destroy()}));if(this.tabScroller_){this.tabScroller_.destroy()}};e.prototype.getDefaultFoundation=function(){var t=this;var e={scrollTo:function(e){return t.tabScroller_.scrollTo(e)},incrementScroll:function(e){return t.tabScroller_.incrementScroll(e)},getScrollPosition:function(){return t.tabScroller_.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller_.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(e){return t.foundation.activateTab(e)},activateTabAtIndex:function(e,n){return t.tabList_[e].activate(n)},deactivateTabAtIndex:function(e){return t.tabList_[e].deactivate()},focusTabAtIndex:function(e){return t.tabList_[e].focus()},getTabIndicatorClientRectAtIndex:function(e){return t.tabList_[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(e){return t.tabList_[e].computeDimensions()},getPreviousActiveTabIndex:function(){for(var e=0;e<t.tabList_.length;e++){if(t.tabList_[e].active){return e}}return-1},getFocusedTabIndex:function(){var e=t.getTabElements_();var n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function(e){for(var n=0;n<t.tabList_.length;n++){if(t.tabList_[n].id===e){return n}}return-1},getTabListLength:function(){return t.tabList_.length},notifyTabActivated:function(e){return t.emit(A.TAB_ACTIVATED_EVENT,{index:e},true)}};return new v(e)};e.prototype.activateTab=function(t){this.foundation.activateTab(t)};e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)};e.prototype.getTabElements_=function(){return[].slice.call(this.root.querySelectorAll(A.TAB_SELECTOR))};e.prototype.instantiateTabs_=function(t){return this.getTabElements_().map((function(e){e.id=e.id||"mdc-tab-"+ ++g;return t(e)}))};e.prototype.instantiateTabScroller_=function(t){var e=this.root.querySelector(A.TAB_SCROLLER_SELECTOR);if(e){return t(e)}return null};return e}(f);function y(t){return new R(t)}function I(){var t;return t={},t[T.tabBar]=true,t}var m=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}";var L=t("U",function(){function t(t){e(this,t);this.uniTabBarInitialized=n(this,"uniTabBarInitialized",7);this.only=false}t.prototype.tabScrollerListen=function(){this.uniTabBarInitialized.emit(y(this.el))};t.prototype.render=function(){var t=I();return o({classes:t},this.only?"":i("uni-tab-scroller",null,i("slot",null)))};t.prototype.componentDidLoad=function(){a("mdk")};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());L.style=m}}}));