!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1211e6a41aeff00d402827ccbe6749a9","url":"00f45bf5.3a3ea59b.js"},{"revision":"4f3343d668843a739f3a6220694ee45a","url":"01a85c17.13ad9f4f.js"},{"revision":"e1b528318cf3bc77b78d2186e4e48ef3","url":"0a281fbd.df71461e.js"},{"revision":"a67b81c520f5dd32442af36ec54364a6","url":"0e67f7ad.0e461c90.js"},{"revision":"1601992f9111b0260326206358c0e61a","url":"164538b6.b82ab25a.js"},{"revision":"d66f1b573f2b9133a48fe3eca8a2f266","url":"1716d38d.c52f4a03.js"},{"revision":"0976db197bd58d208fe5c3f250cc4c51","url":"17896441.6eff7a50.js"},{"revision":"f2822680258afccb845db4180fb40b7d","url":"1be78505.94af7d32.js"},{"revision":"2cc4df3afea426720098eb073d55ccf7","url":"1c256d1d.cc4ed77a.js"},{"revision":"3f8b0b3cfb7820308f3ffe9d6722630b","url":"1dc0a416.bbfda197.js"},{"revision":"9281356e2d371b69caa59ad3d6d9af5e","url":"1df93b7f.d6cd21c7.js"},{"revision":"176c096e1e73b44b5d3fe6b3e72d8ed6","url":"1f391b9e.03fa966d.js"},{"revision":"bc9617b67b9a0f9748ad95f494e72fc8","url":"25ae78ff.7c03ced4.js"},{"revision":"69dc74490c7f60762080fd06aea2eca2","url":"265f8c6c.5deff2d6.js"},{"revision":"246a660265ccf42b084a431feb00749e","url":"2fb31f72.900b997b.js"},{"revision":"575850cfb7dfc8d538452b704bd5e049","url":"37d1b4ef.c8c469e0.js"},{"revision":"8bd8f22aef4cc0ef9371d15ad1d2df4a","url":"404.html"},{"revision":"fd962710f604c8a3ae9fbaf5c36710a8","url":"459e8afc.80043743.js"},{"revision":"e032c0f86a112ac1355ccf8c5ab10dd7","url":"46251eed.6aa98203.js"},{"revision":"1cd12216adcaae3f51cae1f698c1cf1d","url":"480b7368.42bacf78.js"},{"revision":"4a7f726d79823e3171ec37689f8d6385","url":"54.2bed6a38.js"},{"revision":"39b8c1f88866618852734a37d9ceeb08","url":"55.19aaa10d.js"},{"revision":"a9a3995d0fa34597e90f46265765666f","url":"56.4156c6a6.js"},{"revision":"8bb953d5e1d3622642eba16d0ab07d72","url":"57.44556685.js"},{"revision":"0c6b1731a5bd758d1e57ad92799d0be3","url":"573b16f5.94574f56.js"},{"revision":"cab3021f70f89c4d2a6890eb2421410e","url":"58.e7fff789.js"},{"revision":"9e2581e2dc0b312fce4d83ba96649953","url":"59e90272.ef6c7cb7.js"},{"revision":"271f0eb313cc7f28fa38dff3c983663c","url":"6789f670.9f70628d.js"},{"revision":"ad3823cffa193c979c6b9ec43ea7cb92","url":"682120c7.6e3f6980.js"},{"revision":"5e641b634621a959da18023b690d284d","url":"684405a0.e85d9632.js"},{"revision":"0ca395b92bf9b4c40ed8653def297b55","url":"6875c492.4d623e4c.js"},{"revision":"186db7bc4e4b4163919c148244314782","url":"6ecd3d7e.78e5a609.js"},{"revision":"82c300a5908099454b39d37b863c559c","url":"7eed2d06.daa705ef.js"},{"revision":"fa5992564996591fbf23d54c5c784059","url":"7f377cdc.929a6b22.js"},{"revision":"e70b0016f475baf78e7d34f99fd4b2a1","url":"889d5130.e516110c.js"},{"revision":"3a1c610ec94cc5717431d5014d05d6a5","url":"935f2afb.48a6ba6b.js"},{"revision":"6424ead3ca70ff3b7568d4a7b381f532","url":"9e7e4095.8830a2d9.js"},{"revision":"8aa85d2c1162bf4d32e300b60b63c776","url":"a09c2993.3d54bc55.js"},{"revision":"315055b778857578dc550068f2d3cc2c","url":"a0cc6c1e.eccb3a07.js"},{"revision":"d58861feb62ba2e5b7715d3d3843e235","url":"a4b0cf14.077c95fe.js"},{"revision":"57e76d37bc19534988c1416d8150534f","url":"a6aa9e1f.0bf1e326.js"},{"revision":"229c474ff73f63cc38c3dd74f30a433b","url":"a7023ddc.bfb47da7.js"},{"revision":"a083eb977d8ede46d93ad92e0e1a156a","url":"asset-manifest.json"},{"revision":"40d8b9e2a16a33a0569870578629ae79","url":"b2b675dd.42661068.js"},{"revision":"d589375340452c69b463e419d859977e","url":"b9a13afa.a8c513a5.js"},{"revision":"c3719887a8b41d3f2ece2a9c2b6b36c1","url":"bc85d8da.df678724.js"},{"revision":"05965d9093ced811b144b37ef28b95a2","url":"blog/2017/12/31/tech-overview/index.html"},{"revision":"b8875142dc9ce99195021492f3479911","url":"blog/2019/12/19/996/index.html"},{"revision":"76f1b918de9c94b828eabfd79babc82d","url":"blog/2020/11/13/vray/index.html"},{"revision":"189b7d2788dec00af42a85c5c1c9e73d","url":"blog/2020/12/31/year-summary/index.html"},{"revision":"f13d8a04798524f2ee9ddc6b18d362bf","url":"blog/index.html"},{"revision":"c6ed224b92feb3e1c94c5c6ef743088a","url":"blog/tags/index.html"},{"revision":"d24bace64e2adcdad190c8ded1102e52","url":"blog/tags/奋斗/index.html"},{"revision":"e4144734c5cb2195f12db8dc8c738dca","url":"c06c65ca.9e14af60.js"},{"revision":"33b371697516b5f08e15d602381fa547","url":"c71d7439.e2aef969.js"},{"revision":"6aa1f91e10bb6271bcfbbf59da5b6656","url":"c935443e.e96301e3.js"},{"revision":"c4a1d8b78596cfa39370302235b4f201","url":"careers/index.html"},{"revision":"2e2dbd4f10a649bbf1ca8205a3cc7c24","url":"careers/technical-content-writer/index.html"},{"revision":"c1dc887d87c73e3dd7c167b9c2ecf117","url":"ccc49370.7e7b5f58.js"},{"revision":"bb5a1f5adb0bcb83e615eb08f7e609a7","url":"cffd10b5.c7f80c45.js"},{"revision":"c4797c68604f5162375a4ab495459007","url":"common.5f77a023.js"},{"revision":"0668787884f331097cdb27812496cbe4","url":"community/index.html"},{"revision":"aa383b5ec5cfa1521a2dd9baa05770f2","url":"d2276f01.d46fa107.js"},{"revision":"1f262cc99fd4faca9c37577673087393","url":"d3c76d87.ae893a7e.js"},{"revision":"06730b3fe073426207771dec93fe9d1b","url":"docs/__guidelines/content-hierarchy/index.html"},{"revision":"cf6eb65d535b2b0d93a416fbe441aa81","url":"docs/__guidelines/influences/index.html"},{"revision":"b0c5838ba54c8e5a52840c165bf4bed5","url":"docs/__guidelines/lexicon/index.html"},{"revision":"8d532314efb8a936c006c4c53d08355e","url":"docs/__guidelines/markdown/index.html"},{"revision":"0e48adc4f9a0258a3d3578b80ab37b94","url":"docs/__guidelines/naming-convention/index.html"},{"revision":"4ee1e41de9a1acfb9302cb05069e0869","url":"docs/__guidelines/sql-code-blocks/index.html"},{"revision":"ae23fe0a81a8213d31a3bf27a850d398","url":"docs/__guidelines/template/function/index.html"},{"revision":"397fba2878d05bc8e2b2d3de87c5f862","url":"docs/__guidelines/template/guide/index.html"},{"revision":"6628036709522f930119ea55bc7c6729","url":"docs/__guidelines/template/sql/index.html"},{"revision":"325fdf9831bca099050758eda69d0182","url":"docs/api/pushapi/index.html"},{"revision":"ada6659ca963a1f275127d10102b8d5f","url":"docs/concept/delivery-read-report/index.html"},{"revision":"e870bc1158df2293ca347244690dad1d","url":"docs/concept/muti-conference-rtc/index.html"},{"revision":"295ff85a4953d4add7d69de1ca231c22","url":"docs/concept/tech-doc/index.html"},{"revision":"96e057505ef01b6158cc9e039c761814","url":"docs/concept/web-rtc-intro/index.html"},{"revision":"6d70c7c9dad1ab490a7701a5bb8437c1","url":"docs/consult/contact/index.html"},{"revision":"8a516f0d6e458fada2f7e2cb6baf64bb","url":"docs/guide/centos/index.html"},{"revision":"242b49b987021ff007f0faba70476b2a","url":"docs/guide/checklist/index.html"},{"revision":"43887a905c34bce68b09f336544491c6","url":"docs/guide/cluster/index.html"},{"revision":"1a54b333a4db86a42ee2ecb245cd3882","url":"docs/guide/ubuntu/index.html"},{"revision":"de38b68a98ab021c083ce96c1728fdc3","url":"docs/guide/windows/index.html"},{"revision":"413c214ead793d48f38e0fc383d6a88e","url":"docs/introduction/index.html"},{"revision":"2b6f85db307cf313c03222994f5ee8b6","url":"docs/prepare/cert/index.html"},{"revision":"c089377f4922dc460f2a8947b97c16ca","url":"docs/prepare/coturn/index.html"},{"revision":"60829e1a38b9be9ebaafe282ece289b7","url":"docs/prepare/minio/index.html"},{"revision":"8c2dc9ec525bba77753785100997eff3","url":"docs/prepare/mysql/index.html"},{"revision":"64c913dc94989f154f3a4eef795e4851","url":"docs/prepare/nginx/index.html"},{"revision":"e7257157b69d2d1a5c8c7277734e662b","url":"e1e2d102.0a8cdf65.js"},{"revision":"f00eb3b2d9c28543035909da6e29d15f","url":"eedd5a80.a4b1e9b0.js"},{"revision":"581c99b7fe879c63ad561a6764c1a556","url":"ef3c1ab6.b1c02b40.js"},{"revision":"e6f5fd79daa6a84b8dbb6c48cc380872","url":"f24152b2.d6ca3451.js"},{"revision":"e087046f51e16020a5720457b404d53b","url":"f9070f1e.d8b3a544.js"},{"revision":"5f50d19639d0a74fe75f6113ab5f971d","url":"getstarted/index.html"},{"revision":"e1fec40510db272bf1007250080f89c0","url":"index.html"},{"revision":"d3aa844d871ef379f11b3e88f78be3c4","url":"main.1bbb7c0d.js"},{"revision":"8bfd50aa8f1d653957aecdef507079ba","url":"search/index.html"},{"revision":"12bf13e17d5908dbb945ef015fee3547","url":"styles.6808db04.css"},{"revision":"18707f4e43bfb1350853f1b20baacfb0","url":"styles.ba0ea2e7.js"},{"revision":"b03a4819a7691557338cd382d454d755","url":"__unused/console.png"},{"revision":"692e186b24cab182ac475e06bc19440d","url":"__unused/nic.jpg"},{"revision":"ad0950adc175ac0d47c5b1051b9f5fb2","url":"__unused/questdb.png"},{"revision":"c39f8bd9ae098f57447c1fa3a220379e","url":"__unused/tanc.jpg"},{"revision":"250d12c4edb444e2223014a5d4a75828","url":"__unused/vlad.jpg"},{"revision":"525f8f09625c9655ed98f0cd60e483e9","url":"assets/images/fsharechat-31f9bcfc8f6f7f4b0695b09f244a0c74.png"},{"revision":"0add171a53e01e7bb2051f99bad5778a","url":"ideal-img/fsharechat.0add171.2000.png"},{"revision":"d8e66067c5a538f967e8c9aebd50c126","url":"img/blog/2019-12-19/captureRate.png"},{"revision":"774dd7659f3437a85e293edb12e8a3f3","url":"img/blog/2019-12-19/captureRateChart.png"},{"revision":"f97ae7de003f7774a8484068b392cee9","url":"img/blog/2019-12-19/cpuInflux.png"},{"revision":"ccf8e057604d0418ce1f65540e287071","url":"img/blog/2019-12-19/cpuQuest.png"},{"revision":"9e3949c22307f8586b427a90ea28827c","url":"img/blog/2019-12-19/impliedSpeed.png"},{"revision":"dbbcf6361f5833974356f3f450a3fd13","url":"img/blog/2019-12-19/queueInflux.png"},{"revision":"380adf5eb1f1ee5929105fdeb38295ce","url":"img/blog/2019-12-19/queueQuest.png"},{"revision":"27cce7db3bf81bd8e13180b9866b173b","url":"img/blog/2019-12-19/storeAsMany.png"},{"revision":"0ad0acd1af39f700f57ac687a91bf0b0","url":"img/blog/2019-12-19/userInflux.png"},{"revision":"8073bab53949f728bca070485b91b83c","url":"img/blog/2019-12-19/userQuest.png"},{"revision":"f4ae8b1674b034bca82959b0570fcaa7","url":"img/blog/2020-03-15/header.png"},{"revision":"89ba566998445b505f9415c63ec21784","url":"img/blog/2020-04-02/banner.png"},{"revision":"f830f41559a514a9c0af357ef853611d","url":"img/blog/2020-04-02/benchmark3900x.png"},{"revision":"9c332d80a47b899f4a3287f58636d61e","url":"img/blog/2020-04-02/benchmark8850h.png"},{"revision":"0c9a189770cf3be6b7c15ec6bb529b85","url":"img/blog/2020-04-02/benchmarkPostgres.png"},{"revision":"fa4c5280250d19e6d7c1dfc49527f737","url":"img/blog/2020-04-02/memoryChannelAnalysis.png"},{"revision":"229435f6fade836603c9ba42a687f979","url":"img/blog/2020-05-12/banner.png"},{"revision":"c7c27c826e0c622c175c8bc10d493e6b","url":"img/blog/2020-05-12/digitsExpanded.png"},{"revision":"cb970b9c782a0a86ad773679d868dd92","url":"img/blog/2020-05-12/digitsResult.png"},{"revision":"66e3dd23546364c375a6df7972b49f95","url":"img/blog/2020-05-12/kahanComparison.png"},{"revision":"2787c9f479bc9f2ca1c1ff136ae752b4","url":"img/blog/2020-05-12/kahanNullComparison.png"},{"revision":"e5649bf50413a79ee0a865d5b6728f8e","url":"img/blog/2020-05-12/significantDigits.png"},{"revision":"c4cb11ea7fe57ad4aba2e4c2ecd67b9e","url":"img/blog/2020-06-05/build.gif"},{"revision":"eea322b0a78425a254f2d06348b47f5d","url":"img/blog/2020-06-05/console.png"},{"revision":"7d514d0b5ed66bf9c98a6cb6e2be2b83","url":"img/blog/2020-06-05/queries.gif"},{"revision":"44aa8a031a1a0c7eb35f11f8f8804875","url":"img/blog/2020-06-05/sensor.png"},{"revision":"79eec098f25ece6e20ced7b32170e39e","url":"img/blog/2020-06-05/start.gif"},{"revision":"cd111c8e19a7374a0c21fc09d3fc2325","url":"img/blog/2020-06-15/graph.png"},{"revision":"c24e59ed2c07b6fedef5fb3d2dba1508","url":"img/blog/2020-07-01/join.png"},{"revision":"5b1d7d0200b682f1b515259833340831","url":"img/blog/2020-07-22/banner.jpg"},{"revision":"0a42e63bbf27f12fc402453a7320eea8","url":"img/blog/2020-07-22/tableShot.png"},{"revision":"5c747c6352c4ff4e8ef2a07ba7a005fb","url":"img/blog/2020-07-24/banner.jpg"},{"revision":"4c2c8e7f16d856f41487f9417143182b","url":"img/blog/2020-07-24/tShirt.png"},{"revision":"311c30097c198d1bc4aa75c63b0097b1","url":"img/blog/2020-08-06/foggyPath.jpg"},{"revision":"a951ca56b02b41b8a59395158becf069","url":"img/blog/2020-08-19/banner.png"},{"revision":"d301a1a11d416447933049d872a85d40","url":"img/blog/2020-08-19/primitives.png"},{"revision":"c4a34f4aa926ad598873516da9d48ae7","url":"img/blog/2020-08-19/strings.png"},{"revision":"0bfeff7bb9876effae16dc0bf724673d","url":"img/blog/2020-08-25/schema.png"},{"revision":"2b7c15085efe63ff39b0fe8e29e8c29d","url":"img/blog/2020-08-25/tables.png"},{"revision":"3086cd140aa8ff1a03f490fad5813707","url":"img/docs/bttf.jpg"},{"revision":"8c5cebc88940a23601cf1f238be26b26","url":"img/docs/castmap.jpg"},{"revision":"2027723e90b0fac10cef6500aedb9b96","url":"img/docs/chevron.svg"},{"revision":"cf043b3011cd4d0d3ebac7e8b516a8e9","url":"img/docs/concepts/columnRead.svg"},{"revision":"560ea710b6a2e0da5de46be2e670c9fd","url":"img/docs/concepts/columnUpdate.svg"},{"revision":"09e2cd6293748d62e4f87f2ad6206fec","url":"img/docs/concepts/commitModel.svg"},{"revision":"5285697cbae57442e97d5cc9090c77ff","url":"img/docs/concepts/designatedTimestamp.jpg"},{"revision":"126cf23a11980e1d28e39f2042a3c604","url":"img/docs/concepts/designatedTimestamp.svg"},{"revision":"e62c0c3367f219c3bfbd53b685054d76","url":"img/docs/concepts/partitionModel.svg"},{"revision":"07b6c926738fb9a91fca336a538598d9","url":"img/docs/concepts/storageSummarized.svg"},{"revision":"9927bfc839969df2d1101fb964c4d252","url":"img/docs/concepts/timestampReject.jpg"},{"revision":"6f1eff157368b5e1a7f2983fdee595b8","url":"img/docs/concepts/timestampReject.svg"},{"revision":"e6bde3195f02fec055ce731683ebe2d9","url":"img/docs/console/amendType.jpg"},{"revision":"7e267053c059b89d46494d152aafe6ce","url":"img/docs/console/download.gif"},{"revision":"ff4e5ee81479b06b1e158332c4e60d43","url":"img/docs/console/importTab.png"},{"revision":"7570a47ea085815691afc984ec851871","url":"img/docs/console/layout.png"},{"revision":"76185a6f01a9054721adc8107b3cd242","url":"img/docs/console/overview.png"},{"revision":"4b7c3ab675ba04ecaa65a57de4931e61","url":"img/docs/console/uploadButton.png"},{"revision":"cd0f94f28aa02368b58897258e99a886","url":"img/docs/diagrams/alterTable.svg"},{"revision":"73437231d11f3203f7a28795b004d3e4","url":"img/docs/diagrams/alterTableAddColumn.svg"},{"revision":"7c2543deae8615a9a2a92d32dec454ee","url":"img/docs/diagrams/alterTableAddIndex.svg"},{"revision":"02140fea6b9415fd1bc1e8bf1123e470","url":"img/docs/diagrams/alterTableDropColumn.svg"},{"revision":"ba853cce866b0c550a12edb6abc9c887","url":"img/docs/diagrams/alterTableDropPartition.svg"},{"revision":"c6dac74d9cb0e6918e3d802211d48a34","url":"img/docs/diagrams/backup.svg"},{"revision":"3d53c755a56c518dbaa7f69f869e2267","url":"img/docs/diagrams/case.svg"},{"revision":"1e5ce05b151b18f41511bf93167b00d8","url":"img/docs/diagrams/cast.svg"},{"revision":"dfdd6631a615b4a24aca07ae0be2e7ad","url":"img/docs/diagrams/castDef.svg"},{"revision":"371accf7f934ae98dd4bc45f91595be6","url":"img/docs/diagrams/columnTypeDef.svg"},{"revision":"7415e602209037318b9d5c77d887b971","url":"img/docs/diagrams/copy.svg"},{"revision":"bfff8b1d32661306514c2ef6bf9c17be","url":"img/docs/diagrams/createTable.svg"},{"revision":"9963260ba0fd9f315cb31c99b939e22a","url":"img/docs/diagrams/distinct.svg"},{"revision":"ad675023b6bcc32e10818aafde0dcb9c","url":"img/docs/diagrams/dynamicTimestamp.svg"},{"revision":"2a4ad5c78b931e8ba5e31d3eb266eb5c","url":"img/docs/diagrams/exceptIntersect.svg"},{"revision":"dbed13198ad2e6fccfc19b5023d95eb0","url":"img/docs/diagrams/fill.svg"},{"revision":"245bd42c7cf6a4b881309827c4fdd1dc","url":"img/docs/diagrams/groupBy.svg"},{"revision":"1d68212f0e35a32e3526f679eda9bf3d","url":"img/docs/diagrams/indexCapacityDef.svg"},{"revision":"f42f6c57ee45b02c2876f350c7c0fcb5","url":"img/docs/diagrams/indexDef.svg"},{"revision":"a7881b418c71750ce339733b1b7bf27c","url":"img/docs/diagrams/influxLineProtocolTCPLoadBalancing.svg"},{"revision":"9e248211606230bb8152df1ef78703e8","url":"img/docs/diagrams/influxLineProtocolTCPStructure.svg"},{"revision":"7e510b9d8963239c7da2139c59b7a60f","url":"img/docs/diagrams/inlineIndexDef.svg"},{"revision":"928d808213c8c0144bf6a4bc51691bc7","url":"img/docs/diagrams/insert.svg"},{"revision":"e861cbddf0316175ce137a55763366f1","url":"img/docs/diagrams/join.svg"},{"revision":"54d52636c1c9a794cf1e7a88923e0cc9","url":"img/docs/diagrams/latestBy.svg"},{"revision":"be0195d8cca4f6000fce41fb3ca303a5","url":"img/docs/diagrams/limit.svg"},{"revision":"fde722d149a271cc2caa0d7376cdeb43","url":"img/docs/diagrams/orderBy.svg"},{"revision":"70b7796ff76744b91509c97f9fa793b4","url":"img/docs/diagrams/renameTable.svg"},{"revision":"5699a5759cf961cde72f5ead4b41aacb","url":"img/docs/diagrams/sampleBy.svg"},{"revision":"4562de610e65f7cf24ac7f9c012a6598","url":"img/docs/diagrams/select.svg"},{"revision":"5a81ed1f6207735699e0b72b3664cc07","url":"img/docs/diagrams/timestamp.svg"},{"revision":"4e81099bb96841a3672b3fbc3e6685a1","url":"img/docs/diagrams/union.svg"},{"revision":"5b19ea7bf259bc30cf650980a02b6c78","url":"img/docs/diagrams/where.svg"},{"revision":"6d6e5080fea2cc383c2054dde2b95148","url":"img/docs/diagrams/whereBoolean.svg"},{"revision":"a5a38e848e03d3ec39e9a45f93a15afa","url":"img/docs/diagrams/whereComplex.svg"},{"revision":"514611ac1651d16c83173b430320d58b","url":"img/docs/diagrams/whereEqDoublePrecision.svg"},{"revision":"41decc037baa358fe4a38b92762adcf7","url":"img/docs/diagrams/whereExactString.svg"},{"revision":"e31e1411e7f6dc11f70c4cadf034e109","url":"img/docs/diagrams/whereListIn.svg"},{"revision":"d4dc1253e69f97e927bfc3ede55b55cb","url":"img/docs/diagrams/whereNumericValue.svg"},{"revision":"0a54c6b63d8b3cddf9721b6c0814cc52","url":"img/docs/diagrams/whereRegexMatch.svg"},{"revision":"298bc4b3495930fdd749a307782d61d8","url":"img/docs/diagrams/whereRegexNotMatch.svg"},{"revision":"dbc624eea67400e16065af1bd7c0f0ff","url":"img/docs/diagrams/whereStringNotMatch.svg"},{"revision":"942fc23c3b2c54d3d6a57c1dcd2296eb","url":"img/docs/diagrams/whereTimestampExact.svg"},{"revision":"5fef81d6cf2b5a3a131a6ec685c7856f","url":"img/docs/diagrams/whereTimestampPartial.svg"},{"revision":"32057d190b5b85329018914c8a861958","url":"img/docs/diagrams/whereTimestampPartialModifier.svg"},{"revision":"be04a962b12241373e2df9c0e0dbcaf1","url":"img/docs/diagrams/whereTimestampRange.svg"},{"revision":"bde889869be662c840d168185a81191b","url":"img/docs/diagrams/with.svg"},{"revision":"542d3c9e42dc3a5bb17c58a8b9dcd8aa","url":"img/favicon.png"},{"revision":"c34543e08c6b8759664944f537d8a9ca","url":"img/favicon1.png"},{"revision":"5f28cf031a86e363d2d9b95982bd5963","url":"img/footer/fsharechat.svg"},{"revision":"e60a2cd99595c1c115e1c085fbc66dc0","url":"img/footer/questdb.svg"},{"revision":"5cf298a29c09e4ec85cf3569c11fb1c6","url":"img/github.svg"},{"revision":"dc30b588532ae128fb117f032b432d5e","url":"img/icons/icon-144x144.png"},{"revision":"6720d6d11d5405af670430ebee6ed919","url":"img/icons/icon-192x192.png"},{"revision":"dbf75ab3bbcbd9f15476bbf4039fedbf","url":"img/icons/icon-256x256.png"},{"revision":"99e6e453244eb2a637de3cb3119c1e52","url":"img/icons/icon-384x384.png"},{"revision":"c0d53b69a5a732530e3761313ec494f8","url":"img/icons/icon-48x48.png"},{"revision":"885a020ae74e611d465498c125af5066","url":"img/icons/icon-512x512.png"},{"revision":"af52ee7bd3bbc8cf4a6ee6e765316b36","url":"img/icons/icon-72x72.png"},{"revision":"e3e3ff8690456c50890516cd10df7c05","url":"img/icons/icon-96x96.png"},{"revision":"96a5c5d6244dd4acdf8f8912d7fe1ae0","url":"img/icons/maskable.png"},{"revision":"57158c243a21ff81e5b19baefa1cc1a4","url":"img/infima/arrow.svg"},{"revision":"08979c61ef054f88bb976c5d544ef8c8","url":"img/navbar/fshare.svg"},{"revision":"0cc502dd870560e49ffc1c95a65f1117","url":"img/navbar/fshare1.svg"},{"revision":"1ea5eae3845d49d23ed441a044f29cb0","url":"img/navbar/github.svg"},{"revision":"c107e153c56ef9edcc785e6b54e9d5b6","url":"img/navbar/icon.ico"},{"revision":"ccb5d44bfa4d44f694347e3537e55fda","url":"img/navbar/questdb.svg"},{"revision":"7590c738a34373ab0926517b2bdffa4d","url":"img/navbar/slack.svg"},{"revision":"1664e647d998e0fee779d60a2405389b","url":"img/og.png"},{"revision":"d3cf1a12dc59ab4ff0f29dede1fb1924","url":"img/pages/careers/arrowRight.svg"},{"revision":"df155747d4e484d9dffcc76fb82c0fc7","url":"img/pages/careers/teamCollaboration.svg"},{"revision":"8dc52f0e4351509717939e7911c1315d","url":"img/pages/careers/teamSpirit.svg"},{"revision":"562a45f4ded3113c77c8a04df8938dd2","url":"img/pages/getStarted/bsd.svg"},{"revision":"76185a6f01a9054721adc8107b3cd242","url":"img/pages/getStarted/console.png"},{"revision":"9f3381855ec3fc5e6adc06aab0ff7614","url":"img/pages/getStarted/docker.svg"},{"revision":"525f8f09625c9655ed98f0cd60e483e9","url":"img/pages/getStarted/fsharechat.png"},{"revision":"175eab80e98521153b653d3268f1dc00","url":"img/pages/getStarted/gradle.svg"},{"revision":"5abf1df4ce5a91436c623b0d409bf7c0","url":"img/pages/getStarted/helm.svg"},{"revision":"e2212536e2415cce3d3937b20efd9909","url":"img/pages/getStarted/linux.svg"},{"revision":"c4378695a46f7b7c1733a922ea5f4f89","url":"img/pages/getStarted/macos.svg"},{"revision":"bd98cab87cc8e4dde0536f2e4e9416a4","url":"img/pages/getStarted/maven.svg"},{"revision":"4ec81014dbf44d7ec8d21440af4e647b","url":"img/pages/getStarted/nojre.svg"},{"revision":"9b1409167c6786ade53f630bf51477c3","url":"img/pages/getStarted/query.svg"},{"revision":"8996c9e1d21a19da4d72c147a1911fd4","url":"img/pages/getStarted/windows.svg"},{"revision":"db785ddb53392e9d9e6bd42278f1d686","url":"img/pages/index/chevron.svg"},{"revision":"e3a092b1fc0c5664a9a806e4d55459ce","url":"img/pages/index/console.svg"},{"revision":"4464228c41b83663ec6469b18c6a9d10","url":"img/pages/index/docker.svg"},{"revision":"0ebd40f009ad4a24abd1c2f1fb8576f9","url":"img/pages/index/easyToUse.svg"},{"revision":"89219a5f4bacbb19bcc52983e4c06eed","url":"img/pages/index/featureRich.svg"},{"revision":"ee8e59b00346937098b9a2ea3fddf0ab","url":"img/pages/index/foss.svg"},{"revision":"78c73ccaad2d80dd8291546a4f5f6ca0","url":"img/pages/index/mergeTime.svg"},{"revision":"860f7bf932faa5c9aa8353b48ca9e55d","url":"img/pages/index/navigateTime.svg"},{"revision":"ef2625599b925323ea84dea25ad22d22","url":"img/pages/index/pgwire.svg"},{"revision":"0258c16e4da0510f293ad74dd5a10a8f","url":"img/pages/index/rawPower.svg"},{"revision":"ab9d398fa0ffe949eb13d72826ae3743","url":"img/pages/index/searchTime.svg"},{"revision":"4879b0d653ee889619246d2cc02bd57c","url":"img/pages/index/sliceTime.svg"},{"revision":"4f33122d34cf0422e7b1e9f8239783c2","url":"img/pages/index/topEditor.svg"},{"revision":"02934339411c9a54b6d6114bb22e8511","url":"fonts/inter-latin-300.woff"},{"revision":"8af21661c832767463e617c32c24e02a","url":"fonts/inter-latin-300.woff2"},{"revision":"9a2047a5960f5c342c892f7e772fcbcf","url":"fonts/inter-latin-400.woff"},{"revision":"cc2e01425ee5b53e1d251ec125d75b2a","url":"fonts/inter-latin-400.woff2"},{"revision":"8fb2edea1e12660998dac34e7c214f72","url":"fonts/inter-latin-500.woff"},{"revision":"f0a68981773ecc69653605053f46bd4e","url":"fonts/inter-latin-500.woff2"},{"revision":"28d8188666089bee6d43dee3866b9bef","url":"fonts/inter-latin-700.woff"},{"revision":"8dd4d8fc8f3f2c5e1738f8f319212197","url":"fonts/inter-latin-700.woff2"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);