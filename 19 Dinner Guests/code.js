// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["Hassan", "Nabeel", "Faraz", "Faizan"];

//Location List.  
console.log("guestList array:");
console.log(guestList);

//Location Alphabetic Order. 
console.log("Alphabetic order:");
console.log(guestList.slice().sort());
 
//Show that your array is still in its original order by printing it.
console.log("Orignal order:");
console.log(guestList);

//Location Reverse Alphabetic Order.
console.log("Reverse alphabetic order:");
console.log(guestList.slice().sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("Orignal Order:");
console.log(guestList);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order:");
console.log(guestList.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order again:");
console.log(guestList.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order:");
console.log(guestList.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:");
console.log(guestList.sort().reverse());


//Print a message indicating the number of people you are inviting to dinner.
console.log("Total Number of Guests");
console.log("I have invited " + guestList.length + " Guests for Dinner.");
 