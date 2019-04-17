/* global BMap, BMAP_NORMAL_MAP, BMAP_HYBRID_MAP: true */
$(function(){
  // 百度地图API功能
  var map = new BMap.Map('main');    // 创建Map实例
  var sContent = '<div style="width: 250px"><p>时间：周二、周四下午<br>地点：505 教室</p><a href="https://github.com/wangding" target="_blank"><img src="https://secure.gravatar.com/avatar/4e1b831efef47d65a762da5d5e89174c?s=250" alt="王顶" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>';
  map.centerAndZoom(new BMap.Point(114.529963, 38.003679), 25);  // 初始化地图,设置中心点坐标和地图级别
  //添加地图类型控件
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
      BMAP_HYBRID_MAP,
      BMAP_NORMAL_MAP
    ]}));
  map.setCurrentCity('河北师大软件学院');          // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  map.setMapType(BMAP_HYBRID_MAP);

  var point = new BMap.Point(114.529963, 38.003679);
  var marker = new BMap.Marker(point);
  var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
  map.centerAndZoom(point, 15);
  map.addOverlay(marker);
  marker.addEventListener("click", function(){          
    this.openInfoWindow(infoWindow);
    //图片加载完毕重绘infowindow
    document.getElementById('imgDemo').onload = function (){
      infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
    }
  });
});
