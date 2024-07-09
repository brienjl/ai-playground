import 'dotenv/config'
import OpenAI from 'openai'

// Exporting the 'openai' instance of the OpenAI class
export const openai = new OpenAI()

// Defining a newMessage function that takes in 'history' and 'message' parameters
export const newMessage = async (history, message) => {
    // Creating a chat completion using the 'openai' instance
    const chatCompletion = await openai.chat.completions.create({
        messages: [...history, message],
        model: 'gpt-3.5-turbo',
    })
    // Returning the message from the first choice of the chat completion
    return chatCompletion.choices[0].message
}