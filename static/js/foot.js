var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?df715cfd6a46a63a57abe2eef599288e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();//百度统计
//
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
//
document.write('<script type="text/javascript" charset="utf-8" src="http://1074.a.dlads.cn/alikes.php?id=6179"><\/script>');//右下广告

function setTab(a, b, c) {
	var d, e;
	for (i = 1; c >= i; i++) d = document.getElementById(a + i), e = document.getElementById("con_" + a + "_" + i), d.className = i == b ? "current" : "", e.style.display = i == b ? "block" : "none"
}

$(function() {
	$(".drop-down").hover(function() {
		$(this).find(".drop-title").addClass("drop-title-hover"), $(this).find(".drop-box").show()
	}, function() {
		$(this).find(".drop-title").removeClass("drop-title-hover"), $(this).find(".drop-box").hide()
	})
})


var isie6 = window.XMLHttpRequest ? false : true; function newtoponload() { var c = document.getElementById("BackTop"); function b() { var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; if (a > 0) { if (isie6) { c.style.display = "none"; clearTimeout(window.show); window.show = setTimeout(function () { var d = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; if (d > 0) { c.style.display = "block"; c.style.top = (500 + d) + "px" } }, 300) } else { c.style.display = "block" } } else { c.style.display = "none" } } if (isie6) { c.style.position = "absolute" } window.onscroll = b; b() } if (window.attachEvent) { window.attachEvent("onload", newtoponload) } else { window.addEventListener("load", newtoponload, false) };

function intval(a) {
	return a = parseInt(a), isNaN(a) ? 0 : a
}
function getPos(a) {
	for (var b = 0, c = 0, d = intval(a.style.width), e = intval(a.style.height), f = a.offsetWidth, g = a.offsetHeight; a.offsetParent;) b += a.offsetLeft + (a.currentStyle ? intval(a.currentStyle.borderLeftWidth) : 0), c += a.offsetTop + (a.currentStyle ? intval(a.currentStyle.borderTopWidth) : 0), a = a.offsetParent;
	return b += a.offsetLeft + (a.currentStyle ? intval(a.currentStyle.borderLeftWidth) : 0), c += a.offsetTop + (a.currentStyle ? intval(a.currentStyle.borderTopWidth) : 0), {
		x: b,
		y: c,
		w: d,
		h: e,
		wb: f,
		hb: g
	}
}
function getScroll() {
	var a, b, c, d;
	return document.documentElement && document.documentElement.scrollTop ? (a = document.documentElement.scrollTop, b = document.documentElement.scrollLeft, c = document.documentElement.scrollWidth, d = document.documentElement.scrollHeight) : document.body && (a = document.body.scrollTop, b = document.body.scrollLeft, c = document.body.scrollWidth, d = document.body.scrollHeight), {
		t: a,
		l: b,
		w: c,
		h: d
	}
}
function scroller(a, b) {
	if ("object" != typeof a && (a = document.getElementById(a)), a) {
		var c = this;
		c.el = a, c.p = getPos(a), c.s = getScroll(), c.clear = function() {
			window.clearInterval(c.timer), c.timer = null
		}, c.t = (new Date).getTime(), c.step = function() {
			var a = (new Date).getTime(),
				d = (a - c.t) / b;
			a >= b + c.t ? (c.clear(), window.setTimeout(function() {
				c.scroll(c.p.y, c.p.x)
			}, 13)) : (st = (-Math.cos(d * Math.PI) / 2 + .5) * (c.p.y - c.s.t) + c.s.t, sl = (-Math.cos(d * Math.PI) / 2 + .5) * (c.p.x - c.s.l) + c.s.l, c.scroll(st, sl))
		}, c.scroll = function(a, b) {
			window.scrollTo(b, a)
		}, c.timer = window.setInterval(function() {
			c.step()
		}, 13)
	}
}

function fav() {
	var a = window.location.href;
	try {
		window.external.addFavorite(a, document.title)
	} catch (b) {
		try {
			window.sidebar.addPanel(document.title, a, "")
		} catch (b) {
			alert("请使用Ctrl+D为您的浏览器添加书签！")
		}
	}
}

!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type)return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0;if(0==k&&(k=m),R&&(k=2),x){if(m>=u)if("leftLoop"==e||"topLoop"==e)k=0!=m%t?(0^m/t)+1:m/t;else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}else k=1;j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage)for(var X=0;k>X;X++)W+="<li>"+(X+1)+"</li>";else for(var X=0;k>X;X++)W+=c.autoPage.replace("$",X+1);j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++)Y.eq(a).clone().addClass("clone").appendTo(l);for(var a=0;P>a;a++)Y.eq(m-a-1).clone().addClass("clone").prependTo(l)};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(var c=l.children(),d=0;d<c.size();d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()}))),m>=u)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else g.click(eb),f.click(fb)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});

