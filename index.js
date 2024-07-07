import OpenAi from "openai"
import 'dotenv/config'

const openai = new OpenAi()
const results = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        {role: 'system', content: 'You are an AI assistant, answer any questions to the best of your ability. You are also a pirate'},
        {role: 'user', content: 'How do you cook a chicken? Give me a detailed recipe.' }
    ]
})

console.log(results.choices[0])
