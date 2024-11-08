import{f as b,l as j,o as y,z as C,j as e,h as v,g as S,r as k,y as w,B as T,I as F}from"./index-DwLm2Kio.js";import{u as N,a as B,F as m,b as c,I as g}from"./use-toast-CcEoTyf-.js";import{H as I,B as u}from"./heading-EmnvT6Sp.js";import{V as M}from"./v-stack-DNrm4xDg.js";import{T as d}from"./text-XVgsmXrw.js";import"./call-all-CIg7T-gG.js";const E=["h","minH","height","minHeight"],h=b((a,o)=>{const s=j("Textarea",a),{className:i,rows:t,...n}=y(a),l=N(n),r=t?C(s,E):s;return e.jsx(v.textarea,{ref:o,rows:t,...l,className:S("chakra-textarea",i),__css:r})});h.displayName="Textarea";function z(){const[a,o]=k.useState({name:"",email:"",message:""}),s=B(),i=w(),t=r=>{const{name:x,value:p}=r.target;o(f=>({...f,[x]:p}))},n=()=>a.name?a.email?a.message?!0:(s({description:"Message is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1):(s({description:"Email is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1):(s({description:"Name is required.",status:"error",duration:3e3,isClosable:!1,position:"top-right"}),!1),l=r=>{r.preventDefault(),n()&&(s({title:"Message sent!",description:"We will get back to you soon.",status:"success",duration:3e3,isClosable:!1,position:"top-right"}),o({name:"",email:"",message:""}))};return e.jsxs(T,{maxW:{base:"90%",sm:"80%",md:"600px"},mx:"auto",p:6,mt:20,borderRadius:"0px",boxShadow:"dark-lg",bg:"gray.700",color:"white",children:[e.jsx(I,{as:"h2",size:"lg",textAlign:"center",mb:6,children:"Contact Me"}),e.jsx("form",{onSubmit:l,children:e.jsxs(M,{spacing:4,children:[e.jsxs(m,{children:[e.jsxs(c,{children:["Name ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(g,{name:"name",placeholder:"Your name",value:a.name,onChange:t,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsxs(m,{children:[e.jsxs(c,{children:["Email ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(g,{name:"email",type:"email",placeholder:"Your email",value:a.email,onChange:t,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsxs(m,{children:[e.jsxs(c,{children:["Message ",e.jsx(d,{as:"span",color:"orange",children:"*"})]}),e.jsx(h,{name:"message",placeholder:"Your message",value:a.message,onChange:t,bg:"gray.700",style:{border:"1px solid gray"}})]}),e.jsx(u,{colorScheme:"teal",type:"submit",width:"full",children:"Send Message"})]})}),e.jsx(u,{onClick:()=>i(-1),colorScheme:"teal",variant:"outline",leftIcon:e.jsx(F,{name:"arrow-back"}),mt:5,_hover:{bg:"teal.900"},children:"Back"})]})}export{z as default};
