var tns=function(){"use strict";function t(t){function i(){return"gallery"===zt||"page"===t.slideBy?Rt:t.slideBy}function f(){if(Gt<=Rt){Xt=!1;var n;pn="gallery"===zt?0:nn,pn!==n&&M.emit("indexChanged",yt()),un&&c(un),sn&&c(sn),Mn&&c(Mn)}else Xt=t.arrowKeys,cn&&u(un),on&&u(sn),bn&&u(Mn)}function m(){if(o(St,{"data-tns-role":"wrapper"}),o(Wt,{"data-tns-role":"content-wrapper"}),"vertical"===Ot?o(Wt,{"data-tns-hidden":"y"}):o(St,{"data-tns-hidden":"x"}),"carousel"===zt){var t=Ut&&Ft?B():Ft?Ft+qt:0;Wt.style.cssText="horizontal"===Ot?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Ft+"px; height: "+j()+"px;"}}function y(){At=Rn(),Rt=Hn(),Mt=en-Rt-yn,"horizontal"!==Ot||Ut||(_t=Bn()),Ct=Gn(),jt=i()}function A(){if(""===Ht.id&&(Ht.id=$t),o(Ht,{"data-tns-role":"content","data-tns-mode":zt,"data-tns-axis":Ot}),Jt&&o(Ht,{"data-tns-hidden":"y"}),"carousel"===zt)if("horizontal"===Ot){var t="width: "+(_t+1)*en+"px; ",n=-pn*_t,e=p?p+": translate3d("+n+"px, 0px, 0px)":"left: "+n+"px";Ht.style.cssText+=t+e}else{var a=-bt[pn];Ht.style.cssText+=p?p+": translate3d(0px, "+a+"px, 0px)":"top: "+a+"px"}}function D(){navigator.msMaxTouchPoints&&(St.classList.add("ms-touch"),h(St,["scroll",st]))}function k(){for(var t=0;t<Gt;t++){var n=Bt[t];n.id=$t+"-item"+t,"gallery"===zt&&On&&n.classList.add(On),o(n,{"aria-hidden":"true"});var e="horizontal"===Ot?"right":"bottom",a="";"carousel"===zt&&(a="margin-"+e+": "+qt+"px;"),"horizontal"===Ot&&(a="width: "+(_t-qt)+"px; "+a),n.style.cssText+=a}if(Vt||Ft){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),s=nn;s--;){var c=s%Gt,u=Bt[c].cloneNode(!0);if(l(u,"id"),r.insertBefore(u,r.firstChild),"carousel"===zt){var d=Bt[Gt-1-c].cloneNode(!0);l(d,"id"),i.appendChild(d)}}Ht.insertBefore(i,Ht.firstChild),Ht.appendChild(r),Bt=Ht.children}}function L(){on&&(t.controlsContainer?(wt=sn.children[0],Et=sn.children[1],o(sn,{"aria-label":"Carousel Navigation"}),o(wt,{"data-controls":"prev"}),o(Et,{"data-controls":"next"}),o(sn.children,{"aria-controls":$t,tabindex:"-1"})):(gn.append(St,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+$t+'" type="button">'+ln[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+$t+'" type="button">'+ln[1]+"</button></div>"),sn=St.querySelector('[data-tns-role="controls"]'),wt=sn.children[0],Et=sn.children[1]))}function N(){if(cn)if(t.navContainer){o(un,{"aria-label":"Carousel Pagination"}),Tt=un.children;for(var n=Tt.length;n--;)o(Tt[n],{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":$t+"-item"+n})}else{for(var e="",a=0;a<Gt;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-selected="false" aria-controls="'+$t+"-item"+a+'" type="button"></button>';e='<div data-tns-role="nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(St,e),un=St.querySelector('[data-tns-role="nav"]'),Tt=un.children;for(var i=Ct;i<Gt;i++)o(Tt[i],{hidden:""});dn=Ct}}function P(){bn&&(Mn?o(Mn,{"data-action":"stop"}):(un||(gn.append(St,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),un=St.querySelector('[data-tns-role="nav"]')),gn.append(un,'<button data-action="stop" type="button">'+kn+Tn[0]+"</button>"),Mn=un.querySelector("[data-action]")),nt())}function I(){for(var t=pn;t<pn+Rt;t++){var n=Bt[t];o(n,{"aria-hidden":"false"}),"gallery"===zt&&(n.style.marginLeft=_t*(t-pn)+"px",n.classList.remove(On),n.classList.add(In))}on&&(o(Et,{tabindex:"0"}),(pn===xn&&!Vt||Yt)&&(wt.disabled=!0)),cn&&o(Tt[0],{tabindex:"0","aria-selected":"true"})}function z(){if("carousel"===zt&&(b&&h(Ht,[b,J]),Ln&&h(Ht,[["touchstart",ct],["touchmove",ut],["touchend",dt],["touchcancel",dt]])),cn)for(var t=0;t<Gt;t++)h(Tt[t],[["click",tt],["keydown",lt]]);on&&(h(wt,[["click",$],["keydown",ot]]),h(Et,[["click",_],["keydown",ot]])),bn&&(h(Mn,["click",at]),Cn&&(h(Ht,["mouseover",function(){An&&(et(),Dn=!0)}]),h(Ht,["mouseout",function(){!An&&Dn&&(nt(),Dn=!1)}]))),Xt&&h(document,["keydown",it]),h(window,[["resize",gt],["scroll",xt]])}function O(){if(Zt&&gn.isInViewport(Ht)){for(var t=[],n=pn-1;n<pn+Rt+1;n++){for(var e=Bt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function S(){if(Jt){for(var t=[],n=pn;n<pn+Rt;n++)for(var e=Bt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?G():W(t)}}function W(t){for(var n=t.length;n--;)d(t[n])&&t.splice(n,1);0===t.length?G():setTimeout(function(){W(t)},16)}function H(){gn.wrap(Ht,Wt),gn.wrap(Wt,St),y(),k(),"vertical"===Ot&&R(),m(),A(),D(),L(),N(),P(),I(),z(),f(),O(),S(),M.emit("initialized",yt())}function B(){return(At%_t+qt)/2}function G(){for(var t,n=[],e=pn;e<pn+Rt;e++)n.push(Bt[e].offsetHeight);t=Math.max.apply(null,n),Ht.style.height!==t&&(g&&K(1),Ht.style.height=t+"px")}function R(){bt=[0];for(var t,n=Bt[0].getBoundingClientRect().top,e=1;e<en;e++)t=Bt[e].getBoundingClientRect().top,bt.push(t-n)}function j(){return bt[pn+Rt]-bt[pn]}function q(){St.style.msScrollSnapPointsX="snapInterval(0%, "+_t+")"}function F(){var t,n,e,a;pn!==mn&&(pn>mn?(t=mn,n=Math.min(mn+Rt,pn),e=Math.max(mn+Rt,pn),a=pn+Rt):(t=Math.max(pn+Rt,mn),n=mn+Rt,e=pn,a=Math.min(pn+Rt,mn))),jt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)o(Bt[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(Bt[r],{"aria-hidden":"false"})}function U(){cn&&(fn===-1?t.navContainer?hn=pn%Gt:(hn=Math.floor(pn%Gt/Rt),Vt||Gt%Rt===0||pn!==Mt||(hn+=1)):(hn=fn,fn=-1),hn!==vn&&(o(Tt[vn],{tabindex:"-1","aria-selected":"false"}),o(Tt[hn],{tabindex:"0","aria-selected":"true"}),vn=hn))}function X(){if(on&&!Vt){var t=[],n=[];if(pn===xn?(t.push(wt),n.push(Et),rt(wt,Et)):Yt||pn!==Mt?n.push(wt,Et):(t.push(Et),n.push(wt),rt(Et,wt)),t.length>0)for(var e=t.length;e--;){var a=t[e];a.disabled||(a.disabled=!0,o(a,{tabindex:"-1"}))}if(n.length>0)for(var i=n.length;i--;){var r=n[i];r.disabled&&(r.disabled=!1,o(r,{tabindex:"0"}))}}}function K(t,n){t=0===t?"":Kt/1e3+"s",n=n||Ht,n.style[g]=t,"gallery"===zt&&(n.style[w]=t),"vertical"===Ot&&(Wt.style[g]=t)}function Y(t,n){g&&K(t),jn(n)}function V(){o(Ht,{"aria-busy":"true"}),rn&&qn(),pn!==mn&&M.emit("indexChanged",yt()),p&&M.emit("transitionStart",yt()),Y(),b||J()}function J(t){if(b&&M.emit("transitionEnd",yt(t)),"gallery"===zt&&tn.length>0)for(var n=0;n<Rt;n++){var e=tn[n];g&&K(0,e),Sn&&x&&(e.style[x]=e.style[E]=""),e.classList.remove(zn),e.classList.add(On),e.style.marginLeft=""}if(!b||t&&"height"!==t.propertyName){if(!rn){var a=pn;qn(),pn!==a&&(Y(0),M.emit("indexChanged",yt()))}F(),U(),X(),O(),S(),l(Ht,"aria-busy"),Q()}}function Q(){mn=pn}function Z(t){"true"!==r(Ht,"aria-busy")&&(pn+=t*jt,V())}function $(){Z(-1)}function _(){Z(Yt&&pn===Mt?-(Mt-xn)/jt:1)}function tt(n){if("true"!==r(Ht,"aria-busy")){for(var e,a=n.target||n.srcElement;gn.indexOf(Tt,a)===-1;)a=a.parentNode;e=fn=Number(r(a,"data-nav"));var i="gallery"===zt?0:nn;pn=t.navContainer?e+i:e*Rt+i,pn!==mn&&V()}}function nt(){Dt=setInterval(function(){Z(En)},wn),o(Mn,{"data-action":"stop"}),Mn.innerHTML=kn+Tn[1],An=!0}function et(){clearInterval(Dt),o(Mn,{"data-action":"start"}),Mn.innerHTML=kn.replace("Stop","Start")+Tn[0],An=!1}function at(){An?et():nt()}function it(t){switch(t=t||window.event,t.keyCode){case C.LEFT:$();break;case C.RIGHT:_()}}function rt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function ot(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case C.LEFT:case C.UP:case C.HOME:case C.PAGEUP:e!==wt&&wt.disabled!==!0&&rt(e,wt);break;case C.RIGHT:case C.DOWN:case C.END:case C.PAGEDOWN:e!==Et&&Et.disabled!==!0&&rt(e,Et);break;case C.ENTER:case C.SPACE:e===Et?_():$()}}function lt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=r(e,"data-nav");switch(n){case C.LEFT:case C.PAGEUP:a>0&&rt(e,e.previousElementSibling);break;case C.UP:case C.HOME:0!==a&&rt(e,Tt[0]);break;case C.RIGHT:case C.PAGEDOWN:a<Ct-1&&rt(e,e.nextElementSibling);break;case C.DOWN:case C.END:a<Ct-1&&rt(e,Tt[Ct-1]);break;case C.ENTER:case C.SPACE:tt(t)}}function st(){Y(0,Ht.scrollLeft()),Q()}function ct(t){var n=t.changedTouches[0];Nn=parseInt(n.clientX),Pn=parseInt(n.clientY);var e="horizontal"===Ot?[12,-13]:[17,-8];kt=Number(Ht.style[p].slice(e[0],e[1])),M.emit("touchStart",yt(t))}function ut(t){var n=t.changedTouches[0];if(Lt=parseInt(n.clientX)-Nn,Nt=parseInt(n.clientY)-Pn,a(e(Nt,Lt),15)===Ot){Pt=!0,t.preventDefault(),M.emit("touchMove",yt(t));var i=0,r=0;"horizontal"===Ot?i=kt+Lt:r=kt+Nt,K(0),Ht.style[p]="translate3d("+i+"px, "+r+"px, 0px"}}function dt(t){var n=t.changedTouches[0];if(Lt=parseInt(n.clientX)-Nn,Nt=parseInt(n.clientY)-Pn,M.emit("touchEnd",yt(t)),Pt){if(Pt=!1,t.preventDefault(),"horizontal"===Ot)pn=-(kt+Lt)/_t,pn=Lt>0?Math.floor(pn):Math.ceil(pn);else{var e=-(kt+Nt);if(e<=0)pn=xn;else if(e>=bt[bt.length-1])pn=Mt;else{var a=0;do a++,pn=Nt<0?a+1:a;while(a<en&&e>=Math.round(bt[a+1]))}}V()}}function ft(){Ht.style.width=(_t+1)*en+"px";for(var t=en;t--;)Bt[t].style.width=_t-qt+"px"}function ht(){for(var t=pn+1,n=pn+Rt;t<n;t++)Bt[t].style.marginLeft=_t*(t-pn)+"px"}function vt(){Wt.style.cssText="margin: 0px "+B()+"px"}function pt(){Wt.style.height=j()+"px"}function mt(){if(Ct!==dn)if(Ct>dn)for(var t=dn;t<Ct;t++)l(Tt[t],"hidden");else for(var n=Ct;n<dn;n++)o(Tt[n],{hidden:""});dn=Ct}function yt(t){return{container:Ht,slideItems:Bt,navItems:Tt,prevButton:wt,nextButton:Et,items:Rt,index:pn,indexCached:mn,navCurrent:hn,navCurrentCached:vn,slideCount:Gt,cloneCount:nn,slideCountNew:en,event:t||{}}}function gt(){clearTimeout(It),It=setTimeout(function(){if(At!==Rn()){var n=pn,e=Rt;y(),f(),qn(),"horizontal"===Ot?Ut&&Ft?vt():(ft(),"gallery"===zt&&ht()):(R(),pt()),pn!==n&&(M.emit("indexChanged",yt()),F(),Vt||X()),Rt===e||t.navContainer||(mt(),U()),(pn!==n||"carousel"===zt&&!Ut)&&Y(0),pn===n&&Rt===e&&"gallery"!==zt||(S(),O()),navigator.msMaxTouchPoints&&q()}},100)}function xt(){Wn||window.requestAnimationFrame(function(){O(),Wn=!1}),Wn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{destory:function(){},events:M};var bt,wt,Et,Tt,Ct,Mt,At,Dt,kt,Lt,Nt,Pt,It,zt=t.mode,Ot=t.axis,St=document.createElement("div"),Wt=document.createElement("div"),Ht=t.container,Bt=Ht.children,Gt=Bt.length,Rt=t.items,jt=i(),qt=t.gutter,Ft="gallery"!==zt&&t.edgePadding,Ut=t.fixedWidth,Xt=t.arrowKeys,Kt=t.speed,Yt=t.rewind,Vt="gallery"===zt||!t.rewind&&t.loop,Jt="gallery"===zt||t.autoHeight,Qt=!Ut&&t.responsive,Zt=t.lazyload,$t=Ht.id||n(),_t=Ut?Ut+qt:0,tn=[],nn=Vt?2*Gt:Ft?1:0,en="gallery"===zt?Gt+nn:Gt+2*nn,an=!(!Ut||Vt||Ft),rn="gallery"===zt||!Vt,on=t.controls,ln=t.controlsText,sn=!!t.controlsContainer&&t.controlsContainer,cn=t.nav,un=t.navContainer||!1,dn=Gt,fn=-1,hn=0,vn=0,pn="gallery"===zt?0:nn,mn=pn,yn=Ft?1:0,xn=yn,bn=t.autoplay,wn=t.autoplayTimeout,En="forward"===t.autoplayDirection?1:-1,Tn=t.autoplayText,Cn=t.autoplayHoverPause,Mn=t.autoplayButton,An=!1,Dn=!1,kn="<span hidden>Stop Animation</span>",Ln=t.touch,Nn=0,Pn=0,In=w?t.animateIn:"tns-fadeIn",zn=w?t.animateOut:"tns-fadeOut",On=w?t.animateNormal:"tns-normal",Sn=!!w&&t.animateDelay,Wn=!1,Hn=function(){return Ut?function(){return Math.max(1,Math.min(Gt,Math.floor(At/Ut)))}:function(){var n=t.items,e="object"==typeof Qt&&Object.keys(Qt);if(e)for(var a=0;a<e.length;a++)At>=e[a]&&(n=Qt[e[a]]);return Math.max(1,Math.min(Gt,n))}}(),Bn=function(){return Math.round((At+qt)/Rt)},Gn=function(){return t.navContainer?function(){return Gt}:function(){return Math.ceil(Gt/Rt)}}(),Rn=function(){return"horizontal"===Ot&&!Ut&&Ft?function(){return St.clientWidth-2*(Ft+qt)}:function(){return St.clientWidth}}();H();var jn=function(){return"carousel"===zt?function(t){t||(t="horizontal"===Ot?-_t*pn:-bt[pn]),an&&pn===Mt&&(t=Math.max(t,-en*_t+At+qt));var n="translate3d(",e={x:[p,n,t,"px, 0px, 0px)"],y:[p,n+"0px, ",t,"px, 0px)"],l:["left","",t,"px"],t:["top","",t,"px"]},a="horizontal"===Ot?p?"x":"l":p?"y":"t";Ht.style[e[a][0]]=e[a][1]+e[a][2]+e[a][3],"vertical"===Ot&&(Wt.style.height=j()+"px")}:function(){tn=[],v(Bt[mn],[[b,J],[T,J]]),h(Bt[pn],[[b,J],[T,J]]),function(){for(var t=mn,n=mn+Rt;t<n;t++){var e=Bt[t];if(g&&K(1,e),Sn&&x){var a=Sn*(t-mn)/1e3;e.style[x]=a+"s",e.style[E]=a+"s"}e.classList.remove(In),e.classList.add(zn),tn.push(e)}}(),function(){for(var t=pn,n=pn+Rt;t<n;t++){var e=Bt[t];if(g&&K(1,e),Sn&&x){var a=Sn*(t-pn)/1e3;e.style[x]=a+"s",e.style[E]=a+"s"}e.classList.remove(On),e.classList.add(In),t>pn&&(e.style.marginLeft=(t-pn)*_t+"px")}}()}}(),qn=function(){return Vt?function(){var t="carousel"===zt?jt+xn:xn,n="carousel"===zt?Mt-jt:Mt;if(Ut&&At%_t!==0&&(n-=1),pn>n)for(;pn>=t+Gt;)pn-=Gt;else if(pn<t)for(;pn<=n-Gt;)pn+=Gt}:function(){pn=Math.max(xn,Math.min(Mt,pn))}}();return{getInfo:yt,events:M,destory:function(){if(gn.unwrap(St),gn.unwrap(Wt),St=Wt=null,l(Ht,["id","style","data-tns-role","data-tns-features"]),Vt)for(var n=nn;n--;)Bt[0].remove(),Bt[Bt.length-1].remove();l(Bt,["id","style","aria-hidden"]),$t=Gt=null,on&&(t.controlsContainer?(l(sn,["aria-label"]),l(sn.children,["aria-controls","tabindex"]),s(sn)):(sn.remove(),sn=wt=Et=null)),cn&&(t.navContainer?(l(un,["aria-label"]),l(Tt,["aria-selected","aria-controls","tabindex"]),s(un)):(un.remove(),un=null),Tt=null),bn&&(t.navContainer||null===un?s(Mn):(un.remove(),un=null)),s(Ht),Xt&&v(document,["keydown",it]),v(window,[["resize",gt],["scroll",xt]])}}}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function l(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function s(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||o(t,{hidden:""})}function u(t){i(t,"hidden")&&l(t,"hidden")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function h(t,n){function e(n){t.addEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function v(t,n){function e(n){t.removeEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}var p=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),m={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},y={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},g=f(m)[0],x=f(m)[1],b=f(m)[2],w=f(y)[0],E=f(y)[1],T=f(y)[2],C={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},M={events:{},on:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},off:function(t,n){if(this.events[t])for(var e=0;e<this.events[t].length;e++)if(this.events[t][e]===n){this.events[t].splice(e,1);break}},emit:function(t,n){this.events[t]&&this.events[t].forEach(function(t){t(n)})}};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
