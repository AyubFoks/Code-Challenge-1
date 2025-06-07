
function estimateTransactionFee(amountToSend) {

    const transactionPercentage = 0.015; // 1.5% transaction fee
    const minimumFee = 10; // Minimum transaction fee
    const maximumFee = 70; // Maximum transaction fee
    const calculatedFee = transactionPercentage * amountToSend; // Calculate the transaction fee based on the percentage
    
    // Ensuring the amount to send is a valid number and greater than zero
    if (amountToSend <= 0 || isNaN(amountToSend)) {
        return "Please enter a valid amount to send.";
    }

    // Checking the calculated fee against the minimum limit.
    else if (calculatedFee <= minimumFee) {
        return "Sending KES "+ amountToSend + ".\n" +
                "Calculated Transaction Fee: KES " + minimumFee + "\n" +
                "Total amount to be debited: KES " + (amountToSend + minimumFee) + "\n\n" +
                "Send Money Securely!";
    }

    // Checking the calculated fee against the maximum limit.
    else if (calculatedFee > maximumFee) {
        return "Sending KES " + amountToSend + ".\n" +
                "Calculated Transaction Fee: KES " + maximumFee + "\n" +
                "Total amount to be debited: KES " + (amountToSend + maximumFee) + "\n\n" +
                "Send Money Securely!";
    }

    // Checking if the calculated fee is within the minimum and maximum limits, return the calculated fee.
    else {
        return "Sending KES " + amountToSend + ".\n" +
                "Calculated Transaction Fee: KES " + calculatedFee + "\n" +
                "Total amount to be debited: KES " + (amountToSend + calculatedFee) + "\n\n" +
                "Send Money Securely!";
    }
}

// Example 1: Sending KES 500.
console.log(estimateTransactionFee(500)); 
    // Sending KES 500.
    // Calculated Transaction Fee: KES 10
    // Total amount to be debited: KES 510
    // 
    // Send Money Securely!

// Example 2: Sending KES 2000.
console.log(estimateTransactionFee(2000));
    // Sending KES 2000.
    // Calculated Transaction Fee: KES 30
    // Total amount to be debited: KES 2030
    //
    // Send Money Securely!

// Example 3: Sending KES 10000.
console.log(estimateTransactionFee(10000));
    // Sending KES 10000.
    // Calculated Transaction Fee: KES 70
    // Total amount to be debited: KES 10070
    //
    // Send Money Securely!