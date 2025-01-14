// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
// var myNumber = 42;
// var myName = 'Istvan';
// [myName, myNumber] = [myNumber, myName];
// console.log(myName,myNumber);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop. 
// for (var num=-52; num<1067; num=num+1)
// console.log(num);

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// function beCheerful(str)
// {
//     console.log( "good morning! " .repeat(98));
// }
// beCheerful()

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// for (var num=-300; num<0; num=num+3)
// {
//     if (num == -3 || num == -6)
//     {
//         continue;
//     }
// console.log(num);
// }
    

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE. 
// var num = 2000;
// while (num < 5280)
// {
//     num = num +1;
//     console.log(num);
// }

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
// function happyBday(num)
// {
//     if(num == 7 || num == 29)
//     {
//         console.log("How did you know?");
//     }
//     else
//     {
//         console.log("Just another day...");
//     }
// }
// happyBday(7);
// happyBday(10);

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, 
//it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
// function leapYear(year)
// {
//     return ((year % 4 == 0 && year % 100 != 0) || (year % 400 ==0));
// }
// console.log(leapYear(2004));

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// var count = 1;
// for (var num = 512; num<=4096; num = num+1)
// {
    
//     if (num % 5 ==0)
        
//     {
//         console.log(num);
//         console.log(count++);   
//     }
// }

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE. 
// let num = 0;
// while (num<=60000)
// {
//     num++;
//     if (num % 6 == 0){
        
//     console.log(num);   
//     }
    
// }

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
// let num = 0;
// for (let num = 1; num<=100; num++)
// {
//     if(num % 5 == 0 && num % 10 == 0)
//     {
//         console.log("Coding Dojo");
//     }
//     else if(num % 5 == 0)
//     {
//         console.log("Coding");
//     }
//     else
//     {
//         console.log(num);
//     }
// }

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
// function id(x) 
// {
//     return x;
// }
// console.log(id instanceof Function); // true

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
// var sum = 0;
// for (var i = -300000; i <= 300000; i += 2)
// {
//     sum += i;
// }
// console.log(sum);

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
// let num = 2016;
// while (num >= 0)
// {
//     num -= 4;
//     if (num == 0)
//     break;
    
//     console.log(num);
// }

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

//*** */practice***
arr = [2,5,8,90];
temp = arr[2];
arr[2] = arr[3];
arr[3] = temp;
console.log(arr)

var nums = [1,3,5,7]; // set up our loop
for (var idx = 0;idx < nums.length;idx++) // for each index in arr...
{
    
    console.log(nums[idx]); // ...print the value
}
console.log(nums);

var arr = [];
for (var val = 3; val <= 90; val = val+=3)
{
    arr.push(val); 
}
console.log(arr);
