import{r as e,h as t,g as i}from"./p-05f4a60f.js";import{i as r}from"./p-e6e28ea3.js";import{U as n}from"./p-049db068.js";import{u as a}from"./p-e282851d.js";import{b as o,c as l}from"./p-1ba80c95.js";import{M as d,a as f}from"./p-608e635a.js";import"./p-12df985d.js";var c={ROOT:"mdc-form-field"},m={LABEL_SELECTOR:".mdc-form-field > label"},s=function(e){function t(i){var r=e.call(this,l(l({},t.defaultAdapter),i))||this;return r.click=function(){r.handleClick()},r}return o(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(d),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.attachTo=function(e){return new t(e)},t.prototype.labelEl=function(){return this.root.querySelector(s.strings.LABEL_SELECTOR)},t.prototype.getDefaultFoundation=function(){var e=this;return new s({activateInputRipple:function(){e.input&&e.input.ripple&&e.input.ripple.activate()},deactivateInputRipple:function(){e.input&&e.input.ripple&&e.input.ripple.deactivate()},deregisterInteractionHandler:function(t,i){var r=e.labelEl();r&&r.removeEventListener(t,i)},registerInteractionHandler:function(t,i){var r=e.labelEl();r&&r.addEventListener(t,i)}})},t}(f);const g=class{constructor(t){e(this,t)}onUniCheckboxInitialized(e){r(this.instance)?this.instance.input=e.detail:console.warn("checkbox input is initialized before the uni-form-field element")}onUniRadioInitialized(e){r(this.instance)?this.instance.input=e.detail:console.warn("radio input is initialized before the uni-form-field element")}render(){return n({classes:{"mdc-form-field":!0}},t("slot",null))}componentDidLoad(){var e;a("mat"),this.instance=(e=this.el,a("mat"),new p(e))}get el(){return i(this)}};g.style=".mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}";export{g as uni_form_field}