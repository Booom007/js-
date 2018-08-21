function Flower() {
    var flower;
    var flowerX;
    var flowerY;
    var sun;
    var suns=[];
    var sunflower;
    var flowerscore;
    var flowers=['./img/flower1.png','./img/flower2.png','./img/flower3.png']
    this.init=function (game) {
        //向日葵需要的分数
        flowerscore=document.createElement('h3');
        flowerscore.style.position='absolute';
        flowerscore.style.left=65+'px';
        flowerscore.style.top=18+'px';
        flowerscore.innerHTML=50;
        flowerscore.style.zIndex=1;
        game.appendChild(flowerscore);

       flower=document.createElement('img');
       flower.style.width=100+'px';
       flower.style.height=60+'px';
       flower.style.position='absolute';
       flower.src=flowers[1];


        // sunflower.style.display='none';

       flower.onclick=function (ev) {
           sun=new Sun();
           sun.init(game);
           suns.push(sun);
           if(!isMove){
               isMove=true;
               // if(sun!=null){
               //     sun.remove();
               //     sun=null;
               // }
           }else{
               isMove=false;

           }
           sunflower.onclick=function (ev2) {
               if(!isMove){
                   isMove=true;
               }else{
                   isMove=false;

               }
           }


        }
       game.appendChild(flower);

    }
    this.onmousemove=function (ev) {
        if(isMove){
            var x=ev.clientX;
            var y=ev.clientY;
            flowerX=x-195;
            flowerY=y-55;
           sunflower.style.left=flowerX+"px";
           sunflower.style.top=flowerY+"px";
        }

    }
    var isMove=false;
    function Sun() {
        //可以种植的向日葵
        this.init=function (game) {
            sunflower=document.createElement('img');
            sunflower.style.width=78+'px';
            sunflower.style.height=78+'px';
            sunflower.style.position='absolute';
            sunflower.src=flowers[2];
            game.appendChild(sunflower);
        }
    }

}