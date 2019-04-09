/*exported $pwdBtn*/

var $pwdBtn = (function() {
  var $container = $('.main');
  var create = function() {
    var DOM = '<div class="dom">密码： <input id="pwd" type="password" autofocus><div id="eye"></div><input class="pwd-text"></div>';
    $container.html(DOM);

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

    $('.get-psw').removeAttr('disabled');
    $('.del-btn').removeAttr('disabled');
    $('.get-psw').bind('click', function() {
      $pwdBtn.get();
    });
    $('.del-btn').bind('click', function() {
      $pwdBtn.remove();
    });

  };
  
  var get = function() {
    var $pwd = $container.find('#pwd');
    window.alert('密码是：' + $pwd.val());
  };

  var remove = function() {
    var $dom = $container.find('.dom');
    $dom.remove();
    $('.get-psw').attr('disabled', 'true');
    $('.getpsw').unbind();
    $('.del-btn').attr('disabled', 'true');
    $('.del-btn').unbind();
  };

  return {
    create: create,
    get: get,
    remove: remove
  };
})();
