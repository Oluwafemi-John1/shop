import { GoogleGenerativeAI } from '@google/generative-ai'
// Ensure dotenv is loaded primarily in index.js to avoid race conditions

// Initialize commonly used instances, but handle missing keys gracefully
const checkApiKey = () => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not defined");
    }
    return process.env.GEMINI_API_KEY;
};

export const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;

        // 1. Input Validation
        if (!prompt || typeof prompt !== 'string') {
            return res.status(400).send("Prompt must be a non-empty string");
        }
        if (prompt.length > 2000) {
            return res.status(400).send("Prompt is too long (max 2000 chars)");
        }

        // Lazy initialization or safe access
        const genAI = new GoogleGenerativeAI(checkApiKey());
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(prompt);
        console.log('AI request processed successfully'); // Less verbose logging
        res.status(200).json({ response: result.response.text() })

    } catch (error) {
        // 4. Secure Logging
        console.error("AI Generation Error:", error.message); 
        res.status(500).send('An error occurred while generating content')
    }
}