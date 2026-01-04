
function indexArray(){
    var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));                      //1
  console.log(array.indexOf(2, 3));                   //6
  console.log(array.indexOf(2, 10));                  //-1
}
indexArray()