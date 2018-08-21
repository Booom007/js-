function Game() {

    var map;
    var jisi;
    var game;
    var flower;
    var peas;
    var sunscore;
    var zombie;
    var sunback;
    this.init=function () {
   this.initGame();
   this.initMap();
   this.initFlower();
   this.initPeas();
   this.initZombie();
   this.initSun();
  this.initSunscore();
    }
    this.initGame=function () {
     game=document.createElement('div')
        game.style.width=1050+'px';
        game.style.height=600+'px';
        game.style.margin='auto';
        game.style.position='relative';
        game.style.overflow='hidden';
        document.body.appendChild(game)

    }
    this.initMap=function () {
        map=new Map();
        map.init(game);
    }
    this.initPeas=function () {
        peas=new Peas()
        peas.init(game);
    }
    this.initFlower=function () {
        flower=new Flower();
        flower.init(game);
    }
    this.initZombie=function () {
        zombie=new Zombie();
        zombie.init(game);
    }
    this.initSun=function () {
        sunback=new Sun();
        sunback.init(game);
    }
    this.initSunscore=function () {
        sunscore=new SunScore();
        sunscore.init(game);
    }
    this.run=function () {
       map.run();
       zombie.run();
       sunscore.run();
    }
    this.onmousemove=function (ev) {
        flower.onmousemove(ev);
         peas.onmousemove(ev);
    }
}