(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);                   //[ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]
})();

(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));                    //1
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" }));  //-1
  console.log([[1], [2], [3], [4]].indexOf([3]));                               //-1
  console.log("abcdefgh".indexOf("e"));             //4
})();