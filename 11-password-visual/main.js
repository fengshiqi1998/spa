$(function(){
  var $pwd = $('#pwd'),
      $text = $('.pwd-text'),
      $eye = $('#eye');
  $pwd.on('input', function() {
    $text.val($pwd.val());
  });
  $eye.mouseover(function() {
    $text.css('z-index', '10');
      
  });
  $eye.mouseout(function() {
    $text.css('z-index', '-10');
  });
});
