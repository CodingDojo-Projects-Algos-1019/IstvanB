// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function noBlanks(str){
    str = str.replace(/\s/g,'');
    console.log(str); 
}
noBlanks(" Pl ayTha tF u nkyM usi c ");

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function giveMeNumbers(str){
    str = str.replace(/[^0-9]/g,'');
    console.log(str);
}

giveMeNumbers("0s1a3y5w7h9a2t4?6!8?0");

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function myAcronym(str){
    var matches = str.match(/\b(\w)/g);
    var str = matches.join('').toUpperCase();
    console.log(str);
}
myAcronym("Live from New York, it's Saturday Night!");