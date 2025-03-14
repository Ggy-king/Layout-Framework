const express = require('express')
const router = express.Router()

const { postSearchAll } = require('../controller/search')

router.post('/',(req,res,next) => {
    postSearchAll(req,res,next)
})

module.exports = router