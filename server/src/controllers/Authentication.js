module.exports = {
  register (req, res) {
    res.send({
      meesage: `Hello ${req.body.email} Your user was registered. Have fun!`
    })
  }
}
