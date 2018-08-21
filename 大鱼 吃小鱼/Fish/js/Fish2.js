function Fish2() {
    var fish2;

    this.fish2X = 0;
    this.fish2Y = 0;

    var index = 201;

    var ranx;

    var random;

    var speed = 1;

    this.init = function (game) {
        fish2 = document.createElement('img');
        random = Math.floor(Math.random() * 2);
        if (random == 1) {
            ranx = 1;
        } else {
            ranx = -1;
        }
        fish2.setAttribute('id', 'fish2');
        this.move = function () {
            if (ranx == 1) {
                if (index > 150) {
                    var rany = Math.floor(Math.random() * 2);
                    if (rany == 0) {
                        speed = -speed;
                    }
                    index = 0;
                }
                this.fish2X -= 1;
                fish2.src = "img/fish2_left.png"
            } else {
                if (index > 150) {
                    var rany = Math.floor(Math.random() * 2);
                    if (rany == 0) {
                        speed = -speed;
                    }
                    index = 0;
                }
                this.fish2X += 1;
                fish2.src = "img/fish2_right.png"
            }
            index++;
            this.fish2Y += speed;
            fish2.style.left = this.fish2X + "px";
            fish2.style.top = this.fish2Y + "px";
            if (this.fish2X < 0) {
                ranx = -ranx;
                fish2.src = "img/fish2_right.png"
            }
            if (this.fish2X > 1180) {
                ranx = -ranx;
                fish2.src = "img/fish2_left.png"
            }
            if (this.fish2Y < 0 || this.fish2Y > 566) {
                speed = -speed;
            }
        };

        this.chase = function (mx, my) {
            if (this.fish2X < mx) {
                this.fish2X += 2;
                fish2.style.left = this.fish2X + "px";
                fish2.src = 'img/fish2_right.png';
            } else if (this.fish2X > mx) {
                this.fish2X -= 2;
                fish2.style.left = this.fish2X + "px";
                fish2.src = 'img/fish2_left.png';
            }
            if (this.fish2Y < my) {
                this.fish2Y += 2;
                fish2.style.top = this.fish2Y + "px";
            } else if (this.fish2Y > my) {
                this.fish2Y -= 2;
                fish2.style.top = this.fish2Y + "px";
            }
        };


        if (ranx == 1) {
            fish2.src = "img/fish2_left.png";
            var ranr = Math.floor(Math.random() * 500 + 50);
            this.fish2X = 1180;
            this.fish2Y = ranr;
            fish2.style.left = this.fish2X + "px";
            fish2.style.top = this.fish2Y + "px";
        } else {
            fish2.src = "img/fish2_right.png";
            var ranr = Math.floor(Math.random() * 500 + 50);
            this.fish2X = 0;
            this.fish2Y = ranr;
            fish2.style.left = this.fish2X + "px";
            fish2.style.top = this.fish2Y + "px";
        }
        game.appendChild(fish2);
    };

    this.rem = function () {
        fish2.remove();
    }

}