const express = require('express')
const router = express.Router()

const { getMarketContract,getContractSimple, getContractHot } = require('../controller/market')

router.get('/',(req,res,next) => {
    getMarketContract(req,res,next)
})
router.get('/simple',(req,res,next) => {
    getContractSimple(req,res,next)
})
router.get('/hot',(req,res,next) => {
    getContractHot(req,res,next)
})



module.exports = router