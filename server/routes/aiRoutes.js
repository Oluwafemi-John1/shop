import express from 'express'
import { generateContent } from '../controllers/aiController.js'

const router = express.Router()
router.post('/ai', generateContent)

export default router;