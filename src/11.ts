// Challenge 11
/* 
Construct a function objectFilter that accepts an object as the first parameter 
and a callback function as the second parameter. 
objectFilter will return a new object. 
The new object will contain only the properties from the input object such that 
the property's value is equal to the property's key passed into the callback.
*/

type callbackFunction = ((arg: string) => string);

const objectFilter = (item: { [key: string]: string }, callback: callbackFunction) => {
    const newObject: { [key: string]: string } = {};

    Object.entries(item).forEach(([key, value]) => {
        if (callback(key) === value) {
            newObject[key] = value;
        }
    });
    return newObject;
}

const cities = {
    London: "LONDON",
    LA: "Los Angeles",
    Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

// Should log { London: 'LONDON', Paris: 'PARIS'}