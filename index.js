import { rl, formatMessage } from "./models/chat.js"
import { newMessage } from "./models/openai.js"

/**
 * Recrusive function, initialize a chat session with the AI assistant
 * loads in 
 */
// Define a function called chat
const chat = () => {
    // Initialize the chat history with a system message
    const history = [
        {
            role: 'system',
            content: 'You are a helpful AI assistant. You are also a pirate.',
        },
    ]

    // Define a function called start to handle user input
    const start = () => {
        // Prompt the user for input
        rl.question('You: ', async (userInput) => {
            // Check if the user wants to exit the chat
            if (userInput.toLowerCase() === 'exit') {
                rl.close()
                return
            }

            // Format the user's message
            const userMessage = formatMessage(userInput)

            // Send the user's message to the AI assistant and get a response
            const response = await newMessage(history, userMessage)

            // Add the user's message and the AI's response to the chat history
            history.push(userMessage, response)

            // Display the AI's response
            console.log(`\n\nAI: ${response.content}\n\n`)

            // Start the chat again to prompt for the next user input
            start()
        })
    }

    // Start the chat
    start()

    // Display the initial message from the AI
    console.log('\n\nAI: How can I help you today?\n\n')
}

// Initialize the chatbot
console.log("Chatbot initialized. Type 'exit' to end the chat.")
chat()