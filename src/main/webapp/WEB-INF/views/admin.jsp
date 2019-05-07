<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Creative - Bootstrap 3 Responsive Admin Template">
  <meta name="author" content="GeeksLabs">
  <meta name="keyword" content="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal">
  <title>여길가자 관리자페이지</title>

<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/maps.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/worldLow.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://code.highcharts.com/maps/highmaps.js"></script>
<script src="https://code.highcharts.com/mapdata/index.js?1"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
<script src="https://www.highcharts.com/samples/maps/demo/all-maps/jquery.combobox.js"></script>

<link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet">
<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

  <!-- Bootstrap CSS -->
  <link href="<%=application.getContextPath()%>/resources/admin/css/bootstrap.min.css" rel="stylesheet">
  <!-- bootstrap theme -->
  <link href="<%=application.getContextPath()%>/resources/admin/css/bootstrap-theme.css" rel="stylesheet">
  <!--external css-->
  <!-- font icon -->
  <link href="<%=application.getContextPath()%>/resources/admin/css/elegant-icons-style.css" rel="stylesheet" />
  <link href="<%=application.getContextPath()%>/resources/admin/css/font-awesome.min.css" rel="stylesheet" />
  <!-- full calendar css-->
  <link href="<%=application.getContextPath()%>/resources/admin/assets/fullcalendar/fullcalendar/bootstrap-fullcalendar.css" rel="stylesheet" />
  <link href="<%=application.getContextPath()%>/resources/admin/assets/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet" />
  <!-- Custom styles -->
  <link href="<%=application.getContextPath()%>/resources/admin/css/style.css" rel="stylesheet">
</head>

<body>
  <!-- container section start -->
  <section id="container" class="">
    <header class="header dark-bg">
      <!--logo start-->
      <a class="logo">여길가자 <span class="lite">관리자</span></a>
      <!--logo end-->

      <div class="top-nav notification-row">
      </div>
    </header>
    <!--header end-->

    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu">
          <li class="active">
            <a>
            	<i class="icon_house_alt"></i>
           		<span>Dashboard</span>
           </a>
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper">
        <!--overview start-->
        <div class="row">
          <div class="col-lg-12">
            <h3 class="page-header"><i class="fa fa-laptop"></i> 통계</h3>
          </div>
        </div>
        <div class="row" id="f_temp">
        </div>
        <!--/.row-->
        <div class="row">
          <div class="col-lg-9 col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h2><i class="fa fa-map-marker red"></i><strong>여행지 map chart</strong></h2>
                <div class="panel-actions">
                  <a href="index.html#" class="btn-setting"><i class="fa fa-rotate-right"></i></a>
                  <a href="index.html#" class="btn-minimize"><i class="fa fa-chevron-up"></i></a>
                  <a href="index.html#" class="btn-close"><i class="fa fa-times"></i></a>
                </div>
              </div>
              <div class="panel-body-map">
                <div id="map">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Today status end -->
        <div class="col-lg-9 col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h2><i class="fa fa-flag-o red"></i><strong>여행지 순위</strong></h2>
                <div class="panel-actions">
                  <a class="btn-setting"><i class="fa fa-rotate-right"></i></a>
                  <a class="btn-minimize"><i class="fa fa-chevron-up"></i></a>
                  <a class="btn-close"><i class="fa fa-times"></i></a>
                </div>
              </div>
              <div class="panel-body">
                <table class="table bootstrap-datatable countries">
                  <thead>
                    <tr>
                      <th></th>
                      <th>City</th>
                      <th>Users</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody id="rank_list">
                  
                  </tbody>
                </table>
              </div>
            </div>
        <div class="row">

          <!-- <div class="col-lg-9 col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h2><i class="fa fa-flag-o red"></i><strong>여행지 순위</strong></h2>
                <div class="panel-actions">
                  <a class="btn-setting"><i class="fa fa-rotate-right"></i></a>
                  <a class="btn-minimize"><i class="fa fa-chevron-up"></i></a>
                  <a class="btn-close"><i class="fa fa-times"></i></a>
                </div>
              </div>
              <div class="panel-body">
                <table class="table bootstrap-datatable countries">
                  <thead>
                    <tr>
                      <th></th>
                      <th>City</th>
                      <th>Users</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody id="rank_list">
                  
                  
                  </tbody>
                </table>
              </div>
            </div> -->
          </div>
          <!--/col-->
        </div>
        <!-- statics end -->
        <!-- project team & activity start -->
        <div class="row">
        </div>
        <br><br>
      </section>
    </section>
    <!--main content end-->
  </section>
  <!-- container section start -->
<script src="<%=application.getContextPath()%>/resources/js/admin.js"></script>
 <script>
 admin.ext('<%=application.getContextPath()%>');
 </script>
</body>
</html>
