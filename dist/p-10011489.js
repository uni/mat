import{r as s,h as t}from"./p-09960453.js";import{u as o}from"./p-78249524.js";import{U as n}from"./p-15d481af.js";function e(){return{"mdc-button__icon":!0}}let i=class{constructor(t){s(this,t),this.icons="mat",this.spin=!1,this.only=!1}render(){const{type:s,name:o,color:e,size:i,angle:r,spin:p,speed:c,steps:a}=this,l={type:s,name:o,color:e,size:i,angle:r,spin:p,speed:c,steps:a},u=`uni-icon-${this.icons}`;return n({classes:{"mdc-button__icon":!0}},this.only?t("slot",null):t(u,Object.assign({},l),t("slot",null)))}componentDidLoad(){o("uni-button-icon","prefer")}};export{i as U,e as u}