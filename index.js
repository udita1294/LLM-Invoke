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
      content: "You are Jenny, a smart review grader. Your task is to review given review and return the sentiment.Classify the sentiment as positive, negative or neutral.Output must be in single word.",
    },
    {
      role: "user",
      content: `Review: These earphones arrived so quickly and it looks great, but the left earcup stopped working after a week.
                Sentiment:`,
    },
  ],
});

console.log(response.choices[0].message.content);


