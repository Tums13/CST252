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

document.write("This is the original array: " + number + " ");
document.write("This function will test  eveness of the array, these are the results: " + results);
