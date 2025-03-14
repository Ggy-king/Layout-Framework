const express = require('express')
const router = express.Router()

const { getToolDate } = require('../controller/tool')

router.get('/',(req,res,next) => {
    getToolDate(req,res,next)
})

module.exports = router