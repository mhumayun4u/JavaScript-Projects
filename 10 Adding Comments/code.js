// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
 


// Name: Muhammad Humayun
// Date: 15-9-2022
// Program: Favorite Number
let favNum = 7;
let msg = favNum + " is my Favorite Number."
console.log(msg); 

console.log("======================================="); 

//-----------------------
// Name: Muhammad Humayun
// Date: 15-9-2022
// Program: Name Cases

let personName = "MUHAMMAD HUMAYUN DEVELOPER";

//Convert name into lowercase
console.log(personName.toLowerCase());

//Convert name into uppercase
console.log(personName.toUpperCase()); 

//Covert name into char
let tcase = personName.toLowerCase().split(' ');
let tcaseTxt = "";

//Loop covert text into title case
for(let i = 0; i < tcase.length; i++ ){
    tcaseTxt += tcase[i].charAt(0).toUpperCase() + tcase[i].slice(1) + " ";
}

//print text into title case
console.log(tcaseTxt);