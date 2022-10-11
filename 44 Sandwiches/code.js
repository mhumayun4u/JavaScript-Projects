 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 

  function make_sandwich(){ 
    console.log("ORDER DETAILS");
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i] + " added on your sandwich.");
    }
    console.log('---------------------');
  }


  make_sandwich('ketchup');
  make_sandwich('ketchup', 'cheese');
  make_sandwich('ketchup', 'cheese', 'onion');