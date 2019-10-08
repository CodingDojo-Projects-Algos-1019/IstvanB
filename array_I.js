
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
var array = [1,2,4,7] 
    for (var i = array.length - 1; i >=0; i--) {
       array[i +1] = array[i];
    }
    array[0] = 3;
    
console.log(array);

var arr = ['b', 'c', 'd'],  // Or Es6
    x = 'a';
++arr.length;
arr.copyWithin(1, 0);
arr[0] = x;

console.log(arr); // ["a", "b", "c", "d"]

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for ( var i = 0; i < arr.length - 1; i++ ) {
        var currentV = arr[i+1];
        arr[i] = currentV;
        
    }
    arr.pop();
console.log(arr);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
var testArray = [1,2,3,4,5,6,7,8,9,10]
function insertAt(array, position, value){
    for (var index = array.length; index > position; index--){
        var currentV = array[index - 1];
        array[index] = currentV;
    }
    array[position] = value;
    console.log('insert at', array);
    return array;
}
insertAt(testArray, 4, 888);


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(array, position){
    var value = array[position];

    for (var index = position; index < array.length -1; index++){
       var currentV = array[index + 1];
       array[index] = currentV;

    }
    array.length -= 1;
    console.log('removeAt', array, value);
    return value;
}
console.log(removeAt(testArray, 6));

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
var myArray = [1,2,3,4,5,6,7,8]
function swapArr(array, indexA, indexB){
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
    return array;
}
console.log(swapArr(myArray, 4, 6));


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.
var arr = [1,2,2,3,4,4,5,5,5,6,7,7,8,9,10,10]
var newarr = [arr[0]];
for (var i=1; i<arr.length; i++) {
   if (arr[i]!=arr[i-1]) newarr.push(arr[i]);
}
console.log(newarr);

