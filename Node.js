// Load environment variables from .env
require('dotenv').config();
const OpenAI = require('openai');

// Create a client instance using the API key placeholder
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // uses your placeholder key
});

// Example function to call ChatGPT
async function runExample() {
  const response = await client.chat.completions.create({
    model: "gpt-5",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello, can you summarize this?" }
    ]
  });

  console.log(response.choices[0].message.content);
}

runExample();
