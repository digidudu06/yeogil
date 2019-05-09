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
			$(compo.mysche()).appendTo('#common_area');
			$('#mysche_nav').css("padding-bottom","30px");
			$('#my_cover').empty();
			$('#my_cover').attr('style','background:url("https://img.earthtory.com/img/city_default/301/10024.jpg")');
			
			$('#edit_detail_plan').click(function(){
				sche.init();
			});
			if(sessionStorage.getItem('thumbnailImg')==='default_img'){
				$('.puser_img').attr("src",img+"/common/default_img.png");
			}else{
				$('.puser_img').attr("src",sessionStorage.getItem('thumbnailImg'));
			}
			$('.puser_name').text(sessionStorage.getItem('nickname'));
			$('.plan_theme').remove();
			
			$.getJSON(_+'/memOneSchedules/'+sessionStorage.getItem('memberId'),d=>{
				$.each(d.list, (i,j)=>{
					
					alert(j.MS_ATTR_NAME);
					
				});
			});
			
			
			
		});
	};
	return {init:init};
})();