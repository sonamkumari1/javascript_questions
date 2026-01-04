console.log(+"Hello");              //NaN

console.log("10 + 10");            //10 + 10

console.log("5" + 5 + 10);         //5510

console.log("5 + 5 + 5" + 10);      //5 + 5 + 510

console.log(10 + "5 + 5");          //105 + 5

console.log(10 + "5 + 5 + 5");       //105 + 5 + 5

//eval() is a built-in JavaScript function that executes a string as JavaScript code.

console.log(eval("10 + 10"));           //20

console.log(eval("5 + 5" + 10));        //515

console.log(eval("5 + 5 + 5" + 10));     //520

console.log(eval(10 + "5 + 5"));        //110

console.log(eval(10 + "5 + 5 + 5"));     //115

console.log(3 + 4 + "5");                //75
let a = "7" + 3 + 2;                     //732
let b = 7 + 3 + "2";                     //102

console.log(a, b);
console.log(typeof [1, [2, [3, [4, [5, 6]]]]][0]);         //Number

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);            //1

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);                       //[ 3, 2, 0.5 ]

