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
			
			
			$.getScript(compojs, ()=>{
				$('#common_area').empty();
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
				
				$('#asmbtn_01').text("항공권검색").click(()=>{
					let arr = {departAirport:$('#sinput_01').val(),
							arrivalAirport:$('#sinput_02').val(),
							departDate:$('#sinput_03').val(),
							arrivalDate:$('#sinput_04').val()};
					if(arr.departAirport===""&&arr.arrivalAirport===""&&arr.departDate===""&&arr.arrivalDate===""){
						alert("입력을 똑바로 해주세요 ^^");
					}else{
						$.ajax({
							url: _+'/clink/airline',
							type:'POST',
							data:JSON.stringify(arr),
							dataType:'json',
							contentType:'application/json',
							success:d=>{
								if(d.s === "s"){
									alert("성공");
								}
							},
							error:e=>{
								alert('실패하였습니다.');
							}
						});
					}
				
				});
/*					$('#airpay_01').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
						  e.preventDefault();
				            $('#myModal').attr('style','display: block; z-index:99999;');
				            $('.modal-dialog').attr('style','top:200px;')
				            $('.modal-content').attr('style','margin:auto;');
				            $('#modal_01').text("항공권 구매 완료");
				            $('#modal_02').text("결제가 완료 되었습니다");
					});//모달 끝
				 });//항공권검색 눌렀을때
		});//getScript끝 
			let img = ()=>{
		        return [{name : "img1",url : "http://image.edaily.co.kr/images/Photo/files/NP/S/2016/06/PS16060300126.jpg"},
		                {name : "img2",url : "https://t1.daumcdn.net/cfile/tistory/220ACD49543246531D"},
		                {name : "img3",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"},
		                {name : "img4",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"},
		                {name : "img5",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"},
		                {name : "img6",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"},
		                {name : "img7",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"},
		                {name : "img8",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"}];
		        };//img반복끝*/
			}); 
		};//setContentView끝
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