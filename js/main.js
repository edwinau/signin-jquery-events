$(document).ready(function() {

  $('.signin').on('click', function(){
    $('.modal').fadeIn("slow");
  });

  $('.close').on('click', function(){
    $('.modal').fadeOut("3000");
  });

  $('.submit').on('click', function(e){
    e.stopPropagation();
    $('input').addClass('error');
  });

  $('input').on('mouseover', function(){
    $('input').removeClass('error');
  });

  $('input').on('mouseleave', function(){
    $('input').addClass('error');
  });

  $('.modal').on('click', function(){
    $('.modal').fadeOut("slow");
  });

});
