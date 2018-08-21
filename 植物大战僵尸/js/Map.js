function Map() {
    var Width=1400;
    var Height=600;
    var mapX=0
    var map;

    this.init=function (game) {
     map=document.createElement('img');
     map.style.width=Width+'px';
     map.style.height=Height+'px';
     map.style.left=mapX+'px';
     map.style.position='absolute';
     map.src='./img/map.jpg';

     game.appendChild(map);

    }
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
        map.style.left=mapX+'px';
         break;
            case startz:
                index++;
                mapX=mapX+0;
                if(index==20){

                    state=startr;
                }
                map.style.left=mapX+'px';
                break;
            case startr:

                mapX=mapX+30;
                if(mapX==0){

                    state=stop;
                }
                map.style.left=mapX+'px';
                break;
            case stop:
                break;
        }
    }
}