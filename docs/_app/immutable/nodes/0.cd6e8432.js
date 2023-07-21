import{s as T,n as O,c as ne,u as oe,g as fe,d as ue}from"../chunks/scheduler.a7e64d23.js";import{S as U,i as q,g as m,m as L,s as g,h as _,j as $,n as I,f as r,c as y,k as h,a as v,x as p,r as R,u as V,v as F,d as z,t as D,w as H,y as ie}from"../chunks/index.b25da0d4.js";const ce=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"}));function me(u){let t,s,o=u[0][0].name+"",a,i,f,l,e=u[0][1].name+"",n,x,d,b,J=u[0][2].name+"",M,N,j,w,K=u[0][3].name+"",B,P,k,A,Q=u[0][4].name+"",G;return{c(){t=m("li"),s=m("a"),a=L(o),i=g(),f=m("li"),l=m("a"),n=L(e),x=g(),d=m("li"),b=m("a"),M=L(J),N=g(),j=m("li"),w=m("a"),B=L(K),P=g(),k=m("li"),A=m("a"),G=L(Q),this.h()},l(c){t=_(c,"LI",{});var E=$(t);s=_(E,"A",{class:!0,href:!0});var W=$(s);a=I(W,o),W.forEach(r),E.forEach(r),i=y(c),f=_(c,"LI",{});var X=$(f);l=_(X,"A",{class:!0,href:!0});var Y=$(l);n=I(Y,e),Y.forEach(r),X.forEach(r),x=y(c),d=_(c,"LI",{});var Z=$(d);b=_(Z,"A",{class:!0,href:!0});var ee=$(b);M=I(ee,J),ee.forEach(r),Z.forEach(r),N=y(c),j=_(c,"LI",{});var te=$(j);w=_(te,"A",{class:!0,href:!0});var se=$(w);B=I(se,K),se.forEach(r),te.forEach(r),P=y(c),k=_(c,"LI",{});var ae=$(k);A=_(ae,"A",{class:!0,href:!0});var re=$(A);G=I(re,Q),re.forEach(r),ae.forEach(r),this.h()},h(){h(s,"class",C+" "+S),h(s,"href",u[0][0].href),h(l,"class",C+" "+S),h(l,"href",u[0][1].href),h(b,"class",C+" "+S),h(b,"href",u[0][2].href),h(w,"class",C+" "+S),h(w,"href",u[0][3].href),h(A,"class",C+" "+S),h(A,"href",u[0][4].href)},m(c,E){v(c,t,E),p(t,s),p(s,a),v(c,i,E),v(c,f,E),p(f,l),p(l,n),v(c,x,E),v(c,d,E),p(d,b),p(b,M),v(c,N,E),v(c,j,E),p(j,w),p(w,B),v(c,P,E),v(c,k,E),p(k,A),p(A,G)},p:O,i:O,o:O,d(c){c&&(r(t),r(i),r(f),r(x),r(d),r(N),r(j),r(P),r(k))}}}const C="hover:text-sky-300",S="transition transition-duration-1000 ease-in-out";function _e(u,t,s){return[[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Projects",href:"/projects"},{name:"Resume",href:"/resume"},{name:"Contact",href:"/contact"}]]}class le extends U{constructor(t){super(),q(this,t,_e,me,T,{links:0})}get links(){return this.$$.ctx[0]}}function he(u){let t,s,o,a,i,f,l;return a=new le({}),{c(){t=m("header"),s=m("nav"),o=m("ul"),R(a.$$.fragment),i=g(),f=m("div"),this.h()},l(e){t=_(e,"HEADER",{class:!0});var n=$(t);s=_(n,"NAV",{class:!0});var x=$(s);o=_(x,"UL",{class:!0});var d=$(o);V(a.$$.fragment,d),d.forEach(r),x.forEach(r),i=y(n),f=_(n,"DIV",{class:!0}),$(f).forEach(r),n.forEach(r),this.h()},h(){h(o,"class","flex sm:space-x-7 space-x-4 rounded-full py-[.55rem] sm:px-7 px-4 sm:text-base text-sm bg-zinc-800 border-zinc-700 border"),h(s,"class","relative sm:top-6"),h(f,"class","sm:h-32 h-16"),h(t,"class","flex justify-center")},m(e,n){v(e,t,n),p(t,s),p(s,o),F(a,o,null),p(t,i),p(t,f),l=!0},p:O,i(e){l||(z(a.$$.fragment,e),l=!0)},o(e){D(a.$$.fragment,e),l=!1},d(e){e&&r(t),H(a)}}}class pe extends U{constructor(t){super(),q(this,t,null,he,T,{})}}function $e(u){let t,s,o,a,i,f,l="© 2023 Akross",e;return a=new le({}),{c(){t=m("footer"),s=m("div"),o=m("ul"),R(a.$$.fragment),i=g(),f=m("span"),f.textContent=l,this.h()},l(n){t=_(n,"FOOTER",{class:!0});var x=$(t);s=_(x,"DIV",{class:!0});var d=$(s);o=_(d,"UL",{class:!0});var b=$(o);V(a.$$.fragment,b),b.forEach(r),i=y(d),f=_(d,"SPAN",{class:!0,["data-svelte-h"]:!0}),ie(f)!=="svelte-15vywhr"&&(f.textContent=l),d.forEach(r),x.forEach(r),this.h()},h(){h(o,"class","flex flex-wrap items-center justify-around sm:space-x-7"),h(f,"class","flex justify-end mt-4 sm:mt-0 text-neutral-400"),h(s,"class","sm:flex block w-full max-w-screen-xl mx-auto lg:pb-16 pb-10 pt-10 sm:px-16 px-4 text-sm sm:text-base border-t border-neutral-800 justify-between"),h(t,"class","sm:mt-32 mt-12")},m(n,x){v(n,t,x),p(t,s),p(s,o),F(a,o,null),p(s,i),p(s,f),e=!0},p:O,i(n){e||(z(a.$$.fragment,n),e=!0)},o(n){D(a.$$.fragment,n),e=!1},d(n){n&&r(t),H(a)}}}class de extends U{constructor(t){super(),q(this,t,null,$e,T,{})}}function ve(u){let t,s,o,a,i;t=new pe({});const f=u[1].default,l=ne(f,u,u[0],null);return a=new de({}),{c(){R(t.$$.fragment),s=g(),l&&l.c(),o=g(),R(a.$$.fragment)},l(e){V(t.$$.fragment,e),s=y(e),l&&l.l(e),o=y(e),V(a.$$.fragment,e)},m(e,n){F(t,e,n),v(e,s,n),l&&l.m(e,n),v(e,o,n),F(a,e,n),i=!0},p(e,[n]){l&&l.p&&(!i||n&1)&&oe(l,f,e,e[0],i?ue(f,e[0],n,null):fe(e[0]),null)},i(e){i||(z(t.$$.fragment,e),z(l,e),z(a.$$.fragment,e),i=!0)},o(e){D(t.$$.fragment,e),D(l,e),D(a.$$.fragment,e),i=!1},d(e){e&&(r(s),r(o)),H(t,e),l&&l.d(e),H(a,e)}}}function xe(u,t,s){let{$$slots:o={},$$scope:a}=t;return u.$$set=i=>{"$$scope"in i&&s(0,a=i.$$scope)},[a,o]}class ye extends U{constructor(t){super(),q(this,t,xe,ve,T,{})}}export{ye as component,ge as universal};