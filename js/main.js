(function(){
'use strict';

$('.photos').on('click', 'li', function zoomPic(){
$(this).toggleClass('zoomed');
$('main').toggleClass('zooming');
$('nav').appendTo('.zoomed');


});

$('nav').on('click', '.next', function nextPic(event){
  event.stopPropagation();
  $('.zoomed').removeClass('zoomed').next().addClass('zoomed');
  $('nav').appendTo('.zoomed');
  console.log('.photos');
  var i = $('.photos').length();
  // console.log(i)
  //   if (i 9){
  //     $('.zoomed').removeClass('zoomed');
  //   };

});

$('nav').on('click', '.previous', function lastPic(event){
  event.stopPropagation();
  $('.zoomed').removeClass('zoomed').prev().addClass('zoomed');
  $('nav').appendTo('.zoomed');

});













}());
