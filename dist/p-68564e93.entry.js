import{r as t,h as o,g as r}from"./p-45e5d0c1.js";import{u as e}from"./p-e282851d.js";import{u as n}from"./p-b548a461.js";import{U as c}from"./p-d07813c9.js";import{u as i}from"./p-457407af.js";import"./p-188d91d2.js";import"./p-82de3962.js";import"./p-12df985d.js";import"./p-24974892.js";import"./p-7b0c11a1.js";import"./p-834ea128.js";import"./p-9579904e.js";let d=class{constructor(o){t(this,o),this.pro=!1,this.type="button",this.disabled=!1,this.noRipple=!1,this.only=!1}render(){const{type:t,disabled:r}=this,e={type:t,disabled:r},n=i(this.pro,this.mode,this.color);return c(this.only,{props:e,classes:n},o("slot",null))}componentDidLoad(){e("mat"),this.noRipple||n(this.el.shadowRoot.firstElementChild)}get el(){return r(this)}};d.style='.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-button .mdc-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-button:hover .mdc-button__ripple::before,.mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:hover .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-button--raised.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){background-color:transparent}.mdc-button--outlined:disabled{background-color:transparent}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple::before,.mdc-button--outlined .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--outlined:hover .mdc-button__ripple::before,.mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-button--outlined.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button .mdc-button__icon.material-icons{font-size:18px}.mdc-button .mdc-button__icon svg{width:18px;height:18px;font-size:18px;vertical-align:top}.uni-button.mdc-button{font-family:Roboto, "Helvetica Neue", sans-serif;text-transform:none}.uni-button.mdc-button:not(:disabled){color:inherit}.uni-button.mdc-button .mdc-button__ripple::before,.uni-button.mdc-button .mdc-button__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}@supports not (-ms-ime-align: auto){.uni-button.mdc-button::before,.uni-button.mdc-button::after{background-color:#000;background-color:var(--uni-color-default, #000)}}@supports not (-ms-ime-align: auto){.uni-button.mdc-button--raised:not(:disabled),.uni-button.mdc-button--unelevated:not(:disabled){background-color:#fff;background-color:var(--uni-color-default-on, #fff)}}.uni-color-primary.mdc-button:not(:disabled){color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-success.mdc-button:not(:disabled){color:#018786;color:var(--uni-color-success, #018786)}.uni-color-accent.mdc-button:not(:disabled){color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn.mdc-button:not(:disabled){color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-primary.mdc-button--raised:not(:disabled),.uni-color-primary.mdc-button--unelevated:not(:disabled){background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-success.mdc-button--raised:not(:disabled),.uni-color-success.mdc-button--unelevated:not(:disabled){background-color:#018786;background-color:var(--uni-color-success, #018786)}.uni-color-accent.mdc-button--raised:not(:disabled),.uni-color-accent.mdc-button--unelevated:not(:disabled){background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn.mdc-button--raised:not(:disabled),.uni-color-warn.mdc-button--unelevated:not(:disabled){background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}@supports not (-ms-ime-align: auto){.uni-color-primary.mdc-button--raised:not(:disabled),.uni-color-primary.mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-primary, #3f51b5)}}@supports not (-ms-ime-align: auto){.uni-color-success.mdc-button--raised:not(:disabled),.uni-color-success.mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-success, #018786)}}@supports not (-ms-ime-align: auto){.uni-color-accent.mdc-button--raised:not(:disabled),.uni-color-accent.mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-accent, #ff4081)}}@supports not (-ms-ime-align: auto){.uni-color-warn.mdc-button--raised:not(:disabled),.uni-color-warn.mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-warn, #f44336)}}.uni-color-primary.mdc-button--raised:not(:disabled),.uni-color-primary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-primary-on, #fff)}.uni-color-success.mdc-button--raised:not(:disabled),.uni-color-success.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-success-on, #fff)}.uni-color-accent.mdc-button--raised:not(:disabled),.uni-color-accent.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-accent-on, #fff)}.uni-color-warn.mdc-button--raised:not(:disabled),.uni-color-warn.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-warn-on, #fff)}.uni-color-primary.mdc-button .mdc-button__ripple::before,.uni-color-primary.mdc-button .mdc-button__ripple::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-success.mdc-button .mdc-button__ripple::before,.uni-color-success.mdc-button .mdc-button__ripple::after{background-color:#018786;background-color:var(--uni-color-success, #018786)}.uni-color-accent.mdc-button .mdc-button__ripple::before,.uni-color-accent.mdc-button .mdc-button__ripple::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn.mdc-button .mdc-button__ripple::before,.uni-color-warn.mdc-button .mdc-button__ripple::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-primary.mdc-button--raised .mdc-button__ripple::before,.uni-color-primary.mdc-button--raised .mdc-button__ripple::after,.uni-color-primary.mdc-button--unelevated .mdc-button__ripple::before,.uni-color-primary.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-success.mdc-button--raised .mdc-button__ripple::before,.uni-color-success.mdc-button--raised .mdc-button__ripple::after,.uni-color-success.mdc-button--unelevated .mdc-button__ripple::before,.uni-color-success.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-success-on, #fff)}.uni-color-accent.mdc-button--raised .mdc-button__ripple::before,.uni-color-accent.mdc-button--raised .mdc-button__ripple::after,.uni-color-accent.mdc-button--unelevated .mdc-button__ripple::before,.uni-color-accent.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn.mdc-button--raised .mdc-button__ripple::before,.uni-color-warn.mdc-button--raised .mdc-button__ripple::after,.uni-color-warn.mdc-button--unelevated .mdc-button__ripple::before,.uni-color-warn.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}';export{d as uni_button_shadow}