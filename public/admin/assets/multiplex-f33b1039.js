import{g as x}from"./index-4ec1b577.js";import{a}from"./codemirror-9be4068e.js";function b(A,u){for(var t=0;t<u.length;t++){const r=u[t];if(typeof r!="string"&&!Array.isArray(r)){for(const f in r)if(f!=="default"&&!(f in A)){const g=Object.getOwnPropertyDescriptor(r,f);g&&Object.defineProperty(A,f,g.get?g:{enumerable:!0,get:()=>r[f]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(A,u){(function(t){t(a)})(function(t){t.multiplexingMode=function(r){var f=Array.prototype.slice.call(arguments,1);function g(n,i,l,e){if(typeof i=="string"){var p=n.indexOf(i,l);return e&&p>-1?p+i.length:p}var o=i.exec(l?n.slice(l):n);return o?o.index+l+(e?o[0].length:0):-1}return{startState:function(){return{outer:t.startState(r),innerActive:null,inner:null,startingInner:!1}},copyState:function(n){return{outer:t.copyState(r,n.outer),innerActive:n.innerActive,inner:n.innerActive&&t.copyState(n.innerActive.mode,n.inner),startingInner:n.startingInner}},token:function(n,i){if(i.innerActive){var c=i.innerActive,e=n.string;if(!c.close&&n.sol())return i.innerActive=i.inner=null,this.token(n,i);var v=c.close&&!i.startingInner?g(e,c.close,n.pos,c.parseDelimiters):-1;if(v==n.pos&&!c.parseDelimiters)return n.match(c.close),i.innerActive=i.inner=null,c.delimStyle&&c.delimStyle+" "+c.delimStyle+"-close";v>-1&&(n.string=e.slice(0,v));var y=c.mode.token(n,i.inner);return v>-1?n.string=e:n.pos>n.start&&(i.startingInner=!1),v==n.pos&&c.parseDelimiters&&(i.innerActive=i.inner=null),c.innerStyle&&(y?y=y+" "+c.innerStyle:y=c.innerStyle),y}else{for(var l=1/0,e=n.string,p=0;p<f.length;++p){var o=f[p],v=g(e,o.open,n.pos);if(v==n.pos){o.parseDelimiters||n.match(o.open),i.startingInner=!!o.parseDelimiters,i.innerActive=o;var d=0;if(r.indent){var m=r.indent(i.outer,"","");m!==t.Pass&&(d=m)}return i.inner=t.startState(o.mode,d),o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-open"}else v!=-1&&v<l&&(l=v)}l!=1/0&&(n.string=e.slice(0,l));var S=r.token(n,i.outer);return l!=1/0&&(n.string=e),S}},indent:function(n,i,l){var e=n.innerActive?n.innerActive.mode:r;return e.indent?e.indent(n.innerActive?n.inner:n.outer,i,l):t.Pass},blankLine:function(n){var i=n.innerActive?n.innerActive.mode:r;if(i.blankLine&&i.blankLine(n.innerActive?n.inner:n.outer),n.innerActive)n.innerActive.close===`
`&&(n.innerActive=n.inner=null);else for(var l=0;l<f.length;++l){var e=f[l];e.open===`
`&&(n.innerActive=e,n.inner=t.startState(e.mode,i.indent?i.indent(n.outer,"",""):0))}},electricChars:r.electricChars,innerMode:function(n){return n.inner?{state:n.inner,mode:n.innerActive.mode}:{state:n.outer,mode:r}}}}})})();var s=D.exports;const j=x(s),k=b({__proto__:null,default:j},[s]);export{k as m};
