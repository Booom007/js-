function Game() {
    // 创建游戏对象
    var game;
    //创建地图对象
    var map;
    var picBg;
    //时间
    var timeView;
    //创建按钮
    var button;
    //分数
    var score;
    // 游戏宽高
    var width=1000;
    var heigth=600;
    // 创建时间图标
    var clockW=35;
    var clockH=35;
    //游戏状态
    var GAME_START=0;
    var GAME_RUN=GAME_START+1;
    var GAME_OVER=GAME_RUN+1;
    var state=GAME_START;


    this.init=function () {
        this.initGame();
        this.initButton();
        this.initMap();
        this.initClock();
        //设置时间
        this.initTimeView();
        //设置分数
        this.initScore();
        this.initPicBg();
        score.displayScore();

    }

    //游戏初始化函数
    this.initGame=function () {
        // 创建游戏节点
        game=document.createElement('div');
        //设置游戏大小
        game.style.width=width+"px";
        game.style.height=heigth+"px";
        //设置游戏位置
        game.style.position="relative";
        game.style.margin="auto";
        //将游戏添加到网页里面body
        document.body.appendChild(game);
    }

    // 创建按钮
    this.initButton=function () {
        // 按钮大小
        var btnW=240;
        var btnH=120;
        //按钮位置
        var btnX=340;
        var btnY=240;
        button=document.createElement('button');
        //设置大小
        button.style.width=btnW+"px";
        button.style.height=btnH+"px";
        button.style.position="absolute";
        button.style.zIndex=10;
        button.style.left=btnX+"px";
        button.style.top=btnY+"px";
        button.style.outline="none";
        button.style.backgroundColor="#fff";
        button.innerHTML="开始游戏";
        game.appendChild(button);
        button.onclick=function () {
            button.style.display="none";
            state=GAME_RUN;
        }
    }

    // 创建地图对象并初始化
    this.initMap=function () {
        map=new Map(width,heigth);
        map.init(game);
    }

   //创建时间图片
    this.initClock=function () {
        //创建时钟图片节点
        var clock=document.createElement('img');
        // 设置图片大小
        clock.style.position="absolute";
        clock.style.width=clockW+"px";
        clock.style.height=clockH+"px";
        clock.src="img/time.png";
        clock.style.top=533+"px";
        clock.style.left=560+"px";
        game.appendChild(clock);

    }

    //创建拖动图片背景
    this.initPicBg=function () {
        picBg=new PicBg(timeView,score);
        picBg.init(game);
    }

    //创建时间对象
    this.initTimeView=function () {
        timeView=new TimeView();
        timeView.init(game);
        //设置监听
        timeView.addTimeListener(this.TimeListener);
    }

    // 设置监听
    this.TimeListener=function () {
        state=GAME_OVER;
        button.style.display="";
        button.innerHTML="开始结束";
    }

    //创建分数对象
    this.initScore=function () {
        score=new Score();
        score.init(game);
    }

    this.run=function () {
        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:
                timeView.run();
                picBg.run();
                break;
            case GAME_OVER:
                break;
        }

    }
}