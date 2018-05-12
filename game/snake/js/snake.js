// 构造函数 Snake
// 属性
//  width   蛇节 的宽度 默认20
//  height  蛇节 的高度 默认20
//  body    数组 蛇头 和  蛇身体  数组中的第一项是蛇头
//  direction  方向 默认 right -- left   top  bottom
// 方法
//  render   渲染
//  move     

//这里存储的是几个作用域共用的变量
var _position = 'absolute';
// 记录之前创建的蛇
var _elements = [];

function Snake(options) {
  options = options || {};   // 这里仍然是为了防止参数未传入
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.direction = options.direction || 'right';
  this.body = [
    //存储的是初始蛇的蛇头蛇身的位置和颜色
    {x: 3, y: 2, color: 'red'},
    {x: 2, y: 2, color: 'blue'},
    {x: 1, y: 2, color: 'blue'}
  ];
}

Snake.prototype.render = function (map) {
  // 删除之前创建的蛇对象
  _remove();

  // 记录当前作用域的this -- 蛇对象
  var that = this;
  // 把蛇显示到界面上
  this.body.forEach(function (item) {
    
    // 此处有一个function 新开了一个作用域，此处的this 是window
    // 蛇节
    var div = document.createElement('div');
    map.appendChild(div);
    // 记录创建好的蛇
    _elements.push(div);
    div.style.width = that.width + 'px';
    div.style.height = that.height + 'px';
    div.style.backgroundColor = item.color;
    div.style.position = _position;
    div.style.left = item.x * that.width + 'px';
    div.style.top = item.y * that.height + 'px';
  })
}

// 私有的删除函数(方法)
function _remove() {
  // 可以方便快速遍历数组中的元素，但是不能做修改的操作
  // _elements.forEach
  var i = _elements.length - 1;
  for (; i >= 0; i--) {
    // 获取数组中的元素 div
    var item = _elements[i];
    // 从界面上把div移除
    item.parentNode.removeChild(item);
    // 从数组中把元素移除
    // _elements.length = _elements.length - 1;
    _elements.splice(i, 1);
  }
}


Snake.prototype.move = function () {
   // 1 蛇身  后一节 到前一节的位置
   for (var i = this.body.length - 1; i > 0; i--) {
    this.body[i].x = this.body[i - 1].x;
    this.body[i].y = this.body[i - 1].y;
  }
  // 2 蛇头的位置  根据方向来定
  switch (this.direction) {
    case 'right':
      this.body[0].x += 1;
      break;
    case 'left':
      this.body[0].x -= 1;
      break;
    case 'top':
      this.body[0].y -= 1;
      break;
    case 'bottom':
      this.body[0].y += 1;
      break;
  }
}


// 测试
// var map = document.getElementById('map');
// var snake = new Snake();

// snake.move();
// snake.render(map);

// snake.move();
// snake.render(map);

// snake.move();
// snake.render(map);