"use strict";function r(r){return null==r||(!("number"!=typeof r||!Number.isNaN(r))||("string"==typeof r&&""===r||(!!("object"==typeof r&&Array.isArray(r)&&r.length<1)||"object"==typeof r&&!(r instanceof Date)&&Object.keys(r).length<1)))}function n(r){return null===r}function t(r){return void 0===r}function e(r){return!n(r)}function o(r){return!t(r)}exports.atOrThrow=function(r,n,t){if(!Array.isArray(r)&&null==r)throw null!=t?t:new Error(`Invalid Index: ${n}`);if(!Array.isArray(r))return r;if(n<0&&r.length+n>=0){return r[r.length+n]}if(r.length<=n)throw null!=t?t:new Error(`Invalid Index: ${n}/ ${r.length}`);const e=r[n];if(null==e)throw null!=t?t:new Error(`Invalid Index: ${n}/ ${r.length}`);return e},exports.atOrUndefined=function(r,n){if(!Array.isArray(r)&&null==r)return;if(!Array.isArray(r))return r;if(n<0&&r.length+n>=0){return r[r.length+n]}if(r.length<=n)return;const t=r[n];return null!=t?t:void 0},exports.chunk=function(r,n){return Array.from({length:Math.ceil(r.length/n)},((t,e)=>r.slice(e*n,e*n+n)))},exports.findOrThrow=function(r,n,t){const e=r.find(n);if(null==e)throw null!=t?t:new Error("findOrThrow got undefined result");return e},exports.first=function(r){if(Array.isArray(r)){const n=function(r){const[n]=r;return n}(r);if(null==n)throw new Error("invalid first index");return n}return r},exports.getRandomRange=function(r,n){return Math.random()*(n-r)+r},exports.getRandomRangeInt=function(r,n){const t=Math.ceil(r),e=Math.floor(n);return Math.floor(Math.random()*(e-t))+r},exports.invert=function(r){return!r},exports.isComplexEmpty=r,exports.isEmpty=function(r){return t(r)||n(r)},exports.isError=function(r,n){return r instanceof Error||null!=r&&"object"==typeof r&&"message"in r&&"stack"in r?r:null!=n?n:void 0},exports.isFalse=function(r){return!r},exports.isNotComplexEmpty=function(n){return!r(n)},exports.isNotEmpty=function(r){return o(r)&&e(r)},exports.isNotNull=e,exports.isNotUndefined=o,exports.isNull=n,exports.isTrue=function(r){return r},exports.isUndefined=t,exports.keyBy=function(r,n){return r.reduce(((r,t)=>({...r,[t[n]]:t})),{})},exports.keyBys=function(r,n){return r.reduce(((r,t)=>({...r,[t[n]]:[...r[t[n]]??[],t]})),{})},exports.last=function(r){const n=r[r.length-1];if(null==n)throw new Error("invalid last index");return n},exports.orThrow=function(r,n){if(null!=r)return r;throw n??new Error("invalid value")},exports.parseBool=function(r){try{return null!=r&&("false"!==r&&("true"===r||!0===r))}catch{return!1}},exports.populate=function(r,n){const t=null==n?0:1;return new Array(r).fill(0).map(((r,n)=>n+t))},exports.settify=function(r){return Array.from(new Set(r))},exports.sleep=async function(r=1e3){return new Promise((n=>{setTimeout((()=>n(void 0)),r)}))},exports.toArray=function(r){return Array.isArray(r)?r:[r]},exports.typedkey=function(r){return Object.keys(r)};
