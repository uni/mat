import{r as t,g as s}from"./p-45e5d0c1.js";import{u as i}from"./p-6a0179f7.js";import{u as r}from"./p-ba5a8130.js";import{u as o}from"./p-e282851d.js";import{u as p}from"./p-7875f186.js";import{u as a}from"./p-29252830.js";import"./p-c84d3d92.js";import"./p-24974892.js";import"./p-7b0c11a1.js";import"./p-834ea128.js";import"./p-9579904e.js";import"./p-b5c2ae6e.js";function m(t,s,r,o,p){Array.from(i(t,o,p)).forEach((t=>{t&&(t[s]=r)}))}let e=class{constructor(s){t(this,s),this.selected=!1,this.disabled=!1,this.selector="li"}componentDidRender(){const t=p(this.selected,this.disabled);r(this.el,t,!1,this.selector),m(this.el,"aria-selected",this.selected,!1,this.selector),this.index&&m(this.el,"tabindex",this.selected?0:this.index,!1,this.selector)}componentDidLoad(){o("mat"),a(this.el.querySelector(this.selector))}get el(){return s(this)}};export{e as uni_list_item_wrap}