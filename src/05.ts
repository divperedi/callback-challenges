// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, 
use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/

function addTwo(num: number) {
    return num + 2;
}

type callbackFunction1 = (num: number) => number;

function mapWith(array: number[], callback: callbackFunction1) {
    const newArr: number[] = [];
    array.forEach((num) => newArr.push(callback(num)));
    return newArr;
}

console.log(mapWith([1, 2, 3], addTwo)); 
//should output [ 3, 4, 5 ]