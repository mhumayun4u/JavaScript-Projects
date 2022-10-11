// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas = ['Chicken Fajita', 'Chicken Tikka', 'Cheesy', 'Veggie', 'Fajita Sicilian', 'BBQ'];

// For loop to print the name of each pizza.
for(let i = 0; i < pizzas.length; i++ ){
    console.log(pizzas[i]);
}

console.log('--------------------------');

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
for(let i = 0; i < pizzas.length; i++ ){
    console.log('I Like ' + pizzas[i] + ' Pizza');
}

console.log('--------------------------');

//Add a line at the end of your program,  
console.log('The Cheesy Pizza itself looks so yummy, crispy and so cheesy.');
console.log('I am always hungry for Chicken Tikka Pizza, be it any time of the day');
console.log('I really like Fajita Sicilian Pizza!');