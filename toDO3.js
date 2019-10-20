// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
// var arr= [2,3,5,-10,12,-6]
// for (var idx = 0; idx < arr.length; idx++){
        
//     if (arr[idx] < 0){
//         arr.splice(idx, 1);
//     }
    
// }
// console.log(arr);

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null
var arr= [42,true,4,"Kate",7]
for (var i = 0; i < arr.length-2; i++){
    arr[i] == arr.length-1;
        
}
console.log(arr[i]);

// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
var array = [99,50,57,3,1,29]

    var flarge = 0;
    var slarge = 0;
    for (var i = 0; i < array.length; i++) { 
            if (flarge < array[i]) {
                slarge = flarge;
                flarge = array[i];
            } else if (slarge < array[i]) { 
                if (array[i]!=flarge){
                    slarge = array[i];
                }
            }
    }
        
    console.log(slarge);

