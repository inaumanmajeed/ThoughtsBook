"use strict";(self.webpackChunkThoughtsBook=self.webpackChunkThoughtsBook||[]).push([[436],{5176:(e,t,i)=>{i.d(t,{A:()=>l});i(5043);var r=i(2773),n=i(579);const l=e=>{let{title:t="submit",onClick:i,type:l="button",disabled:s=!1,className:o,BtnCenter:a=!1,width:d,...c}=e;return(0,n.jsx)(r.QE,{BtnCenter:a,children:(0,n.jsx)(r.ib,{width:d,onClick:i,type:l,disabled:s,className:o,...c,children:t})})}},531:(e,t,i)=>{i.d(t,{A:()=>l});i(5043);var r=i(2773),n=i(579);const l=e=>{let{field:t,form:i,isEditable:l=!1,type:s="text",label:o,placeholder:a,width:d,noMargin:c,...h}=e;const p=i&&i.errors&&i.errors[t.name],x=i&&i.touched&&i.touched[t.name];return(0,n.jsxs)(r.Sz,{noMargin:!0,width:d,children:[o&&(0,n.jsx)("label",{children:o}),(0,n.jsx)("input",{disabled:l,...t,type:s,placeholder:a,...h}),p&&x&&(0,n.jsx)("div",{className:"error",children:p})]})}},2773:(e,t,i)=>{i.d(t,{QE:()=>o,Sz:()=>l,ib:()=>s});var r=i(2968),n=i(8998);const l=(0,n.Ay)("div")((e=>{let{width:t,theme:i,noMargin:r}=e;return{display:"flex",flexDirection:"column",gap:"8px",width:t||"100%",position:"relative",marginBottom:"12px","& label":{fontSize:"14px",fontWeight:"400",color:"#fff"},"& input":{padding:"8px 35px 8px 8px",fontSize:"1rem",backgroundColor:"#eeeeee",border:"1px solid transparent",outline:"none",marginBottom:"6px","&::placeholder":{color:"#6C757D80",fontSize:"12px"}},"& .error":{fontSize:"11px",color:"#fff",fontWeight:"400",position:"absolute",bottom:"-12px",zIndex:"1"}}})),s=(0,n.Ay)(r.A)((e=>{let{theme:t,width:i}=e;return{height:"28px",minWidth:"120px",padding:"8px",borderRadius:"4px",backgroundColor:"#fbfbfb66",color:"#fff",width:i||"100%",fontWeight:"500",backdropFilter:"blur(10px)","&:hover":{backgroundColor:"#fbfbfb66"}}})),o=(0,n.Ay)("div")((e=>{let{theme:t,BtnCenter:i}=e;return{display:i?"flex":"block",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"16px"}}));(0,n.Ay)("div")((e=>{let{theme:t}=e;return{fontSize:"11px",color:"#DDDDDDDD",fontWeight:"500",textAlign:"center",marginTop:"8px"}})),(0,n.Ay)("div")((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"center",alignItems:"center",width:"100%","& img":{width:"35px"}}}))},3436:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(5043),n=i(3892),l=i(3216),s=i(8996),o=i(1036),a=i(4294),d=i(4918),c=i(5176),h=i(531),p=i(579);const x=()=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(n.D0,{type:"email",name:"email",placeholder:"Email",component:h.A})});var m=i(1470);const u={email:""},g=()=>{const[e,t]=(0,r.useState)(!1),i=(0,l.Zp)();return(0,p.jsx)(a.A,{reset:!0,title:"Forget Password",children:(0,p.jsx)(n.l1,{initialValues:u,onSubmit:async(e,r)=>{let{setSubmitting:n}=r;const{email:l}=e;console.log("\ud83d\ude80 ~ onSubmit ~ email:",l);try{await(0,s.J1)(m.a,l),console.log("Password reset email sent successfully"),t(!0),o.oR.success("Password reset email sent successfully. Please check your inbox."),i("/")}catch(a){console.error("Error sending password reset email:",a),o.oR.error("Error sending password reset email. Please try again.")}finally{n(!1)}},validationSchema:d.R,children:t=>{let{isSubmitting:i}=t;return(0,p.jsxs)(n.lV,{className:"form__main",children:[(0,p.jsx)(x,{}),(0,p.jsx)(c.A,{title:e?"Email Sent":"Reset",type:"submit",BtnCenter:!0,disabled:e||i})]})}})})}},4294:(e,t,i)=>{i.d(t,{A:()=>h});i(5043);var r=i(8998);const n=(0,r.Ay)("div")((e=>{let{theme:t}=e;return{width:"100vw",height:"100dvh",display:"flex",justifyContent:"center",alignItems:"center","& .form__main":{width:"100%"}}})),l=(0,r.Ay)("div")((e=>{let{theme:t}=e;return{width:"calc(40% - 40px)",display:"flex",justifyContent:"space-between",alignItems:"center",height:"calc(80% - 40px)",padding:"20px",borderRadius:"10px",background:"rgb(255 255 255 / 11%)",backdropFilter:"blur(10px)",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",[t.breakpoints.down("md")]:{width:"calc(100% - 40px)"}}})),s=(0,r.Ay)("div")((e=>{let{theme:t}=e;return{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})),o=(0,r.Ay)("div")((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"90%",borderRadius:"10px",padding:"20px",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",[t.breakpoints.down("md")]:{width:"100%"},"& .children__input":{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:"100%",height:"100%","& h1":{color:"#fff",fontSize:"2rem",fontWeight:"600",width:"100%",textAlign:"center"}}}})),a=(0,r.Ay)("div")((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:t.spacing(2),fontSize:"0.775rem",width:"100%",padding:"0 0.5rem","& span":{color:"#fff",textDecoration:"none",cursor:"pointer","&:last-child":{textAlign:"right"},"&:hover":{textDecoration:"underline"}}}}));var d=i(3216),c=i(579);const h=e=>{let{children:t,title:i,login:r,register:h,reset:p}=e;const x=(0,d.Zp)();return(0,c.jsx)(n,{children:(0,c.jsx)(l,{children:(0,c.jsx)(s,{children:(0,c.jsxs)(o,{children:[(0,c.jsxs)("div",{className:"children__input",children:[(0,c.jsx)("h1",{children:i}),t]}),r&&(0,c.jsxs)(a,{children:[(0,c.jsx)("span",{onClick:()=>x("/reset"),children:"Having Trouble?"}),(0,c.jsx)("span",{onClick:()=>x("/register"),children:"Register"})]}),h&&(0,c.jsxs)(a,{children:[(0,c.jsx)("span",{onClick:()=>x("/reset"),children:"Having Trouble?"}),(0,c.jsx)("span",{onClick:()=>x("/"),children:"Login"})]}),p&&(0,c.jsxs)(a,{children:[(0,c.jsx)("span",{onClick:()=>x("/"),children:"Login"}),(0,c.jsx)("span",{onClick:()=>x("/register"),children:"Register"})]})]})})})})}},4918:(e,t,i)=>{i.d(t,{R:()=>l,d:()=>n});var r=i(899);const n=r.Ik().shape({email:r.Yj().email("Invalid email address").required("Required"),password:r.Yj().min(6,"At least 6 characters").required("Required")}),l=r.Ik().shape({email:r.Yj().email("Invalid email address").required("Required")})}}]);
//# sourceMappingURL=436.40c5d8f4.chunk.js.map