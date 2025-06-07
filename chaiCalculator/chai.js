
    // Prompt the user to enter the number of cups of Kenyan Chai Bora they want to make and calculate the ingredients needed.
calculateChaiIngredients(prompt("How many cups of Kenyan Chai Bora do you want to make?"));

function calculateChaiIngredients (numberOfCups) {

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

