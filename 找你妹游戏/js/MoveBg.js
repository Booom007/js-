function MoveBg(timeView,score) {
    //拖动背景对象
    var moveBg;
    //拖动背景大小
    var moveBgW=1000;
    //拖动背景位置
    var moveBgX=0;
    var moveBgY=0;
    //图片对象
    var img;
    // 图片盒子
    var imgBox=[];
    var type;


    //函数初始化
    this.init=function (game,picBg,picBgH,picBgW) {
        //初始化
        this.initMove(picBg,picBgH);
        //鼠标点下事件
        this.mouseMove(picBgW);
        // 图片类型创建
        this.initType(game);
        //图片出现
        this.initImg(game,moveBg);
        // 图片类型提示
        this.reNum();
    }

    // 初始化函数
    this.initMove=function (picBg,picBgH) {
        // 创建拖动背景节点
        moveBg=document.createElement('div');
        // 设置大小
        moveBg.style.width=moveBgW+"px";
        moveBg.style.height=picBgH+"px";
        //设置位置
        moveBg.style.position="absolute";
        moveBg.style.left=moveBgX+"px";
        moveBg.style.top=moveBgY+"px";
        // 将拖动背景添加到中间背景
        picBg.appendChild(moveBg);

    }

    //鼠标拖动背景
    this.mouseMove=function (picBgW) {
        // 鼠标按下事件
        moveBg.onmousedown=function (ev) {
            var event=ev;
            // 鼠标横坐标移动的距离
            var disX=event.clientX-moveBg.offsetLeft;
            moveBg.onmousemove=function (ev) {
                event=ev;
                //随着鼠标的移动，moveBg移动
                moveBgX=event.clientX-disX;
                moveBg.style.left=moveBgX+"px";
            }
            //鼠标松开事件
            moveBg.onmouseup=function () {
                moveBg.onmousemove=null;
                moveBg.onmouseup=null;
                //如果背景超出左边边框则背景回弹
                if(moveBgX>0){
                    moveBg.style.left=0+"px";
                }
                //如果背景超出右边边框则背景回弹
                if(moveBgX<(picBgW-moveBgW)){
                    moveBg.style.left=(picBgW-moveBgW)+"px";
                }
            }
        }
    }

    // 创建图片对象
    this.initImg=function (game,moveBg) {
        //行数
        var cols=10;
        // 列数
        var rows=5;
        // 图片大小最大值
        var maxWidth=100;
        //图片最小值
        var minWidth=30;
        //图片位置浮动值
        var flu=10;
        //初始化布局数组
        var position=new Array();
        for(var i=0;i<cols;i++){
            position[i]=new Array();
            for(var j=0;j<rows;j++){
                position[i][j]={divX:i*maxWidth,divY:j*maxWidth};
            }
        }
        //创建图片
        for(var i=0;i<cols;i++){
                for(var j=0;j<rows;j++){
                    var imgW=Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
                    var imgX=position[i][j].divX+Math.floor(Math.random()*flu);
                    var imgY=position[i][j].divY+Math.floor(Math.random()*flu);
                    img=new Img(type,timeView,score);
                    img.init(game,moveBg,imgW,imgX,imgY);
                    imgBox.push(img);
                }
            }
    }

    // 图片类型初始化
    this.initType=function (game) {
        type=new Types();
        type.init(game);
    }

    //图片数量提示的内容设置，图片数量应是所有图片的总数之内，不得超过所有图片中一个类型的最大图片数
    this.reNum=function () {
        //将图片类型及数量添加到数组中
        this.typesInfo();
        //随机生成类型提示
        this.randomTip();
    }

    //将图片类型及数量添加到数组中函数
    this.typesInfo=function () {
        imgBox.forEach(function (img) {
            if (img.imgSrc == "clock") {
                type.types[0].num++;
            }
            else if (img.imgSrc == "people") {
                type.types[1].num++;
            }
            else if (img.imgSrc == "animal") {
                type.types[2].num++;
            }
            else if (img.imgSrc == "plant") {
                type.types[4].num++;
            }
            else if (img.imgSrc == "plate") {
                type.types[3].num++;
            }
            else if (img.imgSrc == "cup") {
                type.types[8].num++;
            }
            else if (img.imgSrc == "fruit") {
                type.types[9].num++;
            }
            else if (img.imgSrc == "letter") {
                type.types[6].num++;
            }
            else if (img.imgSrc == "number") {
                type.types[7].num++;
            }
            else if (img.imgSrc == "umbrella") {
                type.types[10].num++;
            }
            else if (img.imgSrc == "money") {
                type.types[5].num++;
            }
            else if (img.imgSrc == "vehicle") {
                type.types[11].num++;
            }
            else if (img.imgSrc == "clothe") {
                type.types[12].num++;
            }

        })

    }

    //随机生成类型提示函数
    this.randomTip=function () {
        //调用type.js的函数
        type.randomTips();
        type.reTypeNum();
    }
    
    this.run=function () {
        
    }

}