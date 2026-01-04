var arr=["javascript","typescript","es6"]

var searchValue=(value)=>{
    return arr.filter((item)=>{
        return item.indexOf(value)>1
    })
}

console.log(searchValue("script")) 

// "javascript"
//   0123456789         //"script" starts at index 4  && 4>1

let a = [1, 2, 3];
let b = [4, 5, 6];

console.log(a + b);         // 1,2,34,5,6