import express from 'express'

const app = express()
const PORT = process.env.PGPORT || 3000
import cors from 'cors'
import eventplaceroute from './routes/eventplace.js'
import eventdetailroute from './routes/eventdetails.js'
// Use CORS middleware
app.use(cors())
app.use('/eventplace', eventplaceroute)
app.use('/event', eventdetailroute)
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
