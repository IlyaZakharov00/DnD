(()=>{var n={930:()=>{const n=(n,e)=>{let t=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("p"),a=document.createElement("div");t.appendChild(r),r.appendChild(o),o.textContent=e,t.classList.add("cards-list"),r.classList.add("board-item"),r.draggable=!0,a.classList.add("delete-box"),o.classList.add("item-content");const i=n.querySelector(".cards-list");i?i.appendChild(r):n.appendChild(t);const s=()=>{r.remove(),localStorage.clear()};r.addEventListener("mouseover",(n=>{a.classList.remove("invisible");const{height:e}=r.getBoundingClientRect();a.style.top=e/2-12+"px",a.style.right="10px",r.appendChild(a),a.addEventListener("click",s)})),r.addEventListener("mouseout",(n=>{a.removeEventListener("click",s),a.classList.add("invisible")})),r.addEventListener("dragstart",(n=>{n.target.classList.add("selected")})),r.addEventListener("dragend",(n=>{n.target.classList.remove("selected")})),r.addEventListener("dragover",(n=>{let e=document.querySelector(".nothing");e&&e.remove(),n.preventDefault();const t=document.querySelector(".selected");let r=n.target;if(t===r||!r.classList.contains("board-item"))return;let o=((n,e)=>{const t=e.getBoundingClientRect();return n<t.y+t.height/2?e:e.nextElementSibling})(n.clientY,r);document.querySelector(".cards-list").insertBefore(t,o)}))};document.addEventListener("DOMContentLoaded",(()=>{console.log("загружено");const e=document.querySelectorAll(".board-add-Control"),t=document.querySelector(".item-enter-form"),r=document.querySelector(".form-data-button");for(const n of e)n.addEventListener("click",(n=>{n.preventDefault(),n.target.parentElement.appendChild(t),t.classList.remove("invisible"),t.style.width="90%"}));r.addEventListener("click",(e=>{e.preventDefault(),t.classList.add("invisible");let r=t.querySelector(".form-data-text");const o=e.target.closest(".board");n(o,r.value),r.value="",t.remove()})),window.addEventListener("beforeunload",(()=>{let n={},e=document.querySelectorAll(".board");for(const t of e){let e=[],r=t.querySelector(".cards-list");if(r){let o=r.querySelectorAll(".item-content");if(o&&0!==r.childElementCount){for(const n of o){let t=n.textContent;e.push(t)}n[t.title]=e}}}0!==Object.keys(n).length&&localStorage.setItem("Data",JSON.stringify(n))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("Data");let t;try{t=JSON.parse(e)}catch(n){console.log(n)}t&&Object.keys(t).forEach((e=>{let r=document.querySelector(`[title="${e}"]`);t[e].forEach((e=>{n(r,e)}))}))}))},16:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),s=t(417),c=t.n(s),A=new URL(t(967),t.b),d=i()(o()),l=c()(A);d.push([n.id,`body {\n    background: #eee;\n    text-align: center;\n    width: 1000px;\n    margin: 0 auto;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.main-board {\n    display: flex;\n}\n\n.board {\n    position: relative;\n    width: 30%;\n    min-height: 40rem;\n    border-radius: 3px;\n    border: solid 1px #000;\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n    margin-right: 5px;\n}\n\n.board-header {\n    background-color: orange;\n    margin: 0;\n    padding: 15px;\n    text-align: center;\n}\n\n.board-item {\n    background-color: yellow;\n    position: relative;\n    word-break: break-all;\n    margin: 5px auto;\n    padding: 5px;\n    width: 90%;\n    min-height: 40px;\n    border: solid 1px #000;\n    z-index: 1;\n\n}\n\n.dragged {\n    border-radius: 10px;\n    position: absolute;\n    z-index: 999;\n    pointer-events: auto;\n    background: #fff;\n    cursor: grabbing;\n    left: 3%\n}\n\n.selected {\n    opacity: 0.6;\n}\n\n.Item-Content {\n    z-index: -1;\n}\n\n.board-add-Control {\n    position: absolute;\n    font-size: 1.1em;\n    bottom: 1rem;\n    cursor: pointer;\n}\n\n.invisible {\n    display: none;\n}\n\n.item-enter-form {\n    position: absolute;\n    bottom: 4rem;\n    left: 0.5rem;\n}\n\n.form-data-text {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    min-height: 2rem;\n}\n\n.form-data-button {\n    background-color: rgb(5, 172, 255);\n    cursor: pointer;\n}\n\n.errormsg {\n    color: #f00;\n}\n\n.successmsg {\n    color: #0c0;\n}\n\n.delete-box {\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: contain;\n    box-sizing: border-box;\n    background-position: center;\n    background-color: gray;\n    width: 1.5rem;\n    height: 1.5rem;\n    position: absolute;\n    z-index: 999;\n}\n\n.cards-list {\n    list-style: none;\n    padding: 0;\n}`,"",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAAA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,sBAAsB;IACtB,UAAU;;AAEd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yDAAmD;IACnD,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd",sourcesContent:['body {\r\n    background: #eee;\r\n    text-align: center;\r\n    width: 1000px;\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.main-board {\r\n    display: flex;\r\n}\r\n\r\n.board {\r\n    position: relative;\r\n    width: 30%;\r\n    min-height: 40rem;\r\n    border-radius: 3px;\r\n    border: solid 1px #000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 16px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.board-header {\r\n    background-color: orange;\r\n    margin: 0;\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.board-item {\r\n    background-color: yellow;\r\n    position: relative;\r\n    word-break: break-all;\r\n    margin: 5px auto;\r\n    padding: 5px;\r\n    width: 90%;\r\n    min-height: 40px;\r\n    border: solid 1px #000;\r\n    z-index: 1;\r\n\r\n}\r\n\r\n.dragged {\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    z-index: 999;\r\n    pointer-events: auto;\r\n    background: #fff;\r\n    cursor: grabbing;\r\n    left: 3%\r\n}\r\n\r\n.selected {\r\n    opacity: 0.6;\r\n}\r\n\r\n.Item-Content {\r\n    z-index: -1;\r\n}\r\n\r\n.board-add-Control {\r\n    position: absolute;\r\n    font-size: 1.1em;\r\n    bottom: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.item-enter-form {\r\n    position: absolute;\r\n    bottom: 4rem;\r\n    left: 0.5rem;\r\n}\r\n\r\n.form-data-text {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 2rem;\r\n}\r\n\r\n.form-data-button {\r\n    background-color: rgb(5, 172, 255);\r\n    cursor: pointer;\r\n}\r\n\r\n.errormsg {\r\n    color: #f00;\r\n}\r\n\r\n.successmsg {\r\n    color: #0c0;\r\n}\r\n\r\n.delete-box {\r\n    background-image: url("../img/delete_sign-512.png");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    box-sizing: border-box;\r\n    background-position: center;\r\n    background-color: gray;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    position: absolute;\r\n    z-index: 999;\r\n}\r\n\r\n.cards-list {\r\n    list-style: none;\r\n    padding: 0;\r\n}'],sourceRoot:""}]);const u=d},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=r.base?c[0]+r.base:c[0],d=a[A]||0,l="".concat(A," ").concat(d);a[A]=d+1;var u=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},967:(n,e,t)=>{"use strict";n.exports=t.p+"cebd1e89fb0951b00bc2.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),A=t(540),d=t.n(A),l=t(113),u=t.n(l),p=t(16),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(p.A,g),p.A&&p.A.locals&&p.A.locals,t(930)})()})();
//# sourceMappingURL=main.js.map