$(document).ready(function(){$(".add-task__button").click(function(){$(".add-task__popup").fadeToggle("fast")});


















$(".modal-link").magnificPopup({type:"inline"}),$(".form-popup__button").click(function(){$.magnificPopup.close()});






var mapContainer=document.getElementById("map"),myOptions={center:new google.maps.LatLng(54.9984614,82.9218046),zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0},map=new google.maps.Map(mapContainer,myOptions);


$(".modal-link").magnificPopup({type:"inline"});
























$(".main").fullpage({verticalCentered:!1,animateAnchor:!0,navigation:!0,navigationTooltips:["Первый шаг","Как работает","Преимущества","Что заказывают?","Категории","Узнать больше"],onLeave:function(a,n,e){1==a&&"down"==e&&$("#fp-nav").fadeIn("slow"),1==n&&$("#fp-nav").hide(),3==n&&$("#fp-nav").addClass("fp-nav--white"),3==a&&$("#fp-nav").removeClass("fp-nav--white")}});})