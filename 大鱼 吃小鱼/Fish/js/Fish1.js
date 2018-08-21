function Fish1() {
    var fish1;

    this.fish1X = 0;
    this.fish1Y = 0;

    var index = 201;

    var random;

    var speed = 0.5;
    var speedX;

    this.init = function (game) {
        fish1 = document.createElement('img');
        random = Math.floor(Math.random() * 2);
        fish1.setAttribute('id', 'fish1');
        speedX=Math.floor(Math.random()*3)+0.5;
        this.move = function () {
            if (random == 1) {
                if (index > 150) {
                    var rany = Math.floor(Math.random() * 2);
                    if (rany == 0) {
                        speed = -speed;
                    }
                    index=0;
                }
                this.fish1X -= speedX;
            } else {
                if (index > 150) {
                    var rany = Math.floor(Math.random() * 2);
                    if (rany == 0) {
                        speed = -speed;
                    }
                    index=0;
                }
                this.fish1X += speedX;
            }
            index++;
            this.fish1Y += speed;
            fish1.style.left = this.fish1X + "px";
            fish1.style.top = this.fish1Y + "px";
            if (this.fish1X < -50 || this.fish1X > 1280) {
                return true;
            }
            if (this.fish1Y < 0 || this.fish1Y > 600) {
                speed=-speed;
            }
        };
        if (random == 1) {
            fish1.src = "img/fish1_left.png";
            var ranr = Math.floor(Math.random() * 500 + 50);
            this.fish1X = 1230;
            this.fish1Y = ranr;
            fish1.style.left = this.fish1X + "px";
            fish1.style.top = this.fish1Y + "px";
        } else {
            fish1.src = "img/fish1_right.png";
            var ranr = Math.floor(Math.random() * 500 + 50);
            this.fish1X = -50;
            this.fish1Y = ranr;
            fish1.style.left = this.fish1X + "px";
            fish1.style.top = this.fish1Y + "px";
        }
        game.appendChild(fish1);
    };

    this.rem = function () {
        fish1.remove();
    }


}