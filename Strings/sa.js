// console.log(1 + -"1" + 2);             //2

var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result);               //NaN       


// Expression	Result
// undefined + 5---------------->	NaN
// null + 5	---------------------> 5
// 0 + 5 --------------------->	5
// " " + 5 -------------->	" 5"
