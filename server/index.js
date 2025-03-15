import express from 'express'
import env from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
const app = express()
env.config()
const port = process.env.PORT
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




app.get('/ai', async (req, res) => {
    const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    console.log(re);
    
    console.log(result.response.text());
})



app.listen(port, () => {
    console.log(`One step for me, giant leap for mankind at port: ${port}`);

})