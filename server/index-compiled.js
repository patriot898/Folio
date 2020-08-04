!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-bootstrap/Modal")},function(e,t){e.exports=require("react-bootstrap/ProgressBar")},function(e,t){e.exports=require("react-bootstrap/Carousel")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-bootstrap/Button")},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(5),o=a.n(i),l=a(6),s=a.n(l),c=a(10),m=a.n(c),u=a(0),p=a.n(u),d=a(7),f=a.n(d);function g(e){var t=e.handleClose,a=e.active;return p.a.createElement("div",{className:"mobile-menu ".concat(a?"active":"")},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"close-mobile-menu",onClick:t},"x"),p.a.createElement("nav",{className:"mobile-nav"},p.a.createElement("ul",null,p.a.createElement("li",null,p.a.createElement("a",{href:"#bio",onClick:t},"Hello")),p.a.createElement("li",null,p.a.createElement("a",{href:"#resume",onClick:t},"Resume")),p.a.createElement("li",null,p.a.createElement("a",{href:"#projects",onClick:t},"Portfolio"))))))}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(){var e=h(Object(u.useState)(!1),2),t=e[0],a=e[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(g,{handleClose:function(){return a(!1)},active:t}),p.a.createElement("div",{className:"fixed-menu"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"menu-container"},p.a.createElement("span",{className:"fa fa-bars",onClick:function(){return a(!0)}}),p.a.createElement("nav",{className:"menu-nav"},p.a.createElement("ul",{className:"nav-options"},p.a.createElement("li",null,p.a.createElement("a",{href:"#bio"},"Hello")),p.a.createElement("li",null,p.a.createElement("a",{href:"#resume"},"Resume")),p.a.createElement("li",null,p.a.createElement("a",{href:"#projects"},"Portfolio"))))))))}function w(){return p.a.createElement("div",{className:"social-bar"},p.a.createElement("a",{href:"https://github.com/patriot898",className:"fa fa-github"}),p.a.createElement("a",{href:"https://www.linkedin.com/in/kiefer-ragay/",className:"fa fa-linkedin-square"}),p.a.createElement("a",{href:"https://www.facebook.com/kiefer.ragay",className:"fa fa-facebook-square"}))}var b=function(){return p.a.createElement("header",{id:"main-header"},p.a.createElement("div",{id:"top-section",className:"container"},p.a.createElement("div",{id:"avatar-container"},p.a.createElement("picture",null,p.a.createElement("source",{srcSet:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/headshot-avatar-bw.webp",type:"image/webp"}),p.a.createElement("source",{srcSet:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/headshot-avatar-bw.jpg",type:"image/jpeg"}),p.a.createElement("img",{id:"avatar-image",src:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/headshot-avatar-bw.jpg",alt:"kiefer-ragay"}))),p.a.createElement("div",{id:"contact-container"},p.a.createElement("p",{className:"personal-name"},"Kiefer Ragay"),p.a.createElement("p",{className:"personal-job"},"full stack software engineer"),p.a.createElement("dl",{className:"contact-table"},p.a.createElement("dt",{className:"contact-term"},"AGE:"),p.a.createElement("dd",{className:"contact-value"},"28"),p.a.createElement("dt",{className:"contact-term"},"PHONE:"),p.a.createElement("dd",{className:"contact-value"},"+1 (315) 274-2860"),p.a.createElement("dt",{className:"contact-term"},"EMAIL:"),p.a.createElement("dd",{className:"contact-value"},"kiefer.m.ragay@gmail.com"),p.a.createElement("dt",{className:"contact-term"},"LOCATION:"),p.a.createElement("dd",{className:"contact-value"},"San Francisco, CA")),p.a.createElement(w,null))))},y=a(8),k=a.n(y);function N(){return p.a.createElement(k.a,{href:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/resume.pdf",download:"resume-kiefer-ragay.pdf",variant:"download",size:"large"},p.a.createElement("div",null,p.a.createElement("span",{className:"svg-container"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-download hover-download",width:"20",height:"20",viewBox:"0 0 28 28",strokeWidth:"3",stroke:"#FFFFFF",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),p.a.createElement("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),p.a.createElement("polyline",{points:"7 11 12 16 17 11"}),p.a.createElement("line",{x1:"12",y1:"4",x2:"12",y2:"16"}))),p.a.createElement("span",{className:"download-text"},"DOWNLOAD RESUME")))}function j(){return p.a.createElement("section",{id:"bio",className:"white-section container"},p.a.createElement("h2",{id:"bio-header",className:"section-title title-text"},"Hello"),p.a.createElement("p",{className:"general-text"},"I am an Army Signal Corps Veteran turned Full Stack Software Engineer. I love developing robust and modern web and mobile applications while translating design and theory to practice. My past experience as a military officer imbued me with the communication and management skills absolutely essential to be an effective leader and team player. "),p.a.createElement(N,null))}var S=a(3),x=a.n(S);function z(e){for(var t=e.skills,a=[],n=[],r=0;r<=Math.ceil(t.length/2-1);r+=1)a.push(t[r]);for(var i=Math.ceil(t.length/2);i<t.length;i+=1)n.push(t[i]);return p.a.createElement("div",{className:"skillbox"},p.a.createElement("div",{className:"skill-column"},a.map((function(e,t){return p.a.createElement("div",{key:t},p.a.createElement("p",{className:"skill-name"},p.a.createElement("span",null,e.name),p.a.createElement("span",{className:"right"},e.level,"%")),p.a.createElement(x.a,{now:e.level}))}))),p.a.createElement("div",{className:"skill-column"},n.map((function(e,t){return p.a.createElement("div",{key:t},p.a.createElement("p",{className:"skill-name"},p.a.createElement("span",null,e.name),p.a.createElement("span",{className:"right"},e.level,"%")),p.a.createElement(x.a,{now:e.level}))}))))}var C=function(e,t,a){var n="resume-block";return a&&(n+=" last-block"),p.a.createElement("div",{className:n,key:t},p.a.createElement("p",{className:"resume-entry-title"},e.title),p.a.createElement("p",{className:"resume-entry-date"},e.date),p.a.createElement("p",null,e.description))};function I(e){for(var t=e.timeline,a=e.title,n=[],r=t[t.length-1],i=0;i<t.length-1;i+=1)n.push(t[i]);return p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",{className:"title-text small-title"},a),n.map((function(e,t){return C(e,t,!1)})),C(r,n.length,!0))}var A={skills:[{name:"JavaScript / Node.js",level:90},{name:"React",level:90},{name:"HTML5 / CSS3",level:80},{name:"Docker",level:70},{name:"MySQL",level:70},{name:"MongoDB",level:70},{name:"Git",level:80},{name:"Amazon Web Services",level:70},{name:"Adobe Lightroom / Illustrator",level:60}],educationTimeline:[{title:"Hack Reactor, San Francisco, California",date:"2020",description:"Full Stack Software Engineering Immersive"},{title:"United States Military Academy, West Point, New York",date:"2010 - 2014",description:"Bachelor of Science, Electrical Engineering"}],experienceTimeline:[{title:"Imgur",date:"2019",description:"Sales & Marketing Intern"},{title:"United States Army",date:"2014 - 2019",description:"Signal Officer"}]};function O(){return p.a.createElement("section",{className:"white-section container",id:"resume"},p.a.createElement("h2",{className:"section-title title-text"},"Resume"),p.a.createElement("p",{className:"general-text"},"Since childhood, I've always wanted to be an engineer. Before enrolling in a military academy to secure an engineering degree, I had no clue how oriented the role as an officer would be to project management and leadership! Following my honorable separation from the military, I chose to continue my pursuit to become an engineer and build functional applications and websites with just a laptop and an internet connection...and I love it!"),p.a.createElement("div",{className:"timelines-container"},p.a.createElement(I,{title:"Education",timeline:A.educationTimeline}),p.a.createElement(I,{title:"Work Experience",timeline:A.experienceTimeline}),p.a.createElement("h3",{className:"title-text small-title"},"Skills")),p.a.createElement(z,{skills:A.skills}))}var F=a(2),M=a.n(F),P=a(4),q=a.n(P);function T(e){var t=e.images;return p.a.createElement(q.a,{interval:7e3,className:"bottom-marg"},t.map((function(e,t){return function(e,t){return p.a.createElement(q.a.Item,{key:t},p.a.createElement("picture",null,p.a.createElement("source",{srcSet:e.webp,type:"image/webp",className:"modal-image"}),p.a.createElement("source",{srcSet:e.jpeg,type:"image/jpeg",className:"modal-image"}),p.a.createElement("img",{src:e.jpeg,className:"modal-image",alt:e.alt})))}(e,t)})))}function D(e){var t=e.project,a=e.show,n=e.handleClose;return p.a.createElement(M.a,{show:a,onHide:n,size:"lg"},p.a.createElement(M.a.Header,{closeButton:!0}),p.a.createElement(M.a.Body,null,p.a.createElement("p",{className:"modal-title"},t.title),p.a.createElement(T,{images:t.carouselImages}),p.a.createElement("p",{className:"project-description"},t.longDescription),p.a.createElement("div",{className:"modal-link-wrapper"},p.a.createElement("a",{href:t.hyperlink,className:"link"},t.shortlink)),p.a.createElement("div",{className:"modal-tech"},p.a.createElement("p",{className:"project-tech"},"Tech Used:"),p.a.createElement("ul",{className:"tags"},t.tech.map((function(e,t){return p.a.createElement("li",{key:t},e)}))))))}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function H(e){var t=e.project,a=R(Object(u.useState)(!1),2),n=a[0],r=a[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"project-card",onClick:function(){return r(!0)}},p.a.createElement("div",{className:"card-image-container"},p.a.createElement("picture",null,p.a.createElement("source",{srcSet:t.image.webp,type:"image/webp",className:"card-image"}),p.a.createElement("source",{srcSet:t.image.jpeg,type:"image/jpeg",className:"card-image"}),p.a.createElement("img",{src:t.image.jpeg,className:"card-image",alt:t.image.alt}))),p.a.createElement("div",{className:"project-info-container"},p.a.createElement("p",{className:"project-title"},t.title),p.a.createElement("p",{className:"project-description"},t.shortDescription),p.a.createElement("p",{className:"project-tech"},"Tech Used:"),p.a.createElement("ul",{className:"tags"},t.tech.map((function(e,t){return p.a.createElement("li",{key:t},e)}))),p.a.createElement("span",{className:"card-link-wrapper"},p.a.createElement("a",{href:t.hyperlink,className:"link"},t.shortlink)))),p.a.createElement(D,{project:t,show:n,handleClose:function(){return r(!1)}}))}var U=[{title:"PlateThis Reservation Calendar",image:{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.png",alt:"reservation calendar"},carouselImages:[{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/Reservation+Calendar.png",alt:"reservation calendar"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/reservation2.png",alt:"reservation calendar"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/res-cal-formatted.gif",alt:"reservation calendar gif"}],shortDescription:"A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability.",longDescription:"A simple, modern reservation calendar made for a restaurant reservation website built using the microservice architecture for simplified deployability and maintainability. Uses a custom-built date management library similar to Moment.js for greater control over date parsing and formatting. Easily deployable to AWS or similar cloud hosting services through Docker containerization. Uses GZIP text compression and Server-Side Rendering for optimal content delivery and SEO best practices.",tech:["React","Node.js","Docker","Express","MongoDB","jQuery","Styled Components","Webpack"],hyperlink:"",shortlink:"www.github.com"},{title:"Imgur Client Sales Stickers",image:{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/imgur-giraffe.png",alt:"imgur giraffe sticker"},carouselImages:[{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/giraffe.png",alt:"mcdonalds imgur giraffe sticker"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/disney.png",alt:"disney imgur sticker"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/ihop.png",alt:"ihop imgur sticker"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/jack.png",alt:"jack in the box imgur sticker"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/kfc.png",alt:"kentucky fried chicken imgur sticker"},{webp:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.webp",jpeg:"https://folio-pics-kmr.s3-us-west-1.amazonaws.com/link.png",alt:"legend of zelda link imgur sticker"}],shortDescription:"A collection of fun and goofy stickers created for sales representatives used to build rapport with current and prospective clients as a sales and marketing fellow with Imgur.",longDescription:'A collection of goofy stickers created for sales representatives to give to current and prospective clients during the fellowship with Imgur. Each sticker represents an "Imgurized" version of a brand\'s mascot. Brand images were converted to vectors using the image trace functionality through Adobe Illustrator before the incorporation of Imgur brand assets, then exported to Sticker Mule for printing as die cut stickers. These stickers assisted Imgur sales reps in building rapport with clients and closing sales! \n \n **Stickers are not for resale or personal financial gain.',tech:["Adobe Illustrator"],hyperlink:"",shortlink:""}];function W(){return p.a.createElement("section",{className:"white-section container",id:"projects"},p.a.createElement("h2",{className:"section-title title-text"},"Projects"),U.map((function(e,t){return p.a.createElement(H,{project:e,key:t})})))}var L=function(){return p.a.createElement("div",null,p.a.createElement(E,null),p.a.createElement(b,null),p.a.createElement(j,null),p.a.createElement("hr",null),p.a.createElement(O,null),p.a.createElement(W,null))},_=r()(),G=f.a.renderToString(p.a.createElement(L,null)),Q="/Users/kieferragay/Documents/Personal_Projects/Folio/client/public",V=o.a.resolve(Q,"index.html");_.use(r.a.urlencoded({extended:!0})),_.use(r.a.json()),_.use("/",m()(Q)),_.listen(3e3,(function(){console.log("Connected and listening on ".concat(3e3,"!"))})),_.get("/",(function(e,t){s.a.readFile(V,"utf8",(function(e,a){return e?(console.error("Something went wrong: ",e),t.status(500).send("Oops, better luck next time!")):t.send(a.replace('<div id="app"></div>','<div id="app">'.concat(G,"</div")))}))}))},function(e,t,a){let n=a(6),r=a(11),i=a(12).sanitizeOptions,o=a(13).findEncoding,l=r.mime;e.exports=function(e,t){let a=i(t),s=r(e,a.serveStatic||null),c=[],m={};return function(){if(a.customCompressions&&a.customCompressions.length>0)for(var e=0;e<a.customCompressions.length;e++){var t=a.customCompressions[e];d(t.encodingName,t.fileExtension)}a.enableBrotli&&d("br","br");d("gzip","gz")}(),function(){c.length>0&&function e(t){if(!n.existsSync(t))return;for(var a=n.readdirSync(t),r=0;r<a.length;r++){var i=t+"/"+a[r];n.statSync(i).isDirectory()?e(i):u(a[r],i)}}(e)}(),function(e,t,n){!function(e){a.index&&e.url.endsWith("/")&&(e.url+=a.index)}(e);var r=e.header("accept-encoding"),i=m[decodeURIComponent(e.path)];if(i){t.setHeader("Vary","Accept-Encoding");var c=o(r,i.compressions,a.orderPreference);c&&function(e,t,a){var n=l.lookup(e.path),r=l.charsets.lookup(n),i=e.url.split("?").splice(1).join("?");""!==i&&(i="?"+i);e.url=e.path+a.fileExtension+i,t.setHeader("Content-Encoding",a.encodingName),t.setHeader("Content-Type",n+(r?"; charset="+r:""))}(e,t,c)}s(e,t,n)};function u(e,t){for(var a=0;a<c.length;a++)if(e.endsWith(c[a].fileExtension))return void p(t,c[a])}function p(t,a){var n=t.replace(e,"").replace(a.fileExtension,""),r=m[n];r?r.compressions.push(a):m[n]={compressions:[a]}}function d(e,t){(function(e){for(var t=0;t<c.length;t++)if(c[t].encodingName===e)return c[t];return null})(e)||c.push(new f(e,t))}function f(e,t){this.encodingName=e,this.fileExtension="."+t}}},function(e,t){e.exports=require("serve-static")},function(e,t){function a(e,t){void 0!==e.serveStatic&&(t.serveStatic=e.serveStatic),function(e,t){var a=["cacheControl","dotfiles","etag","extensions","index","fallthrough","immutable","lastModified","maxAge","redirect","setHeaders"];for(var r in a){var i=a[r];void 0===e[i]||t.serveStatic&&void 0!==t.serveStatic[i]||n(t,i,e[i])}}(e,t)}function n(e,t,a){"object"!=typeof e.serveStatic&&(e.serveStatic={}),e.serveStatic[t]=a}function r(e){return void 0===e.indexFromEmptyFile&&void 0!==e.index?e.index:void 0===e.index&&void 0!==e.indexFromEmptyFile?e.indexFromEmptyFile:"index.html"}e.exports={sanitizeOptions:function(e){let t={index:r(e=e||{})};void 0!==e.enableBrotli&&(t.enableBrotli=!!e.enableBrotli);"object"==typeof e.customCompressions&&(t.customCompressions=e.customCompressions);"object"==typeof e.orderPreference&&(t.orderPreference=e.orderPreference);return a(e,t),t}}},function(e,t){e.exports={findEncoding:function(e,t,a){if(e){let n=e.split(",").map(e=>function(e){let t=e.split(";");try{if(t.length>1){const e=t[1].trim().match(/q=(.*)/)[1];return{name:t[0].trim(),q:parseFloat(e)}}}catch(e){}return{name:t[0].trim(),q:1}}(e)).sort((e,t)=>t.q-e.q).filter(e=>e.q>0).map(e=>e.name);return n=function(e,t){if(!t||0===t.length)return e;for(let a=t.length;a>=0;a--){let n=t[a],r=e.indexOf(n);r>=0&&(e.splice(r,1),e.splice(0,0,n))}return e}(n,a),function(e,t){for(const a of e){if("identity"===a)return null;for(let e=0;e<t.length;e++)if("*"===a||a===t[e].encodingName)return t[e]}return null}(n,t)}return null}}}]);