// 构造函数  Food
//  属性
//    backgroundColor
//    width
//    height
//    x
//    y
//  方法
//    render   渲染
//    random   随机位置

// var _position = 'absolute';
// var _div = null;
// var _map = null;
function Food(options) {
  options = options || {};
  // 食物的颜色
  this.color = options.color || 'green';
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.x = options.x || 0;
  this.y = options.y || 0;
}

// 方法
Food.prototype.render = function (map) {
  var div = document.createElement('div');
  map.appendChild(div);
  // 记录当前食物对象对应的div元素
  _div = div;
  // 记录地图
  _map = map;

  div.style.position = _position;
  div.style.left = this.x + 'px';
  div.style.top = this.y + 'px';

  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';

  div.style.backgroundColor = this.color;
}

Food.prototype.random = function () {
  // 改造
  this.x = Tool.getRandom(0, _map.offsetWidth / this.width - 1) ;
  this.y = Tool.getRandom(0, _map.offsetHeight / this.height - 1) ;

  _div.style.left = this.x * this.width + 'px';
  _div.style.top = this.y * this.height + 'px';
}


// 测试
// var map = document.getElementById('map');
// var food = new Food();
// food.render(map);
// food.random();