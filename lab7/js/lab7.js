/**
 * Author:    Andrew Tamez
 * Created:   9.26.2022
 *
 * (c) Copyright by Tamez Codes.
 **/

//array of numbers
let number = [1, 3, 4, 8, 9];


//anonymous function to return true or false if number is odd
let isOdd = (number) => {
    return number % 2 != 0;
}

//returns true or false if number is odd
console.log("Is 1 odd?" , isOdd(1));
console.log("Is 2 odd?" , isOdd(2));

//saves reslts of isOdd fucntion as a varibale to be printed
var results = number.map(isOdd);


//prints both the array and results of whether or not the indecy is odd or not
console.log("Array of numbers: " + number);
console.log("Test of oddness of the array: " + results);

