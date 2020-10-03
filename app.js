const num = 100;
let square = (function(a) {
      return a*a;
})(num);
console.log('square(${num})=' + square);