# ai playground 🤖🧠
 
Messing around with ai and chat-GiPiDi(Tee). Feel free to steal my code before co-pilot does. Repo is focused on exploring design patterns and spiking on interesting ai topics and use cases. Code is commented for reference. 

## roadmap
Here's my roadmap. If I deep dive into anything, I'll cross-link those projects in the table of contents below. 
* [x] [🧩 integrate openai sdk](./pirate-ai-assistant/models/openai.js)
* [x] [🏴‍☠️ build a pirate ai assistant](./pirate-ai-assistant/index.js)
* [_] 🔎 semantic search, langchain, and vector-dbs
* [_] 📜 docQA
* [_] 🎨 image generation with DALL*E Parton 👢

---

## table of contents
- [Installation](#installation)
    - [First Time Setup](#first-time-setup)
    - [Pirate AI](#pirate-ai-assistant)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## installation
To install and run this project locally, follow these steps:

### first time setup
1. Clone the repository
2. Navigate to your local project directory: `cd your-repo`
3. Install the dependencies: `npm install`

This will install the following:
* `openai sdk` - used to interact with openai
* `dotenv` - so you can safely store your openai api key

---

### pirate ai assistant
1. Navigate to the folder pirate-ai-assistant: `cd ./pirate-ai-assitant`
2. Create a file called `.env`
3. Save your api key in the .env file `OPENAI_API_KEY='your-api-key-here'`
4. Open the terminal/command line from the file location listed in step 1
5. Start the ai assitant with `node index.js`
6. `exit` to end your session

#### Developer Notes
There are three files of interest
* `models/chat.js` - model for UI via the terminal and formats user input as a formatted message
* `models/openai.js` - model for openai sdk and returns messages from the ai
* `/index.js` - initializes a chat session via a recursive function and saves chat history to maintain the ai's memory during the session. Also contains the initial instructions to make it a pirate... arrrggggg! 
