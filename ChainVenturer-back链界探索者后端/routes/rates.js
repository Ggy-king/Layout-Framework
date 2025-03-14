const express = require('express')
const router = express.Router()

const { getRatesDate } = require('../controller/rates')

router.get('/',(req,res,next) => {
    getRatesDate(req,res,next)
})

module.exports = router