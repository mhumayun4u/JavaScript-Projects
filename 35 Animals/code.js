// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ['Cat', 'Dog', 'Horse'];

// Use a for loop to print out the name of each animal. 
for(let i = 0; i < animals.length; i++ ){
    console.log(animals[i]);
}

console.log('--------------------------');

// Modify your program to print a statement about each animal
for(let i = 0; i < animals.length; i++ ){
    console.log(animals[i] + ' would make a great pet.');
}

console.log('--------------------------');

// Add a line at the end of your program
console.log('Cat is a one of the popular pet animals which is tamed by human since long time. They are friendly and playful with people especially with children.');
console.log('A Dog is a domestic animal which is tamed by human being and is the most common pet of man.');
console.log('Horses have been very loyal and friendly companions of human beings. Horses provide entertainment to human beings by their sporting skills.');
console.log('All above animals have "Loyalty"');