if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>a(e,n),r={module:{uri:n},exports:t,require:o};s[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EyB1oAvVA90ioH4Fa-rWZ/_buildManifest.js",revision:"0f7e55e93cfe9410c8b738f28f577fa7"},{url:"/_next/static/EyB1oAvVA90ioH4Fa-rWZ/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/EyB1oAvVA90ioH4Fa-rWZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"fc97f3f1282ce3ed"},{url:"/_next/static/chunks/main-c5918b9a126c194f.js",revision:"c5918b9a126c194f"},{url:"/_next/static/chunks/pages/404-6438463be33f3e25.js",revision:"6438463be33f3e25"},{url:"/_next/static/chunks/pages/_app-ad2079da7c49415f.js",revision:"ad2079da7c49415f"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/all-projects-4b70efdda2111b49.js",revision:"4b70efdda2111b49"},{url:"/_next/static/chunks/pages/faq-03b9e206cfe8b724.js",revision:"03b9e206cfe8b724"},{url:"/_next/static/chunks/pages/index-4a2c7fa2ddae86e7.js",revision:"4a2c7fa2ddae86e7"},{url:"/_next/static/chunks/pages/projects/%5Bslug%5D-bae115c37f434655.js",revision:"bae115c37f434655"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-fd82975a6094609f.js",revision:"fd82975a6094609f"},{url:"/_next/static/css/90c8cb40fc8d6694.css",revision:"90c8cb40fc8d6694"},{url:"/assets/004.jpg",revision:"9bcc72e2a501a245065d39fe09f94338"},{url:"/assets/FA.svg",revision:"35182156143e4497566fa81341103f32"},{url:"/assets/img/bg-cta.jpg",revision:"01584a6480aaa0d571bd9fcfbe6f5a74"},{url:"/assets/img/bg-hero.jpg",revision:"02748e7923d2ebf402c08cfe5ac8cb44"},{url:"/assets/img/blog-author.jpg",revision:"3fdf8ed85e1ebfad6d3c5eadb80265ed"},{url:"/assets/img/experience-figure.png",revision:"903a9c442b443ebc667c7c5909c8beb7"},{url:"/assets/img/favicon.png",revision:"81094d59cbf688fb8020904e38002605"},{url:"/assets/img/icon-award.svg",revision:"9731cfa5cb2db97497d788a0ceacf656"},{url:"/assets/img/icon-close.svg",revision:"ff047e09bff0e5fb86d34e848fbd2daf"},{url:"/assets/img/icon-content-black.svg",revision:"1946ee4791c91402201e4595e63af508"},{url:"/assets/img/icon-content-white.svg",revision:"ad2818ece540ad3f27e32fe90ca288a9"},{url:"/assets/img/icon-design-black.svg",revision:"40de32acb8eced037453fa77d74bb794"},{url:"/assets/img/icon-design-white.svg",revision:"0cf2a32cb18b87d1dea6c39cc8d54724"},{url:"/assets/img/icon-development-black.svg",revision:"d6dad6f62da6019ab3dd36790517804a"},{url:"/assets/img/icon-development-white.svg",revision:"ddd133907ba48a45da0438665482b2ba"},{url:"/assets/img/icon-email-black.svg",revision:"de1a4199e4c144423511c4281f8f3470"},{url:"/assets/img/icon-email-white.svg",revision:"f23ff13302ee53724f489af02e3e4557"},{url:"/assets/img/icon-graphics-black.svg",revision:"b14b42e20d5d3bd99812a091135ada03"},{url:"/assets/img/icon-graphics-white.svg",revision:"f5bf4bb488326d5f30f873c4b6d24b25"},{url:"/assets/img/icon-happy.svg",revision:"b072788f2176a6e8f3ddfdcbfe4068b6"},{url:"/assets/img/icon-mobile-black.svg",revision:"3dc7e1c8c696ab1d2e17c433145a2c4b"},{url:"/assets/img/icon-mobile-white.svg",revision:"c0822ee3e8c320dd1b802129581aa66c"},{url:"/assets/img/icon-project.svg",revision:"e318f202c1aa10aca6a08b5873eb42c6"},{url:"/assets/img/icon-puzzle.svg",revision:"3417dd98ec9cf7ebfd8693d08be086f7"},{url:"/assets/img/icon-woo.png",revision:"8d268eea8528bd3dda3d09880c5b9cc5"},{url:"/assets/img/icon-wp.png",revision:"d189c305d2911104bf890670637fe9d3"},{url:"/assets/img/logo-amazon.svg",revision:"dde824b2af09d4017ac73987bac4a30e"},{url:"/assets/img/logo-apple.svg",revision:"e60eb451459aaee4eecaa4e1aca97b7b"},{url:"/assets/img/logo-coca-cola.svg",revision:"802d52deb9c42f36656126a266eb66de"},{url:"/assets/img/logo-fedex.svg",revision:"685ab89e0848e61bdd3bc9f0159f104e"},{url:"/assets/img/logo-interativa.png",revision:"40de419d1a3712dd03ca0a053f7aa187"},{url:"/assets/img/logo-microsoft.svg",revision:"144f9f0eda71e4021c4bb14fb8feb694"},{url:"/assets/img/logo-netflix.svg",revision:"a072c6701eadb3a9781e9536be9c1edf"},{url:"/assets/img/logo-spotify.svg",revision:"3097083dd8c4e52e172ebbac99363e22"},{url:"/assets/img/logo-stripe.svg",revision:"d77f56da7f08b4c80e364dc3e7731be8"},{url:"/assets/img/logo.svg",revision:"2eafe61c2b0bb0e309b24fd932c207c1"},{url:"/assets/img/map.png",revision:"4701f6b0f8e06f56870f0fc3709b912b"},{url:"/assets/img/portfolio-apple.jpeg",revision:"344cf569569ce8c54fa61ff12884d7b5"},{url:"/assets/img/portfolio-fedex.jpeg",revision:"95a6aa56929e018c06a638920b010e91"},{url:"/assets/img/portfolio-microsoft.jpeg",revision:"ffe3040badeb660f70d46cf77ef883e0"},{url:"/assets/img/portfolio-stripe.jpeg",revision:"a8efb44df37f3d4ad6298c985c50cc03"},{url:"/assets/img/post-01.png",revision:"54762368cfe7c4295906a005fbcd4b5b"},{url:"/assets/img/post-02.png",revision:"3e6afac0e0c7806d699e7f49c386883c"},{url:"/assets/img/post-03.png",revision:"9fc0853ffc798489832cadfb36b5dfd0"},{url:"/assets/img/social.jpg",revision:"72eef323cea599b30047769811691d97"},{url:"/assets/js/main.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/assets/logo-cna.svg",revision:"37449ed4f9b7b0e8e3370fac32303c42"},{url:"/assets/logo.svg",revision:"2960d83a5b012c165931d2897727b598"},{url:"/assets/programming.svg",revision:"ac6a41a570245dd8ba794f2d36144149"},{url:"/assets/projects/dev-finances/inicio.png",revision:"7f0bb03950a73830526bbed83ef54e27"},{url:"/assets/projects/happy/Home.svg",revision:"49a352a2601d2e8cdc0ae2f4377c6e6e"},{url:"/assets/projects/happy/Mapa.svg",revision:"8077a68b6b1f00116e836478acd4e985"},{url:"/assets/projects/happy/Mapa_hover.svg",revision:"cb7d3d97173d8f968bd869b38c907c89"},{url:"/assets/projects/happy/Perfil.png",revision:"290f808dfaf5296fd060d3ddf3f08c15"},{url:"/assets/projects/ig-news/Home.png",revision:"47f4dc7492656524041d497c2d6c7441"},{url:"/assets/projects/ig-news/InternadePost.png",revision:"c5fd7c9d17b7566691f18c63e7b7bbae"},{url:"/assets/projects/ig-news/InternadePost_n_logado.png",revision:"395d95cff3297cdf9acf33c748513313"},{url:"/assets/projects/ig-news/Posts.png",revision:"3cd197028ef644aa58ea5ecf198e9928"},{url:"/assets/projects/let-me-ask/Página_inicial-let-me-ask.svg",revision:"b93c21ae4781283e415649597acc73d0"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state-let-me-ask.svg",revision:"ee218ca9777aad576ca19abfccfd2c59"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Empty_state1-let-me-ask.svg",revision:"dc8fa6a33bd18ef7d1720560a884f3df"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Pergunta_em_destaque-let-me-ask.svg",revision:"3a41f49f22581e6831fb0eb346fdb770"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas-let-me-ask.svg",revision:"befbbea4ed93f3c4258c73abaf0adefc"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Perguntas_1-let-me-ask.svg",revision:"d7c665d03e3cc1ed6f85705f0df715f5"},{url:"/assets/projects/let-me-ask/Sala_React_Q&A_Usuário_logado-let-me-ask.svg",revision:"38881d80485a341fffc2eed841727c86"},{url:"/assets/projects/move-it/Compartilhar.png",revision:"0dad0640e619ef70edda506bd216fe62"},{url:"/assets/projects/move-it/Home.png",revision:"a5fe4b63f73011a99d9ae6c880d6508b"},{url:"/assets/projects/move-it/Home_ciclo_encerrado.png",revision:"a3f7986249d86dea0595ea9fefa8a570"},{url:"/assets/projects/move-it/Home_ciclo_iniciado.png",revision:"fbe4eeff8f84c8d69f2131dc53f8eff4"},{url:"/assets/udemy.jpg",revision:"c6248ca18fd0c91190a20b37f518d924"},{url:"/downloads/curriculo-Fillipe-Augusto.pdf",revision:"5fa1328d307c7e81763b9abbf86a5c29"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/hero.png",revision:"5c2970d05a094bcb36beef08bde3bc5c"},{url:"/icon-1024x1024.png",revision:"86f29c16e45d7c0efdfa37659efb1607"},{url:"/icon-128x128.png",revision:"fcd4fc1e0e293a02efe4e7728c28f010"},{url:"/icon-256x256.png",revision:"2367de8e6f4ea0ff966c0556fbf6a2bf"},{url:"/icon-512x512.png",revision:"ed6f7ae023751ab22d9ac181be532cb2"},{url:"/manifest.json",revision:"3602762247cf1f596a3cfb224dd8c92b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
