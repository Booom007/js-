function SunScore() {
    var sunscore;
    var sunscoreX=600;
    var sunscoreY=-60;
    this.init=function (game) {
        sunscore=document.createElement('img');
        sunscore.style.width=66+'px';
        sunscore.style.height=66+'px';
        // sunscoreX=x;
        // sunscoreY=y;
        sunscore.style.left=sunscoreX+'px';
        sunscore.style.top=sunscoreY+'px';

        sunscore.style.position='absolute';
        sunscore.src='./img/sun.gif';
        game.appendChild(sunscore);
    }

    var start=0;
    var stop=start+1;
    var wait=stop+1;
    var state=wait;
    var index=0;
    this.run=function () {
        index++;
        switch(state) {
            case wait:
                if(index==60){
                    state=start;
                }
                break;
            case start:
           var ran=Math.floor(Math.random()*50);
            sunscoreY= sunscoreY + 5;
            if(ran==20){
                state=stop;
            }
            if(sunscoreY>500){
                state=stop;
            }
            sunscore.style.top=sunscoreY+'px';
            break;
            case stop:
                break;
        }
    }
}