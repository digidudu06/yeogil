"use strict";
var city = city || {}
city = (()=>{
	let _,js,css,compojs;
	
	let init = ()=>{
		_ = $.ctx();
        js = $.js();
        css = $.css();
        compojs = js+"/comp/compo.js";
	};
	let onCreate = (x)=>{
		init();
		setContentView(x);
	};
	let setContentView = (c)=>{
		$.getScript(compojs,()=>{
			$('#common_area').empty();
			$(compo.common_menu()).appendTo('#common_area');
			$('<a id="tour_btn" class="nav_btn cursor">여행지</a> > <b4>'+c.x+'</b4>').appendTo('.area_nav');
			//$('.area_nav').text(c.x);
			$('<b>'+c.x+'</b><span>'+c.y+'</span>').appendTo('.area_title');
			country_detail(c);
			$.each(common_navi(),(i,j)=>{
				$('<a>'+j.text+'</a>')
				.appendTo('.common_menu')
				.addClass('cursor')
				.attr('name',j.name)
				.click(function(){
					let that = $(this).attr('name');
					switch(that){
					case 'home':
						$('.country_detail').remove();
						$('.spot_list').remove();
						setContentView(c);
						break;
					case 'main_city':
						$('.country_detail').remove();
						$('.city_detail').remove();
						$('.spot_list').remove();
						let arr = {x:c.y,y:1}
						tourist_main_city(arr);
						break;
					case 'tourist_city':
						$('.country_detail').remove();
						$('.city_detail').remove();
						$('.spot_list').remove();
						let ar = {x:c.y,y:1}
						attraction_list(ar);
						break;
					case 'restaurant':
						alert('관광지와 같은 기능입니다.');
						break;
					case 'shopping':
						alert('관광지와 같은 기능입니다.');
						break;
					case 'calendar':
						location.assign($.ctx()+'/sche');
						break;
					case 'reservasion':
						location.assign($.ctx()+'/reser');
						break;
					}
				});
			});
		});
	};
	let attraction_list = (arr)=>{
		$.getScript(compojs,()=>{
			$('.country_detail').empty();
			$(compo.tourist_city()).appendTo('#common_area');
			$(compo.attraction_list()).appendTo('#common_area');
			$.getJSON(_+'/attraction/'+arr.x+'/'+arr.y,d=>{
				$('<div>총<span>'+d.pxy.rowCount+'</span>개</div>').appendTo('.list_cnt');
				$.each(d.ls,(i,j)=>{
					$('<a class="box" id="'+j.attrEname+'">'
					+'	<img src="'+j.attrImg+'" alt="" class="main_city_img">'
					+'	<div class="city_right">'
					+'		<div class="city_name">'+j.attrName+'</div>'
					+'		<div class="city_name_en">'+j.attrEname+'</div>'
					+'	</div>'
					+'	<div class="clear"></div>'
					+'</a>'
					).appendTo('.list')
					.addClass('cursor');
				 });
				let i= 0;
				for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
					if(d.pxy.pageNum){
						$('<button type="button" class="on">'+i+'</button>')
						.addClass('cursor')
						.appendTo('#paging')
						.click(function(){
							let a={x:arr.x,y:$(this).text()};
							attraction_list(a);
						});
					}else{
						$('<button type="button">'+i+'</button>')
						.addClass('cursor')
						.appendTo('#pagination')
						.click(function(){
							let a={x:arr.x,y:$(this).text()};
							attraction_list(a);
						});
					}
				}
			});
		});
	};
	let tourist_main_city = (arr)=>{
		$.getScript(compojs,()=>{
			$('.country_detail').empty();
			$(compo.tourist_main_city()).appendTo('#common_area');
			$.getJSON(_+'/city/'+arr.x+'/'+arr.y,d=>{
				$('<div>총<span>'+d.pxy.rowCount+'</span>개</div>').appendTo('.list_cnt');
				$.each(d.ls,(i,j)=>{
					$('<a class="box" id="'+j.imgName+'">'
					+'	<img src="'+j.imgUrl+'" alt="" class="main_city_img">'
					+'	<div class="city_right">'
					+'		<div class="city_name">'+j.cityName+'</div>'
					+'		<div class="city_name_en">'+j.cityEname+'</div>'
					+'		<div class="spot_names">'+j.CITY_DNAME+'</div>'
					+'	</div>'
					+'	<div class="clear"></div>'
					+'</a>'
					).appendTo('.list')
					.addClass('cursor')
					.click(function (){
							if(j.imgName === "Taipei"){
								let ar = {x:"대만",y:j.cityName}
								city_detail(ar);
							}else{
								alert('타이베이를 눌러주세요');
							}
						});
				 });
				let i= 0;
				for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
					if(d.pxy.pageNum){
						$('<button type="button" class="on">'+i+'</button>')
						.addClass('cursor')
						.appendTo('#paging')
						.click(function(){
							let a={x:arr.x,y:$(this).text()};
							tourist_main_city(a);
						});
					}else{
						$('<button type="button">'+i+'</button>')
						.addClass('cursor')
						.appendTo('#pagination')
						.click(function(){
							let a={x:arr.x,y:$(this).text()};
							tourist_main_city(a);
						});
					}
				}
			});
		});
	};
	let common_navi = ()=>{
	return [
		{name :"home",text :"홈"},
		{name :"main_city",text :"주요도시"},
		{name :"tourist_city",text :"관광명소"},
		{name :"restaurant",text :"음식점"},
		{name :"shopping",text :"쇼핑"},
		{name :"calendar",text :"여행일정"},
		{name :"reservasion",text :"호텔 항공"}
		];
	};
	let country_detail = (x)=>{
		$.getScript(compojs,()=>{
			$(compo.country_detail()).appendTo('#common_area');
			$('#tour_btn').click(function(){
				location.assign($.ctx()+'/tour');
			});
			$('.country_title').text(x.x);
			$.getJSON(_+"/crawling/country",d=>{
				$('.country_flag').attr("src",d.c);
				$('.country_desc').text(d.t);
				$('.info_more').attr("href",d.u);
				$('.exchange_box input[data-no=1]').val(d.e.tai);
				$('.exchange_box input[data-no=2]').val(d.e.kor);
				$(function(){
					$('.exchange_box input[data-no=1]').on('keyup',function(){
						let exchange = ($('.exchange_box input[data-no=1]').val() * d.e.kor);
						$('.exchange_box input[data-no=2]').val(exchange.toFixed(2));
					});
				});
				$(function(){
					$('.exchange_box input[data-no=2]').on('keyup',function(){
						let e = (1/d.e.kor).toFixed(3);
						let exchange = ($('.exchange_box input[data-no=2]').val() * e);
						$('.exchange_box input[data-no=1]').val(exchange);
					});
				});
				$('.country_desc').dotdotdot({
				      ellipsis: '...',//말줄임 뭘로 할지
				      watch : false, //윈도우 창에따라서 업데이트 할건지, 윈도우가 리사이즈될 때 업데이트할 건지
				      wrap : 'letter',//word(단어단위), letter(글 단위), children(자식단위) 자르기
				      height  : 100,
				      tolerance : 20 //글이 넘치면 얼만큼 height 늘릴건지
				  });
				
				$('<a></a>').appendTo('.country_info');
			});
			
			$('<img></img>')
			.attr("src","http://www.iwt.or.kr/wp/wp-content/uploads/2017/11/%EB%8C%80%EB%A7%8C-%EC%A7%80%EB%8F%84-.jpg")
			.attr("width","628")
			.attr("height","369")
			.appendTo('.img_box');
			
			$('<div class="area_bg line white country_detail">'
					+'<div class="wrap">'
						+'<div class="area_title_center">인기도시</div>'
						+'<div class="city_list"></div>'
						+'<div class="clear"></div>'
					+'</div>'
				+'</div>').appendTo('#common_area');
			
			let img = ()=>{
		        return [{name : "가오슝",detail : "가오슝원경관,삼봉궁,보얼예술특구",url : _+"/resources/img/component/taiwan02.jpg"},
		                {name : "타이베이",detail : "타이베이 기차역 북문",url : _+"/resources/img/component/taiwan03.jpg"},
		                {name : "화롄",detail : "바다",url : _+"/resources/img/component/taiwan04.jpg"}];
		        
		        };
			
			$.each(img(),(i,j)=>{
				$('<a class="city_box">'
						+'<div class="city_title">'+j.name+'</div>'
						+'<div class="city_desc">'+j.detail+'</div>'
						+'<img class="city_img" src="'+j.url+'" width="346" height="240"></img>'
						+'</a>')
						.addClass('cursor')
						.appendTo('.city_list')
						.click(function (){
							if(j.name === "타이베이"){
								let arr = {x:x.x,y:j.name}
								city_detail(arr);
							}else{
								alert('타이베이를 눌러주세요');
							}
						});;
			 });
			$('<div class="cjtooltip"><span class="rtooltiptext">타이베이를 눌러주세요</span></a>').appendTo('.area_title_center');
		});
	};
	let city_detail = (c)=>{
		$.getScript(compojs,()=>{
			$('.country_detail').remove();
			$(compo.city_detail()).insertAfter('.silver');
			$('.area_nav').next().html('<b>타이베이</b>');
			$('.area_nav').empty();
			$('<a id="tour_btn" class="nav_btn cursor">여행지</a> > <b4>'+c.x+'</b4> > <b4>'+c.y+'</b4>').appendTo('.area_nav');
			$('#tour_btn').click(function(){
				location.assign($.ctx()+'/tour');
			});
			
			$('<img alt=""></img>')
			.attr("src",_+"/resources/img/component/taipai.jpg")
			.attr("width","624")
			.attr("height","369")
			.appendTo('.img_box');
		});
		$.getJSON(_+'/crawling/weather',d=>{
			
			$('<img></img>')
			.attr("src",d.nowimg)
			.attr("width","80")
			.attr("height","90")
			.appendTo('.temp_left');
			
			$('.exchange_box input[data-no=1]').val(d.e.tai);
			$('.exchange_box input[data-no=2]').val(d.e.kor);
			$(function(){
				$('.exchange_box input[data-no=1]').on('keyup',function(){
					let exchange = ($('.exchange_box input[data-no=1]').val() * d.e.kor);
					$('.exchange_box input[data-no=2]').val(exchange.toFixed(2));
				});
			});
			$(function(){
				$('.exchange_box input[data-no=2]').on('keyup',function(){
					let e = (1/d.e.kor).toFixed(3);
					let exchange = ($('.exchange_box input[data-no=2]').val() * e);
					$('.exchange_box input[data-no=1]').val(exchange);
				});
			});
			$('<span>현지 날씨</span></br></br></br>'
					+'<h2 style="font-size: 30px">'+d.el+'°</h2>').appendTo('.temp_title');
			$.each(d.wlist,(i,j)=>{
				if(i<4){
					$(' <div class="item1">'+j.day+'</br>'
							+'<img src="'+j.imgUrl+'"> </br>'
							+'<div class="w-temp_value">'
							+'<span class="w-temp_max">'+j.htem+'°  '+j.ltem+'°</span>'
							+'</div></div>').appendTo('.w-grid-container');
				}
			});
		});
		$('<div class="area_bg line white city_detail">'
			+'<div class="wrap">'
			+'<div class="area_title_center">타이베이 여행지</div>'
			+'<div class="city_list"></div>'
			+'<div class="clear"></div>'
			+'</div>').appendTo('#common_area');
		
		$.getJSON(_+'/attraction/some/'+c.y,d=>{
			$.each(d.img,(i,j)=>{
				$('<a class="city_box">'
						+'<div class="city_title">'+j.attrName+'</div>'
						+'<img class="city_img" src="'+j.attrImg+'" width="346" height="240"></img>'
						+'</a>')
						.css({'font-size':'30px'})
						.appendTo('.city_list');
			 });
		});
	};
	let topten = ()=>{
		$(compo.city_topten()).insertAfter('.city_detail');
	};
	return {onCreate : onCreate}
})();