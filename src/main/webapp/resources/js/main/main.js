"use strict";
var main = main ||{};
main = (()=>{
	let _, js, css, img, compojs, tourjs, planjs, airportjs, utiljs;
	
	let init = ()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		compojs = js+"/comp/compo.js";
		tourjs = js+"/tour/tour.js";
		planjs = js+"/plan/plan.js";
		airportjs = js+"/reservation/airport.js";
		utiljs = js+"/main/util.js";
		onCreate();
	};
	
	let onCreate = ()=>{
		setContentView();
	};
	
	let setContentView = ()=>{
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
		$.getScript(compojs,()=>{
			$(compo.main_contents()).appendTo('#common_area');
			$('.main_top').attr('style', 'background:url('+img+'/main/key_bg_3.jpg) no-repeat;background-size:cover;');
//*************로그인						
			
			$('#custom-login-btn').click(function loginWithKakao() {
				login();
		    });
			$('.search_area').empty();
//==========================================START
//**************크롤링
			$.getJSON(_+'/crawling/topCtry',d=>{
                $('#top_city_list').empty();
                $.each(d.ls, (i,j)=>{
                    $('<a href="#" class="top_city w2">'
                            +'<div class="top_city_title">'+j.imgName+'</div>'
                            +'<img src="'+j.imgUrl+'" alt="">'
                            +'</a>').appendTo('#top_city_list');
                });
            });
		});
	};
	let login = ()=>{
		Kakao.init('0b0fec75e07cb3ea427be11fe3287c3b');
		Kakao.Auth.login({
	    	  success: function(authObj) {
	              Kakao.API.request({
	                    url: '/v1/user/me',
	                    success: function(res) {
	                          alert(JSON.stringify(res)); //<---- kakao.api.request 에서 불러온 결과값 json형태로 출력
	                          alert(JSON.stringify(authObj)); //<----Kakao.Auth.createLoginButton에서 불러온 결과값 json형태로 출력
	                          console.log(res.id);//<---- 콘솔 로그에 id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
	                          console.log(res.kaccount_email);//<---- 콘솔 로그에 email 정보 출력 (어딨는지 알겠죠?)
	                          console.log(res.properties['nickname']);//<---- 콘솔 로그에 닉네임 출력(properties에 있는 nickname 접근
	                      // res.properties.nickname으로도 접근 가능 )
	                          console.log(authObj.access_token);//<---- 콘솔 로그에 토큰값 출력
	                          Kakao.Auth.setAccessToken(authObj.access_token, true);
	                          $.ajax({
	                              url:_+'/login',
	                              type: 'POST',
	                              data: JSON.stringify(res, authObj),
	                              dataType:'json',
	                              contentType : "application/json; charset=UTF-8",
	                              success:function(res){
	                                  alert('성공');
	                                 
	                              },
	                              error:function(err){
	                            	  login();
	                              }
	                          });
	                        }
	                      })
	         },
	         fail: function(err) {
	           alert(JSON.stringify(err));
	         }
	       });
		
	};
	let logout=()=>{
        sessionStorage.removeItem('session');
         location.assign($.ctx());
    };
	return {init:init, login:login, logout:logout}

	
})();
