var array = ['a','b','c','d','e','f','g','h','i','l'];

var strangeArray = function(array,numA,numB) {
    var strangeArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i >= numA && i <= numB ) {
                strangeArray.push(array[i]);
        }
    }
    return strangeArray;
}

console.log(strangeArray(array,1,4));
