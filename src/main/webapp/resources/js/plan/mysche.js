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
		$.getScript(compojs,()=>{
			$('#common_area').empty();
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
		});
	};
	let memOneSchedule=(data)=>{
		$.getJSON(_+'/memOneSchedule/' + data.id +'/'+ data.title, d=>{
			$('.white').remove();
			$('.gray').remove();
			$.each(d.list, (i,j)=>{
				$('	<tr id="sch'+i+'" class="white">'
					+'		<td id="sche_date">'
					+'			<div class="scht_date">'+j.START_DATE+'</div>'
					+'			<div class="scht_day"> Day'+(i+1)+'</div>'
					+'		</td>'
					+'		<td>'
					+'			<div class="scht_city" style="padding-left: 0px; text-align: center;">'+j.COUNTRY_NAME+'</div>'			
					+'		</td>'
					+'		<td>'
					+'			<div class="scht_city" style="padding-left: 0px; text-align: center;">'+j.CITY_NAME+'</div>'		
					+'		</td>'
					+'		<td id="'+j.START_DATE+'" class="scht_vtop"></td>'
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
	return {init:init};
})();