const s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",t=new RegExp("(-shadowcsshost"+s,"gim"),o=new RegExp("(-shadowcsscontext"+s,"gim"),n=new RegExp("(-shadowcssslotted"+s,"gim"),e=/-shadowcsshost-no-combinator([^\s]*)/,c=[/::shadow/g,/::content/g],r=/-shadowcsshost/gim,h=/:host/gim,a=/::slotted/gim,d=/:host-context/gim,g=/\/\*\s*[\s\S]*?\*\//g,l=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,i=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,u=/([{}])/g,m=/(^.*?[^\\])??((:+)(.*)|$)/,w=(s,t)=>{const o=p(s);let n=0;return o.escapedString.replace(i,((...s)=>{const e=s[2];let c="",r=s[4],h="";r&&r.startsWith("{%BLOCK%")&&(c=o.blocks[n++],r=r.substring("%BLOCK%".length+1),h="{");const a=t({selector:e,content:c});return`${s[1]}${a.selector}${s[3]}${h}${a.content}${r}`}))},p=s=>{const t=s.split(u),o=[],n=[];let e=0,c=[];for(let r=0;r<t.length;r++){const s=t[r];"}"===s&&e--,e>0?c.push(s):(c.length>0&&(n.push(c.join("")),o.push("%BLOCK%"),c=[]),o.push(s)),"{"===s&&e++}return c.length>0&&(n.push(c.join("")),o.push("%BLOCK%")),{escapedString:o.join(""),blocks:n}},$=(s,t,o)=>s.replace(t,((...s)=>{if(s[2]){const t=s[2].split(","),n=[];for(let e=0;e<t.length;e++){const c=t[e].trim();if(!c)break;n.push(o("-shadowcsshost-no-combinator",c,s[3]))}return n.join(",")}return"-shadowcsshost-no-combinator"+s[3]})),_=(s,t,o)=>s+t.replace("-shadowcsshost","")+o,b=(s,t,o)=>t.indexOf("-shadowcsshost")>-1?_(s,t,o):s+t+o+", "+t+" "+s+o,f=(s,t)=>s.replace(m,((s,o="",n,e="",c="")=>o+t+e+c)),x=(s,t,o,n)=>w(s,(s=>{let c=s.selector,h=s.content;return"@"!==s.selector[0]?c=((s,t,o,n)=>s.split(",").map((s=>n&&s.indexOf("."+n)>-1?s.trim():((s,t)=>!(s=>(s=s.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+s+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(s))(s,t)?((s,t,o)=>{const n="."+(t=t.replace(/\[is=([^\]]*)\]/g,((s,...t)=>t[0]))),c=s=>{let c=s.trim();if(!c)return"";if(s.indexOf("-shadowcsshost-no-combinator")>-1)c=((s,t,o)=>{if(r.lastIndex=0,r.test(s)){const t=`.${o}`;return s.replace(e,((s,o)=>f(o,t))).replace(r,t+" ")}return t+" "+s})(s,t,o);else{const t=s.replace(r,"");t.length>0&&(c=f(t,n))}return c},h=(s=>{const t=[];let o,n=0;return o=(s=s.replace(/(\[[^\]]*\])/g,((s,o)=>{const e=`__ph-${n}__`;return t.push(o),n++,e}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((s,o,e)=>{const c=`__ph-${n}__`;return t.push(e),n++,o+c})),{content:o,placeholders:t}})(s);let a,d="",g=0;const l=/( |>|\+|~(?!=))\s*/g;let i=!((s=h.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(a=l.exec(s));){const t=a[1],o=s.slice(g,a.index).trim();i=i||o.indexOf("-shadowcsshost-no-combinator")>-1,d+=`${i?c(o):o} ${t} `,g=l.lastIndex}const u=s.substring(g);return i=i||u.indexOf("-shadowcsshost-no-combinator")>-1,d+=i?c(u):u,m=h.placeholders,d.replace(/__ph-(\d+)__/g,((s,t)=>m[+t]));var m})(s,t,o).trim():s.trim())).join(", "))(s.selector,t,o,n):(s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document"))&&(h=x(s.content,t,o,n)),{selector:c.replace(/\s{2,}/g," ").trim(),content:h}})),S=(s,e,r)=>{const i=e+"-h",u=e+"-s",m=s.match(l)||[];s=s.replace(g,"");const p=[];if(r){const t=s=>{const t=`/*!@___${p.length}___*/`;return p.push({placeholder:t,comment:`/*!@${s.selector}*/`}),s.selector=t+s.selector,s};s=w(s,(s=>"@"!==s.selector[0]?t(s):s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document")?(s.content=w(s.content,t),s):s))}const f=((s,e,r,g)=>{const l=((s,t)=>{const o="."+t+" > ",e=[];return s=s.replace(n,((...s)=>{if(s[2]){const t=s[2].trim(),n=o+t+s[3];let c="";for(let o=s[4]-1;o>=0;o--){const t=s[5][o];if("}"===t||","===t)break;c=t+c}const r=c+n,h=`${c.trimRight()}${n.trim()}`;return r.trim()!==h.trim()&&e.push({orgSelector:r,updatedSelector:`${h}, ${r}`}),n}return"-shadowcsshost-no-combinator"+s[3]})),{selectors:e,cssText:s}})(s=(s=>$(s,o,b))(s=(s=>$(s,t,_))(s=s.replace(d,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(a,"-shadowcssslotted"))),g);return s=(s=>c.reduce(((s,t)=>s.replace(t," ")),s))(s=l.cssText),e&&(s=x(s,e,r,g)),{cssText:(s=(s=s.replace(/-shadowcsshost-no-combinator/g,`.${r}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:l.selectors}})(s,e,i,u);return s=[f.cssText,...m].join("\n"),r&&p.forEach((({placeholder:t,comment:o})=>{s=s.replace(t,o)})),f.slottedSelectors.forEach((t=>{s=s.replace(t.orgSelector,t.updatedSelector)})),s};export{S as scopeCss}