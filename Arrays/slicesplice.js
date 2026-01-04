(function () {
  var list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list);

  output:-
  [ 'bar', 'john', 'ritz' ]
  [ 'foo', 'bar', 'john', 'ritz' ]

  var list1 = ["foo", "bar", "john", "ritz"];
  console.log(list1.slice(1, 3));
  console.log(list1);

  output:-
  [ 'bar', 'john' ]
  [ 'foo', 'bar', 'john', 'ritz' ]

  var list2 = ["foo", "bar", "john", "ritz"];
  console.log(list2.slice());
  console.log(list2);

  output:-
  [ 'foo', 'bar', 'john', 'ritz' ]
  [ 'foo', 'bar', 'john', 'ritz' ]

var list3 = ["foo", "bar", "john", "ritz"];
  console.log(list3.slice(2, 2));
  console.log(list3);

  output:-
  []
  [ 'foo', 'bar', 'john', 'ritz' ]

var list4 = ["foo", "bar", "john", "ritz"];
  console.log(list4.splice(1));
  console.log(list4);

   output:-
   [ 'bar', 'john', 'ritz' ]
   [ 'foo' ]

   var list5 = ["foo", "bar", "john", "ritz"];
  console.log(list5.splice(1, 2));
  console.log(list5);

  output:-
 [ 'bar', 'john' ]
[ 'foo', 'ritz' ]

})();