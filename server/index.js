import express from 'express'
import env from 'dotenv'
import bodyParser from 'body-parser'
// import corsMiddleware from './middlewares/corsMiddleware.js'
import aiRoutes from './routes/aiRoutes.js'
import cors from 'cors'

const app = express()
env.config()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', aiRoutes)


app.listen(port, () => {
    console.log(`One step for me, giant leap for mankind at port: ${port}`);

})