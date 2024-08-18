const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// allows server.js to use this router variable
module.exports = router