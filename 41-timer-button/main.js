/*exported $timerBtn, TimerBtn*/
var $timerBtn = (function(){
  var cfg = {
    container: '',
    title: '确定',
    time: 9,
    enabled: false,
    clickHandler: null
  };
  var n = cfg.time;
  var init = function(conf) {
    $.extend(cfg, conf);
    n = cfg.time;
    var $container = $(cfg.container);
    var $timerBtn = $('<input type="button" value="'+ cfg.title + '(' + cfg.time + 's)" class="timer-button" disabled>');
    $container.append($timerBtn);
    var $btnAgree = $('.timer-button');

    var timer = window.setInterval(function(){
      n--;
      if(!n) {
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      } else {
        $btnAgree.val(cfg.title + '(' + n + 's)');
      }
    }, 1000);

    $btnAgree.click(function() {
      //alert('SPA! 41-timer-button task!');
      //$btnAgree.trigger('timer-btn-click');// 暴露
      cfg.clickHandler();
    });
    
    return $btnAgree;
  };
  var remove = function() {
    n = 0;
    var $btn = $(cfg.container).find('.timer-button');
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

function TimerBtn() {
  var cfg = {
    container: '',
    title: '确定',
    time: 9,
    enabled: false,
    clickHandler: null
  };
  //$.extend(cfg, conf);
  //var n = cfg.time;
  this.init = function(conf) {
    $.extend(cfg, conf);
    var n = cfg.time;
    var $container = $(cfg.container);
    var $timerBtn = $('<input type="button" value="'+ cfg.title + '(' + cfg.time + 's)" class="timer-button" disabled>');
    $container.append($timerBtn);
    var $btnAgree = $container.find('.timer-button');

    var timer = window.setInterval(function(){
      n--;
      if(!n) {
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      } else {
        $btnAgree.val(cfg.title + '(' + n + 's)');
      }
    }, 1000);

    $btnAgree.click(function() {
      cfg.clickHandler();
    });
    return $btnAgree;
  };
}
