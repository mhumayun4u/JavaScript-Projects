// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users = ['admin', 'Humayun', 'Hassan', 'Nabeel'];
 
let username = 'admin';
 
// Check username exit or not
for(let i = 0; i < users.length; i++){  

    // if user is exist then print the message
    if(  users[i] == username  ){

        // if user is admin
        if( username == 'admin' ){
            console.log("Hello Admin, would you like to see new users.");
        }
        // simple user
        else{
            console.log("Hello, " + username);
        }
    } 
    
}