/* exported $dlgGoto */
var $dlgGoto = (function(){
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
        + '<input type="text" class="line-num" autofocus>'
        + '<br>'
        + '<input type="button" value="转到" class="btn-goto">'
        + '<input type="button" value="取消" class="btn-cancel">'
      + '</div>'
    + '</div>'
  + '</div>';
  var $dlg = $(DOM),
      $txtLineNum = $dlg.find('.line-num'),
      $btnGoto = $dlg.find('.btn-goto'),
      $btnClose = $dlg.find('.btn-close'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $titleBar = $dlg.find('.titlebar');
  
  var cfg = {
    curLine: 1,
    totalLines: 0,
    gotoHandler: null
  };

  function destory() {
    $dlg.remove();
  }

  function validation() {
    var num = Number($txtLineNum.val());
    if(num === 0 || num > cfg.totalLines) { 
      alert('行数超过了总行数！');
      return false;
    }
    return true;
  }

  function gotoHandler() {
    if(!validation()) return ;
    cfg.gotoHandler($txtLineNum.val());
    destory();
  }

  function filterKey(e) {
    if(!/[0-9]/.test(e.key)) {
      e.preventDefault();
      alert('不能输入数字以外的非法字符！');
    }
  }
  var init = function(conf) {
    $.extend(cfg, conf);
    $('body').append($dlg);
    $txtLineNum.val(cfg.curLine);
    $txtLineNum.select();// 选中
    $dlg.find('.dialogbox').draggable({handle: $titleBar});
    // 事件绑定
    $btnGoto.click(gotoHandler);
    $btnClose.click(destory);
    $btnCancel.click(destory);
    $txtLineNum.keypress(filterKey);// keydown
  };

  return {init: init};
})();
