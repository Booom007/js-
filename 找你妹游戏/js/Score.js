function Score() {
    //创建score对象
    var score;
    // 创建分数值
    this.scoreNum=0;
    this.init=function (game) {
        //图片类型提示初始化
        score=document.createElement('h2');
        score.style.color="#fff";
        // 设置位置
        score.style.position="absolute";
        score.style.left=740+"px";
        score.style.top=-20+"px";
        game.appendChild(score);
    }

    //显示分数
    this.displayScore=function () {
        score.innerHTML=this.scoreNum+"分";
    }

    //设置加分方法
    this.addScore=function () {
        this.scoreNum=this.scoreNum+1;
    }

    //设置减分
    this.reduceScore=function () {
        this.scoreNum=this.scoreNum-2;
    }

    this.run=function () {

    }
}