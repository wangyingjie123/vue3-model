var h=function(){this._tweens={},this._tweensAddedDuringUpdate={}};h.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,n){var e=Object.keys(this._tweens);if(e.length===0)return!1;for(t=t!==void 0?t:a.now();0<e.length;){this._tweensAddedDuringUpdate={};for(var r=0;r<e.length;r++){var i=this._tweens[e[r]];i&&i.update(t)===!1&&(i._isPlaying=!1,n||delete this._tweens[e[r]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var a=new h;a.Group=h,a._nextId=0,a.nextId=function(){return a._nextId++},typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?a.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?a.now=self.performance.now.bind(self.performance):Date.now!==void 0?a.now=Date.now:a.now=function(){return new Date().getTime()},a.Tween=function(t,n){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=a.Easing.Linear.None,this._interpolationFunction=a.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=n||a,this._id=a.nextId()},a.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,n){return this._valuesEnd=Object.create(t),n!==void 0&&(this._duration=n),this},duration:function(t){return this._duration=t,this},start:function(t){for(var n in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=t!==void 0?typeof t=="string"?a.now()+parseFloat(t):t:a.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[n]instanceof Array){if(this._valuesEnd[n].length===0)continue;this._valuesEnd[n]=[this._object[n]].concat(this._valuesEnd[n])}this._object[n]!==void 0&&(this._valuesStart[n]=this._object[n],!(this._valuesStart[n]instanceof Array)&&(this._valuesStart[n]*=1),this._valuesStartRepeat[n]=this._valuesStart[n]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var n,e,r;if(t<this._startTime)return!0;for(n in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(t-this._startTime)/this._duration,e=this._duration===0||1<e?1:e,r=this._easingFunction(e),this._valuesEnd)if(this._valuesStart[n]!==void 0){var i=this._valuesStart[n]||0,s=this._valuesEnd[n];s instanceof Array?this._object[n]=this._interpolationFunction(s,r):(typeof s=="string"&&(s=s.charAt(0)==="+"||s.charAt(0)==="-"?i+parseFloat(s):parseFloat(s)),typeof s=="number"&&(this._object[n]=i+(s-i)*r))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),e!==1)return!0;if(0<this._repeat){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo){var o=this._valuesStartRepeat[n];this._valuesStartRepeat[n]=this._valuesEnd[n],this._valuesEnd[n]=o}this._valuesStart[n]=this._valuesStartRepeat[n]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var u=0,l=this._chainedTweens.length;u<l;u++)this._chainedTweens[u].start(this._startTime+this._duration);return!1}},a.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return--t*t*(2.70158*t+1.70158)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((1+n)*t-n)*.5:.5*((t-=2)*t*((1+n)*t+n)+2)}},Bounce:{In:function(t){return 1-a.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*a.Easing.Bounce.In(2*t):.5*a.Easing.Bounce.Out(2*t-1)+.5}}},a.Interpolation={Linear:function(t,n){var e=t.length-1,r=e*n,i=Math.floor(r),s=a.Interpolation.Utils.Linear;return n<0?s(t[0],t[1],r):1<n?s(t[e],t[e-1],e-r):s(t[i],t[e<i+1?e:i+1],r-i)},Bezier:function(t,n){for(var e=0,r=t.length-1,i=Math.pow,s=a.Interpolation.Utils.Bernstein,o=0;o<=r;o++)e+=i(1-n,r-o)*i(n,o)*t[o]*s(r,o);return e},CatmullRom:function(t,n){var e=t.length-1,r=e*n,i=Math.floor(r),s=a.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(i=Math.floor(r=e*(1+n))),s(t[(i-1+e)%e],t[i],t[(i+1)%e],t[(i+2)%e],r-i)):n<0?t[0]-(s(t[0],t[0],t[1],t[1],-r)-t[0]):1<n?t[e]-(s(t[e],t[e],t[e-1],t[e-1],r-e)-t[e]):s(t[i?i-1:0],t[i],t[e<i+1?e:i+1],t[e<i+2?e:i+2],r-i)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=a.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var r=n;1<r;r--)e*=r;return t[n]=e}}(),CatmullRom:function(t,n,e,r,i){var s=.5*(e-t),o=.5*(r-n),u=i*i;return(2*n-2*e+s+o)*(i*u)+(-3*n+3*e-2*s-o)*u+s*i+n}}},function(t){typeof define=="function"&&define.amd?define([],function(){return a}):typeof module!="undefined"&&typeof exports=="object"?module.exports=a:t!==void 0&&(t.TWEEN=a)}(globalThis);export{a as T};