import{r as s,h as t,g as e}from"./p-adbebb84.js";import"./p-d018faa6.js";import{u as i}from"./p-3346d370.js";import{u as o}from"./p-94e8b618.js";const r=class{constructor(t){s(this,t),this.type="solid",this.spin=!1}componentWillLoad(){this.name=this.name||i(this.el)}render(){const{name:s,color:e,size:i,angle:r,spin:n,speed:a,steps:p}=this,c={name:s,color:e,size:i,angle:r,spin:n,speed:a,steps:p},m=`uni-icons-fa-${o(this.type)}`;return t(m,Object.assign({},c))}get el(){return e(this)}};export{r as uni_icons_fa}