function Sun() {
    var sunback;
    var sunscore;

    this.init=function (game) {
        sunscore=document.createElement('h2');
        sunscore.style.position='absolute';
        sunscore.style.left=180+'px';
        sunscore.style.top=-10+'px';
        sunscore.innerHTML=50;
          sunscore.style.zIndex=1;
        game.appendChild(sunscore);

        sunback=document.createElement('img');
        sunback.style.width=123+'px';
        sunback.style.height=34+'px';
        sunback.style.left=123+'px';
        sunback.style.top=10+'px';


        sunback.style.position='absolute';
        sunback.src='./img/SunBack.png';


        game.appendChild(sunback);
    }

}