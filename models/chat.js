import readline from 'node:readline'

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const formatMessage = (userInput) => ({ role: 'user', content: userInput})