function Zombie() {
    var zombie;
    var zombieX=1160;
    this.init=function (game) {
        zombie=document.createElement('img');
        zombie.style.width=140+'px';
        zombie.style.height=150+'px';
        zombie.style.top=210+'px';
        zombie.style.left=zombieX+'px';
      zombie.style.position='absolute';
        zombie.src='./img/js1.gif';
        game.appendChild(zombie);

    }
    var mapX=0;
    var startl=0;
    var startz=startl+1
    var startr=startz+1;
    var stop=startr+1;
    var state=startl;
    var index=0;
    this.run=function () {
        switch(state){
            case startl:
                mapX=mapX-30;
                if(mapX<=-350){

                    state=startz;
                }
                zombie.style.left=zombieX+mapX+'px';
                break;
            case startz:
                index++;
                mapX=mapX+0;
                if(index==20){

                    state=startr;
                }
                zombie.style.left=zombieX+mapX+'px';
                break;
            case startr:

                mapX=mapX+30;
                if(mapX==0){

                    state=stop;
                }
                zombie.style.left=zombieX+mapX+'px';
                break;
            case stop:
                break;
        }
    }
}