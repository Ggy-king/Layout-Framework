const express = require('express')
const router = express.Router()

const { getNewsDate } = require('../controller/news')

router.get('/',(req,res,next) => {
    getNewsDate(req,res,next)
})


module.exports = router