!function(){"use strict";var n,t,e,a,i=window,r=document,o=Object,l=null,s=!0,c=!1,u=" ",d="Element",f="create"+d,h="DOMTokenList",v="__defineGetter__",m="defineProperty",p="class",g="List",y=p+g,x="rel",b=x+g,w="div",C="length",E="contains",T="apply",A="HTML",M=("item "+E+" add remove toggle toString toLocaleString").split(u),D=M[2],L=M[3],N=M[4],k="prototype",P=m in o||v in o[k]||l,S=function(n,t,e,a){o[m]?o[m](n,t,{configurable:c===P?s:!!a,get:e}):n[v](t,e)},I=function(t,e){var a=this,i=[],r={},l=0,d=0,f=function(){if(l>=d)for(;d<l;++d)(function(n){S(a,n,function(){return h(),i[n]},c)})(d)},h=function(){var n,a,o=arguments,c=/\s+/;if(o[C])for(a=0;a<o[C];++a)if(c.test(o[a]))throw n=new SyntaxError('String "'+o[a]+'" '+E+" an invalid character"),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(c),""===i[0]&&(i=[]),r={},a=0;a<i[C];++a)r[i[a]]=s;l=i[C],f()};return h(),S(a,C,function(){return h(),l}),a[M[6]]=a[M[5]]=function(){return h(),i.join(u)},a.item=function(n){return h(),i[n]},a[E]=function(n){return h(),!!r[n]},a[D]=function(){h[T](a,n=arguments);for(var n,o,c=0,d=n[C];c<d;++c)o=n[c],r[o]||(i.push(o),r[o]=s);l!==i[C]&&(l=i[C]>>>0,t[e]=i.join(u),f())},a[L]=function(){h[T](a,n=arguments);for(var n,o={},c=0,d=[];c<n[C];++c)o[n[c]]=s,delete r[n[c]];for(c=0;c<i[C];++c)o[i[c]]||d.push(i[c]);i=d,l=d[C]>>>0,t[e]=i.join(u),f()},a[N]=function(t,e){return h[T](a,[t]),n!==e?e?(a[D](t),s):(a[L](t),c):r[t]?(a[L](t),c):(a[D](t),s)},function(n,t){if(t)for(var e=0;e<7;++e)t(n,M[e],{enumerable:c})}(a,o[m]),a},O=function(n,t,e){S(n[k],t,function(){var n,a=this,i=v+m+t;if(a[i])return n;if(a[i]=s,c===P){for(var o,l=O.mirror=O.mirror||r[f](w),u=l.childNodes,d=u[C],h=0;h<d;++h)if(u[h]._R===a){o=u[h];break}o||(o=l.appendChild(r[f](w))),n=I.call(o,a,e)}else n=new I(a,e);return S(a,t,function(){return n}),delete a[i],n},s)};if(i[h])t=r[f](w)[y],k=i[h][k],t[D][T](t,M),2>t[C]&&(e=k[D],a=k[L],k[D]=function(){for(var n=0,t=arguments;n<t[C];++n)e.call(this,t[n])},k[L]=function(){for(var n=0,t=arguments;n<t[C];++n)a.call(this,t[n])}),t[N](g,c)&&(k[N]=function(t,e){var a=this;return a[(e=n===e?!a[E](t):e)?D:L](t),!!e});else{if(P)try{S({},"support")}catch(n){P=c}I.polyfill=s,i[h]=I,O(i[d],y,p+"Name"),O(i[A+"Link"+d],b,x),O(i[A+"Anchor"+d],b,x),O(i[A+"Area"+d],b,x)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t){var e=n[t];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var a=0;window.requestAnimationFrame=function(n){var t=Date.now(),e=Math.max(a+16,t);return setTimeout(function(){n(a=e)},e-t)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(n){return n}(window.gn||{});gn.extend=function(){for(var n,t,e,a=arguments[0]||{},i=1,r=arguments.length;i<r;i++)if(null!==(n=arguments[i]))for(t in n)e=n[t],a!==e&&void 0!==e&&(a[t]=e);return a},gn.isInViewport=function(n){var t=n.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<document.documentElement.clientHeight&&t.left<document.documentElement.clientWidth},gn.indexOf=function(n,t){for(var e=0;e<n.length;e++)if(n[e]===t)return e;return-1},gn.getSupportedProp=function(n){for(var t=document.documentElement,e=0;e<n.length;e++)if(n[e]in t.style)return n[e]},gn.ready=function(n){if("function"==typeof n)return"complete"===document.readyState?n():void document.addEventListener("DOMContentLoaded",n,!1)},gn.isNodeList=function(n){return"undefined"!=typeof n.item},gn.append=function(n,t){var e,a=gn.isNodeList(n)?n:[n];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(e=a.length;e--;)a[e].appendChild(t);else if("string"==typeof t)for(e=a.length;e--;)a[e].insertAdjacentHTML("beforeend",t);else if(gn.isNodeList(t)){var i=document.createDocumentFragment();for(e=t.length;e--;)i.insertBefore(t[e],i.firstChild);for(var r=a.length;r--;)a[r].appendChild(i)}},gn.wrap=function(n,t){for(var e=gn.isNodeList(n)?n:[n],a=e.length;a--;){var i=a>0?t.cloneNode(!0):t,r=e[a],o=r.parentNode,l=r.nextSibling;i.appendChild(r),l?o.insertBefore(i,l):o.appendChild(i)}},gn.unwrap=function(n){for(var t=gn.isNodeList(n)?n:[n],e=t.length;e--;){for(var a=t[e],i=a.parentNode;a.firstChild;)i.insertBefore(a.firstChild,a);i.removeChild(a)}};var tns=function(){"use strict";function n(n){function i(){return"gallery"===zn||"page"===n.slideBy?Rn:n.slideBy}function f(){if(jn<=Rn){Kn=!1;var t;pt="gallery"===zn?0:at,pt!==t&&A.emit("indexChanged",xn()),dt&&c(dt),ct&&c(ct),At&&c(At)}else Kn=n.arrowKeys,ut&&u(dt),lt&&u(ct),bt&&u(At)}function p(){if(o(Wn,{"data-tns-role":"wrapper"}),o(Hn,{"data-tns-role":"content-wrapper"}),"vertical"===Fn?o(Hn,{"data-tns-hidden":"y"}):o(Wn,{"data-tns-hidden":"x"}),"carousel"===zn){var n=Xn&&_n?H():_n?_n+Un:0;Hn.style.cssText="horizontal"===Fn?"margin: 0 "+n+"px;":"padding: "+n+"px 0 "+_n+"px; height: "+j()+"px;"}}function g(){Ln=qt(),Rn=Wt(),Dn=it-Rn-yt,"horizontal"!==Fn||Xn||(tt=Ht()),Mn=Bt(),Gn=i()}function M(){if(""===Bn.id&&(Bn.id=nt),o(Bn,{"data-tns-role":"content","data-tns-mode":zn,"data-tns-axis":Fn}),Jn&&o(Bn,{"data-tns-hidden":"y"}),"carousel"===zn)if("horizontal"===Fn){var n="width: "+(tt+1)*it+"px; ",t=-pt*tt,e=m?m+": translate3d("+t+"px, 0px, 0px)":"left: "+t+"px";Bn.style.cssText+=n+e}else{var a=-Cn[pt];Bn.style.cssText+=m?m+": translate3d(0px, "+a+"px, 0px)":"top: "+a+"px"}}function D(){navigator.msMaxTouchPoints&&(Wn.classList.add("ms-touch"),h(Wn,["scroll",cn]))}function L(){for(var n=0;n<jn;n++){var t=qn[n];t.id=nt+"-item"+n,"gallery"===zn&&Ot&&t.classList.add(Ot),o(t,{"aria-hidden":"true"});var e="horizontal"===Fn?"right":"bottom",a="";"carousel"===zn&&(a="margin-"+e+": "+Un+"px;"),"horizontal"===Fn&&(a="width: "+(tt-Un)+"px; "+a),t.style.cssText+=a}if($n||_n){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),s=at;s--;){var c=s%jn,u=qn[c].cloneNode(!0);if(l(u,"id"),r.insertBefore(u,r.firstChild),"carousel"===zn){var d=qn[jn-1-c].cloneNode(!0);l(d,"id"),i.appendChild(d)}}Bn.insertBefore(i,Bn.firstChild),Bn.appendChild(r),qn=Bn.children}}function N(){lt&&(n.controlsContainer?(En=ct.children[0],Tn=ct.children[1],o(ct,{"aria-label":"Carousel Navigation"}),o(En,{"data-controls":"prev"}),o(Tn,{"data-controls":"next"}),o(ct.children,{"aria-controls":nt,tabindex:"-1"})):(gn.append(Wn,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+nt+'" type="button">'+st[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+nt+'" type="button">'+st[1]+"</button></div>"),ct=Wn.querySelector('[data-tns-role="controls"]'),En=ct.children[0],Tn=ct.children[1]))}function k(){if(ut)if(n.navContainer){o(dt,{"aria-label":"Carousel Pagination"}),An=dt.children;for(var t=An.length;t--;)o(An[t],{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":nt+"-item"+t})}else{for(var e="",a=0;a<jn;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-selected="false" aria-controls="'+nt+"-item"+a+'" type="button"></button>';e='<div data-tns-role="nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(Wn,e),dt=Wn.querySelector('[data-tns-role="nav"]'),An=dt.children;for(var i=Mn;i<jn;i++)o(An[i],{hidden:""});ft=Mn}}function P(){bt&&(At?o(At,{"data-action":"stop"}):(dt||(gn.append(Wn,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),dt=Wn.querySelector('[data-tns-role="nav"]')),gn.append(dt,'<button data-action="stop" type="button">'+Lt+Et[0]+"</button>"),At=dt.querySelector("[data-action]")),tn())}function S(){for(var n=pt;n<pt+Rn;n++){var t=qn[n];o(t,{"aria-hidden":"false"}),"gallery"===zn&&(t.style.marginLeft=tt*(n-pt)+"px",t.classList.remove(Ot),t.classList.add(St))}lt&&(o(Tn,{tabindex:"0"}),(pt===xt&&!$n||Vn)&&(En.disabled=!0)),ut&&o(An[0],{tabindex:"0","aria-selected":"true"})}function I(){if("carousel"===zn&&(b&&h(Bn,[b,V]),Nt&&h(Bn,[["touchstart",un],["touchmove",dn],["touchend",fn],["touchcancel",fn]])),ut)for(var n=0;n<jn;n++)h(An[n],[["click",nn],["keydown",sn]]);lt&&(h(En,[["click",Q],["keydown",ln]]),h(Tn,[["click",Z],["keydown",ln]])),bt&&(h(At,["click",an]),Tt&&(h(Bn,["mouseover",function(){Mt&&(en(),Dt=!0)}]),h(Bn,["mouseout",function(){!Mt&&Dt&&(tn(),Dt=!1)}]))),Kn&&h(document,["keydown",rn]),h(window,[["resize",bn],["scroll",wn]])}function O(){if(Zn&&gn.isInViewport(Bn)){for(var n=[],t=pt-1;t<pt+Rn+1;t++){for(var e=qn[t].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;n.unshift(e[a]));n.unshift()}for(var i=n.length;i--;){var o=n[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function z(){if(Jn){for(var n=[],t=pt;t<pt+Rn;t++)for(var e=qn[t].querySelectorAll("img"),a=e.length;a--;)n.push(e[a]);0===n.length?B():F(n)}}function F(n){for(var t=n.length;t--;)d(n[t])&&n.splice(t,1);0===n.length?B():setTimeout(function(){F(n)},16)}function W(){gn.wrap(Bn,Hn),gn.wrap(Hn,Wn),g(),L(),"vertical"===Fn&&q(),p(),M(),D(),N(),k(),P(),S(),I(),f(),O(),z(),A.emit("initialized",xn())}function H(){return(Ln%tt+Un)/2}function B(){for(var n,t=[],e=pt;e<pt+Rn;e++)t.push(qn[e].offsetHeight);n=Math.max.apply(null,t),Bn.style.height!==n&&(y&&X(1),Bn.style.height=n+"px")}function q(){Cn=[0];for(var n,t=qn[0].getBoundingClientRect().top,e=1;e<it;e++)n=qn[e].getBoundingClientRect().top,Cn.push(n-t)}function j(){return Cn[pt+Rn]-Cn[pt]}function R(){Wn.style.msScrollSnapPointsX="snapInterval(0%, "+tt+")"}function G(){var n,t,e,a;pt!==gt&&(pt>gt?(n=gt,t=Math.min(gt+Rn,pt),e=Math.max(gt+Rn,pt),a=pt+Rn):(n=Math.max(pt+Rn,gt),t=gt+Rn,e=pt,a=Math.min(pt+Rn,gt))),Gn%1!==0&&(n=Math.round(n),t=Math.round(t),e=Math.round(e),a=Math.round(a));for(var i=n;i<t;i++)o(qn[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(qn[r],{"aria-hidden":"false"})}function U(){ut&&(ht===-1?n.navContainer?vt=pt%jn:(vt=Math.floor(pt%jn/Rn),$n||jn%Rn===0||pt!==Dn||(vt+=1)):(vt=ht,ht=-1),vt!==mt&&(o(An[mt],{tabindex:"-1","aria-selected":"false"}),o(An[vt],{tabindex:"0","aria-selected":"true"}),mt=vt))}function _(){if(lt&&!$n){var n=[],t=[];if(pt===xt?(n.push(En),t.push(Tn),on(En,Tn)):Vn||pt!==Dn?t.push(En,Tn):(n.push(Tn),t.push(En),on(Tn,En)),n.length>0)for(var e=n.length;e--;){var a=n[e];a.disabled||(a.disabled=!0,o(a,{tabindex:"-1"}))}if(t.length>0)for(var i=t.length;i--;){var r=t[i];r.disabled&&(r.disabled=!1,o(r,{tabindex:"0"}))}}}function X(n,t){n=0===n?"":Yn/1e3+"s",t=t||Bn,t.style[y]=n,"gallery"===zn&&(t.style[w]=n),"vertical"===Fn&&(Hn.style[y]=n)}function K(n,t){y&&X(n),jt(t)}function Y(){o(Bn,{"aria-busy":"true"}),ot&&Rt(),pt!==gt&&A.emit("indexChanged",xn()),m&&A.emit("transitionStart",xn()),K(),b||V()}function V(n){if(b&&A.emit("transitionEnd",xn(n)),"gallery"===zn&&et.length>0)for(var t=0;t<Rn;t++){var e=et[t];y&&X(0,e),zt&&x&&(e.style[x]=e.style[C]=""),e.classList.remove(It),e.classList.add(Ot),e.style.marginLeft=""}if(!b||n&&"height"!==n.propertyName){if(!ot){var a=pt;Rt(),pt!==a&&(K(0),A.emit("indexChanged",xn()))}G(),U(),_(),O(),z(),l(Bn,"aria-busy"),$()}}function $(){gt=pt}function J(n){"true"!==r(Bn,"aria-busy")&&(pt+=n*Gn,Y())}function Q(){J(-1)}function Z(){J(Vn&&pt===Dn?-(Dn-xt)/Gn:1)}function nn(t){if("true"!==r(Bn,"aria-busy")){for(var e,a=t.target||t.srcElement;gn.indexOf(An,a)===-1;)a=a.parentNode;e=ht=Number(r(a,"data-nav"));var i="gallery"===zn?0:at;pt=n.navContainer?e+i:e*Rn+i,pt!==gt&&Y()}}function tn(){Nn=setInterval(function(){J(Ct)},wt),o(At,{"data-action":"stop"}),At.innerHTML=Lt+Et[1],Mt=!0}function en(){clearInterval(Nn),o(At,{"data-action":"start"}),At.innerHTML=Lt.replace("Stop","Start")+Et[0],Mt=!1}function an(){Mt?en():tn()}function rn(n){switch(n=n||window.event,n.keyCode){case T.LEFT:Q();break;case T.RIGHT:Z()}}function on(n,t){"object"==typeof n&&"object"==typeof t&&n===document.activeElement&&(n.blur(),t.focus())}function ln(n){n=n||window.event;var t=n.keyCode,e=document.activeElement;switch(t){case T.LEFT:case T.UP:case T.HOME:case T.PAGEUP:e!==En&&En.disabled!==!0&&on(e,En);break;case T.RIGHT:case T.DOWN:case T.END:case T.PAGEDOWN:e!==Tn&&Tn.disabled!==!0&&on(e,Tn);break;case T.ENTER:case T.SPACE:e===Tn?Z():Q()}}function sn(n){n=n||window.event;var t=n.keyCode,e=document.activeElement,a=r(e,"data-nav");switch(t){case T.LEFT:case T.PAGEUP:a>0&&on(e,e.previousElementSibling);break;case T.UP:case T.HOME:0!==a&&on(e,An[0]);break;case T.RIGHT:case T.PAGEDOWN:a<Mn-1&&on(e,e.nextElementSibling);break;case T.DOWN:case T.END:a<Mn-1&&on(e,An[Mn-1]);break;case T.ENTER:case T.SPACE:nn(n)}}function cn(){K(0,Bn.scrollLeft()),$()}function un(n){var t=n.changedTouches[0];kt=parseInt(t.clientX),Pt=parseInt(t.clientY);var e="horizontal"===Fn?[12,-13]:[17,-8];kn=Number(Bn.style[m].slice(e[0],e[1])),A.emit("touchStart",xn(n))}function dn(n){var t=n.changedTouches[0];if(Pn=parseInt(t.clientX)-kt,Sn=parseInt(t.clientY)-Pt,a(e(Sn,Pn),15)===Fn){In=!0,n.preventDefault(),A.emit("touchMove",xn(n));var i=0,r=0;"horizontal"===Fn?i=kn+Pn:r=kn+Sn,X(0),Bn.style[m]="translate3d("+i+"px, "+r+"px, 0px"}}function fn(n){var t=n.changedTouches[0];if(Pn=parseInt(t.clientX)-kt,Sn=parseInt(t.clientY)-Pt,A.emit("touchEnd",xn(n)),In){if(In=!1,n.preventDefault(),"horizontal"===Fn)pt=-(kn+Pn)/tt,pt=Pn>0?Math.floor(pt):Math.ceil(pt);else{var e=-(kn+Sn);if(e<=0)pt=xt;else if(e>=Cn[Cn.length-1])pt=Dn;else{var a=0;do a++,pt=Sn<0?a+1:a;while(a<it&&e>=Math.round(Cn[a+1]))}}Y()}}function hn(){Bn.style.width=(tt+1)*it+"px";for(var n=it;n--;)qn[n].style.width=tt-Un+"px"}function vn(){for(var n=pt+1,t=pt+Rn;n<t;n++)qn[n].style.marginLeft=tt*(n-pt)+"px"}function mn(){Hn.style.cssText="margin: 0px "+H()+"px"}function pn(){Hn.style.height=j()+"px"}function yn(){if(Mn!==ft)if(Mn>ft)for(var n=ft;n<Mn;n++)l(An[n],"hidden");else for(var t=Mn;t<ft;t++)o(An[t],{hidden:""});ft=Mn}function xn(n){return{container:Bn,slideItems:qn,navItems:An,prevButton:En,nextButton:Tn,items:Rn,index:pt,indexCached:gt,navCurrent:vt,navCurrentCached:mt,slideCount:jn,cloneCount:at,slideCountNew:it,event:n||{}}}function bn(){clearTimeout(On),On=setTimeout(function(){if(Ln!==qt()){var t=pt,e=Rn;g(),f(),Rt(),"horizontal"===Fn?Xn&&_n?mn():(hn(),"gallery"===zn&&vn()):(q(),pn()),pt!==t&&(A.emit("indexChanged",xn()),G(),$n||_()),Rn===e||n.navContainer||(yn(),U()),(pt!==t||"carousel"===zn&&!Xn)&&K(0),pt===t&&Rn===e&&"gallery"!==zn||(z(),O()),navigator.msMaxTouchPoints&&R()}},100)}function wn(){Ft||window.requestAnimationFrame(function(){O(),Ft=!1}),Ft=!0}if(n=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},n||{}),"object"!=typeof n.container||null===n.container)return{destory:function(){},events:A};var Cn,En,Tn,An,Mn,Dn,Ln,Nn,kn,Pn,Sn,In,On,zn=n.mode,Fn=n.axis,Wn=document.createElement("div"),Hn=document.createElement("div"),Bn=n.container,qn=Bn.children,jn=qn.length,Rn=n.items,Gn=i(),Un=n.gutter,_n="gallery"!==zn&&n.edgePadding,Xn=n.fixedWidth,Kn=n.arrowKeys,Yn=n.speed,Vn=n.rewind,$n="gallery"===zn||!n.rewind&&n.loop,Jn="gallery"===zn||n.autoHeight,Qn=!Xn&&n.responsive,Zn=n.lazyload,nt=Bn.id||t(),tt=Xn?Xn+Un:0,et=[],at=$n?2*jn:_n?1:0,it="gallery"===zn?jn+at:jn+2*at,rt=!(!Xn||$n||_n),ot="gallery"===zn||!$n,lt=n.controls,st=n.controlsText,ct=!!n.controlsContainer&&n.controlsContainer,ut=n.nav,dt=n.navContainer||!1,ft=jn,ht=-1,vt=0,mt=0,pt="gallery"===zn?0:at,gt=pt,yt=_n?1:0,xt=yt,bt=n.autoplay,wt=n.autoplayTimeout,Ct="forward"===n.autoplayDirection?1:-1,Et=n.autoplayText,Tt=n.autoplayHoverPause,At=n.autoplayButton,Mt=!1,Dt=!1,Lt="<span hidden>Stop Animation</span>",Nt=n.touch,kt=0,Pt=0,St=w?n.animateIn:"tns-fadeIn",It=w?n.animateOut:"tns-fadeOut",Ot=w?n.animateNormal:"tns-normal",zt=!!w&&n.animateDelay,Ft=!1,Wt=function(){return Xn?function(){return Math.max(1,Math.min(jn,Math.floor(Ln/Xn)))}:function(){var t=n.items,e="object"==typeof Qn&&Object.keys(Qn);if(e)for(var a=0;a<e.length;a++)Ln>=e[a]&&(t=Qn[e[a]]);return Math.max(1,Math.min(jn,t))}}(),Ht=function(){return Math.round((Ln+Un)/Rn)},Bt=function(){return n.navContainer?function(){return jn}:function(){return Math.ceil(jn/Rn)}}(),qt=function(){return"horizontal"===Fn&&!Xn&&_n?function(){return Wn.clientWidth-2*(_n+Un)}:function(){return Wn.clientWidth}}();W();var jt=function(){return"carousel"===zn?function(n){n||(n="horizontal"===Fn?-tt*pt:-Cn[pt]),rt&&pt===Dn&&(n=Math.max(n,-it*tt+Ln+Un));var t="translate3d(",e={x:[m,t,n,"px, 0px, 0px)"],y:[m,t+"0px, ",n,"px, 0px)"],l:["left","",n,"px"],t:["top","",n,"px"]},a="horizontal"===Fn?m?"x":"l":m?"y":"t";Bn.style[e[a][0]]=e[a][1]+e[a][2]+e[a][3],"vertical"===Fn&&(Hn.style.height=j()+"px")}:function(){et=[],v(qn[gt],[[b,V],[E,V]]),h(qn[pt],[[b,V],[E,V]]),function(){for(var n=gt,t=gt+Rn;n<t;n++){var e=qn[n];if(y&&X(1,e),zt&&x){var a=zt*(n-gt)/1e3;e.style[x]=a+"s",e.style[C]=a+"s"}e.classList.remove(St),e.classList.add(It),et.push(e)}}(),function(){for(var n=pt,t=pt+Rn;n<t;n++){var e=qn[n];if(y&&X(1,e),zt&&x){var a=zt*(n-pt)/1e3;e.style[x]=a+"s",e.style[C]=a+"s"}e.classList.remove(Ot),e.classList.add(St),n>pt&&(e.style.marginLeft=(n-pt)*tt+"px")}}()}}(),Rt=function(){return $n?function(){var n="carousel"===zn?Gn+xt:xt,t="carousel"===zn?Dn-Gn:Dn;if(Xn&&Ln%tt!==0&&(t-=1),pt>t)for(;pt>=n+jn;)pt-=jn;else if(pt<n)for(;pt<=t-jn;)pt+=jn}:function(){pt=Math.max(xt,Math.min(Dn,pt))}}();return{getInfo:xn,events:A,destory:function(){if(gn.unwrap(Wn),gn.unwrap(Hn),Wn=Hn=null,l(Bn,["id","style","data-tns-role","data-tns-features"]),$n)for(var t=at;t--;)qn[0].remove(),qn[qn.length-1].remove();l(qn,["id","style","aria-hidden"]),nt=jn=null,lt&&(n.controlsContainer?(l(ct,["aria-label"]),l(ct.children,["aria-controls","tabindex"]),s(ct)):(ct.remove(),ct=En=Tn=null)),ut&&(n.navContainer?(l(dt,["aria-label"]),l(An,["aria-selected","aria-controls","tabindex"]),s(dt)):(dt.remove(),dt=null),An=null),bt&&(n.navContainer||null===dt?s(At):(dt.remove(),dt=null)),s(Bn),Kn&&v(document,["keydown",rn]),v(window,[["resize",bn],["scroll",wn]])}}}function t(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(n,t){return Math.atan2(n,t)*(180/Math.PI)}function a(n,t){return Math.abs(90-Math.abs(n))>=90-t?"horizontal":Math.abs(90-Math.abs(n))<=t&&"vertical"}function i(n,t){return n.hasAttribute(t)}function r(n,t){return n.getAttribute(t)}function o(n,t){if(n=gn.isNodeList(n)||n instanceof Array?n:[n],"[object Object]"===Object.prototype.toString.call(t))for(var e=n.length;e--;)for(var a in t)n[e].setAttribute(a,t[a])}function l(n,t){n=gn.isNodeList(n)||n instanceof Array?n:[n],t=t instanceof Array?t:[t];for(var e=t.length,a=n.length;a--;)for(var i=e;i--;)n[a].removeAttribute(t[i])}function s(n){var t=n.cloneNode(!0),e=n.parentNode;e.insertBefore(t,n),n.remove(),n=null}function c(n){i(n,"hidden")||o(n,{hidden:""})}function u(n){i(n,"hidden")&&l(n,"hidden")}function d(n){return"boolean"==typeof n.complete?n.complete:"number"==typeof n.naturalWidth?0!==n.naturalWidth:void 0}function f(n){var t,e=document.createElement("fakeelement");for(t in n)if(void 0!==e.style[t])return[t,n[t][0],n[t][1]];return!1}function h(n,t){function e(t){n.addEventListener(t[0],t[1],!1)}if(Array.isArray(t))if(Array.isArray(t[0]))for(var a=t.length;a--;)e(t[a]);else e(t)}function v(n,t){function e(t){n.removeEventListener(t[0],t[1],!1)}if(Array.isArray(t))if(Array.isArray(t[0]))for(var a=t.length;a--;)e(t[a]);else e(t)}var m=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),p={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},g={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},y=f(p)[0],x=f(p)[1],b=f(p)[2],w=f(g)[0],C=f(g)[1],E=f(g)[2],T={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},A={events:{},on:function(n,t){this.events[n]=this.events[n]||[],this.events[n].push(t)},off:function(n,t){if(this.events[n])for(var e=0;e<this.events[n].length;e++)if(this.events[n][e]===t){this.events[n].splice(e,1);break}},emit:function(n,t){this.events[n]&&this.events[n].forEach(function(n){n(t)})}};return n}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
