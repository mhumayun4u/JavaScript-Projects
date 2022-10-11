// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users = ['admin', 'Humayun', 'Hassan', 'Nabeel'];
 
let username = 'admin';
 
// Check username exist or not
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

console.log('--------------------------------');

// Remove all of the usernames from your array
users.length = 0;

//console.log(users);

if(users.length == 0){
    console.log('We need to find some users!');
}