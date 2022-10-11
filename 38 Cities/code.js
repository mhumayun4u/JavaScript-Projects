//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city, country = 'Pakistan'){
    console.log(city, 'is in', country);
}

// Call Function
describe_city('Karachi');
describe_city('Lahore');
describe_city('Islamabad');

describe_city('London', 'United Kingdom');
describe_city('Dallas', 'USA');