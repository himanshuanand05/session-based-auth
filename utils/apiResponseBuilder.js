/**
   * Generatea standard simple message format.
   * @param  {Boolean} status  'true' to mark a successful api response
   * @param  {Object} data   A period separating the initials.
   */
function responseHandler(req, res, next){
    res.setHeader("Content-Type", "application/json");
    let data = {
        success: true,
        data: req.data
    }
    res.send(data)
}


module.exports = {
    responseHandler,
}