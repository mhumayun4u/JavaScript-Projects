// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList = ["Hassan", "Nabeel", "Faraz", "Faizan"];

//Invitation List.
 for(let i = 0; i < guestList.length; i++){
    console.log(guestList[i]+ ", would you like to come for dinner?");
 }
 
console.log("========================");

//Guest who can’t make it.
console.log(guestList[2] + ", can't make it.");

console.log("========================");

guestList[2] = "Ahsan";
//Invitation send again.
for(let i = 0; i < guestList.length; i++){
   console.log(guestList[i]+ ", would you like to come for dinner?");
}


console.log("========================");

//Pring I found a bigger dinner table
console.log("I found a bigger dinner table!");

console.log("========================");

guestList.unshift("Javed");
guestList.splice(3, 0, "Kamran")
guestList.push("Aqib");


//Invitation send again.
for(let i = 0; i < guestList.length; i++){
   console.log(guestList[i]+ ", would you like to come for dinner?");
}

