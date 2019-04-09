/*exported $timerBtn*/
var $timerBtn = (function(){
  var n = 0;
  var init = function() {
    n = 6;
    var $container = $('.main');
    var $timerBtn = $('<input type="button" value="agree(6s)" class="timer-button" disabled>');
    $container.append($timerBtn);
    var $btnAgree = $('.timer-button');

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
      alert('SPA! 41-timer-button task!');
    });
  };
  var remove = function() {
    n = 0;
    var $btn = $('.main').find('.timer-button');
    $btn.remove();
  };
  /* template string 模板串方法
  var DOM = '<input type="button" value="agree(6s)" disabled>';
  $container.html(DOM);
  */
  //var $timerBtn = $('<input type="button" value="agree(6s)" disabled>');
  //$timerBtn.appendTo($container);
  /*
  var $btnAgree = $container.find('.timer-button');
  
  $btnAgree.css({
    'font-size': '1.2em',
    'height': '60px',
    'width': '200px',
  });
  */
  return {
    init: init,
    remove: remove
  };
})();
