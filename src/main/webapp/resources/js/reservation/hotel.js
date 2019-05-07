var hotel = hotel || {};
hotel =(()=>{
		let _, js, css, img, compojs;
		
		let init=()=>{
			_ = $.ctx();
			js = $.js();
			css = $.css();
			img = $.img();
			compojs = js+'/comp/compo.js';
			onCreate();
		};
		let onCreate=()=>{
			setContentView();
		};
		let setContentView=()=>{
			$('.ej_css').remove();
			$('.cj_css').remove();
			$('.jw_css').remove();
			let sw_css = 
				  '<meta charset="utf-8">'
				  +'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
				  +'<meta name="viewport" content="width=device-width, initial-scale=1">'
				  +'<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/hbootstrap.min.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/hstyle.css" />'
	//어스토리	
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/web/default_ko.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/common/web/gnb.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/component/default.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/component/reset.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/web/main.css" />'
				  +'<link class="sw_css" rel="stylesheet" href="'+css+'/web/date_picker.css" /> ';
				$(sw_css).appendTo('head');
				
				$.getScript(compojs, ()=>{
					$('#common_area').empty();
					$('#common_area').css("background-image", "url('"+_+"/resources/img/hbackground.jpg')");
					$(compo.hreservation()).appendTo('#common_area');
					$('#hdes_01').text("여행지");
					$('#hchc_01').text("체크인");
					$('#hchc_02').text("체크아웃");
					$('#hroom_01').text("룸");
					$('#hadul_01').text("성인");
					$('#hchil_01').text("유/아동");
					$('#hcheck_01').text("검색");
					$('#htext_01').text("원하는 호텔을 예약하세요");
					$('#htext_02').text("여길가자와 함께 전 세계 모든 호텔들을 둘러보세요");
					$('<button id="hml_01" class="btn btn-primary">호텔</button>').prependTo('#hmbtn_01');
					$('<button id="hml_02" class="btn btn-primary">항공</button>').prependTo('#hmbtn_01');
					$('#hml_02').click(()=>{
						airport.init();
					});
					$('#hml_01').click(()=>{
						setContentView();
					});
					$('#hcheck_01').click(function(e){
						 e.preventDefault();
						let data = {arrivalDate:$('#h_date_01').val(),
								departDateR:$('#h_date_02').val()};
						if(data.arrivalDate===""&&data.departDateR===""){
							alert("모든 항목을 기입해주세요!");
						}else{
							$.ajax({
								url: _+'/crawling/hvation',
								type:'post',
								data:JSON.stringify(data),
								dataType:'json',
								contentType:'application/json',
								success: d =>{
									alert("성공");
									$(compo.hresult()).appendTo('#common_area');
									$.each(d.htlist,(i,j)=>{
										if(i<6){
											$('<div class="intro_box" style="height:320px"><img src="'+j.imgUrl
													+'" width="348" height="170" alt=""></img>'
													+'<div class="intro_title">'+j.hotelName+'</div>'
													
													+'<div class="intro_desc">'+j.hotelAddr+'</div>'
													+'<div class="btn-area">'
													+'<div class="btn-wrap position-relative">'
													+'<button id="hotel_p01" type="button" class="btn btn-primary" onclick="finishPaxInfo();">예약 및 결제진행</button><p>'+j.notice+'<p>'+j.price+'<p>'+j.roomType+''
													+'</div>'
													+'</div>'
													
													+'<div class="clear"></div>').attr('name',j.imgname).appendTo('.intro_list')
													let that = $(this).attr('name');
										}
							                     	$('#hotel_p01').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
														  e.preventDefault();
												            $('#myModal').attr('style','display: block; z-index:99999;');
												            $('.modal-dialog').attr('style','top:200px;')
												            $('.modal-content').attr('style','margin:auto;');
												            $('#modal_01').text("호텔예약 완료");
												            $('#modal_02').text("결제가 완료 되었습니다");
													});
							                     
									 });
								},//success끝
								error:e=>{
									alert("에러");
								}
							});//ajax끝
						
						}//else끝
					});
					/*let img = ()=>{
				        return [{name : "img1",url : "https://t-ec.bstatic.com/xdata/images/hotel/square600/71924697.webp?k=b996e4b63616d2606d1eb2989c8f4da9ea9b915f7fcc85a05aab750f5f53dc85&o="},
				                {name : "img2",url : "https://t-ec.bstatic.com/xdata/images/hotel/square600/138494607.webp?k=55f2f4d4aa5bd8f1fd307d6278eaa78798e133676b1ff56bac1980f3229667ab&o="},
				                {name : "img3",url : "https://t-ec.bstatic.com/xdata/images/hotel/square600/69674078.webp?k=4d359c9066ea39394701564b1501a19e5f62b75783d25e681ffbd55f1a1e3644&o="},
				                {name : "img4",url : "https://t-ec.bstatic.com/xdata/images/hotel/square600/19056004.webp?k=67e9ffdf8091c3d61f3e2fa26ad7d4396993277d70f80493922551205a54f520&o="},
				                {name : "img5",url : "https://s-ec.bstatic.com/xdata/images/hotel/square600/33463694.webp?k=a66a6a5e1e192209b322c506a142988bffe09c0ef142f01bce366af8e0421c9f&o="},
				                {name : "img6",url : "https://s-ec.bstatic.com/xdata/images/hotel/square600/177523156.webp?k=c8b6cb853e37799669a0718488192078a12ef7812655eb2fd4ad4efc40bc05ef&o="}];
				        };*/
				});
		};
		/*let hotel_payment=()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$('#hotel_clean').empty();
				$(compo.airport_payment_top()).appendTo('#hotel_clean');
				$(compo.airport_payment_mid()).appendTo('#hotel_clean');
			});
		};*/
		return {init:init};
})();