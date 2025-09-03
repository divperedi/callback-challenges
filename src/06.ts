// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

type callbackFunction = (num: number, num2: number) => number;

const reduce = (array: number[], callback: callbackFunction, i = 0) => {
    return array.reduce(callback, i);
}

const nums = [4, 1, 3];
const add = function (a: number, b: number) {
    return a + b;
};
console.log(reduce(nums, add, 0))
//should output 8