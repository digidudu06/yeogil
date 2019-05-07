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
					$('#hcheck_01').click(()=>{
						$(compo.hresult()).appendTo('#common_area');			
						$.each(img(),(i,j)=>{
				             $('<div class="intro_box" style="height:320px"><img src="'+j.url
				                     +'" width="348" height="170" alt=""></img>'
				                     +'<div class="intro_title">호텔이름</div>'
				                     
				                     +'<div class="intro_desc">호텔 간단한 설명</div>'
				                     +'<div class="btn-area">'
				                     +'<div class="btn-wrap position-relative">'
				                     +'<button type="button" class="btn btn-primary" onclick="finishPaxInfo();">예약 및 결제진행</button>'
				                     +'</div>'
				                     +'</div>'

				                     +'<div class="clear"></div>').attr('name',j.name).appendTo('.intro_list').click(function(){
				                     	let that = $(this).attr('name');
				                     	alert("결제창이동");
				                     });
						 });
					});
					
					 
					
					
					let img = ()=>{
				        return [{name : "img1",url : "http://image.edaily.co.kr/images/Photo/files/NP/S/2016/06/PS16060300126.jpg"},
				                {name : "img2",url : "https://t1.daumcdn.net/cfile/tistory/220ACD49543246531D"},
				                {name : "img3",url : "https://travelblog.expedia.co.kr/wp-content/uploads/2017/01/113.jpg"}];
				        
				        };
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