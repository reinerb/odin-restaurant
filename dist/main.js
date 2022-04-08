(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(81),o=n.n(t),a=n(645),c=n.n(a)()(o());c.push([e.id,':root {\r\n  --color-primary-50: #f0fdfa;\r\n  --color-primary-100: #ccfbf1;\r\n  --color-primary-200: #99f6e4;\r\n  --color-primary-300: #5eead4;\r\n  --color-primary-400: #2dd4bf;\r\n  --color-primary-500: #14b8a6;\r\n  --color-primary-600: #0d9488;\r\n  --color-primary-700: #0f766e;\r\n  --color-primary-800: #115e59;\r\n  --color-primary-900: #134e4a;\r\n\r\n  --color-accent-50: #fdf2f8;\r\n  --color-accent-100: #fce7f3;\r\n  --color-accent-200: #fbcfe8;\r\n  --color-accent-300: #f9a8d4;\r\n  --color-accent-400: #f472b6;\r\n  --color-accent-500: #ec4899;\r\n  --color-accent-600: #db2777;\r\n  --color-accent-700: #be185d;\r\n  --color-accent-800: #9d174d;\r\n  --color-accent-900: #831843;\r\n\r\n  --color-neutral-50: #fafafa;\r\n  --color-neutral-100: #f5f5f5;\r\n  --color-neutral-200: #e5e5e5;\r\n  --color-neutral-300: #d4d4d4;\r\n  --color-neutral-400: #a3a3a3;\r\n  --color-neutral-500: #737373;\r\n  --color-neutral-600: #525252;\r\n  --color-neutral-700: #404040;\r\n  --color-neutral-800: #262626;\r\n  --color-neutral-900: #171717;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  color: var(--color-accent-600);\r\n}\r\n\r\na:visited {\r\n  color: var(--color-accent-800);\r\n}\r\n\r\nh1 {\r\n  font-weight: 900;\r\n}\r\n\r\nhtml {\r\n  color: var(--color-neutral-800);\r\n  font-family: "Poppins", sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  background-color: var(--color-primary-400);\r\n}\r\n\r\nheader,\r\nfooter {\r\n  width: 100%;\r\n  background-color: var(--color-primary-100);\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nfooter {\r\n  padding-block: 1rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nnav > ul {\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\nnav > ul > li {\r\n  cursor: pointer;\r\n  min-width: 12ch;\r\n  text-align: center;\r\n  padding: 0.75em 1em;\r\n  background-color: var(--color-primary-200);\r\n  border: 2px solid var(--color-primary-400);\r\n  border-bottom: none;\r\n  color: var(--color-neutral-600);\r\n  border-radius: 0.5rem 0.5rem 0 0;\r\n  font-size: 1.125rem;\r\n}\r\n\r\nnav > ul > li:hover {\r\n  background-color: var(--color-primary-300);\r\n  color: var(--color-neutral-700);\r\n}\r\n\r\nli.active,\r\nli.active:hover {\r\n  background-color: var(--color-primary-400);\r\n  color: var(--color-neutral-900);\r\n  font-weight: 600;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  width: min(100vw - 2rem, 1000px);\r\n  background-color: var(--color-primary-100);\r\n  margin-block: 1rem;\r\n  padding: 1rem 2rem;\r\n  border-radius: 1rem;\r\n  border: 4px solid var(--color-accent-400);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\n.title-container,\r\n.content-container {\r\n  background-color: var(--color-primary-50);\r\n  border: 2px solid var(--color-accent-200);\r\n  border-radius: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.title-container {\r\n  text-align: center;\r\n}\r\n\r\n.image-container {\r\n  background-color: var(--color-primary-50);\r\n  border: 2px solid var(--color-accent-200);\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.image-container > img {\r\n  margin-bottom: -20px;\r\n  aspect-ratio: 16 / 9;\r\n  object-fit: cover;\r\n}\r\n\r\n.centered-text {\r\n  text-align: center;\r\n}\r\n\r\nblockquote {\r\n  position: relative;\r\n  padding-left: 3rem;\r\n}\r\n\r\nblockquote::before {\r\n  display: block;\r\n  content: "\\201c";\r\n  font-family: Georgia, "Times New Roman", Times, serif;\r\n  color: var(--color-accent-500);\r\n  font-size: 6rem;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n\r\nblockquote + figcaption {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n}\r\n\r\nblockquote + figcaption::before {\r\n  content: "\\2014 \\00a0";\r\n}\r\n\r\n.content-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 0.5rem;\r\n}\r\n\r\n.menu-card {\r\n  border: 2px solid var(--color-accent-200);\r\n  border-radius: 1rem;\r\n  overflow: hidden;\r\n  background-color: var(--color-primary-50);\r\n}\r\n\r\n.menu-card :not(:first-child) {\r\n  margin-inline: 0.5rem;\r\n}\r\n\r\n.menu-card :last-child {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.menu-card > img {\r\n  width: 100%;\r\n  aspect-ratio: 1;\r\n  object-fit: cover;\r\n}\r\n\r\n.price {\r\n  color: var(--color-neutral-600);\r\n}\r\n',""]);const i=c},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=t.base?d[0]+t.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)r[m].references++,r[m].updater(u);else{var f=o(u,t);t.byIndex=i,r.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);r[i].references--}for(var d=t(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=d}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},374:(e,r,n)=>{e.exports=n.p+"c5210b3aa31d01432839.jpg"},910:(e,r,n)=>{e.exports=n.p+"89dc6259d4c929a5b49f.jpg"},551:(e,r,n)=>{e.exports=n.p+"8ef32d2bbf08ff974fdf.jpg"},433:(e,r,n)=>{e.exports=n.p+"8c93356f878df5de17c4.jpg"},393:(e,r,n)=>{e.exports=n.p+"6f658fa813b64d2bc4db.jpg"},729:(e,r,n)=>{e.exports=n.p+"ef8d3ec260d9e6999b7a.jpg"},332:(e,r,n)=>{e.exports=n.p+"b4c01283e1459c2e647f.jpg"},105:(e,r,n)=>{e.exports=n.p+"c7b31d2cb7f399daf919.jpg"},658:(e,r,n)=>{e.exports=n.p+"2d511952186e3df3de6e.jpg"},396:(e,r,n)=>{e.exports=n.p+"7dff908b8495427dd6e7.jpg"},744:(e,r,n)=>{e.exports=n.p+"2f456ade6490e3e78f89.jpg"},415:(e,r,n)=>{e.exports=n.p+"a3de11ce4af8b793ee0b.jpg"},152:(e,r,n)=>{e.exports=n.p+"7980309b5370e430f36a.jpg"},885:(e,r,n)=>{e.exports=n.p+"5d958a008820ddcdd5ff.jpg"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=n(551);const g=document.createElement("div");g.classList.add("title-container"),g.innerHTML="<h1>Lorem Ipsum Dining, Inc</h1>";const v=document.createElement("div");v.classList.add("content-container"),v.innerHTML="<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium non soluta sed maxime? Consequuntur exercitationem sit, sapiente corporis voluptatibus officia perferendis ab aliquam ad quos sunt dicta placeat modi excepturi.</p>";const b=document.createElement("div");b.classList.add("content-container"),b.innerHTML="<figure><blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facilis quis temporibus aspernatur, quas esse voluptates odit alias? Aut, error libero? Debitis deleniti sapiente dolore nostrum ab laborum eveniet recusandae?</blockquote> <figcaption>Abraham Lincoln</figcaption></figure>";const L=document.createElement("div");L.classList.add("content-container","centered-text"),L.innerHTML="<h2>Hours</h2><ul><li>Sunday: 6am - 3pm</li><li>Monday: 6am - 5pm</li><li>Tuesday: 6am - 5pm</li><li>Wednesday: 6am - 5pm</li><li>Thursday: 6am - 5pm</li><li>Friday: 6am - 10pm</li><li>Saturday: 6am - 10pm</li></ul>";const y=document.createElement("div");y.classList.add("image-container");const x=new Image;x.src=h,y.appendChild(x);const C=function(e){e.appendChild(g),e.appendChild(v),e.appendChild(b),e.appendChild(L),e.appendChild(y)};var w=n(433),E=n(105),M=n(729),T=n(396),H=n(885),j=n(910),k=n(374),I=n(658),q=n(415),S=n(393),$=n(332),P=n(744);const B=document.createElement("div");B.classList.add("title-container"),B.innerHTML="<h1>Our Menu</h1>";const A=document.createElement("div");A.classList.add("title-container"),A.innerHTML="<h2>Beverages</h2>";const D=document.createElement("div");D.classList.add("title-container"),D.innerHTML="<h2>Breakfast</h2>";const N=document.createElement("div");N.classList.add("title-container"),N.innerHTML="<h2>Lunch</h2>";const F=document.createElement("div");F.classList.add("title-container"),F.innerHTML="<h2>Dessert</h2>";const O=document.createElement("div");O.classList.add("content-grid");const Z=document.createElement("div");Z.classList.add("menu-card"),Z.innerHTML='<h3>Coffee</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$5</p>';const R=new Image;R.src=w,Z.prepend(R);const z=document.createElement("div");z.classList.add("menu-card"),z.innerHTML='<h3>Matcha Latte</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$5</p>';const U=new Image;U.src=E,z.prepend(U);const G=document.createElement("div");G.classList.add("menu-card"),G.innerHTML='<h3>Ginger Beer</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$4</p>';const W=new Image;W.src=M,G.prepend(W),O.appendChild(Z),O.appendChild(z),O.appendChild(G);const _=document.createElement("div");_.classList.add("content-grid");const J=document.createElement("div");J.classList.add("menu-card"),J.innerHTML='<h3>Pancakes</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$8</p>';const K=new Image;K.src=T,J.prepend(K);const Q=document.createElement("div");Q.classList.add("menu-card"),Q.innerHTML='<h3>Waffle</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$7</p>';const V=new Image;V.src=H,Q.prepend(V);const X=document.createElement("div");X.classList.add("menu-card"),X.innerHTML='<h3>Bagel</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$4</p>';const Y=new Image;Y.src=j,X.prepend(Y),_.appendChild(J),_.appendChild(Q),_.appendChild(X);const ee=document.createElement("div");ee.classList.add("content-grid");const re=document.createElement("div");re.classList.add("menu-card"),re.innerHTML='<h3>Burger</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$10</p>';const ne=new Image;ne.src=k,re.prepend(ne);const te=document.createElement("div");te.classList.add("menu-card"),te.innerHTML='<h3>Noodle Bowl</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$10</p>';const oe=new Image;oe.src=I,te.prepend(oe);const ae=document.createElement("div");ae.classList.add("menu-card"),ae.innerHTML='<h3>Rice Bowl</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$9</p>';const ce=new Image;ce.src=q,ae.prepend(ce),ee.appendChild(re),ee.appendChild(te),ee.appendChild(ae);const ie=document.createElement("div");ie.classList.add("content-grid");const de=document.createElement("div");de.classList.add("menu-card"),de.innerHTML='<h3>Fresh-Baked Cookies</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$3</p>';const se=new Image;se.src=S,de.prepend(se);const le=document.createElement("div");le.classList.add("menu-card"),le.innerHTML='<h3>Ice Cream</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$4</p>';const pe=new Image;pe.src=$,le.prepend(pe);const me=document.createElement("div");me.classList.add("menu-card"),me.innerHTML='<h3>Pie</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$6</p>';const ue=new Image;ue.src=P,me.prepend(ue),ie.appendChild(de),ie.appendChild(le),ie.appendChild(me);var fe=n(152);const he=document.createElement("div");he.classList.add("title-container"),he.innerHTML="<h1>Contact Us!</h1>";const ge=document.createElement("div");ge.classList.add("content-grid");const ve=document.createElement("div");ve.classList.add("content-container","centered-text"),ve.innerHTML="<h2>Phone</h2><p>555-0134</p>",ge.appendChild(ve);const be=document.createElement("div");be.classList.add("content-container","centered-text"),be.innerHTML="<h2>Email</h2><p><a href='#'>foo@bar.com</a></p>",ge.appendChild(be);const Le=document.createElement("div");Le.classList.add("image-container");const ye=new Image;ye.src=fe,Le.appendChild(ye);const xe=document.querySelector("#home"),Ce=document.querySelector("#menu"),we=document.querySelector("#contact"),Ee=document.querySelector(".content"),Me=[xe,Ce,we],Te=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},He=function(e){for(let r=0;r<Me.length;r++)r===e?Me[r].classList.add("active"):Me[r].classList.remove("active");var r;0==e?(Te(Ee),C(Ee)):1==e?(Te(Ee),(r=Ee).appendChild(B),r.appendChild(A),r.appendChild(O),r.appendChild(D),r.appendChild(_),r.appendChild(N),r.appendChild(ee),r.appendChild(F),r.appendChild(ie)):2==e&&(Te(Ee),function(e){e.appendChild(he),e.appendChild(ge),e.appendChild(Le)}(Ee))};for(let e=0;e<Me.length;e++)Me[e].addEventListener("click",(()=>{He(e)}));C(Ee)})()})();