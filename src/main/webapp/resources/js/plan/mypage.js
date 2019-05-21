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
		mainnav();
		$.getScript(compojs,()=>{
			$('#common_area').empty();
			
			
			$(compo.mypage_sche()).appendTo('#common_area');
			$('#my_top_menu').empty();
			$('#ejcreat_sche').click(()=>{
				location.assign($.ctx()+'/sche');
			});
			
			if(sessionStorage.getItem('thumbnailImg')==='default_img'){
				$('.my_img').attr("src",img+"/common/default_img.png");
			}else{
				$('.my_img').attr("src",sessionStorage.getItem('thumbnailImg'));
			}
			$('.my_name').text(sessionStorage.getItem('nickname'));
			$('.pn_list_user').text(sessionStorage.getItem('nickname'));
			
			memAllSche();
			
		});
	};
	let memAllSche =()=>{
		let id = sessionStorage.getItem('memberId');
		$.getJSON(_+'/memAllSchedules/'+id,d=>{
			$('.plan_inner').empty();
			$.each(d.list, (i,j)=>{
				$('<a href="#" class="box" target="_self">'
						+'	<div class="btn_del" onclick="del_plan(283932)">'
						+'	</div>'
						+'	<div class="plan_hidden_btn">상세일정 보기</div>'
						+'	<div class="plan_bg">'
						+'		<div class="plan_bg_inner">'
						+'			<span>나라</span>'
						+'			<span style="margin-left:10px;color:#b4b4b4;">'+j.COUNTRY_NAME+'</span>'
						+'			<br>'+j.PLAN_TITLE
						+'		</div>'
						+'	</div>'
						+'	<div class="plan_img_box">'
						+'		<img src="'+j.IMG_URL+'" alt="" class="plan_img">'
						+'	</div>'
						+'	<div class="plan_bg_inner2">'
						+'		<span></span>'
						+'		<div class="fr pn_list_copy_icon">0</div>'
						+'		<div class="fr pn_list_view_icon">12</div>'
						+'		<div class="fr pn_list_spot_icon"></div>'
						+'		<div class="clear"></div>'
						+'		<div class="pn_list_city"></div>'
						+'		<div class="clear"></div>'
						+'		<div class="pn_list_user">'+j.NICKNAME+'</div>'
						+'	</div>'
						+'</a>').appendTo('.plan_inner')
						.click(function(){
							$('#header').remove();
							mysche.init(j.PLAN_TITLE);
						});
			});
		});
	};
	let mainnav=()=>{

		$.getScript(compojs,()=>{
			$('<div id="header"><div class="wrap">'
					+'<h1 id="home" class="logo fl" style="margin-top: 0px; margin-bottom: 0px; font-size: 0px;">'
					+'<img src="/web/resources/img/common/logo1.png" style="width: 150px;">'
					+'</h1>'
					+'<ul class="gnb fl">'
						+'<a class="fl"><li id="tour">여행지</li></a>'
						+'<a class="fl"><li id="plan">일정만들기</li></a>'
						+'<a class="fl"><li id="reservation">항공·호텔</li></a>'
						+'<a class="fl"><li id="admin">관리자</li></a></ul>'
					+'<div class="fr gnb_box" style="padding-top: 10px;">'
						+'<a id="custom-login-btn" href="javascript:loginWithKakao()">'
							+'<img src="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_login_btn_small.png" style="width: 100px;">'
				+'</a></div><div class="clear"></div></div></div>').prependTo('#wrapper');
			
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
			
			$('#admin').click(function(){
				location.assign($.ctx()+'/admin');
			});
			
			if(sessionStorage.getItem('session') === null){
				$('#custom-login-btn').click(function loginWithKakao() {
					login();
				});
			}else{
				$('.gnb_box').empty();
				$(compo.logon()).appendTo('.gnb_box');
				$('<img src="'+img+'/common/logon_img.png" style="width: 30px;">').prependTo('.dropdown-toggle ');
				$('#logout_btn').click(()=>{
					logout();
				});
			}
		});
	};
	let logout=()=>{
		sessionStorage.removeItem('session');
		sessionStorage.removeItem('memberId');
		sessionStorage.removeItem('nickname');
		sessionStorage.removeItem('thumbnailImg');
		location.assign($.ctx());
	};
	return {init:init, memAllSche:memAllSche,logout:logout};
})();