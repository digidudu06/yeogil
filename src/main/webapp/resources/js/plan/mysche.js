"use strict";
var mysche = mysche || {};
mysche = (()=>{
	let _,js,compojs,img;
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		img = $.img();
		compojs = js+'/comp/compo.js';
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs,()=>{
			$('#common_area').empty();
			$(compo.mypage_sche()).appendTo('#common_area');
			$('.plan_hidden_btn').click(function(){
				mypage.init();
			});
		});
	};
	return {init:init};
})();