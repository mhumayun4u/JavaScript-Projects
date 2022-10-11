//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Make a array of magician’s names. 
const magician = ['Humayun', 'Hassan', 'Nabeel', 'Shahzaib'];

// Pass the array to a function called show_magicians()
function show_magicians(magician_name){ 
    
    // name of each magician in the array
    magician_name.forEach(name => {
        console.log(name);
    });
}



show_magicians(magician);