function Map(width,height) {
    // 创建地图对象
    var map;
    //地图宽高
    var mapW=width;
    var mapH=height;
    //地图位置

    this.init=function (game) {
        //创建地图的图片节点
        map=document.createElement('img');
        // 设置地图大小
        map.style.width=mapW+"px";
        map.style.height=mapH+"px";
        //设置地图位置
        map.style.position="absolute";
        // 设置地图来源
        map.src="img/bg.png";
        game.appendChild(map);
    }

}