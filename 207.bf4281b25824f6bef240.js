"use strict";(self.webpackChunkditya_technolabs_website=self.webpackChunkditya_technolabs_website||[]).push([[207],{207:(_n,de,c)=>{c.r(de),c.d(de,{ContactUsModule:()=>gn});var E=c(583),r=c(639),ce=c(402),ht=c(574),he=c(796),fe=c(2),ft=c(555);function F(n,t){return new ht.y(e=>{const o=n.length;if(0===o)return void e.complete();const i=new Array(o);let s=0,a=0;for(let d=0;d<o;d++){const f=(0,ce.D)(n[d]);let v=!1;e.add(f.subscribe({next:V=>{v||(v=!0,a++),i[d]=V},error:V=>e.error(V),complete:()=>{s++,(s===o||!v)&&(a===o&&e.next(t?t.reduce((V,pn,mn)=>(V[pn]=i[mn],V),{}):i),e.complete())}}))}})}let ge=(()=>{class n{constructor(e,o){this._renderer=e,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n}),n})(),y=(()=>{class n extends ge{}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();const h=new r.OlP("NgValueAccessor"),mt={provide:h,useExisting:(0,r.Gpc)(()=>N),multi:!0},yt=new r.OlP("CompositionEventMode");let N=(()=>{class n extends ge{constructor(e,o,i){super(e,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,E.q)()?(0,E.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(yt,8))},n.\u0275dir=r.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){1&e&&r.NdJ("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[r._Bn([mt]),r.qOj]}),n})();function g(n){return null==n||0===n.length}function me(n){return null!=n&&"number"==typeof n.length}const l=new r.OlP("NgValidators"),p=new r.OlP("NgAsyncValidators"),vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function m(n){return null}function De(n){return null!=n}function Ee(n){const t=(0,r.QGY)(n)?(0,ce.D)(n):n;return(0,r.CqO)(t),t}function Fe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ne(n,t){return t.map(e=>e(n))}function we(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function Z(n){return null!=n?function(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return Fe(Ne(e,t))}}(we(n)):null}function I(n){return null!=n?function(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return function(...n){if(1===n.length){const t=n[0];if((0,he.k)(t))return F(t,null);if((0,ft.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return F(e.map(o=>t[o]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return F(n=1===n.length&&(0,he.k)(n[0])?n[0]:n,null).pipe((0,fe.U)(e=>t(...e)))}return F(n,null)}(Ne(e,t).map(Ee)).pipe((0,fe.U)(Fe))}}(we(n)):null}function xe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function R(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function ke(n,t){const e=R(t);return R(n).forEach(i=>{w(e,i)||e.push(i)}),e}function Ue(n,t){return R(t).filter(e=>!w(n,e))}let Be=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Z(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=I(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,o){return!!this.control&&this.control.hasError(e,o)}getError(e,o){return this.control?this.control.getError(e,o):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n}),n})(),u=(()=>{class n extends Be{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();class _ extends Be{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class qe{constructor(t){this._cd=t}is(t){var e,o,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(o=this._cd)||void 0===o?void 0:o.control)||void 0===i?void 0:i[t])}}let Pe=(()=>{class n extends qe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(_,2))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))},features:[r.qOj]}),n})(),Ze=(()=>{class n extends qe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(u,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))("ng-submitted",o.is("submitted"))},features:[r.qOj]}),n})();function A(n,t){L(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ie(n,t)})}(n,t),function(n,t){const e=(o,i)=>{t.valueAccessor.writeValue(o),i&&t.viewToModelUpdate(o)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ie(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=o=>{t.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function G(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function L(n,t){const e=function(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(xe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const o=function(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(xe(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const i=()=>n.updateValueAndValidity();G(t._rawValidators,i),G(t._rawAsyncValidators,i)}function Ie(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function k(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const M="VALID",U="INVALID",C="PENDING",b="DISABLED";function $(n){return(z(n)?n.validators:n)||null}function He(n){return Array.isArray(n)?Z(n):n||null}function J(n,t){return(z(t)?t.asyncValidators:n)||null}function Le(n){return Array.isArray(n)?I(n):n||null}function z(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Q{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=He(this._rawValidators),this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===U}get pending(){return this.status==C}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=He(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Le(t)}addValidators(t){this.setValidators(ke(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ke(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ue(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ue(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(o=>{o.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(o=>{o.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Ee(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let o=n;return t.forEach(i=>{o=o instanceof X?o.controls.hasOwnProperty(i)?o.controls[i]:null:o instanceof xt&&o.at(i)||null}),o}(this,t)}getError(t,e){const o=e?this.get(e):this;return o&&o.errors?o.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(U)?U:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){z(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class B extends Q{constructor(t=null,e,o){super($(e),J(o,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){k(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){k(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class X extends Q{constructor(t,e,o){super($(e),J(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,o={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(o=>{this._throwIfControlMissing(o),this.controls[o].setValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(o=>{this.controls[o]&&this.controls[o].patchValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,o)=>(t[o]=e instanceof B?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,o)=>!!o._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const o=this.controls[e];o&&t(o,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const o=this.controls[e];if(this.contains(e)&&t(o))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(t,e){let o=t;return this._forEachChild((i,s)=>{o=e(o,i,s)}),o}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,o)=>{if(void 0===t[o])throw new Error(`Must supply a value for form control with name: '${o}'.`)})}}class xt extends Q{constructor(t,e,o){super($(e),J(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,o={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((o,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof B?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,o)=>!!o._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,o)=>{t(e,o)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,o)=>{if(void 0===t[o])throw new Error(`Must supply a value for form control at index: ${o}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Gt={provide:u,useExisting:(0,r.Gpc)(()=>q)},D=(()=>Promise.resolve(null))();let q=(()=>{class n extends u{constructor(e,o){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.vpe,this.form=new X({},Z(e),I(o))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){D.then(()=>{const o=this._findContainer(e.path);e.control=o.registerControl(e.name,e.control),A(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){D.then(()=>{const o=this._findContainer(e.path);o&&o.removeControl(e.name),k(this._directives,e)})}addFormGroup(e){D.then(()=>{const o=this._findContainer(e.path),i=new X({});(function(n,t){L(n,t)})(i,e),o.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){D.then(()=>{const o=this._findContainer(e.path);o&&o.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,o){D.then(()=>{this.form.get(e.path).setValue(o)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function(n,t){n._syncPendingControls(),t.forEach(e=>{const o=e.control;"submit"===o.updateOn&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(l,10),r.Y36(p,10))},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,o){1&e&&r.NdJ("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([Gt]),r.qOj]}),n})();const kt={provide:_,useExisting:(0,r.Gpc)(()=>K)},$e=(()=>Promise.resolve(null))();let K=(()=>{class n extends _{constructor(e,o,i,s){super(),this.control=new B,this._registered=!1,this.update=new r.vpe,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=function(n,t){if(!t)return null;let e,o,i;return Array.isArray(t),t.forEach(s=>{s.constructor===N?e=s:function(n){return Object.getPrototypeOf(n.constructor)===y}(s)?o=s:i=s}),i||o||e||null}(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),function(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,t){return[...t.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){A(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){$e.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const o=e.isDisabled.currentValue,i=""===o||o&&"false"!==o;$e.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(u,9),r.Y36(l,10),r.Y36(p,10),r.Y36(h,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([kt]),r.qOj,r.TTD]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Qe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();function it(n){return"number"==typeof n?n:parseInt(n,10)}const Kt={provide:l,useExisting:(0,r.Gpc)(()=>P),multi:!0};let P=(()=>{class n{constructor(){this._required=!1}get required(){return this._required}set required(e){this._required=null!=e&&!1!==e&&"false"!=`${e}`,this._onChange&&this._onChange()}validate(e){return this.required?function(n){return g(n.value)?{required:!0}:null}(e):null}registerOnValidatorChange(e){this._onChange=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,o){2&e&&r.uIk("required",o.required?"":null)},inputs:{required:"required"},features:[r._Bn([Kt])]}),n})();const tn={provide:l,useExisting:(0,r.Gpc)(()=>se),multi:!0};let se=(()=>{class n{constructor(){this._enabled=!1}set email(e){this._enabled=""===e||!0===e||"true"===e,this._onChange&&this._onChange()}validate(e){return this._enabled?function(n){return g(n.value)||vt.test(n.value)?null:{email:!0}}(e):null}registerOnValidatorChange(e){this._onChange=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[r._Bn([tn])]}),n})();const nn={provide:l,useExisting:(0,r.Gpc)(()=>ae),multi:!0};let ae=(()=>{class n{constructor(){this._validator=m}ngOnChanges(e){"minlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this.enabled()?this._validator(e):null}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=this.enabled()?function(n){return t=>g(t.value)||!me(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(it(this.minlength)):m}enabled(){return null!=this.minlength}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(e,o){2&e&&r.uIk("minlength",o.enabled()?o.minlength:null)},inputs:{minlength:"minlength"},features:[r._Bn([nn]),r.TTD]}),n})();const rn={provide:l,useExisting:(0,r.Gpc)(()=>le),multi:!0};let le=(()=>{class n{constructor(){this._validator=m}ngOnChanges(e){"maxlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this.enabled()?this._validator(e):null}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=this.enabled()?function(n){return t=>me(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(it(this.maxlength)):m}enabled(){return null!=this.maxlength}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(e,o){2&e&&r.uIk("maxlength",o.enabled()?o.maxlength:null)},inputs:{maxlength:"maxlength"},features:[r._Bn([rn]),r.TTD]}),n})();const on={provide:l,useExisting:(0,r.Gpc)(()=>ue),multi:!0};let ue=(()=>{class n{constructor(){this._validator=m}ngOnChanges(e){"pattern"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=function(n){if(!n)return m;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),o=>{if(g(o.value))return null;const i=o.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(this.pattern)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,o){2&e&&r.uIk("pattern",o.pattern?o.pattern:null)},inputs:{pattern:"pattern"},features:[r._Bn([on]),r.TTD]}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[Qe]]}),n})(),sn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[dt]}),n})();var ct=c(353);function an(n,t){1&n&&(r.TgZ(0,"div",41),r._uU(1," Please provide a valid first name. "),r.qZA())}function ln(n,t){1&n&&(r.TgZ(0,"div",41),r._uU(1," Please provide a valid last name. "),r.qZA())}function un(n,t){1&n&&(r.TgZ(0,"div",41),r._uU(1," Please provide a valid email address. "),r.qZA())}function dn(n,t){1&n&&(r.TgZ(0,"div",41),r._uU(1," Please provide a valid phone. "),r.qZA())}function cn(n,t){1&n&&(r.TgZ(0,"div",41),r._uU(1," Please provide a valid details. "),r.qZA())}const hn=[{path:"",component:(()=>{class n{constructor(){this.firstName="",this.lastName="",this.emailAddress="",this.phone="",this.details=""}ngOnInit(){}sendMail(e){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-contact-us"]],decls:94,vars:10,consts:[[1,"text-center","mb-3"],[1,"row"],[1,"col-md-6","col-12","mb-3"],[1,"card","h-100"],[1,"card-body"],[1,"text-center"],[1,"color-gray","text-center","mb-4"],[3,"ngSubmit"],["contactForm","ngForm"],["for","txtFirstName",1,"form-label","required"],["type","text","id","txtFirstName","placeholder","First Name","required","","maxlength","50","name","txtFirstName",1,"form-control",3,"ngModel","ngModelChange"],["txtFirstName","ngModel"],["class","invalid-error",4,"ngIf"],["for","txtLastName",1,"form-label","required"],["type","text","id","txtLastName","placeholder","Last Name","required","","maxlength","50","name","txtLastName",1,"form-control",3,"ngModel","ngModelChange"],["txtLastName","ngModel"],["for","txtEmailAddress",1,"form-label","required"],["type","email","id","txtEmailAddress","placeholder","Email address","required","","maxlength","50","name","txtEmailAddress","email","",1,"form-control",3,"ngModel","ngModelChange"],["txtEmailAddress","ngModel"],["for","txtPhone",1,"form-label","required"],["type","phone","id","txtPhone","placeholder","Phone (With country code)","required","","maxlength","20","name","txtPhone","pattern","[1-9 +]*",1,"form-control",3,"ngModel","ngModelChange"],["txtPhone","ngModel"],[1,"col-12","mb-3"],["for","txtDetails",1,"form-label","required"],["type","text","id","txtDetails","rows","4","placeholder","Tell us about your idea...","name","txtDetails","required","","minlength","50","maxlength","1000",1,"form-control",3,"ngModel","ngModelChange"],["txtDetails","ngModel"],["type","submit",1,"btn","btn-primary","btn-lg","w-100"],[1,"col-12","mb-3","color-gray","text-center"],[1,"mb-1"],[1,"bi","bi-envelope-fill","prx-10"],[1,"color-gray"],["href","mailto:ditya.technolabs@gmail.com"],[1,"bi","bi-telephone-fill","prx-10"],["href","tel:+919558433644"],[1,"bi","bi-globe","prx-10"],["href","https://ditya-technolabs.github.io","target","_blank"],[1,"bi","bi-linkedin","prx-10"],["href","https://www.linkedin.com/company/ditya-technolabs","target","_blank"],[1,"bi","bi-github","prx-10"],["href","https://github.com/Ditya-Technolabs","target","_blank"],[1,"bi","bi-geo-alt-fill","prx-10"],[1,"invalid-error"]],template:function(e,o){if(1&e){const i=r.EpF();r.TgZ(0,"h1",0),r._uU(1,"Get in touch with us"),r.qZA(),r.TgZ(2,"div",1),r.TgZ(3,"div",2),r.TgZ(4,"div",3),r.TgZ(5,"div",4),r.TgZ(6,"h2",5),r._uU(7,"Tell us about your idea"),r.qZA(),r.TgZ(8,"div",6),r._uU(9," Whether you have idea or you would just like to say hello, contact us. "),r.qZA(),r.TgZ(10,"form",7,8),r.NdJ("ngSubmit",function(){r.CHM(i);const a=r.MAs(11);return o.sendMail(a)}),r.TgZ(12,"div",1),r.TgZ(13,"div",2),r.TgZ(14,"label",9),r._uU(15,"First name"),r.qZA(),r.TgZ(16,"input",10,11),r.NdJ("ngModelChange",function(a){return o.firstName=a}),r.qZA(),r.YNc(18,an,2,0,"div",12),r.qZA(),r.TgZ(19,"div",2),r.TgZ(20,"label",13),r._uU(21,"Last name"),r.qZA(),r.TgZ(22,"input",14,15),r.NdJ("ngModelChange",function(a){return o.lastName=a}),r.qZA(),r.YNc(24,ln,2,0,"div",12),r.qZA(),r.TgZ(25,"div",2),r.TgZ(26,"label",16),r._uU(27,"Email address"),r.qZA(),r.TgZ(28,"input",17,18),r.NdJ("ngModelChange",function(a){return o.emailAddress=a}),r.qZA(),r.YNc(30,un,2,0,"div",12),r.qZA(),r.TgZ(31,"div",2),r.TgZ(32,"label",19),r._uU(33,"Phone (With country code)"),r.qZA(),r.TgZ(34,"input",20,21),r.NdJ("ngModelChange",function(a){return o.phone=a}),r.qZA(),r.YNc(36,dn,2,0,"div",12),r.qZA(),r.TgZ(37,"div",22),r.TgZ(38,"label",23),r._uU(39,"Details"),r.qZA(),r.TgZ(40,"textarea",24,25),r.NdJ("ngModelChange",function(a){return o.details=a}),r.qZA(),r.YNc(42,cn,2,0,"div",12),r.qZA(),r.TgZ(43,"div",22),r.TgZ(44,"button",26),r._uU(45,"Send"),r.qZA(),r.qZA(),r.TgZ(46,"div",27),r._uU(47," We'll get back to you in 1-2 business days. "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(48,"div",2),r.TgZ(49,"div",3),r.TgZ(50,"div",4),r.TgZ(51,"h2",5),r._uU(52,"Contact Details"),r.qZA(),r.TgZ(53,"div",6),r._uU(54," Want to get in touch with us? We're here. "),r.qZA(),r.TgZ(55,"h5",28),r._UZ(56,"i",29),r._uU(57,"Email:"),r.qZA(),r.TgZ(58,"p",30),r.TgZ(59,"a",31),r._uU(60,"ditya.technolabs@gmail.com"),r.qZA(),r.qZA(),r.TgZ(61,"h5",28),r._UZ(62,"i",32),r._uU(63,"Phone:"),r.qZA(),r.TgZ(64,"p",30),r.TgZ(65,"a",33),r._uU(66,"+91 9558433644"),r.qZA(),r.qZA(),r.TgZ(67,"h5",28),r._UZ(68,"i",34),r._uU(69,"Website:"),r.qZA(),r.TgZ(70,"p",30),r.TgZ(71,"a",35),r._uU(72,"https://ditya-technolabs.github.io"),r.qZA(),r.qZA(),r.TgZ(73,"h5",28),r._UZ(74,"i",36),r._uU(75,"Linkedin:"),r.qZA(),r.TgZ(76,"p",30),r.TgZ(77,"a",37),r._uU(78,"https://www.linkedin.com/company/ditya-technolabs"),r.qZA(),r.qZA(),r.TgZ(79,"h5",28),r._UZ(80,"i",38),r._uU(81,"Github:"),r.qZA(),r.TgZ(82,"p",30),r.TgZ(83,"a",39),r._uU(84,"https://github.com/Ditya-Technolabs"),r.qZA(),r.qZA(),r.TgZ(85,"h5",28),r._UZ(86,"i",40),r._uU(87,"Address:"),r.qZA(),r.TgZ(88,"p",30),r._uU(89,"B-8 Pulin Society Part-1"),r._UZ(90,"br"),r._uU(91,"Payal nagar road, Naroda,"),r._UZ(92,"br"),r._uU(93,"Ahmedabad-382330, Gujarat, India."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&e){const i=r.MAs(11),s=r.MAs(17),a=r.MAs(23),d=r.MAs(29),f=r.MAs(35),v=r.MAs(41);r.xp6(16),r.Q6J("ngModel",o.firstName),r.xp6(2),r.Q6J("ngIf",s.invalid&&(s.dirty||s.touched||i.submitted)),r.xp6(4),r.Q6J("ngModel",o.lastName),r.xp6(2),r.Q6J("ngIf",a.invalid&&(a.dirty||a.touched||i.submitted)),r.xp6(4),r.Q6J("ngModel",o.emailAddress),r.xp6(2),r.Q6J("ngIf",d.invalid&&(d.dirty||d.touched||i.submitted)),r.xp6(4),r.Q6J("ngModel",o.phone),r.xp6(2),r.Q6J("ngIf",f.invalid&&(f.dirty||f.touched||i.submitted)),r.xp6(4),r.Q6J("ngModel",o.details),r.xp6(2),r.Q6J("ngIf",v.invalid&&(v.dirty||v.touched||i.submitted))}},directives:[Je,Ze,q,N,P,le,Pe,K,E.O5,se,ue,ae],styles:[""]}),n})()}];let fn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[ct.Bz.forChild(hn)],ct.Bz]}),n})(),gn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[E.ez,sn,fn]]}),n})()}}]);