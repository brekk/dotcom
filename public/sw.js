if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2JbwOPZybwyig6C3uZagk/_buildManifest.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/2JbwOPZybwyig6C3uZagk/_ssgManifest.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/359.97f1db81ea0d1f541e90.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/61-4912d151248ae9b26788.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/746-91a5994112a79b52020f.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/834-68d3f1a1fdec3a614e2c.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/a9a7754c-ad213239c7d0060ce90d.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/cb1608f2-12f724352fc21c9c8682.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/main-3f0189238c0a0bac1753.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/_app-1200899fd6fa157cc093.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/_error-a318e749acd712d191b2.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/index-fbcfd460da3afd541e3e.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/blem-f5c199a2f0e98ea95b28.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/bodypaint-77330f5811e34ba9efd9.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/breakpoints-c893ef0862c2630255b3.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/entrust-f0fe76bba3b0efe22f13.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/gitparty-b0afb1bddeb5b1b574fb.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/handrail-8f57cabf626601140742.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/katsu-curry-1a56855a3c74fd86adbb.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/ljs2-1b56d8cae3e808ea2f31.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/phantomscript-81b702c58ca3811bd65b.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/snang-d4d2f87ab00cfee631e1.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/template-dac5637e1e94549b360c.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/pages/writing/xtrace-85939aa8354e761f8542.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/_next/static/chunks/webpack-9f87c46097d3ef918db2.js",revision:"2JbwOPZybwyig6C3uZagk"},{url:"/brekk-is.png",revision:"f91b8e0b3e087ff81318861380950af5"},{url:"/colors.json",revision:"a65531b04f31c26ef6f875d40aa2ae7b"},{url:"/favicon.ico",revision:"27a88bde2c96d4aa331cbe0ceb0aea5a"},{url:"/logo-128.png",revision:"ede6d631ba113c551c541e59efe3b704"},{url:"/logo-144.png",revision:"c9a0b8a185e0d99e452418e7a02ed75d"},{url:"/logo-152.png",revision:"d422535469097414010c2219c4eec011"},{url:"/logo-192.png",revision:"e48a87b51d354e518470649950356a0f"},{url:"/logo-384.png",revision:"8f932ed46b577a8bcea984583eb6e89b"},{url:"/logo-512.png",revision:"f91b8e0b3e087ff81318861380950af5"},{url:"/logo-72.png",revision:"417c341c59012e863e7bf384dbe02e7b"},{url:"/logo-96.png",revision:"df66df91b5b3ab1118d20577f602f884"},{url:"/logo.svg",revision:"b47bafdb74480b97c7f5258820bf1e5c"},{url:"/manifest.json",revision:"28352c96fed014a240975858b3d99731"},{url:"/resume.pdf",revision:"f561cc1acefb4d2f9a538ed23f50aed1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
