"use strict";
var plan = plan||{};
plan =(()=>{
	let _, js, css, compojs, img, mainjs;
	let cont= x =>{
		plan.$.cont(x);
	};
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		compojs = js+'/comp/compo.js';
		mainjs = js+'/main/main.js';
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
//==========================================메인 네비바
		$('#home').click(function(){
			location.assign($.ctx());
		});
		
		$('#tour').click(function(){
			location.assign($.ctx()+'/tour');
		});
		
		$('#plan').click(function(){
			location.assign($.ctx()+'/sche');
		});
		
		$('#reservation').click(function(){
				location.assign($.ctx()+'/reser');
		});
//==================================================	
		$('#jw_css').remove();
		$.getScript(compojs,()=>{
			$('#common_area').empty();

			$(compo.plan_header()).appendTo('#common_area');
			
			$('#p_header_img').attr('src',img+'/component/p_header_img_ko.jpg');
				// 이미지 바꾸기
			$('.p_header_btn_box').empty();
				// 모달 삭제
			$('<div class="p_header_btn" id="btn_1">')
				.appendTo('.p_header_btn_box').text('새로운 일정 만들기')
				.click(function(){
//*************************************************css end
					/*$.getScript(mainjs,()=>{
						if(sessionStorage.getItem('session') === null){
							main.login();
						}else{*/
							sche.init();
					/*	}
					});*/
				});
			$('<img/>').attr('src',img+'/component/p_header_btn_img1.jpg').appendTo('#btn_1');
			
			$('<div class="p_header_btn" id="btn_2">')
				.appendTo('.p_header_btn_box').text('나의 일정 보기')
				.click(function(){
					mysche.init();
				});
			
			$('<img/>').attr('src',img+'/component/p_header_btn_img2.jpg').appendTo('#btn_2');
			
			$(compo.plan_content()).appendTo('#common_area');
			$('#area_btn').attr('src',img+'/component/area_down.jpg');
			$('#city_btn').attr('src',img+'/component/area_down.jpg');
			//안나와 아이콘
			/*$('#p_header_hide_bg').attr('src',img+'/component/hide_bg.jpg');
			$('#pgn-nx2').attr('src',img+'/component/pg_last.png');
			$('.pn_list_spot_icon').attr('src',img+'/component/pn_list_spot_icon.png');*/
			$('#footer').remove();
		});
	};
	return {init:init,cont:cont};
})();

plan.$= {
		cont: (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				plan.init();
			})
		}
};