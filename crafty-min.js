/*
 * Crafty v0.1
 * http://craftyjs.com
 *
 * Copyright 2010, Louis Stowasser
 * Dual licensed under the MIT or GPL licenses.
 */
(function(i,e){var k=function(q){return new k.fn.init(q)},h=1,m=50,c=1,f={},g={},d={},o=[],b,n=Array.prototype.slice,j=/\s*,\s*/,p=/\s+/;k.fn=k.prototype={init:function(u){if(typeof u==="string"){var s=0,y,x=false,v=false,z;if(u.indexOf(",")!==-1){v=true;z=j}else{if(u.indexOf(" ")!==-1){x=true;z=p}}for(y in g){if(!g.hasOwnProperty(y)){continue}if(x||v){var q=u.split(z),w=0,t=q.length,r=0;for(;w<t;w++){if(k(+y).has(q[w])){r++}}if(x&&r===t||v&&r>0){this[s++]=+y}}else{if(k(+y).has(u)){this[s++]=+y}}}if(s>0&&!x&&!v){this.extend(f[u])}if(q&&x){for(w=0;w<t;w++){this.extend(f[q[w]])}}this.length=s}else{if(!u){u=0;if(!(u in g)){g[u]=this}}if(!(u in g)){this.length=0;return this}this[0]=u;this.length=1;if(!this.__c){this.__c={}}if(!g[u]){g[u]=this}return g[u]}return this},addComponent:function(w){var t=[],v=0,s;if(arguments.length>1){var r=0,q=arguments.length;for(;r<q;r++){this.__c[arguments[r]]=true;t.push(arguments[r])}}else{if(w.indexOf(",")!==-1){var u=w.split(j),r=0,q=u.length;for(;r<q;r++){this.__c[u[r]]=true;t.push(u[r])}}else{this.__c[w]=true;t.push(w)}}s=t.length;for(;v<s;v++){comp=f[t[v]];this.extend(comp);if(comp&&"init" in comp){comp.init.call(this)}}return this},removeComponent:function(q){delete this.__c[q];return this},has:function(q){return !!this.__c[q]},attr:function(q,r){if(arguments.length===1){if(typeof q==="string"){return this[q]}this.extend(q);this.trigger("change");return this}this[q]=r;this.trigger("change");return this},toArray:function(){return n.call(this,0)},delay:function(q,r){this.each(function(){var s=this;setTimeout(function(){q.call(s)},r)})},bind:function(r,q){this.each(function(){if(!d[r]){d[r]={}}var s=d[r];if(!s[this[0]]){s[this[0]]=[]}s[this[0]].push(q)});return this},unbind:function(r,q){this.each(function(){var u=d[r],t=0,s,v;if(u[this[0]]){s=u[this[0]].length}else{return this}if(s===1||!q){delete u[this[0]];return this}for(;t<s;t++){v=u[this[0]];if(v[t]==q){v.splice(t,1);t--}}});return this},trigger:function(q,r){this.each(function(){if(d[q]&&d[q][this[0]]){var u=d[q][this[0]],t=0,s=u.length;for(;t<s;t++){u[t].call(this,r)}}});return this},each:function(s){var r=0,q=this.length;for(;r<q;r++){s.call(k(this[r]),r)}return this},destroy:function(){this.each(function(){this.trigger("remove");for(var q in d){this.unbind(q)}delete g[this[0]]})}};k.fn.init.prototype=k.fn;k.extend=k.fn.extend=function(r){var q=this;if(!r){return q}for(key in r){if(q===r[key]){continue}q[key]=r[key]}return q};k.extend({init:function(s,q,r){if(s){m=s}k.viewport.init(q,r);this.onload();b=setInterval(function(){k.trigger("enterframe",{frame:c++})},1000/m)},stop:function(){clearInterval(b)},e:function(){var r=a(),q;g[r]=null;g[r]=q=k(r);if(arguments.length>0){q.addComponent.apply(q,arguments)}q.addComponent("obj");return q},c:function(r,q){f[r]=q},trigger:function(u,v){var t=d[u],s,r,q;for(s in t){if(!t.hasOwnProperty(s)){continue}q=t[s].length;for(r=0;r<q;r++){if(t[s]&&t[s][r]){t[s][r].call(k(+s),v)}}}},frame:function(){return c},onload:function(r,t){if(!arguments.length){var s=0,q=o.length,u;for(;s<q;++s){u=o[s];if(u){u.fn.call(u.ctx)}}return this}o.push({ctx:r,fn:t});return this}});function a(){var q=h++;if(q in g){return a()}return q}i.Crafty=k})(window);(function(f,b,d){var c=Math,g=Math.floor,i=Math.ceil;(function(o){var n,q=function(s){n=s||64;this.map={}},r=Math,e=r.floor,p=" ";q.prototype={insert:function(x){var v=q.key(x),u=new m(v,x,this),t=0,s,w;for(t=v.x1;t<=v.x2;t++){for(s=v.y1;s<=v.y2;s++){w=t+p+s;if(!this.map[w]){this.map[w]=[]}this.map[w].push(x)}}return u},search:function(A,t){var B=q.key(A),z,v,x,y,s,w=[],u=[],C={};if(t===undefined){t=true}for(z=B.x1;z<=B.x2;z++){for(v=B.y1;v<=B.y2;v++){x=z+p+v;if(this.map[x]){w=w.concat(this.map[x])}}}if(t){for(z=0,l=w.length;z<l;z++){y=w[z];if(!y){continue}s=y[0];if(!C[s]&&y.x<A.x+A.w&&y.x+y.w>A.x&&y.y<A.y+A.h&&y.h+y.y>A.y){C[s]=w[z]}}for(y in C){u.push(C[y])}return u}else{return w}},remove:function(w,y){var v=0,u,x;if(arguments.length==1){y=w;w=q.key(y)}for(v=w.x1;v<=w.x2;v++){for(u=w.y1;u<=w.y2;u++){x=v+p+u;if(this.map[x]){var t=this.map[x],s=0,z=t.length;for(;s<z;s++){if(t[s]&&t[s][0]===y[0]){t.splice(s,1)}}}}}}};q.key=function(w){var t=e(w.x/n),v=e(w.y/n),s=e((w.w+w.x)/n),u=e((w.h+w.y)/n);return{x1:t,y1:v,x2:s,y2:u}};q.hash=function(s){return s.x1+p+s.y1+p+s.x2+p+s.y2};function m(s,u,t){this.keys=s;this.map=t;this.obj=u}m.prototype={update:function(s){if(q.hash(q.key(s))!=q.hash(this.keys)){this.map.remove(this.keys,this.obj);var t=this.map.insert(this.obj);this.keys=t.keys}}};o.HashMap=q})(f);f.map=new f.HashMap();f.c("2D",{_x:0,_y:0,_w:0,_h:0,_z:0,_entry:null,_attachy:[],init:function(){if(f.support.setter){this.__defineSetter__("x",function(e){this._attr("_x",e)});this.__defineSetter__("y",function(e){this._attr("_y",e)});this.__defineSetter__("w",function(e){this._attr("_w",e)});this.__defineSetter__("h",function(e){this._attr("_h",e)});this.__defineSetter__("z",function(e){this._attr("_z",e)});this.__defineGetter__("x",function(){return this._x});this.__defineGetter__("y",function(){return this._y});this.__defineGetter__("w",function(){return this._w});this.__defineGetter__("h",function(){return this._h});this.__defineGetter__("z",function(){return this._z})}else{this.x=this._x;this.y=this._y;this.w=this._w;this.h=this._h;this.z=this._z;this.bind("enterframe",function(){if(this.x!==this._x||this.y!==this._y||this.w!==this._w||this.h!==this._h||this.z!==this._z){var e=this.pos();this._x=this.x;this._y=this.y;this._w=this.w;this._h=this.h;this._z=this.z;this.trigger("move",e);this.trigger("change",e)}});f.support.setter=false}this._entry=f.map.insert(this);this.bind("move",function(){this._entry.update(this)});this.bind("remove",function(){f.map.remove(this);this.detach()})},area:function(){return this._w*this._h},intersect:function(e,p,m,n){var o;if(typeof e==="object"){o=e}else{o={x:e,y:p,w:m,h:n}}return this._x<o.x+o.w&&this._x+this._w>o.x&&this._y<o.y+o.h&&this._h+this._y>o.y},within:function(e,p,m,n){var o;if(typeof e==="object"){o=e}else{o={x:e,y:p,w:m,h:n}}return o.x>=this.x&&o.x+o.w<=this.x+this.w&&o.y>=this.y&&o.y+o.h<=this.y+this.h},pos:function(){return{_x:Math.floor(this._x),_y:Math.floor(this._y),_w:Math.floor(this._w),_h:Math.floor(this._h)}},isAt:function(e,m){return this.x<=e&&this.x+this.w>=e&&this.y<=m&&this.y+this.h>=m},move:function(e,m){if(e.charAt(0)==="n"){this.y-=m}if(e.charAt(0)==="s"){this.y+=m}if(e==="e"||e.charAt(1)==="e"){this.x+=m}if(e==="w"||e.charAt(1)==="w"){this.x-=m}},shift:function(e,o,m,n){if(e){this.x+=e}if(o){this.y+=o}if(m){this.w+=m}if(n){this.h+=n}},attach:function(e){function m(r){if(!r){return}var o=this.x-r._x,n=this.y-r._y,p=this.w-r._w,q=this.h-r._h;e.shift(o,n,p,q)}this.bind("move",m);this._attachy[e[0]]=m},detach:function(o){if(!o){var m,e=this._attachy;for(m in e){if(!e.hasOwnProperty(m)){continue}this.unbind("move",e[m]);this._attachy[m]=null;delete this._attachy[m]}return}var n=this._attachy[o[0]];this.unbind("move",n);this._attachy[o[0]]=null;delete this._attachy[o[0]]},_attr:function(m,n){var e=this.pos();this[m]=n;this.trigger("move",e);this.trigger("change",e)}});f.c("gravity",{_gravity:0.2,_gy:0,_bounce:0.8,_friction:0.8,_falling:true,_anti:null,init:function(){if(!this.has("2D")){this.addComponent("2D")}},gravity:function(e){if(e){this._anti=e}this.bind("enterframe",this._enterframe);return this},_enterframe:function(){if(this._falling){this._gy+=this._gravity*2;this.y+=this._gy}else{this._gy=0}var m=this,e=false;f(this._anti).each(function(){if(this.intersect(m.x,m.y+1,m.w,m.h)&&m!==this){e=this}});if(e){if(this._falling){this.stopFalling(e)}}else{this._falling=true}},stopFalling:function(m){if(m){this.y=m.y-this.h}this._falling=false;if(this.__move&&this.__move.up){this.__move.up=false}this.trigger("hit")},antigravity:function(){this.unbind("enterframe",this._enterframe)}});f.c("collision",{_collided:false,collision:function(e,n,m){var p=this,o=false;this.bind("enterframe",function(){if(typeof e==="string"){o=false;f(e).each(function(){if(this.intersect(p)){p._collided=true;o=this}});if(o){n.call(this,o)}else{if(m&&this._collided){m.call(this)}}}else{if(typeof e==="object"){if(e.intersect(p)){n.call(p,e)}}}});return this}});f.polygon=function(e){if(arguments.length>1){e=Array.prototype.slice.call(arguments,0)}this.points=e};f.polygon.prototype={containsPoint:function(e,r){var o=this.points,n,m,q=false;for(n=0,m=o.length-1;n<o.length;m=n++){if(((o[n][1]>r)!=(o[m][1]>r))&&(e<(o[m][0]-o[n][0])*(r-o[n][1])/(o[m][1]-o[n][1])+o[n][0])){q=!q}}return q},shift:function(e,p){var n=0,m=this.points.length,o;for(;n<m;n++){o=this.points[n];o[0]+=e;o[1]+=p}}};f.c("DOM",{_element:null,init:function(){this._element=d.createElement("div");f.stage.elem.appendChild(this._element);this._element.style.position="absolute";this._element.id="ent"+this[0];this.bind("change",this.draw);this.bind("remove",this.undraw)},DOM:function(e){if(!this.has("2D")){this.addComponent("2D")}this._element=e;this._element.style.position="absolute";return this},draw:function(){var e=this._element.style,m;e.top=Math.floor(this._y)+"px";e.left=Math.floor(this._x)+"px";e.width=Math.floor(this._w)+"px";e.height=Math.floor(this._h)+"px";e.zIndex=this.z;this.trigger("draw",{style:e,type:"DOM"});if(this.has("sprite")){m=this.__coord;e.background="url('"+this.__image+"') no-repeat -"+m[0]+"px -"+m[1]+"px"}},undraw:function(){f.stage.elem.removeChild(this._element)},css:function(o){var e,n=this._element,m=n.style;for(e in o){if(!o.hasOwnProperty(e)){continue}m[e]=o[e]}this.trigger("change")}});try{d.execCommand("BackgroundImageCache",false,true)}catch(a){}f.extend({inner:function(p){var o=p.getBoundingClientRect(),e=o.left,q=o.top,n,m;n=parseInt(this.getStyle(p,"border-left-width")||0,10);m=parseInt(this.getStyle(p,"border-top-width")||0,10);if(!n||!m){n=parseInt(this.getStyle(p,"borderLeftWidth")||0,10);m=parseInt(this.getStyle(p,"borderTopWidth")||0,10)}e+=n;q+=m;return{x:e,y:q}},getStyle:function(m,n){var e;if(m.currentStyle){e=m.currentStyle[n]}else{if(b.getComputedStyle){e=d.defaultView.getComputedStyle(m,null).getPropertyValue(n)}}return e}});f.extend({randRange:function(m,e){return Math.round(Math.random()*(e-m)+m)},sprite:function(q,m,e,o,n){var s,v,t,r,u,p;if(typeof q==="string"){e=m;m=q;q=1}if(!n&&o){n=o}o=parseInt(o||0,10);n=parseInt(n||0,10);for(s in e){if(!e.hasOwnProperty(s)){continue}v=e[s];t=v[0]*q+o;r=v[1]*q+n;u=v[2]*q||q;p=v[3]*q||q;f.c(s,{__image:m,__coord:[t,r,u,p],__tile:q,__padding:[o,n],init:function(){this.addComponent("sprite");if(this.has("canvas")){this.img=new Image();this.img.src=this.__image;var w=this;this.img.onload=function(){h.add(w)}}this.w=this.__coord[2];this.h=this.__coord[3]},sprite:function(z,C,A,B){this.__coord=[z*this.__tile+this.__padding[0],C*this.__tile+this.__padding[1],A*this.__tile||this.__tile,B*this.__tile||this.__tile];if(this.has("canvas")){h.add(this)}else{if(this.has("DOM")){this.draw()}}}})}return this},_events:{},addEvent:function(e,p,o,n){if(arguments.length===3){n=o;o=p;p=b.document}var m=function(q){var q=q||b.event;n.call(e,q)};if(!this._events[p+o+n]){this._events[p+o+n]=m}else{return}if(p.attachEvent){p.attachEvent("on"+o,m)}else{p.addEventListener(o,m,false)}},removeEvent:function(e,p,o,n){if(arguments.length===3){n=o;o=p;p=b.document}var m=this._events[p+o+n];if(m){if(p.detachEvent){p.detachEvent("on"+o,m)}else{p.removeEventListener(o,m,false)}delete this._events[p+o+n]}},window:{width:b.innerWidth||(b.document.documentElement.clientWidth||b.document.body.clientWidth),height:b.innerHeight||(b.document.documentElement.clientHeight||b.document.body.clientHeight)},background:function(e){f.stage.elem.style.background=e},viewport:{width:0,height:0,_x:0,_y:0,scroll:function(r,B){var p=this[r],e,x=0,w=0,t,s,y,C={},A,z=[];if(f.context){f.context.clearRect(0,0,this.width,this.height)}A={x:r=="_x"?p:this._x,y:r=="_y"?p:this._y,w:this.width,h:this.height};e=f.map.search(A,false);for(t=e.length;x<t;++x){y=e[x];if(!C[y[0]]){C[y[0]]=true;if(!z[y._z]){z[y._z]=[]}z[y._z].push(y)}}f("2D obj").each(function(){var m=this.pos();this[r]-=p-B;if(f.support.setter===false){this[r.substr(1)]=this[r];this.trigger("change",m)}this.trigger("move",m)});s=z.length;for(;w<s;w++){if(!z[w]){continue}var u=0,o=z[w].length;for(;u<o;u++){if("draw" in z[w][u]){z[w][u].draw()}}}this[r]=B},rect:function(){return{x:this._x,y:this._y,w:this.width,h:this.height}},init:function(e,m){this.width=e||f.window.width;this.height=m||f.window.height;if(!e&&!m){d.body.style.overflow="hidden"}var o=d.getElementById("cr-stage");f.stage={x:0,y:0,elem:(o?o:d.createElement("div"))};if(!o){d.body.appendChild(f.stage.elem);f.stage.elem.id="cr-stage"}var n=f.stage.elem.style,p;n.width=this.width+"px";n.height=this.height+"px";n.overflow="hidden";n.position="relative";p=f.inner(f.stage.elem);f.stage.x=p.x;f.stage.y=p.y;if(f.support.setter){this.__defineSetter__("x",function(q){this.scroll("_x",q)});this.__defineSetter__("y",function(q){this.scroll("_y",q)});this.__defineGetter__("x",function(){return this._x});this.__defineGetter__("y",function(){return this._y})}else{this.x=this._x;this.y=this._y;f.e("viewport")}}},support:{},keys:{BSP:8,TAB:9,ENT:13,SHF:16,CTR:17,ALT:18,PAU:19,CAP:20,ESC:27,SP:32,PGU:33,PGD:34,END:35,HOM:36,LA:37,UA:38,RA:39,DA:40,INS:45,DEL:46,D0:48,D1:49,D2:50,D3:51,D4:52,D5:53,D6:54,D7:55,D8:56,D9:57,SEM:59,EQL:61,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LWN:91,RWN:92,SEL:93,N0:96,N1:97,N2:98,N3:99,N4:100,N5:101,N6:102,N7:103,N8:104,N9:105,MUL:106,ADD:107,SUB:109,DEC:110,DIV:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM:144,SCR:145,COM:188,PER:190,FSL:191,ACC:192,OBR:219,BSL:220,CBR:221,QOT:222}});f.onload(this,function(){f.support.setter=("__defineSetter__" in this&&"__defineGetter__" in this);f.support.audio=("Audio" in b)});f.c("viewport",{init:function(){this.bind("enterframe",function(){if(f.viewport._x!==f.viewport.x){f.viewport.scroll("_x",f.viewport.x)}if(f.viewport._y!==f.viewport.y){f.viewport.scroll("_y",f.viewport.y)}})}});var h={add:function k(m,e){this.redraw(m,e);this.redraw(m)},redraw:function j(B,n){var C,E=0,D=0,p,r,v,s,H,I=0,G=false,e={},m=[];if(!n){G=true}n=n||B;C=f.map.search({x:n._x,y:n._y,w:n._w,h:n._h},false);for(E=0;E<C.length;++E){v=C[E];if(v.isCanvas&&!e[v[0]]&&v._x<n._x+n._w&&v._x+v._w>n._x&&v._y<n._y+n._h&&v._h+v._y>n._y){e[v[0]]=true;if(v===B&&!G){continue}if(!m[v._z]){m[v._z]=[]}m[v._z].push(v);++I}}if(I==0){return}if(I==1&&G){B.draw();return}for(E=0,p=m.length;E<p;++E){if(!m[E]){continue}H=m[E];r=H.length;for(D=0;D<r;++D){var o=H[D];if(o[0]!==B[0]){var u=(n._x-o._x<=0)?0:(n._x-o._x),t=Math.ceil(n._y-o._y<0?0:(n._y-o._y)),A=Math.min(o._w-u,n._w-(o._x-n._x),n._w),F=Math.ceil(Math.min(o._h-t,n._h-(o._y-n._y),n._h));if(F===0||A===0){continue}o.draw(u,t,A,F)}else{o.draw()}}}},remove:function(e){this.redraw(e,e)}};f.c("canvas",{isCanvas:true,buffer:50,init:function(){this.bind("change",function(m){m=m||this;f.context.clearRect(m._x,m._y,m._w,m._h);if((m._x+m._w>0-this.buffer&&m._y+m._h>0-this.buffer&&m._x<f.viewport.width+this.buffer&&m._y<f.viewport.height+this.buffer)||(this._x+this._w>0-this.buffer&&this._y+this._h>0-this.buffer&&this._x<f.viewport.width+this.buffer&&this._y<f.viewport.height+this.buffer)){h.add(this,m)}});this.bind("remove",function(){f.context.clearRect(this._x,this._y,this._w,this._h);h.remove(this)})},draw:function(e,r,m,n){var o={},q={_x:Math.floor(this._x),_y:Math.floor(this._y),_w:Math.floor(this._w),_h:Math.floor(this._h)},p=this.__coord||[];o.x=p[0];o.y=p[1];o.w=p[2];o.h=p[3];if(e!==undefined){o.x=p[0]+e;q._x+=e;if(r!==undefined){o.y=p[1]+r;q._y+=r}if(m!==undefined){o.w=m;q._w=m}if(n!==undefined){o.h=n;q._h=n}}this.trigger("draw",{type:"canvas",spritePos:o,pos:q});if(this.__c.sprite){if(!this.img.width){return}f.context.drawImage(this.img,o.x,o.y,o.w,o.h,q._x,q._y,q._w,q._h)}}});f.extend({context:null,_canvas:null,gz:0,canvas:function(e){if(typeof e==="string"){e=d.getElementById(e)}else{if(!e){e=d.createElement("canvas");this.stage.elem.appendChild(e)}}if(!("getContext" in e)){f.trigger("nocanvas");return}this.context=e.getContext("2d");this._canvas=e;this._canvas.width=this.viewport.width;this._canvas.height=this.viewport.height}});f.extend({down:null,over:null,mouseDispatch:function(r){var t=-1,n,m,p=0,o;m=f.map.search(f.viewport.rect());for(o=m.length;p<o;++p){if(!m[p].has("mouse")){continue}var s=m[p],u=false,w=r.clientX-f.stage.x,v=r.clientY-f.stage.y;if(s.map){if(s.map.containsPoint(w,v)){u=true}}else{if(s.isAt(w,v)||s.has("DOM")){u=true}}if(u&&(s._z>=t||t===-1)){if(s._z===t&&s[0]<n[0]){continue}t=s._z;n=s}}if(n){if(r.type==="mousedown"){this.down=n}if(r.type==="mouseup"){if(this.down&&n===this.down){this.down.trigger("click",r);this.down=null;return}this.down=null}if(r.type==="mousemove"){if(this.over!==n){if(this.over){this.over.trigger("mouseout",r);this.over=null}this.over=n;n.trigger("mouseover",r);return}}n.trigger(r.type,r)}else{if(r.type==="mousemove"&&this.over){this.over.trigger("mouseout",r);this.over=null}}}});f.onload(this,function(){f.addEvent(this,f.stage.elem,"mousedown",f.mouseDispatch);f.addEvent(this,f.stage.elem,"mouseup",f.mouseDispatch);f.addEvent(this,f.stage.elem,"mousemove",f.mouseDispatch)});f.c("mouse",{areaMap:function(o){if(arguments.length>1){var m=Array.prototype.slice.call(arguments,0),n=0,e=m.length;for(;n<e;n++){m[n][0]+=this.x;m[n][1]+=this.y}o=new f.polygon(m)}this.map=o;this.attach(this.map);return this}});f.c("controls",{init:function(){function e(m){this.trigger(m.type,m)}f.addEvent(this,"keydown",e);f.addEvent(this,"keyup",e);this.bind("remove",function(){f.removeEvent(this,"keydown",e);f.removeEvent(this,"keyup",e)});return this},preventTypeaheadFind:function(m){if(!(m.metaKey||m.altKey||m.shiftKey||m.ctrlKey)&&m.preventDefault){m.preventDefault()}}});f.c("fourway",{__move:{left:false,right:false,up:false,down:false},_speed:3,fourway:function(m){if(m){this._speed=m}var e=this.__move;this.bind("enterframe",function(){var n=this.pos(),o=false;if(e.right){this.x+=this._speed;o=true}if(e.left){this.x-=this._speed;o=true}if(e.up){this.y-=this._speed;o=true}if(e.down){this.y+=this._speed;o=true}if(o){this.trigger("change",n)}}).bind("keydown",function(n){if(n.keyCode===f.keys.RA||n.keyCode===f.keys.D){e.right=true}if(n.keyCode===f.keys.LA||n.keyCode===f.keys.A){e.left=true}if(n.keyCode===f.keys.UA||n.keyCode===f.keys.W){e.up=true}if(n.keyCode===f.keys.DA||n.keyCode===f.keys.S){e.down=true}this.preventTypeaheadFind(n)}).bind("keyup",function(n){if(n.keyCode===f.keys.RA||n.keyCode===f.keys.D){e.right=false}if(n.keyCode===f.keys.LA||n.keyCode===f.keys.A){e.left=false}if(n.keyCode===f.keys.UA||n.keyCode===f.keys.W){e.up=false}if(n.keyCode===f.keys.DA||n.keyCode===f.keys.S){e.down=false}this.preventTypeaheadFind(n)});return this}});f.c("twoway",{__move:{left:false,right:false,up:false,falling:false},_speed:3,twoway:function(n,m){if(n){this._speed=n}m=m||this._speed*2;var e=this.__move;this.bind("enterframe",function(){var o=this.pos(),p=false;if(e.right){this.x+=this._speed;p=true}if(e.left){this.x-=this._speed;p=true}if(e.up){this.y-=m;this._falling=true;p=true}if(p){this.trigger("change",o)}}).bind("keydown",function(o){if(o.keyCode===f.keys.RA||o.keyCode===f.keys.D){e.right=true}if(o.keyCode===f.keys.LA||o.keyCode===f.keys.A){e.left=true}if(o.keyCode===f.keys.UA||o.keyCode===f.keys.W){e.up=true}}).bind("keyup",function(o){if(o.keyCode===f.keys.RA||o.keyCode===f.keys.D){e.right=false}if(o.keyCode===f.keys.LA||o.keyCode===f.keys.A){e.left=false}});return this}});f.c("animate",{_reels:{},_frame:null,_current:null,animate:function(e,o,t,p){if(arguments.length===2&&typeof o==="number"){this._current=e;var n=this._reels[e],m=o;this._frame={reel:n,frameTime:Math.ceil(m/n.length),frame:0,current:0};this.bind("enterframe",this.drawFrame);return this}if(typeof o==="number"){var s=p+1-o,q=o,n=[],r=this.__tile;for(;q<=p;q++){n.push([q*r,t*r])}this._reels[e]=n}else{if(typeof o==="object"){this._reels[e]=o}}return this},drawFrame:function(n){var m=this._frame;if(this._frame.current++===m.frameTime){var o=m.reel[m.frame++];this.__coord[0]=o[0];this.__coord[1]=o[1];this._frame.current=0}if(m.frame===m.reel.length&&this._frame.current===m.frameTime){m.frame=0;this.stop();return}this.trigger("change")},stop:function(){this.unbind("enterframe",this.drawFrame);this._current=null;this._frame=null},isPlaying:function(e){if(!e){return !!this._interval}return this._current===e}});f.c("color",{_color:"",init:function(){this.bind("draw",function(m){if(m.type==="DOM"){m.style.background=this._color;m.style.lineHeight=0}else{if(m.type==="canvas"){if(this._color){f.context.fillStyle=this._color}f.context.fillRect(m.pos._x,m.pos._y,m.pos._w,m.pos._h)}}})},color:function(e){this._color=e;this.trigger("change");return this}});f.c("image",{_repeat:"repeat",init:function(){this.bind("draw",function(m){if(m.type==="canvas"){this.canvasDraw()}else{if(m.type==="DOM"){m.style.background="url("+this.__image+") "+this._repeat}}})},image:function(e,m){this.__image=e;this._repeat=m||"repeat";if(this.has("canvas")){this.img=new Image();this.img.src=e;f.addEvent(this,this.img,"load",function(){h.add(this)})}this.trigger("change");return this},canvasDraw:function(){if(!this.img){return}var o=0,e,n=0,m;switch(this._repeat){case"repeat-x":if(this.img.width===0){return}for(e=Math.floor(this._w/this.img.width);o<e;o++){f.context.drawImage(this.img,this._x+this.img.width*o,this._y)}break;case"repeat-y":if(this.img.height===0){return}for(e=Math.floor(this._h/this.img.height);o<=e;o++){f.context.drawImage(this.img,this._x,this._y+this.img.height*o)}break;default:if(this.img.width===0||this.img.height===0){return}for(e=Math.floor(this._w/this.img.width);o<e;o++){f.context.drawImage(this.img,this._x+this.img.width*o,this._y);for(n=0,m=Math.floor(this._h/this.img.height);n<=m;n++){f.context.drawImage(this.img,this._x+this.img.width*o,this._y+this.img.height*n)}}break}}});f.extend({_scenes:[],_current:null,scene:function(e,m){if(arguments.length===1){f("2D").destroy();this._scenes[e].call(this);this._current=e;return}this._scenes[e]=m;return}});f.c("group",{_children:[],group:function(e){this._children=e;this.bind("move",function(t){var o=t._x-this.x,n=t._y-this.y,p=t._w-this.w,r=t._h-this.h,q=0,m=this._children.length,s;for(;q<m;q++){s=this._children[q];if(o){s.x-=o}if(n){s.y-=n}if(p){s.w-=p}if(r){s.h-=r}}});this.bind("remove",function(){var n=0,m=this._children.length,o;for(;n<m;n++){o.destroy()}})}});f.extend({group:function(){var t=f.e("2D, group"),r=Array.prototype.slice.call(arguments),p=0,n=r.length,o,e,m,s,q;for(;p<n;p++){q=r[p];q.removeComponent("obj");if(q.x<o||!o){o=q.x}if(q.x+q.w>o+e||!e){e=q.x+q.w-o}if(q.y<m||!m){m=q.y}if(q.y+q.h<m+s||!s){s=q.y+q.h-m}}t.attr({x:o,y:m,w:e,h:s}).group(r);return t}});f.extend({isometric:{_tile:0,_z:0,init:function(e){this._tile=e;return this},place:function(o,s,q,p){var e=o*this._tile+(s&1)*(this._tile/2),r=s*this._tile/4,r=r-q*(this._tile/2);p.attr({x:e+f.viewport._x,y:r+f.viewport._y}).z+=q;return this},zoom:function(e){this._tile=e;f.trigger("zoom",{tile:e});return this}}});f.extend({audio:{_elems:{},type:{mp3:"audio/mpeg;",ogg:'audio/ogg; codecs="vorbis"',wav:'audio/wav; codecs="1"',mp4:'audio/mp4; codecs="mp4a.40.2"'},add:function(o,n){if(!f.support.audio){return}var q,u,s=new Audio(),p;if(!s.canPlayType){return}if(arguments.length===1&&typeof o==="object"){for(u in o){if(!o.hasOwnProperty(u)){continue}if(typeof o[u]!=="string"){var m=o[u],t=0,r=m.length,e;for(;t<r;++t){e=m[t];ext=e.substr(e.lastIndexOf(".")+1);p=s.canPlayType(this.type[ext]);if(p!==""&&p!=="no"){n=e;break}}}else{n=o[u]}this._elems[u]=new Audio(n);this._elems[u].preload="auto";this._elems[u].load()}return this}if(typeof n!=="string"){var t=0,r=n.length,e;for(;t<r;++t){e=n[t];ext=e.substr(e.lastIndexOf(".")+1);p=s.canPlayType(this.type[ext]);if(p!==""&&p!=="no"){n=e;break}}}this._elems[o]=new Audio(n);this._elems[o].preload="auto";this._elems[o].load();return this},play:function(m){if(!f.support.audio){return}var e=this._elems[m];if(e.ended||!e.currentTime){e.play()}return this},settings:function(p,n){if(!n){for(var e in this._elems){this.settings(e,p)}return this}var o=this._elems[p];for(var m in n){o[m]=n[m]}return this}}});f.c("text",{_text:"",_font:"",init:function(){this.bind("draw",function(o){if(o.type==="DOM"){var n=this._element,m=n.style;n.innerHTML=this._text;m.font=this._font}else{}})},text:function(e){if(!e){return this._text}this._text=e;this.trigger("change");return this},font:function(e){this._font=e;this.trigger("change")}});f.c("health",{_mana:100,health:function(e){this._mana=e;return this},hurt:function(e){this._mana-=e;this.trigger("hurt",{by:e,mana:this._mana});if(this._mana<=0){this.trigger("die")}return this},heal:function(e){this._mana+=e;this.trigger("heal");return this}});f.c("score",{_score:0,incrementScore:function(e){this._score+=e;return this},decrementScore:function(e){this._score-=e;return this}});f.extend({load:function(p,s){var n=0,e=p.length,r,q,o=e,m=0;for(;n<e;++n){r=p[n];ext=r.substr(r.lastIndexOf(".")+1).toLowerCase();if((ext==="mp3"||ext==="wav"||ext==="ogg"||ext==="mp4")&&f.support.audio){q=new Audio(r)}else{if(ext==="jpg"||ext==="jpeg"||ext==="gif"||ext==="png"){q=new Image();q.src=r}else{o--;continue}}q.onload=function(){++m;if(m===o){s()}}}}})})(Crafty,window,window.document);