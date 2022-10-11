// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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


console.log("========================");

//can invite only two people for dinner
console.log("Sorry, I can invite only two people for dinner.");

console.log("========================");


//Sorry, I can’t invite you to dinner.
for(let i = 0; i < 5; i++){
   console.log(guestList.pop() + ", Sorry I can’t invite you to dinner.");
}


console.log("========================");
//Invitation send again.
for(let i = 0; i < guestList.length; i++){
   console.log(guestList[i]+ ", would you like to come for dinner?");
}

console.log("========================");


delete guestList[0];

delete guestList[1];

console.log(guestList);
