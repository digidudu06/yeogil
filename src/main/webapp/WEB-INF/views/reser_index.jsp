<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>여길가자 yeogil</title>
  
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"/>
  <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
  <link rel="shortcut icon" href="${img}/favicon.ico">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  	<link rel="stylesheet" href="${css}/common/tooltiptext.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link class="sw_css" rel="stylesheet" href="${css}/common/web/default_ko.css">
	<link class="sw_css" rel="stylesheet" href="${css}/common/web/gnb.css">	
	<link class="sw_css" rel="stylesheet" href="${css}/component/default.css">
	<link class="sw_css" rel="stylesheet" href="${css}/component/reset.css">	
	<link class="sw_css" rel="stylesheet" href="${css}/web/main.css" />
	<link class="sw_css" rel="stylesheet" href="${css}/web/date_picker.css" /> 
</head>
<body>
<!-- 모달 -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 id="modal_01" class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p id="modal_02">Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<!-- 모달끝 -->
<div id="wrapper">
<!-- 메인 네비 -->
		<div id="header">
			<div class="wrap">
				<h1 id="home" class="logo fl" style="margin-top: 0px; margin-bottom: 0px; font-size: 0px;">
					<img alt="" src="${img}/common/logo1.png" style="width: 150px;">
				</h1>
				<ul class="gnb fl">
					<a class="fl"><li id="tour">여행지</li></a>
					<a class="fl"><li id="plan">일정만들기</li></a>
					<a class="fl"><li id="reservation">항공·호텔</li></a>
					<a class="fl"><li id="admin" >관리자</li></a>
				</ul>
				<div class="fr gnb_box" style="padding-top: 16px;">
					<a id="custom-login-btn" href="javascript:loginWithKakao()">
						<img src="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_login_btn_small.png"/>
					</a>
					<a class="fr">
						<div id="test_login" class="fl gnb_login_btn" style="width: 72px; height: 30px; margin-top: 0px; line-height: 2.3; font-size: 12px; border-radius: 4px; margin-left: 8px; border-right-width: 0px;">
							TEST LOGIN
						</div>
					</a>
					
				</div>
				
				<div class="clear"></div>
			</div>
		</div>
		<div class="clear"></div>
<div id="common_area"></div>
<!-- footer -->
	<div id="footer">
		<div class="wrap">
			<div class="footer_col fl">
				<div class="footer_title">여길가자</div>
				<a>여행지</a>
				<a>일정만들기</a>
				<a target="_blank">호텔</a>
				<a>Q&amp;A</a>
				<a>여행TIP</a>
				<a>모바일</a><!--모바일-->
			</div>
	
			<div class="footer_col fl">
				<div class="footer_title">회사이야기</div>
				<a>회사소개</a>
				<a>이용방법</a>
				<a>광고 및 제휴</a>
			</div>
	
			<div class="footer_col fl">
				<div class="footer_title">고객센터</div>
				<a>FAQ</a>
				<a>문의하기</a>
				<a>이용약관</a>
				<a>개인정보 처리방침</a>
			</div>
					<div class="footer_col fl" style="margin-right:0px;">
				<div class="footer_title" style="border-bottom:0px;margin-bottom:0px;">&nbsp;</div>
			
				<div class="fl footer_lang_box" id="footer_lang_sel_box" data-is_open="0" data-h="ko/ko">한국어</div>
				<div id="lang_chage_item_box">
					<a class="prevent_href lang_change_item" data="ko">한국어</a>
				</div>
				<div class="fl footer_currency_box" id="footer_currency_sel_box" data-is_open="0">KRW</div>
				<div id="currency_change_item_box">
					<a class="currency_change_item" data="KRW">KRW</a>
				</div>
				<div class="clear" style="padding-bottom:20px"></div>
				<div class="clear"></div>
			</div>
			
			<div class="clear"></div>
		</div>
	</div>
</div>


<script src="${js}/comp/compo.js"></script>
<script src="${js}/yeogil.js"></script>
<script src="${js}/main/main.js"></script>
<script src="${js}/tour/tour.js"></script>
<script src="${js}/city/city.js"></script>
<script src="${js}/plan/sche.js"></script>
<script src="${js}/plan/plan.js"></script>
<script src="${js}/plan/mypage.js"></script>
<script src="${js}/plan/mysche.js"></script>
<script src="${js}/reservation/airport.js"></script>
<script src="${js}/reservation/hotel.js"></script>
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script>
	airport.ext("${ctx}");
</script>
</body>
</html>
