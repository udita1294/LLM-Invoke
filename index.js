import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const response = await groq.chat.completions.create({
  temperature : 1,
  // top_p: 0.2,
  // stop : "ga",  // Negative
  // max_completion_tokens : 500,
  // frequency_penalty: 1,
  // presence_penalty: 1,
  response_format :  {type : 'json_object'},
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "system",
      content: `You are Jenny, a smart review grader. Your task is to review given review and return the sentiment.Classify the sentiment as positive, negative or neutral. You must give the output in JSON format with the key as sentiment and value as the sentiment of the review.
                  example output: {"sentiment": "positive"}`,
    },
    {
      role: "user",
      content: `Review: These earphones arrived so quickly and it looks great, but the left earcup stopped working after a week.
                Sentiment:`,
    },
  ],
});

console.log(response.choices[0].message.content);


