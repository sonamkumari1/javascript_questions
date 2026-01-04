var strA="hi there"
var strB=strA
strB="bye there"
console.log(strA)        //hi there

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);             //[ 1, 2, 3, <7 empty items>, 11 ]
console.log(numbers.length)        //11

var foo=[]
foo.push(1)
foo.push(2)
console.log(foo)        //[ 1, 2 ]