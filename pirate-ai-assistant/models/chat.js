import readline from 'node:readline'

// Exporting readline module
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to format user input as a message object
export const formatMessage = (userInput) => ({ role: 'user', content: userInput})