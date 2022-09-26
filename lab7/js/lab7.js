/**
 * Author:    Andrew Tamez
 * Created:   9.26.2022
 * 
 * (c) Copyright by Tamez Codes.
 **/

let number = [1, 3, 4, 8, 9];

let isOdd = (number) => {
    return number % 2 != 0;
}

console.log("Is 1 odd?" , isOdd(1));
console.log("Is 2 odd?" , isOdd(2));

var results = number.map(isOdd);

console.log("Test of oddness on the array of numbers: ", results);