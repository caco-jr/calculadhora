import{S as t,i as s,s as a,g as e,e as n,A as o,$ as i,d as r,h as c,c as l,a as u,B as h,b as f,f as p,k as d,K as m,n as g}from"./client.bba735c0.js";function v(t){let s,a,v,b,x,j,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),b=o(y),x=e(),j=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),v=l(t,"H1",{});var s=u(v);b=h(s,y),s.forEach(r),x=c(t),j=l(t,"DIV",{class:!0}),u(j).forEach(r),this.h()},h(){f(j,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,v,s),d(v,b),p(t,x,s),p(t,j,s),j.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(b,y),1&a&&E!==(E=t[0].html+"")&&(j.innerHTML=E)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(x),t&&r(j)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,v,a,{post:0})}}export{b as preload};
