// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let cars = [
    'Subaru', 'Honda', 'Civic', 'Suzuki', 'Mehran'
];

// print all cars
console.log(cars);

// Tests for equality and inequality with strings
console.log(cars[1] === 'honda');
console.log(cars[1] !== 'honda');

// Tests using the lower case function
let car1 = cars[2].toLowerCase();
console.log(car1 == 'civic');
console.log(cars[0].toLocaleLowerCase == 'Civic');


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 
console.log(cars.length == 5);
console.log(cars.length == 5 && cars[0].length != 2);
console.log(cars[0].length > 20 );
console.log(cars[0].length < 20 || cars[0].length == 2);


// Tests using "and" and "or" operators

console.log(cars[0] == 'Subaru' && cars[4] == 'Mehran'); 
console.log(cars[0] == 'Audi' || cars[4] == 'BMW');

// Test whether an item is in a array

console.log(cars.includes('Honda'));
console.log(!cars.includes('Honda'));
