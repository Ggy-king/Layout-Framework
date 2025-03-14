module.exports = (req, res, next) => {
    // 检查是否是图片文件
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(req.path)
    
    if (req.method === 'GET') {
        if (isImage) {
            // 对图片文件设置强缓存，时间为7天
            res.setHeader('Cache-Control', 'public, max-age=604800')
            res.setHeader('Expires', new Date(Date.now() + 604800000).toUTCString())
            
            // 设置协商缓存
            res.setHeader('Last-Modified', new Date().toUTCString())
            res.setHeader('ETag', Math.random().toString(36).substring(7))
        } else {
            // 对非图片文件禁用缓存
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            res.setHeader('Surrogate-Control', 'no-store')
        }
    }
    // 继续处理请求
    next()
}