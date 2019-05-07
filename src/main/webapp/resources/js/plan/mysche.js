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
			
			if(sessionStorage.getItem('thumbnailImg')==='default_img'){
				$('.my_img').attr('src',img+'/common/default_img.png');
			}else{
				$('.my_img').attr('src',sessionStorage.getItem('thumbnailImg'));
			}
			$('.my_name').text(sessionStorage.getItem('nickname'));
			
			$('.m_tab').remove();
			$('.mtab_line').remove();
		});		
	};
	return {init:init};
})();