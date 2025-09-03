//Challenge 3
/* Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

function addTwo(num: number) {
    return num + 2;
}

type callbackFunction = (num: number) => number;

function map(array: number[], callback: callbackFunction) {
    const newArr: number[] = [];
    array.forEach((num) => newArr.push(callback(num)));
    return newArr;
}

console.log(map([1, 2, 3], addTwo));