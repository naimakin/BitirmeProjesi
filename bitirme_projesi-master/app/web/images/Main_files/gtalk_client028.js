function if_6e(a,b){return a.coords=b}var if_7e="abort",if_8e="message",if_9e="coords",if_$e="fileName";var if_0=function(a,b,c,d){if_S[if_w](this);if(!if_B(a)||!if_B(b))if_a(Error("Start and end parameters must be arrays"));if(a[if_m]!=b[if_m])if_a(Error("Start and end points must be the same length"));this.startPoint=a;this.endPoint=b;this.duration=c;this.accel=d;if_6e(this,[])};if_G(if_0,if_S);
var if_af={},if_bf=if_c,if_cf=function(){if_4c[if_za](if_bf);var a=if_D();for(var b in if_af)if_af[b].cycle(a);if_bf=if_Bb(if_af)?if_c:if_4c[if_n](if_cf,20)},if_df=function(a){var b=if_lb(a);b in if_af||(if_af[b]=a);if_bf||(if_bf=if_4c[if_n](if_cf,20))},if_ef=function(a){var b=if_lb(a);delete if_af[b];if(if_bf&&if_Bb(if_af)){if_4c[if_za](if_bf);if_bf=if_c}};if_0[if_].w=0;if_0[if_].bc=0;if_0[if_].progress=0;if_0[if_].$=if_c;if_0[if_].Yb=if_c;if_0[if_].sb=if_c;
if_0[if_].play=function(a){if(a||this.w==0){this.progress=0;if_6e(this,this.startPoint)}else if(this.w==1)return if_d;if_ef(this);this.$=if_D();if(this.w==-1)this.$-=this.duration*this.progress;this.Yb=this.$+this.duration;this.sb=this.$;this.progress||this.Xa();this.Td();this.w==-1&&this.Ud();this.w=1;if_df(this);this.cycle(this.$);return if_b};if_0[if_].stop=function(a){if_ef(this);this.w=0;if(a)this.progress=1;this.Ib(this.progress);this.Wd();this.wa()};
if_0[if_].a=function(){this.w!=0&&this[if_sa](if_d);this.Qd();if_0.o.a[if_w](this)};if_0[if_].cycle=function(a){this.progress=(a-this.$)/(this.Yb-this.$);if(this.progress>=1)this.progress=1;this.bc=1000/(a-this.sb);this.sb=a;if_hb(this.accel)?this.Ib(this.accel(this.progress)):this.Ib(this.progress);if(this.progress==1){this.w=0;if_ef(this);this.Sd();this.wa()}else this.w==1&&this.Wa()};
if_0[if_].Ib=function(a){if_6e(this,new Array(this.startPoint[if_m]));for(var b=0;b<this.startPoint[if_m];b++)this[if_9e][b]=(this.endPoint[b]-this.startPoint[b])*a+this.startPoint[b]};if_0[if_].Wa=function(){this.L("animate")};if_0[if_].Xa=function(){this.L("begin")};if_0[if_].Qd=function(){this.L("destroy")};if_0[if_].wa=function(){this.L("end")};if_0[if_].Sd=function(){this.L("finish")};if_0[if_].Td=function(){this.L("play")};if_0[if_].Ud=function(){this.L("resume")};if_0[if_].Wd=function(){this.L("stop")};
if_0[if_].L=function(a){this[if_t](new if_ff(a,this))};var if_ff=function(a,b){if_M[if_w](this,a);if_6e(this,b[if_9e]);this.x=b[if_9e][0];this.y=b[if_9e][1];this.z=b[if_9e][2];this.duration=b.duration;this.progress=b.progress;this.fps=b.bc;this.state=b.w;this.anim=b};if_G(if_ff,if_M);var if_gf=function(a,b,c,d,e){if_0[if_w](this,b,c,d,e);this.element=a};if_G(if_gf,if_0);if_gf[if_].Fa=if_eb;if_gf[if_].Wa=function(){this.Fa();if_gf.o.Wa[if_w](this)};if_gf[if_].wa=function(){this.Fa();if_gf.o.wa[if_w](this)};if_gf[if_].Xa=function(){this.Fa();if_gf.o.Xa[if_w](this)};var if_hf=function(a,b,c,d,e){if(typeof b=="number")b=[b];if(typeof c=="number")c=[c];if_gf[if_w](this,a,b,c,d,e);if(b[if_m]!=1||c[if_m]!=1)if_a(Error("Start and end points must be 1D"))};if_G(if_hf,if_gf);
if_hf[if_].Fa=function(){if_Ad(this.element,this[if_9e][0])};if_hf[if_].show=function(){if_k(this.element[if_u],"")};if_hf[if_].hide=function(){if_k(this.element[if_u],"none")};var if_if=function(a,b,c){if_hf[if_w](this,a,1,0,b,c)};if_G(if_if,if_hf);var if_lf=function(a,b){try{var c=if_jf(a),d="Message: "+if_Qb(c[if_8e])+'\nUrl: <a href="view-source:'+c[if_$e]+'" target="_new">'+c[if_$e]+"</a>\nLine: "+c.lineNumber+"\n\nBrowser stack:\n"+if_Qb(c.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+if_Qb(if_kf(b)+"-> ");return d}catch(e){return"Exception trying to expose exception! You win, we lose. "+e}},if_jf=function(a){var b=if_db("window.location.href");return typeof a=="string"?{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,
stack:"Not available"}:!a.lineNumber||!a[if_$e]||!a.stack?{message:a[if_8e],name:a[if_1a],lineNumber:a.lineNumber||a.line||"Not available",fileName:a[if_$e]||a.filename||a.sourceURL||b,stack:a.stack||"Not available"}:a},if_kf=function(a){return if_mf(a||arguments.callee.caller,[])},if_mf=function(a,b){var c=[];if(if_rb(b,a))c[if_l]("[...circular reference...]");else if(a&&b[if_m]<50){c[if_l](if_nf(a)+"(");for(var d=a.arguments,e=0;e<d[if_m];e++){e>0&&c[if_l](", ");var f,g=d[e];switch(typeof g){case "object":f=
g?"object":"null";break;case "string":f=g;break;case "number":f=if_f(g);break;case "boolean":f=g?"true":"false";break;case "function":f=(f=if_nf(g))?f:"[fn]";break;case "undefined":default:f=typeof g;break}if(f[if_m]>40)f=f[if_ab](0,40)+"...";c[if_l](f)}b[if_l](a);c[if_l](")\n");try{c[if_l](if_mf(a.caller,b))}catch(h){c[if_l]("[exception trying to get caller]\n")}}else a?c[if_l]("[...long stack...]"):c[if_l]("[end]");return c[if_6a]("")},if_nf=function(a){var b=if_f(a);if(!if_of[b]){var c=/function ([^\(]+)/[if_Aa](b);
if(c){var d=c[1];if_of[b]=d}else if_of[b]="[Anonymous]"}return if_of[b]},if_of={};var if_qf=function(a,b,c,d,e){this.Qe=typeof e=="number"?e:if_pf++;this.Re=d||if_D();this.ga=a;this.Ne=b;this.Me=c};if_qf[if_].hd=if_c;if_qf[if_].gd=if_c;var if_pf=0;if_qf[if_].be=function(a){this.hd=a};if_qf[if_].ce=function(a){this.gd=a};if_qf[if_].Bb=function(a){this.ga=a};var if_1=function(a){this.Ie=a;this.vb=if_c;this.Be={};this.Ad=[]};if_1[if_].ga=if_c;var if_2=function(a,b){this.name=a;if_ja(this,b)};if_fa(if_2[if_],function(){return this[if_1a]});new if_2("OFF",Infinity);new if_2("SHOUT",1200);new if_2("SEVERE",1000);var if_rf=new if_2("WARNING",900);new if_2("INFO",800);var if_sf=new if_2("CONFIG",700),if_tf=new if_2("FINE",500);new if_2("FINER",400);var if_uf=new if_2("FINEST",300);new if_2("ALL",0);if_1[if_].Bb=function(a){this.ga=a};
if_1[if_].rb=function(a){if(this.ga)return a[if_Ha]>=this.ga[if_Ha];if(this.vb)return this.vb.rb(a);return if_d};if_1[if_].log=function(a,b,c){this.rb(a)&&this.Ld(this.od(a,b,c))};if_1[if_].od=function(a,b,c){var d=new if_qf(a,if_f(b),this.Ie);if(c){d.be(c);d.ce(if_lf(c,arguments.callee.caller))}return d};if_1[if_].warning=function(a,b){this.log(if_rf,a,b)};if_1[if_].fine=function(a,b){this.log(if_tf,a,b)};if_1[if_].finest=function(a,b){this.log(if_uf,a,b)};
if_1[if_].Ld=function(a){if(this.rb(a.ga))for(var b=this;b;){b.ad(a);b=b.vb}};if_1[if_].ad=function(a){for(var b=0;b<this.Ad[if_m];b++)this.Ad[b](a)};if_1[if_].ge=function(a){this.vb=a};if_1[if_].Xc=function(a,b){this.Be[a]=b};
var if_vf={},if_wf=if_c,if_xf=function(){if(!if_wf){if_wf=new if_1("");if_vf[""]=if_wf;if_wf.Bb(if_sf)}},if_zf=function(a){if_xf();return a in if_vf?if_vf[a]:if_yf(a)},if_yf=function(a){var b=new if_1(a),c=a[if_q]("."),d=c[c[if_m]-1];if_ga(c,c[if_m]-1);var e=c[if_6a]("."),f=if_zf(e);f.Xc(d,b);b.ge(f);return if_vf[a]=b};/\uffff/[if_ya]("\uffff");var if_Af=function(){if(if_I){this.ca={};this.Jb={};this.Hb=[]}};if_Af[if_].h=if_zf("goog.net.xhrMonitor");if_Af[if_].Cc=function(a){if(if_I){var b=if_C(a)?a:if_ib(a)?if_lb(a):"";this.h.finest("Pushing context: "+a+" ("+b+")");this.Hb[if_l](b)}};if_Af[if_].yc=function(){if(if_I){var a=this.Hb.pop();this.h.finest("Popping context: "+a);this.ue(a)}};
if_Af[if_].Pd=function(a){if(if_I){var b=if_lb(a);this.h.fine("Opening XHR : "+b);for(var c=0;c<this.Hb[if_m];c++){var d=this.Hb[c];this.Ia(this.ca,d,b);this.Ia(this.Jb,b,d)}}};if_Af[if_].Od=function(a){if(if_I){var b=if_lb(a);this.h.fine("Closing XHR : "+b);delete this.Jb[b];for(var c in this.ca){if_sb(this.ca[c],b);this.ca[c][if_m]==0&&delete this.ca[c]}}};
if_Af[if_].ue=function(a){var b=this.Jb[a],c=this.ca[a];if(b&&c){this.h.finest("Updating dependent contexts");if_qb(b,function(d){if_qb(c,function(e){this.Ia(this.ca,d,e);this.Ia(this.Jb,e,d)},this)},this)}};if_Af[if_].Ia=function(a,b,c){a[b]||(a[b]=[]);if_rb(a[b],c)||a[b][if_l](c)};var if_Bf=new if_Af;var if_Df=function(){return if_Cf()},if_Cf=if_c,if_Ef=if_c,if_Ff=if_c,if_Gf=function(a,b){if_Cf=a;if_Ef=b;if_Ff=if_c},if_If=function(){var a=if_Hf();return a?new ActiveXObject(a):new XMLHttpRequest},if_Jf=function(){var a=if_Hf(),b={};if(a){b[0]=if_b;b[1]=if_b}return b};if_Gf(if_If,if_Jf);
var if_Kf=if_c,if_Hf=function(){if(!if_Kf&&typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){for(var a=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b=0;b<a[if_m];b++){var c=a[b];try{new ActiveXObject(c);return if_Kf=c}catch(d){}}if_a(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))}return if_Kf};var if_3=function(){if_S[if_w](this);this.headers=new if_V};if_G(if_3,if_S);if_3[if_].h=if_zf("goog.net.XhrIo");var if_Lf=[],if_Nf=function(a,b,c,d,e,f){var g=new if_3;if_Lf[if_l](g);b&&if_R(g,"complete",b);if_R(g,"ready",if_ob(if_Mf,g));f&&g.je(f);g.send(a,c,d,e)},if_Of=function(){for(var a=if_Lf;a[if_m];)a.pop().dispose()},if_Pf=function(a,b){if_3[if_].xa=a.protectEntryPoint(if_3[if_].xa,b)},if_Mf=function(a){a.dispose();if_sb(if_Lf,a)};if_3[if_].K=if_d;if_3[if_].e=if_c;if_3[if_].bb=if_c;
if_3[if_].nc="";if_3[if_].mc="";if_3[if_].ta=0;if_3[if_].ua="";if_3[if_].gb=if_d;if_3[if_].Pa=if_d;if_3[if_].nb=if_d;if_3[if_].V=if_d;if_3[if_].Ca=0;if_3[if_].aa=if_c;if_3[if_].je=function(a){this.Ca=if_j.max(0,a)};
if_3[if_].send=function(a,b,c,d){if(this.K)if_a(Error("[goog.net.XhrIo] Object is active with another request"));var e=b||"GET";this.nc=a;this.ua="";this.ta=0;this.mc=e;this.gb=if_d;this.K=if_b;this.e=new if_Df;this.bb=if_Ff||(if_Ff=if_Ef());if_Bf.Pd(this.e);this.e.onreadystatechange=if_nb(this.uc,this);try{this.h.fine(this.C("Opening Xhr"));this.nb=if_b;this.e[if_xa](e,a,if_b);this.nb=if_d}catch(f){this.h.fine(this.C("Error opening Xhr: "+f[if_8e]));this.$b(5,f);return}var g=c||"",h=this.headers.clone();
d&&if_ed(d,function(j,k){h.set(k,j)});e=="POST"&&!h.p("Content-Type")&&h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");if_ed(h,function(j,k){this.e.setRequestHeader(k,j)},this);try{if(this.aa){if_4c[if_za](this.aa);this.aa=if_c}if(this.Ca>0){this.h.fine(this.C("Will abort after "+this.Ca+"ms if incomplete"));this.aa=if_4c[if_n](if_nb(this.Da,this),this.Ca)}this.h.fine(this.C("Sending request"));this.Pa=if_b;this.e.send(g);this.Pa=if_d}catch(i){this.h.fine(this.C("Send error: "+
i[if_8e]));this.$b(5,i)}};if_3[if_].dispatchEvent=function(a){if(this.e){if_Bf.Cc(this.e);try{if_3.o[if_t][if_w](this,a)}finally{if_Bf.yc()}}else if_3.o[if_t][if_w](this,a)};if_3[if_].Da=function(){if(!(typeof if_bb=="undefined"))if(this.e){this.ua="Timed out after "+this.Ca+"ms, aborting";this.ta=8;this.h.fine(this.C(this.ua));this[if_t]("timeout");this[if_7e](8)}};if_3[if_].$b=function(a,b){this.K=if_d;if(this.e){this.V=if_b;this.e[if_7e]();this.V=if_d}this.ua=b;this.ta=a;this.Vb();this.Ja()};
if_3[if_].Vb=function(){if(!this.gb){this.gb=if_b;this[if_t]("complete");this[if_t]("error")}};if_3[if_].abort=function(a){if(this.e){this.h.fine(this.C("Aborting"));this.K=if_d;this.V=if_b;this.e[if_7e]();this.V=if_d;this.ta=a||7;this[if_t]("complete");this[if_t]("abort");this.Ja()}};if_3[if_].a=function(){if(this.e){if(this.K){this.K=if_d;this.V=if_b;this.e[if_7e]();this.V=if_d}this.Ja(if_b)}if_3.o.a[if_w](this)};if_3[if_].uc=function(){!this.nb&&!this.Pa&&!this.V?this.xa():this.tc()};
if_3[if_].xa=function(){this.tc()};if_3[if_].tc=function(){if(this.K)if(!(typeof if_bb=="undefined"))if(this.bb[1]&&this.sa()==4&&this.Ma()==2)this.h.fine(this.C("Local request error detected and ignored"));else if(this.Pa&&this.sa()==4)if_4c[if_n](if_nb(this.uc,this),0);else{this[if_t]("readystatechange");if(this.Fd()){this.h.fine(this.C("Request complete"));this.K=if_d;if(this.Id()){this[if_t]("complete");this[if_t]("success")}else{this.ta=6;this.ua=this.qd()+" ["+this.Ma()+"]";this.Vb()}this.Ja()}}};
if_3[if_].Ja=function(a){if(this.e){this.e.onreadystatechange=this.bb[0]?if_eb:if_c;var b=this.e;this.bb=this.e=if_c;if(this.aa){if_4c[if_za](this.aa);this.aa=if_c}if(!a){if_Bf.Cc(b);this[if_t]("ready");if_Bf.yc()}if_Bf.Od(b)}};if_3[if_].Fd=function(){return this.sa()==4};if_3[if_].Id=function(){switch(this.Ma()){case 0:case 200:case 204:case 304:return if_b;default:return if_d}};if_3[if_].sa=function(){return this.e?this.e.readyState:0};
if_3[if_].Ma=function(){try{return this.sa()>2?this.e.status:-1}catch(a){this.h.warning("Can not get status: "+a[if_8e]);return-1}};if_3[if_].qd=function(){try{return this.sa()>2?this.e.statusText:""}catch(a){this.h.fine("Can not get status: "+a[if_8e]);return""}};if_3[if_].C=function(a){return a+" ["+this.mc+" "+this.nc+" "+this.Ma()+"]"};var if_Qf=if_3;if_Qf.send=if_Nf;if_Qf.cleanup=if_Of;if_Qf.protectEntryPoints=if_Pf;if_Qf.Ke=if_Mf;if_Qf.CONTENT_TYPE_HEADER="Content-Type";if_Qf.FORM_CONTENT_TYPE="application/x-www-form-urlencoded;charset=utf-8";if_Qf.Pe=if_Lf;var if_4=function(a,b){this.Va=a||0;this.cb=!!b;this.f=new if_V;this.g=new if_Rf("",undefined);this.g.next=this.g.prev=this.g};if_4[if_].get=function(a,b){var c=this.f.get(a);if(c){if(this.cb){c[if_x]();this.ob(c)}return c[if_Ha]}return b};if_4[if_].set=function(a,b){var c=this.f.get(a);if(c){if_ja(c,b);if(this.cb){c[if_x]();this.ob(c)}}else{c=new if_Rf(a,b);this.f.set(a,c);this.ob(c)}};if_4[if_].shift=function(){return this.zc(this.g.next)};if_4[if_].pop=function(){return this.zc(this.g.prev)};
if_ma(if_4[if_],function(a){var b=this.f.get(a);if(b){b[if_x]();this.f[if_x](a);return if_b}return if_d});if_4[if_].P=function(){return this.f.P()};if_4[if_].D=function(){return this.map(function(a,b){return b})};if_4[if_].l=function(){return this.map(function(a){return a})};if_4[if_].contains=function(a){return this.some(function(b){return b==a})};if_4[if_].p=function(a){return this.f.p(a)};if_4[if_].forEach=function(a,b){for(var c=this.g.next;c!=this.g;c=c.next)a[if_w](b,c[if_Ha],c.key,this)};
if_4[if_].map=function(a,b){for(var c=[],d=this.g.next;d!=this.g;d=d.next)c[if_l](a[if_w](b,d[if_Ha],d.key,this));return c};if_4[if_].some=function(a,b){for(var c=this.g.next;c!=this.g;c=c.next)if(a[if_w](b,c[if_Ha],c.key,this))return if_b;return if_d};if_4[if_].ob=function(a){if(this.cb){a.next=this.g.next;a.prev=this.g;this.g.next=a;a.next.prev=a}else{a.prev=this.g.prev;a.next=this.g;this.g.prev=a;a.prev.next=a}this.se()};
if_4[if_].se=function(){if(this.Va)for(var a=this.f.P();a>this.Va;a--){var b=this.cb?this.g.prev:this.g.next;b[if_x]();this.f[if_x](b.key)}};if_4[if_].zc=function(a){if(this.g!=a){a[if_x]();this.f[if_x](a.key)}return a[if_Ha]};var if_Rf=function(a,b){this.key=a;if_ja(this,b)};if_ma(if_Rf[if_],function(){this.prev.next=this.next;this.next.prev=this.prev;this.prev=this.next=if_c});var if_5=function(a){this.m={};if(a)for(var b=0;b<a[if_m];b++)this.m[this.encode(a[b])]=if_c},if_Sf={};if_5[if_].encode=function(a){return a in if_Sf||if_f(a).charCodeAt(0)==32?" "+a:a};if_5[if_].decode=function(a){return a.charCodeAt(0)==32?a[if_ab](1):a};if_5[if_].add=function(a){this.m[this.encode(a)]=if_c};if_5[if_].Yc=function(a){for(var b in a.m)if(a.m[if_Ia](b))this.m[b]=if_c};if_5[if_].clone=function(){var a=new if_5;a.Yc(this);return a};if_5[if_].contains=function(a){return this.m[if_Ia](this.encode(a))};
if_5[if_].forEach=function(a,b){for(var c in this.m)this.m[if_Ia](c)&&a[if_w](b,this.decode(c),undefined,this)};if_5[if_].P=function(){var a=0;for(var b in this.m)this.m[if_Ia](b)&&a++;return a};if_5[if_].l=function(){var a=[];for(var b in this.m)this.m[if_Ia](b)&&a[if_l](this.decode(b));return a};if_ma(if_5[if_],function(a){var b=this.encode(a);if(this.m[if_Ia](b)){delete this.m[b];return if_b}return if_d});if_5[if_].__iterator__=function(){return if_bd(this.l())};var if_Tf={OPENED:"OPENED",CLOSED:"CLOSED",CONNECTING:"CONNECTING",ERROR:"ERROR"};var if_6={AVAILABLE:"a",AWAY:"w",BUSY:"b",CHAT:"c",IDLE:"i",OFFLINE:"u",UNKNOWN:"?",INVISIBLE:"-",ERROR:"O_E",CONNECTING:"O_C"},if_Uf=function(a){return a==if_6.OFFLINE||a==if_6.ERROR||a==if_6.CONNECTING};if_E("GTALK_Presence",if_6);var if_Vf=function(a){if(a){if_oa(this,if_6[a[if_y]]);this.imageUrl=a.imageUrl;this.label=a.label}},if_Wf=function(a){for(var b={},c=0;c<a[if_m];c++){var d=new if_Vf(a[c]);b[d[if_y]]=d}return b},if_7=function(a){this.Ac=if_Wf(a);this.qe=this.Bc=undefined;this.wb=new if_4(100,if_b)};
if_7[if_].Ea=function(a){this.za=if_A(if_e[if_8a].orkutFrame)?if_e[if_8a].orkutFrame[if_p]:undefined;var b=this.Ac[a];if(if_A(b)){this.Bc=a;for(var c=this.Q("span","ownPresenceText",this.za),d=this.pa([c,this.Q("span","ownPresenceText")]),e=0;e<d[if_m];e++)d[e].innerHTML=b.label;if(if_h.clientBasedPresence){this.$a("opi",a);this.$a("opsi",a,if_b);if_Uf(this.Bc)?this.Gc():this.ae()}else{this.$a("ownPresenceImage",a);this.$a("ownPresenceStatusImage",a,if_b);this.ed(!if_Uf(a))}}};
if_7[if_].ae=function(){var a=this.ld();this.qe.pd(a)};if_7[if_].we=function(a){this.ve(a);this.Gc()};if_7[if_].Gc=function(){var a="",b={};if(!if_Uf(this.Bc)){this.wb[if_Va](function(e,f){b[e.show]||(b[e.show]=[]);b[e.show][if_l]("P"+f)});for(var c in b){var d=this.Ac[c];if(d){a+="."+b[c][if_6a](",.");a+="{background-image:url("+d.imageUrl+") !important;display: inline !important;}"}}}if(this.za==this.Ge)if_Cd(this.He,a);else{this.He=if_Dd(a,this.za);this.Ge=this.za}if_Cd(this.rd(),a)};
if_7[if_].rd=function(){if(!if_A(this.Nd))this.Nd=if_Dd("",if_e[if_p]);return this.Nd};if_7[if_].ld=function(){for(var a=new if_5,b=this.ec("opre"),c=0;c<b[if_m];c++){var d=b[c];a.add(this.fc(d))}return a.l()};if_7[if_].fc=function(a){if(!(a!=if_c))return if_c;for(var b=a.className[if_q](" "),c=0;c<b[if_m];c++){var d=b[c];if(d[if_s]("P")==0)return d[if_ab](1,d[if_m])}return if_c};if_7[if_].nd=function(a){var b=this.fc(a);if(!(b!=if_c))return if_c;return this.wb.get(b).jid};
if_7[if_].de=function(a){this.qe=a};if_7[if_].ve=function(a){for(var b in a){var c=a[b],d=c.show;d==if_6.UNKNOWN||d==if_6.OFFLINE||!if_A(d)?this.wb[if_x](b):this.wb.set(b,c)}};if_7[if_].$a=function(a,b,c){for(var d=this.Ac[b],e=this.ec(a),f=if_Uf(b),g=!c&&f?"none":"inline",h=0;h<e[if_m];h++){var i=e[h];if(if_h.clientBasedPresence)if_od(i,"background-image","url("+d.imageUrl+")");else i.src=d.imageUrl;i.alt=e[h].title=d.label;if_od(i,"display",g)}};
if_7[if_].ec=function(a){var b=this.Q("img",a,this.za),c;if(if_H){for(var d=this.pa([b,this.Q("img",a)]),e=this.Q("clipper",a),f=[],g=0;g<e[if_m];g++){var h=if_i[if_Sa]("img");if_ha(h,a);if_k(h[if_u],"none");e[g][if_2a].insertBefore(h,e[g]);e[g]&&e[g][if_2a]&&e[g][if_2a][if_La](e[g]);f[if_l](h)}c=this.pa([d,f])}else c=this.pa([b,this.Q("img",a)]);return c};if_7[if_].pa=function(a){for(var b=[],c=0;c<a[if_m];c++)for(var d=0;d<a[c][if_m];d++)b[if_l](a[c][d]);return b};
if_7[if_].ed=function(a){for(var b=a?"":"none",c=["span","img","div","a"],d=0;d<c[if_m];d++)for(var e=this.Q(c[d],"otherPresence",this.za),f=this.pa([e,this.Q(c[d],"otherPresence")]),g=0;g<f[if_m];g++)if_k(f[g][if_u],b)};if_7[if_].Q=function(a,b,c){if(!if_J)return if_mc(a,b,c);var d=c||if_g[if_p];if(!if_A(d))return[];for(var e=d.getElementsByClassName(b),f=[],g=0,h;h=e[g];g++)a==h.nodeName[if_7a]()&&f[if_l](h);return f};if_E("orkut.gtalk.PresenceUiHandler",if_7);
if_F(if_7[if_],"updateOwnPresence",if_7[if_].Ea);var if_8=function(a,b,c){this.k=if_L(a);if_R(this.k,"mouseover",this.sc,if_d,this);if_R(this.k,"mouseout",this.rc,if_d,this);if_Tc(this.k[if_Ka],"beforeunload",this.dispose,if_d,this);this.hide();this.Ee=c;this.fd=b};if_G(if_8,if_Ac);if_8[if_].bd="promobg";if_8[if_].me="shadow_div";if_8[if_].Rc=0;if_8[if_].Vc=if_d;if_8[if_].oe=function(){if_qa(this.k[if_u],"visible");if_Ad(this.k,1);if_Bd(this.k,if_b)};if_8[if_].Cd=function(){if_Bd(this.k,if_d)};
if_8[if_].show=function(){this.oa();this.Pb();this.oe();this.Vc&&this.Zc();this.Jd=if_b;this.Kc()};if_8[if_].hide=function(){this.oa();this.Pb();this.Cd();this.Jd=if_d};if_8[if_].fadeout=function(a){this.oa();if(this.Jd){this.jd=if_b;var b=a||this.Ee||1000;this.na=new if_if(this.k,b);if_R(this.na,"end",this.hide,if_d,this);this.na.play()}};if_8[if_].Pb=function(){if(this.jd){this.jd=if_d;if(this.na){if_Uc(this.na,"end",this.hide);this.na[if_sa](if_d)}}};
if_8[if_].Kc=function(){if(this.fd){this.oa();this.Da=if_g[if_n](if_nb(this.fadeout,this),this.fd)}};if_8[if_].oa=function(){if(this.Da){if_g[if_za](this.Da);this.Da=if_c}};if_8[if_].sc=function(){this.show();this.oa()};if_8[if_].rc=function(){this.Kc()};if_8[if_].le=function(a){this.Vc=a};if_8[if_].Zc=function(){for(var a=if_mc("DIV",this.me,this.k),b=if_mc("DIV",this.bd,this.k)[0],c=if_yd(b),d=0;d<a[if_m];d++)if_xd(a[d],c);if_xd(this.k,c[if_Ba]+a[if_m],c[if_4a]+this.Rc+a[if_m])};
if_8[if_].ke=function(a){this.Rc=a};if_8[if_].ie=function(a,b){this.$d=a;this.qc=b;this.xb();if_R(if_g,"resize",this.xb,if_d,this)};if_8[if_].xb=function(){var a=this.$d?if_wd(this.$d):{x:0,y:0};if(this.qc){a.x+=this.qc.x;a.y+=this.qc.y}if_sd(this.k,a.x,a.y)};if_8[if_].a=function(){if_8.o.a[if_w](this);if_Uc(if_g,"resize",this.xb,if_d,this);if_Uc(this.k,"mouseover",this.sc,if_d,this);if_Uc(this.k,"mouseout",this.rc,if_d,this);delete this.na;delete this.k};var if_Xf=/^http:\/\/www.orkut.com\/[\w]*$/,if_9=if_Tf,if_Yf={NONE:0,DISCONNECTION:1,NO_JS:2,AUTH:3,BAD_BROWSER:4,BAD_COOKIES:5,NO_JS_AFTER_INITIAL_TIMEOUT:20},if_Zf=["setPresenceControllerHeader","setPresenceController","gorkut-talkStatusBox"],if_$=function(a,b){if(b)this.ea=b;this.Ce=this.$c(a);this.Xd=0;if__f(this.Xd);this.De=if_Eb("notificationActionClick",this.xd,"mePresenceChange",this.zd,"connectionStateChange",this.fa,"loginRequired",this.td,"unsupportedBrowser",this.ud,"badCookieBehavior",
this.vd,"invitationDisplayed",this.wd,"contactPresence",this.yd)},if_2f=function(a,b,c,d){var e=if_i[if_Sa]("SCRIPT");if_H?if_R(e,"readystatechange",function(){if(if_g.event.srcElement.readyState=="complete"||if_g.event.srcElement.readyState=="loaded")if_0f(b,c,d)}):if_R(e,"load",function(){if_0f(b,c,d)});e.src=a;if_i.getElementsByTagName("HEAD")[0][if_ra](e);if_h.log_supermole_errors&&if_6c(function(){if_1f(if_b)},30000);if_6c(function(){if_1f(if_d)},if_h.talk_js_timeout)},if_0f=function(a,b,c){if(if_A(if_g.GTalkNotifier)){var d=
{hostCallback:if_3f,locale:if_h.locale,moleManagerLeftMargin:if_h.displayRoster?170:3,moleManagerRightMargin:22,moleManagerNoMoleAreaMargin:0,hostedFrameId:"orkutFrame",rosterExpanded:if_d};if(if_A(if_h.sessionUserJid))d.userJid=if_h.sessionUserJid;if(if_A(if_h.rosterCss))d.cssUrl=if_h.rosterCss;var e=b+c.ifpcRelay,f=if_h.ifpcJsUrl;if(c){d.xpcBlank=b+c.xpcBlank;d.xpcRelay=b+c.xpcRelay}if(if_h.displayRoster){d.hideProfileCard=if_b;d.hideStatusMsgs=if_b;d.hideFindFriends=if_b;d.hideRecentConversations=
if_b;d.hideOTR=if_b;if(if_J)if_L("roster_and_top")[if_u].position="fixed"}else if_Dd(".talk_iframe{ display: none; }");var g=if_h.GtalkProperty?if_h.GtalkProperty:"Orkut",h=new if_g.GTalkNotifier(a,"notifierclient",e,f,g,d);if_4f().Cb(h);if(if_h.displayRoster){if_L("roster_container")[if_ra](if_L("talk_roster"));if_4f().Ya(if_d)}}else{var i={newState:if_9.CLOSED};if_4f().fa(i,2)}},if_1f=function(a){var b=if_4f();if(!b.qb())if(a){var c=[];c[if_l]("e",20,"u",if_h.uid);if_5f(c)}else{var d={newState:if_9.CLOSED};
b.fa(d,2)}};if_$[if_].Md=function(a){if(if_h.log_supermole_errors)if(!(this.lc==a)){var b=[];if(this.r==if_9.CLOSED||this.r==if_9.ERROR)b[if_l]("e",a);else if(this.r==if_9.OPENED){if(!if_A(this.lc))return;b[if_l]("oe",this.lc)}else return;if_A(this.Kd)&&b[if_l]("t",if_D()-this.Kd);b[if_l]("c",this.r,"u",if_h.uid);if_5f(b);this.lc=a;this.Le=this.r;this.Kd=if_D()}};
var if_5f=function(a){for(var b=new if_W("/log",undefined),c=0;c<a[if_m];c+=2)b.ee(a[c],a[c+1]);if_Nf(b[if_ta]())},if_6f=function(){var a=if_4f();a.qb()&&a.ea._onHostActivity()};if_$[if_].J=if_6.CONNECTING;if_$[if_].r=if_9.CONNECTING;if_$[if_].qa=0;if_$[if_].Zb=if_c;var if_3f=function(a,b){var c=if_4f(),d=c.De[a];d&&d[if_w](c,b)},if_4f=function(){return if_e.GTALK_Client};if_$[if_].Cb=function(a){this.ea=a};if_$[if_].Oc=function(a){this.ya=a;this.ya.de(this)};
if_$[if_].Nc=function(a){this.Qb=a;this.tb=a[if_p];if_R(this.tb,["mousedown","mousemove","keypress","scroll"],if_6f);if_Tc(this.tb,"beforeunload",this.La,if_d,this)};if_$[if_].La=function(){if_Uc(this.tb,["mousedown","mousemove","keypress","scroll"],if_6f);delete this.tb;delete this.Qb};if_$[if_].Dc=function(){this.ya.Ea(this.J)};if_$[if_].gc=function(){return this.J};if_$[if_].zd=function(a){if(this.G()){var b=a.Show;if(a.Invisible)b=if_6.INVISIBLE;this.ya.Ea(b);this.J=b;this.Sc()}};
if_$[if_].qb=function(){return!!this.ea};if_$[if_].G=function(){return this.r==if_9.OPENED};if_$[if_].kc=function(){return this.G()&&!if_Uf(this.J)};if_$[if_].Pc=function(a){if(this.G()){if_C(a)||(a=this.ya.nd(a));this.ea._showChat(a)}else this.ja()};if_$[if_].xd=function(a){if(typeof a.serviceUrl=="string"&&a.serviceUrl.match(if_Xf)){var b=a.navigateUrl instanceof if_W?a.navigateUrl.clone():new if_W(a.navigateUrl,undefined),c=b.Bd()?"#"+b.O:"",d=b.X+c;if_e.navigateTo(d,if_b)}};
if_$[if_].Nb=function(a){if(this.G()){if(a in if_6){a=if_6[a];var b=if_d;if(a==if_6.INVISIBLE){b=if_b;a=undefined}this.ea._setSharedPresence(a,b)}}else this.ja()};
if_$[if_].fa=function(a,b,c){this.r=a.newState;switch(this.r){case if_9.CONNECTING:this.J=if_6.CONNECTING;case if_9.OPENED:this.qa=0;this.Zb=if_c;break;case if_9.CLOSED:case if_9.ERROR:this.J=if_6.ERROR;if(b||this.qa==0){this.qa=b||1;this.Zb=c||if_c}break}this.Md(this.qa);if(!this.G()){this.ya.Ea(this.J);this.r!=if_9.CONNECTING&&if_h.popoutGtalkError&&this.ja()}this.Sc()};
if_$[if_].Sc=function(){if(if_h.displayRoster){var a=if_L("roster_disconnected"),b=if_L("roster_online"),c,d;if(this.G()){d=a;c=b;if__f(this.Xd);if(this.J==if_6.OFFLINE||this.J==if_6.CONNECTING){this.Ya(if_d);if_ha(if_L("roster_and_top"),"roster_and_top_hidden")}else if_ha(if_L("roster_and_top"),"roster_and_top_visible");this.Je||this.Ya(if_h.RosterMaximized);this.Je=if_b}else{d=b;c=a;if__f("-")}if_k(d[if_u],"none");if_k(c[if_u],"block")}};
if_$[if_].td=function(a){this.sd=a[0];var b={newState:if_9.CLOSED};this.fa(b,3)};if_$[if_].ud=function(){var a={newState:if_9.CLOSED};this.fa(a,4)};if_$[if_].vd=function(){var a={newState:if_9.CLOSED};this.fa(a,if_Yf.BAD_COOKIE)};if_$[if_].wd=function(){this.Mb(!this.W)};if_$[if_].yd=function(a){this.ya.we(a)};if_$[if_].hc=function(a,b,c){if(this.G()){var d=this.jb()[a+"Menu"];d.enableSelection()}else this.r!=if_9.CONNECTING&&this.ja(b,undefined,c)};
if_$[if_].jb=function(){return this.Qb?this.Qb:if_g};if_$[if_].ja=function(a,b,c){this.pe(this.Ce[this.qa],a,b,c)};if_$[if_].$c=function(a){for(var b={},c=0;c<a[if_m];c++)b[if_Yf[a[c][if_y]]]='<a href="javascript:void(0)" onclick="window.GTALK_Client.hideErrorAlert()" style="float:right">'+if_h.GTALK_closeErrorImage+"</a>"+a[c].innerHtml;return b};
if_$[if_].pe=function(a,b,c,d){var e=c||this.jb(),f="alertDiv_gtalk_error",g=e[if_p].getElementById(f),h=e.alertCtrl_gtalk_error;h||(h=e.alertCtrl_gtalk_error=new if_8(g,7000,1000));var i=if_mc("div","gtalk_error_content",g)[0];i.innerHTML=a;var j=this.kd(e,b),k=if_yd(j),l=new if_wb(0,d?k[if_4a]+6:k[if_4a]);h.ie(j,l);h.ke(12);h.le(if_b);h.show()};if_$[if_].kd=function(a,b){var c=new if_K(a[if_p]);if(if_A(b))return c.cc(b);else for(var d=0;d<if_Zf[if_m];d++){var e=c.cc(if_Zf[d]);if(e!=if_c)return e}return if_c};
if_$[if_].jc=function(){var a=this.jb().alertCtrl_gtalk_error;a&&a.hide()};if_$[if_].wc=function(){this.sd&&if_g[if_xa](this.sd)};if_$[if_].vc=function(){if(if_h.HelpPageForCookies)if_e.location=if_h.HelpPageForCookies};if_$[if_].Qc=function(){this.Ya(!this.W);var a=[];a[if_l]("Action.u=1");a[if_l]("s="+(this.W?"x":"n"));a[if_l]("POST_TOKEN="+if_h["CGI.POST_TOKEN"]);a[if_l]("signature="+if_aa(if_h["Page.signature.raw"]));if_Qf.send("/GtalkROptions.aspx",if_c,"POST",a[if_6a]("&"))};
if_$[if_].Ya=function(a){if(!(this.isRosterVisible==a)){this.W=a;if_od(if_L("roster_container"),"overflow-y","");var b=if_L("talk_roster");if_k(b[if_u],"block");if_qa(b[if_u],this.W?"visible":"hidden");if(!if_H)if_pa(b[if_u],this.W?"":"4px");if(if_I)b[if_u].overflow=this.W?"visible":"hidden";this.ea._setRosterExpanded(this.W);var c="roster_minimize",d="roster_maximize";if(this.W){var e=c;c=d;d=e;this.Mb(if_d)}else if(if_H)if_k(if_L("talk_roster")[if_u],"none");if_k(if_L(c)[if_u],"none");if_k(if_L(d)[if_u],
"block")}};var if__f=function(a){var b=if_L("ofc");b&&if_zc(b,a)};if_$[if_].Mb=function(a){if(!if_A(this.Hc))this.Hc=if_Dd("");a?if_Cd(this.Hc,".roster_top{background-color:#FF8A00;}"):if_Cd(this.Hc,"")};if_$[if_].pd=function(a){this.qb()&&this.ea._getPresence(a)};if_E("GTALK_loadNotifierScript",if_2f);if_E("GTALK_getGtalkClient",if_4f);if_E("GTALK_TalkClient",if_$);if_F(if_$[if_],"changeUserPresence",if_$[if_].Nb);if_F(if_$[if_],"clearOrkutDocumentReference",if_$[if_].La);
if_F(if_$[if_],"refreshUserPresence",if_$[if_].Dc);if_F(if_$[if_],"setNotifierClient",if_$[if_].Cb);if_F(if_$[if_],"setOrkutPageWindow",if_$[if_].Nc);if_F(if_$[if_],"setPresenceUiHandler",if_$[if_].Oc);if_F(if_$[if_],"showChat",if_$[if_].Pc);if_F(if_$[if_],"toggleRoster",if_$[if_].Qc);if_F(if_$[if_],"handleSelfBubbleClick",if_$[if_].hc);if_F(if_$[if_],"hideErrorAlert",if_$[if_].jc);if_F(if_$[if_],"openTalkSigninPage",if_$[if_].wc);if_F(if_$[if_],"openHelpPageForCookies",if_$[if_].vc);
if_F(if_$[if_],"isConnected",if_$[if_].G);if_F(if_$[if_],"isOnline",if_$[if_].kc);if_F(if_$[if_],"getUserPresence",if_$[if_].gc);if_F(if_$[if_],"refreshErrorUi",if_$[if_].ja);