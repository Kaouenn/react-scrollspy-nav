module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(r);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.props=e,n.scrollSectionIds=n.props.scrollSectionIds,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"easeInOutQuad",value:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var o=this,r=t-e,i=0;!function t(){i+=30;var l=o.easeInOutQuad(i,e,r,n);window.scrollTo(0,l),i<n&&setTimeout(t,30)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='#/"+e+"']")}},{key:"componentDidMount",value:function(){var e=this;window.onpopstate=function(t){t.preventDefault();var n=t.target.location.hash.replace("#/","");n?e.scrollTo(window.pageYOffset,document.getElementById(n).offsetTop-document.getElementsByClassName("nav")[0].scrollHeight,1200):e.scrollTo(window.pageYOffset,0,1200)},window.onscroll=function(t){var n=void 0;e.scrollSectionIds.map(function(t,o){n=document.getElementById(t).offsetTop-document.getElementsByClassName("nav")[0].scrollHeight,window.pageYOffset>=n&&window.pageYOffset<n+document.getElementById(t).scrollHeight?(e.getNavLinkElement(t).classList.add("is-active"),e.clearOtherNavLinkActiveStyle(t)):e.getNavLinkElement(t).classList.remove("is-active"),window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&o===e.scrollSectionIds.length-1&&(e.getNavLinkElement(t).classList.add("is-active"),e.clearOtherNavLinkActiveStyle(t))})}}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollSectionIds.map(function(n,o){n!==e&&t.getNavLinkElement(n).classList.remove("is-active")})}},{key:"render",value:function(){return i.default.createElement("ul",null,this.props.children)}}]),t}();t.default=l},function(e,t){e.exports=require("react")}]);