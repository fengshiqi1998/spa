/* global hljs,Behave: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[$]editor"  }] */
$(function(){
  //console.log('.code[0]: ', $('.code').val());
  //var $code = $('div>pre');
  //hljs.highlightBlock($code[0]);
  var $btnAddCode = $('input[type="button"]'),
      $editor = new Behave({
        textarea: $('.code')[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
        fence: false
      });
  $btnAddCode.click(function() {
    $('div.tem').remove();
    var $code = $('<div class="tem"><pre class="javascript"></pre><i class="iconfont icon-delete"></i></div>');
    $code.find('pre').html($('.code').val());
    hljs.highlightBlock($code.find('pre')[0]);
    $('div.main').append($code);
    $code.find('i.icon-delete').click(function() {
      $code.remove();
    });
  });

});
