import{G as L,r as n,j as s,u as k,s as E,L as T}from"./index-ovBpk-RT.js";import{u as y,S as P}from"./SongCard-ORRAww1V.js";import{A as I}from"./AlbumThumbnail-DAWuM9Y4.js";function $(t){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z"},child:[]}]})(t)}const U=({type:t,id:d,childToParentDataSend:A,childData:m,setTracks:i,tracks:u})=>{const[l,x]=n.useState(0),D=`/api/artists/${d}/${t}?page=${l}`,{loading:h,error:g,data:e}=y(D),[a,j]=n.useState([]);return n.useEffect(()=>{e&&Array.isArray(e[t])&&j(r=>{let o,c=e[t];return r.length==0?o=[...c]:o=[...r,...c],o})},[e]),n.useEffect(()=>{j([]),x(0)},[t,d]),n.useEffect(()=>{if(console.log("totalData",a),e&&Array.isArray(e[t])&&t=="songs"){if(m.length==0)A(a);else if(u.length!=0){let r=e[t];const c=[...u,...r].filter((f,b,C)=>b===C.findIndex(p=>p.id===f.id));i(c)}}},[a]),s.jsxs("div",{className:"DynamicContent",children:[s.jsx("h2",{children:t.charAt(0).toUpperCase()+t.slice(1)}),s.jsx("div",{className:t=="albums"?"albumCont":"",children:a==null?void 0:a.map(r=>t==="songs"?s.jsx(P,{result:r},r.id):s.jsx(I,{result:r},r.id))}),!h&&!g&&s.jsx("div",{className:"load",children:s.jsx("button",{onClick:()=>x(r=>r+1),children:"Load more"})})]})},V=()=>{var r,o,c,f,b,C,p,N,S,v;const{id:t}=k(),d=n.useContext(E);if(!d)return null;const{tracks:A,setTracks:m}=d;if(!t)return null;const[i,u]=n.useState("songs"),[l,x]=n.useState([]),D=`/api/artists?id=${t}`,{loading:h,error:g,data:e}=y(D);if(h)return s.jsx(T,{});if(g)return s.jsx("p",{className:"Loading-Error",children:"Error in loading."});const a=()=>{!h&&!g&&Array.isArray(l)&&l.length==10&&m(l)},j=w=>{x(w)};return s.jsx("div",{className:"ArtistQuerryPage",children:!h&&!g&&e&&!Array.isArray(e)&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"imgText",children:[s.jsx("img",{src:((o=(r=e.image)==null?void 0:r[2])==null?void 0:o.url)||((f=(c=e.image)==null?void 0:c[1])==null?void 0:f.url)||((C=(b=e.image)==null?void 0:b[0])==null?void 0:C.url)||"../../../music.png",alt:""}),s.jsx("img",{className:"wrapper",src:((N=(p=e.image)==null?void 0:p[2])==null?void 0:N.url)||"../../../music.png",alt:"img wrapper"}),s.jsxs("div",{className:"text",children:[s.jsxs("h1",{children:[e.name," ",e.isVerified&&s.jsx($,{})]}),s.jsxs("p",{children:[e.fanCount," Listeners"]}),s.jsx("button",{style:i!="songs"?{opacity:.2,cursor:"inherit"}:{},disabled:i!="songs"&&l.length==0,onClick:a,children:"PLay"})]})]}),s.jsx("h2",{children:"Introduction"}),s.jsx("p",{children:(v=(S=e.bio)==null?void 0:S[0])==null?void 0:v.text}),s.jsxs("div",{className:"type",children:[s.jsxs("div",{className:"contentSwitcher",children:[s.jsx("button",{onClick:()=>u("songs"),style:i==="songs"?{borderColor:"#2bc5b4"}:{borderColor:"white"},children:"Songs"}),s.jsx("button",{onClick:()=>u("albums"),style:i==="albums"?{borderColor:"#2bc5b4"}:{borderColor:"white"},children:"Albums"})]}),s.jsx("div",{className:"content",children:s.jsx(U,{type:i,id:t,childToParentDataSend:j,childData:l,setTracks:m,tracks:A})})]})]})})};export{V as default};
