/* exported $dlgGoto */
var $dlgGoto = (function(){
  var init = function() {
    // DOM 绘制
    var DOM = ''
    + '<div class="notepad-goto-dlg">'
    + '<div class="dialogbox">'
      + '<div class="titlebar">'
        + '<p class="title">转到指定行</p>'
        + '<span class="btn-close">x</span>'
      + '</div>'
      + '<div class="main">'
        + '<label>行号(L):</label>'
        + '<br>'
        + '<input type="text" class="line-num">'
        + '<br>'
        + '<input type="button" value="转到" class="btn-goto">'
        + '<input type="button" value="取消" class="btn-cancel">'
      + '</div>'
    + '</div>'
  + '</div>';
    var $dlg = $(DOM),
        $btnClose = $dlg.find('.btn-close'),
        $btnCancel = $dlg.find('.btn-cancel');
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    // 事件绑定
    $btnClose.click(function() { $dlg.remove(); });
    $btnCancel.click(function(){ $dlg.remove(); });
  };

  return {init: init};
})();
