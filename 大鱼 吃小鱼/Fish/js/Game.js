function Game() {
    var game;
    var map;
    var player;
    var fish1;
    var fishes1 = new Set;
    var fish2;
    var fishes2 = new Set;
    var scoreBoard;
    var score = 0;
    var lost = 0;
    var startButton;
    var start = false;
    var gameover;
    var resetButton;
    var bullet;
    var bullets = new Set;
    var index = 0;


    this.init = function () {

        this.initGame();

        this.gameStart();

        map = new Map();
        map.init();

        player = new Player();


    };

    this.initGame = function () {
        game = document.createElement('div');
        game.setAttribute("id", "box");
        const overlay = document.createElement('div');
        overlay.setAttribute("id", "overlay");
        game.appendChild(overlay);
        document.body.appendChild(game);
        scoreBoard = document.createElement('span');
        scoreBoard.setAttribute("id", "score");
        scoreBoard.innerHTML = "得分：" + score + "分";
        game.appendChild(scoreBoard);
    };


    setInterval(setFish, 500);
    setInterval(() => {
        if (!start)
            return;
        const mx = player.playerX;
        const my = player.playerY;

        fishes1.forEach(x => {

            if (x.move()) {
                x.rem();
                fishes1.delete(x);
                lost += 1;
                scoreBoard.innerHTML = "得分：" + (score - lost) + "分";
                return
            }
            const tx = x.fish1X;
            const ty = x.fish1Y;
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 500) {
                x.rem();
                fishes1.delete(x);
                score += 10;
                scoreBoard.innerHTML = "得分：" + (score - lost) + "分";
            }
        });
        fishes2.forEach(x => {
            const tx = x.fish2X;
            const ty = x.fish2Y;
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 500) {
                start = false;
                this.gameOver();
            }
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 50000) {
                x.chase(mx, my);
            } else {
                x.move();
            }
        });

        if ((score + 110) % 100 == 0) {
            fish2 = new Fish2();
            fish2.init(game);
            fishes2.add(fish2);
            score += 10;
            index++
        }

        if (index == 3) {
            bullet = new Bullet(player);
            bullet.init(game);
            bullets.add(bullet);
            index = 0;
        }

        bullets.forEach(x => {
            const bx = x.bulletX;
            const by = x.bulletY;
            if (x.move()) {
                x.rem();
                bullets.delete(x);
                return
            }
            fishes2.forEach(x => {
                x.move();
                const tx = x.fish2X;
                const ty = x.fish2Y;
                if ((bx - tx) ** 2 + (by - ty) ** 2 < 1000) {
                    x.rem();
                    fishes2.delete(x);
                }
            })
        })

    }, 10);

    function setFish() {
        if (!start)
            return;
        fish1 = new Fish1();
        fish1.init(game);
        fishes1.add(fish1);
    }

    this.gameOver = function () {
        gameover = document.createElement('div');
        gameover.setAttribute('id', 'over');
        gameover.innerHTML = "GAME　OVER" + "<br>" + "得分：" + (score - lost) + "分";
        game.appendChild(gameover);
        resetButton = document.createElement('button');
        resetButton.setAttribute('id', 'reset');
        resetButton.innerHTML = "吃不下了";
        resetButton.onclick = function () {
            location.reload();
        };
        resetButton.onmouseover = function () {
            resetButton.innerHTML = "再吃一口！";
        };
        resetButton.onmouseleave = function () {
            resetButton.innerHTML = "吃不下了";
        }
        game.appendChild(resetButton);
    };


    this.gameStart = function () {
        startButton = document.createElement('button');
        startButton.setAttribute("id", "start");
        startButton.onclick = function () {
            startButton.style.display = "none";
            player.init();
            start = true;
            game.style.cursor = "none";
        };
        game.appendChild(startButton);
        var span = document.createElement('span');
        span.innerHTML = "开始游戏";
        startButton.appendChild(span);
    };


}