$(document).ready(function(){

















var mapContainer=document.getElementById("map"),myOptions={center:new google.maps.LatLng(54.9984614,82.9218046),zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0},map=new google.maps.Map(mapContainer,myOptions);
















$(".main").fullpage({verticalCentered:!1,animateAnchor:!0,navigation:!0,navigationTooltips:["Первый шаг","Как работает","Преимущества","Что заказывают?","Категории","Узнать больше"],onLeave:function(n,a,e){1==n&&"down"==e&&$("#fp-nav").fadeIn("slow"),1==a&&$("#fp-nav").hide()}});})