/**
 * @description 成功返回的数据模型
 * @author 广源讲师
 */

class SuccessModel {
    constructor(data) {
        this.errno = 0    //成功的标志
        if (data != null) {
            this.data = data
        }
            
    }
}


module.exports = SuccessModel


// new SuccessModel()  //{errno:0}
// new SuccessModel(...)   //{errno:0,data:{...}}