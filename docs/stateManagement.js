import{p as e}from"./preactBundle.js";var t=new WeakMap,r=Symbol("iteration key");function n(e,t,r){var n=t.get(r);n&&n.forEach(e.add,e)}function o(e){e.cleaners&&e.cleaners.forEach(a,e),e.cleaners=[]}function a(e){e.delete(this)}var i=[],s=!1;function c(e,t,r,n){if(e.unobserved)return Reflect.apply(t,r,n);if(-1===i.indexOf(e)){o(e);try{return i.push(e),Reflect.apply(t,r,n)}finally{i.pop()}}}function l(e){var n=i[i.length-1];n&&(f(n,e),function(e,n){var o=n.target,a=n.key;"iterate"===n.type&&(a=r);var i=t.get(o),s=i.get(a);s||(s=new Set,i.set(a,s)),s.has(e)||(s.add(e),e.cleaners.push(s))}(n,e))}function u(e){(function(e){var o=e.target,a=e.key,i=e.type,s=t.get(o),c=new Set;if("clear"===i?s.forEach((function(e,t){n(c,s,t)})):n(c,s,a),"add"===i||"delete"===i||"clear"===i){var l=Array.isArray(o)?"length":r;n(c,s,l)}return c})(e).forEach(p,e)}function p(e){f(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function f(e,t){if(e.debugger&&!s)try{s=!0,e.debugger(t)}finally{s=!1}}function y(){return i.length>0}var d=Symbol("is reaction");var g=new WeakMap,h=new WeakMap,v=Object.prototype.hasOwnProperty;function m(e){var t=h.get(e);return y()&&"object"==typeof e&&null!==e?t||F(e):t||e}function b(e,t){var r=e.next;return e.next=function(){var n=r.call(e),o=n.done,a=n.value;return o||(t?a[1]=m(a[1]):a=m(a)),{done:o,value:a}},e}var k={has:function(e){var t=g.get(this),r=Reflect.getPrototypeOf(this);return l({target:t,key:e,type:"has"}),r.has.apply(t,arguments)},get:function(e){var t=g.get(this),r=Reflect.getPrototypeOf(this);return l({target:t,key:e,type:"get"}),m(r.get.apply(t,arguments))},add:function(e){var t=g.get(this),r=Reflect.getPrototypeOf(this),n=r.has.call(t,e),o=r.add.apply(t,arguments);return n||u({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var r=g.get(this),n=Reflect.getPrototypeOf(this),o=n.has.call(r,e),a=n.get.call(r,e),i=n.set.apply(r,arguments);return o?t!==a&&u({target:r,key:e,value:t,oldValue:a,type:"set"}):u({target:r,key:e,value:t,type:"add"}),i},delete:function(e){var t=g.get(this),r=Reflect.getPrototypeOf(this),n=r.has.call(t,e),o=r.get?r.get.call(t,e):void 0,a=r.delete.apply(t,arguments);return n&&u({target:t,key:e,oldValue:o,type:"delete"}),a},clear:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this),r=0!==e.size,n=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return r&&u({target:e,oldTarget:n,type:"clear"}),o},forEach:function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var n=g.get(this),o=Reflect.getPrototypeOf(this);l({target:n,type:"iterate"});var a,i=function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return e.apply(void 0,[m(t)].concat(r))};return(a=o.forEach).call.apply(a,[n,i].concat(t))},keys:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return l({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);l({target:e,type:"iterate"});var r=t.values.apply(e,arguments);return b(r,!1)},entries:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);l({target:e,type:"iterate"});var r=t.entries.apply(e,arguments);return b(r,!0)},get size(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return l({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};k[Symbol.iterator]=function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);l({target:e,type:"iterate"});var r=t[Symbol.iterator].apply(e,arguments);return b(r,e instanceof Map)};var P={get:function(e,t,r){return e=v.call(k,t)?k:e,Reflect.get(e,t,r)}},O="object"==typeof window?window:Function("return this")(),w=new Map([[Map,P],[Set,P],[WeakMap,P],[WeakSet,P],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);function R(e){return w.get(e.constructor)}var S=Object.prototype.hasOwnProperty,j=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e})));var A={get:function(e,t,r){var n=Reflect.get(e,t,r);if("symbol"==typeof t&&j.has(t))return n;l({target:e,key:t,receiver:r,type:"get"});var o=h.get(n);if(y()&&"object"==typeof n&&null!==n){if(o)return o;var a=Reflect.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.writable||!1!==a.configurable)return F(n)}return o||n},has:function(e,t){var r=Reflect.has(e,t);return l({target:e,key:t,type:"has"}),r},ownKeys:function(e){return l({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,r,n){"object"==typeof r&&null!==r&&(r=g.get(r)||r);var o=S.call(e,t),a=e[t],i=Reflect.set(e,t,r,n);return e!==g.get(n)||(o?r!==a&&u({target:e,key:t,value:r,oldValue:a,receiver:n,type:"set"}):u({target:e,key:t,value:r,receiver:n,type:"add"})),i},deleteProperty:function(e,t){var r=S.call(e,t),n=e[t],o=Reflect.deleteProperty(e,t);return r&&u({target:e,key:t,oldValue:n,type:"delete"}),o}};function F(e){return void 0===e&&(e={}),g.has(e)||"function"==typeof(r=e.constructor)&&r.name in O&&O[r.name]===r&&!w.has(r)?e:h.get(e)||function(e){var r=R(e)||A,n=new Proxy(e,r);return h.set(e,n),g.set(n,e),function(e){t.set(e,new Map)}(e),n}(e);var r}function M(e){return g.has(e)}function U(e){return g.get(e)||e}const W=new Set;let C,E=!1;function I(e){return function(...t){const r=t.map(e=>"function"==typeof e?function(...t){return x(e,this,t)}:e);return e.apply(this,r)}}function x(e,t,r){try{return E=!0,e.apply(t,r)}finally{W.forEach(q),W.clear(),E=!1}}function q(e){e()}if("undefined"!=typeof window?C=window:"undefined"!=typeof global&&(C=global),C&&(C.setTimeout=I(C.setTimeout),C.setInterval=I(C.setInterval),C.requestAnimationFrame&&(C.requestAnimationFrame=I(C.requestAnimationFrame)),C.requestIdleCallback&&(C.requestIdleCallback=I(C.requestIdleCallback)),Promise.prototype.then=I(Promise.prototype.then),Promise.prototype.catch=I(Promise.prototype.catch),C.WebSocket)){["onopen","onmessage","onerror","onclose"].forEach(e=>function(e,t){const r=Object.getOwnPropertyDescriptor(e,t);if(!r)return;const n=Object.assign({},r,{set(e){const t="function"==typeof e?function(...t){return x(e,this,t)}:e;return r.set.call(this,t)}});Object.defineProperty(e,t,n)}(C.WebSocket.prototype,e))}const T=Symbol("owner component"),z={};function D(t,{devtool:r}={}){const n=!(t.prototype&&t.prototype.render),a=n?e:t,i=r?e=>r(Object.assign({Component:t},e)):void 0;class s extends a{constructor(e,t){super(e,t),this.state=this.state||{},this.state[T]=this;const r=()=>this.setState(z);this.render=function(e,t){void 0===t&&(t={});var r=e[d]?e:function t(){return c(t,e,this,arguments)};return r.scheduler=t.scheduler,r.debugger=t.debugger,r[d]=!0,t.lazy||r(),r}(this.render,{scheduler:{add:()=>{return e=r,void(E?W.add(e):q(e));var e},delete:()=>{return e=r,void W.delete(e);var e}},debugger:i,lazy:!0})}render(){return n?t(this.props,this.context):super.render()}shouldComponentUpdate(e,t){const{props:r,state:n}=this;if(super.shouldComponentUpdate&&!super.shouldComponentUpdate(e,t))return i&&i({type:"render",renderType:"blocked"}),!1;if(n!==t)return i&&i({type:"render",renderType:"reactive"}),!0;const o=Object.keys(r),a=Object.keys(e);return!(a.length===o.length&&!a.some(t=>r[t]!==e[t]))&&(i&&i({type:"render",renderType:"normal",props:e,oldProps:r}),!0)}static getDerivedStateFromProps(e,t){if(super.deriveStoresFromProps){const r=function(e){const t=e[T];return Object.keys(t).map(e=>t[e]).filter(M).map(U)}(t);super.deriveStoresFromProps(e,...r)}return super.getDerivedStateFromProps?super.getDerivedStateFromProps(e,t):null}componentWillUnmount(){var e;super.componentWillUnmount&&super.componentWillUnmount(),(e=this.render).unobserved||(e.unobserved=!0,o(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)}}if(s.displayName=t.displayName||t.name,n)for(let e of Object.keys(t))s[e]=t[e];return s}export{F as o,D as v};