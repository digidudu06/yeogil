<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Eun ji's First Project</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_bootstrap.css" />
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_responsive.css" />
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_style.css" />
<link rel="shortcut icon" href="${img}/favicon.ico">
</head>
<body>
<section class="profile_area">
            <div class="container">
                <div class="profile_inner p_120">
                    <div class="row">
                        <div class="col-lg-5">
                        	<iframe width="600" height="350" style="margin-top: 23px;" src="https://www.youtube.com/embed/O4q5dJYri9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                        </div>
                        <div class="col-lg-7">
                            <div class="personal_text">
                                <h6>Hello Everybody, i am</h6>
                                <h3>Park eun ji</h3>
                                <p>아래의 텍스트를 클릭하여 이동해주세요.</p>
                                <ul class="list basic_info" style="width: 50%; float: left;">
                                	<li id="project"><a href="#"><i class="lnr lnr-phone-handset"></i>First Project 여길가자.</a></li>
                                	<li id="admin"><a href="#"><i class="lnr lnr-phone-handset"></i>First Project 여길가자 관리자.</a></li>
                                	<li><a href="https://github.com/digidudu06"><i class="lnr lnr-phone-handset"></i>My Git Hub</a></li>
                                    <li><a href="#"><i class="lnr lnr-calendar-full"></i> 13 june, 1994</a></li>
                                    <li><a href="#"><i class="lnr lnr-phone-handset"></i> 010 2423 7839</a></li>
                                    <li><a href="#"><i class="lnr lnr-envelope"></i> digidudu06@gmail.com</a></li>
                                </ul>
                                <ul class="list basic_info" style="width: 50%; float: right;">
                                	<img class="img-fluid" src="${img}/eunji_profil.jpg" style="width: 150px; margin-left: 25px; margin-top: 11px;">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<script>
$('#project').click(function(){
	location.assign("${ctx}/index");
});
$('#admin').click(function(){
	location.assign("${ctx}/admin");
});
</script>
</body>
</html>