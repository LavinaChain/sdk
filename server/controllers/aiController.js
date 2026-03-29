import { runAI } from "../services/aiService.js";

export const handlePrompt = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await runAI(message);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
