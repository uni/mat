System.register(["./p-b299e400.system.js","./p-a821f331.system.js","./p-154e9fb3.system.js","./p-c2c6e12b.system.js"],(function(t){"use strict";var e,r,l,o,s,n,c,i;return{setters:[function(t){e=t.r;r=t.c;l=t.h;o=t.g},function(t){s=t.u},function(t){n=t.j;c=t.a},function(t){i=t.U}],execute:function(){var a=".mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{-ms-flex-pack:start;justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{-ms-flex-pack:end;justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{-ms-flex-pack:center;justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}";var b=t("U",function(){function t(t){e(this,t);this.uniTabsScrollerInitialized=r(this,"uniTabsScrollerInitialized",7)}t.prototype.tabListen=function(){var t=this;if(!this.initialized){this.initialized=true;setTimeout((function(){return t.uniTabsScrollerInitialized.emit(n(t.el))}),300)}};t.prototype.render=function(){var t=c();return i({classes:t},l("slot",null))};t.prototype.componentDidLoad=function(){s("uni-tabs-scroller","extend")};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());b.style=a}}}));