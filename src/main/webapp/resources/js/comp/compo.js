var compo = compo || {};
compo = {
	main_contents : ()=>{
		return '<div class="main_top">'
		+'		<div class="wrap">'
		+'			<div class="main_top_title">나만의 여행 플래너 여길가자!</div>'
		+'			<div class="main_top_desc">쉽고 빠르게 여행을 계획하세요.</div>'
		+'			<div class="search_area">'
		+'				<div id="city_autocomplete"></div>'
		+'				<div class="latest_search">'
		+'					추천도시 : <a href="/ko/czity/london_309" class="latest_a">런던</a> , <a'
		+'						href="/ko/city/jeju_312" class="latest_a">제주도</a> , <a'
		+'						href="/ko/city/hong-kong_245" class="latest_a">홍콩</a>'
		+'				</div>'
		+'				<a class="go_map" href="javascript:void(0)"></a>'
		+'				<div class="clear"></div>'
		+'			</div>'
		+'		</div>'
		+'	</div>'
		+'<div id="contents"></div>'
		+'<div class="wrap" style="padding-top:30px; padding-bottom:30px">'
		+'<div class="page_title">'
		+'최근 여행일정'
		+'</div>'
		+'<div class="page_desc">'
			+'다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!'
		+'</div>'
		+'<div class="plan_list">'
		+'<a target="_blank" class="box"><div class="plan_bg">'
		+'<div class="plan_bg_inner"><span>2015-04-30</span><span class="tour_day">1DAYS</span><br>Big Bus Blue - 침사추이</div></div>'
		+'<div class="plan_img_box">	'
		+'<img src="http://img.earthtory.com/img/plan_cover_img/42175_1430882489.jpg" alt="" class="plan_img"></div>'
		+'<div class="plan_bg_inner2">'
		+'<span>나홀로 여행</span>'
		+'<div class="fr pn_list_copy_icon">5</div>'
		+'<div class="fr pn_list_view_icon">1013</div>'
		+'<div class="fr pn_list_spot_icon">8</div>'
		+'<div class="clear"></div>'
		+'<div class="pn_list_city">홍콩</div>'
		+'<div class="clear"></div>'
		+'<div class="pn_list_user">여행마니아</div></div>'
		+'</a>'
		+'<a target="_blank" class="box">'
		+'<div class="plan_bg">'
		+'<div class="plan_bg_inner">'
		+'<span>2015-08-10</span>'
		+'<span class="tour_day">6DAYS</span><br>대만여행!</div></div>'
		+'<div class="plan_img_box">	'
		+'<img src="http://img.earthtory.com/img/city_images/92/taipei_1425530247.jpg" alt="" class="plan_img"></div>'
		+'<div class="plan_bg_inner2"><span>친구와 함께</span><div class="fr pn_list_copy_icon">0</div>'
		+'<div class="fr pn_list_view_icon">226</div><div class="fr pn_list_spot_icon">28</div>'
		+'<div class="clear"></div>'
		+'<div class="pn_list_city">타이베이,타이중</div>'
		+'<div class="clear"></div><div class="pn_list_user">정예성</div></div></a>'
		+'<a target="_blank" class="box">'
		+'<div class="plan_bg"><div class="plan_bg_inner"><span>2015-09-22</span>'
		+'<span class="tour_day">6DAYS</span><br>설레는 싱가폴여행!</div></div>'
		+'<div class="plan_img_box">	'
		+'<img src="http://img.earthtory.com/img/city_images/243/singapore_1425521353.jpg" alt="" class="plan_img"></div>'
		+'<div class="plan_bg_inner2"><span>가족 여행</span>'
		+'<div class="fr pn_list_copy_icon">0</div>'
		+'<div class="fr pn_list_view_icon">164</div>'
		+'<div class="fr pn_list_spot_icon">47</div><div class="clear"></div>'
		+'<div class="pn_list_city">싱가포르</div><div class="clear"></div>'
		+'<div class="pn_list_user">김민주,김종록</div></div></a>'
		+'<a target="_blank" class="box">'
		+'<div class="plan_bg">'
		+'<div class="plan_bg_inner"><span>2015-07-30</span>'
		+'<span class="tour_day">18DAYS</span><br>동유럽급여행</div></div>'
		+'<div class="plan_img_box"> <img src="http://img.earthtory.com/img/city_images/10016/berlin_1426832124.jpg" class="plan_img"></div>'
		+'<div class="plan_bg_inner2"><span>커플 여행</span>'
		+'<div class="fr pn_list_copy_icon">0</div>'
		+'<div class="fr pn_list_view_icon">185</div>'
		+'<div class="fr pn_list_spot_icon">111</div>'
		+'<div class="clear"></div><div class="pn_list_city">프라하,베를린,크라쿠프,바르샤바,부다페스트,빈...</div>'
		+'<div class="clear"></div>'
		+'<div class="pn_list_user">조은영</div></div></a>'
		+'<a target="_blank" class="box"><div class="plan_bg">'
		+'<div class="plan_bg_inner"><span>2015-05-24</span>'
		+'<span class="tour_day">4DAYS</span>'
		+'<br>홍콩 마카오 3N4D</div></div>'
		+'<div class="plan_img_box">	'
		+'<img src="http://img.earthtory.com/img/city_images/245/hong-kong_1429504145.jpg" alt="" class="plan_img"></div>'
		+'<div class="plan_bg_inner2"><span>가족 여행</span>'
		+'<div class="fr pn_list_copy_icon">25</div><div class="fr pn_list_view_icon">26</div>'
		+'<div class="fr pn_list_spot_icon">42</div><div class="clear"></div><div class="pn_list_city">홍콩,마카오</div>'
		+'<div class="clear"></div>'
		+'<div class="pn_list_user">김아름</div></div></a>'
		+'<a target="_blank" class="box">'
		+'<div class="plan_bg"><div class="plan_bg_inner"><span>2015-06-13</span>'
		+'<span class="tour_day">3DAYS</span><br>2015년 6월 도쿄여행</div></div>'
		+'<div class="plan_img_box">'
		+'<img src="http://img.earthtory.com/img/city_images/295/tokyo_1426774311.jpg" alt="" class="plan_img"></div>'
		+'<div class="plan_bg_inner2"><span>커플 여행</span><div class="fr pn_list_copy_icon">1</div>'
		+'<div class="fr pn_list_view_icon">171</div><div class="fr pn_list_spot_icon">78</div>'
		+'<div class="clear"></div><div class="pn_list_city">도쿄</div>'
		+'<div class="clear"></div><div class="pn_list_user">김상운</div></div></a>'
		+'<div class="clear"></div></div>'
		+'<div class="more_btn" onclick="">'
		+'56,065개의 추천일정 모두보기'
		+'</div>'
		+'</div>' 
		+'<div class="page silver">'
		+'<div class="wrap">'
		+'<div class="page_title">'
		+'인기나라 TOP10		</div>'
		+'<div id="top_city_list" class="top_city_list">'
		+'                    </div>'
		+'                </div>'
		+'            </div>'
	},
	logon : ()=>{
		return 	'<div class="dropdown">'
		  +'    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">'
  		  +'    <span class="caret"></span></button>'
  		  +'    <ul class="dropdown-menu">'
  		  +'      <li><a href="#">마이페이지</a></li>'
  		  +'      <li class="divider"></li>'
  		  +'      <li id="logout_btn" ><a href="#">로그아웃</a></li>'
  		  +'    </ul>'
  		  +'  </div>'
	},
	// 이창준
	tourist_area : ()=>{
		return '<div class="area_top" id="area_top">'
		+'<div class="wrap">'
		+'	<div class="area_top_title">어디로 여행을 가시나요?</div>'
		+'		<div class="search_area">'
		+'			<input class="search_input" id="city_search" placeholder="국가명, 도시명으로 검색">'
		+'			<div id="city_autocomplete"></div>'
		+'			<div class="latest_search">	추천도시 :<a href="/ko/city/singapore_243" class="latest_a">싱가포르</a>'
		+'				,<a href="/ko/city/paris_307" class="latest_a">파리</a>'
		+'				,<a href="/ko/city/jeju_312" class="latest_a">제주도</a>'
		+'		</div>'
		+'			<a class="go_map" href="javascript:void(0)" onclick="et_full_modal("/ko/modal/world_map")">지도에서 검색 ></a>'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'	</div>'
		+'</div>'
		+'<div class="area_white">'
		+'	<div class="wrap">'
		+'		<div class="area_title">'
		+'			국가리스트		</div>'
		+'		<div class="area_top_name as" id="area_top_name_as">'
		+'			아시아		</div>'
		+'		<div class="container" id="asia">'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="area_top_name eu" id="area_top_name_eu">'
		+'			유럽		</div>'
		+'		<div class="container" id="europe">'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'	</div>'
		+'</div>'
	},
	common_menu : ()=>{
		return '<div class="area_bg top silver">' 
		+'<div class="wrap">'
		+'	<div class="area_nav">'
		+'	</div>'
		+'	<div class="area_title"></div>'
		+'	<div class="common_menu">'
		+'		<div class="clear"></div>'
		+'	</div>'
		+'	</div>'
		+'</div>';
	},
	country_detail : ()=>{
		return '<div class="area_bg top silver country_detail">' 
		+'<div class="wrap">'
		+'<div class="inner_box">'
		+'<div class="img_box"></div>'
		+'		<div class="img_right">'
		+'			<div class="country_info_box">'
		+'				<div class="country_info">'
		+'					<img alt="" class="country_flag">'
		+'					<div class="country_title"></div>'
		+'					<div class="clear"></div>'
		+'					<div class="country_desc"></div>'
		+'					<a href="http://ko.wikipedia.org/wiki/대만" target="_blank" class="info_more">더보기</a>'
		+'				</div>'
		+'				<div class="country_inner_box">'
		+'					<div class="country_info_box_title">환율계산</div>'
		+'					<div class="exchange_box">'
		+'						<div class="exchange_left" data-id="1">'
		+'							<b>대만</b><br>'
		+'							<span>TWD</span>'
		+'						</div>'
		+'						<input type="text" class="exchange_input" data-no="1">'
		+'					</div>'
		+'					<div class="exchange_center">=</div>'
		+'					<div class="exchange_box">'
		+'						<div class="exchange_left" data-id="2">'
		+'							<b>대한민국</b><br><span>KRW</span>'
		+'						</div>'
		+'						<input type="text" class="exchange_input" data-no="2">'
		+'					</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</div>'
		+'		</div>'
		+'		<div class="clear"></div>'
		+'	</div>'
		+'</div>'
		+'</div>';
	},
	tourist_city : ()=>{
		return '<div class="wrap country_detail">'
		+'	<div class="category_list">'
		+'	</div>'
		+'</div>';
	},
	tourist_list : ()=>{
		return '<div class="wrap country_detail">'
		+'		<div class="list_top">'
		+'			<div class="list_cnt">'
		+'				총 <span>10</span>개		'
		+'			</div>'
		+'			<div class="list_sort">'
		+'				<select name="" id="" class="sort" data-height="25">'
		+'					<option value="pl_clip_cnt">인기순</option>'
		+'					<option value="pl_name">이름순</option>'
		+'				</select>'
		+'			</div>'
		+'		</div>'
		+''
		+'		<div id="paging">'
		+'			<span class="nv"></span>'
		+'			<button type="button" class="on">1</button>'
		+'			<button type="button">2</button>'
		+'			<button type="button">3</button>'
		+'			<button type="button">4</button>'
		+'			<button type="button">5</button>'
		+'			<button type="button">6</button>'
		+'			<button type="button">7</button>'
		+'			<button type="button">8</button>'
		+'			<button type="button">9</button>'
		+'			<button type="button">10</button>'
		+'			<span class="nv">'
		+'				<button type="button" class="pgn-nx2">다음</button>'
		+'				<button type="button" class="pgn-nx1">맨뒤로</button>'
		+'			</span>'
		+'		</div>'
		+'	<div class="clear"></div>'
		+'</div>';
	},
	attraction_list : ()=>{
		return '<div class="wrap country_detail">'
		+'	<div class="list_left">'
		+'		<div class="list_top">'
		+'			<div class="list_cnt">'
		+'			</div>'
		+'		</div>'
		+'		<div class="list">'
		+'		</div>'
		+'		<div id="paging">'
		+'			<span class="nv"></span>'
		+'		</div>'
		+'	</div>'
		+'</div>';
	},
	tourist_main_city : ()=>{
		return '<div class="wrap country_detail">'
		+'	<div class="list_left">'
		+'		<div class="list_top">'
		+'			<div class="list_cnt">'
		+'			</div>'
		+'			<div class="list_sort">'
		+'				<select name="" id="" class="sort" data-height="25">'
		+'					<option value="cnt">인기순</option>'
		+'				</select>'
		+'			</div>'
		+'		</div>'
		+'		<div class="list">'
		+'		</div>'
		+'		<div id="paging">'
		+'			<span class="nv"></span>'
		+'		</div>'
		+'	</div>'
		+'</div>';
	},
	city_detail : ()=>{
		return '<div class="area_bg top silver city_detail">' 
		+'<div class="wrap">'
		+'<div class="inner_box">'
		+'	<div class="img_box">'
		+'		</div>'
		+'		<div class="img_right">'
		+'			<div class="country_info_box">'
		+'				<div class="city_temp">'
		+'					<div class="temp_left"></div>'
		+'					<div class="temp_right">'
		+'						<div class="temp_title"></div>'
		+'						<div id="height" style="height:50px"></div>'
		+''
		+'<div class="w-grid-container">'
		+'</div>'
		+'						</div>'
		+'					</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+''
		+'				<div class="country_inner_box">'
		+'					<div class="country_info_box_title">환율 계산</div>'
		+'					<div class="exchange_box e1">'
		+'						<div class="exchange_left">'
		+'							<b>대만</b><br>'
		+'							<span>TWD</span>'
		+'						</div>'
		+'						<input type="text" class="exchange_input" data-no="1">'
		+'					</div>'
		+'					<div class="exchange_center">=</div>'
		+'					<div class="exchange_box e2">'
		+'						<div class="exchange_left">'
		+'							<b>대한민국</b><br>'
		+'							<span>KRW</span>'
		+'						</div>'
		+'						<input type="text" class="exchange_input" data-no="2">'
		+'					</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</div>'
		+'		</div>'
		+'		<div class="clear"></div>'
		+'	</div>'
		+'</div>'
		+'</div>';
	},
	city_topten : ()=>{
		return '<div class="area_bg line spot_list silver">'
		+'	<div class="wrap">'
		+'		<div class="area_title_center city_po">타이베이 인기장소</div>'
		+'		<div class="pospot_content">'
		+'			<a class="pospot" href="/ko/city/taipei_92/attraction/taipei-101-observatory_1169" target="_blank">'
		+'				<div class="po_img_box">'
		+'					<img src="http://img.earthtory.com/img/place_img/92/1169_0_et.jpg" alt="" class="po_img" >'
		+'				</div>'
		+'				<div class="po_name">타이베이101관경대</div>'
		+'				<div class="po_bottom">'
		+'					<img src="/res/img/city/clip_icon.png" alt="" class="po_clip">'
		+'					<div class="po_cnt">9,947</div>'
		+'					<div class="po_tag">랜드마크</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</a>'
		+'			<a class="pospot" href="/ko/city/taipei_92/attraction/xi-men-street_1163" target="_blank">'
		+'				<div class="po_img_box">'
		+'					<img src="http://img.earthtory.com/img/place_img/92/1163_0_et.jpg" alt="" class="po_img">'
		+'				</div>'
		+'				<div class="po_name">시먼딩</div>'
		+'				<div class="po_bottom">'
		+'					<img src="/res/img/city/clip_icon.png" alt="" class="po_clip">'
		+'					<div class="po_cnt">9,525</div>'
		+'					<div class="po_tag">유명한거리/지역</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</a>'
		+'			<a class="pospot" href="/ko/city/taipei_92/shopping/shilin-night-market_1201" target="_blank">'
		+'				<div class="po_img_box">'
		+'					<img src="http://img.earthtory.com/img/place_img/92/1201_0_et.jpg" alt="" class="po_img">'
		+'				</div>'
		+'				<div class="po_name">스린야시장</div>'
		+'				<div class="po_bottom">'
		+'					<img src="/res/img/city/clip_icon.png" alt="" class="po_clip">'
		+'					<div class="po_cnt">9,502</div>'
		+'					<div class="po_tag">시장/쇼핑거리</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</a>'
		+'			<a class="pospot" style="margin-right:0px;" href="/ko/city/taipei_92/attraction/jiufen_5748" target="_blank">'
		+'				<div class="po_img_box">'
		+'					<img src="http://img.earthtory.com/img/place_img/92/5748_0_et.jpg" alt="" class="po_img">'
		+'				</div>'
		+'				<div class="po_name">지우펀</div>'
		+'				<div class="po_bottom">'
		+'					<img src="/res/img/city/clip_icon.png" alt="" class="po_clip">'
		+'					<div class="po_cnt">9,210</div>'
		+'					<div class="po_tag">유명한거리/지역</div>'
		+'					<div class="clear"></div>'
		+'				</div>'
		+'			</a>'
		+'		</div>'
		+'	</div>'
		+'</div>';
	},
	restaurant_city : ()=>{
		return '<div class="wrap country_detail">'
		+'	<div class="category_list">'
		+'		<div class="attraction_menu">'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="category_box first">'
		+'			<div class="category_btn" data-id="301012" data-on="off">현지요리</div>'
		+'			<div class="category_btn" data-id="301011" data-on="off">카페/디저트/베이커리</div>'
		+'			<div class="category_btn" data-id="301010" data-on="off">닭/오리요리</div>'
		+'			<div class="category_btn" data-id="301009" data-on="off">딤섬</div>'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="category_box ">'
		+'			<div class="category_btn" data-id="301008" data-on="off">면요리</div>'
		+'			<div class="category_btn" data-id="303001" data-on="off">북미요리</div>'
		+'			<div class="category_btn" data-id="302007" data-on="off">뷔페</div>'
		+'			<div class="category_btn" data-id="301007" data-on="off">스테이크/바비큐</div>'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="category_more" data-on="off">'
		+'			<span>카테고리 더보기</span>'
		+'		</div>'
		+'	</div>'
		+'</div>';
	},
	shopping_city : ()=>{
		return '<div class="wrap country_detail">'
		+'	<div class="category_list">'
		+'		<div class="attraction_menu">'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="category_box first">'
		+'			<div class="category_btn" data-id="301012" data-on="off">마트/식료품</div>'
		+'			<div class="category_btn" data-id="301011" data-on="off">면세점/아울렛</div>'
		+'			<div class="category_btn" data-id="301010" data-on="off">생활용품/기념품</div>'
		+'			<div class="category_btn" data-id="301009" data-on="off">쇼핑몰/백화점</div>'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'		<div class="category_box ">'
		+'			<div class="category_btn" data-id="301008" data-on="off">시장/쇼핑거리</div>'
		+'			<div class="category_btn" data-id="303001" data-on="off">전문상점</div>'
		+'			<div class="category_btn" data-id="302007" data-on="off">화장품</div>'
		+'			<div class="clear"></div>'
		+'		</div>'
		+'	</div>'
		+'</div>';
	},
// 정지우
		plan_header : ()=>{
			return '<div class="plan_header" id="plan_header">'
			+'<div class="wrap">'
			+'<div class="p_header_title">'
				+'누구나 쉽게 일정을 계획할 수 있습니다.</div>'
			+'<div class="p_header_img">'
				+'<img id="p_header_img" alt="" />'
			+'</div>'
			+'<div class="p_header_btn_box">'
				
				+'<div class="clear"></div>'
			+'</div>'
			+'<img class="p_header_hide_bg" id="p_header_hide_bg"/>'
			+'</div>'
			+'</div>'},
			
		sche_header:()=>{
			return '<div id="sche_header">'
					+'<div class="wrap" style="width:100%;padding:0px 10px;">'
					+'<h1 class="logo fl" alt="여행의 시작! 어스토리">'
					+'<a id="jw_home"><img id="home" src="/res/img/common/gnb/logo.png" alt="여행의 시작! 어스토리" ></a>'
					+'</h1>'
					+'<div class="fl" id="gnb_plan_create_title">1.도시선택&nbsp;&nbsp;→&nbsp;&nbsp;2.상세 일정 만들기</div>'
					+'<div class="fl" id="gnb_ci_name"></div>'
					+'<div class="fr gnb_box">'
					+'<div class="fl gnb_search_box"></div>'
					+'<a href="#"><div class="fr gnb_plan_create_close_btn" id="map_close">닫기</div></a>'
					+'<div class="clear"></div>'
					+'</div>'
					+'</div>'
					+'<div class="clear"></div>'
					+'</div>'
		}, 
		sche_content:()=>{
			return '<div id="full_wrap" style="width: 100%; height: 733px;">'
			+'<div class="fl left_full_box">'
			+'<ul class="fl" id="cat_menu" data="" data-member_srl="1376703">'
				/*
				 * +'<li data="as" data-val="아시아" class=""><img id="asia"
				 * src="/res/img/workspace/new/cat_as.png" class="s"><br>아시아</li>' +'<li data="eu" data-val="유럽" class="on"><img
				 * src="/res/img/workspace/new/cat_eu.png" class="s"><br>유럽</li>' +'<li data="oc" data-val="남태평양" class=""><img
				 * src="/res/img/workspace/new/cat_oc.png" class="s"><br>남태평양</li>' +'<li data="na" data-val="북아메리카" class=""><img
				 * src="/res/img/workspace/new/cat_na.png" class="s"><br>북아메리카</li>' +'<li data="sa" data-val="중남미" class=""><img
				 * src="/res/img/workspace/new/cat_sa.png" class="s"
				 * style="padding-bottom:7px;"><br>중남미</li>'
				 */
			+'</ul>'
			+'<div class="fl" id="schedule_full_box" style="width:265px" data="0">'
				+'<div class="title_box">'
					+'<div id="country_list_title">'
						+'<div class="fl ct_title">유럽</div>'
						+'<div class="clear"></div>'
					+'</div>'
					+'<div id="city_list_title" style="display: none;">'
						+'<div class="back_btn fl"></div>'
						+'<div class="fl cu_title" style="width:230px;padding-left:10px;font-size:15px;">city</div>'
						+'<div class="clear"></div>'
					+'</div>'
				+'</div>'
				+'<div id="search_box" style="width:100%;height:51px;border-bottom:solid #d6d6d6 1px;"></div>'
/* +'<div id="country_list_box" style="height: 612px;"></div>' */
				+'<div id="city_list_box" style="height: 612px; display: none;">'
				+'</div>'
			+'</div>'
		
			+'<div class="clear"></div>'
		+'</div>'
		+'<div id="right_full_box" class="fl" style="position:absolute;left:336px;top:62px;">'
			+'<div id="clip_list" data="0">'
				+'<div class="list_title"><span></span> 클립보드<div class="list_title_option_menu" data-is_open="off">도시 변경</div></div>'
				+'<div id="detail_close_btn"></div>'
				+'<div class="clear"></div>'
				+'<div class="clipboard_change_box"></div>'
				+'<div class="list_box_overlay"></div>'
				+'<div class="list_box"></div>'
			+'</div>'
						

					+'</div>'
					+'<div class="clear"></div>'
				+'</div>'
		},
		/*-----------------------------------------------------------------------------------------------------------------*/
		
		sche_detail :()=>{
			return '<div id="select_detail_view_city" data="0">'
			+'<div class="city_title">'
				+'<div class="ci_title_name fl" style="padding-top: 13px; width: 70%"><input type="text" id="plan_title" class="form-control" placeholder="여행타이틀을 입력하세요" style="width: 220px;"></div>'
				+'<div class="pn_date_boxf fr" id="date_pick_btn" style="margin-right: 20px;" data="0">'
					+'<div class="pn_date_info fl">출발일</div>'
					+'<div class="pn_date_icon fr"><img src="'+$.img()+'/map/pn_cal_btn.png"></div>'
					+'<div class="clear"></div>'
					+'<div id="date_pick"></div>'
				+'</div>'
				+'<div class="clear"></div>'
			+'</div>'
			+'<div id="selected_cities" data="0">'
		 	+'</div>'
		+'</div>'
		},
		mypage_sche : ()=>{
		    return '<div>'
		    +'  <div class="my_top_cover" center center / cover no-repeat;">'
		    +'      <div class="my_top_cover_shadow"></div>'
		    +'      <div class="cover_innter">'
		    +'          <img src="http://graph.facebook.com/812147152208679/picture?type=large" alt="" class="my_img" onerror="this.src="/res/img/common/mobile/img_profile.png";" style="background:white;">'
		    +'          <img src="http://www.earthtory.com/res/img/common/web/mgrade_8_ko.png" alt="" class="level_ico" id="level_ico">'
		    +'          <div class="my_name">Geunhyeong  In</div>'
		    +'          <div class="clear"></div>'
		    +'          <div class="my_top_title">'
		    +'              여행일정            </div>'
		    +'      </div>'
		    +'  </div>'
		    +'  <div class="my_top_menu_box">'
		    +'      <div class="my_top_menu_bg">'
		    +'      </div>'
		    +'      <div id="my_top_menu" class="my_top_menu">'
		    +'          <a class="my_menu no_line">'
		    +'              개요          </a>'
		    +'          <a class="my_menu on">'
		    +'              <!--여행일정-->여행일정           </a>'
		    +'          <a class="my_menu ">'
		    +'              <!--리뷰-->지도           </a>'
		    +'          <div class="clear"></div>'
		    +'      </div>'
		    +'  </div>'
		    +'</div>'
		    +'<div id="content">'
		    +'<div class="m_top">'
			+'<a id="ejcreat_sche" class="mtop_btn" target="_blank">'
			+'여행일정 만들기		</a>'
			+'<div class="clear"></div>'
			+'</div>'
			+'<div class="plan_inner">'
			+'<div id="paging"></div>'
			+'</div>';
		},
		/*---------------------------------------------------------------------------------------------------------------------*/
		mysche:()=>{
			return '<div id="mysche_nav" class="top_nav">'
			+'	<a>일정만들기</a>'
			+'	<span> &gt; </span>'
			+'	<a class="p_user_link">여행일정</a>'
			+'	<span> &gt; </span>'
			+'	</div>'
			+'<div class="plan_page">'
			+'	<div class="plan_nav hide" style="">'
			+'		<div class="plan_nav_prev" data-op="prev"></div>'
			+'		<div class="plan_nav_list"><div class="plan_nav_btn  last on" data-id="1">D1 비엔티안</div></div>'
			+'		<div class="plan_nav_next" data-op="next"></div>'
			+'	</div>'
			+'	<div class="plan_cover">'
			+'		<div class="puser_box">'
			+'			<div class="fl" style="margin-right:10px;">'
			+'				<img src="/res/img/common/mobile/img_profile.png" alt="" class="puser_img">'
			+'				<div class="puser_name">박은지</div>'
			+'			</div>'
			+'			<div class="clear"></div>'
			+'		</div>'
			+'		<div id="my_cover" class="cover_img" style="background:url("http://mw2.google.com/mw-panoramio/photos/medium/77777000.jpg") no-repeat;background-size:cover;background-position:center center;"></div>'
			+'		<div class="cover_bottom">'
			+'			<div class="cover_bleft">'
			+'				<div class="plan_title">'
			+'					서레					'
			+'					<img alt="" class="sb_edit" id="plan_info_edit">'
			+'				</div>'
			+'			</div>'
			+'					</div>'
			+'	</div>'
			+'<div id="plan_mnu_box" class="plan_mnu_box" style="">'
			+'		<div class="plan_mnu" data-id="1">일정표</div>'
			+'		<div class="plan_mnu_line"></div>'
			+'			<div class="plan_mnu_btn orange" id="edit_detail_plan" style="">'
			+'				삭제하기			</div>'
			+'		<div class="clear"></div>'
			+'	</div>'
			+'	<div class="wrap page show" data-id="2" style="margin-top: 50px;">'
			+'		<table class="sch_table" width="100%">'
			+'			<colgroup>'
			+'				<col width="20%">'
			+'				<col width="20%">'
			+'				<col width="20%">'
			+'				<col width="20%">'
			+'				<col width="20%">'
			+'			</colgroup>'
			+'			<tbody><tr>'
			+'				<th>'
			+'					<div>'
			+'						<img src="" alt="">'
			+'						날짜						<div class="clear"></div>'
			+'					</div>'
			+'				</th>'
			+'				<th>'
			+'					<div>'
			+'						<img src="" alt="">'
			+'						나라						<div class="clear"></div>'
			+'					</div>'
			+'				</th>'
			+'				<th>'
			+'					<div>'
			+'						<img src="" alt="">'
			+'						도시						<div class="clear"></div>'
			+'					</div>'
			+'				</th>'
			+'				<th>'
			+'					<div>'
			+'						<img src="" alt="">'
			+'						일정						<div class="clear"></div>'
			+'					</div>'
			+'				</th>'
			+'				<th>'
			+'					<div>'
			+'						<img src="" alt="">'
			+'						비고						<div class="clear"></div>'
			+'					</div>'
			+'				</th>'
			+'			</tr>'
			+'		<tr class="white"><td><div class="scht_date">3월 08일 <span>(금)</span></div><div class="scht_day">DAY 1</div></td><td class="scht_vtop"><div class="scht_city">비엔티안</div><div class="scht_city_en">Vientiane</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"><div class="scht_spotname"><b>1.</b>CCC BAR</div><div class="scht_spotname"><b>2.</b>Beerlao Music Zone @...</div><div class="scht_spotname"><b>3.</b>Dansawanh Hotel</div><div class="scht_spotname"><b>4.</b>Moon the Night</div></td><td></td></tr><tr class="gray"><td><div class="scht_date">3월 09일 <span>(토)</span></div><div class="scht_day">DAY 2</div></td><td class="scht_vtop"><div class="scht_city">비엔티안</div><div class="scht_city_en">Vientiane</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"></td><td></td></tr><tr class="white"><td><div class="scht_date">3월 10일 <span>(일)</span></div><div class="scht_day">DAY 3</div></td><td class="scht_vtop"><div class="scht_city">방비엥</div><div class="scht_city_en">Vang Vieng</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"></td><td></td></tr><tr class="gray"><td><div class="scht_date">3월 11일 <span>(월)</span></div><div class="scht_day">DAY 4</div></td><td class="scht_vtop"><div class="scht_city">방비엥</div><div class="scht_city_en">Vang Vieng</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"></td><td></td></tr><tr class="white"><td><div class="scht_date">3월 12일 <span>(화)</span></div><div class="scht_day">DAY 5</div></td><td class="scht_vtop"><div class="scht_city">루앙프라방</div><div class="scht_city_en">Luang Prabang</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"></td><td></td></tr><tr class="gray"><td><div class="scht_date">3월 13일 <span>(수)</span></div><div class="scht_day">DAY 6</div></td><td class="scht_vtop"><div class="scht_city">루앙프라방</div><div class="scht_city_en">Luang Prabang</div><div class="scht_city_blank"></div></td><td></td><td class="scht_vtop"></td><td></td></tr></tbody></table>'
			+'			</div>'
			+'</div>'
		},
		footer:()=>{
			return '<div id="footer">'
			+'<div class="wrap">'
			+'<div class="footer_col fl">'
				+'<div class="footer_title">여길가자</div>'
				+'<a>여행지</a>'
				+'<a>일정만들기</a>'
				+'<a target="_blank">호텔</a>'
				+'<a>Q&amp;A</a>'
				+'<a>여행TIP</a>'
				+'<a>모바일</a><!--모바일-->'
			+'</div>'
			+'<div class="footer_col fl">'
				+'<div class="footer_title">회사이야기</div>'
				+'<a>회사소개</a>'
				+'<a>이용방법</a>'
				+'<a>광고 및 제휴</a>'
			+'</div>'
			+'<div class="footer_col fl">'
				+'<div class="footer_title">고객센터</div>'
				+'<a>FAQ</a>'
				+'<a>문의하기</a>'
				+'<a>이용약관</a>'
				+'<a>개인정보 처리방침</a>'
			+'</div>'
			+'<div class="footer_col fl" style="margin-right:0px;">'
				+'<div class="footer_title" style="border-bottom:0px;margin-bottom:0px;">&nbsp;</div>'
				+'<div class="fl footer_lang_box" id="footer_lang_sel_box" data-is_open="0" data-h="ko/ko">한국어</div>'
				+'<div id="lang_chage_item_box">'
					+'<a class="prevent_href lang_change_item" data="ko">한국어</a>'
				+'</div>'
				+'<div class="fl footer_currency_box" id="footer_currency_sel_box" data-is_open="0">KRW</div>'
				+'<div id="currency_change_item_box">'
					+'<a class="currency_change_item" data="KRW">KRW</a>'
				+'</div>'
				+'<div class="clear" style="padding-bottom:20px"></div>'
				+'<div class="clear"></div>'
			+'</div>'
			+'<div class="clear"></div>'
		+'</div>'
		+'<div class="clear" style="padding-bottom:20px"></div>'
		+'<div class="clear"></div>'
	+'</div>'
		},
// 전서우
		reservation: ()=>{
			return '	<div id="booking" class="seo_section">'
			+'		<div class="seo_section-center">'
			+'			<div class="seo_container">'
			+'				<div id="apbtn_01" class="seo_row">'
			+'					<div id="seo_booking-form_btn" class="seo_booking-form">'
			+'						<form>'
			+'							<div class="seo_form-group">'
			+'								<div class="seo_form-checkbox">'
			+'									<label for="roundtrip">'
			+'										<input type="radio" id="roundtrip" name="flight-type">'
			+'										<span></span>왕복'
			+'									</label>'
			+'									<label for="one-way">'
			+'										<input type="radio" id="one-way" name="flight-type">'
			+'										<span></span>편도'
			+'									</label>'
			+'									<label for="multi-city">'
			+'										<input type="radio" id="multi-city" name="flight-type">'
			+'										<span></span>다구간'
			+'									</label>'
			+'								</div>'
			+'							</div>'
			+'							<div class="seo_row">'
			+'								<div class="seo_col-md-6">'
			+'									<div class="seo_form-group">'
			+'										<span id="start_01" class="seo_form-label">Flying from</span>'
													+'<input id="sinput_01" class="seo_form-control" type="text" value="인천" placeholder="출발지를 입력해주세요">'
			+'									</div>'
			+'								</div>'
			+'								<div class="seo_col-md-6">'
			+'									<div class="seo_form-group">'
			+'										<span id="dest_01" class="seo_form-label">Flyning to</span>'
													+'<input id="sinput_02" class="seo_form-control" type="text" value="타이페이" placeholder="도착지를 입력해주세요">'
			+'									</div>'
			+'								</div>'
			+'							</div>'
			+'							<div class="seo_row">'
			+'								<div class="seo_col-md-3">'
			+'									<div class="seo_form-group">'
			+'										<span id="start_02"  class="seo_form-label">Departing</span>'
			+'										<input id="sinput_03" class="seo_form-control" type="date" required="">'
			+'									</div>'
			+'								</div>'
			+'								<div class="seo_col-md-3">'
			+'									<div class="seo_form-group">'
			+'										<span id="dest_02" class="seo_form-label">Returning</span>'
			+'										<input id="sinput_04" class="seo_form-control" type="date" required="">'
			+'									</div>'
			+'								</div>'
			+'								<div class="seo_col-md-2">'
			+'									<div class="seo_form-group">'
			+'										<span id="adults_01" class="seo_form-label">Adults (18+)</span>'
			+'										<select class="seo_form-control">'
			+'											<option>1</option>'
			+'											<option>2</option>'
			+'											<option>3</option>'
			+'										</select>'
			+'										<span class="seo_select-arrow"></span>'
			+'									</div>'
			+'								</div>'
			+'								<div class="seo_col-md-2">'
			+'									<div class="seo_form-group">'
			+'										<span id="children_01" class="seo_form-label">Children (0-17)</span>'
			+'										<select class="seo_form-control">'
			+'											<option>0</option>'
			+'											<option>1</option>'
			+'											<option>2</option>'
			+'										</select>'
			+'										<span class="seo_select-arrow"></span>'
			+'									</div>'
			+'								</div>'
			+'							</div>'
			+'							<div class="seo_row">'
			+'								<div class="seo_col-md-3">'
			+'									<div class="seo_form-group">'
			+'										<span id="rank_01" class="seo_form-label">Travel class</span>'
			+'										<select class="seo_form-control">'
			+'											<option>Economy class</option>'
			+'											<option>Business class</option>'
			+'											<option>First class</option>'
			+'										</select>'
			+'										<span class="seo_select-arrow"></span>'
			+'									</div>'
			+'								</div>'
			+'								<div class="seo_col-md-3">'
			+'									<div class="seo_form-btn">'
			+'										<button id="asmbtn_01" class="seo_submit-btn">Show flights</button>'
			+'									</div>'
			+'								</div>'
			+'							</div>'
			+'						</form>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>';
		},
		hreservation:()=>{
			return '	<div id="hseo_booking" class="hseo_section">'
			+'		<div class="hseo_section-center">'
			+'			<div class="hseo_container">'
			+'				<div class="hseo_row">'
			+'					<div class="hseo_col-md-7 col-md-push-5">'
			+'						<div class="hseo_booking-cta">'
			+'							<h1 id="htext_01">Make your reservation</h1><br><br>'
										+'<p id="htext_02">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque'
											+'ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.'
			+'								Perspiciatis.'
			+'							</p>'
			+'						</div>'
			+'					</div>'
			+'					<div id="hmbtn_01" class="hseo_col-md-4 col-md-pull-7">'
			+'						<div class="hseo_booking-form">'
			+'							<form>'
			+'								<div class="hseo_form-group">'
			+'									<span id="hdes_01" class="hseo_form-label">Your Destination</span>'
												+'<input class="hseo_form-control" type="text" placeholder="여행지를 입력해주세요">'
			+'								</div>'
			+'								<div class="hseo_row">'
			+'									<div class="hseo_col-sm-6">'
			+'										<div class="hseo_form-group">'
			+'											<span id="hchc_01" class="hseo_form-label">Check In</span>'
			+'											<input id="h_date_01" class="hseo_form-control" type="date" required="">'
			+'										</div>'
			+'									</div>'
			+'									<div class="hseo_col-sm-6">'
			+'										<div class="hseo_form-group">'
			+'											<span id="hchc_02" class="hseo_form-label">Check out</span>'
			+'											<input id="h_date_02" class="hseo_form-control" type="date" required="">'
			+'										</div>'
			+'									</div>'
			+'								</div>'
			+'								<div class="hseo_row">'
			+'									<div class="hseo_col-sm-4">'
			+'										<div class="hseo_form-group">'
			+'											<span id="hroom_01" class="hseo_form-label">Rooms</span>'
			+'											<select class="hseo_form-control">'
			+'												<option>1</option>'
			+'												<option>2</option>'
			+'												<option>3</option>'
			+'											</select>'
			+'											<span class="hseo_select-arrow"></span>'
			+'										</div>'
			+'									</div>'
			+'									<div class="hseo_col-sm-4">'
			+'										<div class="hseo_form-group">'
			+'											<span id="hadul_01" class="hseo_form-label">Adults</span>'
			+'											<select class="hseo_form-control">'
			+'												<option>1</option>'
			+'												<option>2</option>'
			+'												<option>3</option>'
			+'											</select>'
			+'											<span class="hseo_select-arrow"></span>'
			+'										</div>'
			+'									</div>'
			+'									<div class="hseo_col-sm-4">'
			+'										<div class="hseo_form-group">'
			+'											<span id="hchil_01" class="hseo_form-label">Children</span>'
			+'											<select class="hseo_form-control">'
			+'												<option>0</option>'
			+'												<option>1</option>'
			+'												<option>2</option>'
			+'											</select>'
			+'											<span class="hseo_select-arrow"></span>'
			+'										</div>'
			+'									</div>'
			+'								</div>'
			+'								<div class="hseo_form-btn">'
			+'									<button id="hcheck_01" class="hseo_submit-btn">Check availability</button>'
			+'								</div>'
			+'							</form>'
			+'						</div>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>';
		},
		hresult:()=>{ 
			return '<div id="hotel_clean" class="page white">'
		        +'    <div class="wrap">'
		        +'        <div class="page_title">'
		        +'            검색하신 호텔입니다.!        </div>'
		        +'        <div class="clear"></div>'
		        +'        <div class="intro_list">'
		        +'        </div>'
		        +'        <div class="clear"></div>'
		        +'    </div>'
		        +'</div>';
		    },
		aresult:()=>{
			return '<div class="aseo_section-center" style="height:100px;">'
			+'      <div class="aseo_container">'
			+'        <div class="aseo_row">'
			+'          <div class="aseo_booking-form">'
			+'            <form>'
			+'              <div class="aseo_row no-margin">'
			+'                <div class="aseo_col-md-3">'
			+'                  <div class="aseo_form-group">'
			+'                    <span id="fname_02" class="aseo_form-control"></span>'
			+'                  </div>'
			+'                </div>'
			+'                <div class="aseo_col-md-6">'
			+'                  <div class="aseo_row no-margin">'
			+'                    <div class="aseo_col-md-5">'
			+'                      <div class="aseo_form-group">'
			+'                        <span id="sn_02" class="aseo_form-control"></span>'
			+'                      </div>'
			+'                    </div>'
			+'                    <div class="aseo_col-md-5">'
			+'                      <div class="aseo_form-group">'
			+'                        <span id="dn_02" class="aseo_form-control"></span>'
			+'                      </div>'
			+'                    </div>'
			+'                    <div id="col_mi2" class="aseo_col-md-2">'
			+'                      <div id="ap_02" class="aseo_form-group">'
			+'                        <span class="aseo_form-label"></span>'
			+'                        </select>'
			+'                        <span class="aseo_select-arrow"></span>'
			+'                      </div>'
			+'                    </div>'
			+'                  </div>'
			+'                </div>'
			+'                <div class="aseo_col-md-3">'
			+'                  <div class="aseo_form-btn">'
			+'                    <button id="airpay_01" class="aseo_submit-btn">예약 및 결제하기</button>'
			+'                  </div>'
			+'                </div>'
			+'              </div>'
			+'            </form>'
			+'          </div>'
			+'        </div>'
			+'      </div>'
			+'    </div><p><br>';
		},
		wells:()=>{
			return	'<div class="container">'
			+'  <table class="table">'
			+'    <thead>'
			+'    </thead>'
			+'    <tbody>'
			+'      <tr class="active">'
			+'        <td id="pnbd_01">오는편 : <br></td>'
			+'        <td id="pnbd_02">가는편 : <br></td>;'
			+'      </tr>'
			+'    </tbody>'
			+'  </table>'
			+'</div>';
		}
}