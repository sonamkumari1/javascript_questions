(function(){
    var greet="Hello world"
    var toGreet=[].filter.call(greet, function(element, index){
        return index>5
    })
    console.log(toGreet)   //[ 'w', 'o', 'r', 'l', 'd' ]
})();

(function(){
    const greet="Hello World"
    var toGreet = greet.slice(6);
  console.log(toGreet);                         // World
})();

(function () {
  var greet = "Hello world";
  var toGreet = greet.split("").filter((_, index) => index > 5).join("");
  console.log(toGreet);                             // world
})();

(function () {
  var greet = "Hello world";
  var toGreet = [...greet].slice(6).join("");
  console.log(toGreet);                               //world
})();

var greet = "Hello world";
var toGreet = greet.slice(6);
console.log(toGreet);

var secondOutput=greet.split("").filter((_,index)=>index>5)
console.log(secondOutput)                                   //[ 'w', 'o', 'r', 'l', 'd' ]

var secondOutput1=greet.split("").filter((_,index)=>index>5).join("")
console.log(secondOutput1)                                    //world

var secondOutput2=greet.split("")
console.log(secondOutput2) 

// [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o','r', 'l', 'd']

var thirdOutput = greet.substring(6);
console.log(thirdOutput);                                   //world

