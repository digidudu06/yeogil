var airport = airport || {};
airport = (()=>{
		let _, js, css, img, compojs, hoteljs;
		let ext= x =>{
			airport.$.ext(x);
		};
		let init = ()=>{
			_ = $.ctx();
			js = $.js();
			css = $.css();
			img = $.img();
			compojs = js+'/comp/compo.js';
			hoteljs = js+'/reservation/hotel.js';
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView =()=>{
			default_view();
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
			$('.ej_css').remove();
			$('.cj_css').remove();
			$('.jw_css').remove();
			let sw_css = 
//항공
			  '<meta charset="utf-8">'
			  +'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
			  +'<meta name="viewport" content="width=device-width, initial-scale=1">'
			  +'<link href="https://fonts.googleapis.com/css?family=PT+Sans:400" rel="stylesheet">'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/bootstrap.min.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/style.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/arstyle.css" />'
//어스토리
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/web/default_ko.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/web/gnb.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/component/default.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/component/reset.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/web/main.css" />'
			  +'<link class="sw_css" rel="stylesheet" href="'+css+'/web/date_picker.css" /> ';
			$(sw_css).appendTo('head');
		};
		let default_view=()=>{
			$.getScript(compojs, ()=>{
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
						alert('클릭 로그아웃!');
						logout();
					});
				}
				$('#common_area').css("background-image", "url('"+_+"/resources/img/background.jpg')");
				$(compo.reservation()).appendTo('#common_area');
				$('<button id="hbtn_01" class="btn btn-danger">호텔</button>').prependTo('#apbtn_01');
				$('<button id="abtn_01" class="btn btn-danger">항공</button>').prependTo('#apbtn_01');
				$('#start_01').text("출발지");
				$('#dest_01').text("도착지");
				$('#start_02').text("가는날");
				$('#dest_02').text("오는날");
				$('#adults_01').text("성인");
				$('#children_01').text("영/유아");
				$('#rank_01').text("좌석등급");
				$('#areser_01').text("예약 및 결제하기");
				
				$('#abtn_01').click(()=>{
					setContentView();
				});
				$('#hbtn_01').click(()=>{
					$.getScript(hoteljs, ()=>{
					hotel.init();
					});
				});
				 
				
				$('#asmbtn_01').text("항공권검색").click(function(e){
					 e.preventDefault();
					 let data = {arrivalDate:$('#sinput_03').val(),
								departDateR:$('#sinput_04').val()};//map자체
						if(data.arrivalDate===""&&data.departDateR===""){
							alert("모든 항목을 기입해주세요!");
						}else{
					 let page ='1';
					 $.getJSON($.ctx()+'/airlist/'+ page, d=>{
						 $(compo.wells()).appendTo('#common_area');
						 $.each(d.al,(i,j)=>{
							 $('<div><img src="'+j.airImg+'" width="30" height="30" alt=""></img>'+j.airportName+j.departureTime+'->'+j.arrivalTime+j.departAirport+'->'+j.arrivalAirport+j.departDate+'->'+j.arrivalDate+'</div>').appendTo('#pnbd_01');
						 });
						 $.each(d.ar,(i,j)=>{
							 $('<div><img src="'+j.airImgR+'" width="20" height="20" alt=""></img>'+j.airportNameR+j.departureTimeR+'->'+j.arrivalTimeR+j.departAirportR+'->'+j.arrivalAirportR+j.departDateR+'->'+j.arrivalDateR+j.priceR+'<button id="apbtn_0'+i+++'" type="button" class="btn btn-danger" style="width:10; hight:10;">결제</button></div>').appendTo('#pnbd_02');
							 /*$('#apbtn_01').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
								  e.preventDefault();
						            $('#myModal').attr('style','display: block; z-index:99999;');
						            $('.modal-dialog').attr('style','top:200px;')
						            $('.modal-content').attr('style','margin:auto;');
						            $('#modal_01').text("항공권 구매 완료");
						            $('#modal_02').text("결제가 완료 되었습니다");
							});*/
						 });
						 $('#apbtn_00').click(function(){
								IMP.init('imp68242076');
								IMP.request_pay({
							    pg : 'inicis', // version 1.1.0부터 지원.
							    pay_method : 'card',
							    merchant_uid : 'merchant_' + new Date().getTime(),
							    name : '주문명:결제테스트',
							    amount : 14000,
							    buyer_email : 'iamport@siot.do',
							    buyer_name : '구매자이름',
							    buyer_tel : '010-1234-5678',
							    buyer_addr : '서울특별시 강남구 삼성동',
							    buyer_postcode : '123-456',
							    m_redirect_url : 'http://localhost:8080/web/reser/popup'
							}, function(rsp) {
							    if ( rsp.success ) {
							        var msg = '결제가 완료되었습니다.';
							        msg += '고유ID : ' + rsp.imp_uid;
							        msg += '상점 거래ID : ' + rsp.merchant_uid;
							        msg += '결제 금액 : ' + rsp.paid_amount;
							        msg += '카드 승인번호 : ' + rsp.apply_num;
							    } else {
							        var msg = '결제에 실패하였습니다.';
							        msg += '에러내용 : ' + rsp.error_msg;
							    }
							    alert(msg);
							});
							}); 
					 });
					} 
//================================================================================================================항공크롤링 시작						
/*let data = {
		departDate:$('#sinput_03').val(),
		arrivalDate:$('#sinput_04').val()};
if(data.departDate===""&&data.arrivalDate===""){
	alert("모든 항목을 기입해주세요!");
}else{
	$.ajax({
		url: _+'/crawling/avation',
		type:'post',
		data:JSON.stringify(data),
		dataType:'json',
		contentType:'application/json',
		success: d =>{
			alert("크롤링 중입니다");
			$(compo.wells()).appendTo('#common_area');
			$.each(d.allist,(i,j)=>{
				
				if(i<3){
					$('<h4><img src="'+j.airImg+' width="20" height="20" alt=""></img>'+j.airportName+' '+j.departureTime+' '+j.arrivalTime+' '+j.departAirport+' '+j.arrivalAirport+' '+j.departDate+' '+j.arrivalDate+' '+j.price+'</h4><p><p><p>')
					.appendTo('#pnbd_01');
				}
			});
			
			$.each(d.arlist,(i,j)=>{
				if(i<3){
					$('<h4> <img src="'+j.airImgR+' width="20" height="20" alt=""></img>'+j.airportNameR+' '+j.departureTimeR+' '+j.arrivalTimeR+' '+j.departAirportR+' '+j.arrivalAirportR+' '+j.departDateR+' '+j.arrivalDateR+' '+j.priceR+' '+'<button id="pp_02" type="button" class="btn btn-primary">결제하기</button></h4>')
					.appendTo('#pnbd_02');
				}
			});
			
			$('#apbtn_01').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
				  e.preventDefault();
		            $('#myModal').attr('style','display: block; z-index:99999;');
		            $('.modal-dialog').attr('style','top:200px;')
		            $('.modal-content').attr('style','margin:auto;');
		            $('#modal_01').text("항공권 구매 완료");
		            $('#modal_02').text("결제가 완료 되었습니다");
			});
		},
		error:e=>{
			alert('실패하였습니다.');
		}
	});
}*/
				});
//================================================================================================================항공크롤링 끝
			}
		);
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
							sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
							$.ajax({
								url:_+'/login',
								type: 'POST',
								data: JSON.stringify(res, authObj),
								dataType:'json',
								contentType : "application/json; charset=UTF-8",
								success:function(res){
									alert('성공');
									location.assign(_+"/reser");
									sessionStorage.setItem('nickname', res.nickname);
	                                sessionStorage.setItem('thumbnailImg', res.thumbnailImg);
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
			location.assign(_);
		};
		
		return {init:init,ext:ext};
})();
airport.$= {
		ext: (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				airport.init();
			})
		}
};
