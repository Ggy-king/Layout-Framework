const multer = require('multer')
const path = require('path')

module.exports = (storagePath) => {
   return (req,res,next) => {
        // 配置存储设置
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `./${storagePath}`)  // 保存文件的目录
            },
            filename: function (req, file, cb) {
                cb(null, req.user.username + '-' + Date.now() + path.extname(file.originalname)); // 文件名
            }
        })
        
        const upload = multer({ storage: storage })
        upload.single('file')(req, res, (err) => {
            if (err) {
                console.error('图片上传错误:', err)
                return res.status(400).send('图片上传错误')
            }
            
            next()
        })
    }
}
