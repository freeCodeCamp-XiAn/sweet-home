// 工具对象

var Tool = {
  getRandom: function (min, max) {
    min = Math.ceil(min); //输入的参数转为整数
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}