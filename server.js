const {} = require('./static/utils.js')
const express = require("express"),
    app = express(),
    path = require("path")
app.use(express.static(path.join(__dirname, "static")))

app.listen(8081 || 443, () => {
    console.log(`сервер пашет на ${8081} порте`)
})