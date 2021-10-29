import{u as n,a as e}from"./p-891c8e03.js";function t(n){const e=document.head.querySelectorAll("style");if(!Array.from(e).some((e=>e.textContent===n))){const e=document.createElement("style");e.appendChild(document.createTextNode(n)),document.head.appendChild(e)}}function i(n,e){e.forEach((e=>{n.forEach((n=>{n.classList.add(e)}))}))}function r(n,e){e&&n.forEach((n=>{n.textContent=e}))}function s(s){const{el:f,color:x,filter:p,size:h,fontSize:z,selector:g,all:d}=s;let{classes:v,styles:m}=x||p||h||z?function({color:n,filter:e,size:t,fontSize:i}){const r=["primary","success","accent","warn"],s=["xs","sm","md","lg","xl","xxl"];let o=[],a={};return r.includes(n)?o.push(`uni-color-${n}`):n&&(a.color=n,a.fill=n),r.includes(e)?o.push(`uni-filter-${e}`):e&&(a.filter=e),s.includes(t)?o.push(`uni-size-${t}`):t&&(a.height=t,a.width=t),s.includes(i)?o.push(`uni-font-size-${i}`):i&&(a.fontSize=`${i}px`),{classes:o,styles:a}}({color:x,filter:p,size:h,fontSize:z}):{classes:[],styles:{}};v=[...v,...s.classes?s.classes.split(" "):[]],x&&t(o),p&&t(a),h&&t(c),z&&t(l),s.angle&&(m=Object.assign(Object.assign({},m),function(n){let e={};const t=`rotate(${n}deg)`;return e.transform=t,e["-webkit-transform"]=t,{styles:e}}(s.angle).styles)),s.spin&&(t(u),m=Object.assign(Object.assign({},m),function({speed:n,steps:e}){let t={};const i=`uni-rotate ${n||1}s infinite ${e?"steps("+e+")":"linear"}`;return t.animation=i,t["-webkit-animation"]=i,{styles:t}}(s).styles)),n({el:f,selector:g,all:d},v,i),n({el:f,selector:g,all:d},m,e),n({el:f,selector:g,all:d},s.content,r)}const o="\n.uni-color-primary {\n  color: #3f51b5;\n  color: var(--uni-color-primary, #3f51b5);\n  fill: #3f51b5;\n  fill: var(--uni-color-primary, #3f51b5);\n}\n.uni-color-success {\n  color: #018786;\n  color: var(--uni-color-success, #018786);\n  fill: #018786;\n  fill: var(--uni-color-success, #018786);\n}\n.uni-color-accent {\n  color: #ff4081;\n  color: var(--uni-color-accent, #ff4081);\n  fill: #ff4081;\n  fill: var(--uni-color-accent, #ff4081);\n}\n.uni-color-warn {\n  color: #f44336;\n  color: var(--uni-color-warn, #f44336);\n  fill: #f44336;\n  fill: var(--uni-color-warn, #f44336);\n}",a="\n.uni-filter-primary {\n  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);\n  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));\n}\n.uni-filter-success {\n  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);\n  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));\n}\n.uni-filter-accent {\n  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);\n  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));\n}\n.uni-filter-warn {\n  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);\n  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));\n}",l="\n.uni-font-size-xs {\n  font-size: 12px;\n  font-size: var(--uni-size-xs, 12px);\n}\n.uni-font-size-sm {\n  font-size: 16px;\n  font-size: var(--uni-size-sm, 16px);\n}\n.uni-font-size-md {\n  font-size: 20px;\n  font-size: var(--uni-size-md, 20px);\n}\n.uni-font-size-lg {\n  font-size: 24x;\n  font-size: var(--uni-size-lg, 24px);\n}\n.uni-font-size-xl {\n  font-size: 35px;\n  font-size: var(--uni-size-xl, 35px);\n}\n.uni-font-size-xxl {\n  font-size: 50px;\n  font-size: var(--uni-size-xxl, 50px);\n}",u="\n@-webkit-keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}",c="\n.uni-size-xs {\n  height: 12px;\n  height: var(--uni-size-xs, 12px);\n  width: 12px;\n  width: var(--uni-size-xs, 12px);\n}\n.uni-size-sm {\n  height: 16px;\n  height: var(--uni-size-sm, 16px);\n  width: 16px;\n  width: var(--uni-size-sm, 16px);\n}\n.uni-size-md {\n  height: 20px;\n  height: var(--uni-size-md, 20px);\n  width: 20px;\n  width: var(--uni-size-md, 20px);\n}\n.uni-size-lg {\n  height: 24px;\n  height: var(--uni-size-lg, 24px);\n  width: 24px;\n  width: var(--uni-size-lg, 24px);\n}\n.uni-size-xl {\n  height: 35px;\n  height: var(--uni-size-xl, 35px);\n  width: 35px;\n  width: var(--uni-size-xl, 35px);\n}\n.uni-size-xxl {\n  height: 50px;\n  height: var(--uni-size-xxl, 50px);\n  width: 50px;\n  width: var(--uni-size-xxl, 50px);\n}";export{s as u}