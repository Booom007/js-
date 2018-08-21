function Types() {
    //创建图片类型
    var type;
    //图片创建数量
    this.typeNum;
    //图片创建类型
    this.typeContext;
    // 所有图片中各类型的数量的数组初始化
    this.types=[
        {type:"clock",num:0},
        {type:"people",num:0},
        {type:"animal",num:0},
        {type:"plate",num:0},
        {type:"plant",num:0},
        {type:"money",num:0},
        {type:"letter",num:0},
        {type:"number",num:0},
        {type:"cup",num:0},
        {type:"fruit",num:0},
        {type:"umbrella",num:0},
        {type:"vehicle",num:0},
        {type:"clothe",num:0}
    ]

    this.init=function (game) {
        //图片类型提示初始化
        type=document.createElement('h2');
        type.style.color="#fff";
        // 设置位置
        type.style.position="absolute";
        type.style.left=130+"px";
        type.style.top=-20+"px";
        game.appendChild(type);
    }

    // 图片类型提示显示内容
    this.reTypeNum=function () {
        type.innerHTML=this.typeNum+this.typeContext;
    }

    this.randomTips=function () {
        var random = Math.floor(Math.random() * 13);
        switch (random) {
            case 0:
                this.typeContext = this.types[0].type;
                this.typeNum = this.types[0].num;
                break;
            case 1:
                this.typeContext = this.types[1].type;
                this.typeNum = this.types[1].num;
                break;
            case 2:
                this.typeContext = this.types[2].type;
                this.typeNum = this.types[2].num;
                break;
            case 3:
                this.typeContext = this.types[3].type;
                this.typeNum = this.types[3].num;
                break;
            case 4:
                this.typeContext = this.types[4].type;
                this.typeNum = this.types[4].num;
                break;
            case 5:
                this.typeContext = this.types[5].type;
                this.typeNum = this.types[5].num;
                break;
            case 6:
                this.typeContext = this.types[6].type;
                this.typeNum = this.types.num;
                break;
            case 7:
                this.typeContext = this.types[7].type;
                this.typeNum = this.types[7].num;
                break;
            case 8:
                this.typeContext = this.types[8].type;
                this.typeNum = this.types[8].num;
                break;
            case 9:
                this.typeContext = this.types[9].type;
                this.typeNum = this.types[9].num;
                break;
            case 10:
                this.typeContext =this.types[10].type;
                this.typeNum = this.types[10].num;
                break;
            case 11:
                this.typeContext = this.types[11].type;
                this.typeNum = this.types[11].num;
                break;
            case 12:
                this.typeContext = this.types[12].type;
                this.typeNum = this.types[12].num;
                break;
        }
    }
}