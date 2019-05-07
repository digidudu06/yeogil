"use strict";
var mypage = mypage || {};
mypage = (()=>{
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
		
			$(compo.mysche()).appendTo('#common_area');
			
			$('#my_cover').empty();
			$('#my_cover')
			.attr('style','background:url("https://img.earthtory.com/img/city_default/301/10024.jpg")');
			//$('<div class="cover_img">').appendTo('.plan_cover');
			$('.plan_mnu_box').empty();
			// each
			$('<div class="plan_mnu">').appendTo('.plan_mnu_box').text('개요');
			$('<div class="plan_mnu_line">').appendTo('.plan_mnu_box');
			$('<div class="plan_mnu_btn orange"></a>')
			.appendTo('.plan_mnu_box').text('수정하기').click(function(){
				//기존스케쥴 담아서 이동하기
				sche.init();
			});
			$('#share_btn').click(function(){
				alert('공유버튼 클릭');
				//모달
			});
			
		});
	};
	return {init:init};
})();