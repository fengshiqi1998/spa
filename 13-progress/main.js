$(function(){
  var $progress = $('progress'),
      timer = 0,
      achieve = 0;
  $('#start').click(function() {
    if(!timer) {
      timer = window.setInterval(function() {
        $progress.attr('value', achieve++);
      }, 100);
    }
  });
  $('#pause').click(function() {
    window.clearInterval(timer);
    timer = 0;
  });
  $('#reset').click(function() {
    $progress.attr('value', achieve=0);
  });
});
