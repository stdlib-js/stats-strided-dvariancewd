"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var q=c(function(C,p){
function _(r,e,a,i,R){var n,v,u,s,d,o,t;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||i===0)return 0;for(s=R,u=0,v=0,t=0;t<r;t++)d=a[s],n=d-v,v+=n/(t+1),u+=n*(d-v),s+=i;return u/o}p.exports=_
});var y=c(function(D,x){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=q();function O(r,e,a,i){return M(r,e,a,i,E(r,i))}x.exports=O
});var j=c(function(F,w){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),g=q();b(m,"ndarray",g);w.exports=m
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),f,l=k(h(__dirname,"./native.js"));z(l)?f=A:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
