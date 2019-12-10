var array1 = [1, 2, 3];
var array2 = ["a", "b", "c"];


var newArray = array1.map(function(value, index) {
  return value + array2[index];
});
console.log(newArray);
