/**
 * @description 用户数据操作
 * @author 广源讲师
 */


const User = require('../../models/User')

!(async () => {
    // //注册 创建一个新的用户
    // console.log('创建新用户...');
    // await User.create({
    //     username: '李小燕',
    //     password: '123456'
    // })
    // // 再创建一个用户
    // await User.create({
    //     username: '士大夫',
    //     password: '1254622'
    // })
    // await User.create({
    //     username: '广源讲师',
    //     password: '4562310'
    // })
    await User.create({
        username: 'zhangsan',
        password: '12451111111'
    })
    await User.create({
        username: 'lisi',
        password: '456589878'
    })
    console.log('创建新用户成功')

    // 登录查询
    // const zhangsan = await User.findOne({
    //     username: 'zhangsan',
    //     password: '123'
    // })
    // console.log('zhangsan', zhangsan)
})()