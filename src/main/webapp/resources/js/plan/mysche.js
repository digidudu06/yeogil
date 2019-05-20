"use strict";
var mysche = mysche || {};
mysche = (()=>{
	let _,js,compojs,img, title;
	
	let init= x=>{
		_ = $.ctx();
		js = $.js();
		img = $.img();
		compojs = js+'/comp/compo.js';
		title = x;
		onCreate(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		mainnav();

		$.getScript(compojs,()=>{
			$('#common_area').empty();
			
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
			
			$(compo.mysche()).appendTo('#common_area');
			$('#mysche_nav').css("padding-bottom","30px");
			$('<a>'+title+'</a>').appendTo('#mysche_nav');
			$('#my_cover').empty();
			$('#my_cover').attr('style','background:url("https://img.earthtory.com/img/city_default/301/10024.jpg")');
			
			let id = sessionStorage.getItem('memberId');
			if(sessionStorage.getItem('thumbnailImg')==='default_img'){
				$('.puser_img').attr("src",img+"/common/default_img.png");
			}else{
				$('.puser_img').attr("src",sessionStorage.getItem('thumbnailImg'));
			}
			$('.puser_name').text(sessionStorage.getItem('nickname'));
			$('.plan_theme').remove();
			
			$('.plan_title').empty();
			$('.plan_title').text(title);
			
			let data = {"id":id, "title":title};
			memOneSchedule(data);
			/*hotelSchedule();*/
			
			$(compo.footer()).appendTo('#wrapper');
		});
	};
	let memOneSchedule=(data)=>{
		$.getJSON(_+'/memOneSchedule/' + data.id +'/'+ data.title, d=>{
			$('.white').remove();
			$('.gray').remove();
			$.each(d.list, (i,j)=>{
				$('	<tr id="sch'+i+'" class="white">'
					+'		<td id="sche_date">'
					+'			<div class="scht_date">'+j.startDate+'</div>'
					+'			<div class="scht_day"> Day'+(i+1)+'</div>'
					+'		</td>'
					+'		<td>'
					+'			<div class="scht_city" style="padding-left: 0px; text-align: center;">'+j.countryName+'</div>'			
					+'		</td>'
					+'		<td>'
					+'			<div class="scht_city" style="padding-left: 0px; text-align: center;">'+j.city+'</div>'		
					+'		</td>'
					+'		<td id="'+j.startDate+'" class="scht_vtop"></td>'
					+'		<td></td>'
					+'	</tr>').appendTo('tbody');
				$.each(d.attr, (a,b)=>{
					if($('#sch'+i).children().eq(3).attr('id')===b.START_DATE){
						$('<div class="scht_spotname">'+b.ATTR_NAME+'</div>')
							.appendTo('#'+$('#sch'+i).children().eq(3).attr('id'));
					}
				});
			});
			$('#edit_detail_plan').click(function(){
				$('#header').remove();
				 $.ajax({
                     url:_+'/deleteSchedule',
                     type: 'POST',
                     data: JSON.stringify(data),
                     dataType:'json',
                     contentType : "application/json; charset=UTF-8",
                     success(d){
                    	 alert("성공"+d);
                    	 mypage.init();
                     },
                     error(d){
                    	 alert("실패"+d);
                     }
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
		});
	};
	return {init:init};
})();