if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let d={};const a=e=>i(e,t),l={module:{uri:t},exports:d,require:a};r[t]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(s(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BHG7Y_ol.js",revision:null},{url:"assets/index-DZJNec3Z.css",revision:null},{url:"index.html",revision:"85d5382107e48bd4a6c7c009ac128cec"},{url:"menu-template.html",revision:"7802b449c9a481f6af6b6942c9b1d87f"},{url:"menukaart-kerst.html",revision:"8286ad48469887119dd9149a1fe42d91"},{url:"menukaart-nieuwjaar.html",revision:"47395df6974e0c4d871d348348706618"},{url:"menukaart-pasen.html",revision:"4b977b97d43a57035b69befc91e782f1"},{url:"menukaart-sans-serif.html",revision:"9375fdf1d26ee2b1c4d6f740255517d0"},{url:"menukaart-valentijn.html",revision:"b1e41dfad772d1fbe2f45dbd8a12d89c"},{url:"menukaart-verjaardag.html",revision:"01793e6b6e5069f024ee6716d263fff7"},{url:"menukaart.html",revision:"75d6f2343fc7dcbf3670035dfa787a62"},{url:"registerSW.js",revision:"deb09c47b222e3d3d1cdace796da5479"},{url:"style.css",revision:"0f176352661e1e114c3f7238fda62990"},{url:"manifest.webmanifest",revision:"eeed02e11a2483221a4f86ca64984e88"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
