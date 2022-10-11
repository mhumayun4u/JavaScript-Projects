// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let locations = ["Iran", "France", "Turkey", "Oman", "America", "Dubai"];

//Location List.  
console.log("Locations array:");
console.log(locations);

//Location Alphabetic Order. 
console.log("Alphabetic order:");
console.log(locations.slice().sort());
 
//Show that your array is still in its original order by printing it.
console.log("Orignal order:");
console.log(locations);

//Location Reverse Alphabetic Order.
console.log("Reverse alphabetic order:");
console.log(locations.slice().sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("Orignal Order:");
console.log(locations);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order:");
console.log(locations.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order again:");
console.log(locations.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order:");
console.log(locations.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:");
console.log(locations.sort().reverse());