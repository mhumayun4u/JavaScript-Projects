// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//Write a function that stores information about a car in a Object.
function cars(manufacturer, model, ...option){

  let car = {manufacturer: manufacturer, model: model};

  // if function has option value
  if(option.length > 0){
   
    for(let i = 0; i < option.length; i++){
      let value = option[i].split("=")
      car[value[0]] = value[1]; 
    }  

  }
  

  return car;
}

//Print functions

console.log(cars('Honda', 'Civic'));

console.log(cars('Honda', 'Civic', 'color=Black')); 

console.log(cars('Honda', 'Civic', 'color=Red', 'make=2013')); 

console.log(cars('Suzuki', 'Mehran', 'color=White', 'make=2000', 'option1=sometext', 'option2=moretext'));

