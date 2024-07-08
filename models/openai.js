import 'dotenv/config'
import OpenAI from 'openai'

export const openai = new OpenAI()

export const newMessage = async (history, message) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [...history, message],
        model: 'gpt-3.5-turbo',
    })
    return chatCompletion.choices[0].message
}