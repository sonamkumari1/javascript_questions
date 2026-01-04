(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);

  console.log(array1);      //[]
  console.log(array2);      //[ <100 empty items> ]
  console.log(array3);      //[ [ '1', 2, '3', 4, 5.6 ] ]
  console.log(array3.length);  //1
})();

var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA);       //[ { prop1: 42 }, { someProp: 'also value of array A!' }, 3, 4, 5 ]