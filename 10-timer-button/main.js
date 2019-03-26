$(function(){
  var n = 6;
  var $btnAgree = $('input[type="button"]');

  var timer = window.setInterval(function(){
    n--;
    if(!n) {
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('agree');
    } else {
      $btnAgree.val('agree(' + n + 's)');
    }
  }, 1000);

  $btnAgree.click(function() {
    alert('SPA! 10-timer-button task!');
  });
});
