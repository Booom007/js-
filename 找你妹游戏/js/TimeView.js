function TimeView() {
    //创建时间对象
    var timeView;
    //设置初始时间
    var time=30;
    this.init=function (game) {
        timeView=document.createElement('h2');
        //设置颜色
        timeView.style.color="#fff";
        // 设置位置
        timeView.style.position="absolute";
        timeView.style.left=600+"px";
        timeView.style.top=525+"px";
        timeView.innerHTML=time+"秒";
        game.appendChild(timeView);
    }
    this.callBack;
    this.addTimeListener=function (call) {
        this.callBack=call;
    }
    //加时间
    this.addTime=function () {
        time=time+2;
    }
    //减时间
    this.reduceTime=function () {
        time=time-6;
    }

    this.run=function () {
        time=time-1;
        timeView.innerHTML=time+"秒";
        if(time<=0)
            this.callBack();

    }
}