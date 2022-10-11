//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// Write a function called make_shirt() that accepts a size and the text of a message 
function make_shirt(size = 'Large', message = 'I love JavaScript'){ 
    console.log('The Shirt Size is "'+ size + '"');
    console.log('Message Printed on Shirt is "' + message + '"');
}

// Call the function
make_shirt(); 

make_shirt('Medium', undefined );

make_shirt( undefined, 'I Love Programming');

make_shirt('XL', 'Pakistan Zindabad');

make_shirt('Small', 'I Love Pakistan');