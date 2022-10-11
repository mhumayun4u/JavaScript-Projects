// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['apple', 'mango', 'banana'];
 
// Write five if statements. Each should check whether a certain kind of fruit is in your array. 

if( favorite_fruits.includes('apple') ){
    console.log('I really like Apples.');
} 

if( favorite_fruits.includes('mango') ){
    console.log('I really  like Mangos.');
} 

if( favorite_fruits.includes('banana') ){
    console.log('I really  like Bananas.');
} 

if( !favorite_fruits.includes('pear') ){
    console.log('I need Pear to add in my list.');
}

if( !favorite_fruits.includes('watermelon') ){
    console.log('I need Watermelon to add in my list.');
}
