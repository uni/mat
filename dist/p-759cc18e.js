import{r,g as i}from"./p-2cffe494.js";import{u as e}from"./p-78249524.js";import{U as a}from"./p-4d3f0f80.js";import{M as t,a as o}from"./p-762a65d9.js";function n(r){return new t(r)}function s(r){return new o(r)}const c=class{constructor(i){r(this,i)}menuSurfaceClosedHandler(){this.open=!1}render(){return a({classes:{"mdc-menu":!0,"mdc-menu-surface":!0}})}componentDidRender(){const r=n(this.el);this.open&&(r.open=!0)}componentDidLoad(){e("uni-menu-surface","end"),s(this.el)}get el(){return i(this)}};c.style=".mdc-menu-surface{display:none;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;-webkit-transition:opacity 0.03s linear, height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;-webkit-transition:opacity 0.075s linear;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}";export{c as U,s as a,n as u}