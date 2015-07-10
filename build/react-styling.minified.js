!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports["react-styling"]=e():t["react-styling"]=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t){for(var e="",n=0;n<t.length;){e+=t[n];for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;r>a;a++)i[a-1]=arguments[a];l.exists(i[n])&&(e+=i[n]),n++}return u(e)}function u(t){t=t.replace(/[\{\}]/g,"");var e=t.split("\n"),n=new d["default"](d["default"].determine_tabulation(e)),r=a(n.extract_tabulation(e));return f(r)}function a(t){for(var e=!0;e;){var n=t;if(r=i=u=a=void 0,e=!1,0===n.length)return{};if(!l.is_blank(n[0].line)){n=n.filter(function(t){return t.line.match(/^[\s]*\/\//)?!1:!0});var r=n.map(function(t,e){return{tabs:t.tabs,index:e}}).filter(function(t){return 1===t.tabs}).map(function(t){return t.index}),i=r.map(function(t){return t-1});i.shift(),i.push(n.length-1);var u=l.zip(r,i),a=u.map(function(t){return n.slice(t[0],t[1]+1)});return a.map(function(t){var e=t.shift().line,n=!1;l.starts_with(e,".")&&(e=e.substring(".".length),n=!0),l.ends_with(e,":")&&(e=e.substring(0,e.length-":".length));var r=t.filter(function(t){if(2!==t.tabs)return!1;var e=t.line.indexOf(":");return e>0&&e<t.line.length-1&&!l.starts_with(t.line,"@")}),i=t.filter(function(t){return r.indexOf(t)<0});r=r.map(function(t){return t.line}),i.forEach(function(t){return t.tabs--});var u=o(e,r,i);return n&&(u._is_a_modifier=!0),{name:e,json:u}}).reduce(function(t,e){return t[e.name]=e.json,t},{})}n.shift(),t=n,e=!0}}function o(t,e,n){var r={},i=e.map(function(t){var e=t.split(":"),n=e[0].trim(),r=e[1].trim();return n=n.replace(/([-]{1}[a-z]{1})/g,function(t){return t.substring(1).toUpperCase()}),{key:n,value:r}}).reduce(function(t,e){return t[e.key]=e.value,t},{});l.extend(r,i);var u=a(n);return l.extend(r,u),r}function f(t){var e=c(t);return Object.keys(t).filter(function(e){return"object"==typeof t[e]&&t[e]._is_a_modifier}).forEach(function(n){delete t[n]._is_a_modifier,t[n]=l.extend({},e,t[n])}),Object.keys(t).filter(function(e){return"object"==typeof t[e]}).forEach(function(e){f(t[e])}),t}function c(t){return Object.keys(t).filter(function(e){return"object"!=typeof t[e]}).reduce(function(e,n){return e[n]=t[n],e},{})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var l=n(1),s=n(2),d=r(s);t.exports=e["default"]},function(t,e){"use strict";function n(t,e){return 0===t.indexOf(e)}function r(t,e){var n=t.lastIndexOf(e);if(!(0>n))return n===t.length-e.length}function i(t,e){for(var n="";e>0;)n+=t,e--;return n}function u(t){return!t.replace(/\s/g,"")}function a(t,e){return t.map(function(n,r){return[t[r],e[r]]})}function o(t,e,n){for(var r=this,i=arguments,u=!0;u;){var a=t,c=e,l=n;s=m=_=d=p=v=void 0,u=!1;var s=Array.prototype.slice.call(i,0);if(!f(l)){var d=!0,p=!1,v=void 0;try{for(var b,h=Object.keys(c)[Symbol.iterator]();!(d=(b=h.next()).done);d=!0){var g=b.value;"object"==typeof c[g]&&f(a[g])?a[g]=o(a[g],c[g]):a[g]=c[g]}}catch(y){p=!0,v=y}finally{try{!d&&h["return"]&&h["return"]()}finally{if(p)throw v}}return a}var m=s.pop(),_=o.apply(r,s);r=void 0,i=[t=_,e=m,n=void 0],u=!0}}Object.defineProperty(e,"__esModule",{value:!0}),e.starts_with=n,e.ends_with=r,e.repeat=i,e.is_blank=u,e.zip=a,e.extend=o;var f=function(t){return"undefined"!=typeof t};e.exists=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(1),a=function(){function t(e){r(this,t),this.tab=e}return i(t,[{key:"reduce_indentation",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1];return t.substring(this.tab.symbol.length*e)}},{key:"calculate_indentation",value:function(t){var e=t.match(this.tab.regexp);return e?e[0].length/this.tab.symbol.length:0}},{key:"extract_tabulation",value:function(t){var e=this;t=t.map(function(t,e){return{line:t,index:e}}).filter(function(t){return!u.is_blank(t.line)}),t.forEach(function(t){var n=t.line;if(t.tabs=e.calculate_indentation(t.line),t.line=e.reduce_indentation(t.line,t.tabs).trim(),u.starts_with(t.line," "))throw new Error("Invalid indentation (some extra leading spaces) at line "+t.index+': "'+n+'"')});var n=t.reduce(function(t,e){return Math.min(t,e.tabs)},1/0);return 0===n?t.forEach(function(t){t.tabs++}):n>1&&t.forEach(function(t){t.tabs-=n-1}),t}}]),t}();e["default"]=a,a.determine_tabulation=function(t){function e(t){var e=0;return t.replace(/^( )+/g,function(t){e=t.length}),e}var n=function(t){return t[0]-t[1]};if(t=t.filter(function(t){return!u.is_blank(t)}),t.length<2)throw new Error("Couldn't decide on tabulation type. Not enough lines.");if(u.starts_with(t[1],"	")){var r={symbol:"	",regexp:new RegExp("^(	)+","g")};return r}var i=Math.abs(n(t.slice(0,2).map(e)));if(0===i)throw new Error("Couldn't decide on tabulation type. Invalid tabulation.");var a=u.repeat(" ",i),o={symbol:a,regexp:new RegExp("^("+a+")+","g")};return o},t.exports=e["default"]}])});
//# sourceMappingURL=react-styling.minified.js.map