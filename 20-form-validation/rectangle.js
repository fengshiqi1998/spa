/* global Rectangle, validate: true */
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate');

  $btnCal.click(function(){
    //isPassValidate = result.isOK;
    //if(!isPassValidate) return ; 

    var height = validate($height.val());
    if(!height.isOK) {
      $heightValidate.html('高度' + height.reason);
      $height.select();
      return ;
    } else {
      $heightValidate.html('');
    }

    var width = validate($width.val());
    if(!width.isOK) {
      $widthValidate.html('宽度' + width.reason);
      $width.select();
      return ;
    } else {
      $heightValidate.html('');
    }

    var w = $width.val(),
        h = $height.val();

    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
