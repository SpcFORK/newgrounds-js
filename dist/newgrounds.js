var newgrounds=(()=>{var oe=Object.defineProperty;var B=(n,p)=>oe(n,"name",{value:p,configurable:!0}),I=(n=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(n,{get:(p,c)=>(typeof require!="undefined"?require:p)[c]}):n)(function(n){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var A=(n,p)=>()=>(n&&(p=n(n=0)),p);var ae=(n,p)=>()=>(p||n((p={exports:{}}).exports,p),p.exports);function J(n){(function(p,c){typeof exports=="object"?module.exports=exports=c():typeof define=="function"&&define.amd?define([],c):n.CryptoJS=c()})(0,function(){var p=p||function(c,y){var o;if(typeof window!="undefined"&&window.crypto&&(o=window.crypto),!o&&typeof window!="undefined"&&window.msCrypto&&(o=window.msCrypto),!o&&typeof global!="undefined"&&global.crypto&&(o=global.crypto),!o&&typeof I=="function")try{o=I("crypto")}catch(i){}var f=B(function(){if(o){if(typeof o.getRandomValues=="function")try{return o.getRandomValues(new Uint32Array(1))[0]}catch(i){}if(typeof o.randomBytes=="function")try{return o.randomBytes(4).readInt32LE()}catch(i){}}throw new Error("Native crypto module could not be used to get secure random number.")},"i"),m=Object.create||function(){function i(){}return B(i,"t"),function(l){var g;return i.prototype=l,g=new i,i.prototype=null,g}}(),k={},S=k.lib={},_=S.Base={extend:function(i){var l=m(this);return i&&l.mixIn(i),l.hasOwnProperty("init")&&this.init!==l.init||(l.init=function(){l.$super.init.apply(this,arguments)}),l.init.prototype=l,l.$super=this,l},create:function(){var i=this.extend();return i.init.apply(i,arguments),i},init:function(){},mixIn:function(i){for(var l in i)i.hasOwnProperty(l)&&(this[l]=i[l]);i.hasOwnProperty("toString")&&(this.toString=i.toString)},clone:function(){return this.init.prototype.extend(this)}},C=S.WordArray=_.extend({init:function(i,l){i=this.words=i||[],this.sigBytes=l!=null?l:4*i.length},toString:function(i){return(i||Hex).stringify(this)},concat:function(i){var l=this.words,g=i.words,u=this.sigBytes,h=i.sigBytes;if(this.clamp(),u%4)for(var a=0;a<h;a++){var x=g[a>>>2]>>>24-a%4*8&255;l[u+a>>>2]|=x<<24-(u+a)%4*8}else for(a=0;a<h;a+=4)l[u+a>>>2]=g[a>>>2];return this.sigBytes+=h,this},clamp:function(){var i=this.words,l=this.sigBytes;i[l>>>2]&=4294967295<<32-l%4*8,i.length=c.ceil(l/4)},clone:function(){var i=_.clone.call(this);return i.words=this.words.slice(0),i},random:function(i){for(var l=[],g=0;g<i;g+=4)l.push(f());return new C.init(l,i)}}),w=k.enc={},M=w.Latin1={stringify:function(i){for(var l=i.words,g=i.sigBytes,u=[],h=0;h<g;h++){var a=l[h>>>2]>>>24-h%4*8&255;u.push(String.fromCharCode(a))}return u.join("")},parse:function(i){for(var l=i.length,g=[],u=0;u<l;u++)g[u>>>2]|=(255&i.charCodeAt(u))<<24-u%4*8;return new C.init(g,l)}},O=w.Utf8={stringify:function(i){try{return decodeURIComponent(escape(M.stringify(i)))}catch(l){throw new Error("Malformed UTF-8 data")}},parse:function(i){return M.parse(unescape(encodeURIComponent(i)))}};return S.BufferedBlockAlgorithm=_.extend({reset:function(){this._data=new C.init,this._nDataBytes=0},_append:function(i){typeof i=="string"&&(i=O.parse(i)),this._data.concat(i),this._nDataBytes+=i.sigBytes},_process:function(i){var l,g=this._data,u=g.words,h=g.sigBytes,a=this.blockSize,x=h/(4*a),e=(x=i?c.ceil(x):c.max((0|x)-this._minBufferSize,0))*a,r=c.min(4*e,h);if(e){for(var d=0;d<e;d+=a)this._doProcessBlock(u,d);l=u.splice(0,e),g.sigBytes-=r}return new C.init(l,r)},clone:function(){var i=_.clone.call(this);return i._data=this._data.clone(),i},_minBufferSize:0}),k.algo={},k}(Math);return function(){var c=p,y=c.lib.WordArray;c.enc.Base64={stringify:function(o){var f=o.words,m=o.sigBytes,k=this._map;o.clamp();for(var S=[],_=0;_<m;_+=3)for(var C=(f[_>>>2]>>>24-_%4*8&255)<<16|(f[_+1>>>2]>>>24-(_+1)%4*8&255)<<8|f[_+2>>>2]>>>24-(_+2)%4*8&255,w=0;w<4&&_+.75*w<m;w++)S.push(k.charAt(C>>>6*(3-w)&63));var M=k.charAt(64);if(M)for(;S.length%4;)S.push(M);return S.join("")},parse:function(o){var f=o.length,m=this._map,k=this._reverseMap;if(!k){k=this._reverseMap=[];for(var S=0;S<m.length;S++)k[m.charCodeAt(S)]=S}var _=m.charAt(64);if(_){var C=o.indexOf(_);C!==-1&&(f=C)}return function(w,M,O){for(var i=[],l=0,g=0;g<M;g++)if(g%4){var u=O[w.charCodeAt(g-1)]<<g%4*2,h=O[w.charCodeAt(g)]>>>6-g%4*2,a=u|h;i[l>>>2]|=a<<24-l%4*8,l++}return y.create(i,l)}(o,f,k)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),p.lib.Cipher||function(c){var y=p,o=y.lib,f=o.Base,m=o.WordArray,k=o.BufferedBlockAlgorithm,S=y.enc,_=(S.Utf8,S.Base64),C=y.algo.EvpKDF,w=o.Cipher=k.extend({cfg:f.extend(),createEncryptor:function(e,r){return this.create(this._ENC_XFORM_MODE,e,r)},createDecryptor:function(e,r){return this.create(this._DEC_XFORM_MODE,e,r)},init:function(e,r,d){this.cfg=this.cfg.extend(d),this._xformMode=e,this._key=r,this.reset()},reset:function(){k.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(r){return typeof r=="string"?x:h}return B(e,"t"),function(r){return{encrypt:function(d,t,s){return e(t).encrypt(r,d,t,s)},decrypt:function(d,t,s){return e(t).decrypt(r,d,t,s)}}}}()}),M=(o.StreamCipher=w.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),y.mode={}),O=o.BlockCipherMode=f.extend({createEncryptor:function(e,r){return this.Encryptor.create(e,r)},createDecryptor:function(e,r){return this.Decryptor.create(e,r)},init:function(e,r){this._cipher=e,this._iv=r}}),i=M.CBC=function(){var e=O.extend();function r(d,t,s){var v,b=this._iv;b?(v=b,this._iv=c):v=this._prevBlock;for(var D=0;D<s;D++)d[t+D]^=v[D]}return B(r,"r"),e.Encryptor=e.extend({processBlock:function(d,t){var s=this._cipher,v=s.blockSize;r.call(this,d,t,v),s.encryptBlock(d,t),this._prevBlock=d.slice(t,t+v)}}),e.Decryptor=e.extend({processBlock:function(d,t){var s=this._cipher,v=s.blockSize,b=d.slice(t,t+v);s.decryptBlock(d,t),r.call(this,d,t,v),this._prevBlock=b}}),e}(),l=(y.pad={}).Pkcs7={pad:function(e,r){for(var d=4*r,t=d-e.sigBytes%d,s=t<<24|t<<16|t<<8|t,v=[],b=0;b<t;b+=4)v.push(s);var D=m.create(v,t);e.concat(D)},unpad:function(e){var r=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=r}},g=(o.BlockCipher=w.extend({cfg:w.cfg.extend({mode:i,padding:l}),reset:function(){var e;w.reset.call(this);var r=this.cfg,d=r.iv,t=r.mode;this._xformMode==this._ENC_XFORM_MODE?e=t.createEncryptor:(e=t.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,d&&d.words):(this._mode=e.call(t,this,d&&d.words),this._mode.__creator=e)},_doProcessBlock:function(e,r){this._mode.processBlock(e,r)},_doFinalize:function(){var e,r=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(r.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),r.unpad(e)),e},blockSize:4}),o.CipherParams=f.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),u=(y.format={}).OpenSSL={stringify:function(e){var r=e.ciphertext,d=e.salt;return(d?m.create([1398893684,1701076831]).concat(d).concat(r):r).toString(_)},parse:function(e){var r,d=_.parse(e),t=d.words;return t[0]==1398893684&&t[1]==1701076831&&(r=m.create(t.slice(2,4)),t.splice(0,4),d.sigBytes-=16),g.create({ciphertext:d,salt:r})}},h=o.SerializableCipher=f.extend({cfg:f.extend({format:u}),encrypt:function(e,r,d,t){t=this.cfg.extend(t);var s=e.createEncryptor(d,t),v=s.finalize(r),b=s.cfg;return g.create({ciphertext:v,key:d,iv:b.iv,algorithm:e,mode:b.mode,padding:b.padding,blockSize:e.blockSize,formatter:t.format})},decrypt:function(e,r,d,t){return t=this.cfg.extend(t),r=this._parse(r,t.format),e.createDecryptor(d,t).finalize(r.ciphertext)},_parse:function(e,r){return typeof e=="string"?r.parse(e,this):e}}),a=(y.kdf={}).OpenSSL={execute:function(e,r,d,t){t||(t=m.random(8));var s=C.create({keySize:r+d}).compute(e,t),v=m.create(s.words.slice(r),4*d);return s.sigBytes=4*r,g.create({key:s,iv:v,salt:t})}},x=o.PasswordBasedCipher=h.extend({cfg:h.cfg.extend({kdf:a}),encrypt:function(e,r,d,t){var s=(t=this.cfg.extend(t)).kdf.execute(d,e.keySize,e.ivSize);t.iv=s.iv;var v=h.encrypt.call(this,e,r,s.key,t);return v.mixIn(s),v},decrypt:function(e,r,d,t){t=this.cfg.extend(t),r=this._parse(r,t.format);var s=t.kdf.execute(d,e.keySize,e.ivSize,r.salt);return t.iv=s.iv,h.decrypt.call(this,e,r,s.key,t)}})}(),function(){var c=p,y=c.lib.BlockCipher,o=c.algo,f=[],m=[],k=[],S=[],_=[],C=[],w=[],M=[],O=[],i=[];(function(){for(var u=[],h=0;h<256;h++)u[h]=h<128?h<<1:h<<1^283;var a=0,x=0;for(h=0;h<256;h++){var e=x^x<<1^x<<2^x<<3^x<<4;e=e>>>8^255&e^99,f[a]=e,m[e]=a;var r=u[a],d=u[r],t=u[d],s=257*u[e]^16843008*e;k[a]=s<<24|s>>>8,S[a]=s<<16|s>>>16,_[a]=s<<8|s>>>24,C[a]=s,s=16843009*t^65537*d^257*r^16843008*a,w[e]=s<<24|s>>>8,M[e]=s<<16|s>>>16,O[e]=s<<8|s>>>24,i[e]=s,a?(a=r^u[u[u[t^r]]],x^=u[u[x]]):a=x=1}})();var l=[0,1,2,4,8,16,32,64,128,27,54],g=o.AES=y.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var u=this._keyPriorReset=this._key,h=u.words,a=u.sigBytes/4,x=4*((this._nRounds=a+6)+1),e=this._keySchedule=[],r=0;r<x;r++)r<a?e[r]=h[r]:(s=e[r-1],r%a?a>6&&r%a==4&&(s=f[s>>>24]<<24|f[s>>>16&255]<<16|f[s>>>8&255]<<8|f[255&s]):(s=f[(s=s<<8|s>>>24)>>>24]<<24|f[s>>>16&255]<<16|f[s>>>8&255]<<8|f[255&s],s^=l[r/a|0]<<24),e[r]=e[r-a]^s);for(var d=this._invKeySchedule=[],t=0;t<x;t++){if(r=x-t,t%4)var s=e[r];else s=e[r-4];d[t]=t<4||r<=4?s:w[f[s>>>24]]^M[f[s>>>16&255]]^O[f[s>>>8&255]]^i[f[255&s]]}}},encryptBlock:function(u,h){this._doCryptBlock(u,h,this._keySchedule,k,S,_,C,f)},decryptBlock:function(u,h){var a=u[h+1];u[h+1]=u[h+3],u[h+3]=a,this._doCryptBlock(u,h,this._invKeySchedule,w,M,O,i,m),a=u[h+1],u[h+1]=u[h+3],u[h+3]=a},_doCryptBlock:function(u,h,a,x,e,r,d,t){for(var s=this._nRounds,v=u[h]^a[0],b=u[h+1]^a[1],D=u[h+2]^a[2],E=u[h+3]^a[3],z=4,F=1;F<s;F++){var R=x[v>>>24]^e[b>>>16&255]^r[D>>>8&255]^d[255&E]^a[z++],T=x[b>>>24]^e[D>>>16&255]^r[E>>>8&255]^d[255&v]^a[z++],P=x[D>>>24]^e[E>>>16&255]^r[v>>>8&255]^d[255&b]^a[z++],j=x[E>>>24]^e[v>>>16&255]^r[b>>>8&255]^d[255&D]^a[z++];v=R,b=T,D=P,E=j}R=(t[v>>>24]<<24|t[b>>>16&255]<<16|t[D>>>8&255]<<8|t[255&E])^a[z++],T=(t[b>>>24]<<24|t[D>>>16&255]<<16|t[E>>>8&255]<<8|t[255&v])^a[z++],P=(t[D>>>24]<<24|t[E>>>16&255]<<16|t[v>>>8&255]<<8|t[255&b])^a[z++],j=(t[E>>>24]<<24|t[v>>>16&255]<<16|t[b>>>8&255]<<8|t[255&D])^a[z++],u[h]=R,u[h+1]=T,u[h+2]=P,u[h+3]=j},keySize:8});c.AES=y._createHelper(g)}(),p})}var N=A(()=>{B(J,"setCrypto")});function L(n,p=0,c={}){var k,S,_,C,w,M,O;this.appID=n,this.cipher=p,J(this),this.medalDisplayTime=c.medalDisplayTime||5,this.showPopups=c.showPopups||!0,this.showDescriptions=c.showDescriptions||!0,this.debug=c.debug||!1,this.points=[5,10,25,50,100],this.displayMedalQueue=[];let o=new URL(window.location.href);this.sessionID=(k=o.searchParams.get("ngio_session_id"))!=null?k:0;let f=this.call("ScoreBoard.getBoards",0,0);this.scoreboards=(C=(_=(S=f==null?void 0:f.result)==null?void 0:S.data)==null?void 0:_.scoreboards)!=null?C:[];let m=this.call("Medal.getList",0,0);this.medals=(O=(M=(w=m==null?void 0:m.result)==null?void 0:w.data)==null?void 0:M.medals)!=null?O:[];for(let i of this.medals)i.image=new Image,i.image.src=i.icon,this.debug&&(i.unlocked=0)}var U=A(()=>{N();B(L,"connect")});function X(n){if(!this.medals||!this.medals.find(c=>c.id==n))return;let p=this.medals.find(c=>c.id==n);p.unlocked||(p.unlocked=!0,this.call("Medal.unlock",{id:p.id}))}function Q(n){return unescape(n.name+" ("+this.points[n.difficulty-1]+")"+(this.showDescriptions?" - "+n.description:""))}var W=A(()=>{B(X,"unlockMedal");B(Q,"getMedalText")});function H(n,p=0,c="A",y=0,o=0,f=10){var S,_;if(!this.scoreboards||!this.scoreboards.find(C=>C.id==n))return;let m=this.scoreboards.find(C=>C.id==n);return(_=(S=this.call("ScoreBoard.getScores",{id:m.id,user:p,period:c,social:y,skip:o,limit:f},0).result)==null?void 0:S.data)==null?void 0:_.scores}function K(n,p){if(!this.scoreboards||!this.scoreboards.find(y=>y.id==n))return;let c=this.scoreboards.find(y=>y.id==n);this.call("ScoreBoard.postScore",{id:c.id,value:p})}var q=A(()=>{B(H,"getScores");B(K,"postScore")});function ce(n,p,c,y,o,f=.5){if(!this.medals||!this.medals.find(_=>_.id==p))return;n.save(),n.fillStyle="#fff",n.strokeStyle="#000",n.shadowColor="#000",n.textBaseline="middle",n.textAlign="left",n.font=o/2+"px impact",n.lineWidth=o/35,n.shadowBlur=o/5,n.globalAlpha=f;let m=this.medals.find(_=>_.id==p);n.drawImage(m.image,c,y,o,o),n.strokeRect(c,y,o,o);let k=this.points[m.difficulty-1],S=this.getMedalText(m);n.lineWidth=Math.max(1,o/26),n.strokeText(S,c+o*1.2,y+o/2),n.fillText(S,c+o*1.2,y+o/2),n.restore()}function V(n){var p;if((p=this.displayMedalQueue)==null?void 0:p.length){let c=this.displayMedalQueue[0];c.time+=n,c.time>this.medalDisplayTime&&this.displayMedalQueue.shift()}}function $(n,p=50){var c;if((c=this.displayMedalQueue)==null?void 0:c.length){let y=this.displayMedalQueue[0],o=y.time<1?1-y.time:0,f=y.time>this.medalDisplayTime-1?this.medalDisplayTime-y.time:1,m=n.canvas.height+o*p*1.5;ce(n,y.index,0,m-p,p,f)}}var G=A(()=>{B(ce,"renderMedal");B(V,"update");B($,"render")});function Y(){var p,c,y,o;let n=this.call("App.checkSession");return(o=(y=(c=(p=n==null?void 0:n.result)==null?void 0:p.data)==null?void 0:c.session)==null?void 0:y.user)==null?void 0:o.name}function Z(){var p,c;let n=this.call("App.getCurrentVersion");return(c=(p=n==null?void 0:n.result)==null?void 0:p.data)==null?void 0:c.current_version}function ee(){var p,c,y,o;let n=this.call("App.checkSession");return(o=(y=(c=(p=n==null?void 0:n.result)==null?void 0:p.data)==null?void 0:c.session)==null?void 0:y.user)==null?void 0:o.supporter}var te=A(()=>{B(Y,"username");B(Z,"version");B(ee,"isSupporter")});function re(n){if(!this.cipher)return n;let p=this.CryptoJS.enc.Base64.parse(this.cipher),c=this.CryptoJS.lib.WordArray.random(16),y=this.CryptoJS.AES.encrypt(JSON.stringify(n),p,{iv:c}),o=this.CryptoJS.enc.Base64.stringify(c.concat(y.ciphertext));return n.secure=o,n.parameters=null,n}function ie(n,p=0,c=1){let y=this.encryptCall({component:n,parameters:p}),o={app_id:this.appID,session_id:this.sessionID,call:y},f=new FormData;f.append("input",JSON.stringify(o));let m=new XMLHttpRequest,k="https://newgrounds.io/gateway_v3.php";if(m.open("POST",k,this.debug?0:c),m.send(f),m.responseText)return this.debug&&console.log(m.responseText),this.responseText=m.responseText,JSON.parse(m.responseText)}var ne=A(()=>{B(re,"encryptCall");B(ie,"call")});var ue=ae((be,se)=>{U();W();q();G();te();ne();var de={connect:L,unlockMedal:X,getMedalText:Q,getScores:H,postScore:K,update:V,render:$,username:Y,version:Z,isSuporter:ee,call:ie,encryptCall:re};se.exports=de});return ue();})();
