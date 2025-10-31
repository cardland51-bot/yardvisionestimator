// ==============================
// server.js — AI Backend for Your Website
// ==============================

// Load environment variables from .env
require('dotenv').config();

// Import dependencies
const express = require('express');
const OpenAI = require('openai');

// Initialize Express app
const app = express();
app.use(express.json()); // Parse JSON requests

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // loads your API key from .env
});

// Endpoint for AI interaction
app.post('/analyze', async (req, res) => {
  const { userMessage } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: "system", content: "You are a helpful estimator AI that analyzes user input and returns insights." },
        { role: "user", content: userMessage },
      ],
    });

    // Send AI reply back to the front end
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "AI failed to respond." });
  }
});

// Start the server
app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
