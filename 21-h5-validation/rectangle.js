/* global Rectangle, validate: true */
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
    
    var height = validate($height.val());
    if(!height.isOK) {
      return ;
    }
  
    var width = validate($width.val());
    if(!width.isOK) {
      return ;
    }

    var w = $width.val(),
        h = $height.val();

    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
