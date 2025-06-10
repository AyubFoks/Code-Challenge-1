const prompt = require('prompt-sync')();

// Prompt for the user to enter the number of cups they want to make.
const numberOfCups = prompt('How many cups of Kenyan Chai Bora do you want to make?');

// Function to calculate the ingredients needed for the specified number of cups.
function calculateChaiIngredients(numberOfCups) {

    // Rounding up the number of cups to the next whole number.
    const roundedNumberOfCups = Math.ceil(numberOfCups); 
    
    // Checking if the number of cups entered is valid.
    if (numberOfCups <= 0 || isNaN(numberOfCups)) { 
        return "Please enter a valid number of cups.";

    // If the number of cups entered is valid, calculate the ingredients needed.
    } else  { 
        return "To make " +(roundedNumberOfCups) + " cups of Kenyan Chai, you will need:\n \n" +
                "Water: " + (200 * roundedNumberOfCups) + " ml\n" +
                "Milk: " + (50 * roundedNumberOfCups) + " ml\n" +
                "Tea Leaves (Majani): " + (1 * roundedNumberOfCups) + " tablespoons\n" +
                "Sugar (Sukari): " + (2 * roundedNumberOfCups) + " teaspoons \n \n" +
                "Enjoy your Chai Bora!";
    }
}

// Call the function and output the result
console.log(calculateChaiIngredients(numberOfCups));