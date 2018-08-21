function PicBg(timeView,score){
    var picBg;
    var moveBg;
    // 盒子大小
    var picBgW=740;
    var picBgH=490;
    //盒子位置
    var picBgX=90;
    var picBgY=40;


    this.init=function (game) {
        this.initBg(game);
        this.initMoveBg(game);

    }
    // 固定背景初始化
    this.initBg=function (game) {
        // 创建中间图片盒子
        picBg=document.createElement('div');
        // 设置中间盒子大小
        picBg.style.width=picBgW+"px";
        picBg.style.height=picBgH+"px";
        //设置位置
        picBg.style.position="absolute";
        picBg.style.left=picBgX+"px";
        picBg.style.top=picBgY+"px";
        picBg.style.overflow="hidden";
        game.appendChild(picBg);

    }

    // 拖动背景
    this.initMoveBg=function (game) {
       moveBg=new MoveBg(timeView,score);
       moveBg.init(game,picBg,picBgH,picBgW);

    }

    this.run=function () {
        moveBg.run();
    }

}