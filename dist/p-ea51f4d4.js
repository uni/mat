import{r,c as t,h as l,g as e}from"./p-adbebb84.js";import{u as s}from"./p-78249524.js";import{j as o,a as c}from"./p-7e083768.js";import{U as a}from"./p-ed1d710d.js";const i=class{constructor(l){r(this,l),this.uniTabsScrollerInitialized=t(this,"uniTabsScrollerInitialized",7)}tabListen(){this.initialized||(this.initialized=!0,setTimeout((()=>this.uniTabsScrollerInitialized.emit(o(this.el))),300))}render(){const r=c();return a({classes:r},l("slot",null))}componentDidLoad(){s("uni-tabs-scroller","extend")}get el(){return e(this)}};i.style=".mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{-ms-flex-pack:start;justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{-ms-flex-pack:end;justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{-ms-flex-pack:center;justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}";export{i as U}