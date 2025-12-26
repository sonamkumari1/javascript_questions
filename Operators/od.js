let num=10

const increaseNumber=()=>num++
const incresePassedNumber=(number)=>number++

const num1=increaseNumber()
const num2=incresePassedNumber(num1)

console.log(num1)     //10
console.log(num2)     //10