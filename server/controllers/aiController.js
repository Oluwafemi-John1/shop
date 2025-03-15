import { GoogleGenerativeAI } from '@google/generative-ai'
import env from 'dotenv'
env.config()

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateContent = async (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    const { prompt } = req.body;
    console.log(prompt);

    if (!prompt) {
        return res.status(400).send("Prompt is required")
    } else {
        try {
            const result = await model.generateContent(prompt);
            console.log('request sent');
            res.status(200).json({ response: result.response.text() })
        } catch (error) {
            console.error(error)
            res.status(500).send('An error occurred')
        }
    }
}