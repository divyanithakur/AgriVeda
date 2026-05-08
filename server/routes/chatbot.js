import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'mock_key');

router.post('/', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    // In a real scenario with a valid key, you'd call Gemini:
    // const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    // const prompt = `Act as an expert Indian agricultural advisor. The farmer asks: "${message}". Context: ${JSON.stringify(context)}. Give a practical, sustainable, and clear answer.`;
    // const result = await model.generateContent(prompt);
    // const response = await result.response;
    // const text = response.text();

    // Mocking response for demonstration if no API key is present:
    let text = "Based on your soil moisture (68%) and upcoming rainfall, applying organic compost enriched with Trichoderma is highly recommended. It will naturally protect your roots and provide slow-release nutrients without chemical runoff.";
    
    if (message.toLowerCase().includes('kaunsa') || message.toLowerCase().includes('hindi')) {
        text = "Lagaatar baarish aur mitti ki nami ko dekhte hue, Trichoderma yukt jaivik khad ka upyog sabse accha rahega. Yeh jadon ko bimariyon se bachata hai.";
    }

    res.json({ reply: text });
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

export default router;
