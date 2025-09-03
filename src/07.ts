// Challenge 7
/* Construct a function intersection that compares input arrays and returns 
a new array with elements found in all of the inputs. BONUS: Use reduce!
 */

type callbackFunction = (num: number, num2: number) => number;

const reduce = (array: number[], callback: callbackFunction, i = 0) => {
    return array.reduce(callback, i);
}

const intersection = (arr1: number[], arr2: number[], arr3: number[]) => {
    return arr1.filter(item => arr2.includes(item) && arr3.includes(item));
}

const newArr = intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]);
console.log(newArr);

const multiply = function (a: number, b: number) {
    return a * b;
};
console.log(reduce(newArr, multiply, 1))
// should log: [5, 15]