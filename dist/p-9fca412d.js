import{r as s,c as t,h as r,g as a}from"./p-adbebb84.js";import{u as i}from"./p-78249524.js";import{U as e}from"./p-54e06294.js";import{i as o,u as n}from"./p-7e083768.js";const c=class{constructor(r){s(this,r),this.uniTabsInitialized=t(this,"uniTabsInitialized",7)}tabsScrollerListen(){this.uniTabsInitialized.emit(o(this.el))}render(){const s=n();return e({classes:s},r("uni-tabs-scroller",null,r("slot",null)))}componentDidLoad(){i("uni-tabs","destroy")}get el(){return a(this)}};c.style=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}";export{c as U}