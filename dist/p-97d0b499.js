import{r,g as a}from"./p-2cffe494.js";import{u as e,a as i}from"./p-c05d140a.js";import{u as o}from"./p-78249524.js";import{u as t}from"./p-375d9649.js";import{b as c}from"./p-59d9e37c.js";const n=class{constructor(a){r(this,a),this.pro=!1,this.noRipple=!1,this.exited=!1,this.all=!1}componentDidRender(){const r=c(this.pro,this.exited,this.size,this.color);e(this.el,r,this.all,this.selector)}componentDidLoad(){o("uni-fab-wrap","click"),this.noRipple||i(this.el,this.all,this.selector).forEach((r=>{t(r)}))}get el(){return a(this)}};n.style='.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-fab{position:relative;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;-webkit-transition:opacity 15ms linear 30ms, -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 15ms linear 30ms, -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);-webkit-box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover{-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-fab.mdc-ripple-upgraded--background-focused,.mdc-fab:not(.mdc-ripple-upgraded):focus{-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-fab:active,.mdc-fab:focus:active{-webkit-box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab,.mdc-fab:not(:disabled) .mdc-fab__icon,.mdc-fab:not(:disabled) .mdc-fab__label,.mdc-fab:disabled .mdc-fab__icon,.mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-fab__label{-ms-flex-pack:start;justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{-webkit-transition:-webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:-webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.mdc-fab--exited{-webkit-transform:scale(0);transform:scale(0);opacity:0;-webkit-transition:opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:opacity 15ms linear 150ms, transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:-webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-fab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab .mdc-fab__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-fab .mdc-fab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-secondary, #fff))}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-fab{z-index:0}.mdc-fab .mdc-fab__ripple::before,.mdc-fab .mdc-fab__ripple::after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.uni-fab-pro.mdc-fab{font-family:Roboto, "Helvetica Neue", sans-serif;text-transform:none;color:#000;color:var(--uni-color-default, #000);background-color:#fff;background-color:var(--uni-color-default-on, #fff)}.uni-fab-pro.mdc-fab .mdc-fab__ripple::before,.uni-fab-pro.mdc-fab .mdc-fab__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}.uni-color-primary.mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-primary.mdc-fab .mdc-fab__ripple::before,.uni-color-primary.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-success.mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#018786;background-color:var(--uni-color-success, #018786)}.uni-color-success.mdc-fab .mdc-fab__ripple::before,.uni-color-success.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-accent.mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-accent.mdc-fab .mdc-fab__ripple::before,.uni-color-accent.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn.mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-warn.mdc-fab .mdc-fab__ripple::before,.uni-color-warn.mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}';export{n as U}