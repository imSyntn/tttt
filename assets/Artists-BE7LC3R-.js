import{j as r,a as h}from"./index-ovBpk-RT.js";const y=({data:s,audioSet:e})=>{var l,n,i,c,m,u,g,p,o,x;return r.jsxs("div",{className:"img-albumDetails",children:[(((n=(l=s.image)==null?void 0:l[2])==null?void 0:n.url)||((c=(i=s.image)==null?void 0:i[1])==null?void 0:c.url)||((u=(m=s.image)==null?void 0:m[0])==null?void 0:u.url))&&r.jsxs(r.Fragment,{children:[r.jsx("img",{src:((p=(g=s.image)==null?void 0:g[2])==null?void 0:p.url)||s.image[1].url||s.image[0].url||"../../music.png",alt:s.name||"Album cover"}),r.jsx("img",{className:"wrapper",src:((x=(o=s.image)==null?void 0:o[2])==null?void 0:x.url)||"../../music.png",alt:"img wrapper"})]}),r.jsxs("div",{className:"albumDetails",children:[r.jsx("h1",{children:s.name}),r.jsx("p",{children:s.description||s.copyright}),r.jsxs("p",{children:[s.label," ",s.year]}),r.jsx("p",{children:s.playCount?`${s.playCount}  plays`:""}),r.jsx("p",{children:s.songCount?`${s.songCount}  Songs`:""}),r.jsx("button",{onClick:()=>e(),children:"Play"})]})]})},C=({data:s})=>{var e,l,n;return r.jsx("div",{className:"artists",children:(e=s==null?void 0:s.artists)!=null&&e.primary?s.artists.primary.map(i=>r.jsx(j,{item:i},i.id)):(n=(l=s==null?void 0:s.artists)==null?void 0:l.filter((i,c,m)=>c===m.findIndex(u=>u.id===i.id)))==null?void 0:n.map(i=>r.jsx(j,{item:i},i.id))})},j=({item:s})=>{var l,n;const e=h();return r.jsxs("div",{className:"artistCont",onClick:()=>e(`/artist/${s.id}`),children:[r.jsx("img",{src:((n=(l=s==null?void 0:s.image)==null?void 0:l[1])==null?void 0:n.url)||"../../music.png",alt:""}),r.jsx("p",{children:s.name})]})};export{C as A,y as I};