System.register(["./p-cc1a5997.system.js","./p-732072fa.system.js","./p-9e7c31fb.system.js"],(function(t){"use strict";var e,n,i,r,o;return{setters:[function(t){e=t.r;n=t.e;i=t.g},function(t){r=t.u},function(t){o=t.U}],execute:function(){t({c:c,d:d,u:a});function a(){return{"mdc-dialog__container":true}}var u=t("U",function(){function t(t){e(this,t);this.uniDialogContainerInitialized=n(this,"uniDialogContainerInitialized",7)}t.prototype.render=function(){var t=a();return o({classes:t})};t.prototype.componentDidLoad=function(){r("mdk");this.uniDialogContainerInitialized.emit(this.el)};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());function c(){return{"mdc-dialog__scrim":true}}var s=t("a",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=c();return o({classes:t})};t.prototype.componentDidLoad=function(){r("mdk")};return t}());function d(){return{"mdc-dialog__surface":true}}var l=t("b",function(){function t(t){e(this,t);this.role="dialog";this.modal="true";this.labelled="uni-dialog-title";this.described="uni-dialog-content"}t.prototype.render=function(){var t=this,e=t.role,n=t.modal,i=t.labelled,r=t.described;var a={role:e,"aria-modal":n,"aria-labelledby":i,"aria-describedby":r};var u=d();return o({props:a,classes:u})};t.prototype.componentDidLoad=function(){r("mdk")};return t}())}}}));