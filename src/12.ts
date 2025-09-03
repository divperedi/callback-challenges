// Challenge 12
/* Create a function majority that accepts an array and a callback. 
The callback will return either true or false. majority will iterate 
through the array and perform the callback on each element until it can be 
determined if the majority of the return values from the callback are true. 
If the number of true returns is equal to the number of false returns, 
majority should return false.
 */

type callbackFunction = (num: number) => boolean;

const majority = (array: number[], callback: callbackFunction): boolean => { 
    let result = 0;

    array.forEach(num => {
        if (callback(num)) {
            result++;
        }
    });

    return result > array.length / 2;
}

const isOdd = function (num: number) {
    return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// should log: true

console.log(majority([2, 3, 4, 5], isOdd)); 
// should log: false