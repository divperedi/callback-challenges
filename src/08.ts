// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array 
that contains all elements. If there are duplicate elements, only add it once to the new array. 
Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/

type callbackFunction = (num: number, num2: number) => number;

const reduce = (array: number[], callback: callbackFunction, i = 0) => {
    return array.reduce(callback, i);
}

const union = (arr1: number[], arr2: number[], arr3: number[]) => {
    return [... new Set([...arr1, ...arr2, ...arr3])];
}

const add = function (a: number, b: number) {
    return a + b;
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

const result = union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]);
console.log(reduce(result, add, 0));