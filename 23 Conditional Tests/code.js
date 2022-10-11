// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");

//----True Values-----

// check car equal or not
console.log(car == 'subaru');

// check string with data type
console.log(car === 'subaru');

// check string length equal or not
console.log(car.length == 6);

// check string length greater then 5 or not
console.log(car.length > 5);

// check string length greater then 5 or not
console.log(car.length > 5 && car.charAt(0) == 's');

console.log("--------------------------");

//----False Values-----


// check car not equal to subaru
console.log(car != 'subaru');

// check car type == number or not
console.log(typeof(car) == 'number');

// check car equal to suzuki or civic
console.log(car == 'suzuki' || car == 'civic');

// check car uppercase or not
console.log(car == 'SUBARU');

// check car include i or not
console.log(car.includes('i'));