const prompt = require('prompt-sync')();

// Prompt the user to enter the distance in kilometers.
const distanceInKm = prompt('Aje aje Bossi! Leo tunafika wapi? ni kilometer ka ngapi?');

// Function to calculate the boda fare based on the distance entered.
function calculateBodaFare(distanceInKm) {
    
    // Rounding up the distance to the next whole number.
    const roundedDistance = Math.ceil(distanceInKm); 
    
    // Checking if the distance entered is valid.
    if (distanceInKm <= 0 || isNaN(distanceInKm)) {
        return "Boss, Ni kama mazematics inakataa, weka distance in kilometers.";
    }
    
    // If the distance entered is valid, calculate the fare.
    else { 
        return "Uko ni far? Anyway, Io ni kitu " + roundedDistance + "km.\n" +
               "Ukikalia Pikipiki: KES 50 \n" +
               "Mpaka Uko: KES " + (roundedDistance * 15) + "\n" +
               "So, Total: KES " + (50 + (roundedDistance * 15)) + "\n\n" +
               "Panda Pikipiki Boss yangu!";
    }
}
// Calling the function to output the result
console.log(calculateBodaFare(distanceInKm));