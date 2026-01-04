function createCounter(){
    let count=0;

    function counter(){
        count++;
        return count
    }

    counter.reset=function(){
        count=0
    }
    return counter
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

counter.reset();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3