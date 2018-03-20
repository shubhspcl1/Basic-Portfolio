$(document).ready(function(){  $("nav a,.up,.down").click(function(){
var x = $(this).attr("data-section");
$('html,body').animate({scrollTop:$(x).offset().top},1000);
});
});
