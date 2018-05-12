// 构造函数 Game
// 属性
//  food
//  snake
// 方法
//  start  开始游戏


function Game() {
  this.food = new Food();
  this.snake = new Snake();
}

Game.prototype.start = function (map) {
  // 1 显示蛇和食物
  this.food.render(map);
  this.food.random();
  this.snake.render(map);

  // 2 让蛇动起来
  _runSnake(this, map);

  // 3 按键盘改变蛇的运动方向
  _bindKey(this);
}

// 2 让蛇动起来  私有的函数
function _runSnake(game, map) {
  var timerId = setInterval(function () {
    game.snake.move();

    // 判断蛇是否吃到食物
    _eat(game);


    // 判断蛇是否出去边界  出去边界游戏结束
    var x = game.snake.body[0].x;  // 几个蛇节的宽度
    var y = game.snake.body[0].y;

    if (x < 0 || y < 0) {
      // 越界  游戏结束
      clearInterval(timerId);
      alert('Game Over');
      // console.log('Game Over');
      return;
    }

    var maxX = map.offsetWidth / game.snake.width - 1;
    var maxY = map.offsetHeight / game.snake.height - 1;

    if (x > maxX || y > maxY) {
      // 越界  游戏结束
      clearInterval(timerId);
      alert('Game Over');
      // console.log('Game Over');
      return;
    }

    game.snake.render(map);
    
  }, 150);
}


function _eat(game) {
  // 判断蛇头是否吃到食物
  // 蛇的x和y  距离0,0具有几个蛇节的宽度
  var snakeX = game.snake.body[0].x;
  var snakeY = game.snake.body[0].y;

  // food的x和y 经过改造 距离0,0具有几个食物的宽度   --- 食物的大小要和蛇节的大小一致
  var foodX = game.food.x;
  var foodY = game.food.y;

  if (snakeX === foodX && snakeY === foodY) {
    // 1 随机生成食物的位置
    game.food.random();
    // 2 让蛇身增加一节
    var last = game.snake.body[game.snake.body.length - 1];
    
    var o = {
      x: last.x,
      y: last.y,
      color: last.color
    }
    game.snake.body.push(o);
  }
}

// 3 按键盘改变蛇的运动方向
function _bindKey(game) {
  document.onkeydown = function (e) {
    e = e || event;
    // console.log(e.keyCode);
    // 37 left  38 top  39 right 40 bottom
    switch (e.keyCode) {
      case 37:
        // 当当前方向是right 不允许掉头
        if (game.snake.direction === 'right') return;
        game.snake.direction = 'left';
        break;
      case 38:
        if (game.snake.direction === 'bottom') return;
        game.snake.direction = 'top';
        break;
      case 39:
        if (game.snake.direction === 'left') return;
        game.snake.direction = 'right';
        break;
      case 40:
        if (game.snake.direction === 'top') return;
        game.snake.direction = 'bottom';
        break;
    }
  }
}


// 测试
// var map = document.getElementById('map');
// var game = new Game();
// game.start(map);


