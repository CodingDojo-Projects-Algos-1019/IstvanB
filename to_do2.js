// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

var array = [1,2,3,4,5,6,7,10];

function reverse(a) {
var b = [], counter = 0;
    for (var i = a.length-1; i >= 0; i -= 1) {
        b[counter] = a[i];
        counter += 1;
    }
    return b;
}

console.log(reverse(array)); 

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.
var arr = [1,2,3,4,5,6,7,8,9];

function rotateArr(array, shiftBy){
    console.log(array.length, shiftBy);
    while (shiftBy < 0){
        shiftBy += array.length;
    }
    shiftBy = shiftBy % array.length;    
    // for( i = 0; i < arr.length; i++){
    //     shiftBy[(i+ (arr.length-1)) % arr.length ] = arr[i];
    // }
    console.log('shift By', shiftBy);
    
    for (var i = 0; i < shiftBy; i++){
        var last = array.pop();
        console.log('rotate times', last);
        for (var n = array.length; n > 0; n--){ //This is the push to Front
            var content = array[n-1];
            array[n] = content;
        }
        array[0] = array[i];
    }
    
    
    return array;

        
}
console.log(rotateArr(arr, 5));

