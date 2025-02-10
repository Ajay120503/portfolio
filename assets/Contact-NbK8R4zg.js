import{f,l as j,o as b,z as y,j as e,h as C,g as S,r as B,B as u}from"./index-FN-edXes.js";import{B as T}from"./BackButton-rrGTe4KM.js";import{u as k,a as v,F as m,b as c,I as g}from"./use-toast-jLAUPQ1e.js";import{H as w}from"./heading-BFot-28m.js";import{V as F}from"./v-stack-BexzJapj.js";import{T as d}from"./text-BbK9djnT.js";import{B as M}from"./button-BXT6hvPs.js";import"./create-icon-DI2ft4ks.js";import"./call-all-CIg7T-gG.js";const N=["h","minH","height","minHeight"],x=f((s,o)=>{const a=j("Textarea",s),{className:r,rows:i,...n}=b(s),t=k(n),l=i?y(a,N):a;return e.jsx(C.textarea,{ref:o,rows:i,...t,className:S("chakra-textarea",r),__css:l})});x.displayName="Textarea";function V(){const[s,o]=B.useState({name:"",email:"",message:""}),a=v(),r=t=>{const{name:l,value:p}=t.target;o(h=>({...h,[l]:p}))},i=()=>s.name?s.email?s.message?!0:(a({description:"Message is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1):(a({description:"Email is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1):(a({description:"Name is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1),n=t=>{t.preventDefault(),i()&&(a({title:"Message sent!",description:"We will get back to you soon.",status:"success",duration:3e3,isClosable:!1,position:"top-right"}),o({name:"",email:"",message:""}))};return e.jsxs(u,{maxW:{base:"90%",sm:"80%",md:"600px"},mx:"auto",p:6,mt:20,borderRadius:"0px",boxShadow:"dark-lg",bg:"gray.700",color:"white",children:[e.jsx(w,{as:"h2",size:"lg",textAlign:"center",mb:6,children:"Contact Me"}),e.jsx("form",{onSubmit:n,children:e.jsxs(F,{spacing:4,children:[e.jsxs(m,{children:[e.jsxs(c,{children:["Name ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(g,{name:"name",placeholder:"Your name",value:s.name,onChange:r,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsxs(m,{children:[e.jsxs(c,{children:["Email ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(g,{name:"email",type:"email",placeholder:"Your email",value:s.email,onChange:r,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsxs(m,{children:[e.jsxs(c,{children:["Message ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(x,{name:"message",placeholder:"Your message",value:s.message,onChange:r,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsx(M,{colorScheme:"teal",type:"submit",width:"full",children:"Send Message"})]})}),e.jsx(u,{children:e.jsx(T,{})})]})}export{V as default};
