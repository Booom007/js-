function Bullet(player) {
    var bullet;
    this.bulletX;
    this.bulletY;
    var dir;
    var time=0;

    var bulletsrc=['img/bullet.png','img/bullet1.png','img/bullet2.png','img/bullet3.png'];

    this.init = function (game) {
        bullet = document.createElement('img');
        bullet.setAttribute('id', 'bullet');
        bullet.src = 'img/bullet.png';
        this.bulletX = player.playerX;
        this.bulletY = player.playerY-16;
        bullet.style.left = this.bulletX + "px";
        bullet.style.top = this.bulletY + "px";
        game.appendChild(bullet);

    };


    this.move = function () {
        if(time>200){
            if (dir == 1) {
                this.bulletX += 4;
                bullet.style.left=this.bulletX+"px";
            } else {
                this.bulletX -= 4;
                bullet.style.left=this.bulletX+"px";
            }

            if (this.bulletX < -50 || this.bulletX > 1280) {
                return true;
            }
        } else {
            bullet.src=bulletsrc[Math.floor(Math.random()*4)];
            time++;
            this.bulletX=player.playerX;
            this.bulletY = player.playerY-16;
            bullet.style.left = this.bulletX + "px";
            bullet.style.top = this.bulletY + "px";
            dir=player.getDirection();
        }
    };

    this.rem = function () {
        bullet.remove();
    }
}