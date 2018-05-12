function Game2048(option){
    var defaultOption = {
        xSize: 4,
        ySize: 4,
        blockSize:100,
        blockPadding:15,
    }
    var o = $.extend({},defaultOption,option);
    var emptyLists = new Array();//空的盒子坐标数组
    var gameData = new Array();//游戏数据二维数组
    var miniBoxs = new Array();//盒子数据二维数组
    var styleLists = ["l0","l1","l2","l3","l4","l5","l6","l7","l8","l9","l10","l11"];
    var $gameBox = $("#game");
    var oldDate = new Date();//用于记时
    var tDate = new Date();
    var sum = 0;//用于记数；
    //setStyle初始化样式与gameData，miniBoxs数组;
    function setStyle(){
        $gameBox.css({
            "width":o.xSize*(o.blockSize+o.blockPadding)+o.blockPadding,
            "height":o.ySize*(o.blockSize+o.blockPadding)+o.blockPadding,
        })
        for(var x=0;x<o.xSize;x++){
            gameData[x]=new Array();
            miniBoxs[x]=new Array();
            for(var y=0;y<o.ySize;y++){
                var $miniBox = $("<div></div>");
                $miniBox.css({
                    "top":y*(o.blockSize+o.blockPadding)+o.blockPadding,
                    "left":x*(o.blockSize+o.blockPadding)+o.blockPadding,
                })
                miniBoxs[x][y] = $miniBox;
                gameData[x][y] = null;
                $gameBox.append($miniBox);
            }
        }
    }
    setStyle();
    //得到空的盒子坐标；
    function getEmpty(){
        emptyLists = [];
        for(var x=0;x<o.xSize;x++){
            for(var y=0;y<o.ySize;y++){
                if(!gameData[x][y]){
                    emptyLists.push({'x':x,'y':y})
                }
            }
        }
        return emptyLists;
    }
    getEmpty()
    //做一个比较的函数；
    function bj(cx,cy,tx,ty){
        if(!gameData[cx][cy]||!gameData[tx][ty])throw "当前对象或目标对象为空";
        if(gameData[tx][ty].level==gameData[cx][cy].level&&!gameData[tx][ty].isMatch){
            gameData[tx][ty].level+=1;
            gameData[tx][ty].isMatch = true;
            gameData[cx][cy]=null;
            dataToImg();
        }else{
            // console.log("条件不符合",gameData[cx][cy],gameData[tx][ty])
        }
    }
    //产生新的盒子；
    function buildBox(){
        getEmpty(emptyLists);
        var emptyIndex=Math.floor(Math.random()*emptyLists.length);
        var x=emptyLists[emptyIndex].x;
        var y=emptyLists[emptyIndex].y;
        var tempLevel = Math.floor(Math.random()*2);
        sum++;
        gameData[x][y] = {
            level:tempLevel,
            isMatch:false,
        }
        if(emptyLists.length==1){gameOver();}
        setTimeout(dataToImg,200);
    }
    for(var i =0;i<2;i++){
        buildBox();
    }
    //把数据渲染成图像
    function dataToImg(){
        for(var x=0;x<o.xSize;x++){
            for(var y=0;y<o.ySize;y++){
                if(gameData[x][y]){
                    gameData[x][y].isMatch=false;
                    var sameClass=miniBoxs[x][y].attr("class")==styleLists[gameData[x][y].level]
                    if(!sameClass){
                         miniBoxs[x][y].attr("class",styleLists[gameData[x][y].level])
                         .html(Math.pow(2,gameData[x][y].level+1));
                    }
                }else{
                    miniBoxs[x][y].attr("class",'').html("");
                }
            }
        }
    }
    //事件绑定
    $("body").keydown(function(eve){
        if(eve.which==38){
            ttp()
        }else if(eve.which==40){
            down();
        }else if(eve.which==37){
            left();
        }else if(eve.which==39){
            right();
        } 
    })
    function down(){
        var cDate=new Date();
        if(cDate-tDate<200){return false;}
        var canBuildBox = false;
        for(var y=o.ySize-2;y>-1;y--){
            for(var x=0;x<o.xSize;x++){
                var c =gameData[x][y];
                var t =gameData[x][y+1];
                var tempy=y;
                if(c!=null&&t==null){
                    gameData[x][y]=null;
                    canBuildBox=true;
                    do{tempy++}while(tempy<o.ySize&&!gameData[x][tempy]);
                    gameData[x][tempy-1]=c;
                    setTimeout(dataToImg,100);
                    if(tempy<o.ySize&&gameData[x][tempy-1].level==gameData[x][tempy].level){
                        if(!gameData[x][tempy].isMatch){bj(x,tempy-1,x,tempy);}
                    }
                }else if(c&&t&&c.level==t.level&&!t.isMatch){
                    bj(x,y,x,y+1);
                    canBuildBox=true;
                }
            }
        }
        tDate=cDate;
        if(canBuildBox){buildBox();}
    }
    function ttp(){
        var cDate=new Date();
        if(cDate-tDate<200){return false;}
        canBuildBox=false;
        for(var y=1;y<o.ySize;y++){
            for(var x=0;x<o.xSize;x++){
                var c=gameData[x][y];
                var t=gameData[x][y-1];
                var tempy=y;
                if(c!=null&&t==null){
                    gameData[x][y]=null;
                    canBuildBox=true;
                    do{tempy--}while(tempy>-1&&!gameData[x][tempy]);
                    gameData[x][tempy+1]=c;
                    setTimeout(dataToImg,100);
                    if(tempy!=-1&&gameData[x][tempy+1].level==gameData[x][tempy].level){
                        if(!gameData[x][tempy].isMatch){bj(x,tempy+1,x,tempy);}
                    }
                }else if(c&&t&&c.level==t.level&&!t.isMatch){
                    bj(x,y,x,y-1);
                    canBuildBox=true;
                }
            }
        }
        tDate=cDate;
        if(canBuildBox){buildBox();}
        
    }
    function right(){
        var cDate=new Date();
        if(cDate-tDate<200){return false;}
        canBuildBox=false;
        for(var x=o.xSize-2;x>-1;x--){
            for(var y=0;y<o.ySize;y++){
                var c=gameData[x][y];
                var t=gameData[x+1][y];
                var tempx=x;
                if(c!=null&&t==null){
                    gameData[x][y]=null;
                    canBuildBox=true;
                    do{tempx++}while(tempx<o.xSize&&!gameData[tempx][y]);
                    gameData[tempx-1][y]=c;
                    setTimeout(dataToImg,100);
                    if(tempx<o.xSize&&gameData[tempx-1][y].level==gameData[tempx][y].level){
                        if(!gameData[tempx][y].isMatch){bj(tempx-1,y,tempx,y);}
                    }
                }else if(c&&t&&c.level==t.level&&!t.isMatch){
                    bj(x,y,x+1,y);
                    canBuildBox=true;
                }
            }
        }
        tDate=cDate;
        if(canBuildBox){buildBox()};
        
    }
    function left(){
        var cDate=new Date();
        if(cDate-tDate<200){return false;}
        canBuildBox = false;
        for(var x=1;x<o.xSize;x++){
            for(var y=0;y<o.ySize;y++){
                var c=gameData[x][y];
                var t=gameData[x-1][y];
                var tempx=x;
                if(c!=null&&t==null){
                    gameData[x][y]=null;
                    canBuildBox=true;
                    do{tempx--}while(tempx>-1&&!gameData[tempx][y]);//我想让当前的对象移动到非空的前面；tempx已经是下一个对象了；
                    gameData[tempx+1][y]=c;
                    setTimeout(dataToImg,100);
                    if(tempx!=-1&&gameData[tempx+1][y].level==gameData[tempx][y].level){
                        if(!gameData[tempx][y].isMatch){bj(tempx+1,y,tempx,y);}
                    }
                }else if(c&&t&&c.level==t.level&&!t.isMatch){
                    bj(x,y,x-1,y);
                    canBuildBox=true;
                }
            }
        }
        tDate=cDate;
        if(canBuildBox){buildBox();}
        
    }
    dataToImg();
    //游戏结束
    function gameOver(){
        var isEnd=true;
        for(var x=1;x<o.xSize;x++){
            for(var y=0;y<o.ySize;y++){
                if(gameData[x][y].level==gameData[x-1][y].level){isEnd = false;}
            }
        }
        for(var y=1;y<o.ySize;y++){
            for(var x=0;x<o.xSize;x++){
                if(gameData[x][y].level==gameData[x][y-1].level){isEnd = false;}
            }
        }
        if(isEnd){
            var newDate = new Date();
            sum-=o.xSize*o.ySize;
            var $over=$(".gameOver");
            var $time=$(".time");
            var $sum=$(".sum");
            var $btn=$("button");
            var time=Math.ceil((newDate-oldDate)/1000/60);
            $time.html("游戏时间："+time+"分钟");
            $sum.html("合并方块："+sum+"个");
            setTimeout(function(){$over.css("display","block");},2000);
            $btn.click(function(){location.reload()})
        }
    }
}