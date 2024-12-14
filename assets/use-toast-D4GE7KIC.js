import{d as j,f as g,e as A,o as k,g as C,j as p,h as R,r as u,l as J,H as I,J as _,K,M as G,N as Q}from"./index-BQPgEY47.js";import{m as H,d as h,a as P}from"./heading-vT2mPAIx.js";import{c as S}from"./call-all-CIg7T-gG.js";const[U,O]=j({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[V,f]=j({strict:!1,name:"FormControlContext"});function W(a){const{id:t,isRequired:r,isInvalid:e,isDisabled:s,isReadOnly:o,...n}=a,c=u.useId(),i=t||`field-${c}`,b=`${i}-label`,d=`${i}-feedback`,F=`${i}-helptext`,[v,x]=u.useState(!1),[M,q]=u.useState(!1),[y,N]=u.useState(!1),w=u.useCallback((l={},m=null)=>({id:F,...l,ref:H(m,T=>{T&&q(!0)})}),[F]),z=u.useCallback((l={},m=null)=>({...l,ref:m,"data-focus":h(y),"data-disabled":h(s),"data-invalid":h(e),"data-readonly":h(o),id:l.id!==void 0?l.id:b,htmlFor:l.htmlFor!==void 0?l.htmlFor:i}),[i,s,y,e,o,b]),B=u.useCallback((l={},m=null)=>({id:d,...l,ref:H(m,T=>{T&&x(!0)}),"aria-live":"polite"}),[d]),$=u.useCallback((l={},m=null)=>({...l,...n,ref:m,role:"group","data-focus":h(y),"data-disabled":h(s),"data-invalid":h(e),"data-readonly":h(o)}),[n,s,y,e,o]),E=u.useCallback((l={},m=null)=>({...l,ref:m,role:"presentation","aria-hidden":!0,children:l.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!e,isReadOnly:!!o,isDisabled:!!s,isFocused:!!y,onFocus:()=>N(!0),onBlur:()=>N(!1),hasFeedbackText:v,setHasFeedbackText:x,hasHelpText:M,setHasHelpText:q,id:i,labelId:b,feedbackId:d,helpTextId:F,htmlProps:n,getHelpTextProps:w,getErrorMessageProps:B,getRootProps:$,getLabelProps:z,getRequiredIndicatorProps:E}}const X=g(function(t,r){const e=A("Form",t),s=k(t),{getRootProps:o,htmlProps:n,...c}=W(s),i=C("chakra-form-control",t.className);return p.jsx(V,{value:c,children:p.jsx(U,{value:e,children:p.jsx(R.div,{...o({},r),className:i,__css:e.container})})})});X.displayName="FormControl";const Y=g(function(t,r){const e=f(),s=O(),o=C("chakra-form__helper-text",t.className);return p.jsx(R.div,{...e==null?void 0:e.getHelpTextProps(t,r),__css:s.helperText,className:o})});Y.displayName="FormHelperText";function Z(a){const{isDisabled:t,isInvalid:r,isReadOnly:e,isRequired:s,...o}=tt(a);return{...o,disabled:t,readOnly:e,required:s,"aria-invalid":P(r),"aria-required":P(s),"aria-readonly":P(e)}}function tt(a){const t=f(),{id:r,disabled:e,readOnly:s,required:o,isRequired:n,isInvalid:c,isReadOnly:i,isDisabled:b,onFocus:d,onBlur:F,...v}=a,x=a["aria-describedby"]?[a["aria-describedby"]]:[];return t!=null&&t.hasFeedbackText&&(t!=null&&t.isInvalid)&&x.push(t.feedbackId),t!=null&&t.hasHelpText&&x.push(t.helpTextId),{...v,"aria-describedby":x.join(" ")||void 0,id:r??(t==null?void 0:t.id),isDisabled:e??b??(t==null?void 0:t.isDisabled),isReadOnly:s??i??(t==null?void 0:t.isReadOnly),isRequired:o??n??(t==null?void 0:t.isRequired),isInvalid:c??(t==null?void 0:t.isInvalid),onFocus:S(t==null?void 0:t.onFocus,d),onBlur:S(t==null?void 0:t.onBlur,F)}}const et=g(function(t,r){const e=J("FormLabel",t),s=k(t),{className:o,children:n,requiredIndicator:c=p.jsx(D,{}),optionalIndicator:i=null,...b}=s,d=f(),F=(d==null?void 0:d.getLabelProps(b,r))??{ref:r,...b};return p.jsxs(R.label,{...F,className:C("chakra-form__label",s.className),__css:{display:"block",textAlign:"start",...e},children:[n,d!=null&&d.isRequired?c:i]})});et.displayName="FormLabel";const D=g(function(t,r){const e=f(),s=O();if(!(e!=null&&e.isRequired))return null;const o=C("chakra-form__required-indicator",t.className);return p.jsx(R.span,{...e==null?void 0:e.getRequiredIndicatorProps(t,r),__css:s.requiredIndicator,className:o})});D.displayName="RequiredIndicator";const L=g(function(t,r){const{htmlSize:e,...s}=t,o=A("Input",s),n=k(s),c=Z(n),i=C("chakra-input",t.className);return p.jsx(R.input,{size:e,...c,__css:o.field,ref:r,className:i})});L.displayName="Input";L.id="Input";function st(a,t){const r=a??"bottom",s={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[r];return(s==null?void 0:s[t])??r}function ot(a,t){const r=s=>({...t,...s,position:st((s==null?void 0:s.position)??(t==null?void 0:t.position),a)}),e=s=>{const o=r(s),n=K(o);return I.notify(n,o)};return e.update=(s,o)=>{I.update(s,r(o))},e.promise=(s,o)=>{const n=e({...o.loading,status:"loading",duration:null});s.then(c=>e.update(n,{status:"success",duration:5e3,..._(o.success,c)})).catch(c=>e.update(n,{status:"error",duration:5e3,..._(o.error,c)}))},e.closeAll=I.closeAll,e.close=I.close,e.isActive=I.isActive,e}function it(a){const{theme:t}=G(),r=Q();return u.useMemo(()=>ot(t.direction,{...r,...a}),[a,t.direction,r])}export{X as F,L as I,it as a,et as b,Z as u};
