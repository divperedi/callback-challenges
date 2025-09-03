// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback
on each element of the array. forEach does not return anything.
*/
// see for yourself if your forEach works!
//console.log(alphabet);

type callbackFunction = (n: string) => void;

function forEach(array: string[], callback: callbackFunction) {
    array.forEach((n) => (callback(n)));
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char: string) {
    alphabet += char;
});

console.log(alphabet);
// should output abcd