/* cookie */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/* SuperSlide */
!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.length,l=a(c.mainCell,d),m=l.children().length,n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);if(parseInt(c.triggerTime),t=parseInt(c.scroll),u="false"==c.autoPlay||0==c.autoPlay?!1:!0,v="false"==c.opp||0==c.opp?!1:!0,w="false"==c.autoPage||0==c.autoPage?!1:!0,x="false"==c.pnLoop||0==c.pnLoop?!1:!0,y="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,z="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,A="false"==c.returnDefault||0==c.returnDefault?!1:!0,B=isNaN(c.vis)?1:parseInt(c.vis),C=!-[1]&&!window.XMLHttpRequest,D=0,E=0,F=0,G=0,H=c.easing,I=null,J=null,K=null,L=c.titOnClassName,M=j.index(d.find("."+L)),N=p=-1==M?p:M,O=p,P=p,Q=m>=B?0!=m%t?m%t:t:0,S="leftMarquee"==e||"topMarquee"==e?!0:!1,T=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},V=function(){j.removeClass(L),z&&j.eq(O).addClass(L)},"menu"==c.type)return z&&j.removeClass(L).eq(p).addClass(L),j.hover(function(){R=a(this).find(c.targetCell);var b=j.index(a(this));J=setTimeout(function(){switch(p=b,j.removeClass(L).eq(p).addClass(L),T(),e){case"fade":R.stop(!0,!0).animate({opacity:"show"},q,H,U);break;case"slideDown":R.stop(!0,!0).animate({height:"show"},q,H,U)}},c.triggerTime)},function(){switch(clearTimeout(J),e){case"fade":R.animate({opacity:"hide"},q,H);break;case"slideDown":R.animate({height:"hide"},q,H)}}),A&&d.hover(function(){clearTimeout(K)},function(){K=setTimeout(V,q)}),void 0;if(0==k&&(k=m),S&&(k=2),w){if(m>=B?"leftLoop"==e||"topLoop"==e?k=0!=m%t?(0^m/t)+1:m/t:(W=m-B,k=1+parseInt(0!=W%t?W/t+1:W/t),0>=k&&(k=1)):k=1,j.html(""),X="",1==c.autoPage||"true"==c.autoPage)for(Y=0;k>Y;Y++)X+="<li>"+(Y+1)+"</li>";else for(Y=0;k>Y;Y++)X+=c.autoPage.replace("$",Y+1);j.html(X),j=j.children()}if(m>=B)switch(l.children().each(function(){a(this).width()>F&&(F=a(this).width(),E=a(this).outerWidth(!0)),a(this).height()>G&&(G=a(this).height(),D=a(this).outerHeight(!0))}),Z=l.children(),$=function(){var a;for(a=0;B>a;a++)Z.eq(a).clone().addClass("clone").appendTo(l);for(a=0;Q>a;a++)Z.eq(m-a-1).clone().addClass("clone").prependTo(l)},e){case"fold":l.css({position:"relative",width:E,height:D}).children().css({position:"absolute",width:F,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+B*D+'px"></div>').css({top:-(p*t)*D,position:"relative",padding:"0",margin:"0"}).children().css({height:G});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+B*E+'px"></div>').css({width:m*E,left:-(p*t)*E,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:F});break;case"leftLoop":case"leftMarquee":$(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+B*E+'px"></div>').css({width:(m+B+Q)*E,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(Q+p*t)*E}).children().css({"float":"left",width:F});break;case"topLoop":case"topMarquee":$(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+B*D+'px"></div>').css({height:(m+B+Q)*D,position:"relative",padding:"0",margin:"0",top:-(Q+p*t)*D}).children().css({height:G})}_=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},ab=function(b){var d,f,g,h,c=function(c){for(var d=c;B+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var c,d,b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(c=l.children(),d=0;d<c.length;d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(Q+_(P));break;case"leftMarquee":case"topMarquee":d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?E:D,g=Q,0!=d%f&&(h=Math.abs(0^d/f),g=1==p?Q+h:Q+h-1),c(g)}},bb=function(a){var b,c,d;if(!z||N!=p||a||S){if(S?p>=1?p=1:0>=p&&(p=0):(P=p,p>=k?p=0:0>p&&(p=k-1)),T(),null!=n&&ab(l.children()),o[0]&&(R=o.eq(p),null!=n&&ab(o),"slideDown"==e?(o.not(R).stop(!0,!0).slideUp(q),R.slideDown(q,H,function(){l[0]||U()})):(o.not(R).stop(!0,!0).hide(),R.animate({opacity:"show"},q,function(){l[0]||U()}))),m>=B)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,H,function(){U()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,H,function(){U()}).siblings().animate({opacity:"hide"},q,H);break;case"top":l.stop(!0,!1).animate({top:-p*t*D},q,H,function(){U()});break;case"left":l.stop(!0,!1).animate({left:-p*t*E},q,H,function(){U()});break;case"leftLoop":b=P,l.stop(!0,!0).animate({left:-(_(P)+Q)*E},q,H,function(){-1>=b?l.css("left",-(Q+(k-1)*t)*E):b>=k&&l.css("left",-Q*E),U()});break;case"topLoop":b=P,l.stop(!0,!0).animate({top:-(_(P)+Q)*D},q,H,function(){-1>=b?l.css("top",-(Q+(k-1)*t)*D):b>=k&&l.css("top",-Q*D),U()});break;case"leftMarquee":c=l.css("left").replace("px",""),0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*E)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+Q)*E&&l.css("left",-Q*E)});break;case"topMarquee":d=l.css("top").replace("px",""),0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*D)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+Q)*D&&l.css("top",-Q*D)})}j.removeClass(L).eq(p).addClass(L),N=p,x||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}},z&&bb(!0),A&&d.hover(function(){clearTimeout(K)},function(){K=setTimeout(function(){p=O,z?bb():"slideDown"==e?R.slideUp(q,V):R.animate({opacity:"hide"},q,V),N=p},300)}),cb=function(a){I=setInterval(function(){v?p--:p++,bb()},a?a:r)},db=function(a){I=setInterval(bb,a?a:r)},eb=function(){y||!u||i.hasClass("pauseState")||(clearInterval(I),cb())},fb=function(){(x||p!=k-1)&&(p++,bb(),S||eb())},gb=function(){(x||0!=p)&&(p--,bb(),S||eb())},hb=function(){clearInterval(I),S?db():cb(),i.removeClass("pauseState")},ib=function(){clearInterval(I),i.addClass("pauseState")},u?S?(v?p--:p++,db(),y&&l.hover(ib,hb)):(cb(),y&&d.hover(ib,hb)):(S&&(v?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?hb():ib()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);J=setTimeout(function(){p=a,bb(),eb()},c.triggerTime)},function(){clearTimeout(J)}):j.click(function(){p=j.index(this),bb(),eb()}),S?(g.mousedown(fb),f.mousedown(gb),x&&(kb=function(){jb=setTimeout(function(){clearInterval(I),db(0^r/10)},150)},lb=function(){clearTimeout(jb),clearInterval(I),db()},g.mousedown(kb),g.mouseup(lb),f.mousedown(kb),f.mouseup(lb)),"mouseover"==c.trigger&&(g.hover(fb,function(){}),f.hover(gb,function(){}))):(g.click(fb),f.click(gb)),"auto"!=c.vis||1!=t||"left"!=e&&"leftLoop"!=e||(nb=function(){C&&(l.width("auto"),l.children().width("auto")),l.parent().width("auto"),E=l.parent().width(),C&&l.parent().width(E),l.children().width(E),"left"==e?(l.width(E*m),l.stop(!0,!1).animate({left:-p*E},0)):(l.width(E*(m+2)),l.stop(!0,!1).animate({left:-(p+1)*E},0)),C||E==l.parent().width()||nb()},a(window).resize(function(){clearTimeout(mb),mb=setTimeout(nb,100)}),nb())})}}(jQuery),jQuery.easing["jswing"]=jQuery.easing["swing"],jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c)},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:1==(b/=e)?c+d:(g||(g=.3*e),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;return 0==b?c:2==(b/=e/2)?c+d:(g||(g=e*.3*1.5),h<Math.abs(d)?(h=d,f=g/4):f=g/(2*Math.PI)*Math.asin(d/h),1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c)},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
var zanpian = {
//浏览器信息
'browser':{
	'url': document.URL,
	'domain': document.domain,
	'title': document.title,
	'language': function(){
		try {
		  var ua = (navigator.browserLanguage || navigator.language).toLowerCase();//zh-tw|zh-hk|zh-cn
		  return ua;
		} catch (e) {}
	}(),
	'canvas' : function(){
		return !!document.createElement('canvas').getContext;
	}(),
	'useragent' : function(){
		var ua = navigator.userAgent;//navigator.appVersion
		return {
			'mobile': !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
			'ios': !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			'android': ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或者uc浏览器 
			'iPhone': ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器 
			'iPad': ua.indexOf('iPad') > -1, //是否iPad
			'trident': ua.indexOf('Trident') > -1, //IE内核
			'presto': ua.indexOf('Presto') > -1, //opera内核
			'webKit': ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			'gecko': ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核 
			'weixin': ua.indexOf('MicroMessenger') > -1 //是否微信 ua.match(/MicroMessenger/i) == "micromessenger",			
		};
	}()
},
//系统公共
'cms': {
	//提示窗口
	'floatdiv': function() {
		$("<link>").attr({
			rel: "stylesheet",
			type: "text/css",
			href: cms.public + "static/showfloatdiv/css/showfloatdiv.css"
		}).appendTo("head");
		$.getScript(cms.public + "static/showfloatdiv/js/showfloatdiv.js", function() {});
	},
	'stylecolor': function() {
		var $li = $("#skin li"); 
		$li.click(function (){ 
			switchSkin(this.id);
		});
		var cookie_skin = $.cookie("MyCssSkin");
		if (cookie_skin) {                       
			switchSkin(cookie_skin); 
		}
		function switchSkin(skinName) {   
		$("#" + skinName).addClass("selected") 
			.siblings().removeClass("selected"); 
		$("#cssfile").attr("href", cms.public+"static/css/" + skinName + ".css");
		$.cookie("MyCssSkin", skinName, { path: '/', expires: 10 }); 
		}
	}
},
'list': {
	//列表AJAX响应
	'more': function() {
		if ($('#content-more').length > 0) {
		var msg_list_loading = false;
		var i = 2;
		$(window).scroll(function() {
			if (!msg_list_loading){
				load_more_msg(more_ajax_url);
			}
		})
		function load_more_msg(url) {
			var winH = $(window).height();
			var pageH = $(document.body).height();
			var scrollT = $(window).scrollTop(); //滚动条top
			var aa = (pageH - winH - scrollT) / winH;
			if (aa < 0.02) {
				msg_list_loading = true;
				$("#content-more").append('<div class="loading" id="moreloading">正在加载中</div>');
				$.get(url + '-p-' + i, function(data, status) {
					var value = jQuery('#content-more',data).html();
					$("#content-more").find("#moreloading").remove();
					if (value == null || value == '') {
						value = '<div class="kong">抱歉，已经没有数据了！</div>';
						msg_list_loading = true;
						$("#content-more").append(value);
						return false;
					}
					$("#content-more").append(value);
					msg_list_loading = false;
					$(".loading").lazyload({
						effect: 'fadeIn'
					});
					i++;
				});
			}
		}
	  }
	},
	'ajax': function() {
		$('body').on("click", ".filter-list ul li a", function(e) {
			if (type_parms != undefined && type_parms != null) {
				var curdata = $(this).attr('data').split('-');
				if (curdata[0] == 'id' || curdata[0] == 'sid') {
					type_parms = {
						"id": curdata[1],
						"mcid": "0",
						"area": "0",
						"year": "0",
						"letter": "0",
						"sid": "0",
						"wd": "0",
						"sex": "0",
						"zy": "0",
						"order": "0",
						"picm": 1,
						"p": 1
					};
					deltype();
				}
				type_parms[curdata[0]] = curdata[1];
				type_parms['p'] = 1;
				url = parseurl(type_parms);
				$(this).parent().siblings().children("a").removeClass('current');
				$(this).addClass('current');
				zanpian.list.url(url);
				deltitle()
			}
			return false;
		});
		$('body').on("click", ".listpages a", function(e) {
			e.preventDefault();
			$(this).addClass('current');
			$(this).siblings().removeClass('current');
			var curdata = $(this).attr('data').split('-');
			type_parms[curdata[0]] = curdata[1];
			var url = parseurl(type_parms);
			zanpian.list.url(url);
		});
		$('body').on("click", ".view-filter a", function(e) {
			e.preventDefault();
			var curdata = $(this).attr('data').split('-');
			type_parms[curdata[0]] = curdata[1];
			type_parms['p'] = 1;
			var url = parseurl(type_parms);
			$(this).siblings().removeClass('current order');
			$(this).addClass('current order');
			zanpian.list.url(url);
		});
		$('body').on("click", ".view-mode li a", function(e) {
			e.preventDefault();
			var curdata = $(this).attr('data').split('-');
			type_parms[curdata[0]] = curdata[1];
			type_parms['p'] = 1;
			var url = parseurl(type_parms);
			$('.view-mode li a').each(function(e) {
				$(this).removeClass('current');
			});
			$(this).addClass('current');
			var url='';
			if(type_parms!=undefined&&type_parms!=null){
			var curdata=$(this).attr('data').split('-');
			type_parms[curdata[0]]=curdata[1];
			if(curdata[1]=='1'){
				$("#contents").removeClass('vod-show-id-mode');
				$("#contents").addClass('grid-mode');
			}else{
				$("#contents").addClass('vod-show-id-mode');
				$("#contents").removeClass('grid-mode');
			}
			}
		});
		$('body').on("click", "#conreset", function(e) {
			var curdata = $(this).attr('data').split('-');
			type_parms = {
				"id": curdata[1],
				"mcid": "0",
				"area": "0",
				"year": "0",
				"letter": "0",
				"sid": "0",
				"wd": "0",
				"sex": "0",
				"zy": "0",
				"order": "0",
				"picm": 1,
				"p": 1
			};
			url = parseurl(type_parms);
			zanpian.list.url(url);
			deltype();
			deltitle();
		});

		function deltitle() {
			var constr = '';
			$('.filter-list ul li a').each(function(e) {
				if ($(this).attr('class') == 'current') {
					if ($(this).html() == '全部') constr += ' ';
					else constr += '<em>' + $(this).html() + '</em>';
				}
			});
			if (constr != '') $('.conbread').html(constr);
		}

		function deltype() {
			$('.filter-list ul li a').each(function(e) {
				$(this).removeClass('current');
				if ($(this).html() == '全部') {
					$(this).attr('class', 'current');
				}
			});
			return false;
		}

		function emptyconbread() {
			$('.filter-list ul li a').each(function(e) {
				$(this).removeClass('current');
				if ($(this).html() == '全部') {
					$(this).attr('class', 'current');
				}
			});
			return false;
		}

		function parseurl(rr) {
			var url = cms.root + type_ajax_url;
			for (var c in rr) {
				if (rr[c] != '0') {
					url = url + "-" + c + "-" + rr[c];
				}
			}
			return url;
		}
	},
	'url': function(url) {
		if (($('#contents li').length > 3)) $("html,body").animate({
			scrollTop: $("#contents").offset().top - 93
		}, 500);
		$("#contents").html('<li class="kong"><label>努力加载中……</label></li>');
		$.get(url, function(data, status) {
			var value = jQuery('#contents', data).html();
			if (value == null || value == '') {
				value = '<div class="kong">抱歉，没有找到相关内容！</div>';
			}
			$("#contents").html(value);
			$("#short-page").html(jQuery('#short-page', data).html())
			$("#long-page").html(jQuery('#long-page', data).html())
			$("#total-page").html(jQuery('#total-page', data).html())
			$("#current-page").html(jQuery('#current-page', data).html())
			$("#count").html(jQuery('#count', data).html())
			$(".loading").lazyload({
				effect: 'fadeIn'
			});
			if (zanpian.browser.language == 'zh-hk' || zanpian.browser.language == 'zh-tw') {
				$(document.body).s2t();
			}
		});

	},
},
'player': {
	//播放权限回调
	'vip_callback': function($vod_id,$vod_sid,$vod_pid,$status,$trysee,$tips) {
		if($status != 200){
			if($trysee > 0){
				window.setTimeout(function(){
					$.get(cms.root+'index.php?s=/home/vod/vip/type/trysee/id/'+$vod_id+'/sid/'+$vod_sid+'/pid/'+$vod_pid, function(html){
						var index='<div class="embed-responsive embed-responsive-16by9"><div id="zanpiancms-player-vip"><div class="zanpiancms-player-box jumbotron">'+html+'</div></div></div>';																							
						$('#zanpiancms_player').html(index);
						//$('.zanpiancms-player-box').html(html).addClass("jumbotron");
						//zanpian.user.iframe();
						//$('#zanpiancms-player-vip .zanpiancms-player-iframe').hide();
					},'html');
				},1000*60*$trysee);
			}else{
				$('#zanpiancms-player-vip .zanpiancms-player-box').html($tips).addClass("jumbotron");
				$('#zanpiancms-player-vip .zanpiancms-player-iframe').hide();
			}
			//播放你密码
			$('body').on("click","#user-weixinpwd",function(){
				$(this).text('Loading...');
				$pwd=$(".password").val();
				$.get(cms.root+'index.php?s=/home/vod/vip/type/pwd/id/'+$vod_id+'/sid/'+$vod_sid+'/pid/'+$vod_pid+'/pwd/'+$pwd, function(json){
					if(json.status == 200){
						zanpian.user.iframe();
					}else{
						$("#user-weixinpwd").text('播放');
						alert('密码错误或失效,请重新回复');
					}
				},'json');
			});	
			//支付影币按钮
			$('body').on("click","#user-price",function(){
				$(this).text('Loading...');
				var obj=$(this);
				$.get(cms.root+'index.php?s=/home/vod/vip/type/ispay/id/'+$vod_id+'/sid/'+$vod_sid+'/pid/'+$vod_pid, function(json){
					if(json.status == 200){
						$.showfloatdiv({txt: '支付成功',cssname : 'succ'});
						$.hidediv();
						zanpian.user.iframe();
					}else if(json.status == 602){
						 obj.text('确定');
                         $.showfloatdiv({txt: json.info})
						 $.hidediv({})
						 setTimeout(function() {
				            zanpian.user.payment();
				        }, 1000);
					}else if(json.status == 500 || json.status == 501){
						//zanpian.user.login();
					}else{
						$('#zanpiancms-player-vip .zanpiancms-player-box').html(json.info).addClass("jumbotron");
					}
				},'json');
			});				
		}else{
			//拥有VIP观看权限
		}
	},		
},
'updown': { //顶踩与送花
	'load': function() {
			$('body').on("click", "#up,#down,#flower,#digg", function() {
			$.showfloatdiv({
					txt: '数据提交中...',
					cssname: 'loading'
			});
			var obj = $(this);	
			$.ajax({
			type: 'post',
			data: {'id':$(this).data("id"),'sid':$(this).data("sid"),'type':$(this).data("type"),'name':$(this).data("name")},
			dataType:'json',
			cache: false,
			url: cms.root + "index.php?s=/home/digg/index",
			timeout: 3000,
			success: function(r){
					$.hidediv(r);
					if (parseInt(r.code) > 0){
						count=obj.find('#count').text()*1+1;
						obj.find('#count').text(count);
						obj.find('#count').attr('data-count',count)
					}
				}});
			});
		$("#flower").hover(function() {
			$(this).find("#count").text("送花");
		}, function() {
			var count = $(this).find("#count").attr("data-count")
			$(this).find("#count").text(count);
		});

	},
},
'love': {//订阅与收藏
	'load': function() {
		$(".user-bt").each(function() {
			var a = $(this).find(".sect-btn"),
				b = $(this).find(".cancel"),
				c = $(this).find(".sect-show");
			    a.click(function(){
				if(!zanpian.user.islogin()){zanpian.user.loginform();return false;}
				$.showfloatdiv({
					txt: "数据提交中...",
					cssname: "loading"
				});
				var d = $(this);
				$.ajax({
			      type: 'get',
			      cache: false,
			      url: cms.root + "index.php?s=/home/ajax/mark/type/"+a.attr("data-type")+"/id/" + a.attr("data-id")+"/cid/"+a.attr("data-cid"),
			      timeout: 3000,
			      success: function(a) {
					$.hidediv(a), parseInt(a.code) > 0 ? (d.hide(), c.show(), b.show()) : parseInt(a["yjdy"]) > 0 && 1 == parseInt(a["yjdy"]) && (d.hide(a), c.show(), b.show())
				}})
			}), b.click(function() {
				$.showfloatdiv({
					txt: "数据提交中...",
					cssname: "loading"
				}),$.ajax({
			      type: 'get',
			      cache: false,
			      url: cms.root + "index.php?s=/home/ajax/mark/type/"+a.attr("data-type")+"/id/" + a.attr("data-id")+"/cid/"+a.attr("data-cid"),
			      timeout: 3000,
			      success: function(b){
					$.hidediv(b), parseInt(b.code) > 0 && (a.show(), c.hide())
				}})
			})
		})

	},		
},
//评分
'score': {
	'load': function() {
		 if ($('#zanpian-score').length > 0 && $('#zanpian-cm').length<=0) {
		   zanpian.score.ajax(cms.root + "index.php?s=/home/ajax/gold/id/" + $('#zanpian-score').data('id')+"/sid/"+$('#zanpian-score').data('sid'))
		 }
	},
	'loading': function() {
		  if ($('#zanpian-score').length > 0) {
		   zanpian.score.ajax(cms.root + "index.php?s=/home/ajax/gold/id/" + $('#zanpian-score').data('id')+"/sid/"+$('#zanpian-score').data('sid'))
		 }
	},	
     //加载评分与订阅收藏
    'ajax':function(url){
         $.ajax({
			url: url,
			cache: false,
			timeout: 3000,
			success: function(data) {
				if (data.gold != undefined && data.gold != null) {
					zanpian.score.stars(data.gold);
				};
			}
			});
		 return false;
	},
	'stars':function(r){
		if($("#rating")) {
			$("ul.rating li").each(function() {
				var b = $(this).attr("title"),
					c = $("ul.rating li"),
					d = $(this).index(),
					e = d + 1;
				$(this).click(function() {
					hadpingfen > 0 ? ($.showfloatdiv({
						txt: "已经评分,请务重复评分"
					}), $.hidediv({})) : ($.showfloatdiv({
						txt: "数据提交中...",
						cssname: "loading"
					}), c.removeClass("active"), $("ul.rating li:lt(" + e + ")").addClass("active"), $("#ratewords").html(b),$.post(cms.root + "index.php?s=/home/ajax/addgold",{
						val: $(this).attr("val"),
						id: cms.id,
						sid: cms.sid
					},function(a) {
						if (parseInt(a.code) == 1) {
							$.ajax({
								type: 'get',
								cache: false,
								timeout: 3000,
								url: cms.root + "index.php?s=/home/ajax/gold/id/" + cms.id +"/sid/"+ cms.sid,
								success: function(data) {
									zanpian.score.stars(data.gold);
								}
							});
						}
						parseInt(a.code) > 0 ? ($.hidediv(a), loadstat(), hadpingfen = 1) : -2 == parseInt(a.code) ? (hadpingfen = 1, $.showfloatdiv({
							txt: "已经评分,请务重复评分"
						}), $.hidediv({})) : ($.closefloatdiv(), $("#innermsg").trigger("click"))

					}, "json"))
				}).hover(function(){
					this.myTitle = this.title, this.title = "", $(this).nextAll().removeClass("active"), $(this).prevAll().addClass("active"), $(this).addClass("active"), $("#ratewords").html(b)
				}, function() {
					this.title = this.myTitle, $("ul.rating li:lt(" + e + ")").removeClass("hover")

				})
			}), $(".rating-panle").hover(function() {
				$(this).find(".rating-show").show()
			}, function() {
				$(this).find(".rating-show").hide()
			})
		}		
		var hadpingfen = 0;
		var curstars = parseInt(r.mygold);
		$("#pa").html(r['curpingfen'].a + "人");
		$("#pb").html(r['curpingfen'].b + "人");
		$("#pc").html(r['curpingfen'].c + "人");
		$("#pd").html(r['curpingfen'].d + "人");
		$("#pe").html(r['curpingfen'].e + "人");
		$("#vod_gold").html(r['curpingfen'].pinfen);
		var totalnum = parseInt(r['curpingfen'].a) + parseInt(r['curpingfen'].b) + parseInt(r['curpingfen'].c) + parseInt(r['curpingfen'].d) + parseInt(r['curpingfen'].e);
		if (totalnum > 0) {
			$("#pam").css("width", ((parseInt(r['curpingfen'].a) / totalnum) * 100) + "%");
			$("#pbm").css("width", ((parseInt(r['curpingfen'].b) / totalnum) * 100) + "%");
			$("#pcm").css("width", ((parseInt(r['curpingfen'].c) / totalnum) * 100) + "%");
			$("#pdm").css("width", ((parseInt(r['curpingfen'].d) / totalnum) * 100) + "%");
			$("#pem").css("width", ((parseInt(r['curpingfen'].e) / totalnum) * 100) + "%")
		};
		if (r['hadpingfen'] != undefined && r['hadpingfen'] != null) {
			hadpingfen = 1;
		}
		var PFbai = r['curpingfen'].pinfen * 10;
		if (PFbai > 0) {
			$("#rating-main").show();
			$("#rating-kong").hide();
			$("#fenshu").animate({
				'width': parseInt(PFbai) + "%"
			});
			$("#total").animate({
				'width': parseInt(PFbai) + "%"
			});
			$("#pingfen").html(r['curpingfen'].pinfen);
			$("#pingfen2").html(r['curpingfen'].pinfen);

		} else {
			$("#rating-main").hide();
			$("#rating-kong").show();
			$(".loadingg").addClass('nopingfen').html('暂时没有人评分，赶快从左边打分吧！');
		};
		if (r['loveid'] != null) {
			$("#love").hide();
			$("#yeslove").show();
		} else {
			$("#love").show();
			$("#yeslove").hide();
		}
		if (r['remindid'] != null) {
			$("#remind").hide();
			$("#yesremind").show();
		} else {
			$("#remind").show();
			$("#yesremind").hide();
		}
		if (curstars > 0) {
			var curnum = curstars - 1;
			$("ul.rating li:lt(" + curnum + ")").addClass("current");
			$("ul.rating li:eq(" + curnum + ")").addClass("current");
			$("ul.rating li:gt(" + curnum + ")").removeClass("current");
			var arr = new Array('很差', '较差', '还行', '推荐', '力荐');
			$("#ratewords").html(arr[curnum]);
		}      
	},

},
//播放记录
'playlog': {
	'load': function() {
		zanpian.playlog.set();
		zanpian.playlog.get();
	},
	'get': function() {
		if ($("#user_playlog").eq(0).length) {
			$.ajax({
				type: 'get',
				cache: false,
				url: cms.root + 'index.php?s=/home/playlog/get',
				timeout: 10000,
				success: function($html) {
					$(".playlog_list").html($html);
					zanpian.user.userinfo();
				}
			})
			$('#user_playlog').hover(function() {
				$(this).children('.playlog_list').stop(true, true).show();
			}, function() {
				$(this).children('.playlog_list').stop(true, true).hide();
			})
			$('body').on("click", "#playlog-clear", function(){
				$.ajax({
			       type: 'get',
			       cache: false,
				   dataType:'json',
			       url: cms.root + 'index.php?s=/home/playlog/clear',
			       timeout: 10000,
			       success: function(data) {											 
					if (parseInt(data["rcode"]) > 0) {
						$(".highlight").html("<p>暂无观看历史记录列表</p>");
					}
				}})
			});
			$('body').on("click", "#playlog-del", function(event) {
				event.preventDefault();
				$.post(cms.root + 'index.php?s=/user/playlog/del', {
					log_id: $(this).attr('data-id'),
					log_vid: $(this).attr('data-vid')
				}, function(data) {
					if (parseInt(data["code"]) > 0) {}
				}, "json")
				$(this).parent().remove();
			});
			$('body').on("click", "#playlog-close", function() {
				$('.playlog_list').stop(true, true).hide();
			});
		}
	},
	'set': function() {
		if ($(".playlog-set").eq(0).attr('data-pid')) {
			$.post(cms.root + "index.php?s=/home/playlog/set", {
				log_vid: $(".playlog-set").attr('data-id'),
				log_sid: $(".playlog-set").attr('data-sid'),
				log_pid: $(".playlog-set").attr('data-pid'),
				log_urlname: $(".playlog-set").attr('data-name'),
				log_maxnum: $(".playlog-set").attr('data-count')
			});
		}

	},
},
//评论
'cm': {
	//按类型加载评论
	'load':function(){
		if($('#zanpian-cm[data-type=zanpian]').length){
			this.forum();
		}
		if($('#zanpian-cm[data-type=uyan]').length){
			this.uyan();
		}
		if($('#zanpian-cm[data-type=changyan]').length){
			this.changyan();
		}
	},	
	'forum': function(){
		    var id=$("#zanpian-cm").data('id');
			var sid=$("#zanpian-cm").data('sid');
		    //如果同时需要评分并加载
		    if($('#zanpian-score').length > 0){
			   zanpian.cm.ajax(cms.root + "index.php?s=/home/ajax/get/id/" + id + "/sid/" + sid);
			}else{
			   zanpian.cm.ajax(cms.root + "index.php?s=/home/ajax/cm/id/" + id + "/sid/" + sid);	
			}
			zanpian.cm.emo();
			$("#subcomm").click(function(e){
				if(!zanpian.user.islogin()){zanpian.user.loginform();return false;}						 
				$("#commform").zanpiansub({
					curobj: $("#subcomm"),
					txt: '数据提交中,请稍后...',
					onsucc: function(result) {
						$.hidediv(result);
						if (parseInt(result['code']) > 0) {
							zanpian.cm.ajax(cms.root + "index.php?s=home/ajax/cm/id/" + id + "/sid/" + sid)
						}else{
							$('img.validate-img').attr("src",zanpian.image.validateurl());	
						}
						if(parseInt(result['code']) < -1){
							 zanpian.user.loginform();
							 return false;	
						}
					}
				}).post({
					url: cms.root + 'index.php?s=home/ajax/addcm/sid/'+sid+'/id/'+id
				});
				return false;
			});
			$("#cmt-input-tip .form-control").focus(function(){										 
				$("#cmt-input-tip").hide(),$("#cmt-input-bd").show(),$("#cmt-input-bd .ui-textarea").focus()
			})
			$("#comm_txt").focus(function(e){
					if(!zanpian.user.islogin()){zanpian.user.loginform();return false;}
			});
	},
	//评论表情
	'emo': function() {
		$.get(cms.public + 'cms/emots.html',function(data){
		$("#emots").html(data);
		$('body').on("click",".emotion",function(){
			var left = $(this).offset().left;
			var top = $(this).offset().top;
			var id = $(this).attr("data-id");
			$("#smileBoxOuter").css({
				"left": left,
				"top": top + 25
			}).show().attr("data-id", id)
		});
		$("#smileBoxOuter,.emotion").hover(function() {
			$("#smileBoxOuter").attr("is-hover", 1)
		}, function() {
			$("#smileBoxOuter").attr("is-hover", 0)
		});
		$(".emotion,#smileBoxOuter").blur(function() {
			var is_hover = $("#smileBoxOuter").attr("is-hover");
			if (is_hover != 1) {
				$("#smileBoxOuter").hide()
			}
		});
		$(".smileBox").find("a").click(function() {
			var textarea_id = $("#smileBoxOuter").attr("data-id");
			var textarea_obj = $("#reply_" + textarea_id).find("textarea");
			var textarea_val = textarea_obj.val();
			if (textarea_val == "发布评论") {
				textarea_obj.val("")
			}
			var title = "[" + $(this).attr("title") + "]";
			textarea_obj.val(textarea_obj.val() + title).focus();
			$("#smileBoxOuter").hide()
		});
		$("#smileBoxOuter").find(".smilePage").children("a").click(function() {
			$(this).addClass("current").siblings("a").removeClass("current");
			var index = $(this).index();
			$("#smileBoxOuter").find(".smileBox").eq(index).show().siblings(".smileBox").hide()
		});
		$(".comment_blockquote").hover(function() {
			$(".comment_action_sub").css({
				"visibility": "hidden"
			});
			$(this).find(".comment_action_sub").css({
				"visibility": "visible"
			})
		}, function() {
			$(".comment_action_sub").css({
				"visibility": "hidden"
			})
		})
		});
	},
	'ajax': function(url) {
		$.ajax({
			url: url,
			cache: false,
			timeout: 3000,
			success: function(data) {
				if (data!= ''){
					if ($('#datalist li').length > 3) $("html,body").animate({
						scrollTop: $("#datalist").offset().top - 130
					}, 1000);
					$("#comment").empty().html(data.comment);
					$("#commnum").html(jQuery('#comment-count',data.comment).html());
					$("#data").empty().html(data);
					if(zanpian.browser.language=='zh-hk' || zanpian.browser.language=='zh-tw'){
					    $(document.body).s2t();
					}
					$("#commnum").html(data.count);																
					$(".digg a").click(function(e) {										  
						var id = $(this).data('id');
						var type = $(this).data('type');
						suburl($(this).data('url'),$(this));
						return false;
					});
					$(".reply").click(function(e){
						var curid = $(this).attr('data-id');
						var curpid = $(this).attr('data-pid');
						var curtid = $(this).attr('data-tid');
						var curtuid = $(this).attr('data-tuid');
						var curvid = $(this).attr('data-vid');
						var cursid = $(this).attr('data-sid');
						if (!zanpian.user.islogin()) {
							zanpian.user.loginform();
							return false;
						} else {
							if ($("#rep" + curid).html() != '') {
								$("#rep" + curid).html('');
							} else {
								
								$(".comms").html('');
								$("#rep" + curid).html($("#commsub").html());
								$(".emotion,#smileBoxOuter").blur(function() {
									var is_hover = $("#smileBoxOuter").attr("is-hover");
									if (is_hover != 1) {
										$("#smileBoxOuter").hide()
									}
								});
								$("#rep" + curid + " #comm_pid").val(curpid); //顶级ID
								$("#rep" + curid + " #comm_id").val(curid); //回贴ID
								$("#rep" + curid + " #comm_tid").val(curtid); //回贴ID
								$("#rep" + curid + " #comm_tuid").val(curtuid); //回贴用户ID
								$("#rep"+ curid+ " #comm_sid").val(cursid);
								$("#rep"+ curid+ " #comm_vid").val(curvid);
								$("#rep" + curid + " #row_id").attr("data-id", curid)
								$("#rep" + curid + " .recm_id").attr("id", 'reply_' + curid)
								$("#rep" + curid + " .sub").unbind();
								$("#rep" + curid + " .sub").click(function(e) {
								if(!zanpian.user.islogin()){zanpian.user.loginform();return false;}										   
								$("#rep" + curid + " #comm-sub-form").zanpiansub({
										curobj: $("#rep" + curid + " .sub"),
										txt: '数据提交中,请稍后...',
										onsucc: function(result) {
											$.hidediv(result);
											if (parseInt(result['code']) > 0){
												zanpian.cm.ajax(url);
											}else{
												$('img.validate-img').attr("src",zanpian.image.validateurl());
											}
											if(parseInt(result['code']) < -1){
											       zanpian.user.loginform();
							                       return false;	
											}
											
										}
									}).post({
										url: cms.root + 'index.php?s=/home/ajax/addrecm'
									});
								});
							}
						}
					});
				} else {
					$("#datalist").html('<li class="kong">当前没有评论，赶紧抢个沙发！</li>');
				};
				
				if (data.gold != undefined && data.gold != null) {
				         zanpian.score.stars(data.gold);
			    };	
				$("#pages").html(data.pages);
				$("#pagetop").html(data.pagetop);
				$(".ajax-page ul a").click(function(e) {
					var pagegourl = $(this).attr('href');
					zanpian.cm.ajax(pagegourl);
					return false;
				});
			},
			dataType: 'json'
		});
		return false;
	},

},
'user': {
	'index': function() {
		zanpian.user.login();
		zanpian.user.home();			
	},	
	//检查登录状态
	'islogin': function() {
		islogin = 0;
		if (document.cookie.indexOf('auth_sign=') >= 0) {
			islogin = 1;
			return true;
		}
		return false;
	},
	//弹出登录窗口
	'loginform': function() {
		if (!zanpian.user.islogin()) {
			if($("#commform").click()){
					$('#commform').colorbox({
						href:"#login-dialog",
						inline:true, 
						opacity: 0.6,
						width: "520px"
					});
				var child=document.getElementById("nav-signin");
				child.parentNode.removeChild(child);	
			}
			else if($(".sect-btn").click()){
					$('.sect-btn').colorbox({
						href:"#login-dialog",
						inline:true, 
						opacity: 0.6,
						width: "520px"
					});
				var child=document.getElementById("nav-signin");
				child.parentNode.removeChild(child);	
			}
			zanpian.user.login();
		} else {
			return false;
		}
	},
	//登录
	'login': function() {
		$('body').on("click", "#login-submit", function(){									
			if ("" == $("#user_name").val()){$.showfloatdiv({
				txt: "请输入用户名手机或邮箱"
			}), $("#user_name").focus(), $.hidediv({});
			    return false;
			}
			else {
				if ("" != $("#user_password").val()) return $("#login-form").zanpiansub({
					curobj: $("#login-submit"),
					txt: "数据提交中,请稍后...",
					isajax: 1,
					onsucc: function(a) {
						if ($.hidediv(a), parseInt(a["code"]) > 0) {
							try {
								zanpian.playlog.get();
								zanpian.score.loading();
							} catch (e) {}
							setTimeout(function() {
								$(".modal-dialog .close").trigger('click');
							}, 500);
							window.location.reload();
						} else - 3 == parseInt(a["code"])
						$('img.validate-img').attr("src",zanpian.image.validateurl());
					}
				}).post({
					url: cms.root + "index.php?s=/user/login/index"
				}), !1;
				$.showfloatdiv({
					txt: "请输入密码"
				}), $("#userpassword").focus(), $.hidediv({})
			}
		})
	},
	//注册
	'userinfo': function(){
		if(!zanpian.user.islogin()){
			return false;
		}	
		$.ajax({
			type: 'get',
			cache: false,
			url: cms.root + 'index.php?s=/user/center/flushinfo',
			timeout: 10000,
			success: function(a) {
				
				return -7 == parseInt(a.code) ? ($.showfloatdiv({
					txt: a.msg,
					classname: "error"
				}), $.hidediv({
					code: -1,
					msg: a.msg
				}), !1) : (a.uid > 0 && (parseInt(a.history) > 10 ? ($("#playlog-todo").html('<a target="_blank" href="' + cms.root + 'index.php?s=/user/center/playlog">进入会员中心查看' + a.history + '条播放记录&gt;&gt;</a>'), $("#playlog-todo").show()) : ($("#playlog-todo").html(""), $("#playlog-todo").hide()), loginhtml = $("#navbar_user_login,#user_login").html(), $("#navbar_user_login,#user_login").html(a.html), $("#nav-signed").hide(), $(".logoutbt").unbind(), $('#navbar_user_login .nav-link').removeAttr("href"), $('#navbar_user_login').click(function() {
					$('.user-search,#example-navbar-collapse').hide();
					$(this).children('#nav-signed').toggle();
				}), $('#user_login').hover(function() {
					$(this).children('#nav-signed').stop(true, true).show();
				}, function() {
					$(this).children('#nav-signed').stop(true, true).hide();
				}), $(".logoutbt").click(function(event) {
					event.stopPropagation();
					$.showfloatdiv({
						txt: '数据提交中...',
						cssname: 'loading'
					});
					$.get(cms.root + "index.php?s=/home/ajax/logout", function(r) {
						if ($.hidediv(r), parseInt(r["code"]) > 0) {
							$("#navbar_user_login,#user_login").html(loginhtml);
							zanpian.playlog.get();
							$("#love,#remind").show();
                            $("#yeslove,#yesremind").hide();
						}
					}, 'json');
				})))
			}
		})
	},
	'home': function() {
		$('body').on("click", ".user-home-nav ul a",function(){
				var url = $(this).attr("data-url");
				if(url){
				var txt=$(this).text();
				$(this).parents().find('li').removeClass('active');
				$(this).parent('li').addClass('active');
				$("#tab_title").text(txt);
				if($(this).attr("data-id")=='cm'){
				    zanpian.cm.ajax(url);
					zanpian.cm.emo();
				}else{
					zanpian.user.get(url);
				}}
		})
	},
},	
'gbook': { 
    //留言
	'load': function() {
		$('body').on("click", "#gb_types li",function(e){
        $("#gb_types li").each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $("#gb_type").val($(this).attr('val'));
        });		
		$('body').on("click", "#gb-submit", function(){
			if ($("#gb_nickname").val() == '') $.showfloatdiv({
				txt: "请输入您的昵称"
			}), $("#gb_nickname").focus(), $.hidediv({});
			else {										 
			if ("" != $("#gb_content").val()) return $("#gbook-form").zanpiansub({
				curobj: $("#gb-submit"),
				txt: "数据提交中,请稍后...",
				onsucc: function(a) {
					if ($.hidediv(a), parseInt(a["code"]) > 0) {
					  zanpian.list.url(cms.root + "index.php?s=/home/gb/show");
					} else - 3 == parseInt(a["code"])
				}
			}).post({
				url: cms.root + "index.php?s=/home/gb/add"
			}), !1;
			$.showfloatdiv({
				txt: "输入留言内容"
			}), $("#gb_content").focus(), $.hidediv({})
		}
		})
	},
},
'search': { //搜索
	'autocomplete': function(){
		var $limit = $('.zanpian_search').eq(0).attr('data-limit');
		if( $limit > 0){
			$.ajaxSetup({
				cache: true
			});
			$.getScript("https://cdn.staticfile.org/jquery.devbridge-autocomplete/1.2.26/jquery.autocomplete.min.js", function(response, status) {
				$ajax_url = cms.root+'index.php?s=/home/search/vod';
				$('.zanpian_wd').autocomplete({
					serviceUrl : $ajax_url,
					params: {'limit': $limit},
					paramName: 'q',
					maxHeight: 400,
					transformResult: function(response) {
						var obj = $.parseJSON(response);
						return {
							suggestions: $.map(obj.data, function(dataItem) {
								return { value: dataItem.vod_name, data: dataItem.vod_url};
							})
						};
					},
					onSelect: function (suggestion) {
						location.href = suggestion.data;
						//alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
					}
				});
			});
		}
	},

},
//图片处理
'image': {
	//延迟加载
	'lazyload': function(){
		$.ajaxSetup({
			cache: true
		});
		$.getScript("//cdn.staticfile.org/jquery_lazyload/1.9.7/jquery.lazyload.min.js", function(response,status){
			$(".loading").lazyload({
				effect : "fadeIn",
				failurelimit: 15
			}); 
		});
	},	
	/* //生成二维码
	'qrcode': function(){
		murl=cms.murl;		
		if(murl=='' || murl === 'undefined'){
			murl=zanpian.browser.url;
		}
	    if($(".qrcode")){
		$(".qrcode").append('<img class="qrcode" src="//api.97bike.com/qrcode/?url='+encodeURIComponent(cms.murl)+'"/>');
		}
		$("#qrcode").popover({
				html: true
		});
		$("#qrcode").on('show.bs.popover', function () {
			$("#qrcode").attr('data-content','<img class="qrcode" src="//api.97bike.com/qrcode/?url='+encodeURIComponent(cms.murl)+'"/>');
		})
	}, */
	//生成验证码图片
	'validate':function(){
		return '<label><img class="validate-img" src="'+cms.root +'index.php?s=/home/verify/index/' + Math.random()+'"></label>';
	},
	//生成验证码图片
	'validateurl':function(){
		return cms.root +'index.php?s=/home/verify/index/' + Math.random();
	},	
},
//验证码相关
'validate': {
	'load': function(){
		zanpian.validate.focus();
		zanpian.validate.click();
	},
	'focus': function(){//验证码框焦点
		$('body').on("focus", "#zanpian-validate", function(){
			$('#validate-zanpian,#validate-zanpian-reg').html(zanpian.image.validate()); 												
			$(this).unbind();
		});
	},
	'click': function(){//点击刷新
		$('body').on('click', 'img.validate-img', function(){
			$(this).attr("src",zanpian.image.validateurl());
		});
	}
},
//人气处理
'hits':{
	'load': function(){
		$(".detail-hits").each(function(i){
			var $this = $(".detail-hits").eq(i);
			$.ajax({
				url: cms.root+'index.php?s=/home/hits/show/id/'+$this.attr("data-id")+'/sid/'+$this.attr("data-sid")+'/type/'+$this.attr("data-type"),
				cache: true,
				dataType: 'json',
				success: function(data){
					$type = $this.attr('data-type');
					if($type != 'insert'){
						$this.html(eval('(data.' + $type + ')'));
					}
					$("#detail-hits").html(eval('(data.' + $("#detail-hits").attr('data-type') + ')'));
				}
			});
	 });
	}
},
'mobile':{//移动端专用
	'jump': function(){
		if( cms.murl && (zanpian.browser.url != cms.murl) ){
			 location.replace(cms.murl);
		}
	},
},	
};
$(document).ready(function(){
if(zanpian.browser.useragent.mobile){
	zanpian.mobile.jump();
}					   
zanpian.cms.floatdiv();//窗口提示信息
zanpian.cms.stylecolor();//切换颜色
zanpian.image.lazyload();//图片延迟加载
zanpian.search.autocomplete();//联系搜索
/* zanpian.image.qrcode(); *///二维码
zanpian.list.ajax();//列表AJAX
zanpian.user.index();
zanpian.gbook.load();
zanpian.validate.load();
zanpian.playlog.load();//加载播放记录
zanpian.score.load();//加载评分
zanpian.cm.load();//加载评论
zanpian.updown.load();
zanpian.love.load();//订阅收藏
zanpian.hits.load();
});