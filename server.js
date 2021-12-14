require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT;
const cookieParser = require('cookie-parser')
const Axios = require('axios')

app.use(cookieParser())

// slack app Webhook
const sendMessage = () => {
    Axios.post('https://hooks.slack.com/services/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', {
        text: 'testing from the wesside'
    })
}

// Send messages to slack every 5s
setInterval(sendMessage, 5000)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})