(function($,document,window){var
defaults={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,href:false,title:false,rel:false,opacity:0.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:'@2x.$1',current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false},colorbox='colorbox',prefix='cbox',boxElement=prefix+'Element',event_open=prefix+'_open',event_load=prefix+'_load',event_complete=prefix+'_complete',event_cleanup=prefix+'_cleanup',event_closed=prefix+'_closed',event_purge=prefix+'_purge',$overlay,$box,$wrap,$content,$topBorder,$leftBorder,$rightBorder,$bottomBorder,$related,$window,$loaded,$loadingBay,$loadingOverlay,$title,$current,$slideshow,$next,$prev,$close,$groupControls,$events=$('<a/>'),settings,interfaceHeight,interfaceWidth,loadedHeight,loadedWidth,element,index,photo,open,active,closing,loadingTimer,publicMethod,div="div",className,requests=0,previousCSS={},init;function $tag(tag,id,css){var element=document.createElement(tag);if(id){element.id=prefix+id;}
if(css){element.style.cssText=css;}
return $(element);}
function winheight(){return window.innerHeight?window.innerHeight:$(window).height();}
function getIndex(increment){var
max=$related.length,newIndex=(index+increment)%max;return(newIndex<0)?max+newIndex:newIndex;}
function setSize(size,dimension){return Math.round((/%/.test(size)?((dimension==='x'?$window.width():winheight())/100):1)*parseInt(size,10));}
function isImage(settings,url){return settings.photo||settings.photoRegex.test(url);}
function retinaUrl(settings,url){return settings.retinaUrl&&window.devicePixelRatio>1?url.replace(settings.photoRegex,settings.retinaSuffix):url;}
function trapFocus(e){if('contains'in $box[0]&&!$box[0].contains(e.target)){e.stopPropagation();$box.focus();}}
function makeSettings(){var i,data=$.data(element,colorbox);if(data==null){settings=$.extend({},defaults);if(console&&console.log){console.log('Error: cboxElement missing settings object');}}else{settings=$.extend({},data);}
for(i in settings){if($.isFunction(settings[i])&&i.slice(0,2)!=='on'){settings[i]=settings[i].call(element);}}
settings.rel=settings.rel||element.rel||$(element).data('rel')||'nofollow';settings.href=settings.href||$(element).attr('href');settings.title=settings.title||element.title;if(typeof settings.href==="string"){settings.href=$.trim(settings.href);}}
function trigger(event,callback){$(document).trigger(event);$events.triggerHandler(event);if($.isFunction(callback)){callback.call(element);}}
var slideshow=(function(){var active,className=prefix+"Slideshow_",click="click."+prefix,timeOut;function clear(){clearTimeout(timeOut);}
function set(){if(settings.loop||$related[index+1]){clear();timeOut=setTimeout(publicMethod.next,settings.slideshowSpeed);}}
function start(){$slideshow.html(settings.slideshowStop).unbind(click).one(click,stop);$events.bind(event_complete,set).bind(event_load,clear);$box.removeClass(className+"off").addClass(className+"on");}
function stop(){clear();$events.unbind(event_complete,set).unbind(event_load,clear);$slideshow.html(settings.slideshowStart).unbind(click).one(click,function(){publicMethod.next();start();});$box.removeClass(className+"on").addClass(className+"off");}
function reset(){active=false;$slideshow.hide();clear();$events.unbind(event_complete,set).unbind(event_load,clear);$box.removeClass(className+"off "+className+"on");}
return function(){if(active){if(!settings.slideshow){$events.unbind(event_cleanup,reset);reset();}}else{if(settings.slideshow&&$related[1]){active=true;$events.one(event_cleanup,reset);if(settings.slideshowAuto){start();}else{stop();}
$slideshow.show();}}};}());function launch(target){if(!closing){element=target;makeSettings();$related=$(element);index=0;if(settings.rel!=='nofollow'){$related=$('.'+boxElement).filter(function(){var data=$.data(this,colorbox),relRelated;if(data){relRelated=$(this).data('rel')||data.rel||this.rel;}
return(relRelated===settings.rel);});index=$related.index(element);if(index===-1){$related=$related.add(element);index=$related.length-1;}}
$overlay.css({opacity:parseFloat(settings.opacity),cursor:settings.overlayClose?"pointer":"auto",visibility:'visible'}).show();if(className){$box.add($overlay).removeClass(className);}
if(settings.className){$box.add($overlay).addClass(settings.className);}
className=settings.className;if(settings.closeButton){$close.html(settings.close).appendTo($content);}else{$close.appendTo('<div/>');}
if(!open){open=active=true;$box.css({visibility:'hidden',display:'block'});$loaded=$tag(div,'LoadedContent','width:0; height:0; overflow:hidden');$content.css({width:'',height:''}).append($loaded);interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(true)-$content.height();interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(true)-$content.width();loadedHeight=$loaded.outerHeight(true);loadedWidth=$loaded.outerWidth(true);settings.w=setSize(settings.initialWidth,'x');settings.h=setSize(settings.initialHeight,'y');$loaded.css({width:'',height:settings.h});publicMethod.position();trigger(event_open,settings.onOpen);$groupControls.add($title).hide();$box.focus();if(settings.trapFocus){if(document.addEventListener){document.addEventListener('focus',trapFocus,true);$events.one(event_closed,function(){document.removeEventListener('focus',trapFocus,true);});}}
if(settings.returnFocus){$events.one(event_closed,function(){$(element).focus();});}}
load();}}
function appendHTML(){if(!$box&&document.body){init=false;$window=$(window);$box=$tag(div).attr({id:colorbox,'class':$.support.opacity===false?prefix+'IE':'',role:'dialog',tabindex:'-1'}).hide();$overlay=$tag(div,"Overlay").hide();$loadingOverlay=$([$tag(div,"LoadingOverlay")[0],$tag(div,"LoadingGraphic")[0]]);$wrap=$tag(div,"Wrapper");$content=$tag(div,"Content").append($title=$tag(div,"Title"),$current=$tag(div,"Current"),$prev=$('<button type="button"/>').attr({id:prefix+'Previous'}),$next=$('<button type="button"/>').attr({id:prefix+'Next'}),$slideshow=$tag('button',"Slideshow"),$loadingOverlay);$close=$('<button type="button"/>').attr({id:prefix+'Close'});$wrap.append($tag(div).append($tag(div,"TopLeft"),$topBorder=$tag(div,"TopCenter"),$tag(div,"TopRight")),$tag(div,false,'clear:left').append($leftBorder=$tag(div,"MiddleLeft"),$content,$rightBorder=$tag(div,"MiddleRight")),$tag(div,false,'clear:left').append($tag(div,"BottomLeft"),$bottomBorder=$tag(div,"BottomCenter"),$tag(div,"BottomRight"))).find('div div').css({'float':'left'});$loadingBay=$tag(div,false,'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');$groupControls=$next.add($prev).add($current).add($slideshow);$(document.body).append($overlay,$box.append($wrap,$loadingBay));}}
function addBindings(){function clickHandler(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();launch(this);}}
if($box){if(!init){init=true;$next.click(function(){publicMethod.next();});$prev.click(function(){publicMethod.prev();});$close.click(function(){publicMethod.close();});$overlay.click(function(){if(settings.overlayClose){publicMethod.close();}});$(document).bind('keydown.'+prefix,function(e){var key=e.keyCode;if(open&&settings.escKey&&key===27){e.preventDefault();publicMethod.close();}
if(open&&settings.arrowKey&&$related[1]&&!e.altKey){if(key===37){e.preventDefault();$prev.click();}else if(key===39){e.preventDefault();$next.click();}}});if($.isFunction($.fn.on)){$(document).on('click.'+prefix,'.'+boxElement,clickHandler);}else{$('.'+boxElement).live('click.'+prefix,clickHandler);}}
return true;}
return false;}
if($.colorbox){return;}
$(appendHTML);publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){var $this=this;options=options||{};appendHTML();if(addBindings()){if($.isFunction($this)){$this=$('<a/>');options.open=true;}else if(!$this[0]){return $this;}
if(callback){options.onComplete=callback;}
$this.each(function(){$.data(this,colorbox,$.extend({},$.data(this,colorbox)||defaults,options));}).addClass(boxElement);if(($.isFunction(options.open)&&options.open.call($this))||options.open){launch($this[0]);}}
return $this;};publicMethod.position=function(speed,loadedCallback){var
css,top=0,left=0,offset=$box.offset(),scrollTop,scrollLeft;$window.unbind('resize.'+prefix);$box.css({top:-9e4,left:-9e4});scrollTop=$window.scrollTop();scrollLeft=$window.scrollLeft();if(settings.fixed){offset.top-=scrollTop;offset.left-=scrollLeft;$box.css({position:'fixed'});}else{top=scrollTop;left=scrollLeft;$box.css({position:'absolute'});}
if(settings.right!==false){left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.right,'x'),0);}else if(settings.left!==false){left+=setSize(settings.left,'x');}else{left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2);}
if(settings.bottom!==false){top+=Math.max(winheight()-settings.h-loadedHeight-interfaceHeight-setSize(settings.bottom,'y'),0);}else if(settings.top!==false){top+=setSize(settings.top,'y');}else{top+=Math.round(Math.max(winheight()-settings.h-loadedHeight-interfaceHeight,0)/2);}
$box.css({top:offset.top,left:offset.left,visibility:'visible'});$wrap[0].style.width=$wrap[0].style.height="9999px";function modalDimensions(){$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=(parseInt($box[0].style.width,10)-interfaceWidth)+'px';$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=(parseInt($box[0].style.height,10)-interfaceHeight)+'px';}
css={width:settings.w+loadedWidth+interfaceWidth,height:settings.h+loadedHeight+interfaceHeight,top:top,left:left};if(speed){var tempSpeed=0;$.each(css,function(i){if(css[i]!==previousCSS[i]){tempSpeed=speed;return;}});speed=tempSpeed;}
previousCSS=css;if(!speed){$box.css(css);}
$box.dequeue().animate(css,{duration:speed||0,complete:function(){modalDimensions();active=false;$wrap[0].style.width=(settings.w+loadedWidth+interfaceWidth)+"px";$wrap[0].style.height=(settings.h+loadedHeight+interfaceHeight)+"px";if(settings.reposition){setTimeout(function(){$window.bind('resize.'+prefix,publicMethod.position);},1);}
if(loadedCallback){loadedCallback();}},step:modalDimensions});};publicMethod.resize=function(options){var scrolltop;if(open){options=options||{};if(options.width){settings.w=setSize(options.width,'x')-loadedWidth-interfaceWidth;}
if(options.innerWidth){settings.w=setSize(options.innerWidth,'x');}
$loaded.css({width:settings.w});if(options.height){settings.h=setSize(options.height,'y')-loadedHeight-interfaceHeight;}
if(options.innerHeight){settings.h=setSize(options.innerHeight,'y');}
if(!options.innerHeight&&!options.height){scrolltop=$loaded.scrollTop();$loaded.css({height:"auto"});settings.h=$loaded.height();}
$loaded.css({height:settings.h});if(scrolltop){$loaded.scrollTop(scrolltop);}
publicMethod.position(settings.transition==="none"?0:settings.speed);}};publicMethod.prep=function(object){if(!open){return;}
var callback,speed=settings.transition==="none"?0:settings.speed;$loaded.empty().remove();$loaded=$tag(div,'LoadedContent').append(object);function getWidth(){settings.w=settings.w||$loaded.width();settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;return settings.w;}
function getHeight(){settings.h=settings.h||$loaded.height();settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;return settings.h;}
$loaded.hide().appendTo($loadingBay.show()).css({width:getWidth(),overflow:settings.scrolling?'auto':'hidden'}).css({height:getHeight()}).prependTo($content);$loadingBay.hide();$(photo).css({'float':'none'});callback=function(){var total=$related.length,iframe,frameBorder='frameBorder',allowTransparency='allowTransparency',complete;if(!open){return;}
function removeFilter(){if($.support.opacity===false){$box[0].style.removeAttribute('filter');}}
complete=function(){clearTimeout(loadingTimer);$loadingOverlay.hide();trigger(event_complete,settings.onComplete);};$title.html(settings.title).add($loaded).show();if(total>1){if(typeof settings.current==="string"){$current.html(settings.current.replace('{current}',index+1).replace('{total}',total)).show();}
$next[(settings.loop||index<total-1)?"show":"hide"]().html(settings.next);$prev[(settings.loop||index)?"show":"hide"]().html(settings.previous);slideshow();if(settings.preloading){$.each([getIndex(-1),getIndex(1)],function(){var src,img,i=$related[this],data=$.data(i,colorbox);if(data&&data.href){src=data.href;if($.isFunction(src)){src=src.call(i);}}else{src=$(i).attr('href');}
if(src&&isImage(data,src)){src=retinaUrl(data,src);img=document.createElement('img');img.src=src;}});}}else{$groupControls.hide();}
if(settings.iframe){iframe=$tag('iframe')[0];if(frameBorder in iframe){iframe[frameBorder]=0;}
if(allowTransparency in iframe){iframe[allowTransparency]="true";}
if(!settings.scrolling){iframe.scrolling="no";}
$(iframe).attr({src:settings.href,name:(new Date()).getTime(),'class':prefix+'Iframe',allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one('load',complete).appendTo($loaded);$events.one(event_purge,function(){iframe.src="//about:blank";});if(settings.fastIframe){$(iframe).trigger('load');}}else{complete();}
if(settings.transition==='fade'){$box.fadeTo(speed,1,removeFilter);}else{removeFilter();}};if(settings.transition==='fade'){$box.fadeTo(speed,0,function(){publicMethod.position(0,callback);});}else{publicMethod.position(speed,callback);}};function load(){var href,setResize,prep=publicMethod.prep,$inline,request=++requests;active=true;photo=false;element=$related[index];makeSettings();trigger(event_purge);trigger(event_load,settings.onLoad);settings.h=settings.height?setSize(settings.height,'y')-loadedHeight-interfaceHeight:settings.innerHeight&&setSize(settings.innerHeight,'y');settings.w=settings.width?setSize(settings.width,'x')-loadedWidth-interfaceWidth:settings.innerWidth&&setSize(settings.innerWidth,'x');settings.mw=settings.w;settings.mh=settings.h;if(settings.maxWidth){settings.mw=setSize(settings.maxWidth,'x')-loadedWidth-interfaceWidth;settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw;}
if(settings.maxHeight){settings.mh=setSize(settings.maxHeight,'y')-loadedHeight-interfaceHeight;settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh;}
href=settings.href;loadingTimer=setTimeout(function(){$loadingOverlay.show();},100);if(settings.inline){$inline=$tag(div).hide().insertBefore($(href)[0]);$events.one(event_purge,function(){$inline.replaceWith($loaded.children());});prep($(href));}else if(settings.iframe){prep(" ");}else if(settings.html){prep(settings.html);}else if(isImage(settings,href)){href=retinaUrl(settings,href);photo=document.createElement('img');$(photo).addClass(prefix+'Photo').bind('error',function(){settings.title=false;prep($tag(div,'Error').html(settings.imgError));}).one('load',function(){var percent;if(request!==requests){return;}
$.each(['alt','longdesc','aria-describedby'],function(i,val){var attr=$(element).attr(val)||$(element).attr('data-'+val);if(attr){photo.setAttribute(val,attr);}});if(settings.retinaImage&&window.devicePixelRatio>1){photo.height=photo.height/window.devicePixelRatio;photo.width=photo.width/window.devicePixelRatio;}
if(settings.scalePhotos){setResize=function(){photo.height-=photo.height*percent;photo.width-=photo.width*percent;};if(settings.mw&&photo.width>settings.mw){percent=(photo.width-settings.mw)/photo.width;setResize();}
if(settings.mh&&photo.height>settings.mh){percent=(photo.height-settings.mh)/photo.height;setResize();}}
if(settings.h){photo.style.marginTop=Math.max(settings.mh-photo.height,0)/2+'px';}
if($related[1]&&(settings.loop||$related[index+1])){photo.style.cursor='pointer';photo.onclick=function(){publicMethod.next();};}
photo.style.width=photo.width+'px';photo.style.height=photo.height+'px';setTimeout(function(){prep(photo);},1);});setTimeout(function(){photo.src=href;},1);}else if(href){$loadingBay.load(href,settings.data,function(data,status){if(request===requests){prep(status==='error'?$tag(div,'Error').html(settings.xhrError):$(this).contents());}});}}
publicMethod.next=function(){if(!active&&$related[1]&&(settings.loop||$related[index+1])){index=getIndex(1);launch($related[index]);}};publicMethod.prev=function(){if(!active&&$related[1]&&(settings.loop||index)){index=getIndex(-1);launch($related[index]);}};publicMethod.close=function(){if(open&&!closing){closing=true;open=false;trigger(event_cleanup,settings.onCleanup);$window.unbind('.'+prefix);$overlay.fadeTo(settings.fadeOut||0,0);$box.stop().fadeTo(settings.fadeOut||0,0,function(){$box.add($overlay).css({'opacity':1,cursor:'auto'}).hide();trigger(event_purge);$loaded.empty().remove();setTimeout(function(){closing=false;trigger(event_closed,settings.onClosed);},1);});}};publicMethod.remove=function(){if(!$box){return;}
$box.stop();$.colorbox.close();$box.stop().remove();$overlay.remove();closing=false;$box=null;$('.'+boxElement).removeData(colorbox).removeClass(boxElement);$(document).unbind('click.'+prefix);};publicMethod.element=function(){return $(element);};publicMethod.settings=defaults;}(jQuery,document,window));