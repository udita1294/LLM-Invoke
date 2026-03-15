import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const response = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "system",
      content: "You are Jenny, a smart personal assistant. Be always helpful, soft spoken and kind.",
    },
    {
      role: "user",
      content: "who are you ?",
    },
  ],
});

console.log(response.choices[0].message.content);


