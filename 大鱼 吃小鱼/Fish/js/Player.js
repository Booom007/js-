function Player() {
    var player;
    var mousePos = {x: 0, y: 0};

    var direction = 0;

    this.playerX = 0;
    this.playerY = 0;

    this.getDirection=function () {
        return direction;
    };



    function mousePosition(ev) {
        const [{x, y}] = document.querySelector("#overlay").getClientRects();
        return {x: ev.pageX - x, y: ev.pageY - y};
    }

    const move = () => {
        if (this.playerX < mousePos.x && this.playerX < 1130) {
            this.playerX += 10;
            player.style.left = this.playerX + "px";
            player.src = 'img/player_right.png';
            direction = 1;
            if (this.playerX > mousePos.x) {
                this.playerX = mousePos.x;
                player.style.left = this.playerX + "px";
            }
        } else if (this.playerX > mousePos.x && this.playerX > 0) {
            this.playerX -= 10;
            player.style.left = this.playerX + "px";
            player.src = 'img/player_left.png';
            direction = 2;
            if (this.playerX < mousePos.x) {
                this.playerX = mousePos.x;
                player.style.left = this.playerX + "px";
            }
        }
        if (this.playerY < mousePos.y && this.playerY < 600) {
            this.playerY += 10;
            player.style.top = this.playerY + "px";
            if (this.playerY > mousePos.y) {
                this.playerY = mousePos.y;
                player.style.top = this.playerY + "px";
            }
        } else if (this.playerY > mousePos.y && this.playerY > 0) {
            this.playerY -= 10;
            player.style.top = this.playerY + "px";
            if (this.playerY < mousePos.y) {
                this.playerY = mousePos.y;
                player.style.top = this.playerY + "px";
            }
        }
    };
    setInterval(move, 3);

    function mouseMove(ev) {
        ev = ev || window.event;
        mousePos = mousePosition(ev);
    }


    this.init = function () {
        player = document.createElement('img');
        player.setAttribute('id', 'player');
        player.src = 'img/player_right.png';
        player.style.left = this.playerX + "px";
        player.style.top = this.playerY + "px";
        document.querySelector("#overlay").appendChild(player);
        document.querySelector("#overlay").onmousemove = mouseMove;
    };


}