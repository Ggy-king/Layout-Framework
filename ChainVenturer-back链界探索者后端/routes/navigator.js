const express = require('express')
const router = express.Router()

const { getNavigatorDate } = require('../controller/navigator')

router.get('/',(req,res,next) => {
    getNavigatorDate(req,res,next)
})

module.exports = router