function Img(type,timeView,score) {
    //创建图片对象
    var img;
    var moveBg;
    var game;
    var that = this;
    // 图片地址
    var animals=['./img/animal/animal.png','./img/animal/animal1.png','./img/animal/animal2.png','./img/animal/animal3.png','./img/animal/animal4.png','./img/animal/animal5.png','./img/animal/animal6.png','./img/animal/animal7.png','./img/animal/animal8.png','./img/animal/animal9.png']
    var clocks=['./img/clock/clock.png','./img/clock/clock1.png','./img/clock/clock2.png','./img/clock/clock3.png','./img/clock/clock4.png','./img/clock/clock5.png','./img/clock/clock6.png','./img/clock/clock7.png','./img/clock/clock8.png','./img/clock/clock9.png']
    var clothes=['./img/clothe/clothe.png','./img/clothe/clothe1.png','./img/clothe/clothe2.png','./img/clothe/clothe3.png','./img/clothe/clothe4.png','./img/clothe/clothe5.png','./img/clothe/clothe6.png','./img/clothe/clothe7.png','./img/clothe/clothe8.png','./img/clothe/clothe9.png']
    var cups=['./img/cup/cup.png','./img/cup/cup1.png','./img/cup/cup2.png','./img/cup/cup3.png','./img/cup/cup4.png','./img/cup/cup5.png','./img/cup/cup6.png','./img/cup/cup7.png','./img/cup/cup8.png','./img/cup/cup9.png']
    var fruits=['./img/fruit/fruit.png','./img/fruit/fruit1.png','./img/fruit/fruit2.png','./img/fruit/fruit3.png','./img/fruit/fruit4.png','./img/fruit/fruit5.png','./img/fruit/fruit6.png','./img/fruit/fruit7.png','./img/fruit/fruit8.png','./img/fruit/fruit9.png']
    var letters=['./img/letter/letter.png','./img/letter/letter1.png','./img/letter/letter2.png','./img/letter/letter3.png','./img/letter/letter4.png','./img/letter/letter5.png','./img/letter/letter6.png','./img/letter/letter7.png','./img/letter/letter8.png','./img/letter/letter9.png']
    var moneys=['./img/money/money.png','./img/money/money1.png','./img/money/money2.png','./img/money/money3.png','./img/money/money4.png','./img/money/money5.png','./img/money/money6.png','./img/money/money7.png','./img/money/money8.png','./img/money/money9.png']
    var numbers=['./img/number/number.png','./img/number/number1.png','./img/number/number2.png','./img/number/number3.png','./img/number/number4.png','./img/number/number5.png','./img/number/number6.png','./img/number/number7.png','./img/number/number8.png','./img/number/number9.png']
    var peoples=['./img/people/people.png','./img/people/people1.png','./img/people/people2.png','./img/people/people3.png','./img/people/people4.png','./img/people/people5.png','./img/people/people6.png','./img/people/people7.png','./img/people/people8.png','./img/people/people9.png']
    var plants=['./img/plant/plant.png','./img/plant/plant1.png','./img/plant/plant2.png','./img/plant/plant3.png','./img/plant/plant4.png','./img/plant/plant5.png','./img/plant/plant6.png','./img/plant/plant7.png','./img/plant/plant8.png','./img/plant/plant9.png']
    var plates=['./img/plate/plate.png','./img/plate/plate1.png','./img/plate/plate2.png','./img/plate/plate3.png','./img/plate/plate4.png','./img/plate/plate5.png','./img/plate/plate6.png','./img/plate/plate7.png','./img/plate/plate8.png','./img/plate/plate9.png']
    var umbrellas=['./img/umbrella/umbrella.png','./img/umbrella/umbrella1.png','./img/umbrella/umbrella2.png','./img/umbrella/umbrella3.png','./img/umbrella/umbrella4.png','./img/umbrella/umbrella5.png','./img/umbrella/umbrella6.png','./img/umbrella/umbrella7.png','./img/umbrella/umbrella8.png','./img/umbrella/umbrella9.png']
    var vehicles=['./img/vehicle/vehicle.png','./img/vehicle/vehicle1.png','./img/vehicle/vehicle2.png','./img/vehicle/vehicle3.png','./img/vehicle/vehicle4.png','./img/vehicle/vehicle5.png','./img/vehicle/vehicle6.png','./img/vehicle/vehicle7.png','./img/vehicle/vehicle8.png','./img/vehicle/vehicle9.png']

    //图片下标
    var index;
    //图片合集
    var imgs=[];
    //图片类型
    var typeImg;
    //图片类型
    this.imgSrc;
    this.imgTypes=['animal','clock','clothe','fruit','letter','money','number','people','plant','plate','umbrella','vehicle'];

    //图片位置
    var imgX;
    var imgY;
    //判断图片
    var judge;
    var judgeBox;

    var that=this;

    this.init=function (bufferg,buffer,imgW,imgX,imgY) {
        game=bufferg;
        moveBg=buffer;
        //设置图片
        this.initImg(moveBg,imgW,imgX,imgY);
        // 鼠标点击事件
        img.onclick=this.onClick;
        // img.onmouseup=function () {
        //     console.log(judge);
        //     judge.remove();
        // }
    }

   //图片初始化
    this.initImg=function (moveBg,imgW,bufferX,bufferY) {
        imgX=bufferX;
        imgY=bufferY;
        //画出图片
        img = document.createElement('img');
        // 设置图片随机大小
        img.style.width = imgW + "px";
        img.style.height = imgW + "px";
        //设置图片随机位置
        img.style.position = "absolute";
        img.style.left=imgX+"px";
        img.style.top =imgY+"px";
        //随机创建图片地址
        this.randomImg();
        img.src = imgs[index];
        moveBg.appendChild(img);
        //判断图片类型
        this.imgType();
    }

    // 图片类型确定
    this.imgType=function () {
        if(img.src.match("clock")){
            this.imgSrc="clock";
        }
        else if(img.src.match("people")){
            this.imgSrc="people";
        }
        else if(img.src.match("animal")){
            this.imgSrc="animal";
        }
        else if(img.src.match("plant")){
            this.imgSrc="plant";
        }
        else if(img.src.match("plate")){
            this.imgSrc="plate";
        }
        else if(img.src.match("cup")){
            this.imgSrc="cup";
        }
        else if(img.src.match("fruit")){
            this.imgSrc="fruit";
        }
        else if(img.src.match("letter")){
            this.imgSrc="letter";
        }
        else if(img.src.match("number")){
            this.imgSrc="number";
        }
        else if(img.src.match("umbrella")){
            this.imgSrc="umbrella";
        }
        else if(img.src.match("money")){
            this.imgSrc="money";
        }
        else if(img.src.match("vehicle")){
            this.imgSrc="vehicle";
        }
        else if(img.src.match("clothe")){
            this.imgSrc="clothe";
        }
    }

    //图片随机
    this.randomImg=function () {
        var randomImgs=Math.ceil(Math.random()*13);
        switch(randomImgs){
            case 1:
                imgs=animals;
                typeImg="animal";
                break;
            case 2:
                imgs=clocks;
                typeImg="clock";
                break;
            case 3:
                imgs=clothes;
                typeImg="clothe";
                break;
            case 4:
                imgs=cups;
                typeImg="cup";
                break;
            case 5:
                imgs=fruits;
                typeImg="fruit";
                break;
            case 6:
                imgs=letters;
                typeImg="letter";
                break;
            case 7:
                imgs=moneys;
                typeImg="money";
                break;
            case 8:
                imgs=numbers;
                typeImg="number";
                break;
            case 9:
                imgs=peoples;
                typeImg="people";
                break;
            case 10:
                imgs=plants;
                typeImg="plant";
                break;
            case 11:
                imgs=plates;
                typeImg="plate";
                break;
            case 12:
                imgs=umbrellas;
                typeImg="umbrella";
                break;
            case 13:
                imgs=vehicles;
                typeImg="vehicle";
                break;
    }

        var randomPos=Math.floor(Math.random()*10);
        index=randomPos;

    }


    var isCorrect=true;
    //点击正确图片显示
    this.judgeImg=function () {
            //创建图片节点
            judge=document.createElement('img');
            judge.style.width = 30 + "px";
            judge.style.height = 30 + "px";
            //设置图片随机位置
            judge.style.position = "absolute";
            judge.style.left=imgX+"px";
            judge.style.top =imgY+"px";
            if(isCorrect)
                judge.src="./img/yes.png";
            else
                judge.src="./img/no.png";
            moveBg.appendChild(judge);
    }


    // 创建类型
    this.onClick=function () {
        if(img.src.match(type.typeContext)){
            type.typeNum--;
            if(type.typeNum==0)
            {
                var random = Math.floor(Math.random() * 13);
                switch(random){
                    case 0:
                        type.typeContext="clock";
                        type.typeNum=type.types[0].num;
                        break;
                    case 1:
                        type.typeContext="people";
                        type.typeNum=type.types[1].num;
                        break;
                    case2:
                        type.typeContext="animal";
                        type.typeNum=type.types[2].num;
                        break;
                    case 3:
                        type.typeContext="plate";
                        type.typeNum=type.types[3].num;
                        break;
                    case 4:
                        type.typeContext="plant";
                        type.typeNum=type.types[4].num;
                        break;
                    case 5:
                        type.typeContext="money";
                        type.typeNum=type.types[5].num;
                        break;
                    case 6:
                        type.typeContext="letter";
                        type.typeNum=type.types[6].num;
                        break;
                    case 7:
                        type.typeContext="number";
                        type.typeNum=type.types[7].num;
                        break;
                    case 8:
                        type.typeContext="cup";
                        type.typeNum=type.types[8].num;
                        break;
                    case 9:
                        type.typeContext="fruit";
                        type.typeNum=type.types[9].num;
                        break;
                    case 10:
                        type.typeContext="umbrella";
                        type.typeNum=type.types[10].num;
                        break;
                    case 11:
                        type.typeContext="vehicle";
                        type.typeNum=type.types[11].num;
                        break;
                    case 12:
                        type.typeContext="clothe";
                        type.typeNum=type.types[12].num;
                        break;
                }
            }
            type.reTypeNum();
            //点击正确加时间
            timeView.addTime();
            //点击正确加分
            score.addScore();
            that.randomImg();
            img.src = imgs[index];
            //显示图片
            that.judgeImg();
        }
        else {
            //点击错误减时间
            timeView.reduceTime();
            //点击错误减分
            score.reduceScore();
            //图片点击错误显示
            isCorrect=false;
            //显示图片
            that.judgeImg();
        }
        //显示分数
        score.displayScore();
    }

    this.run=function () {
        // judgeBox.forEach=function () {

        // }
    }



}