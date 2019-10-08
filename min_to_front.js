
// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

function minToFront(array){
    var minPos = 0;

    for (let index = 1; index < array.length; index++ ){
        if (array[index] < array[minPos]){
            minPos = index;
        }
    }
    console.log('min Pos:', minPos);      //Saves min value in array as minValue to use in next step
    var minValue = array[minPos];

    for (index = minPos; index > 0; index--){
        var currentValue = array[index -1];
        array[index] = currentValue;
    }
    array[0] = minValue;
    console.log('min array:', array);
}
minToFront([4,2,1,3,5]);