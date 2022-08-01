/**
 * @description 返回失败的数据模型
 * @author 广源讲师
 */

class ErrorModel {
    constructor(errno = -1,message = 'error') {
        this.errno = errno
        this.message = message
    }
}


module.exports = ErrorModel

// new ErrorModel(10001,'注册失败')    //{errno:10001,message:'注册失败}