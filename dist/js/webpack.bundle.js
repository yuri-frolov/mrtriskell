(()=>{var e={252:()=>{document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__mobile-menu-btn"),t=document.querySelector(".header__mobile-menu-btn.hamburger"),r=document.querySelector(".mobmenu"),o=document.querySelector(".header__desktop-menu-btn"),n=document.querySelector(".header__desktop-menu-btn.hamburger"),s=document.querySelector(".desktopmenu");e.addEventListener("click",(()=>{t.classList.toggle("hamburger--active"),r.classList.toggle("mobmenu--opened")})),o.addEventListener("click",(()=>{n.classList.toggle("hamburger--active"),s.classList.toggle("desktopmenu--opened")})),window.addEventListener("resize",(()=>{window.screen.availWidth>1256&&(t.classList.remove("hamburger--active"),r.classList.remove("mobmenu--opened")),window.screen.availWidth<1256&&(n.classList.remove("hamburger--active"),s.classList.remove("desktopmenu--opened"))}))}))},546:()=>{const e=document.querySelectorAll(".submenu");for(let t of e){let e=document.querySelector(".submenu__list");t.addEventListener("click",(()=>{e.classList.toggle("submenu__list--hidden")}))}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(252),r(546)})()})();
//# sourceMappingURL=webpack.bundle.js.map