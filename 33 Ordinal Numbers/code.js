// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.

// Loop through the array.

// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Loop through the array.
for(let i = 0; i < numbers.length; i++){

// Use an if-else chain inside the loop to print the proper ordinal ending for each number.  
    if( i == 0 ){
        console.log(numbers[i] + 'st');
    }
    else if( i == 1 ){
        console.log(numbers[i] + 'nd');
    }
    else if( i == 2 ){
        console.log(numbers[i] + 'rd');
    }
    else if( i == 3 ){
        console.log(numbers[i] + 'th');
    }
    else if( i == 4 ){
        console.log(numbers[i] + 'th');
    }
    else if( i == 5 ){
        console.log(numbers[i] + 'th');
    }
    else if( i == 6 ){
        console.log(numbers[i] + 'th');
    }
    else if( i == 7 ){
        console.log(numbers[i] + 'th');
    }
    else if( i == 8 ){
        console.log(numbers[i] + 'th');
    }
}