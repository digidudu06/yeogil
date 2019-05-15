<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Chang jun's First Project</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_bootstrap.css" />
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_responsive.css" />
<link rel="stylesheet" href="${ctx}/resources/css/common/intro/intro_style.css" />
</head>
<body>
<section class="profile_area">
            <div class="container">
                <div class="profile_inner p_120">
                    <div class="row">
                        <div class="col-lg-5">
                            <img class="img-fluid" src="${img}/changjun.jpg" alt="">
                        </div>
                        <div class="col-lg-7">
                            <div class="personal_text">
                                <h6>Hello Everybody, i am</h6>
                                <h3>Chang Jun Lee</h3>
                                <h4>Developer</h4>
                                <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                                <ul class="list basic_info">
                                	<li id="project"><a href="#"><i class="lnr lnr-phone-handset"></i>First Project 여길가자.</a></li>
                                	<li id="admin"><a href="#"><i class="lnr lnr-phone-handset"></i>First Project 여길가자 관리자.</a></li>
                                	<li><a href="https://github.com/asa1374"><i class="lnr lnr-phone-handset"></i>My Git Hub</a></li>
                                    <li><a href="#"><i class="lnr lnr-calendar-full"></i> 5 june, 1993</a></li>
                                    <li><a href="#"><i class="lnr lnr-phone-handset"></i> 010 5899 1374</a></li>
                                    <li><a href="#"><i class="lnr lnr-envelope"></i> asa01374@gmail.com</a></li>
                                    <li><a href="#"><i class="lnr lnr-home"></i> 경기도 파주시 </a></li>
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