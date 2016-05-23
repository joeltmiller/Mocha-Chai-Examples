var bar = {};

bar.addOne = function addOne(foo){
  return foo + 1;
}

bar.doubleIt = function doubleIt(foo){
  return foo * 2;
}

bar.halfIt = function halfIt(foo){
  return foo / 2;
}

bar.randomNum = function randomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

bar.timesTen = function timesTen(foo){
  return foo * 10;
}

bar.timesThree = function timesThree(foo){
  return foo * 3;
}

module.exports = bar;
