import{S as Q,i as W,s as X,k as h,y as Y,l as g,m as $,z as Z,h as c,b as P,A as tt,g as z,d as B,B as et,q as d,a as E,e as U,r as _,c as I,n as b,C as r,D as at,w as nt,E as st,F as lt,G as rt,H as ot,I as it}from"../chunks/index.dc607d88.js";import{C as ft}from"../chunks/Container.3ff5fd01.js";const ut=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ut},Symbol.toStringTag,{value:"Module"}));function J(u){let t,a,l,s,e,n,i,f,o,p,k,x,F,O,T,A,v,C,K=" ",D,H,y,N,q;return{c(){t=h("div"),a=h("h2"),l=d("Denna sajt är till för att enkelt kunna se helgdagar och veckonummer."),s=E(),e=h("p"),n=d("Kalenderdatan tillhandahålls av "),i=h("a"),f=d("Faboul"),o=d("."),p=E(),k=h("p"),x=d("Inga kakor används på sajten."),F=E(),O=h("p"),T=d("Innehållet kan vara felaktigt. Inget ansvar tas kring innehållet."),A=E(),v=h("p"),C=d("Sidan är byggd av mig"),D=d(K),H=E(),y=h("a"),N=d("Patrik Hultgren"),q=d("."),this.h()},l(S){t=g(S,"DIV",{id:!0,class:!0});var m=$(t);a=g(m,"H2",{class:!0});var V=$(a);l=_(V,"Denna sajt är till för att enkelt kunna se helgdagar och veckonummer."),V.forEach(c),s=I(m),e=g(m,"P",{});var w=$(e);n=_(w,"Kalenderdatan tillhandahålls av "),i=g(w,"A",{class:!0,href:!0});var G=$(i);f=_(G,"Faboul"),G.forEach(c),o=_(w,"."),w.forEach(c),p=I(m),k=g(m,"P",{});var L=$(k);x=_(L,"Inga kakor används på sajten."),L.forEach(c),F=I(m),O=g(m,"P",{});var M=$(O);T=_(M,"Innehållet kan vara felaktigt. Inget ansvar tas kring innehållet."),M.forEach(c),A=I(m),v=g(m,"P",{});var j=$(v);C=_(j,"Sidan är byggd av mig"),D=_(j,K),H=I(j),y=g(j,"A",{class:!0,href:!0});var R=$(y);N=_(R,"Patrik Hultgren"),R.forEach(c),q=_(j,"."),j.forEach(c),m.forEach(c),this.h()},h(){b(a,"class","text-lg"),b(i,"class","underline"),b(i,"href","https://sholiday.faboul.se/"),b(y,"class","underline"),b(y,"href","mailto:patrik.hult@gmail.com"),b(t,"id","footer-info"),b(t,"class","px-4 [&>p]:mt-4 first:[&>p]:mt-0 mt-8 mx-auto max-w-[600px]")},m(S,m){P(S,t,m),r(t,a),r(a,l),r(t,s),r(t,e),r(e,n),r(e,i),r(i,f),r(e,o),r(t,p),r(t,k),r(k,x),r(t,F),r(t,O),r(O,T),r(t,A),r(t,v),r(v,C),r(v,D),r(v,H),r(v,y),r(y,N),r(v,q),u[3](t)},p:st,d(S){S&&c(t),u[3](null)}}}function ct(u){let t,a,l,s,e,n,i,f=u[1]&&J(u);return{c(){t=h("button"),a=h("span"),l=d("Om sajten"),s=E(),f&&f.c(),e=U(),this.h()},l(o){t=g(o,"BUTTON",{class:!0});var p=$(t);a=g(p,"SPAN",{class:!0});var k=$(a);l=_(k,"Om sajten"),k.forEach(c),p.forEach(c),s=I(o),f&&f.l(o),e=U(),this.h()},h(){b(a,"class","mr-1"),b(t,"class","mx-auto px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 border flex")},m(o,p){P(o,t,p),r(t,a),r(a,l),P(o,s,p),f&&f.m(o,p),P(o,e,p),n||(i=at(t,"click",u[2]),n=!0)},p(o,p){o[1]?f?f.p(o,p):(f=J(o),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null)},d(o){o&&c(t),o&&c(s),f&&f.d(o),o&&c(e),n=!1,i()}}}function pt(u){let t,a,l;return a=new ft({props:{className:"text-sm text-slate-900 pt-8 pb-20 sm:pb-8",$$slots:{default:[ct]},$$scope:{ctx:u}}}),{c(){t=h("footer"),Y(a.$$.fragment)},l(s){t=g(s,"FOOTER",{});var e=$(t);Z(a.$$.fragment,e),e.forEach(c)},m(s,e){P(s,t,e),tt(a,t,null),l=!0},p(s,[e]){const n={};e&19&&(n.$$scope={dirty:e,ctx:s}),a.$set(n)},i(s){l||(z(a.$$.fragment,s),l=!0)},o(s){B(a.$$.fragment,s),l=!1},d(s){s&&c(t),et(a)}}}function mt(u,t,a){let l,s=!1;function e(){a(1,s=!s)}function n(i){nt[i?"unshift":"push"](()=>{l=i,a(0,l)})}return u.$$.update=()=>{u.$$.dirty&3&&s&&l&&l.scrollIntoView({behavior:"smooth"})},[l,s,e,n]}class dt extends Q{constructor(t){super(),W(this,t,mt,pt,X,{})}}function _t(u){let t,a,l;const s=u[1].default,e=lt(s,u,u[0],null);return a=new dt({}),{c(){e&&e.c(),t=E(),Y(a.$$.fragment)},l(n){e&&e.l(n),t=I(n),Z(a.$$.fragment,n)},m(n,i){e&&e.m(n,i),P(n,t,i),tt(a,n,i),l=!0},p(n,[i]){e&&e.p&&(!l||i&1)&&rt(e,s,n,n[0],l?it(s,n[0],i,null):ot(n[0]),null)},i(n){l||(z(e,n),z(a.$$.fragment,n),l=!0)},o(n){B(e,n),B(a.$$.fragment,n),l=!1},d(n){e&&e.d(n),n&&c(t),et(a,n)}}}function ht(u,t,a){let{$$slots:l={},$$scope:s}=t;return u.$$set=e=>{"$$scope"in e&&a(0,s=e.$$scope)},[s,l]}class bt extends Q{constructor(t){super(),W(this,t,ht,_t,X,{})}}export{bt as component,vt as universal};