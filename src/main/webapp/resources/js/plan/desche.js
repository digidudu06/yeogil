"use strict";
var desche = desche||{};
desche =(()=>{
	let _, js, css, compojs, img, mainjs;
	let init=()=>{
		_ = $.ctx();
		js = $.js();
		css = $.css();
		img = $.img();
		compojs = js+'/comp/compo.js';
		mainjs = js+'/main/main.js';
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$('#jw_css').remove();
		$('<link id="jw_css" rel="stylesheet" href="'+css+'/component/workspace.css"/>').appendTo('head');
		$('<link id="jw_css" rel="stylesheet" href="'+css+'/mypage/plan/tipsy.css" />').appendTo('head');
		$('<link id="jw_css" rel="stylesheet" href="'+css+'/component/de_sche.css" />').appendTo('head');
		$.getScript(compojs,()=>{
			$('#common_area').empty();
			$(compo.de_sche()).appendTo('#common_area');
			$('#home').attr({src:img+"/common/logo1.png",style:"width:150px;"});
			$(compo.de_sche_cont()).appendTo('#common_area');
			$(compo.de_sche_cont2()).appendTo('#common_area');
			desp();
		});
		
		
	};
	
	let desp=()=>{
		$(document).mouseup(function (e)
				{
				    var container = $(".et_slide");
				    var _parent_sel_box = $(e.target).attr('id');

				    if (!container.is(e.target) // if the target of the click isn't the container...
				        && container.has(e.target).length === 0 && _parent_sel_box != 'map_tag_select_box' && _parent_sel_box != 'hotel_rank_filter' && _parent_sel_box != 'hotel_type_filter') // ... nor a descendant of the container
				    {
				        container.slideUp(300);
				    
				    $('.et_slide_parent').removeClass('on');
				    $('.et_slide_parent').attr('data-is_open','0');


				    }
				});    

				var pn_srl = 285659;
				//var pn_srl = 49057;


				var pub_ci_lat;
				var pub_ci_lng;

				var clip_view_on = $('#clip_view_btn').attr('data');
				var ht_arr = [];
				var ht_dt_arr = [];
				var st_arr = [];
				var st_arr_n = [];
				var filter_arr = [];
				var type_arr =[];
				var ci_srl ='';
				var map='';
				var ci_ss_id ='';
				var entity_id = '';
				var wayp = '';
				var mapDivID = 'map';
				var flight_path;
				var transportp = '';
				var transport_path = [];
				var first_load = 0;
				var air_detail;

				var day_week_en = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				var day_week_ko = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
				var day_week_ja = ['日','月','火','水','木','金','土'];

				var line = [];
				var markers = [];
				markers['only_clip_0'] = [];
				markers['only_clip_1'] = [];

				var infoBubble;


				    var currency_code = '￦';


				var directionsService = new google.maps.DirectionsService();
				var directionsDisplay = new google.maps.DirectionsRenderer();

				get_total_budget();
				get_distinct_budget_currency();

				var _link = '/ko/mypage/et_1904170447370651793001555487257?type=plan_sub&gdb_srl='+pn_srl;
				$('#plan_preview_link').attr('href',_link);


				$('#map_tag_select_box').click(function(){
				  _is_this_on = $(this).attr('data-is_open');
				  if(_is_this_on  == '0'){
				      $(this).attr('data-is_open','1');
				      $('#map_tag_select_sub_box').slideDown(300);
				  }else{
				      $(this).attr('data-is_open','0');
				      $('#map_tag_select_sub_box').slideUp(100);
				  }
				});

				$('#opti_start_point').click(function(){
				  _is_this_on = $(this).attr('data-is_open');
				      _e_point = $('#opti_end_id').val();
				      $('#opti_start_point_box .item').show();
				      $('#opti_start_point_box .item[data="'+_e_point+'"]').hide();
				  if(_is_this_on  == '0'){
				      $(this).attr('data-is_open','1');
				      $('#opti_start_point_box').slideDown(300);
				  }else{
				      $(this).attr('data-is_open','0');
				      $('#opti_start_point_box').slideUp(100);
				  }
				});

				$('#opti_end_point').click(function(){
				  _is_this_on = $(this).attr('data-is_open');
				      _s_point = $('#opti_start_id').val();
				      $('#opti_end_point_box .item').show();
				      $('#opti_end_point_box .item[data="'+_s_point+'"]').hide();
				  if(_is_this_on  == '0'){
				      $(this).attr('data-is_open','1');
				      $('#opti_end_point_box').slideDown(300);
				  }else{
				      $(this).attr('data-is_open','0');
				      $('#opti_end_point_box').slideUp(100);
				  }
				});

				$('#opti_start_point_box').on('click','.item',function(){
				      $('#opti_start_point').attr('data-is_open','0');
				      $('#opti_start_point_box').slideUp(100);
				      $('#opti_start_point').text($(this).text());
				      $('#opti_start_id').val($(this).attr('data'));
				});

				$('#opti_end_point_box').on('click','.item',function(){
				      $('#opti_end_point').attr('data-is_open','0');
				      $('#opti_end_point_box').slideUp(100);
				      $('#opti_end_point').text($(this).text());
				      $('#opti_end_id').val($(this).attr('data'));
				});

				$('#hotel_rank_filter').click(function(){
				  _is_this_on = $(this).attr('data-is_open');
				  if(_is_this_on  == '0'){
				      $(this).attr('data-is_open','1');
				      $('#hotel_rank_filter_box').slideDown(300);
				  }else{
				      $(this).attr('data-is_open','0');
				      $('#hotel_rank_filter_box').slideUp(100);
				  }
				});


				$('#hotel_type_filter').click(function(){
				  _is_this_on = $(this).attr('data-is_open');
				  if(_is_this_on  == '0'){
				      $(this).attr('data-is_open','1');
				      $('#hotel_type_filter_box').slideDown(300);
				  }else{
				      $(this).attr('data-is_open','0');
				      $('#hotel_type_filter_box').slideUp(100);
				  }
				});


				$('#input_search').keyup(function(){
				 get_list(ci_srl);
				});

				$('#city_search_key').keyup(function(){
				 get_cities_list();
				});

				$('#city_list').on('click','.et-radio, .et-radio_txt',function(){
					setTimeout("get_list(ci_srl);",500);
					
				});



				function get_distinct_budget_currency(){
				  var data = 'pn_srl='+pn_srl;
				    $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_distinct_currency',
				        success: function(data){
								_html = '<div data="KRW">KRW</div>';
								$.each(data.response_data, function(key, val) {
									_html += '<div data="'+val.cu_cc+'">'+val.cu_cc+'</div>';
								});
								$('#budget_currency_select_list').html(_html);
				        }
				    });  
				}





				function get_tag_list(ci_srl, cat){
							  var data = 'pl_ci='+ci_srl+'&cate_srl='+cat;

							  if(cat == 1){
										 $('#map_tag_select_box').text('숙소 등급');
										 var html = '';
										 html += '<div class="item" data-check="0" data="5"><img src="/res/img/city/hotel_star_5.png"></div>';
										 html += '<div class="item" data-check="0" data="4"><img src="/res/img/city/hotel_star_4.png"></div>';
										 html += '<div class="item" data-check="0" data="3"><img src="/res/img/city/hotel_star_3.png"></div>';
										 html += '<div class="item" data-check="0" data="2"><img src="/res/img/city/hotel_star_2.png"></div>';
										 html += '<div class="item" data-check="0" data="1"><img src="/res/img/city/hotel_star_1.png"></div>';
										   $('#map_tag_select_sub_box').html(html);
							  }else{

									   $('#map_tag_select_box').text('태그 선택');
										$.ajax({  
											type:'post',
											data:data,
											cache:false,
											url:'/api/code/get_tag_group_list',
											success: function(data){

											  var html = '';
											  $.each(data.response_data, function(key, val) {
												  html += '<div class="item" data-check="0" data="'+val.tag_group+'">'+val.tag_group_nm+'</div>';
											  });
											  $('#map_tag_select_sub_box').html(html);

											}
										});  
							  }
				}


				function set_plan_day(pn_srl, cur_day, set_day){

				  var data = "pn_srl="+pn_srl+'&cur_day='+cur_day+'&set_day='+set_day;

				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
						async:false,
				        url:'/api/plan/set_plan_day',
				        success: function(data){ 

						  get_plan_day_list();
				        },complete:function(data){


							 
						},error:function(data){

				        }
				      });

				}

				function add_plan_day(is_next,next_day){
				  var data= 'pn_srl='+pn_srl;
				  $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/add_plan_day',
				        success: function(data){ 

				          $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				                    var day= $(this).attr("data");
				                    if(line[day]){
				                     line[day][0].setMap(null);
				                    }
				            });
				            line = [];
				            deleteMarkers(1);
				    if(transport_path != ''){

				      $.each(transport_path,function(key, val){
				        transport_path[key].setMap(null);
				      });
				      
				    }
				  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				          var day= $(this).attr("data");
				          if(line[day]){
				           line[day][0].setMap(null);

				          }
				  });
				  line = [];
				  if(is_next == 1){
				          plan_info_reload(is_next,next_day);
				  }else{
				          plan_info_reload();
				  }


				        },error:function(data){

				        },complete:function(){
				            
				        }
				      });
				}

				function del_plan_day(day){

				if (confirm('정말 삭제하시겠습니까?') == true){    //확인
				    var data = "pn_srl="+pn_srl+'&cur_day='+day;

				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/del_plan_day',
				        success: function(data){ 

				            deleteMarkers(1);
				    if(transport_path != ''){

				      $.each(transport_path,function(key, val){
				        transport_path[key].setMap(null);
				      });
				      
				    }
				  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				          var day= $(this).attr("data");
				          if(line[day]){
				           line[day][0].setMap(null);

				          }
				  });
				  line = [];
				           plan_info_reload();

				        },error:function(data){

				        }
				      });

				}else{   //취소
				    return;
				}  
				  

				}





				function plan_day_prev(){
				    _this_day = $('#cat_menu li.on').attr('data');
				    _prev_day = Number(_this_day)-1;
				    if($('#cat_menu li[data="'+_prev_day+'"]').length == 1){
				      $('#cat_menu li[data="'+_prev_day+'"]').click();
				    }else{
				      alert('DAY1 입니다.');
				    }
				}

				function plan_day_next(){
				  _this_day = $('#cat_menu li.on').attr('data');
				  _next_day = Number(_this_day)+1;
				  if($('#cat_menu li[data="'+_next_day+'"]').length == 1){
				          $('#cat_menu li[data="'+_next_day+'"]').click();
				  }else{
				          if (confirm('DAY'+_next_day+'를 추가하시겠습니까?') == true){    //확인
				              add_plan_day(1, _next_day)
				        }else{   //취소
				            return;
				        }
				  }
				}


				  var auto_time;

				function re_set(){
				  deleteMarkers(1);
				  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				          var day= $(this).attr("data");
				          if(line[day]){
				           line[day][0].setMap(null);
				          }
				  });
				  line = [];
				  set_day = $('#cat_menu li.on').attr('data');
				  get_plan_inspot_list(set_day);
				}

				var _this_no = '';
				var _next_no = '';
				  $(function() {
				    $( "#schedule_detail_box" ).sortable({
				      revert: false,
				      items : '.day_spot_item',
				                          start: function (e, ui) {
				                            $(ui.placeholder).css('width', 0);
				                          },
				                          change: function (e, ui) {
				                            $(ui.placeholder).css('width', 'auto');
				                          },
				      placeholder: "ui-state-highlight",
				      start:function(event, ui){
				        ui.item.find('.spot_distance_box').hide();
				        _this_no = ui.item.attr('data');
				        _next_no = Number(_this_no)+1;
				        $("#schedule_detail_box .day_spot_item[data='"+_next_no+"'] .spot_distance_box").hide();
				        ui.item.data('dragging', true);

				      },
				      stop:function(event,ui){
				        $(".spot_distance_box").show();
				        setTimeout(function(){
				            ui.item.data('dragging', false);
				        }, 1);
				        
				      },
				      update: function(event, ui){
				        var cur_order = ui.item.attr('data');
				        var set_order = Number($("#schedule_detail_box .day_spot_item").index(ui.item))+1;
				        var cur_day= ui.item.attr('data-set_day');
				        var set_day= $('#cat_menu li.on').attr('data');
				        var rel_srl = ui.item.attr('data-rel_srl');
				        var pl_type = ui.item.attr('data-pl_type');
				        var s_ci_srl = ui.item.attr('data-ci');
				        var jj = 1;
				          $('#schedule_detail_box .day_spot_item').each(function(ii, val) {
				              $(this).attr('data',jj);
				              jj++;
				          });
				        ui.item.attr('data',set_order);
				        if(pl_type == 2){

				          
				          set_plan_inspot(pn_srl, cur_day, cur_order, set_day, set_order, rel_srl, pl_type, s_ci_srl); 
				        }else{
				          set_plan_inspot(pn_srl, cur_day, cur_order, set_day, set_order, rel_srl, pl_type, s_ci_srl);
				        }
				      },
				      receive:function(event, ui){
				         _now_menu = $('#cat_menu li.on').attr('data');
				         if(_now_menu == 'clip'){
				            clearTimeout(auto_time);
				            auto_time = setTimeout(function(){
				              get_clip_list(1);
				            },500);
				         }
				      }
				    }).disableSelection();

				  });

				get_plan_member();
				$('#ws_invite_btn').tipsy({gravity: 'n'});

				  var data = "pn_srl="+pn_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_plan_info',
				        success: function(data){ 
				              
				          ci_lat = data.response_data.city_info.ci_lat;
				          ci_lng = data.response_data.city_info.ci_lng;
				          pub_ci_lat = ci_lat;
				          pub_ci_lng = ci_lng;
				          ci_srl =  data.response_data.city_info.ci_srl;
				          ci_ss_id = data.response_data.city_info.ss_city_id;


						  is_complete = data.response_data.plan_info.is_complete;

						  if(is_complete  == '1'){
							  $('#plan_complete_btn').hide();
						  }else{
							  $('#plan_complete_btn').show();
						  }
				          
						  $('#date_pick_btn .start_date').text(data.response_data.plan_info.start_day);
				          $('#cat_menu').attr('data',ci_srl);
				          $('#plan_title').html(data.response_data.plan_info.pn_title);
				          $('#city_list .list_title span').html(data.response_data.city_info.ci_name);



				          var plan_url = data.response_data.plan_info.plan_url;
				          $('#plan_title').attr('data-url',plan_url);
				          var tour_day = data.response_data.plan_info.tour_day;
				          var _start_day = data.response_data.plan_info.start_day.split('-');

				          $('#cat_menu').attr('data-year',_start_day[0]);
				           _start_day = new Date(_start_day[0], _start_day[1], _start_day[2]);


				          var _s_date = _start_day.getDate();

				          var s_month = _start_day.getMonth();
				          var s_date = _start_day.getDate();

				          var temp_num = Number(tour_day) - 1;
				          _start_day.setDate(_s_date + temp_num);
				          var e_month = _start_day.getMonth();
				          var e_date = _start_day.getDate();
						  if(s_month == 0){
						  	  s_month = 12;
				  		  }else if(s_month > 0 && s_month < 10){
							   s_month =  '0' + s_month;
						  }

						  if(e_month == 0){
							  e_month = 12;
				  		  }else if(e_month > 0 && e_month < 10){
							   e_month =  '0' + e_month;
						  }

				          $('#schedule_list_title .schedule_day_title').html('일정 '+s_month+'.'+s_date+'~'+e_month+'.'+e_date+' ('+tour_day+'일)');
						  $('#pn_title_box li .full_date_info').html(s_month+'.'+s_date+'~'+e_month+'.'+e_date);
				          OnLoad(ci_lat, ci_lng, ci_srl);




				                

				        }
				      });





				function plan_info_reload(is_next,next_day){
					get_plan_member();
				    var data = "pn_srl="+pn_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_plan_info',
				        success: function(data){ 

				                  deleteMarkers(1);
				                  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				                                    var day= $(this).attr("data");
				                                    if(line[day]){
				                                     line[day][0].setMap(null);
				                                    }
				                  });
				                  line = [];
				          var plan_url = data.response_data.plan_info.plan_url;
				          $('#plan_title').attr('data-url',plan_url);
				          $('#plan_title').html(data.response_data.plan_info.pn_title);
				          var tour_day = data.response_data.plan_info.tour_day;
				          var _start_day = new Date(data.response_data.plan_info.start_day);
				          var _p_start_day = data.response_data.plan_info.start_day.split('-');
				          $('#schedule_list_title').attr('data-year',_p_start_day[0]);
				          var _s_date = _start_day.getDate();
				          var s_month = _start_day.getMonth()+1;
				          var s_date = _start_day.getDate();

				          var temp_num = Number(tour_day) - 1;
				          _start_day.setDate(_s_date + temp_num);
				          var e_month = _start_day.getMonth()+1;
				          var e_date = _start_day.getDate();

						  if(s_month > 0 && s_month < 10){
							  s_month = '0'+s_month;
						  }

						  if(e_month > 0 && e_month < 10){
							  e_month = '0'+e_month;
						  }

				          $('#schedule_list_title .schedule_day_title').html('일정 '+s_month+'.'+s_date+'~'+e_month+'.'+e_date+' ('+tour_day+'일)');
						  $('#pn_title_box li .full_date_info').html(s_month+'.'+s_date+'~'+e_month+'.'+e_date);
				          if(is_next == 1){
				            get_plan_day_list(is_next,next_day);
				          }else{
				            get_plan_day_list();
				          }
				          
				          
				        }
				      });
				}


				get_plan_day_list('1','1');


				$('#plan_title').on('click','span',function(){
				  et_modal('460px','596px','1','0','/ko/modal/edit_plan?pn_srl='+pn_srl,'2','1');
				});




				$('#schedule_detail_box, .list_box').on('click','.spot_distance_box',function(){
				  return false;
				});

				$('#schedule_detail_box').on('click','.btn_del',function(){
				  cur_day = $(this).parent().parent().attr('data-set_day');
				  cur_order = $(this).parent().parent().attr('data');

				  del_plan_inspot(cur_day, cur_order);
				 _now_menu = $('#cat_menu li.on').attr('data');
				 if(_now_menu == 'clip'){
				    clearTimeout(auto_time);
				    auto_time = setTimeout(function(){
				      get_clip_list(1);
				    },500);
				 }
				  
				  return false;
				});



				$('#select_detail_view_spot').on('click','#detail_spot_to_inspot',function(){
					_rel_srl = $(this).attr('data-rel_srl');
					_pl_type = $(this).attr('data-pl_type');
					_ci_srl = $(this).attr('data-ci');
					_set_order = $('#schedule_detail_box .day_spot_item:last').attr('data');
					if(_set_order > 0){
						_set_order = Number(_set_order)+1;
					}else{
						_set_order = 1;
					}
					_set_day = $('#cat_menu li.on').attr('data');
					_cur_order = '0';
					_cur_day = '0';



					set_plan_inspot(pn_srl, _cur_day, _cur_order, _set_day, _set_order, _rel_srl, _pl_type, _ci_srl);		
				});







				$('#schedule_detail_box, .list_box').on('click','.day_spot_item',function(e){
				  


				    if($(e.target).parent().is('.btn_del')){
						 e.stopPropagation();
						_rel_srl = $(this).attr('data-rel_srl');
						_pl_type = $(this).attr('data-pl_type');
						_ci_srl = $(this).attr('data-ci');

						if(_pl_type == '0'){
						  spot_clip_api(_rel_srl);
						  deleteMarkers(0);
						  get_clip_list();
						  
						}else if(_pl_type == '1'){
						  user_spot_clip(_rel_srl);
						  deleteMarkers(0);
						  get_clip_list();

						}else if(_pl_type == '2'){
						  hotel_clip(_rel_srl);
						  deleteMarkers(0);
						  get_clip_list();
								
						}else if(_pl_type == '3'){
						  flight_clip(_rel_srl);
						  deleteMarkers(0);
						  get_clip_list();      

						}else if(_pl_type == '4'){
							del_transport(_rel_srl)
						}      
						 return;
				    }





				  if($(e.target).parent().is('.spot_to_inspot')){
						 e.stopPropagation();
					_rel_srl = $(this).attr('data-rel_srl');
					_pl_type = $(this).attr('data-pl_type');
					_ci_srl = $(this).attr('data-ci');
					_set_order = $('#schedule_detail_box .day_spot_item:last').attr('data');
					if(_set_order > 0){
						_set_order = Number(_set_order)+1;
					}else{
						_set_order = 1;
					}
					_set_day = $('#cat_menu li.on').attr('data');
					_cur_order = '0';
					_cur_day = '0';




					set_plan_inspot(pn_srl, _cur_day, _cur_order, _set_day, _set_order, _rel_srl, _pl_type, _ci_srl);
					return;
				  }


				    if($(e.target).parent().is('.item_copy_plan')){

						 e.stopPropagation();
						 _rel_srl = $(this).attr('data-rel_srl');
						 _ci_srl = $(this).attr('data-ci');
						 _pl_type = $(this).attr('data-pl_type');
						 et_modal('590px','400px','1','0','/ko/modal/add_plan_inspot?ci_srl='+_ci_srl+'&pl_srl='+_rel_srl+'&pn_srl='+pn_srl+'&pl_type='+_pl_type,'2','1');
						 return;
					}

				  if($(this).data('dragging')) return;
				  pl_srl = $(this).attr('data-rel_srl');
				  pl_cat = $(this).attr('data-pl_cat');
				  pl_type = $(this).attr('data-pl_type');
				  no = $(this).attr('data-no');
				  _set_order =$(this).attr('data');
				  _set_day = $(this).attr('data-set_day');
				  
				  parent_box_id = $(this).parent().attr('id');
				  if(parent_box_id == 'schedule_detail_box'){
				    only_clip = 1;
				  }else{
				    only_clip = 0;
				  }
				  clip_yn = 'n';

				  detail_view_spot(pl_srl,pl_cat,no,only_clip,clip_yn,pl_type,_set_day,_set_order,pl_type);
				    if($(e.target).parent().is('.item_set_plan')){

					}
				});

				  $('#schedule_detail_box, .list_box').on('mouseover','.day_spot_item',function(){
				    $(this).find('.item_ctrl_box').show();
				    _now_menu = $(this).parent().attr('id');
				    var no = $(this).attr('data-no');
				    var pl_cat = $(this).attr('data-pl_cat');

				    if(_now_menu == 'schedule_detail_box'){
				        var _this_only_clip = 1;
				    }else{
				        var _this_only_clip = 0;
				    }
				        markers['only_clip_'+_this_only_clip][no].setZIndex(99999999999999);
				        markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/ic_current.png');  
				        
				        if(pl_cat == '800' || pl_cat == '901' || pl_cat == '902' || pl_cat == '903'){
				          _arv_no = Number(no)+1;
				          markers['only_clip_'+_this_only_clip][_arv_no].setZIndex(99999999999999);
				          markers['only_clip_'+_this_only_clip][_arv_no].setIcon('/res/map/marker/ic_current.png');  
				        }
						if(pl_cat == '100'){
								markers['only_clip_'+_this_only_clip][no].set("labelClass", "s_label");
						}
				  });

				  $('#schedule_detail_box, .list_box').on('mouseout','.day_spot_item',function(){
				    $(this).find('.item_ctrl_box').hide();

				    _now_menu = $(this).parent().attr('id');
				     var _order = $(this).attr('data');
				     var pl_srl = $(this).attr('data-rel_srl');
				     var now_pl_srl = $('#select_detail_view_spot').attr('data');

				    if(_now_menu == 'schedule_detail_box'){
				        var _this_only_clip = 1;
				    }else{
				        var _this_only_clip = 0;
				    }     
				     
				         if(pl_srl != now_pl_srl){
				              var no = $(this).attr('data-no');
				              var pl_cat = $(this).attr('data-pl_cat');
				              var is_clip_yn = markers['only_clip_'+_this_only_clip][no].clip_yn;

				              markers['only_clip_'+_this_only_clip][no].setZIndex(99999999999999);
				              if(is_clip_yn == 'y'){
				                    markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/'+pl_cat+'_'+_order+'.png');  
				              }else{
				                    markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/n'+pl_cat+'_'+_order+'.png');  
				              }
				              if(pl_cat == '800' || pl_cat == '901' || pl_cat == '902' || pl_cat == '903'){
				                _arv_no = Number(no)+1;
				                markers['only_clip_'+_this_only_clip][_arv_no].setIcon('/res/map/marker/'+pl_cat+'_'+_order+'.png');  
				              }
							  if(pl_cat == '100'){
								markers['only_clip_'+_this_only_clip][no].set("labelClass", "labels");
						 	 }
				          }
				    
				  });    

				function marker_to_inspot(_rel_srl, _ci_srl, _pl_type){


					_set_order = $('#schedule_detail_box .day_spot_item:last').attr('data');
					if(_set_order > 0){
						_set_order = Number(_set_order)+1;
					}else{
						_set_order = 1;
					}
					_set_day = $('#cat_menu li.on').attr('data');
					_cur_order = '0';
					_cur_day = '0';



					set_plan_inspot(pn_srl, _cur_day, _cur_order, _set_day, _set_order, _rel_srl, _pl_type, _ci_srl);
				}



				function set_plan_inspot(pn_srl, cur_day, cur_order, set_day, set_order, rel_srl, pl_type, s_ci_srl){

					if(s_ci_srl == null){
					  s_ci_srl = ci_srl;
					}

				  if(cur_day > 0){
				    var data = "pn_srl="+pn_srl+"&cur_day="+cur_day+"&cur_order="+cur_order+"&set_day="+set_day+"&set_order="+set_order+"&ci_srl="+s_ci_srl;
				  }else{
				    var data = "pn_srl="+pn_srl+"&rel_srl="+rel_srl+"&pl_type="+pl_type+"&set_day="+set_day+"&set_order="+set_order+"&ci_srl="+s_ci_srl;
				  }

				  
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/set_plan_inspot',
				        success: function(data){ 



				        },complete:function(data){
				          re_set();
				        },error:function(data){
							console.log(data);
						}
				      });
				}
				function get_cities_list(){

						var _now_ci_srl = $('#city_list').attr('data');
						var _now_search_key = $('#city_search_key').val();
						var _now_ci_name = $('#city_list .list_title span').text();
						var _pre_ci_srl = $('#city_list .city_items').attr('data');


									if(_now_ci_srl != _pre_ci_srl){
										 $('#city_list .city_items').html('');
										 $('#city_list .city_items').show();
										 $('#city_list .city_search').hide();

										 $.ajax({
											  type: "POST",
											  url: "/api/plan/get_city_in_plan",
											  data: {"pn_srl": pn_srl},
											  success: function(data) {

												  var html_code = '';
												  $.each(data.response_data,function(key, val){
													  html_code += '<div class="city_item" data="'+val.ci_srl+'" data-ci_name="'+val.ci_name+'" data-lat="'+val.ci_lat+'" data-lng="'+val.ci_lng+'" data-ss_id="'+val.ss_city_id+'"><div class="fl ci_img"><img src="'+val.ci_image+'"></div><div class="fl">'+val.ci_name+',&nbsp;<span>'+val.cu_name+'</span></div><div class="clear"></div></div><div class="clear"></div>';
												  });
												  if(html_code != ''){
													  html_code += '<div style="width:100%;height:25px;border-bottom:solid 1px #cacaca;"></div>';
												  }

													  $.ajax({
													  type: "POST",
													  url: "/api/city/get_city_list_map",
													  data: {"ci_srl": _now_ci_srl, "search_value":_now_search_key},
													  success: function(data) {

														   if(data.response_data){
															html_code += '<div class="city_item_title">'+_now_ci_name+' 인근 도시</div>';
															 $.each(data.response_data,function(key, val){
															  if(_now_ci_srl == val.ci_srl){

															  }else{
																html_code += '<div class="city_item" data="'+val.ci_srl+'" data-ci_name="'+val.ci_name+'" data-lat="'+val.ci_lat+'" data-lng="'+val.ci_lng+'" data-ss_id="'+val.ss_city_id+'"><div class="fl ci_img"><img src="'+val.ci_image+'"></div><div class="fl">'+val.ci_name+',&nbsp;<span>'+val.cu_name+'</span></div><div class="clear"></div></div><div class="clear"></div>';
															  }
															 });
															 $('#city_list .city_items').html(html_code);
															 $('#city_list .city_items').attr('data', _now_ci_srl);
															}
													  }
													 });  
												   
											  },error:function(data){

											  }
										 });
									}else{
										if(_now_search_key != ''){
											 $('#city_list .city_search').html('');
											 $('#city_list .city_items').hide();
											 $('#city_list .city_search').show();

														  $.ajax({
														  type: "POST",
														  url: "/api/city/get_city_list_map",
														  data: {"ci_srl": _now_ci_srl, "search_value":_now_search_key},
														  success: function(data) {


															html_code = '';
															 $.each(data.response_data,function(key, val){
															  if(_now_ci_srl == val.ci_srl){

															  }else{
																html_code += '<div class="city_item" data="'+val.ci_srl+'" data-ci_name="'+val.ci_name+'" data-lat="'+val.ci_lat+'" data-lng="'+val.ci_lng+'" data-ss_id="'+val.ss_city_id+'"><div class="fl ci_img"><img src="'+val.ci_image+'"></div><div class="fl">'+val.ci_name+',&nbsp;<span>'+val.cu_name+'</span></div><div class="clear"></div></div><div class="clear"></div>';
															  }
															 });
															 $('#city_list .city_search').html(html_code);
															 $('#city_list .city_items').attr('data', _now_ci_srl);
														  }
														 });  

										}else{
												 $('#city_list .city_items').show();
												 $('#city_list .city_search').hide();
										}
									}
						

				}

				function my_spot_inspot(){
					_this_day = $('#cat_menu li.on').attr('data');
					et_modal('550px','600px','1','0','/ko/modal/add_spot_search_db?pn_srl='+pn_srl+'&set_day='+_this_day,'2','1');
				}

				function my_transportation_inspot(){
					_this_day = $('#cat_menu li.on').attr('data');
				    et_modal('550px','443px','1','0','/ko/modal/add_transport?pn_srl='+pn_srl+'&set_day='+_this_day,'2','1');
				}


				function edit_transportation(tp_srl){
				    et_modal('550px','443px','1','0','/ko/modal/edit_transport?tp_srl='+tp_srl,'2','1');
				}


				function get_clip_city_list(){
				      var _now_ci_srl = $('#clip_list').attr('data');
				      $.ajax({
				      type: "POST",
				      url: "/api/clip/get_clip_city_list",
				      data: {"member_srl": "1376703"},
				      success: function(data) {

				        if(data.response_data.length >0){
				          var html_code = '';
				           $.each(data.response_data,function(key, val){
				                if(val.ci_srl != '1'){
				                    if(_now_ci_srl == val.ci_srl){
				                      html_code += '<div class="clipboard_item on" data="'+val.ci_srl+'" data-ci_name="'+val.ci_name+'"><div class="fl ci_img"><img src="'+val.ci_img+'"></div><div class="fl">'+val.ci_name+' <span>('+val.cnt+')</span></div><div class="clear"></div></div><div class="clear"></div>';
				                    }else{
				                      html_code += '<div class="clipboard_item" data="'+val.ci_srl+'" data-ci_name="'+val.ci_name+'"><div class="fl ci_img"><img src="'+val.ci_img+'"></div><div class="fl">'+val.ci_name+' <span>('+val.cnt+')</span></div><div class="clear"></div></div><div class="clear"></div>';
				                    }
				                }
				               });
				               $('#clip_list .clipboard_change_box').html(html_code);
				        }else{
				               $('#clip_list .clipboard_change_box').html('');
				               _no_result_html = '<div id="no_result_box" style="display: block;"><img src="/res/img/common/no_result_icon.png"><div class="no_result_text">결과가 없습니다.</div></div>';
				               $('#clip_list .clipboard_change_box').html(_no_result_html);
				        }
				      }
				     });
				}

				$('#city_list').on('click','.city_item',function(){
				  _this_ci_srl = $(this).attr('data');
				  _this_ci_name = $(this).attr('data-ci_name');
				  _this_lat = $(this).attr('data-lat');
				  _this_lng = $(this).attr('data-lng');
				  _this_ss_id = $(this).attr('data-ss_id');
				  $('#city_search_key').val('');

				  pub_ci_lat = _this_lat;
				  pub_ci_lng = _this_lng;



				      _this_cat = $('#city_list .list_cat_item.on').attr('data');
				      get_tag_list(_this_ci_srl, _this_cat);
				  $('#city_list .city_item').removeClass('on');
				  $(this).addClass('on');
				  $('#city_list').attr('data',_this_ci_srl);
				  $('#city_list .list_title .list_title_option_menu').attr('data-is_open','off');
				  $('#city_list .list_box_overlay').hide();
				  $('#city_list .list_title .list_title_option_menu').text('도시 변경');
				  $('#city_list .list_title .list_title_option_menu').removeClass('open');
				   
				  if(map.getZoom() < 10){
				    smoothZoom(map, 10, map.getZoom(), true);
				  }else{
				    smoothZoom(map, 10, map.getZoom(), false);
				  }

				  $('#city_list .list_title span').text(_this_ci_name);
				  $('#city_list .city_change_box').slideUp();
				  deleteMarkers(0);
				var latLng = new google.maps.LatLng(_this_lat, _this_lng);
				    map.setCenter(latLng);  
				  get_list(_this_ci_srl);
				});

				$('#city_list').on('click','.list_title_option_menu',function(){
				  var _this_is_open = $(this).attr('data-is_open');
				  if(_this_is_open == 'off'){
				    $(this).attr('data-is_open','on');
				    $(this).addClass('open');
				    $('#city_list .city_change_box').slideDown();
				    $('#city_list .list_box_overlay').show();
				    $(this).text('닫기');
					get_cities_list();
				  }else{
				    $(this).attr('data-is_open','off');
				    $(this).removeClass('open');
				    $('#city_list .list_box_overlay').hide();
				    $('#city_list .city_change_box').slideUp();
				    $(this).text('도시 변경');
				  }
				});






				function get_total_budget(){

					_currency = 'KRW';
				      var data='currency='+_currency+'&pn_srl='+pn_srl;

				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_total_budget',
				        success: function(data){ 

							_html = _currency+' '+number_format(Math.round(data.response_result.total_amount));
							$('#plan_total_budget').html(_html);
						}
					  });
				}



				function get_clip_list(is_no_center){
				      var load_ci = $('#clip_list').attr('data');
				      if(load_ci == '0'){
				        load_ci = ci_srl;
				        $('#clip_list').attr('data', ci_srl);
				      }
				      var data='ci_srl='+load_ci+'&pn_srl='+pn_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/clip/get_clip_list',
				        success: function(data){ 

				          var html = '';
				          var j = 0;
				          if(is_no_center != '1'){
				          $('#clip_list .list_box').html('');
				              _this_lat =data.response_data.city_info.ci_lat;
				              _this_lng =data.response_data.city_info.ci_lng;
				              var latLng = new google.maps.LatLng(_this_lat, _this_lng);
				              map.setCenter(latLng); 
				          }

				          $.each(data.response_data.clip_info,function(key, val){
				            html += get_plan_list_html(val.pl_type, val, j, 1);
				             if(val.pl_type != '3'){
				                create_marker(val.lat,val.lng,val.name,val.pl_sub_category,val.img,val.pl_srl,j,val.pl_tags,'y',val.pl_rate,0,0,val.pl_clip_cnt,0,0,val.pl_type,val.ci_srl);
				                j++;
				             }
				          });

				          $('#clip_list .list_box').html(html);
				        },complete:function(){
				  
				        }
				      });  
				}




				function get_plan_day_list(is_next,next_day){

				  var data = "pn_srl="+pn_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_plan_day_list',
				        success: function(data){ 


				          var html = '';
						  if(is_next != 1){
							  var html_2 = '<li id="show_all_day" data="show_all_day" class="on">전체 일정 보기</li>';
						  }else{
							  var html_2 = '<li id="show_all_day" data="show_all_day">전체 일정 보기</li>';
						  }
						  var html_3 = '';

				          $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				                var day= $(this).attr("data");
				                if(line[day]){
				                 line[day][0].setMap(null);

				                }
				        });
				          line = [];

				          $.each(data.response_data,function(key, val){

							if(val.first_city_geo != ''){
								_first_city_info = val.first_city_geo.split(',');
								_first_city_srl = _first_city_info[0];
								_first_city_lat = _first_city_info[1];
								_first_city_lng = _first_city_info[2];
							}else{
								_first_city_srl = '';
								_first_city_lat = '';
								_first_city_lng = '';
							}
							if(key == 0 && is_next == 1){
								html_2 += '<li data="'+val.set_day+'" data-date="'+val.date+'" data-day_week="'+val.day_week+'" data-f_ci="'+_first_city_srl+'" data-f_lat="'+_first_city_lat+'" data-f_lng="'+_first_city_lng+'" class="on" title="'+val.city_names+'"><div class="fl cat_date_left_box">	<div class="cat_left_day">DAY'+val.set_day+'</div><div class="cat_left_date">'+val.date+'</div></div>';
								html_2 += '<div class="fl cat_date_right_box"><div class="cat_right_weekday">'+day_week_ko[val.day_week]+'</div><div class="cat_right_city">'+cutStr(val.city_names,10)+'</div></div><div class="clear"></div></li>';

							}else{
								html_2 += '<li data="'+val.set_day+'" data-date="'+val.date+'" data-day_week="'+val.day_week+'" data-f_ci="'+_first_city_srl+'" data-f_lat="'+_first_city_lat+'" data-f_lng="'+_first_city_lng+'" title="'+val.city_names+'"><div class="fl cat_date_left_box">	<div class="cat_left_day">DAY'+val.set_day+'</div><div class="cat_left_date">'+val.date+'</div></div>';
								html_2 += '<div class="fl cat_date_right_box"><div class="cat_right_weekday">'+day_week_ko[val.day_week]+'</div><div class="cat_right_city">'+cutStr(val.city_names,10)+'</div></div><div class="clear"></div></li>';
							}
							

							html_3 += '<li data="'+val.set_day+'" data-date="'+val.date+'" data-day_week="'+val.day_week+'">';
							html_3 += '<div class="cat_edit_move fl"></div>';
							html_3 += '<div class="fl cat_date_left_box"><div class="cat_left_day">DAY'+val.set_day+'</div><div class="cat_left_date">'+val.date+'</div></div>';
							html_3 += '<div class="fl cat_date_right_box"><div class="cat_right_weekday">'+day_week_ko[val.day_week]+'</div><div class="cat_right_city">'+val.city_names+'</div></div>';
							html_3 += '<div class="fr cat_edit_del" onclick="del_plan_day('+val.set_day+')"></div>';
							html_3 += '<div class="clear"></div></li>';

				            if(key == 0){
				                 $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				                        var day= $(this).attr("data");
				                        if(line[day]){
				                         line[day][0].setMap(null);
				                        }
				                });
				                 line = [];
				            }
					
				            if(is_next != 1){

				              get_plan_inspot_list(val.set_day, 1);
				            }
				          });


						  $('#cat_menu').html(html_2);
						  $('#cat_menu_edit_box').html(html_3);	  
				        },complete:function(){
							  size_reload();
							  $('#cat_menu li').tipsy({gravity: 'w'});
				              if(is_next == 1){
				                $('#cat_menu li[data="'+next_day+'"]').click();
				              }
				        }
				      });
				}




				function get_plan_list_html(pl_type, pl_data, no, is_cliplist, prv_data){
				  var html = '';
				  
				  if(is_cliplist == 1){
				    include_pn_day_html = '<div class="sub inspot_day_info_box" style="color:#1a7ad9">'+cutStr(pl_data.include_pn_day,19)+'</div>';
				  }else{
				    include_pn_day_html = '<div class="sub inspot_day_info_box" style="color:#1a7ad9"></div>';
				  }

				  if(!pl_data.set_order){
				  _this_set_order = 0;
				  _this_sub_cat = pl_data.pl_sub_category;
				  _this_ci_srl = pl_data.ci_srl;
				  }else{
				    _this_set_order = pl_data.set_order;    
				    _this_sub_cat = pl_data.sub_category;
				    _this_ci_srl = pl_data.ci_srl;
				  }

				  if(!pl_data.set_day){
				  _this_set_day = 0;
				  }else{
				    _this_set_day = pl_data.set_day;    
				  }  


				      if(pl_type=='0'){
				        //스팟



							if(pl_data.img && pl_data.img != 'none'){
								var _pl_img = pl_data.img;
							}else{
								if(pl_data.sub_category == 301){
									var _pl_img = '/res/img/common/no_img/sight.png';
								}else if(pl_data.sub_category == 302){
									var _pl_img = '/res/img/common/no_img/les.png';
								}else if(pl_data.sub_category == 303){
									var _pl_img = '/res/img/common/no_img/night.png';
								}else if(pl_data.sub_category == 200){
									var _pl_img = '/res/img/common/no_img/food.png';
								}else if(pl_data.sub_category == 400){
									var _pl_img = '/res/img/common/no_img/shopping.png';
								}
							}
				        is_flight = pl_data.ss_codes;

				        html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+pl_data.rel_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="'+_this_sub_cat+'" data-latlng="'+pl_data.lat+','+pl_data.lng+'" data-ci="'+_this_ci_srl+'"><div class="item_ctrl_box"><div class="fl item_copy_plan" title="장소복사"><img src="/res/img/workspace/new/item_more_icon_a.png"></div><div class="fl item_set_plan" title="메모&예산"><img src="/res/img/workspace/new/item_set_icon_a.png"></div><div class="fl btn_del" title="삭제"><img src="/res/img/workspace/new/item_del_icon_a.png"></div><div class="clear"></div></div>';

				      if(_this_set_order > 1 && pl_data.distance > 99999999999999999999){
				          html += '<div class="spot_distance_box" onclick="flight_search(\''+prv_data.ci_srl+'\',\''+pl_data.ci_srl+'\')">'+pl_data.distance+'Km 항공검색 <img src="/res/img/workspace/schedule_flight_icon.png" class="air_search_icon"></div>';
				        }else{
				          if(_this_set_order > 1){
								  if(prv_data.pl_type == '4'){
											prev_lat = prv_data.arv_lat;
											prev_lng = prv_data.arv_lng;
											prev_name = prv_data.arv_nm;
										}else{
											prev_lat = prv_data.lat;
											prev_lng = prv_data.lng;
											prev_name = prv_data.name;
								  }
				                  html += '<div class="spot_distance_box" onclick="et_modal(\'620px\',\'700px\',\'1\',\'0\',\'/ko/modal/directions?from_latlng='+prev_lat+','+prev_lng+'&from_name='+prev_name+'&to_latlng='+pl_data.lat+','+pl_data.lng+'&to_name='+pl_data.name+'\',\'2\',\'1\')">'+pl_data.distance+'Km 추천경로</div>';
				          }
				        }


				        html += '<div class="img_box fl">';
				        if(_this_set_order > 0){
				          html += '<div class="spot_order_box">'+_this_set_order+'</div>';
				        }

				        html += '<img src="'+_pl_img+'"><div style="position:absolute;top:35px;left:40px;width:22px;height:20px;">';
				        if(pl_data.memo == ''){
				          html += '<img src="/res/img/workspace/list_memo_btn_off.png" class="memo_indi" style="width:22px;height:20px;">';
				        }else{
				          html += '<img src="/res/img/workspace/list_memo_btn_on.png" class="memo_indi" style="width:22px;height:20px;">';
				        }

				        html += '</div></div>';
				        html += '<div class="fl info_box"><div class="title">'+pl_data.name+'</div><div class="sub">'+pl_data.pl_tags+'</div>'+include_pn_day_html+'</div><div class="clear"></div></div>';
				      }else if(pl_type=='1'){
				        //유저스팟

				        html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+pl_data.rel_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="'+_this_sub_cat+'" data-latlng="'+pl_data.lat+','+pl_data.lng+'" data-ci="'+_this_ci_srl+'"><div class="item_ctrl_box"><div class="fl item_copy_plan" title="장소복사"><img src="/res/img/workspace/new/item_more_icon_a.png"></div><div class="fl item_set_plan" title="메모&예산"><img src="/res/img/workspace/new/item_set_icon_a.png"></div><div class="fl btn_del" title="삭제"><img src="/res/img/workspace/new/item_del_icon_a.png"></div><div class="clear"></div></div>';
				        
				      if(_this_set_order > 1 && pl_data.distance > 99999999999999999999){
				          html += '<div class="spot_distance_box" onclick="flight_search(\''+prv_data.ci_srl+'\',\''+pl_data.ci_srl+'\')">'+pl_data.distance+'Km 항공검색 <img src="/res/img/workspace/schedule_flight_icon.png" class="air_search_icon"></div>';
				        }else{
				          if(_this_set_order > 1){
								  if(prv_data.pl_type == '4'){
											prev_lat = prv_data.arv_lat;
											prev_lng = prv_data.arv_lng;
											prev_name = prv_data.arv_nm;
										}else{
											prev_lat = prv_data.lat;
											prev_lng = prv_data.lng;
											prev_name = prv_data.name;
								  }
				                  html += '<div class="spot_distance_box" onclick="et_modal(\'620px\',\'700px\',\'1\',\'0\',\'/ko/modal/directions?from_latlng='+prev_lat+','+prev_lng+'&from_name='+prev_name+'&to_latlng='+pl_data.lat+','+pl_data.lng+'&to_name='+pl_data.name+'\',\'2\',\'1\')">'+pl_data.distance+'Km 추천경로</div>';
				          }
				        }
				        html += '<div class="img_box fl">';
				        if(_this_set_order > 0){
				          html += '<div class="spot_order_box">'+_this_set_order+'</div>';
				        }

				        html += '<img src="'+pl_data.img+'"><div style="position:absolute;top:35px;left:40px;width:22px;height:20px;">';
				        if(pl_data.memo == ''){
				          html += '<img src="/res/img/workspace/list_memo_btn_off.png" class="memo_indi" style="width:22px;height:20px;">';
				        }else{
				          html += '<img src="/res/img/workspace/list_memo_btn_on.png" class="memo_indi" style="width:22px;height:20px;">';
				        }

				        html += '</div></div>';

				        html += '<div class="fl info_box"><div class="title">'+pl_data.name+'</div><div class="sub">'+pl_data.pl_tags+'</div></div><div class="clear"></div></div>';
				      }else if(pl_type=='2'){
				        //호텔


					if(pl_data.img){
						_ht_img = pl_data.img;
					}else{
						_ht_img = '/res/img/common/no_img/hotel.png';
					}

				         html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+pl_data.rel_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="'+_this_sub_cat+'" data-latlng="'+pl_data.lat+','+pl_data.lng+'" data-ci="null">';
						 html += '<div class="item_ctrl_box"><div class="fl item_copy_plan" title="장소복사"><img src="/res/img/workspace/new/item_more_icon_a.png"></div><div class="fl item_set_plan" title="메모&예산"><img src="/res/img/workspace/new/item_set_icon_a.png"></div><div class="fl btn_del" title="삭제"><img src="/res/img/workspace/new/item_del_icon_a.png"></div><div class="clear"></div></div>';
				        
				        if(_this_set_order > 1 && pl_data.distance > 99999999999999999999){
				            html += '<div class="spot_distance_box" onclick="flight_search(\''+prv_data.ci_srl+'\',\''+pl_data.ci_srl+'\')">'+pl_data.distance+'Km 항공검색 <img src="/res/img/workspace/schedule_flight_icon.png" class="air_search_icon"></div>';
				        }else{
				          if(_this_set_order > 1){
				                  html += '<div class="spot_distance_box" onclick="et_modal(\'620px\',\'700px\',\'1\',\'0\',\'/ko/modal/directions?from_latlng='+prv_data.lat+','+prv_data.lng+'&from_name='+prv_data.name+'&to_latlng='+pl_data.lat+','+pl_data.lng+'&to_name='+pl_data.name+'\',\'2\',\'1\')">'+pl_data.distance+'Km 추천경로</div>';
				          }
				        }
				        html += '<div class="img_box fl">';
				        if(_this_set_order > 0){
				          html += '<div class="spot_order_box">'+_this_set_order+'</div>';
				        }        
				        html+='<img src="'+_ht_img+'" onload="check_blankimg('+pl_data.rel_srl+',\'cimg_thum_inspot\')" class="cimg_thum_inspot" data-ht_img-srl="'+pl_data.rel_srl+'"><div style="position:absolute;top:35px;left:40px;width:22px;height:20px;">';
				        if(pl_data.memo == ''){
				          html += '<img src="/res/img/workspace/list_memo_btn_off.png" class="memo_indi" style="width:22px;height:20px;">';
				        }else{
				          html += '<img src="/res/img/workspace/list_memo_btn_on.png" class="memo_indi" style="width:22px;height:20px;">';
				        }

				        html += '</div></div>';


				        html += '<div class="fl info_box"><div class="title">'+pl_data.name+'</div><div class="sub">호텔</div></div><div class="clear"></div></div>';
				      }else if(pl_type=='3'){

				        var arv_date = '';
				        if(pl_data.in_arv_date){
				          arv_date = pl_data.in_arv_date.split(' ');
				          arv_date = arv_date[0];
				          arv_date = arv_date.replace(/\-/g,'.');
				        }else if(pl_data.arv_date){
				          arv_date = pl_data.arv_date.split(' ');
				          arv_date = arv_date[0];
				          arv_date = arv_date.replace(/\-/g,'.');
				        }
				        
				        if(pl_data.out_dptr_date){
				          dptr_date = pl_data.out_dptr_date.split(' ');
				        }else{
				          dptr_date = pl_data.dptr_date.split(' ');
				        }
				        dptr_date = dptr_date[0];
				        dptr_date = dptr_date.replace(/\-/g,'.');

				        html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+pl_data.rel_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="800" data-ci="0" data-latlng="'+pl_data.arv_lat+','+pl_data.arv_lng+'"><div class="btn_del"><img src="/res/img/mypage/common/btn_delete.png"></div>';
				        if(_this_set_order > 1){
								if(prv_data.pl_type == '4'){
									prev_lat = prv_data.arv_lat;
									prev_lng = prv_data.arv_lng;
									prev_name = prv_data.arv_nm;
								}else{
									prev_lat = prv_data.lat;
									prev_lng = prv_data.lng;
									prev_name = prv_data.name;
								}
				                html += '<div class="spot_distance_box" onclick="onclick="et_modal(\'620px\',\'700px\',\'1\',\'0\',\'/ko/modal/directions?from_latlng='+prev_lat+','+prev_lng+'&from_name='+prev_name+'&to_latlng='+pl_data.dptr_lat+','+pl_data.dptr_lng+'&to_name='+pl_data.dptr_nm+'\',\'2\',\'1\')">'+pl_data.distance+'Km 추천경로</div>';
				        }

				        html += '<div class="img_box fl">';
				        if(_this_set_order > 0){
				          html += '<div class="spot_order_box">'+_this_set_order+'</div>';
				        }   

				        html += '<img src="'+pl_data.img+'"><div style="position:absolute;top:35px;left:40px;width:22px;height:20px;">';
				        if(pl_data.memo != '' && pl_data.memo){
				          html += '<img src="/res/img/workspace/list_memo_btn_on.png" class="memo_indi" style="width:22px;height:20px;">';
				        }else{
				          html += '<img src="/res/img/workspace/list_memo_btn_off.png" class="memo_indi" style="width:22px;height:20px;">';
				        }

				        html += '</div></div>';
				        html += '<div class="fl info_box"><div class="title">'+pl_data.out_dptr_ap_cd+'→'+pl_data.out_arv_ap_cd+'</div><div class="sub">'+dptr_date+'-'+arv_date+'</div></div><div class="clear"></div></div>';
				      }else if(pl_type=='4'){
				        if(pl_data.tp_srl){
				          _tp_srl = pl_data.tp_srl;
				        }else{
				          _tp_srl = pl_data.rel_srl;
				        }

				        if(pl_data.tp_type){
				          _tp_type = pl_data.tp_type;
				        }else{
				          _tp_type = pl_data.sub_category;
				        }
				        
				        //교통수단

				        html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+_tp_srl+'" data-pl_type="4" data-no="'+no+'" data-pl_cat="'+_tp_type+'" data-ci="0" data-latlng="'+pl_data.arv_lat+','+pl_data.arv_lng+'"><div class="item_ctrl_box"><div class="fl item_copy_plan" title="장소복사"><img src="/res/img/workspace/new/item_more_icon_a.png"></div><div class="fl item_set_plan" title="메모&예산"><img src="/res/img/workspace/new/item_set_icon_a.png"></div><div class="fl btn_del" title="삭제"><img src="/res/img/workspace/new/item_del_icon_a.png"></div><div class="clear"></div></div>';

				        if(_this_set_order > 1){
								if(prv_data.pl_type == '4'){
									prev_lat = prv_data.arv_lat;
									prev_lng = prv_data.arv_lng;
									prev_name = prv_data.arv_nm;
								}else{
									prev_lat = prv_data.lat;
									prev_lng = prv_data.lng;
									prev_name = prv_data.name;
								}
				                html += '<div class="spot_distance_box" onclick="et_modal(\'620px\',\'700px\',\'1\',\'0\',\'/ko/modal/directions?from_latlng='+prev_lat+','+prev_lng+'&from_name='+prev_name+'&to_latlng='+pl_data.dptr_lat+','+pl_data.dptr_lng+'&to_name='+pl_data.dptr_nm+'\',\'2\',\'1\')">'+pl_data.distance+'Km 추천경로</div>';
				        }

				        html +='<div class="img_box fl">';
				        if(_this_set_order > 0){
				          html += '<div class="spot_order_box">'+_this_set_order+'</div>';
				        }   
				        html +='<img src="/res/img/transport_img/'+_tp_type+'.png"><div style="position:absolute;top:35px;left:40px;width:22px;height:20px;">';
				        if(pl_data.memo == '' || !pl_data.memo){
				          html += '<img src="/res/img/workspace/list_memo_btn_off.png" class="memo_indi" style="width:22px;height:20px;">';
				        }else{
				          html += '<img src="/res/img/workspace/list_memo_btn_on.png" class="memo_indi" style="width:22px;height:20px;">';
				        }

				        html += '</div></div>';
				        html += '<div class="fl info_box"><div class="title">'+pl_data.dptr_nm+'→'+pl_data.arv_nm+'</div><div class="sub">'+pl_data.dptr_date+'</div></div><div class="clear"></div></div>';
				      }else if(pl_type=='99'){
				        //익스피디아
				        html += '<div class="day_spot_item" data="'+_this_set_order+'" data-set_day="'+_this_set_day+'" data-rel_srl="'+pl_data.rel_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="'+_this_sub_cat+'"><div class="btn_del"><img src="/res/img/mypage/common/btn_delete.png"></div><div class="img_box fl"><img src="'+pl_data.img+'"></div>';
				        html += '<div class="fl info_box"><div class="title">'+pl_data.name+'</div><div class="sub">'+pl_data.pl_tags+'</div></div><div class="clear"></div></div>';
				      }
				      return html;
				}

				function get_city_list_html(pl_type, pl_data,no){
				  var html = '';
					if(pl_data.pl_name){
						var _pl_name = pl_data.pl_name;
					}else{
						var _pl_name = pl_data.pl_name_en;
					}
					if(pl_data.pl_img_url && pl_data.pl_img_url != 'none'){
						var _pl_img = pl_data.pl_img_url;
					}else{
						if(pl_data.pl_sub_category == 301){
							var _pl_img = '/res/img/common/no_img/sight.png';
						}else if(pl_data.pl_sub_category == 302){
							var _pl_img = '/res/img/common/no_img/les.png';
						}else if(pl_data.pl_sub_category == 303){
							var _pl_img = '/res/img/common/no_img/night.png';
						}else if(pl_data.pl_sub_category == 200){
							var _pl_img = '/res/img/common/no_img/food.png';
						}else if(pl_data.pl_sub_category == 400){
							var _pl_img = '/res/img/common/no_img/shopping.png';
						}
					}
				        //스팟
				        html += '<div class="day_spot_item" data="0" data-set_day="0" data-rel_srl="'+pl_data.pl_srl+'" data-pl_type="0" data-no="'+no+'" data-pl_cat="'+pl_data.pl_sub_category+'" data-ci="'+pl_data.pl_ci+'"><div class="img_box fl"><img src="'+_pl_img+'"></div>';
				        html += '<div class="fl info_box"><div class="title">'+_pl_name+'</div><div class="sub">'+pl_data.pl_tags+'</div>';
						html += '<div class="sub"><div class="tooltip_clip_cnt fl">'+commaNum(pl_data.pl_clip_cnt)+'</div>';
						if(pl_data.rate > 0){
							html += '<div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+Number(pl_data.rate*2).toFixed(1)+'</div>';
						}		
						html +='<div class="clear"></div></div>';
						html += '<div class="sub include_pn_day" style="color:#1a7ad9">'+cutStr(pl_data.include_pn_day,19)+'</div></div><div class="spot_to_inspot"><img src="/res/img/workspace/new/spot_to_inspot_a.png"></div><div class="clear"></div></div>';

				      return html;
				}

				function get_clip_list_html(pl_type, pl_data,no){
				  var html = '';
					if(pl_data.name){
						_pl_name = pl_data.name;
					}else{
						_pl_name = '';
					}
					if(pl_data.img && pl_data.img != 'none'){
						_pl_img = pl_data.img;
					}else{
						if(pl_data.pl_sub_category == 301){
							_pl_img = '/res/img/common/no_img/sight.png';
						}else if(pl_data.pl_sub_category == 302){
							_pl_img = '/res/img/common/no_img/les.png';
						}else if(pl_data.pl_sub_category == 303){
							_pl_img = '/res/img/common/no_img/night.png';
						}else if(pl_data.pl_sub_category == 200){
							_pl_img = '/res/img/common/no_img/food.png';
						}else if(pl_data.pl_sub_category == 400){
							_pl_img = '/res/img/common/no_img/shopping.png';
						}
					}
				        //스팟
				        html += '<div class="day_spot_item" data="0" data-set_day="0" data-rel_srl="'+pl_data.pl_srl+'" data-pl_type="'+pl_data.pl_type+'" data-no="'+no+'" data-pl_cat="'+pl_data.pl_sub_category+'" data-ci="'+pl_data.ci_srl+'"><div class="img_box fl"><img src="'+_pl_img+'"></div>';
				        html += '<div class="fl info_box"><div class="title">'+_pl_name+'</div><div class="sub">'+pl_data.pl_tags+'</div>';
						html += '<div class="sub"><div class="tooltip_clip_cnt fl">'+commaNum(pl_data.pl_clip_cnt)+'</div>';
						if(pl_data.pl_rate > 0){
							html += '<div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+Number(pl_data.pl_rate*2).toFixed(1)+'</div>';
						}		
						html +='<div class="clear"></div></div>';
						html += '<div class="sub include_pn_day" style="color:#1a7ad9">'+cutStr(pl_data.include_pn_day,19)+'</div></div><div class="spot_to_inspot"><img src="/res/img/workspace/new/spot_to_inspot_a.png"></div><div class="clear"></div></div>';

				      return html;
				}

				function get_city_hotel_list_html(pl_type, pl_data,no){
				  var html = '';

					if(pl_data.ht_name_ko){
						_ht_name = pl_data.ht_name_ko;
					}else{
						_ht_name = pl_data.ht_name_en;
					}
					if(pl_data.ht_img_url){
						_ht_img = pl_data.ht_img_url;
					}else{
						_ht_img = '/res/img/common/no_img/hotel.png';
					}
				        //호텔
				        html += '<div class="day_spot_item no_detail" data="0" data-set_day="0" data-rel_srl="'+pl_data.ht_srl+'" data-pl_type="2" data-no="'+no+'" data-pl_cat="100" data-ci="'+pl_data.ht_ci+'">';
						html += '<div class="img_box fl"><img src="'+_ht_img+'" onload="check_blankimg('+pl_data.ht_srl+',\'cimg_thum\')" class="cimg_thum" data-ht_img-srl="'+pl_data.ht_srl+'"></div>';
						html += '<div class="fl info_box"><div class="title" style="color:#363636">'+_ht_name+'</div><div class="sub"></div>';
						html += '<div class="sub"><div class="tooltip_star_rank fl">'+pl_data.ht_star_rating+'</div>';

						html += '<div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+pl_data.ht_popularity+'</div>';
							
						html +='<div class="clear"></div>';
						//val.ht_currency
						if(pl_data.ht_price > 0){
							html +='<div style="font-size:16px;color:#ff6235;padding-top:10px;">￦'+number_format(pl_data.ht_price)+'</div>';
						}
						html += '<a href="http://www.agoda.com/ko-kr'+pl_data.agoda_url+'?cid=1607809" target="_blank" style="position:absolute;bottom:15px;right:15px;border:solid #3099dd 1px;color:#fff;background:#49b2e9;padding:7px 10px">자세히 보기</a>';
						html +='</div>';
						html += '<div class="sub include_pn_day" style="color:#1a7ad9"></div></div><div class="spot_to_inspot"><img src="/res/img/workspace/new/spot_to_inspot_a.png"></div><div class="clear"></div></div>';

				      return html;
				}

					function check_blankimg(_this,cc){
						var img = new Image();
						
						img.src = $('.'+cc+'[data-ht_img-srl='+_this+']').attr('src');
						console.log(img.src);
						console.log(img.width);
						if(img.width == '1'){
							if(cc == 'cimg_thum_inspot' || cc == 'cimg_thum' || cc == 'cimg_thum_map_box'){
								$('.'+cc+'[data-ht_img-srl='+_this+']').attr('src','/res/img/common/no_img/hotel55.png');
							}else{
								$('.'+cc+'[data-ht_img-srl='+_this+']').attr('src','/res/img/common/no_img/hotel.png');
							}
						}
					}

				function del_plan_inspot_day_all(cur_day){


				  
				  if(!cur_day){
				    cur_day = $('#cat_menu li.on').attr('data');
				  }
				   if (confirm(cur_day+'일차 일정을 초기화히겠습니까?') == true){    //확인
				        var data = "pn_srl="+pn_srl+'&cur_day='+cur_day;
				          $.ajax({  
				            type:'post',
				            data:data,
				            cache:false,
				            url:'/api/plan/del_plan_inspot_day_all',
				            success: function(data){ 
				                
				                    deleteMarkers(1);
				                
				                    
				                    if(line[cur_day]){
				                               line[cur_day][0].setMap(null);
				                    }

				                      get_plan_inspot_list(cur_day,'0','1');
				                      $('#schedule_list_title').hide();
				                      $('#schedule_detail_title').fadeIn();
				                      $('#cat_menu li.on').attr('data',cur_day);          
				            }
				          }); 
				  }else{   //취소
				      return;
				  }
				 
				}

				function del_plan_inspot(cur_day, cur_order){
				  var data = "pn_srl="+pn_srl+'&cur_day='+cur_day+'&cur_order='+cur_order;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/del_plan_inspot',
				        success: function(data){ 
				            
				                deleteMarkers(1);
				            
				                
				                if(line[cur_day]){
				                           line[cur_day][0].setMap(null);
				                }



				                  get_plan_inspot_list(cur_day,'0','1');
				                  $('#schedule_list_title').hide();
				                  $('#schedule_detail_title').fadeIn();
				                  $('#cat_menu li.on').attr('data',cur_day);          
				        }
				      });
				  
				}


				function get_hotel_list_html(pl_data,no){
				  var html = '';
				        html += '<div class="day_spot_item" data="0" data-set_day="0" data-rel_srl="'+pl_data.ht_id+'" data-pl_type="2" data-no="'+no+'" data-pl_cat="100"><div class="img_box fl"><img src="'+pl_data.img+'"></div>';
				        html += '<div class="fl info_box"><div class="title">'+pl_data.name+'</div><div class="sub" style="color:#ff9320;padding-top:3px;">';

				        if(pl_data.rate > 0){
				          html += '<div class="fl" style="width:35px;"><div class="fl" style="width:20px"><img src="/res/img/workspace/ht_star_icon.png"></div><div class="fl" style="padding-top:4px;">'+pl_data.rate+'</div></div>';
				        }
				        
				        if(pl_data.po_val > 0){
				          html +='<div class="fl" style="width:100px;padding-top:4px;"><span style="color:#cccccc;padding-right:5px;">|</span>'+pl_data.po_val+' '+pl_data.po_txt+'</div>';
				        }

				        html += '</div></div><div class="clear"></div>';
				        if(pl_data.price_total > 0){
				          html += '<div style="color:#ff6234;font-weight:bold;font-size:15px;position:absolute;right:10px;bottom:10px;">'+currency_code+' '+number_format(pl_data.price_total.toFixed(0))+'</div>';
				        }else{
				          html += '<div style="color:#ccc;font-weight:bold;font-size:13px;position:absolute;right:10px;bottom:10px;">방 없음</div>';
				        }
				        html += '</div>';

				      return html;  

				}

				function get_plan_inspot_list(set_day, is_full_schedule,from_main, important_only){

				  var data = "pn_srl="+pn_srl+'&set_day='+set_day;

				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/get_plan_inspot_list',
				        success: function(data){ 


				          if(important_only == '1'){
				                  deleteMarkers(1);
				                  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				                                    var day= $(this).attr("data");
				                                    if(line[day]){
				                                     line[day][0].setMap(null);
				                                    }
				                  });
				                  line = [];
				          }
				         
				          var html = '';
				          var _now_data;
				          var _prv_data;
				          var markerarray=new Array();
				          var j = 0;
						  var _last_city = '';
				          if(from_main == '1'){            
				            $('#schedule_detail_box').hide();
				          }
				          $('#schedule_detail_box').html('');
				          data_total_cnt = data.response_data.length;



				            
				            if(line[set_day]){
				             line[set_day][0].setMap(null);
				             wayp.setMap(null);
				            }


				          $.each(data.response_data,function(key, val){
							if(val.pl_srl != 0){
				                html += get_plan_list_html(val.pl_type, val, j, 0,_prv_data);
				                _prv_data = val;
				                
								if(is_full_schedule == 1){
								  _this_order = val.set_day;
								}else{
								  _this_order = val.set_order;
								}
							}
								if(val.pl_type != '3' && val.pl_type != '4'){
									if(val.pl_srl != 0){
									  create_marker(val.lat,val.lng,val.name,val.sub_category,val.img,val.pl_srl,j,val.pl_tags,'y',val.pl_rate,0,0,val.pl_clip_cnt,'1',_this_order,val.pl_type,val.ci_srl);
					                  var latlng = new google.maps.LatLng(parseFloat(val.lat), parseFloat(val.lng));
						              markerarray[j] = latlng;
									if(val.pl_type != '2' && val.pl_type != '3' && val.pl_type != '4'){
										_last_city = val.ci_srl;
									}



				             var _last_position = new google.maps.LatLng(val.lat, val.lng);    

				                    j++;
								}
							
				 }else{
				            create_marker(val.dptr_lat, val.dptr_lng, val.dptr_nm, val.sub_category, val.img, val.rel_srl, j, val.price, 'y', val.dptr_ap_cd, 0, 0, 0, '1', _this_order,val.pl_type,val.ci_srl);
				            var latlng = new google.maps.LatLng(parseFloat(val.dptr_lat), parseFloat(val.dptr_lng));
				            markerarray[j] = latlng;
				            j++;
				            

				            create_marker(val.arv_lat, val.arv_lng, val.arv_nm, val.sub_category, val.img, val.rel_srl, j, val.price, 'y', val.arv_ap_cd, 0, 0, 0, '1', _this_order,val.pl_type,val.ci_srl);
				            var latlng = new google.maps.LatLng(parseFloat(val.arv_lat), parseFloat(val.arv_lng));
				            markerarray[j] = latlng;
				            j++;
							
							var _last_position = new google.maps.LatLng(val.arv_lat, val.arv_lng);


				 }

				  
							        if(data_total_cnt == key+1){

				                                    var color='#ff4a4a';

				                                     var lineSymbol = {
				                                      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
				                                      };



				                                     wayp = new google.maps.Polyline({
				                                                                  path: markerarray,
				                                                                     icons: [{
				                                                                      icon: lineSymbol,
				                                                                      repeat:'100px',
				                                                                      offset: '100%'
				                                                                    }],
				                                                                    geodesic: true,
				                                                                    strokeColor: color,
				                                                                    strokeOpacity: 1.0,
				                                                                    strokeWeight: 1.5
				                                                                });
				                                     line[set_day] = new Array();
				                                     line[set_day].push(wayp);
				                                     wayp.setMap(map);
				                                     

				                                    
				                                    map.setCenter(_last_position);


													if(is_full_schedule != 1){

														full_change_city(_last_city);
													}
				                    
				                    }

				          });



				if(html == ''){
				  html += '<div class="tip_box" style="padding-bottom:20px;"><img src="/res/img/workspace/tip_ko.png"></div>';

				}else{
				  $('#day_controll_btn_box').show();
				}
				          if(is_full_schedule != 1){
				              $('#schedule_detail_box').html(html);
				              if(from_main == '1'){
				                $('#schedule_detail_box').fadeIn();
				              }
				          }

				          
				        },complete:function(){


				        },error:function(){
							 html = '<div class="tip_box" style="padding-bottom:20px;"><img src="/res/img/workspace/tip_ko.png"></div>';
							 $('#day_controll_btn_box').hide();
							 $('#schedule_detail_box').html(html);
							 $('#schedule_detail_box').fadeIn();

						}
				      });
				}



				function plan_complete(){
					et_modal('460px','596px','1','0','/ko/modal/edit_plan?pn_srl='+pn_srl,'2','1');
				}

				function plan_complete_com(){
				    var data = "pn_srl="+pn_srl+'&is_complete=1';

				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/plan/set_plan_info',
				        success: function(data){ 
				          location.href='/ko/mypage/et_1904170447370651793001555487257?type=plan_sub&gdb_srl='+pn_srl;
				        },
				        complete:function(){
				          
				        }
				    });
				}





				$('#plan_title').mouseover(function(){
					if($(this).hasClass('on')){
						$('#plan_title').css('background','');
						$('#plan_title').css('background-color','#fff');
					}else{
						$('#plan_title').css('background','url("/res/img/workspace/new/title_edit_btn.png") no-repeat right 10px top 12px');
						$('#plan_title').css('background-color','#ededed');
					}

				});

				$('#plan_title').mouseout(function(){
					$('#plan_title').css('background','');
					$('#plan_title').css('background-color','#fff');
				});


				$('#plan_title').click(function(e){

				    if($(e.target).is('.pn_title_chg_ok')){
						 e.stopPropagation();
							_this_val = $('#plan_title input').val();

							$.ajax({
								url: '/api/plan/set_plan_info',
								type: 'post',
								data: {pn_srl:pn_srl, pn_title:_this_val},
								timeout: 10000,  
								dataType:"json",
								success: function(data) {


								$('#plan_title').html(_this_val);
								$('#plan_title').removeClass('on');
								return;
								},         
								error: function(xhr, textStatus, error) {

									
								}
							});


					}
					
					if($(this).hasClass('on')){
					}else{
						$(this).addClass('on');
						_this_txt = $(this).text();
						_this_html = '<input type="text" value="'+_this_txt+'" class="pn_title_input_box"><div style="font-size: 10px;position:absolute;top: 22px;left: 305px;color:##808080" id="pl_title_cnt">'+_this_txt.length+'/20</div><button class="pn_title_chg_ok">확인</button>';
						$('#plan_title').html(_this_html);
					}
				});


				$('#plan_title').on('keydown', '.pn_title_input_box', function(){
					title_cnt = $(this).val().length;
					if(title_cnt > 20){
						$(this).val($(this).val().substring(0,20));
					}
					if(title_cnt < 20){
						$('#pl_title_cnt').html(title_cnt+'/20');
					}else{
						$('#pl_title_cnt').html('20/20');
					}

				});



				$('#city_list').on('click','#on_city_close_btn',function(){
				    $('#city_list').hide("slide", { direction: "left" }, 200);
				    deleteMarkers(0);
					map_resize(1);
				});


				$('#on_city_open_btn').click(function(){
				    $('#city_list').show("slide", { direction: "left" }, 200);
					$('#cat_menu li.on').click();
				});




				$('#select_detail_view_spot').on('click','#detail_close_btn',function(){
				      var _this = $('#select_detail_view_spot');
				      var now_pl_srl = _this.attr('data');
				      var now_no = _this.attr('data-no');
				      var now_pl_cat = _this.attr('data-cat');
				      var now_only_clip = _this.attr('data-only_clip');
				      var now_clip_yn = _this.attr('data-clip_yn');
				      var pl_type = _this.attr('data-pl_type');
				      detail_view_spot(now_pl_srl,now_pl_cat,now_no,now_only_clip,now_clip_yn,pl_type);

				});


				$('#select_detail_view_spot').on('click','#detail_view_menu .mn_item',function(){
				    $('#detail_view_menu .mn_item').removeClass('on');
				    var _select_info = $(this).attr('data');
				    $(this).addClass('on');
				    $('.info_first').hide();
				    $('.info_second').hide();
				    $('.info_third').hide();
				    $('.info_memo').hide();
				    $('.info_'+_select_info).fadeIn();

				        $('.chart').easyPieChart({
				            trackColor:'#dfdfdf',
				            barColor:'#9aca40',
				            scaleColor:'#fff',
				            size:88,
				            onStep: function(from, to, percent) {
				                $(this.el).find('.percent').text(Math.round(percent)+'%');
				            }            
				          });  

				      _memo_type = $(this).attr('data-type');
				      if(_memo_type == 'clip'){

				        _rel_srl = $(this).parent().parent().parent().attr('data');
				        _pl_type = $(this).attr('data-pl_type');


				        get_memo_clip(_rel_srl, _pl_type);
				      }else if(_memo_type == 'inspot'){
				        _set_day = $(this).attr('data-set_day');
				        _set_order = $(this).attr('data-set_order');
				        _rel_srl = $(this).parent().parent().parent().attr('data');
				        get_memo_inspot(_set_day,_set_order,_rel_srl);
						get_budget_inspot(_set_day,_set_order);
				      }else if(_memo_type == 'transport'){
				       
				      }



				});


				  function get_memo_clip(_rel_srl,_pl_type){
				    if(_pl_type == '3' || _pl_type == '4'){
				      _t_ci_srl = '1';
				    }else{
				       _t_ci_srl = $('#detail_spot_to_inspot').attr('data-ci');
				    }
				    var mb_srl = 1376703;
				    
				    $.ajax({
				      type: "POST",
				      url: "/api/clip/get_clip_list",
				      data: {"member_srl": mb_srl, "ci_srl":_t_ci_srl},
				      success: function(data) {


				        $.each(data.response_data.clip_info, function(key, val) {
				          if(pl_type == '3'){
				            if(val.rel_srl == _rel_srl && val.pl_type == _pl_type){
				              $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').html(val.memo);
				            }
				          }else{
				            if(val.pl_srl == _rel_srl && val.pl_type == _pl_type){
				              $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').html(val.memo);
				            }
				          }
				        });
				      }
				    });
				  }

				  function get_memo_inspot(_set_day, _set_order, _rel_srl){
				    $.ajax({
				      type: "POST",
				      url:'/api/plan/get_plan_inspot_list',
				      data: {"pn_srl": pn_srl, "set_day":_set_day},
				      success: function(data) {

				        $.each(data.response_data, function(key, val) {
				            if(val.set_day == _set_day && val.set_order == _set_order){
				              $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').html(val.memo);
				            }
				        });
				      }
				    });
				  }




					function get_budget_inspot(_set_day,_set_order){
						get_distinct_budget_currency();
						$.ajax({
						  type: "POST",
						  url:'/api/plan/get_budget_inspot',
						  data: {"pn_srl": pn_srl, "set_day":_set_day, "set_order":_set_order},
						  success: function(data) {

							if(data.response_data.budget_amount > 0){
								$('#budget_currency').html(data.response_data.budget_currency);
								$('#budget_currency').attr('data',data.response_data.budget_currency);
								$('#detail_content .budget_input').val(number_format(data.response_data.budget_amount));
							}

						  }
						});
					}

				  function save_budget_inspot(_set_day, _set_order){
					  _currency = $('#budget_currency').attr('data');
					  _amount = $('#detail_content .budget_input').val();
//					  _amount = _amount.replace(/[^0-9]/g,'');




				    $.ajax({
				      type: "POST",
				      url:'/api/plan/update_budget_inspot',
				      data: {"pn_srl": pn_srl, "set_day":_set_day, "set_order":_set_order, "currency":_currency, "amount":_amount},
				      success: function(data) {


						get_total_budget();

				      }
				    });
					
				  }



				   function save_memo_clip(_rel_srl,_pl_type){
				    _memo = $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').val();
				    $.ajax({
				      type: "POST",
				      url:'/api/clip/set_clip_memo',
				      data: {"rel_srl": _rel_srl, "pl_type":_pl_type,"memo":_memo},
				      success: function(data) {

				        alert('저장되었습니다.');
				        if(_memo != ''){
				          $('#clip_list .list_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_on.png');
				          if(_pl_type == '3' || _pl_type == '4'){
				            $('#transport_list .list_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_on.png');
				          }
				        }else{
				          $('#clip_list .list_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_off.png');
				          if(_pl_type == '3' || _pl_type == '4'){
				            $('#transport_list .list_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_off.png');
				          }
				        }

				      }
				    });
				   }

				   function save_memo_inspot(_set_day,_set_order,_rel_srl){
				    _memo = $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').val();
				      $.ajax({
				      type: "POST",
				      url:'/api/plan/set_plan_inspot_memo',
				      data: {"pn_srl": pn_srl, "set_day":_set_day, "set_order":_set_order,"memo":_memo},
				      success: function(data) {

				        if(_memo != ''){
				          $('#schedule_detail_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_on.png');
				        }else{
				          $('#schedule_detail_box .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_off.png');
				        }
				      }
				    });  
				   }

				  function save_memo_transport(_rel_srl){
				    
				    _memo = $('#select_detail_view_spot[data="'+_rel_srl+'"] #memo_input').val();
				    
				      $.ajax({
				      type: "POST",
				      url:'/api/transport/set_transport_memo',
				      data: {"tp_srl":_rel_srl, "memo":_memo},
				      success: function(data) {

				        alert('저장되었습니다.');
				        if(_memo != ''){
				          $('#transport_list .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_on.png');
				        }else{
				          $('#transport_list .day_spot_item[data-rel_srl="'+_rel_srl+'"][data-pl_type="'+_pl_type+'"] .img_box .memo_indi').attr('src','/res/img/workspace/list_memo_btn_off.png');
				        }
				      }
				    });  
				   }

					$('#select_detail_view_spot').on('click','#budget_currency',function(){
							if($(this).hasClass('on')){
								$(this).removeClass('on');
								$('#budget_currency_select_list').hide();
							}else{
								$(this).addClass('on');
								$('#budget_currency_select_list').show();
							}
					});

					$('#select_detail_view_spot').on('click','#budget_currency_select_list div',function(){
							_this_val = $(this).attr('data');
							$('#budget_currency').attr('data',_this_val);
							$('#budget_currency').text(_this_val);
							$('#budget_currency').removeClass('on');
							$('#budget_currency_select_list').hide();
							_set_day = $('#memo_input').attr('data-set_day');
						    _set_order = $('#memo_input').attr('data-set_order');
						    save_budget_inspot(_set_day,_set_order);
					});


				   $('#select_detail_view_spot').on('click','#memo_save',function(){
				      _memo_type = $(this).attr('data-type');
				      _set_day = $(this).attr('data-set_day');
				      _set_order = $(this).attr('data-set_order');
				      _pl_type = $(this).attr('data-pl_type');
				      _rel_srl = $('#select_detail_view_spot').attr('data');


				      if(_memo_type == 'clip'){
				        save_memo_clip(_rel_srl,_pl_type);
				      }else if(_memo_type == 'inspot'){
				        save_memo_inspot(_set_day,_set_order,_rel_srl);
				      }else if(_memo_type == 'transport'){
				        save_memo_transport(_rel_srl);
				      }
				   });

				     $('#select_detail_view_spot').on('blur','.budget_input',function(){

				      _set_day = $('#memo_input').attr('data-set_day');
				      _set_order = $('#memo_input').attr('data-set_order');
				      save_budget_inspot(_set_day,_set_order);


				   });


				    $('#select_detail_view_spot').on('change','#memo_input',function(){

				      _memo_type = $(this).attr('data-type');
				      _set_day = $(this).attr('data-set_day');
				      _set_order = $(this).attr('data-set_order');
				      _pl_type = $(this).attr('data-pl_type');
				      _rel_srl = $('#select_detail_view_spot').attr('data');


				      if(_memo_type == 'clip'){
				        save_memo_clip(_rel_srl,_pl_type);
				      }else if(_memo_type == 'inspot'){
				        save_memo_inspot(_set_day,_set_order,_rel_srl);
				      }else if(_memo_type == 'transport'){
				        save_memo_transport(_rel_srl);
				      }
				   });



				  function commaNum(num) {
				    var len, point, str;

				    num = num + "";
				    point = num.length % 3
				    len = num.length;

				    str = num.substring(0, point);
				    while (point < len) {
				      if (str != "") str += ",";
				      str += num.substring(point, point + 3);
				      point += 3;
				    }
				    return str;
				  }
				    function cutStr(str,limit){
				    var tmpStr = str;
				    var byte_count = 0;
				    var len = str.length;
				    var dot = "";

				    for(i=0; i<len; i++){
				      byte_count += chr_byte(str.charAt(i)); 
				      if(byte_count == limit-1){
				        if(chr_byte(str.charAt(i+1)) == 2){
				          tmpStr = str.substring(0,i+1);
				          dot = "...";
				        }else {
				          if(i+2 != len) dot = "...";
				          tmpStr = str.substring(0,i+2);
				        }
				        break;
				      }else if(byte_count == limit){
				        if(i+1 != len) dot = "...";
				        tmpStr = str.substring(0,i+1);
				        break;
				      }
				    }
				    return tmpStr+dot;
				  }

				  function chr_byte(chr){
				    if(escape(chr).length > 4)
				    return 2;
				    else
				    return 1;
				  }

				$(document).ready(function() {
				  var _map_width = $( window ).width() - 425;
				  var map_width = $( window ).width() - 790;
				  var map_height = $( window ).height() - 74;
				  var map_list_height = $( window ).height() - 167;
				   $('#right_full_box').css('width',_map_width+'px');
				  $('#schedule_detail_box').css('height',map_height-141);
				  $('#detail_content').css('height',map_height-232);
				  $('#cat_menu').css('max-height',map_height-170);
				  var cat_height = $('#cat_menu').height();
				  $('#cat_add_box').css('height',map_height - cat_height - 120);

				  $('#cat_menu_edit_box').css('height',map_height-50);

				  $('#city_list .list_box').css('height',map_height-242);

				  $('#map').css('width',map_width+'px');
				  $('#map').css('height',map_height+'px');

				  $('#full_wrap').css('height',map_height+'px');
				  $('#map_spot_list').css('height',map_list_height+'px');
				  $('#top_menu').css('width',map_width+'px');
				});

				$( window ).resize(function() {
				  var map_width = $( window ).width() - 790;
				  var _map_width = $( window ).width() - 425;
				  var map_height = $( window ).height() - 74;
				  var map_list_height = $( window ).height() - 167;
				  $('#right_full_box').css('width',_map_width+'px');
				  $('#schedule_detail_box').css('height',map_height-141);
				  $('#detail_content').css('height',map_height-232);
				  $('#cat_menu').css('max-height',map_height-170);
				  var cat_height = $('#cat_menu').height();
				  $('#cat_add_box').css('height',map_height - cat_height - 120);
				  $('#cat_menu_edit_box').css('height',map_height-50);

				  $('#city_list .list_box').css('height',map_height-242);

				  $('#map').css('width',map_width+'px');
				  $('#map').css('height',map_height+'px');

				  $('#full_wrap').css('height',map_height+'px');
				  $('#map_spot_list').css('height',map_list_height+'px');
				  $('#top_menu').css('width',map_width+'px');
				});

				function size_reload(only_close){
					_now_cat_select = $('#cat_menu li.on').attr('data');
					if(_now_cat_select == 'show_all_day'){
						  var map_width = $( window ).width() - 160;
						 $('#on_city_open_btn').hide();
					}else{
						$('#on_city_open_btn').show();
						  _display = $('#city_list').css('display');
						  if(_display != 'none' && only_close != 1){
							  var map_width = $( window ).width() - 790;
						  }else{
							  var map_width = $( window ).width() - 425;
						  }
						  
					}
				  var _map_width = $( window ).width() - 425;
				  var map_height = $( window ).height() - 74;
				  var map_list_height = $( window ).height() - 167;
				  $('#right_full_box').css('width',map_width+'px');
				  $('#schedule_detail_box').css('height',map_height-141);
				  $('#detail_content').css('height',map_height-232);
				  $('#cat_menu').css('max-height',map_height-170);
				  var cat_height = $('#cat_menu').height();
				  $('#cat_add_box').css('height',map_height - cat_height - 120);
				  $('#cat_menu_edit_box').css('height',map_height-50);

				  $('#city_list .list_box').css('height',map_height-242);

				  $('#map').css('width',map_width+'px');


				  $('#full_wrap').css('height',map_height+'px');
				  $('#map_spot_list').css('height',map_list_height+'px');
				  $('#top_menu').css('width',map_width+'px');
				}


				function map_resize(only_close){
					_now_cat_select = $('#cat_menu li.on').attr('data');
					if(_now_cat_select == 'show_all_day'){
						  var map_width = $( window ).width() - 160;
						   $('#on_city_open_btn').hide();
						 
					}else{
						$('#on_city_open_btn').show();
						  _display = $('#city_list').css('display');
						  if(_display != 'none' && only_close != 1){
							  var map_width = $( window ).width() - 790;
						  }else{
							  var map_width = $( window ).width() - 425;
						  }
						  
					}
					var _map_width = $( window ).width() - 425;
					$('#right_full_box').css('width',_map_width+'px');

					 $('#map').css('width',map_width+'px');
					 google.maps.event.trigger(map, 'resize');
				}









				//메뉴시작
				$('#cat_menu').on('click','li',function(){

					$('#input_search').val('');

				    $('#cat_menu li').removeClass('on');
				    $(this).addClass('on');
				      deleteMarkers(1);
					  $.each($('#cat_menu').find('li[data!="show_all_day"]'), function(){
				              var day= $(this).attr("data");
				              if(line[day]){
				               line[day][0].setMap(null);
				              }
				      });
				      line = [];
				      _this_day = $(this).attr('data');
					  if(_this_day == 'show_all_day'){
						  $('#right_full_box').css('left','161px');
						  $('#city_list').hide();
						  deleteMarkers(0);
						  get_plan_day_list(0,'show_all_day');
				  	      $(this).addClass('on');
					  }else{
						  $('#right_full_box').css('left','425px');
						  $('#city_list').show();
						  _this_date = $(this).attr('data-date');
						  _this_day_week = $(this).attr('data-day_week');

						  _this_ci_srl = $(this).attr('data-f_ci');
						  _this_lat = $(this).attr('data-f_lat');
						  _this_lng = $(this).attr('data-f_lng');
						  if(_this_lat != ''){
							  var latLng = new google.maps.LatLng(_this_lat, _this_lng);
							  map.setCenter(latLng);
							  full_change_city(_this_ci_srl);
						  }
						  deleteMarkers(0);
						  get_plan_inspot_list(_this_day,'0','1','1');
						  
						  $('#schedule_detail_title .schedule_detail_title_text').html('<div class="fl">DAY'+_this_day+' <span style="color:#999999">|</span> '+_this_date+'('+day_week_ko[_this_day_week]+')</div><div class="fl day_reset_btn" onclick="del_plan_inspot_day_all()"></div><div class="fr day_next_btn" onclick="plan_day_next()"></div><div class="fr day_prev_btn" onclick="plan_day_prev()"></div><div class="clear"></div>');
						  	  
						  $('#schedule_list_title').hide();
						  $('#schedule_detail_title').fadeIn();
						  $('#schedule_detail_title').attr('data-date',_this_date.replace('.','-'));

					  }
					  
					  map_resize();
				    


				});

				function full_change_city(_ci_srl){
				      $.ajax({  
				        type:'post',
				        data : {"ci_srl": _ci_srl},
				        cache:false,
				        async:false,
				        url:'/api/city/get_city_info',
				        success: function(data){

						  get_cities_list();
				          pub_ci_lat = data.response_data.ci_lat;
				          pub_ci_lng = data.response_data.ci_lng;

				          $('#city_list').attr('data',data.response_data.ci_srl);
				          $('#city_list .list_title span').text(data.response_data.ci_name);


				        }
				      });  
				}



				function get_transport(){
				  var html_code = '';
				   var i = 0;


				    $.ajax({
				      type: "POST",
				      url: "/api/clip/get_clip_list",
				      data: {"ci_srl":"1"},
				      success: function(data) {
				     
				         //교통
				        $.each(data.response_data.clip_info, function(key, value) {
				          if(value.pl_type == '3'){

				            html_code += get_plan_list_html(value.pl_type, value, i, 0);
				            create_marker(value.out_arv_ap_lat, value.out_arv_ap_lng, value.out_arv_ap_nm, value.icon, value.img, value.rel_srl, i, value.price, value.clip_yn, value.currency, 0, 0, 0, 0, 0,3,0);
				            i = i+ 1;
				            create_marker(value.out_dptr_ap_lat, value.out_dptr_ap_lng, value.out_dptr_ap_nm, value.icon, value.img, value.rel_srl, i, value.price, value.clip_yn, value.currency, 0, 0, 0, 0, 0,3,0);



				    var route =
				    [
				        new google.maps.LatLng(value.out_arv_ap_lat,value.out_arv_ap_lng),
				        new google.maps.LatLng(value.out_dptr_ap_lat,value.out_dptr_ap_lng)
				    ];    


				    var lineSymbol = {
				      path: 'M 0,-1 0,1',
				      strokeOpacity: 1,
				      scale: 0
				    };

				    transportp = new google.maps.Polyline(
				    {
				        path: route,
				        strokeColor: "972BC1",
				        strokeOpacity: 0.5,
				        icons: [{
				          icon: lineSymbol,
				          offset: '0',
				          repeat: '5px'
				        }],        
				        strokeWeight: 1,
				        geodesic: true    //The polylines need to be declared as geodesic. Google Maps API takes care of the maths behind this.
				    });

				    transport_path.push(transportp);

				    transportp.setMap(map);            
				            i = i+ 1;



				    

				          }
				        });
				      },
				      complete:function(){


				                      $.ajax({
				                        type: "POST",
				                        url: "/api/transport/get_transport_list",
				                        success: function(data) {

				                                            

				                                             //교통
				                                            $.each(data.response_data, function(key, value) {
				                                              
				                                                 html_code += get_plan_list_html(4, value, i, 0);
				                                                 create_marker(value.dptr_lat, value.dptr_lng, value.dptr_nm, value.tp_type, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdFgL_sOQWyKLt46VEKY6vR5BL5NfFez2reNaimgqSE_o7fuLs', value.tp_srl, i, value.dptr_date, 'y', value.dptr_addr, 0, 0, 0, 0, 0,3,0);
				                                                 i = i+ 1;
				                                                 create_marker(value.arv_lat, value.arv_lng, value.arv_nm, value.tp_type, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdFgL_sOQWyKLt46VEKY6vR5BL5NfFez2reNaimgqSE_o7fuLs', value.rel_srl, i, value.arv_date, 'y', value.arv_addr, 0, 0, 0, 0, 0,3,0);
				                                        


				                                        var route =
				                                        [
				                                            new google.maps.LatLng(value.dptr_lat,value.dptr_lng),
				                                            new google.maps.LatLng(value.arv_lat,value.arv_lng)
				                                        ];    //Always remember that two consecutive lat-lngs above will form one geodesic polyline.


				                                        var lineSymbol = {
				                                          path: 'M 0,-1 0,1',
				                                          strokeOpacity: 1,
				                                          scale: 0
				                                        };

				                                        transportp = new google.maps.Polyline(
				                                        {
				                                            path: route,
				                                            strokeColor: "972BC1",
				                                            strokeOpacity: 0.5,
				                                            icons: [{
				                                              icon: lineSymbol,
				                                              offset: '0',
				                                              repeat: '5px'
				                                            }],        
				                                            strokeWeight: 1,
				                                            geodesic: true    //The polylines need to be declared as geodesic. Google Maps API takes care of the maths behind this.
				                                        });

				                                        transport_path.push(transportp);

				                                        transportp.setMap(map);            
				                                                i = i+ 1;
				                          
				                                  });



				                        },complete: function(){
				                            html_code += '<div id="add_transport">교통추가</div>';
				                          $('#transport_list .list_box').html(html_code);





				                                        

				                                                                //교통 드래그
				                                                                     $('#transport_list .list_box').scrollTop(0);


				                                                                                      
				                                                                                      $( ".list_box .day_spot_item" ).draggable({
				                                                                             
				                                                                                                    connectToSortable: "#schedule_detail_box",
				                                                                                                    helper: "clone",
				                                                                                                    revert: false,
				                          start: function (e, ui) {
				                            $(ui.placeholder).css('width', 0);
				                            $('#schedule_detail_box .tip_box').hide();
				                          },
				                          change: function (e, ui) {
				                            $(ui.placeholder).css('width', 'auto');
				                          },
				                          stop: function (e, ui) {
				                            day_spot_item_cnt = $('#schedule_detail_box .day_spot_item').length;
				                            if(day_spot_item_cnt == 0){
				                              $('#schedule_detail_box .tip_box').show();
				                            }
				                          }
				                                                                                       }).disableSelection();


				                        }
				                      });


				  if(map.getZoom() < 2){
				    smoothZoom(map, 2, map.getZoom(), true);
				  }else{
				    smoothZoom(map, 2, map.getZoom(), false);
				  }



				      }
				    });    



				}




				$('#map_spot_list').on('click','.map_list_spot_item',function(e){
				        if($(e.target).is('.clip_spot_toggle_btn')){
				            e.preventDefault();
				            return;
				        }    
				       _now_menu = $('#cat_menu li.on').attr('data');
				       var pl_srl = $(this).attr('data');
				       var pl_cat = $(this).attr('data-cat');
				       var no = $(this).attr('data-no');
				       var pl_type = $(this).attr('data-pl_type');
				        if(_now_menu == 'clip'){
				            var only_clip = 1;
				        }else{
				            var only_clip = 0;
				        }
				        var clip_yn = $(this).attr('data-clip_yn');
				        
				        detail_view_spot(pl_srl,pl_cat,no,only_clip,clip_yn,pl_type);
				});

				  $('#map_spot_list').on('mouseover','.map_list_spot_item',function(){
				    _now_menu = $('#cat_menu li.on').attr('data');
				    var no = $(this).attr('data-no');
				    var pl_cat = $(this).attr('data-cat');
				    var is_clip = $(this).attr('data-clip_yn');
				    if(_now_menu == 'clip'){
				        var _this_only_clip = 1;
				    }else{
				        var _this_only_clip = 0;
				    }
				        markers['only_clip_'+_this_only_clip][no].setZIndex(99999999999999);
				        markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/ic_current.png');  
				  });

				  $('#map_spot_list').on('mouseout','.map_list_spot_item',function(){
				    _now_menu = $('#cat_menu li.on').attr('data');
				     var pl_srl = $(this).attr('data');
				     var now_pl_srl = $('#select_detail_view_spot').attr('data');
				    if(_now_menu == 'clip'){
				        var _this_only_clip = 1;
				    }else{
				        var _this_only_clip = 0;
				    }     
				     
				         if(pl_srl != now_pl_srl){
				              var no = $(this).attr('data-no');
				              var pl_cat = $(this).attr('data-cat');
				              var is_clip_yn = markers['only_clip_'+_this_only_clip][no].clip_yn;
				              var _this_set_order = markers['only_clip_'+_this_only_clip][no].set_order;

				              markers['only_clip_'+_this_only_clip][no].setZIndex(99999999999999);
				              if(is_clip_yn == 'y'){
				                    markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/'+pl_cat+'_'+_this_set_order+'.png');  
				              }else{
				                    markers['only_clip_'+_this_only_clip][no].setIcon('/res/map/marker/n'+pl_cat+'_'+_this_set_order+'.png');  
				              }
				          }
				    
				  });  



				function detail_view_spot(pl_srl, pl_cat,no,only_clip,clip_yn,pl_type,set_day,set_order){
				      if(only_clip == 1){

				      }else{
				            only_clip = 0;
				      }
				        var _this = $('#select_detail_view_spot');
				        var now_pl_srl = _this.attr('data');
				        var now_no = _this.attr('data-no');
				        var now_pl_cat = _this.attr('data-cat');
				        var now_only_clip = _this.attr('data-only_clip');
				        if(markers['only_clip_'+only_clip][no]){
							var is_clip_yn = markers['only_clip_'+only_clip][no].clip_yn;
						}else{
							var is_clip_yn = 'n';
						}


				        

				        if (_this.hasClass('visible')){
				            _this.attr('data','0');
				            _this.attr('data-no','0');
				            _this.attr('data-cat','0'); 
				            
				if(markers['only_clip_'+now_only_clip][now_no]){
				              var now_is_clip_yn = markers['only_clip_'+now_only_clip][now_no].clip_yn;
				              var _this_set_order = markers['only_clip_'+now_only_clip][now_no].set_order;

				              markers['only_clip_'+now_only_clip][now_no].setZIndex(99999999999999);
				              if(now_is_clip_yn == 'y'){
				                    markers['only_clip_'+now_only_clip][now_no].setIcon('/res/map/marker/'+pl_cat+'_'+_this_set_order+'.png');  
				              }else{
				                    markers['only_clip_'+now_only_clip][now_no].setIcon('/res/map/marker/n'+pl_cat+'_'+_this_set_order+'.png');  
				              }
				}
				                

				            _this.hide("slide", { direction: "left" }, 200).removeClass('visible');;
				            if(now_pl_srl != pl_srl){
				             detail_view_spot(pl_srl,pl_cat,no,only_clip,clip_yn,pl_type,set_day,set_order);
				            }
				        } else {
				           _this.attr('data',pl_srl);
				           _this.attr('data-no',no);
				           _this.attr('data-cat',pl_cat);          
				           _this.attr('data-only_clip',only_clip); 
				           _this.attr('data-clip_yn',is_clip_yn); 
						if(markers['only_clip_'+only_clip][no]){
				           markers['only_clip_'+only_clip][no].setZIndex(99999999999999);
				           markers['only_clip_'+only_clip][no].setIcon('/res/map/marker/ic_current.png');
						}
				if(markers['only_clip_'+only_clip][no]){
					_this_latlng = markers['only_clip_'+only_clip][no].position;
				}


				if(is_clip_yn == "y" && only_clip == '0'){
				  if(pl_cat != '901' && pl_cat != '902' && pl_cat != '903'){
				      _this_memo_type = 'clip';
				    }else{
				      _this_memo_type = 'transport';
				    }
				}else if(only_clip == 1 && set_day>0){
				_this_memo_type = 'inspot';
				_menu_clip = ' on_clip';
				}else{
				  _this_memo_type = '';
				  _menu_clip = '';
				}
				if($('#cat_menu .on').attr('data') == 'clip' || only_clip == 1 && _this_latlng){
				    _now_map_width = $('#map').width();
				    
				    if(Number(_now_map_width) < 900){
				          //지도 전체 가로길이 3/4
				          var markerPos = _this_latlng, center = map.getCenter(),
				          mapNE = map.getBounds().getNorthEast();
				          map.setCenter(new google.maps.LatLng(markerPos.lat(), (markerPos.lng() - (mapNE.lng() - center.lng())/1.3)));      
				    }else if(Number(_now_map_width) < 1300){
				          //지도 전체 가로길이 3/4
				          var markerPos = _this_latlng, center = map.getCenter(),
				          mapNE = map.getBounds().getNorthEast();
				          map.setCenter(new google.maps.LatLng(markerPos.lat(), (markerPos.lng() - (mapNE.lng() - center.lng())/2)));      
				    }else{
				          map.setCenter(_this_latlng);
				    }
				}

				if(pl_cat == '100' && pl_type == '2'){

				get_ht_details(pl_srl, 0, 0, 0, set_day, set_order, pn_srl, pl_type);

					if(_this_memo_type=='inspot'){
							_set_day = set_day;
							_set_order =set_order;
							_rel_srl = pl_srl;
							get_memo_inspot(_set_day,_set_order,_rel_srl);
							get_budget_inspot(_set_day,_set_order);       
							setTimeout("$('.info_memo').show();",500);
					}
				 

				}else if(pl_type == "1"){


				  var data = 'pl_srl='+pl_srl;
				  
				  $.ajax({  
				    type:'post',
				    data:data,
				    url:'/api/spot/get_user_spot_info',
				    success: function(data){
				      var pl_name = data.response_data.pl_name;
				      var pl_img = data.response_data.pl_img_url;
				      var pl_addr = data.response_data.pl_addr;
				      var founder_name = data.response_data.founder_name;
				      var detail_html = '';
				      detail_html += '<div class="detail_view_full_box"><div id="detail_close_btn"></div>';
				      detail_html += '<div class="spot_title">'+pl_name+'</div>';
				      detail_html += '<div class="spot_img"><img src="'+pl_img+'"><div class="spot_cnt_box">';
				      detail_html += '</div>';
				      detail_html += '<div class="clip_btn_box">';
				      detail_html += '</div></div>';

				      detail_html += '<div id="detail_content">';

				      detail_html += '<div class="info_first">';
										detail_html += '<div class="info_memo">';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;padding-top:10px;">예산</div>';
										detail_html += '<div style="padding-left:20px;padding-bottom:15px;">';

										detail_html += '<div id="budget_currency_select_list"><div data="KRW">KRW</div><div data="JPY">JPY</div></div>';
										
										detail_html += '<div id="budget_currency" class="fl" data="KRW">KRW</div><div class="fl"><input type="text" class="budget_input" placeholder="0" onkeyup="return isNumberKey(event)"></div><div class="clear"></div></div>';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">메모</div>';
				                        detail_html += '<textarea id="memo_input" data-type="'+_this_memo_type+'" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'"></textarea>';
				                        detail_html += '<div id="memo_save">저장</div>';
				                        detail_html += '</div></div>';
					  detail_html += '<div class="transport_detail_inner_box"><div class="fl transport_detail_inner_left">주소</div><div class="fl transport_detail_inner_right">'+pl_addr+'</div><div class="clear"></div>';
					  detail_html += '<div class="fl"></div><div class="fl"></div><div class="clear"></div>';
				  	  //detail_html += '</div><div style="text-align:center;padding-bottom:10px;"><a href="http://www.tripbs.net" onclick="et_tracker(\'tripbs_ws_user_spot\',\'1376703\')" target="_blank"><img src="http://www.earthtory.com/res/img/ad/tripbs_ad_01.jpg"></a></div>';
					  detail_html += '<div style="color:#808080;padding:10px;">'+founder_name+'님이 등록한 장소입니다.</div>';

				      detail_html += '</div></div>';
				      $('#select_detail_view_spot').html(detail_html);
					if(_this_memo_type=='inspot'){
							_set_day = set_day;
							_set_order =set_order;
							_rel_srl = pl_srl;
							get_memo_inspot(_set_day,_set_order,_rel_srl);
							get_budget_inspot(_set_day,_set_order);       
					}

				    },
				    complete:function(){
				        

										_map_height = $( window ).height() - 74;
										_detail_height = _map_height-232;
										$('#detail_content').css('height',_detail_height);

				                        _city_list_display = $('#city_list').css('display');


				                          $('#select_detail_view_spot').css('left','0px');

				                     _this.show("slide", { direction: "left" }, 200).addClass('visible');
				    }
				  });




				}else if(pl_type == "3"){


				  var data = 'ar_srl='+pl_srl;
				  
				  $.ajax({  
				    type:'post',
				    data:data,
				    url:'/api/air/get_air_info',
				    success: function(data){
				      var out_arv_ap_cd = data.response_data.out_arv_ap_cd;
				      var out_arv_ap_nm = data.response_data.out_arv_ap_nm;
				      var out_arv_ap_lat = data.response_data.out_arv_ap_lat;
				      var out_arv_ap_lng = data.response_data.out_arv_ap_lng;
				      var out_arv_date = data.response_data.out_arv_date;

				      var out_dptr_ap_cd = data.response_data.out_dptr_ap_cd;
				      var out_dptr_ap_nm = data.response_data.out_dptr_ap_nm;
				      var out_dptr_ap_lat = data.response_data.out_dptr_ap_lat;
				      var out_dptr_ap_lng = data.response_data.out_dptr_ap_lng;
				      var out_dptr_date = data.response_data.out_dptr_date;      

				      var detail_html = '';
				      detail_html += '<div class="detail_view_full_box"><div id="detail_close_btn"></div>';
				      detail_html += '<div class="spot_title" style="border-bottom:solid #b3b3b3 1px;">'+out_dptr_ap_cd+' '+out_arv_ap_cd+'</div>';

				      detail_html += '<div id="detail_view_menu"><div class="mn_item fl on" data="first" style="width:166px">정보</div><div class="mn_item fl" data="memo" style="width:166px" data-type="'+_this_memo_type+'" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'">메모</div></div>';
				      detail_html += '<div id="detail_content">';
				      detail_html += '<div class="info_first">'


				content = '';
				content2 = '';
				      air_detail = data.response_data.sub_info;
				      vals =  data.response_data;

				                              content += '<div class="air_content">';
				                                if(vals.out_dptr_ap_cd){
				                                    var prev_ca = '';
				                                    var p_arv_time = '';
				                                    var full_dur = 0;
				                                    var content2 = '';
				                                    $.each(air_detail.BookingOptions[0].BookingItems[0].SegmentIds,function(keyx,valx){ //총 시간때문에 상세를 먼저 생성
				                                      var num = parseInt(keyx)-1;
				                                      var seg = air_detail.Segments[keyx];
				                                      if(seg.Directionality == 'Outbound'){
				                                        if((prev_ca != '' && prev_ca != seg.OriginStation) || (p_arv_time != '' && p_arv_time != seg.DepartureDateTime)){ //환승이나 대기가 있을경우
				                                          content2 += '<tr>';
				                                            content2 += '<td>';
				                                              var gap = get_gap(p_arv_time,seg.DepartureDateTime);
				                                              full_dur = full_dur+gap; //총 운항시간 계산
				                                              var gap_time = Math.floor(gap/60);
				                                              var gap_min = (gap-(gap_time*60));
				                                              content2 += gap_time+'시간 '+gap_min+'분';
				                                            content2 += '</td>';
				                                            content2 += '<td>';
				                                              content2 += '<div class="line2"></div>';
				                                              content2 += '<img src="/res/img/planbook/air_blit3.png" class="line_img" alt="" />';
				                                            content2 += '</td>';
				                                            content2 += '<td>';
				                                              content2 += '<div class="air_desc pd">';
				                                                content2 += '<span>';
				                                                  if(prev_ca != '' && prev_ca != seg.OriginStation){
				                                                    content2 += '공항변경';
				                                                  }else{
				                                                    content2 += '공항에서 대기';
				                                                  }
				                                                content2 += '</span>';
				                                              content2 += '</div>';
				                                            content2 += '</td>';
				                                          content2 += '</tr>';
				                                        }

				                                        prev_ca = seg.DestinationStation;
				                                        full_dur = full_dur+seg.Duration; //총 운항시간계산
				                                        p_arv_time = seg.ArrivalDateTime;
				                                        var dur_time = Math.floor(seg.Duration/60); //현재 운항시간
				                                        var dur_min = seg.Duration-(dur_time*60); //현재 운항 분
				                                        content2 += '<tr>';
				                                          content2 += '<td>';
				                                            if(dur_time != 0){
				                                              content2 += fillzero(dur_time,2)+'시간 ';
				                                            }
				                                            
				                                            if(dur_min != 0){
				                                              content2 += fillzero(dur_min,2)+'분';
				                                            }else{
				                                              content2 += '00분';
				                                            }
				                                          content2 += '</td>';
				                                          content2 += '<td>';
				                                            content2 += '<div class="line1"></div>';
				                                            content2 += '<img src="/res/img/planbook/air_blit1.png" class="line_img top" alt="" />';
				                                            content2 += '<img src="/res/img/planbook/air_blit2.png" class="line_img bottom" alt="" />';
				                                          content2 += '</td>';
				                                          content2 += '<td>';
				                                            content2 += '<div class="air_ca">';
				                                              content2 += get_carr_html(seg.Carrier,seg.FlightNumber);
				                                            content2 += '</div>';
				                                            content2 += '<div class="air_desc">';
				                                              var start_arr = seg.DepartureDateTime.split('T');
				                                              var start_date = start_arr[0].replace(/-/gi,'/').substr(5,10);
				                                              var start_time = start_arr[1].substr(0,5);
				                                              var start_week = day_str(start_arr[0].replace(/-/gi,'.'));
				                                              var start_station = get_station(seg.OriginStation);
				                                              content2 += start_date+'('+start_week+') '+start_time+'&nbsp;&nbsp;'+start_station;
				                                            content2 += '</div>';
				                                            content2 += '<div class="air_desc">';
				                                              var end_arr = seg.ArrivalDateTime.split('T');
				                                              var end_date = end_arr[0].replace(/-/gi,'/').substr(5,10);
				                                              var end_time = end_arr[1].substr(0,5);
				                                              var end_week = day_str(end_arr[0].replace(/-/gi,'.'));
				                                              var end_station = get_station(seg.DestinationStation);
				                                              content2 += end_date+'('+end_week+') '+end_time+'&nbsp;&nbsp;'+end_station;
				                                            content2 += '</div>';
				                                          content2 += '</td>';
				                                        content2 += '</tr>';
				                                      }
				                                    });
				                                  content += '<table class="air_table">';
				                                    content += '<colgroup>';
				                                      content += '<col width=80 />';
				                                      content += '<col width=22 />';
				                                      content += '<col />';
				                                    content += '</colgroup>';
				                                    content += '<tr>';
				                                      content += '<th colspan="2">';
				                                          content += '출국편';
				                                      content += '</th>';
				                                      content += '<th>';
				                                        var full_time = Math.floor(full_dur/60);
				                                        var full_min = full_dur-(full_time*60);
				                                        content += full_time+'시간 '+full_min+'분';
				                                      content += '</th>';
				                                    content += '</tr>';
				                                    content += '<tr>';
				                                      content += '<td colspan="3">&nbsp;</td>';
				                                    content += '</tr>';

				                                    content += content2; //껍데기안에 상세 넣음

				                                    content += '<tr>';
				                                      content += '<td colspan="3">&nbsp;</td>';
				                                    content += '</tr>';
				                                  content += '</table>';
				                                };

				                                if(vals.in_dptr_ap_cd){
				                                    var prev_ca = '';
				                                    var p_arv_time = '';
				                                    var full_dur = 0;
				                                    var content2 = '';
				                                    $.each(air_detail.BookingOptions[0].BookingItems[0].SegmentIds,function(keyx,valx){ //총 시간때문에 상세를 먼저 생성
				                                      var num = parseInt(keyx)-1;
				                                      var seg = air_detail.Segments[keyx];
				                                      if(seg.Directionality == 'Inbound'){
				                                        if((prev_ca != '' && prev_ca != seg.OriginStation) || (p_arv_time != '' && p_arv_time != seg.DepartureDateTime)){ //환승이나 대기가 있을경우
				                                          content2 += '<tr>';
				                                            content2 += '<td>';
				                                              var gap = get_gap(p_arv_time,seg.DepartureDateTime);
				                                              full_dur = full_dur+gap; //총 운항시간 계산
				                                              var gap_time = Math.floor(gap/60);
				                                              var gap_min = (gap-(gap_time*60));
				                                              content2 += gap_time+'시간 '+gap_min+'분';
				                                            content2 += '</td>';
				                                            content2 += '<td>';
				                                              content2 += '<div class="line2"></div>';
				                                              content2 += '<img src="/res/img/planbook/air_blit3.png" class="line_img" alt="" />';
				                                            content2 += '</td>';
				                                            content2 += '<td>';
				                                              content2 += '<div class="air_desc pd">';
				                                                content2 += '<span>';
				                                                  if(prev_ca != '' && prev_ca != seg.OriginStation){
				                                                    content2 += '공항변경';
				                                                  }else{
				                                                    content2 += '공항에서 대기';
				                                                  }
				                                                content2 += '</span>';
				                                              content2 += '</div>';
				                                            content2 += '</td>';
				                                          content2 += '</tr>';
				                                        }

				                                        prev_ca = seg.DestinationStation;
				                                        full_dur = full_dur+seg.Duration; //총 운항시간계산
				                                        p_arv_time = seg.ArrivalDateTime;
				                                        var dur_time = Math.floor(seg.Duration/60); //현재 운항시간
				                                        var dur_min = seg.Duration-(dur_time*60); //현재 운항 분
				                                        content2 += '<tr>';
				                                          content2 += '<td>';
				                                            if(dur_time != 0){
				                                              content2 += fillzero(dur_time,2)+'시간 ';
				                                            }
				                                            
				                                            if(dur_min != 0){
				                                              content2 += fillzero(dur_min,2)+'분';
				                                            }else{
				                                              content2 += '00분';
				                                            }
				                                          content2 += '</td>';
				                                          content2 += '<td>';
				                                            content2 += '<div class="line1"></div>';
				                                            content2 += '<img src="/res/img/planbook/air_blit1.png" class="line_img top" alt="" />';
				                                            content2 += '<img src="/res/img/planbook/air_blit2.png" class="line_img bottom" alt="" />';
				                                          content2 += '</td>';
				                                          content2 += '<td>';
				                                            content2 += '<div class="air_ca">';
				                                              content2 += get_carr_html(seg.Carrier,seg.FlightNumber);
				                                            content2 += '</div>';
				                                            content2 += '<div class="air_desc">';
				                                              var start_arr = seg.DepartureDateTime.split('T');
				                                              var start_date = start_arr[0].replace(/-/gi,'/').substr(5,10);
				                                              var start_time = start_arr[1].substr(0,5);
				                                              var start_week = day_str(start_arr[0].replace(/-/gi,'.'));
				                                              var start_station = get_station(seg.OriginStation);
				                                              content2 += start_date+'('+start_week+') '+start_time+'&nbsp;&nbsp;'+start_station;
				                                            content2 += '</div>';
				                                            content2 += '<div class="air_desc">';
				                                              var end_arr = seg.ArrivalDateTime.split('T');
				                                              var end_date = end_arr[0].replace(/-/gi,'/').substr(5,10);
				                                              var end_time = end_arr[1].substr(0,5);
				                                              var end_week = day_str(end_arr[0].replace(/-/gi,'.'));
				                                              var end_station = get_station(seg.DestinationStation);
				                                              content2 += end_date+'('+end_week+') '+end_time+'&nbsp;&nbsp;'+end_station;
				                                            content2 += '</div>';
				                                          content2 += '</td>';
				                                        content2 += '</tr>';
				                                      }
				                                    });
				                                  content += '<table class="air_table">';
				                                    content += '<colgroup>';
				                                      content += '<col width=80 />';
				                                      content += '<col width=22 />';
				                                      content += '<col />';
				                                    content += '</colgroup>';
				                                    content += '<tr>';
				                                      content += '<th colspan="2">';
				                                          content += '귀국편';
				                                      content += '</th>';
				                                      content += '<th>';
				                                        var full_time = Math.floor(full_dur/60);
				                                        var full_min = full_dur-(full_time*60);
				                                        content += full_time+'시간 '+full_min+'분';
				                                      content += '</th>';
				                                    content += '</tr>';
				                                    content += '<tr>';
				                                      content += '<td colspan="3">&nbsp;</td>';
				                                    content += '</tr>';

				                                    content += content2; //껍데기안에 상세 넣음

				                                    content += '<tr>';
				                                      content += '<td colspan="3">&nbsp;</td>';
				                                    content += '</tr>';
				                                  content += '</table>';
				                                }
				                              content += '</div>';
				                   
				detail_html += content;

				      detail_html += '</div>';
				      detail_html += '<div class="info_memo"><textarea id="memo_input"></textarea>';
				      detail_html += '<div id="memo_save" data-type="'+_this_memo_type+'" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'">저장</div>';
				      detail_html += '</div></div>';
				      $('#select_detail_view_spot').html(detail_html);


				    },
				    complete:function(){
				        

				                        _city_list_display = $('#city_list').css('display');

				                          $('#select_detail_view_spot').css('left','0px');

				                     _this.show("slide", { direction: "left" }, 200).addClass('visible');
				    }
				  });




				}else if(pl_type == "4"){
				  var data = 'tp_srl='+pl_srl;
				  
				  $.ajax({  
				    type:'post',
				    data:data,
				    url:'/api/transport/get_transport_info',
				    success: function(data){

				      var tp_srl = data.response_data.tp_srl;
					  var tp_type = data.response_data.tp_type;
				      var dptr_nm = data.response_data.dptr_nm;
				      var dptr_lat = data.response_data.dptr_lat;
				      var dptr_lng = data.response_data.dptr_lng;
				      var dptr_addr = data.response_data.dptr_addr;
				      var dptr_date = data.response_data.dptr_date;
				      
				      var arv_nm = data.response_data.arv_nm;
				      var arv_lat = data.response_data.arv_lat;
				      var arv_lng = data.response_data.arv_lng;
				      var arv_addr = data.response_data.arv_addr;
				      var arv_date = data.response_data.arv_date;

				      var reg_member = data.response_data.reg_member;
				      var regdate = data.response_data.regdate;

				      var detail_html = '';
				      detail_html += '<div class="detail_view_full_box"><div id="detail_close_btn"></div>';
				      detail_html += '<div class="spot_title" style="border-bottom:solid #b3b3b3 1px;background:url(\'/res/img/workspace/new/transport/'+tp_type+'.png\') no-repeat 20px 15px;padding-left:45px;">'+cutStr(dptr_nm, 16)+' → '+cutStr(arv_nm, 16)+'</div>';

				      detail_html += '<div id="detail_content">';
				      detail_html += '<div class="info_first">';
										detail_html += '<div style="width:335px;height:30px;background:#49b2e9;border-solid:#3099dd;color:#fff;font-size:13px;line-height:30px;text-align:center;cursor:pointer;margin:10px 15px;" onclick="edit_transportation('+tp_srl+')">정보수정</div>';
										detail_html += '<div class="info_memo">';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">예산</div>';
										detail_html += '<div style="padding-left:20px;padding-bottom:15px;">';
										detail_html += '<div id="budget_currency_select_list"><div data="KRW">KRW</div><div data="JPY">JPY</div></div>';
										detail_html += '<div id="budget_currency" data="KRW" class="fl">KRW</div><div class="fl"><input type="text" class="budget_input" placeholder="0" onkeyup="return isNumberKey(event)"></div><div class="clear"></div></div>';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">메모</div>';
				                        detail_html += '<textarea id="memo_input" data-type="'+_this_memo_type+'" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'"></textarea>';
				                        detail_html += '<div id="memo_save">저장</div>';
				                        detail_html += '</div></div>';
					  detail_html += '<div class="transport_detail_inner_box">';
					  detail_html += '<div style="font-size:14px;color:#363636;font-weight:bold;text-align:left;padding-bottom:15px;padding-left:12px;padding-top:10px">'+dptr_nm+'</div>';
					  detail_html += '<div class="fl transport_detail_inner_left">주소</div><div class="fl transport_detail_inner_right">'+dptr_addr+'</div><div class="clear" style="height:10px;"></div>';
				      detail_html += '<div class="fl transport_detail_inner_left">출발시간</div><div class="fl transport_detail_inner_right">'+dptr_date.substring(0,16)+'</div><div class="clear"></div>';
				      

				      detail_html += '<div style="font-size:14px;color:#363636;font-weight:bold;text-align:left;padding-bottom:15px;padding-left:12px;padding-top:10px">'+arv_nm+'</div>';
					  detail_html += '<div class="fl transport_detail_inner_left">주소</div><div class="fl transport_detail_inner_right">'+arv_addr+'</div><div class="clear" style="height:10px;"></div>';
				      detail_html += '<div class="fl transport_detail_inner_left">도착시간</div><div class="fl transport_detail_inner_right">'+arv_date.substring(0,16)+'</div><div class="clear"></div>';
				      
				      detail_html += '</div></div>';
				      detail_html += '</div>';
				      $('#select_detail_view_spot').html(detail_html);

					if(_this_memo_type=='inspot'){
							_set_day = set_day;
							_set_order =set_order;
							_rel_srl = pl_srl;
							get_memo_inspot(_set_day,_set_order,_rel_srl);
							get_budget_inspot(_set_day,_set_order);       
					}

				    },
				    complete:function(){
				        
										_map_height = $( window ).height() - 74;
										_detail_height = _map_height-50;
										$('#detail_content').css('height',_detail_height);
				                        _city_list_display = $('#city_list').css('display');



				                          $('#select_detail_view_spot').css('left','0px');

				                     _this.show("slide", { direction: "left" }, 200).addClass('visible');
				    }
				  });




				}else{
				                var data= 'pl_srl='+pl_srl;
				                $.ajax({  
				                  type:'post',
				                  data:data,
				                  url:'/api/spot/get_spot_info',
				                  success: function(data){
				                    
				                        var pl_srl = data.response_data.spot_info.pl_srl;
										var pl_addr_en = data.response_data.spot_info.pl_addr_en;
										var pl_ci = data.response_data.spot_info.pl_ci;
				                        var pl_name = data.response_data.spot_info.pl_name;
				                        var pl_desc = data.response_data.spot_info.pl_desc;
				                        var pl_tel = data.response_data.spot_info.pl_tel_ko;
				                        var pl_time = data.response_data.spot_info.pl_time;
				                        var pl_site = data.response_data.spot_info.pl_site;
				                        var pl_rank = data.response_data.spot_info.pl_rank;
				                        var rate = data.response_data.spot_info.rate;
				                        var clip_yn = data.response_data.spot_info.clip_yn;
				                        var pl_clip_cnt = data.response_data.spot_info.pl_clip_cnt;
										var pl_sub_category = data.response_data.spot_info.pl_sub_category;
										if(data.response_data.spot_img_list.length > 0){
					                        var spot_img = data.response_data.spot_img_list[0].img_url;
										}else{
											if(pl_sub_category == 301){
												var spot_img = '/res/img/common/no_img/sight.png';
											}else if(pl_sub_category == 302){
												var spot_img = '/res/img/common/no_img/les.png';
											}else if(pl_sub_category == 303){
												var spot_img = '/res/img/common/no_img/night.png';
											}else if(pl_sub_category == 200){
												var spot_img = '/res/img/common/no_img/food.png';
											}else if(pl_sub_category == 400){
												var spot_img = '/res/img/common/no_img/shopping.png';
											}
										}
				                        var pl_url =data.response_data.spot_info.pl_link_url;


				                        var detail_html = '';

										if(pl_site){
											pl_site = pl_site.replace('http://','');
											pl_site = pl_site.replace('https://','');
										}else{
											pl_site = '';
										}

				                        detail_html += '<div class="detail_view_full_box"><div id="detail_spot_to_inspot" data-ci="'+pl_ci+'" data-rel_srl="'+pl_srl+'" data-pl_type="0">+일정에 추가</div><div id="detail_close_btn"></div>';
				                        detail_html += '<a class="spot_title" href="'+pl_url+'" target="_blank">'+cutStr(pl_name,20)+'</a>';
				                        detail_html += '<div class="spot_img"><div class="detail_img_overlay"></div><img src="'+spot_img+'"><div class="spot_cnt_box">';
				                        detail_html += '</div>';
				            
				                        detail_html += '</div>';

				                        detail_html += '<div id="detail_content">';

															

										
										detail_html += '<div class="info_first">';

										
										detail_html += '<div class="in_full_box">';
										detail_html += '<div class="info_memo">';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">예산</div>';
										detail_html += '<div style="padding-left:10px;padding-bottom:15px;">';
										
										detail_html += '<div id="budget_currency_select_list"><div data="KRW">KRW</div><div data="JPY">JPY</div></div>';
										
										detail_html += '<div id="budget_currency" data="KRW" class="fl">KRW</div><div class="fl"><input type="text" class="budget_input" placeholder="0" onkeyup="return isNumberKey(event)"></div><div class="clear"></div></div>';
										detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">메모</div>';
				                        detail_html += '<textarea id="memo_input" data-type="'+_this_memo_type+'" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'"></textarea>';
				                        detail_html += '<div id="memo_save">저장</div>';
				                        detail_html += '</div></div>';	
										
										detail_html += '<div class="in_full_box">';
										
										if(pl_desc != null && pl_desc != ''){
											detail_html += '<div style="line-height:22px;font-size:11px;color:#808080;padding-bottom:20px;font-size:13px;"><img src="/res/img/workspace/new/tip_desc_icon.png" style="vertical-align:top;"> '+pl_desc+'</div>';
										}

										
										
										
				                        detail_html += '<div class="information">';

										detail_html += '<div style="width:100%;padding:15px;border:solid #d4d4d4 1px;">';

										detail_html += '<div style="color:#808080;font-size:13px;padding-left:20px;background:url(\'/res/img/workspace/new/addr_desc_icon.png\') no-repeat 2px 2px;line-height:16px;padding-bottom:10px;">'+pl_addr_en+'</div>';

										detail_html += '<div class="sub_title fl">카테고리</div>';
										detail_html += '<div class="sub_info fl">';
				                        $.each(data.response_data.spot_tag_list, function(key, val) {
				                          if(key < 2){
											if(key == 1){
												detail_html += ', ';
											}
				                            detail_html += val.pl_tag_name;
				                          }
				                        });                    
				                        detail_html += '</div><div class="clear"></div>';

										


				                        if(data.response_data.spot_info.pl_time_arr.length != 0){
				                            var optm_desc ='';
				                            $.each(data.response_data.spot_info.pl_time_arr,function(key,val){               
				                                          optm_desc+= val.open_tm_desc;
				                                          if(key != data.response_data.spot_info.pl_time_arr.length){
				                                              optm_desc += '<br>';
				                                            }
				                              });    
				                           detail_html += '<div class="sub_title fl">영업시간</div><div class="sub_info fl">'+optm_desc+'</div><div class="clear"></div>';
				                        }else{

				                          if(data.response_data.spot_info.pl_time_ko != null){
				                            if(data.response_data.spot_info.pl_time != null && data.response_data.spot_info.pl_time != ''){
				                              detail_html += '<div class="sub_title fl">영업시간</div><div class="sub_info fl">'+data.response_data.spot_info.pl_time+'</div><div class="clear"></div>';
				                            }else if(data.response_data.spot_info.pl_time_ko != null && data.response_data.spot_info.pl_time_ko != ''){
				                              detail_html += '<div class="sub_title fl">영업시간</div><div class="sub_info fl">'+data.response_data.spot_info.pl_time_ko+'</div><div class="clear"></div>';
				                            }
				                          }
				                        }                     


				                        if(pl_tel != null && pl_tel != ''){
				                          detail_html += '<div class="sub_title fl">전화번호</div><div class="sub_info fl">'+pl_tel+'</div><div class="clear"></div>';
				                        }
				                        if(pl_site != null && pl_site != ''){
				                          detail_html += '<div class="sub_title fl">홈페이지</div><div class="sub_info fl"><a href="http://'+pl_site+'" target="_blank">http://'+pl_site+'</a></div><div class="clear"></div>';
				                        }

										detail_html += '<div id="fq_attr_box"></div>';
										detail_html += '<div id="fq_open_box"></div>';

				                        detail_html += '<div class="clear"></div></div><div class="sub_desc">';

				                        detail_html += '</div></div><div class="clear"></div></div></div>';

										//detail_html += '<div style="text-align:center;padding-bottom:10px;"><a href="http://www.tripbs.net" onclick="et_tracker(\'tripbs_ws_spot\',\'1376703\')" target="_blank"><img src="http://www.earthtory.com/res/img/ad/tripbs_ad_01.jpg"></a></div>';
				                        

				                        detail_html += '<div class="info_second">';

				                        detail_html += '<div class="info_section_line"></div>';
				                        detail_html += '<div class="in_full_box">';
				                        detail_html += '<div id="review_title_box" style="font-size:15px;color:#363636;font-weight:bold;padding-bottom:10px;" class="fl">리뷰</div>';
										detail_html += '<div class="map_review_w_btn fr" onclick="et_modal(\'548px\',\'352px\',\'1\',\'0\',\'/ko/modal/review?pl_srl='+pl_srl+'\',\'2\',\'1\');">리뷰쓰기</div>';
										detail_html += '<div class="clear"></div>';
				                        detail_html += '<div id="review_item_box">';
				                        detail_html += '<div style="font-size:13px;text-align:center;padding:20px;padding-bottom:50px;">작성된 리뷰가 없습니다.</div>';
				                        detail_html += '<div class="clear></div></div>';
				                        detail_html += '<div class="clear"></div>';

				                        detail_html += '</div>';
				                        detail_html += '<div class="clear"></div></div>';
				                        detail_html += '</div>';

				                        detail_html += '<div class="info_third" style="padding-top:30px;">';

				                        detail_html += '<div class="in_full_box">';
				                        detail_html += '<div class="blog_item"><div class="blog_title" style="font-size:15px;color:#1a7ad9;padding-bottom:15px;">홍콩 3박 4일 여행_심포니 오브 라이츠 야경</div><div style="font-size:13px;color:#363636;">매일밤 8시에 시작하는 심포니 오브 라이츠는 홍콩섬과 블라블라 하버 사이드에 있는 44개 건물이 참가한다고 한다...</div></div>';
				                        detail_html += '</div></div>';

				                        
				                        detail_html += '</div>';



				                        detail_html += '<div class="clear"></div>';
				                        detail_html += '</div></div>';


				                        detail_html +='</div><div class="detail_view_bottom"></div>';


				                        $('#select_detail_view_spot').html(detail_html);

										_map_height = $( window ).height() - 74;
										_detail_height = _map_height-232;
										$('#detail_content').css('height',_detail_height);



				      if(_this_memo_type == 'clip'){

				        _rel_srl = pl_srl;
				        _pl_type = pl_type;

				        get_memo_clip(_rel_srl, _pl_type);
				      }else if(_this_memo_type == 'inspot'){



				        _set_day = set_day;
				        _set_order =set_order;
				        _rel_srl = pl_srl;
				        get_memo_inspot(_set_day,_set_order,_rel_srl);
						get_budget_inspot(_set_day,_set_order);
				      }else if(_this_memo_type == 'transport'){

				      }else{
						  $('#select_detail_view_spot .info_memo').hide();
					  }

								 if(data.response_data.spot_info.fq_srl){

									get_fq_attr(data.response_data.spot_info.fq_srl);
									get_fq_open(data.response_data.spot_info.fq_srl);
								}


				                  },
				                  complete:function(data){

				                        _city_list_display = $('#city_list').css('display');


				                          $('#select_detail_view_spot').css('left','0px');
				               
				                     _this.show("slide", { direction: "left" }, 200).addClass('visible');

				                     get_blog(pl_srl);
				                     get_tourtype(pl_srl);
				                     get_review(pl_srl);





				                        
				                  }
				              });                    
				            }         
				    }
				}


				function get_fq_attr(fq_srl){
						$.ajax({
							type:'POST',
							url:'/api/spot/get_spot_fq_attr',
							data:{'fq_srl':fq_srl},
							success:function(data){


								_html = '';
								data_no = 0;
								$.each(data.response_data, function(key,val){
									if(val.fq_attr_type != 'serves' && val.fq_attr_type != 'drinks'){
										if(val.fq_attr_type == 'price'){
											_type_name = '가격대';
											if(val.fq_attr_pricetire == 1){
												_disp_val = '저렴';
											}else if(val.fq_attr_pricetire == 2){
												_disp_val = '보통';
											}else if(val.fq_attr_pricetire == 3){
												_disp_val = '비쌈';
											}else if(val.fq_attr_pricetire == 4){
												_disp_val = '매우 비쌈';
											}

										}else{
											if(val.fq_attr_type == 'diningOptions'){
												_type_name = '기타';
											}else if(val.fq_attr_type == 'outdoorSeating'){
												_type_name = '야외 좌석';
											}else if(val.fq_attr_type == 'reservations'){
												_type_name = '예약';
											}else{
												_type_name = val.fq_attr_summary;
											}
											_disp_val = val.fq_attr_display;
										}

										_html += '<div class="sub_title fl">'+_type_name+'</div><div class="sub_info fl">'+_disp_val+'</div>';
										_html += '<div class="clear"></div>';


										data_no++;
										
									}else{

									}
									
								});



								$('#fq_attr_box').html(_html);
							},complete:function(){

							},error:function(data){
							
							}
						});

					}

					function get_fq_open(fq_srl){
						$.ajax({
							type:'POST',
							url:'/api/spot/get_spot_fq_open',
							data:{'fq_srl':fq_srl},
							success:function(data){


								_html = '<div class="sub_title fl">운영시간</div><div class="sub_info fl">';
								_time_html = '';
								$.each(data.response_data, function(key,val){
									_time_html += val.fq_open_days+'&nbsp;&nbsp;'+val.fq_open_r_1;
									if(val.fq_open_r_2 != ''){
										_time_html += ', '+val.fq_open_r_2;
									}
									if(val.fq_open_r_3 != ''){
										_time_html += ', '+val.fq_open_r_3;
									}
									if(val.fq_open_r_4 != ''){
										_time_html += ', '+val.fq_open_r_4;
									}
									if(val.fq_open_r_5 != ''){
										_time_html += ', '+val.fq_open_r_5;
									}
									_time_html += '<br>';

								});
								if(_time_html != ''){
									_html =_html+_time_html+'</div><div class="clear"></div>';			
									$('#fq_open_box').html(_html);
								}

								
							},complete:function(){
								
							}
						});
					}




				function get_tourtype(pl_srl){
				      var data = "pl_srl="+pl_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/spot/get_spot_theme_rate',
				        success: function(data){
				          var html_code=''
				           $.each(data.response_data,function(key, val){
				                  if(key < 3){
				                        html_code += '<div class="si_chart_item fl">';
				                        html_code += '<div class="chart" data-percent="'+val.rate+'" ><div class="chart_icon"><img src="/res/img/chart/tour_type_icon_'+val.code+'.png"></div><span class="percent"></span></div>';
				                        html_code += '<div class="si_chart_item_title">'+val.name+'</div></div>';
				                  }
				           });
				           $('#tour_type_box').html(html_code);
				        },
				        complete:function(){
							$('.chart').easyPieChart({
				            trackColor:'#dfdfdf',
				            barColor:'#9aca40',
				            scaleColor:'#fff',
				            size:88,
				            onStep: function(from, to, percent) {
				                $(this.el).find('.percent').text(Math.round(percent)+'%');
				            }            
				          }); 

				        }
				      });

				}

				function get_review(pl_srl){
				    var data = "pl_srl="+pl_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/review/get_review_pl_list',
				        success: function(data){


				      var review_data_cnt = data.response_result.total_count;
				          $('#rv_title span').text(review_data_cnt);
				      var html = '';
				      if(review_data_cnt > 0){
				                $.each(data.response_data,function(key, val){
									html +='<div class="cmmt_content_box"><div class="cmmt_c_user"><img src="'+val.user_img+'" class="cmmt_content_uimg">';
									html +='<div class="cmmt_c_user_txt"><div class="cmmt_c_user_name">'+val.user_name+'<span>&nbsp;&nbsp;'+val.regdate+'</span>';
									html +='<div class="clear"></div></div>';
									html +='<div class="cmmt_c_user_level"><img src="http://earthtory.com/res/img/common/web/mgrade_8_ko.png" alt=""><div class="rv_cnt">'+val.user_review_cnt+'개의 평가</div>';
									html +='<div class="clear"></div></div></div><div class="clear"></div></div>';
									html +='<div class="cmmt_content"><div class="cmmt_content_info"><span>좋아요!</span></div>'+val.content;
									html +='<div class="cmmt_content_bottom">';
									html +='<div class="clear"></div></div></div></div>';
				                });
				                html += '<div class="clear" style="height:10px;width:1px;"></div>';
				                $('#review_item_box').html(html);
				      }else{
				        
				      }
				      
				    }
				    });
				}

				function get_blog(pl_srl){
				  var data = "pl_srl="+pl_srl;
				      $.ajax({  
				        type:'post',
				        data:data,
				        cache:false,
				        url:'/api/spot/get_spot_blog',
				        success: function(data){

				          if(data.response_data){
				            var blog_data_cnt = data.response_data.length;
				 
				            if(blog_data_cnt > 0){
				                var blog_html = '<div style="font-size:15px;color:#363636;font-weight:bold;padding-bottom:10px;padding-left:20px;">블로그</div>';

				                $.each(data.response_data,function(key_b, val_b){
				                    
				                        blog_html += '<a href="'+decodeURIComponent(val_b.content_url)+'" target="_blank">';
				                        blog_html += '<div class="in_full_box">';
				                        blog_html += '<div class="blog_item"><div class="blog_title" style="font-size:15px;color:#1a7ad9;padding-bottom:5px;font-weight:bold;line-height:20px;">'+val_b.title+'</div><div style="font-size:12px;color:#363636;line-height:20px;">'+val_b.content+'</div></div>';
				                        blog_html += '</div>';
				                        blog_html += '</a>';

				                });         

				                $('.info_third').html(blog_html);
				            }
				          }else{

				            $('.info_third').html('');
				          }
				        }
				      });
				}

				$('#map_tag_select_sub_box').on('click','.item',function(){
				         if($(this).hasClass('on')){
				          $(this).removeClass('on');
				        }else{
				          $(this).addClass('on');
				        }
				        var _select_tag_cnt = $('#map_tag_select_sub_box .item.on').length;

				        if(_select_tag_cnt >0){
				            $('#map_tag_select_box').css('border','solid #f7870f 1px');

				        }else{
				            $('#map_tag_select_box').css('border','solid #c8c8ca 1px');
				        }
				        get_list(ci_srl);
				});

				$('#city_list .list_cat_item').click(function(){
				   $('#input_search').val('');
				  _pre_img = $('.list_cat_item.on img').attr('src');
				  _pre_change_img = _pre_img.replace('_c','_a');
				  $('.list_cat_item.on img').attr('src',_pre_change_img);
				  $('.list_cat_item.on').removeClass('on');

				  _this_img = $(this).find('img').attr('src');
				  _this_change_img = _this_img.replace('_a','_c');
				  $(this).find('img').attr('src',_this_change_img);  
				  $(this).addClass('on');
				  get_list(ci_srl);

				  _this_cat = $('#city_list .list_cat_item.on').attr('data');
				  get_tag_list(ci_srl, _this_cat);
				});




				function OnLoad(ci_lat, ci_lng, ci_srl) {

				var styles = [
				  {
				    stylers: [

				      { saturation: -20 }
				    ]
				  }
				];
					
					 var mapOptions = {
				    zoom: 12,
				    center: new google.maps.LatLng(ci_lat, ci_lng),
					streetViewControl: true,
				    streetViewControlOptions: {
				        position: google.maps.ControlPosition.RIGHT_TOP
				    },
					zoomControl: true,
				    zoomControlOptions: {
				      position: google.maps.ControlPosition.RIGHT_TOP
				    }
				  };
				 
				  mapDiv = document.getElementById(mapDivID);
				  map = new google.maps.Map(mapDiv, mapOptions);
				  map.setOptions({styles: styles});


				google.maps.event.addListenerOnce(map, 'idle', function(){
				   $('#cat_menu li[data="1"]').click();
				});
				google.maps.event.addListener(map, 'idle', function(){

					_this_day_menu = $('#cat_menu li.on').attr('data');
					if(_this_day_menu != 'show_all_day'){
						_ci_srl = $('#city_list').attr('data');
						_is_display = $('#city_list').css('display');
						if(_is_display == 'block'){
							get_list(_ci_srl);
						}
					}
				});



				}





				function get_list(ci_srl){
				  var bounds = map.getBounds();
				  var south_west = bounds.getSouthWest();
				  var north_east = bounds.getNorthEast();
				  var sw_lat = south_west.lat();
				  var sw_lng = south_west.lng();
				  var ne_lat = north_east.lat();
				  var ne_lng = north_east.lng();
				  var sub_cat = $('#cat_menu li.on').attr('data');
				  var input_search = $('#input_search').val().replace(' ','');
				  var order = $('#list_order').val();

				  var is_hotel = $('#cat_menu li.on').attr('data');

				  if(is_hotel == 'hotel'){
				      sub_cat='h';
				  }else{
				      sub_cat = sub_cat;    
				  }

				  var search_type = $('#search_type').val();







				   var search_tag_g = '';
				      $('#map_tag_select_sub_box .item.on').each(function(){
				          search_tag_g = search_tag_g + $(this).attr('data') +',' ;
				      });


				      search_tag_g = search_tag_g.slice(0,-1);

				var _select_cat = $('.list_cat_item.on').attr('data');

				      var load_ci = $('#city_list').attr('data');
				      if(load_ci == '0'){
				        load_ci = ci_srl;
				      }
				$('#city_list').attr('data', load_ci);
				if(_select_cat == '5'){
					      var data='ci_srl='+load_ci+'&pn_srl='+pn_srl;
				  		 var call_url = '/api/clip/get_clip_list'; 
				}else{

						 if(_select_cat == '1'){
							 is_hotel= 1;
						 }else{
							 is_hotel= 0;
						 }

						  if(input_search == '' && search_tag_g == ''){
						  var data = 'sw_lat='+sw_lat+'&sw_lng='+sw_lng+'&ne_lat='+ne_lat+'&ne_lng='+ne_lng+'&pl_ci='+load_ci+'&pl_category='+_select_cat+'&pn_srl='+pn_srl+'&search_type=city&is_hotel='+is_hotel;
						  }else{
							if(input_search == ''){
								var data = 'pl_ci='+load_ci+'&pl_tag_groups='+search_tag_g+'&pn_srl='+pn_srl+'&search_type=city&is_hotel='+is_hotel;
							}else if(search_tag_g == ''){
								var data = 'pl_ci='+load_ci+'&search_value='+input_search+'&pn_srl='+pn_srl+'&search_type='+search_type+'&is_hotel='+is_hotel;
							}else{
								var data = 'pl_ci='+load_ci+'&search_value='+input_search+'&pl_tag_groups='+search_tag_g+'&pn_srl='+pn_srl+'&search_type='+search_type+'&is_hotel='+is_hotel;
							}
						  }
						  var call_url ='/api/spot/get_spot_list_map2';
				}


							$.ajax({	
								type:'post',
								data:data,
								url:call_url,
								success: function(data){
										
										deleteMarkers(0);
										  
										$('#city_list .list_box').html('');
										if(_select_cat == '5'){
											result = data.response_data.clip_info;
										}else{
											result = data.response_data;
										}

									$.each(result, function(key, val) {

						if(_select_cat == 1){

							if(val.ht_name_ko){
								var _ht_name = val.ht_name_ko;
							}else{
								var _ht_name = val.ht_name_en;
							}
							if(val.ht_img_url){
								var _ht_img = val.ht_img_url;
							}else{
								var _ht_img = '/res/img/common/no_img/hotel.png';
							}
								var list_html = get_city_hotel_list_html(0, val, key);
								create_marker(val.ht_lat,val.ht_lng,_ht_name,'100', _ht_img,val.ht_srl,key,val.ht_price,'n',val.ht_popularity,0,0,val.ht_star_rating,0,0,2,val.ht_ci,val.agoda_url);
						}else if(_select_cat == 5){
							if(val.name){
								var _pl_name = val.name;
							}else{
								var _pl_name = '';
							}
							if(val.img && val.img != 'none'){
								var _pl_img = val.img;
							}else{
								if(val.pl_sub_category == 301){
									var _pl_img = '/res/img/common/no_img/sight.png';
								}else if(val.pl_sub_category == 302){
									var _pl_img = '/res/img/common/no_img/les.png';
								}else if(val.pl_sub_category == 303){
									var _pl_img = '/res/img/common/no_img/night.png';
								}else if(val.pl_sub_category == 200){
									var _pl_img = '/res/img/common/no_img/food.png';
								}else if(val.pl_sub_category == 400){
									var _pl_img = '/res/img/common/no_img/shopping.png';
								}
							}
								var list_html = get_clip_list_html(0, val, key);
								create_marker(val.lat,val.lng,_pl_name,val.pl_sub_category, _pl_img,val.pl_srl,key,val.pl_tags,val.clip_yn,val.pl_rate,0,0,val.pl_clip_cnt,0,0,val.pl_type,val.ci_srl);

						}else{
							if(val.pl_name){
								var _pl_name = val.pl_name;
							}else{

								var _pl_name = val.pl_name_en;
							}
							if(val.pl_img_url && val.pl_img_url != 'none'){
								_pl_img = val.pl_img_url;
							}else{
								if(val.pl_sub_category == 301){
									var _pl_img = '/res/img/common/no_img/sight.png';
								}else if(val.pl_sub_category == 302){
									var _pl_img = '/res/img/common/no_img/les.png';
								}else if(val.pl_sub_category == 303){
									var _pl_img = '/res/img/common/no_img/night.png';
								}else if(val.pl_sub_category == 200){
									var _pl_img = '/res/img/common/no_img/food.png';
								}else if(val.pl_sub_category == 400){
									var _pl_img = '/res/img/common/no_img/shopping.png';
								}
							}
								var list_html = get_city_list_html(0, val, key);
								create_marker(val.pl_lat,val.pl_lng,_pl_name,val.pl_sub_category, _pl_img,val.pl_srl,key,val.pl_tags,val.clip_yn,val.rate,0,0,val.pl_clip_cnt,0,0,0,val.pl_ci);
						}

										$('#city_list .list_box').append(list_html);

									});

									 if(input_search == '' && search_tag_g == '' && _select_cat != '1'){

												var total_view_html = '<div class="total_view_item">표시되지 않은 장소: '+data.response_result.hidden_spot_cnt+'개<div class="total_view_sub_text">지도에서 전체 결과를 확인하려면 여기를<br>클릭하세요.</div></div>';
												$('#city_list .list_box').append(total_view_html);
												if(data.response_result.hidden_spot_cnt == 0){
												  $('.total_view_item').hide();
												}else{
												  $('.total_view_item').hide();
												}
									  }else{
										   $('.total_view_item').hide();
									  }

								 list_html = null;
								  data = null;
								},
							complete:function(){
							 $('#map_spot_list').scrollTop(0);


									  


											  $( ".list_box .day_spot_item" ).draggable({

															connectToSortable: "#schedule_detail_box",
															helper: "clone",
												  revert: false,
												  start: function (e, ui) {
													$(ui.placeholder).css('width', 0);
													$('#schedule_detail_box .tip_box').hide();
													$(ui.helper).find('.spot_to_inspot').hide();
													$(ui.helper).find('.img_box').css('width',62);
													$(ui.helper).find('.img_box').css('height',55);
													$(ui.helper).find('.img_box img').css('width',62);
													$(ui.helper).find('.img_box img').css('height',55);
													$(ui.helper).find('.include_pn_day').hide();
													$(ui.helper).css('height',86);
												  },
												  change: function (e, ui) {
													$(ui.placeholder).css('width', 'auto');
												  },
												  stop: function (e, ui) {
													day_spot_item_cnt = $('#schedule_detail_box .day_spot_item').length;
													if(day_spot_item_cnt == 0){
													  $('#schedule_detail_box .tip_box').show();
													}
												  }

																													   
											   }).disableSelection();

									}
							});


				}

				  $('#map_spot_list, #select_detail_view_spot').on('click','.clip_spot_toggle_btn',function(){
				    var _this_pl_srl = $(this).attr('data');
				    var _this_id = $(this).parent().parent().parent().parent().attr('id');
				    var _this_p_box = $('.list_box .day_spot_item[data-rel_srl="'+_this_pl_srl+'"]');
				    var _this_detail_box = $('#select_detail_view_spot[data="'+_this_pl_srl+'"]');
				    var _this_data_no = _this_p_box.attr('data-no');

				    var _this_is_clip = $(this).attr('data-is_clip');
				    var _this_cat = $('#select_detail_view_spot').attr('data-cat');
				    
				    if(_this_cat == '100'){
				      hotel_clip(_this_pl_srl);
				    }else{
				      spot_clip_api(_this_pl_srl);
				      _this_clip_cnt = $('#select_detail_view_spot .clip_cnt').html();
				      _this_clip_cnt = _this_clip_cnt.replace(',','');
				    }

				    
				    
				    if(_this_is_clip == "n"){
				      $(this).addClass('on');
				      $(this).attr('data-is_clip','y');
				      
				        _this_p_box.find('.clip_spot_toggle_btn').addClass('on');
				        _this_p_box.find('.clip_spot_toggle_btn').attr('data-is_clip','y');
				        _this_detail_box.find('.clip_spot_toggle_btn').addClass('on');
				        _this_detail_box.find('.clip_spot_toggle_btn').attr('data-is_clip','y');
				        $('#detail_view_menu .mn_item').addClass('on_clip');
				        $('#detail_view_menu .mn_item[data="memo"]').fadeIn();
				      
				      markers['only_clip_0'][_this_data_no].clip_yn = "y";

				      if(_this_cat != '100'){
				       new_clip_cnt = Number(_this_clip_cnt)+1;
				      }else{
				              $.each(ht_dt_arr, function(key, val){
				                if(val.ht_id == _this_ht_id){
				                   _this_dt_arr_no = key;
				                   return false;
				                }
				              });
				              $.each(filter_arr, function(key, val){
				                if(val.ht_id == _this_ht_id){
				                   _this_arr_no = key;
				                   return false;
				                }
				              });              
				              ht_dt_arr[_this_dt_arr_no].clip_yn = 'y';
				              filter_arr[_this_arr_no].clip_yn = 'y';
				      }
				    }else{
				      
				        _this_p_box.find('.clip_spot_toggle_btn').removeClass('on');
				        _this_p_box.find('.clip_spot_toggle_btn').attr('data-is_clip','n');
				        _this_detail_box.find('.clip_spot_toggle_btn').removeClass('on');
				        _this_detail_box.find('.clip_spot_toggle_btn').attr('data-is_clip','n');
				        $('#detail_view_menu .mn_item').removeClass('on_clip');
				        $('#detail_view_menu .mn_item[data="memo"]').hide();
				        
				      
				      markers['only_clip_0'][_this_data_no].clip_yn = "n";
				      
				      if(_this_cat != '100'){
				          new_clip_cnt = Number(_this_clip_cnt)-1;
				      }else{
				              $.each(ht_dt_arr, function(key, val){
				                if(val.ht_id == _this_ht_id){
				                   _this_dt_arr_no = key;
				                   return false;
				                }
				              });
				              $.each(filter_arr, function(key, val){
				                if(val.ht_id == _this_ht_id){
				                   _this_arr_no = key;
				                   return false;
				                }
				              });              
				              if(_this_cat == _now_cate){
				                ht_dt_arr[_this_dt_arr_no].clip_yn = 'n';
				                filter_arr[_this_arr_no].clip_yn = 'n';
				              }else{
				                  $.each(markers['only_clip_1'], function(key, val){
				                      if(val.pl_srl == _this_pl_srl){
				                        _this_data_no = key;
				                        return false;
				                      }
				                });              
				              }

				      }
				      

				    }
				  });

				function spot_clip_api(pl_srl){
				  var data = 'pl_srl='+pl_srl;
				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/spot/set_clip_spot',
				    success: function(data){
				      $('.map_list_spot_item[data="'+pl_srl+'"]').find('.list_item_clip_cnt').html(number_format(data.response_result.clip_cnt));
				      $('#select_detail_view_spot[data="'+pl_srl+'"]').find('.clip_cnt').html(number_format(data.response_result.clip_cnt));
				    }
				  });  
				}

				function hotel_clip(ht_id){
				  var data = 'ht_srl='+ht_id;

				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/hotel/set_clip_hotel',
				    success: function(data){
				    }
				  });  
				}

				function user_spot_clip(pl_srl){
				  var data = 'pl_srl='+pl_srl;

				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/spot/set_clip_user_spot',
				    success: function(data){

				    }
				  });  
				}

				function flight_clip(ar_srl){
				  var data = 'ar_srl='+ar_srl;

				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/air/set_clip_air',
				    success: function(data){

				    }
				  });  
				}

				function del_transport(tp_srl){
				  var data = 'tp_srl='+tp_srl;

				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/transport/del_transport_info',
				    success: function(data){

				    deleteMarkers(0);

				    if(transport_path != ''){

				      $.each(transport_path,function(key, val){
				        transport_path[key].setMap(null);
				      });
				      
				    }    
				    get_transport();      
				    }
				  });  
				}

				function get_clip_list_a(ci_srl,is_clip){
				  var sub_cat = $('#cat_menu li.on').attr('data');
				  var data = 'ci_srl='+ci_srl;


				  $.ajax({  
				    type:'post',
				    data:data,
				    url:'/api/clip/get_clip_list',
				    success: function(data){
				       
				       deleteMarkers(1);
				        if(is_clip == 1){
				            $('#map_spot_list').html('');
				        }

				      j = 0;
				      is_view_clip = $('#clip_view_btn').attr('data');
				      $.each(data.response_data.clip_info, function(key, val) {
				        if(is_view_clip == '1'){
				              if(val.pl_sub_category != sub_cat && val.name){
				                create_marker(val.lat,val.lng,val.name,val.pl_sub_category, val.img,val.pl_srl,j,val.pl_tags,val.clip_yn,val.pl_rate,0,0,val.pl_clip_cnt,1,val.pl_type,val.ci_srl);
				                j++;
				              }
				        }

				       if(is_clip == 1 && val.name){
				                var list_html = '<div class="map_list_spot_item" data="'+val.pl_srl+'" data-no="'+j+'" data-cat="'+val.pl_sub_category+'" data-clip_yn="'+val.clip_yn+'"><div class="fl image_box"><img src="'+val.img+'"></div><div class="fl content_box"><div class="spot_title">'+val.name+'</div>';
				                list_html = list_html+'<div class="spot_tag">'+val.pl_tags+'</div><div class="item_sub_info_box"><div class="list_item_clip_cnt fl">'+commaNum(val.pl_clip_cnt)+'</div>';
				                            if(val.pl_rate != 0){
				                              this_rate = Number(val.pl_rate);
				                              list_html = list_html+'<div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+Number(this_rate*2).toFixed(1)+' / 10</div>';
				                            }
				                            list_html = list_html+'<div class="clear"></div></div><div class="clip_btn on">클립</div></div></div><div class="clear"></div>';
				                $('#map_spot_list').append(list_html);      
				        }


				      });
				    list_html = null;
				          data = null;
				    },complete:function(){
				$('#map_spot_list').scrollTop(0);
				    }
				  });
				}






				  function get_ht_details(ht_id, polling_url, cur_day, cur_order, set_day, set_order, pn_srl, pl_type){

				var data = {'ht_srl':ht_id};
				  $.ajax({  
				    type:'post',
				    data:data,
				    url:'/api/spot/get_et_hotel_info',
				    success: function(data){
						result = data.response_data;
						  var _this = $('#select_detail_view_spot');

						  var detail_html = '';
						  detail_html += '<div class="detail_view_full_box"><div id="detail_close_btn"></div>';
						  detail_html += '<div class="spot_title">'+result.ht_name+'</div>';
						  detail_html += '<div class="spot_img"><img src="'+result.ht_img_url+'" onload="check_blankimg('+result.ht_srl+',\'cimg_big_info\')" class="cimg_big_info" data-ht_img-srl="'+result.ht_srl+'"><div class="spot_cnt_box">';
						  detail_html += '</div>';
						  detail_html += '<div class="clip_btn_box">';
						  detail_html += '</div></div>';

						  detail_html += '<div id="detail_content">';

						  detail_html += '<div class="info_first">';
						  
						  detail_html += '<div style="padding:15px;padding-bottom:10px;">';
						  detail_html += '<div class="tooltip_star_rank fl" style="font-size:13px;margin-top:3px;">'+result.ht_star_rating+'</div><div class="tooltip_cnt_line fl" style="margin-top:3px;"></div><div class="tooltip_review_rate fl"  style="font-size:13px;margin-top:3px;">'+result.ht_popularity+' / 10</div>';
						  detail_html += '<a href="http://www.agoda.com/ko-kr'+result.agoda_url+'?cid=1607809" target="_blank" class="fr" style="border:solid #3099dd 1px;color:#fff;background:#49b2e9;padding:7px 10px">자세히 보기</a>';
						  if(result.ht_price){
							  detail_html += '<div class="fr" style="margin-top:5px;margin-right:5px;"><span style="font-size:16px;color:#ff6235">￦'+number_format(result.ht_price)+'</span>/1박</div>';
						  }
						  detail_html += '<div class="clear"></div></div>';

											detail_html += '<div class="info_memo" style="display:none;">';
											detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;padding-top:10px;">예산</div>';
											detail_html += '<div style="padding-left:20px;padding-bottom:15px;">';

											detail_html += '<div id="budget_currency_select_list"><div data="KRW">KRW</div><div data="JPY">JPY</div></div>';
											
											detail_html += '<div id="budget_currency" class="fl" data="KRW">KRW</div><div class="fl"><input type="text" class="budget_input" placeholder="0" onkeyup="return isNumberKey(event)"></div><div class="clear"></div></div>';
											detail_html += '<div style="font-size:15px;color:#363636;font-weight:bold;text-align:left;padding-bottom:10px;padding-left:8px;">메모</div>';
											detail_html += '<textarea id="memo_input" data-type="inspot" data-set_day="'+set_day+'" data-set_order="'+set_order+'" data-pl_type="'+pl_type+'"></textarea>';
											detail_html += '<div id="memo_save">저장</div>';
											detail_html += '</div></div>';
						  detail_html += '<div class="transport_detail_inner_box" style="border:0px;">';
						  detail_html += '<div style="line-height:22px;font-size:13px;color:#808080;padding-bottom:20px;">';

						  if(result.ht_desc_ko != ''){
							  detail_html += '<img src="/res/img/workspace/new/tip_desc_icon.png" style="vertical-align:top;"> '+result.ht_desc_ko;
						  }

						  //detail_html += '<div style="text-align:center;padding-top:20px;"><a href="http://www.tripbs.net" onclick="et_tracker(\'tripbs_ws_ht\',\'1376703\')" target="_blank"><img src="http://www.earthtory.com/res/img/ad/tripbs_ad_01.jpg"></a></div>';

						  detail_html += '</div><div class="clear"></div>';
						  if(result.checkin && result.checkout){
							  detail_html += '<div style="width:333px;height:67px;border:solid #d4d4d4 1px;">';
							  detail_html += '<div class="fl" style="width:144px;height:45px;margin-top:11px;margin-left:20px;background:url(\'/res/img/workspace/new/checkin_icon.png\') no-repeat;padding-left:50px;color:#555555;padding-top:5px;"><div>체크인</div><div style="font-weight:bold;padding-top:10px;font-size:14px;">'+result.checkin.substring(0,result.checkin.length-3)+'</div></div>';
							  detail_html += '<div class="fl" style="width:1px;height:45px;margin-top:11px;background:#d4d4d4"></div>';
							  detail_html += '<div class="fl" style="width:140px;height:45px;margin-top:11px;margin-left:24px;background:url(\'/res/img/workspace/new/checkout_icon.png\') no-repeat;padding-left:50px;color:#555555;padding-top:5px;"><div>체크아웃</div><div style="font-weight:bold;padding-top:10px;font-size:14px;">'+result.checkout.substring(0,result.checkout.length-3)+'</div></div>';
							  detail_html += '<div class="clear" style="height:50px;"></div>';
							  detail_html += '</div>';
						  }
						  detail_html += '<div class="fl"></div><div class="fl"></div><div class="clear"></div>';
						  detail_html += '</div></div>';
						  detail_html += '</div>';
						  $('#select_detail_view_spot').html(detail_html);
							get_memo_inspot(set_day,set_order,ht_id);
							get_budget_inspot(set_day,set_order);
					},complete:function(data){

										var _this = $('#select_detail_view_spot');
										_map_height = $( window ).height() - 74;
										_detail_height = _map_height-229;
										$('#detail_content').css('height',_detail_height);

				                        _city_list_display = $('#city_list').css('display');


				                      $('#select_detail_view_spot').css('left','0px');

				                     _this.show("slide", { direction: "left" }, 200).addClass('visible');
					}
				  });



				  }

				$('.list_box').on('click','.total_view_item',function(e){
				  map.setZoom(8);
				  get_list(ci_srl);
				});

				function set_hotel_info(rel_srl, cur_day, cur_order, set_day, set_order, pn_srl, pl_type){

				  $.each(ht_arr, function(keys, vals){
				        if(vals.ht_id == rel_srl){

				           ht_amenities_text = "";
				        $.each(vals.amenities, function(keys, val_am){
				            if(keys > 0){
				              ht_amenities_text += ',';
				            }
				            ht_amenities_text += val_am;
				          });
				           ht_lat = vals.lat;
				           ht_lng = vals.lng;
				           ht_name = vals.name;
				           ht_addr = vals.address;
				           ht_star_rating = vals.rate;

				           ht_popularity = Number(vals.po_val)*10;
				           ht_price = vals.price_total;
				           ht_desc = vals.ht_desc;
				           ht_amenities = ht_amenities_text;
				           ht_img_url = vals.img;

				          return false;
				        }
				  });
				   
				   var data = {'ht_srl':rel_srl, 'ht_ci':ci_srl, 'ht_lat':ht_lat, 'ht_lng':ht_lng, 'ht_name':ht_name, 'ht_addr':ht_addr, 'ht_star_rating':ht_star_rating, 'ht_popularity':ht_popularity, 'ht_price':ht_price, 'ht_desc':ht_desc, 'ht_amenities':ht_amenities, 'ht_img_url':ht_img_url};

				  $.ajax({  
				    type:'post',
				    data:data,
				    cache:false,
				    url:'/api/hotel/set_hotel_info',
				    success: function(data){

				    },complete:function(){
				      if(set_day){
				        set_plan_inspot(pn_srl, cur_day, cur_order, set_day, set_order, rel_srl, pl_type);
				      }

				    }
				  });
				}



				function setAllMap(map,only_clip) {
				  for (var i = 0; i < markers['only_clip_'+only_clip].length; i++) {
				    markers['only_clip_'+only_clip][i].setMap(map);
				  }
				}


				function clearMarkers(only_clip) {
				  setAllMap(null,only_clip);
				}



				function deleteMarkers(only_clip) {
				  clearMarkers(only_clip);
				  markers['only_clip_'+only_clip] = [];
				}





				function create_marker(lat, lng, pl_name, pl_cat, pl_img,pl_srl,key,pl_tags,clip_yn,pl_rate,pl_po_val,pl_po_txt,pl_clip_cnt,only_clip,set_order,pl_type,_ci_srl,link_url){

				var mk_img_1 = '/res/map/marker/'+pl_cat+'_'+set_order+'.png';
				var mk_img_1_over = '/res/map/marker/'+pl_cat+'_'+set_order+'r.png';
				var mk_img_0 = '/res/map/marker/n'+pl_cat+'_'+set_order+'.png';
				var mk_img_0_over = '/res/map/marker/n'+pl_cat+'_'+set_order+'r.png';



				      
				      if(only_clip == 1 || clip_yn == 'y'){
				        var image = '/res/map/marker/'+pl_cat+'_'+set_order+'.png';
				        var image_over = '/res/map/marker/'+pl_cat+'_'+set_order+'r.png';
				      }else{
				        var image = '/res/map/marker/n'+pl_cat+'_'+set_order+'.png';
				        var image_over = '/res/map/marker/n'+pl_cat+'_'+set_order+'r.png';
				      }
				  
					  var myLatlng = new google.maps.LatLng(lat, lng);


				      if(pl_cat == '100'){
				          var tooltip_content = '<div class="tooltip_full_box"><div class="tooltip_img fl"><img src="'+pl_img+'" onload="check_blankimg('+pl_srl+',\'cimg_thum_map_box\')" class="cimg_thum_map_box" data-ht_img-srl="'+pl_srl+'"></div><div class="tooltip_info fl">';
						  if(pl_name){
							  tooltip_content += '<div class="tooltip_title" style="padding-bottom: 7px;">'+cutStr(pl_name,26)+'</div>';
						  }
				         if(pl_rate != 0){
				          tooltip_content +='<div class="tooltip_star_rank fl">'+commaNum(pl_clip_cnt)+'</div><div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+Number(pl_rate).toFixed(1)+' / 10</div>';
						 }
				         if(pl_tags){
					         tooltip_content +='<div class="tooltip_cnt_info_box"><div class="tooltip_tag" style="font-size:16px;color:#ff6235">￦'+number_format(pl_tags)+'</div>';
						 }
				         
				          
				         tooltip_content = tooltip_content+'<div class="clear"></div></div></div><div class="clear"></div>';
						 tooltip_content += '<div class="tooltip_detail_bottom_box">';
						 tooltip_content += '<a class="fl tooltip_detail_btn"  href="http://www.agoda.com/ko-kr'+link_url+'?cid=1607809" target="_blank">자세히 보기</a>';
						 tooltip_content += '<div class="fr tooltip_add_inspot_btn" onclick="marker_to_inspot('+pl_srl+','+_ci_srl+','+pl_type+')">+ 일정에 추가</div>';
						 tooltip_content += '<div class="clear"></div></div><div class="clear"></div></div>';
				      }else{
				         var tooltip_content = '<div class="tooltip_full_box"><div class="tooltip_img fl"><img src="'+pl_img+'"></div><div class="tooltip_info fl">';
						 if(pl_name){
							 tooltip_content += '<div class="tooltip_title">'+cutStr(pl_name,26)+'</div>';
						 }
				         if(pl_tags){
				          tooltip_content +='<div class="tooltip_tag">'+cutStr(pl_tags,27)+'</div>';
				         }
				         tooltip_content +='<div class="tooltip_cnt_info_box"><div class="tooltip_clip_cnt fl">'+commaNum(pl_clip_cnt)+'</div>';
				         if(pl_rate != 0){
				           tooltip_content = tooltip_content+'<div class="tooltip_cnt_line fl"></div><div class="tooltip_review_rate fl">'+Number(pl_rate*2).toFixed(1)+' / 10</div>';
				         }
				         tooltip_content = tooltip_content+'<div class="clear"></div></div></div><div class="clear"></div>';
						 tooltip_content += '<div class="tooltip_detail_bottom_box">';
						 tooltip_content += '<div class="fl tooltip_detail_btn" onclick="detail_view_spot(\''+pl_srl+'\', \''+pl_cat+'\',\''+key+'\',\''+only_clip+'\',\''+clip_yn+'\',\''+pl_type+'\',\''+set_order+'\',\''+set_order+'\')">자세히 보기</div>';
						 tooltip_content += '<div class="fr tooltip_add_inspot_btn" onclick="marker_to_inspot('+pl_srl+','+_ci_srl+','+pl_type+')">+ 일정에 추가</div>';
						 tooltip_content += '<div class="clear"></div></div><div class="clear"></div></div>';
				      }

				      if(pl_cat == '100' && pl_tags != ''){
							var _this_price = currency_code+' '+number_format(pl_tags);
							var marker = new MarkerWithLabel({
									position: myLatlng,
									map: map,
									icon: image,
									tooltip: tooltip_content,
									title_en : _this_price,
									pl_srl: pl_srl,
									pl_type: pl_type,
									set_order:set_order,
									clip_yn: clip_yn,
									labelContent: _this_price,
									labelAnchor: new google.maps.Point(-9 , 32),
									labelClass: "labels", // the CSS class for the label
									labelZIndex: 1,
									labelStyle: {opacity: 1.0}
								});	
					}else{
						  var marker = new google.maps.Marker({
							  position: myLatlng,
							  map: map,
							  icon: image,
							  clip_yn:clip_yn,
							  set_order:set_order,
							  pl_srl:pl_srl,
							  pl_type:pl_type
						  });
					}

							

					  markers['only_clip_'+only_clip].push(marker);

							if(set_order > 0){
								  marker.setZIndex(999);
							}else{
								  marker.setZIndex(9);
							}


				              



					google.maps.event.addListener(marker, "mouseover", function(){

				            _this_is_clip_yn = markers['only_clip_'+only_clip][key].clip_yn;
				            if(_this_is_clip_yn == 'y'){
				                image_over = mk_img_1_over;
				            }else{
				                image_over = mk_img_0_over;
				            }
				    
				          var _this = $('#select_detail_view_spot');
				          var now_pl_srl = _this.attr('data');

				          
				          if(pl_srl != now_pl_srl){    
							if(set_order > 0){
								  marker.setZIndex(999);
							}else{
								  marker.setZIndex(9);
							}
						marker.setIcon(image_over);  
				          }
				          
					});  



					google.maps.event.addListener(marker, "mouseout", function(){
						 if(markers['only_clip_'+only_clip][key]){
								_this_is_clip_yn = markers['only_clip_'+only_clip][key].clip_yn;
								if(_this_is_clip_yn == 'y'){
									image = mk_img_1;
								}else{
									image = mk_img_0;
								}

							  var _this = $('#select_detail_view_spot');
							  var now_pl_srl = _this.attr('data');
							  
							  if(pl_srl != now_pl_srl){
							if(set_order > 0){
								  marker.setZIndex(999);
							}else{
								  marker.setZIndex(9);
							}
							marker.setIcon(image);  
							  }
						 }

					});  	


				             

					google.maps.event.addListener(marker, "click", function(){
				            _this_menu = $('#cat_menu .on').attr('data');
				            _this_parent_box = '';


							if(infoBubble){
								infoBubble.close();
							}

							infoBubble = new InfoBubble({
									content: '<div>Some label</div>',
									shadowStyle: 1,
									padding: 0,
									overflow: 'hidden',
									backgroundColor: 'rgb(255,255,255)',
									borderRadius: 0,
									arrowSize: 10,
									borderWidth: 1,
									borderColor: '#ddd',
									disableAutoPan: true,
									hideCloseButton: false,
									arrowStyle: 0,
									maxWidth: 345,
									minWidth: 345,
									minHeight: 155,
									maxHeight: 155,
								});

							infoBubble.setContent(tooltip_content);	



							infoBubble.open(map, marker);

				            if(_this_menu == 'clip'){
				                _this_parent_box = 'clip_list';
				            }else if(_this_menu == 'city'){
				              _this_parent_box = 'city_list';
				            }else if(_this_menu == 'hotel'){
				              _this_parent_box = 'hotel_list';
				            }else{
								_this_parent_box = 'city_list';
							}

				            if(only_clip == 1 && _this_menu != 'c'){
				                $('.day_spot_item').removeClass('hover');
				                $('#schedule_detail_box .day_spot_item[data-rel_srl="'+pl_srl+'"]').addClass('hover');

				                scroll_h = $('#'+_this_parent_box+' .list_box').scrollTop()+$('#schedule_detail_box .day_spot_item[data-rel_srl="'+pl_srl+'"]').offset().top;
				                $('#schedule_detail_box').animate({
				                scrollTop: scroll_h-350}, 500);

				            }else{
				                $('.day_spot_item').removeClass('hover');
				                $('.list_box .day_spot_item[data-rel_srl="'+pl_srl+'"]').addClass('hover');
				                
				                scroll_h = $('#'+_this_parent_box+' .list_box').scrollTop()+$('.list_box .day_spot_item[data-rel_srl="'+pl_srl+'"]').offset().top;
				                $('.list_box').animate({
				                scrollTop: scroll_h-350}, 500);
				            }

					});  	

				}







				function showDirections(toAddress,pl_srl,pl_type,_this_order) {
				  if( document.getElementById("ddFrame") ){
				    directionsDisplay.setMap(null);
				    mapDiv.removeChild(document.getElementById("ddFrame"));
				  }


				  startAddress = $('#schedule_detail_box .day_spot_item[data-rel_srl="'+pl_srl+'"][data-pl_type="'+pl_type+'"][data="'+_this_order+'"]').prev('div').attr('data-latlng');


				  var ddFrame = document.createElement('div');
				  ddFrame.setAttribute('id', 'ddFrame');
				  mapDiv.appendChild(ddFrame);
				  centerBox("ddFrame", "map");
				  ddBoxDiv = document.createElement('div');
				  ddBoxDiv.setAttribute('id', 'ddBox');
				  ddFrame.appendChild(ddBoxDiv);
				  ddBoxDiv.style.position = "absolute";
				  ddBoxDiv.style.left = "5px";
				  var ddBoxClose = document.createElement('a');
				  ddBoxClose.setAttribute('id', 'ddBoxClose');
				  ddFrame.appendChild(ddBoxClose);
				  ddBoxClose.style.position = "absolute";
				  ddBoxClose.style.zIndex = "10";
				  ddBoxClose.style.top = "0px";
				  ddBoxClose.style.left = (ddFrame.offsetWidth - ddBoxClose.offsetWidth - 4) + "px";
				  ddBoxClose.onclick = function() { 
				    closeDirections();
				  };
				  var ddBoxPrint = document.createElement('a');
				  ddBoxPrint.setAttribute('id', 'ddBoxPrint');
				  ddFrame.appendChild(ddBoxPrint);

				  ddBoxPrint.innerHTML = "";
				  ddBoxPrint.style.position = "absolute";
				  ddBoxPrint.style.zIndex = "10";
				  ddBoxPrint.style.top = "4px";
				  ddBoxPrint.style.left = (ddFrame.offsetWidth - ddBoxClose.offsetWidth - 29) + "px";
				  ddBoxPrint.setAttribute("href", "clip_map/print/print.html?start=" + escape(startAddress) + "&end=" + escape(toAddress));
				  ddBoxPrint.setAttribute("target", "_blank");
				  directionsDisplay.setMap(null);
				  directionsDisplay.setMap(map);
				  directionsDisplay.setPanel(ddBoxDiv);

				  var loadStr = "from: " + startAddress + " to: " + toAddress;


				    var request = {
				        origin: startAddress, 
				        destination: toAddress,
				        travelMode: google.maps.TravelMode.TRANSIT,
				    transitOptions: {
				    departureTime: new Date(1337675679473)
				  },
				  unitSystem: google.maps.UnitSystem.METRIC
				    };


				    directionsService.route(request, function(response, status) {
				      if (status == google.maps.DirectionsStatus.OK) {
				        directionsDisplay.setDirections(response);
				    return false;
				      } else {
				    alert('3초후에 다시 조회해주세요.');
				    handleDDErrors();  
				    return false;
				    }
				    });

				}





				function closeDirections() {
				    directionsDisplay.setMap(null);
				    mapDiv.removeChild(document.getElementById("ddFrame"));
				  if(map.getZoom() < 14){
				    smoothZoom(map, 14, map.getZoom(), true);
				  }else{
				    smoothZoom(map, 14, map.getZoom(), false);
				  }


				}

				    function smoothZoom (map, level, cnt, mode) {

				    if(mode == true) {

				      if (cnt >= level) {
				        return;
				      }
				      else {
				        var z = google.maps.event.addListener(map, 'zoom_changed', function(event){
				          google.maps.event.removeListener(z);
				          smoothZoom(map, level, cnt + 1, true);
				        });
				        setTimeout(function(){map.setZoom(cnt)}, 80);
				      }
				    } else {
				      if (cnt <= level) {
				        return;
				      }
				      else {
				        var z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
				          google.maps.event.removeListener(z);
				          smoothZoom(map, level, cnt - 1, false);
				        });
				        setTimeout(function(){map.setZoom(cnt)}, 80);
				      }
				    }
				  } 


				function centerBox(child, parent) {
				  var h = document.getElementById(child).offsetHeight;
				  var a = Math.round(parseInt(document.getElementById(parent).offsetHeight, 10) / 2);
				  var b = Math.round(h / 2);
				  var c = (a - b) + "px";
				  document.getElementById(child).style.top = c;
				  var w = document.getElementById(child).offsetWidth;
				  var x = Math.round(parseInt(document.getElementById(parent).offsetWidth, 10) / 2);
				  var y = Math.round(w / 2);
				  var z = x - y;
				  document.getElementById(child).style.left = z + "px";
				}

				function go_clip_list(_ci_srl, _ci_name){
				  $('#clip_list').attr('data',_ci_srl);
				  $('#clip_list .list_title span').text(_ci_name);
				  $('#cat_menu li[data="clip"]').click();
				}
				function go_transport(){
				  $('#cat_menu li[data="transport"]').click();
				}

				function go_city_list(){
				  $('#cat_menu li[data="city"]').click();  
				}



				function city_center(){
				          var _city_latlng = new google.maps.LatLng(pub_ci_lat, pub_ci_lng);
				          map.setCenter(_city_latlng);
				}

				$('#key_hotelsearch').blur(function(){
				  
				  $('body').on('click', function(e){
				    
				    if($(e.target).parents("#key_hotelsearch_autocomplete").length > 0 || $(e.target).attr('id') == 'key_hotelsearch'){

				    }else{
				      $('#key_hotelsearch_autocomplete').hide();
				    }
				  });
				});

				$('#key_hotelsearch').focus(function(){
				  if($('#key_hotelsearch_autocomplete').html()!=''){
				    $('#key_hotelsearch_autocomplete').show();
				  }
				 
				});

				function set_deeplink_cnt(url){

				  $.ajax({
				    type:'post',
				    data:{'url':url,'agent':'web'},
				    url:'/api/hotel/set_click_count',
				    success:function(data){

				    }
				  });
				}

				  function fillzero(obj, len) {
				    obj= '000000000000000'+obj;
				    return obj.substring(obj.length-len);
				  }
				function get_gap(time1,time2){ //날짜간 차이 구함
				        var time1_arr = time1.split('T');
				        var time2_arr = time2.split('T');
				        var date1_arr = time1_arr[0].split('-');
				        var date2_arr = time2_arr[0].split('-');
				        var dur_arr1 = time1_arr[1].split(':');
				        var dur_arr2 = time2_arr[1].split(':');
				        var time1 = new Date(parseInt(date1_arr[0]),(parseInt(date1_arr[1])-1),parseInt(date1_arr[2]),parseInt(dur_arr1[0]),parseInt(dur_arr1[1]),parseInt(dur_arr1[2]));
				        var time2 = new Date(parseInt(date2_arr[0]),(parseInt(date2_arr[1])-1),parseInt(date2_arr[2]),parseInt(dur_arr2[0]),parseInt(dur_arr2[1]),parseInt(dur_arr2[2]));
				        time1 = time1.getTime();
				        time2 = time2.getTime();

				                
				        var dur = (time2-time1)/60000;
				        return dur;
				      }

				      function get_station(code){
				        var res_txt;
				        $.each(air_detail.Places,function(key,val){
				          if(val.Id == code){
				            res_txt = val.Name+'('+val.Code+')';
				            return false;
				          }
				        });

				        return res_txt;
				      }

				      function get_carr_html(code,addtxt){ //항공 html생성
				        var info;
				        $.each(air_detail.Carriers,function(key,val){
				          if(val.Id == code){
				            info = val;
				            return false;
				          }
				        });
				        var res = '<img src="'+info.ImageUrl+'" alt="" class="ca_img" />';
				        res += info.Name+' '+info.Code+addtxt;
				        res += '<div class="clear"></div>';

				        return res;
				      }
				function day_str(datetime){
				        var day_arr = datetime.split('.');
				        var n_year = day_arr[0];
				        var n_month = day_arr[1];
				        var n_day = day_arr[2];
				        if(lang == 'ko'){
				          var array_day = new Array('일','월','화','수','목','금','토');
				        }else{
				          var array_day = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
				        }

				        var ext = new Date(n_year,n_month-1,n_day);

				        return array_day[ext.getDay()];
				      }



				  var start_airport;
				  var end_airport;
				  var start_airport_name;
				  var end_airport_name;
				function flight_search(from_ci_srl, to_ci_srl){
				  get_city_info(from_ci_srl,'1');
				  get_city_info(to_ci_srl,'2');


				 _start_year = $('#cat_menu').attr('data-year');
				 _start_date = $('#schedule_detail_title').attr('data-date');
				_start_full_date = _start_year+'-'+_start_date;

				window.open('/ko/city/all/flight_list?originplace='+start_airport+'&destinationplace='+end_airport+'&originplace_name='+start_airport_name+'&destinationplace_name='+end_airport_name+'&outbounddate='+_start_full_date+'&inbounddate=%ED%8E%B8%EB%8F%84&adults=1&children=0&infants=0&originplace_iscountry=n&destinationplace_iscountry=n&onway=true','_blank');
				}

				function get_city_info(ci_srl,from_or_to){
				      $.ajax({  
				        type:'post',
				        data : {"ci_srl": ci_srl},
				        cache:false,
				        async: false,
				        url:'/api/city/get_city_info',
				        success: function(data){
				          var _ss_code = data.response_data.ss_air_code.replace('-sky','');
				          var _ci_name = data.response_data.ci_name;
				          if(from_or_to == '1'){
				            start_airport = _ss_code;
				            start_airport_name = _ci_name;
				          }else if(from_or_to == '2'){
				            end_airport = _ss_code;
				            end_airport_name = _ci_name;
				          }
				          
				        }
				      });  
				}


				function get_air_search(ar_lat, ar_lng){
				      $.ajax({  
				        type:'post',
				        data : {"lat": ar_lat, "lng": ar_lng},
				        cache:false,
				        url:'/api/air/get_closed_airport_info', 
				        success: function(data){

				        }
				      });  
				}

				function get_geo_search(ar_lat, ar_lng){
				      $.ajax({  
				        type:'post',
				        data : {"latlng": ar_lat+','+ar_lng},
				        cache:false,
				        url:'/api/google/place_geo_search',
				        success: function(data){

				var arrAddress = data[0].address_components;
				// iterate through address_component array
				$.each(arrAddress, function (i, address_component) {
				    if (address_component.types[0] == "locality"){ // locality type

				        return false; // break the loop
				    }
				});          

				        }
				      });  
				}


				function isNumberKey(evt){
				    var charCode = (evt.which) ? evt.which : event.keyCode
					var str_value = $('.budget_input').val();

					//_this_val = str_value.replace(/[^0-9]/gi, "");
					_this_val = number_format(_this_val);
					//$('.budget_input').val(_this_val);
				/*
				    if (charCode > 31 && (charCode < 48 || charCode > 57)){
				        return false;
					}else{
					    return true;
					}
				*/
				}

					function ws_invite(){
						et_modal('750px','443px','1','0','/ko/modal/ws_invite?pn_srl='+pn_srl,'2','1');

					}



					function get_plan_member(){
				      $.ajax({  
				        type:'post',
				        data : {"pn_srl": pn_srl},
				        cache:false,
				        url:'/api/plan/get_plan_member_list', 
				        success: function(data){

							_html = '';
							_more_member = '';
							$.each(data.response_data, function(key, val) {
								if(key < 3){
									_html += '<a href="/mypage/'+val.my_url+'" target="_blank" class="fl" style="margin-right:5px;background:#e5e5e5;border-radius: 20px;width:40px;height:40px;" title="'+val.user_name+'"><img src="'+val.cover_img+'" style="width:40px;height:40px;border-radius:20px;" onerror="this.src=\'/res/img/common/mobile/img_profile.png\';"></a>';
								}else{
									if(key > 3){
										_more_member += ', ';
									}
									_more_member += val.user_name;
								}
							});
							if(_more_member != ''){
								_html += '<a href="javascript:void(0);" target="_blank" class="fl" style="margin-right:5px;background:#e5e5e5;border-radius: 20px;width:40px;height:40px;" title="'+_more_member+'"><img src="/res/img/workspace/new/plan_member_more.png" style="width:40px;height:40px;border-radius:20px;"></a>';
							}


								
							$('#plan_member_list_box').html(_html);


				        },error:function(data){
							
						},complete:function(){
							$('#plan_member_list_box a').tipsy({gravity: 'n'});
							get_invited_member();
						}
				      });  
					}


					function get_invited_member(){

						$.ajax({  
							type:'post',
							data : {"pn_srl": pn_srl},
							cache:false,
							url:'/api/plan/get_invited_member_list', 
							success: function(data){

								if(data.response_result.total_cnt > 0){
									_invited_member_list = '';
									$.each(data.response_data, function(key, val) {
										if(key > 0){
											_invited_member_list +=  ', ';
										}
										if(val.name != '' && val.name){
											_invited_member_list += val.name;
										}else{
											_invited_member_list += val.email;
										}
									});
									_html = '';
									_html += '<a href="javascript:void(0);" target="_blank" class="fl" style="margin-right:5px;color:#000;position:relative;background:#e5e5e5;border-radius: 20px;width:40px;height:40px;" title="'+_invited_member_list+'">';
									_html += '<div style="position:absolute;left:3px;top:15px;">초대중</div>';
									_html += '<img src="/res/img/common/mobile/img_profile.png" style="width:40px;height:40px;border-radius:20px;" onerror="this.src=\'/res/img/common/mobile/img_profile.png\';"></a>';
									_html += '<div class="clear"></div>';
									$('#plan_member_list_box').append(_html);
									$('#plan_member_list_box a').tipsy({gravity: 'n'});
								}
							}
						});

					}

	};
	
	return {init:init,desp:desp};
})();
