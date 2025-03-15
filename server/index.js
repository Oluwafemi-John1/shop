import express from 'express'
import env from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import bodyParser from 'body-parser'

const app = express()
env.config()
app.use(bodyParser.json())


const port = process.env.PORT
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



app.post('/ai', async (req, res) => {
    const {prompt} = req.body;
    if(!prompt) {
        return res.status(400).send("Prompt is required")
    }
    try {
        const result = await model.generateContent(prompt);
        console.log('request sent');
        res.status(200).json({response: result.response.text()})
    } catch(error) {
        console.error(error)
        res.status(500).send('An error occurred')
    }
})



app.listen(port, () => {
    console.log(`One step for me, giant leap for mankind at port: ${port}`);

})