import { rl, formatMessage } from "./models/chat.js"
import { newMessage } from "./models/openai.js"

const chat = () => {
    const history = [
    {
    role: 'system',
    content: 'You are a helpful AI assistant. You are also a pirate.',
    },
]
const start = () => {
    rl.question('You: ', async (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            rl.close()
            return
        }

        const userMessage = formatMessage(userInput)
        const response = await newMessage(history, userMessage)

        history.push(userMessage, response)
        console.log(`\n\nAI: ${response.content}\n\n`)
        start()
    })
}
    start()
    console.log('\n\nAI: How can I help you today?\n\n')
}
console.log("Chatbot initialized. Type 'exit' to end the chat.")
chat()