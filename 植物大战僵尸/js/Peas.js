function Peas() {
    var peas;
    var peascore;
    var plantX;
    var plantY;
    var plantpeas;
    var plant=[];
    var Pea=['./img/wandou1.png','./img/wandou2.png','./img/wandou3.png']
    this.init=function (game) {
        peascore=document.createElement('h3');
        peascore.style.position='absolute';
        peascore.style.left=60+'px';
        peascore.style.top=83+'px';
        peascore.innerHTML=100;
        peascore.style.zIndex=1;
        game.appendChild(peascore);


        peas=document.createElement('img');
        peas.style.width=100+'px';
        peas.style.height=60+'px';
        peas.style.top=65+'px';
        peas.style.position='absolute';
        peas.src=Pea[1];

        peas.onclick=function (ev) {
            plantpeas=new Plantpea();
            plantpeas.init(game);
            plant.push(plantpeas);
            if(!isMove){
                isMove=true;
                // if(sun!=null){
                //     sun.remove();
                //     sun=null;
                // }
            }else{
                isMove=false;

            }
           plantpea.onclick=function (ev2) {
                if(!isMove){
                    isMove=true;
                }else{
                    isMove=false;

                }
            }


        }

        game.appendChild(peas);

    }
    this.onmousemove=function (ev) {
        if(isMove){
            var x=ev.clientX;
            var y=ev.clientY;
           plantX=x-195;
            plantY=y-55;
            plantpea.style.left=plantX+"px";
            plantpea.style.top=plantY+"px";
        }

    }
    var isMove=false;
    var plantpea;
    function Plantpea() {
        //可以种植的向日葵
        this.init=function (game) {
            plantpea=document.createElement('img');
            plantpea.style.width=78+'px';
            plantpea.style.height=78+'px';
            plantpea.style.position='absolute';
            plantpea.src=Pea[2];
            game.appendChild(plantpea);
        }
    }
}