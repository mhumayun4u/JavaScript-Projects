//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let names = ["Humayun", "Hassan", "Nabeel", "Shazaib"];

// Loop for print greeting message for each person.
for (let i = 0; i < names.length; i++){
    console.log("------------------------");
    //Print greetings with person name.
    console.log("Good Morning, " + names[i]);
}
console.log("------------------------");