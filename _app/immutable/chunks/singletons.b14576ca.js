import{w as c}from"./index.e351a105.js";var _;const b=((_=globalThis.__sveltekit_dq6y0n)==null?void 0:_.base)??"/calendar";var g;const v=((g=globalThis.__sveltekit_dq6y0n)==null?void 0:g.assets)??b,k="1683800723044",E="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:o,download:r}}function O(e){let t=null,n=null,o=null,l=null,r=null,s=null,a=e;for(;a&&a!==document.documentElement;)o===null&&(o=i(a,"preload-code")),l===null&&(l=i(a,"preload-data")),t===null&&(t=i(a,"keepfocus")),n===null&&(n=i(a,"noscroll")),r===null&&(r=i(a,"reload")),s===null&&(s=i(a,"replacestate")),a=h(a);return{preload_code:d[o??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:s==="off"?!1:s===""?!0:null}}function p(e){const t=c(e);let n=!0;function o(){n=!0,t.update(s=>s)}function l(s){n=!1,t.set(s)}function r(s){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&s(a=u)})}return{notify:o,set:l,subscribe:r}}function m(){const{set:e,subscribe:t}=c(!1);let n;async function o(){clearTimeout(n);try{const l=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const s=(await l.json()).version!==k;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:o}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:c(null),updated:m()};export{R as I,f as P,A as S,E as a,x as b,O as c,T as d,b as e,I as f,S as g,U as h,w as i,L as s};
