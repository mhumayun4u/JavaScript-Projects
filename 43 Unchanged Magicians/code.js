//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Make a array of magician’s names. 
const magician = ['Humayun', 'Hassan', 'Nabeel', 'Shahzaib'];

// Pass the array to a function called show_magicians()
function show_magicians(magician_name){ 

    // name of each magician in the array
    magician_name.forEach(name => {
        console.log(name);
    });
}

// Make new array with 'Great'
function make_great(magician_name){
    let great_magician = [];
    magician_name.forEach((name) => {
        great_magician.push('Great ' + name);
    });
    return great_magician;
}
 



show_magicians(magician);
show_magicians(make_great(magician)); 