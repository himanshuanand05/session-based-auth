const { ABOUT_INFO } = require('../utils/constants')

function getInfo(req, res, next) {
    req.data = {
        info: ABOUT_INFO
    }
    next()
}
module.exports = {
    getInfo
}