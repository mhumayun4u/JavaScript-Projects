//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Make a array of magician’s names. 
const magician = ['Humayun', 'Hassan', 'Nabeel', 'Shahzaib'];

// Pass the array to a function called show_magicians()
function show_magicians(magician_name){
    // name of each magician in the array
    magician_name.forEach(name => {
        console.log(name);
    });
}

// Write a function called make_great()
function make_great(magician_name){
    // Modyfy the array
    magician_name.forEach((name, index) => {
        magician_name[index] = 'Great ' + name;
    });
}

// Call the functions
make_great(magician);
show_magicians(magician);
