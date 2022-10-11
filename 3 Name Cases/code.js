// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

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