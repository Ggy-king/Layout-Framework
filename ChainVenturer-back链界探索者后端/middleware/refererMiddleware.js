module.exports = (req,res,next) => {
    const validReferer = ['localhost']
    const referer = req.get('referer')    
    if (referer) {  // 只有从一个网站向另一个网站跳转时才有 第一次进可能没有
        const url = new URL(referer)
        const hostname = url.hostname 
        if(!validReferer.includes(hostname)) {
            res.status(403).send('服务器拒绝请求')
            return
        }
    }
    next()
}