const express = require("express")
const { getInfo } = require("./controllers/httpGETHandler")
const { responseHandler } = require("./utils/apiResponseBuilder")
const { ERROR } = require("./utils/constants")
require('dotenv').config()

const app = express()

//all GET routes below this
app.get('/info', getInfo, responseHandler)

//all POST routes below this

//all PUT routes below this

//all DELETE routes below this

//error-handler
app.use(function(err, req, res, next) {
    if(res.statusCode != 200){
        res.send({
            err: process.env.ERROR[res.statusCode]
        })
    }
    else{
        res.status(500)
        res.send({
            err: ERROR[500]
        })

    }
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})

module.exports = app