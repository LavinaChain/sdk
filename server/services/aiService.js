import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runAI = async (message) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You are LAVINA, a Web3 AI assistant." },
      { role: "user", content: message },
    ],
  });

  return completion.choices[0].message.content;
};
