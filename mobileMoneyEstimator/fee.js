const prompt = require('prompt-sync')();

// Prompt the user to enter the amount they want to send.
const amountToSend = prompt('Karibu kwa SendKakitu Estimator, Unatuma shingapi?');

function estimateTransactionFee(amountToSend) {

    const transactionPercentage = 0.015; // 1.5% transaction fee
    const minimumFee = 10; // Minimum transaction fee
    const maximumFee = 70; // Maximum transaction fee
    const calculatedFee = transactionPercentage * amountToSend; // Calculate the transaction fee based on the percentage
    const actualFee = Math.min(Math.max(calculatedFee, minimumFee), maximumFee); // Determine the actual fee to use
    const totalAmount = Number(amountToSend) + Number(actualFee); // Total amount to be debited

    // Ensuring the amount to send is a valid number and greater than zero
    if (amountToSend <= 0 || isNaN(amountToSend)) {
        return "Please enter a valid amount to send.";
    }

    // Returning the formatted output based on the actual fee to be charged
    else  {
        return `Sending KES ${amountToSend}.\n` +
       `Calculated Transaction Fee: KES ${actualFee}\n` +
       `Total amount to be debited: KES ${totalAmount}\n\n` +
       "Send Money Securely!";
    }
}
// Calling the function to output the result
console.log(estimateTransactionFee(amountToSend));