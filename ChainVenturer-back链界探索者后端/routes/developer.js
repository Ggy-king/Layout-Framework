const express = require('express')
const router = express.Router()
const { getDeveloperDate } = require('../controller/developer')

router.get('/',(req,res,next) => {
    getDeveloperDate(req,res,next)
})


module.exports = router