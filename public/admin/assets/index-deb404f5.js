import{c as vr,g as fr}from"./index-4ec1b577.js";function lr(Q,q){for(var v=0;v<q.length;v++){const o=q[v];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in Q)){const e=Object.getOwnPropertyDescriptor(o,r);e&&Object.defineProperty(Q,r,e.get?e:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}))}var or={exports:{}};(function(Q,q){(function(o,r){Q.exports=r()})(vr,function(){return function(v){var o={};function r(e){if(o[e])return o[e].exports;var L=o[e]={exports:{},id:e,loaded:!1};return v[e].call(L.exports,L,L.exports,r),L.loaded=!0,L.exports}return r.m=v,r.c=o,r.p="",r(0)}([function(v,o,r){var e;e=function(L){return{clustering:r(1),regression:r(5),statistics:r(6),histogram:r(15),transform:{regression:r(18),histogram:r(21),clustering:r(22)}}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(2),S=g.dataPreprocess,d=g.normalizeDimensions,l=r(3),n=r(4),m=l.size,E=l.sumOfColumn,t=l.sum,p=l.zeros,n=r(4),s=n.isNumber,u=Math.pow,a={SINGLE:"single",MULTIPLE:"multiple"};function f(M,N,y){for(var F=p(M.length,2),I=D(N,z(M,y.dimensions)),A=!0,U,T,R,C;A;){A=!1;for(var P=0;P<M.length;P++){U=1/0,T=-1;for(var W=0;W<N;W++)R=x(M[P],I[W],y),R<U&&(U=R,T=W);F[P][0]!==T&&(A=!0),F[P][0]=T,F[P][1]=U}for(var P=0;P<N;P++){C=[];for(var W=0;W<F.length;W++)F[W][0]===P&&C.push(M[W]);I[P]=c(C,y)}}var J={centroids:I,clusterAssigned:F};return J}function c(M,N){for(var y=[],F,I,A=0;A<N.dimensions.length;A++){var U=N.dimensions[A];F=0;for(var T=0;T<M.length;T++)F+=M[T][U];I=F/M.length,y.push(I)}return y}function i(M,N,y){var F=(s(N)?{clusterCount:N,stepByStep:y}:N)||{clusterCount:2},I=F.clusterCount;if(I<2)return;var A=K(M,F),U=A.outputType===a.SINGLE,T=S(M,{dimensions:A.dimensions}),R=p(T.length,2),C,P,W;function J(O,b){R[O][1]=b}function X(O){return R[O][1]}if(U){C=[];var er=A.outputClusterIndexDimension;P=function(O,b){C[O][er]=b},W=function(O){return C[O][er]};for(var V=0;V<T.length;V++)C.push(T[V].slice()),J(V,0),P(V,0)}else P=function(O,b){R[O][0]=b},W=function(O){return R[O][0]};for(var tr=c(T,A),$=[tr],V=0;V<T.length;V++){var ur=x(T[V],tr,A);J(V,ur)}var j,w,k,Z,_,rr,ar=1,G={data:C,centroids:$,isEnd:!1};U||(G.clusterAssment=R);function ir(){if(ar<I){j=1/0;for(var O,b,H,Y=0;Y<$.length;Y++){w=[],k=[];for(var B=0;B<T.length;B++)W(B)===Y?w.push(T[B]):k.push(X(B));Z=f(w,2,A),_=E(Z.clusterAssigned,1),rr=t(k),_+rr<j&&(j=rr+_,O=Y,b=Z.centroids,H=Z.clusterAssigned)}for(var B=0;B<H.length;B++)H[B][0]===0?H[B][0]=O:H[B][0]===1&&(H[B][0]=$.length);$[O]=b[0],$.push(b[1]);for(var B=0,Y=0;B<T.length&&Y<H.length;B++)W(B)===O&&(P(B,H[Y][0]),J(B,H[Y++][1]));var nr=[];if(!U){for(var B=0;B<$.length;B++){nr[B]=[];for(var Y=0;Y<T.length;Y++)W(Y)===B&&nr[B].push(T[Y])}G.pointsInCluster=nr}ar++}else G.isEnd=!0}if(F.stepByStep)G.next=function(){return ir(),h(G,A),G};else for(;ir(),!G.isEnd;);return h(G,A),G}function h(M,N){var y=N.outputCentroidDimensions;if(!(N.outputType!==a.SINGLE||y==null))for(var F=M.data,I=M.centroids,A=0;A<F.length;A++)for(var U=F[A],T=U[N.outputClusterIndexDimension],R=I[T],C=Math.min(R.length,y.length),P=0;P<C;P++)U[y[P]]=R[P]}function D(M,N){for(var y=p(M,N.length),F=0;F<N.length;F++)for(var I=N[F],A=0;A<M;A++)y[A][F]=I.min+I.span*Math.random();return y}function x(M,N,y){for(var F=0,I=y.dimensions,A=y.rawExtents,U=0;U<I.length;U++){var T=A[U].span;if(T){var R=I[U],C=(M[R]-N[U])/T;F+=u(C,2)}}return F}function K(M,N){var y=m(M);if(y.length<1)throw new Error("The input data of clustering should be two-dimension array.");for(var F=y[1],I=[],A=0;A<F;A++)I.push(A);var U=d(N.dimensions,I),T=N.outputType||a.MULTIPLE,R=N.outputClusterIndexDimension;if(T===a.SINGLE&&!n.isNumber(R))throw new Error("outputClusterIndexDimension is required as a number.");var C=z(M,U);return{dimensions:U,rawExtents:C,outputType:T,outputClusterIndexDimension:R,outputCentroidDimensions:N.outputCentroidDimensions}}function z(M,N){for(var y=[],F=N.length,I=0;I<F;I++)y.push({min:1/0,max:-1/0});for(var I=0;I<M.length;I++)for(var A=M[I],U=0;U<F;U++){var T=y[U],R=A[N[U]];T.min>R&&(T.min=R),T.max<R&&(T.max=R)}for(var I=0;I<F;I++)y[I].span=y[I].max-y[I].min;return y}return{OutputType:a,hierarchicalKMeans:i}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(3),S=g.isArray,d=g.size,l=r(4),m=l.isNumber;function E(n,s){return typeof n=="number"?[n]:n??s}function t(n,s){s=s||{};var u=s.dimensions,a={};if(u!=null)for(var f=0;f<u.length;f++)a[u[f]]=!0;var c=s.toOneDimensionArray?u?u[0]:0:null;function i(M){return!u||a.hasOwnProperty(M)}if(!S(n))throw new Error("Invalid data type, you should input an array");var h=[],D=d(n);if(D.length===1)for(var f=0;f<D[0];f++){var x=n[f];m(x)&&h.push(x)}else if(D.length===2)for(var f=0;f<D[0];f++){for(var K=!0,x=n[f],z=0;z<D[1];z++)i(z)&&!m(x[z])&&(K=!1);K&&h.push(c!=null?x[c]:x)}return h}function p(n){var s=n.toString(),u=s.indexOf(".");return u<0?0:s.length-1-u}return{normalizeDimensions:E,dataPreprocess:t,getPrecision:p}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=Object.prototype.toString,S=Array.prototype,d=S.map;function l(a){for(var f=[];m(a);)f.push(a.length),a=a[0];return f}function m(a){return g.call(a)==="[object Array]"}function E(a,f){for(var c=[],i=0;i<a;i++){c[i]=[];for(var h=0;h<f;h++)c[i][h]=0}return c}function t(a){for(var f=0,c=0;c<a.length;c++)f+=a[c];return f}function p(a,f){for(var c=0,i=0;i<a.length;i++)c+=a[i][f];return c}function n(a,f){return a>f?1:a<f?-1:a===f?0:NaN}function s(a,f,c,i){for(c==null&&(c=0),i==null&&(i=a.length);c<i;){var h=Math.floor((c+i)/2),D=n(a[h],f);if(D>0)i=h;else if(D<0)c=h+1;else return h+1}return c}function u(a,f,c){if(a&&f){if(a.map&&a.map===d)return a.map(f,c);for(var i=[],h=0,D=a.length;h<D;h++)i.push(f.call(c,a[h],h,a));return i}}return{size:l,isArray:m,zeros:E,sum:t,sumOfColumn:p,ascending:n,bisect:s,map:u}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){function g(l){return l=l===null?NaN:+l,typeof l=="number"&&!isNaN(l)}function S(l){return isFinite(l)&&l===Math.round(l)}function d(l){if(l===0)return 0;var m=Math.floor(Math.log(l)/Math.LN10);return l/Math.pow(10,m)>=10&&m++,m}return{isNumber:g,isInteger:S,quantityExponent:d}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(2),S=g.dataPreprocess,d=g.normalizeDimensions,l={linear:function(t,p){for(var n=p.dimensions[0],s=p.dimensions[1],u=0,a=0,f=0,c=0,i=t.length,h=0;h<i;h++){var D=t[h];u+=D[n],a+=D[s],f+=D[n]*D[s],c+=D[n]*D[n]}for(var x=(i*f-u*a)/(i*c-u*u),K=a/i-x*u/i,z=[],M=0;M<t.length;M++){var D=t[M],N=D.slice();N[n]=D[n],N[s]=x*D[n]+K,z.push(N)}var y="y = "+Math.round(x*100)/100+"x + "+Math.round(K*100)/100;return{points:z,parameter:{gradient:x,intercept:K},expression:y}},linearThroughOrigin:function(t,p){for(var n=p.dimensions[0],s=p.dimensions[1],u=0,a=0,f=0;f<t.length;f++){var c=t[f];u+=c[n]*c[n],a+=c[n]*c[s]}for(var i=a/u,h=[],D=0;D<t.length;D++){var c=t[D],x=c.slice();x[n]=c[n],x[s]=c[n]*i,h.push(x)}var K="y = "+Math.round(i*100)/100+"x";return{points:h,parameter:{gradient:i},expression:K}},exponential:function(t,p){for(var n=p.dimensions[0],s=p.dimensions[1],u=0,a=0,f=0,c=0,i=0,h=0,D=0;D<t.length;D++){var x=t[D];u+=x[n],a+=x[s],h+=x[n]*x[s],f+=x[n]*x[n]*x[s],c+=x[s]*Math.log(x[s]),i+=x[n]*x[s]*Math.log(x[s])}for(var K=a*f-h*h,z=Math.pow(Math.E,(f*c-h*i)/K),M=(a*i-h*c)/K,N=[],y=0;y<t.length;y++){var x=t[y],F=x.slice();F[n]=x[n],F[s]=z*Math.pow(Math.E,M*x[n]),N.push(F)}var I="y = "+Math.round(z*100)/100+"e^("+Math.round(M*100)/100+"x)";return{points:N,parameter:{coefficient:z,index:M},expression:I}},logarithmic:function(t,p){for(var n=p.dimensions[0],s=p.dimensions[1],u=0,a=0,f=0,c=0,i=0;i<t.length;i++){var h=t[i];u+=Math.log(h[n]),a+=h[s]*Math.log(h[n]),f+=h[s],c+=Math.pow(Math.log(h[n]),2)}for(var D=(i*a-f*u)/(i*c-u*u),x=(f-D*u)/i,K=[],z=0;z<t.length;z++){var h=t[z],M=h.slice();M[n]=h[n],M[s]=D*Math.log(h[n])+x,K.push(M)}var N="y = "+Math.round(x*100)/100+" + "+Math.round(D*100)/100+"ln(x)";return{points:K,parameter:{gradient:D,intercept:x},expression:N}},polynomial:function(t,p){var n=p.dimensions[0],s=p.dimensions[1],u=p.order;u==null&&(u=2);for(var a=[],f=[],c=u+1,i=0;i<c;i++){for(var h=0,D=0;D<t.length;D++){var x=t[D];h+=x[s]*Math.pow(x[n],i)}f.push(h);for(var K=[],z=0;z<c;z++){for(var M=0,N=0;N<t.length;N++)M+=Math.pow(t[N][n],i+z);K.push(M)}a.push(K)}a.push(f);for(var y=m(a,c),F=[],i=0;i<t.length;i++){for(var I=0,x=t[i],D=0;D<y.length;D++)I+=y[D]*Math.pow(x[n],D);var A=x.slice();A[n]=x[n],A[s]=I,F.push(A)}for(var U="y = ",i=y.length-1;i>=0;i--)i>1?U+=Math.round(y[i]*Math.pow(10,i+1))/Math.pow(10,i+1)+"x^"+i+" + ":i===1?U+=Math.round(y[i]*100)/100+"x + ":U+=Math.round(y[i]*100)/100;return{points:F,parameter:y,expression:U}}};function m(t,p){for(var n=0;n<t.length-1;n++){for(var s=n,u=n+1;u<t.length-1;u++)Math.abs(t[n][u])>Math.abs(t[n][s])&&(s=u);for(var a=n;a<t.length;a++){var f=t[a][n];t[a][n]=t[a][s],t[a][s]=f}for(var c=n+1;c<t.length-1;c++)for(var i=t.length-1;i>=n;i--)t[i][c]-=t[i][n]/t[n][n]*t[n][c]}for(var h=new Array(p),D=t.length-1,u=t.length-2;u>=0;u--){for(var f=0,n=u+1;n<t.length-1;n++)f+=t[n][u]*h[n];h[u]=(t[D][u]-f)/t[u][u]}return h}var E=function(t,p,n){var s=typeof n=="number"?{order:n}:n||{},u=d(s.dimensions,[0,1]),a=S(p,{dimensions:u}),f=l[t](a,{order:s.order,dimensions:u}),c=u[0];return f.points.sort(function(i,h){return i[c]-h[c]}),f};return E}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g={};return g.max=r(7),g.deviation=r(8),g.mean=r(10),g.median=r(12),g.min=r(14),g.quantile=r(13),g.sampleVariance=r(9),g.sum=r(11),g}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(4),S=g.isNumber;function d(l){for(var m=-1/0,E=0;E<l.length;E++)S(l[E])&&l[E]>m&&(m=l[E]);return m}return d}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(9);return function(S){var d=g(S);return d&&Math.sqrt(d)}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(4),S=g.isNumber,d=r(10);function l(m){var E=m.length;if(!E||E<2)return 0;if(m.length>=2){for(var t=d(m),p=0,n,s=0;s<m.length;s++)S(m[s])&&(n=m[s]-t,p+=n*n);return p/(m.length-1)}}return l}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(11);function S(d){var l=d.length;return l?g(d)/d.length:0}return S}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(4),S=g.isNumber;function d(l){var m=l.length;if(!m)return 0;for(var E=0,t=0;t<m;t++)S(l[t])&&(E+=l[t]);return E}return d}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(13);function S(d){return g(d,.5)}return S}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){return function(g,S){var d=g.length;if(!d)return 0;if(S<=0||d<2)return g[0];if(S>=1)return g[d-1];var l=(d-1)*S,m=Math.floor(l),E=g[m],t=g[m+1];return E+(t-E)*(l-m)}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(4),S=g.isNumber;function d(l){for(var m=1/0,E=0;E<l.length;E++)S(l[E])&&l[E]<m&&(m=l[E]);return m}return d}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(7),S=r(14),d=r(13),l=r(8),m=r(2),E=m.dataPreprocess,t=m.normalizeDimensions,p=r(3),n=p.ascending,s=p.map,u=r(16),a=p.bisect,f=r(17);function c(W,D){for(var x=typeof D=="string"?{method:D}:D||{},K=x.method==null?i.squareRoot:i[x.method],z=t(x.dimensions),M=E(W,{dimensions:z,toOneDimensionArray:!0}),N=g(M),y=S(M),F=K(M,y,N),I=f(y,N,F),A=I.step,U=I.toFixedPrecision,T=u(+(Math.ceil(y/A)*A).toFixed(U),+(Math.floor(N/A)*A).toFixed(U),A,U),R=T.length,C=new Array(R+1),P=0;P<=R;P++)C[P]={},C[P].sample=[],C[P].x0=P>0?T[P-1]:T[P]-y===A?y:T[P]-A,C[P].x1=P<R?T[P]:N-T[P-1]===A?N:T[P-1]+A;for(var P=0;P<M.length;P++)y<=M[P]&&M[P]<=N&&C[a(T,M[P],0,R)].sample.push(M[P]);var W=s(C,function(X){return[+((X.x0+X.x1)/2).toFixed(U),X.sample.length,X.x0,X.x1,X.x0+" - "+X.x1]}),J=s(C,function(X){return[X.x0,X.x1,X.sample.length]});return{bins:C,data:W,customData:J}}var i={squareRoot:function(h){var D=Math.ceil(Math.sqrt(h.length));return D>50?50:D},scott:function(h,D,x){return Math.ceil((x-D)/(3.5*l(h)*Math.pow(h.length,-1/3)))},freedmanDiaconis:function(h,D,x){return h.sort(n),Math.ceil((x-D)/(2*(d(h,.75)-d(h,.25))*Math.pow(h.length,-1/3)))},sturges:function(h){return Math.ceil(Math.log(h.length)/Math.LN2)+1}};return c}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(2),S=g.getPrecision;return function(d,l,m,E){var t=arguments.length;t<2?(l=d,d=0,m=1):t<3?m=1:t<4?(m=+m,E=S(m)):E=+E;for(var p=Math.ceil(((l-d)/m).toFixed(E)),n=new Array(p+1),s=0;s<p+1;s++)n[s]=+(d+s*m).toFixed(E);return n}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(4);return function(S,d,l){var m=Math.abs(d-S)/l,E=g.quantityExponent(m),t=Math.pow(10,E),p=m/t;p>=Math.sqrt(50)?t*=10:p>=Math.sqrt(10)?t*=5:p>=Math.sqrt(2)&&(t*=2);var n=E<0?-E:0,s=+(d>=S?t:-t).toFixed(n);return{step:s,toFixedPrecision:n}}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(5),S=r(19),d=2;return{type:"ecStat:regression",transform:function(m){var E=m.upstream,t=m.config||{},p=t.method||"linear",n=g(p,E.cloneRawData(),{order:t.order,dimensions:S.normalizeExistingDimensions(m,t.dimensions)}),s=n.points,u=t.formulaOn;u==null&&(u="end");var a;if(u!=="none"){for(var f=0;f<s.length;f++)s[f][d]=u==="start"&&f===0||u==="all"||u==="end"&&f===s.length-1?n.expression:"";a=E.cloneAllDimensionInfo(),a[d]={}}return[{dimensions:a,data:s}]}}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(3),S=r(4),d=r(20);function l(E,t){if(t==null)return;var p=E.upstream;if(g.isArray(t)){for(var n=[],s=0;s<t.length;s++){var u=p.getDimensionInfo(t[s]);a(u,t[s]),n[s]=u.index}return n}else{var u=p.getDimensionInfo(t);return a(u,t),u.index}function a(f,c){if(!f)throw new Error("Can not find dimension by "+c)}}function m(E){if(g.isArray(E)){for(var t=[],p=[],n=0;n<E.length;n++){var s=u(E[n]);t.push(s.name),p.push(s.index)}return{name:t,index:p}}else if(E!=null)return u(E);function u(a){if(S.isNumber(a))return{index:a};if(d.isObject(a)&&S.isNumber(a.index))return a;throw new Error("Illegle new dimensions config. Expect `{ name: string, index: number }`.")}}return{normalizeExistingDimensions:l,normalizeNewDimensions:m}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){function g(d,l){if(Object.assign)Object.assign(d,l);else for(var m in l)l.hasOwnProperty(m)&&(d[m]=l[m]);return d}function S(d){const l=typeof d;return l==="function"||!!d&&l==="object"}return{extend:g,isObject:S}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(15),S=r(19);return{type:"ecStat:histogram",transform:function(l){var m=l.upstream,E=l.config||{},t=g(m.cloneRawData(),{method:E.method,dimensions:S.normalizeExistingDimensions(l,E.dimensions)});return[{dimensions:["MeanOfV0V1","VCount","V0","V1","DisplayableName"],data:t.data},{data:t.customData}]}}}.call(o,r,o,v),e!==void 0&&(v.exports=e)},function(v,o,r){var e;e=function(L){var g=r(1),S=r(4),d=r(19),l=S.isNumber;return{type:"ecStat:clustering",transform:function(E){var t=E.upstream,p=E.config||{},n=p.clusterCount;if(!l(n)||n<=0)throw new Error('config param "clusterCount" need to be specified as an interger greater than 1.');if(n===1)return[{},{data:[]}];var s=d.normalizeNewDimensions(p.outputClusterIndexDimension),u=d.normalizeNewDimensions(p.outputCentroidDimensions);if(s==null)throw new Error("outputClusterIndexDimension is required as a number.");for(var a=g.hierarchicalKMeans(t.cloneRawData(),{clusterCount:n,stepByStep:!1,dimensions:d.normalizeExistingDimensions(E,p.dimensions),outputType:g.OutputType.SINGLE,outputClusterIndexDimension:s.index,outputCentroidDimensions:(u||{}).index}),f=t.cloneAllDimensionInfo(),c=[],i=0;i<f.length;i++){var h=f[i];c.push(h.name)}if(c[s.index]=s.name,u)for(var i=0;i<u.index.length;i++)u.name[i]!=null&&(c[u.index[i]]=u.name[i]);return[{dimensions:c,data:a.data},{data:a.centroids}]}}}.call(o,r,o,v),e!==void 0&&(v.exports=e)}])})})(or);var cr=or.exports,sr=cr;const hr=fr(sr),gr=lr({__proto__:null,default:hr},[sr]);export{gr as i};
