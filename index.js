require('dotenv').config()
const express = require('express')
const cors = require('cors')

const ekart = express()
ekart.use(cors())
ekart.use(express.json())

const PORT = 3000 || process.env.PORT

ekart.listen(PORT, () => {
    console.log(`Ekart is running at port ${PORT}`)
})


ekart.get('/', (req, res) => {
    res.send('<h2>Ekart server is active waiting for user requests</h2>')
})







