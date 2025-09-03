// Challenge 9
/* 
Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. 
To build the object, objOfMatches will test each element of the first array 
using the callback to see if the output matches the corresponding element (by index) of the second array. 
If there is a match, the element from the first array becomes a key in an object, 
and the element from the second array becomes the corresponding value.
*/

const objOfMatches = (arr1: string[], arr2: string[], callback: (str: string) => string) => {
    const result: { [key: string]: string } = {};
    arr1.forEach((element, index) => {
        if (callback(element) === arr2[index]) {
            result[element] = arr2[index];
        }
    });

    return result;
}

console.log(
    objOfMatches(
        ["hi", "howdy", "bye", "later", "hello"],
        ["HI", "Howdy", "BYE", "LATER", "hello"],
        function (str: string) {
            return str.toUpperCase();
        }
    )
);

// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }