/**
 * @description 地址数据操作
 * @author 广源讲师
 */

const Address = require('../../models/Address')

!(async () => {
    //创建收货地址
    // await Address.create({
    //     username: 'zhangsan',  //用户关联
    //     city: '大连市',
    //     department: 'xxx小区',
    //     houseNumber: '门派号1',
    //     name: '张三',
    //     phone: '12457898'
    // })
    // await Address.create({
    //     username: 'lisi',  //用户关联
    //     city: '上海市',
    //     department: 'qqq小区',
    //     houseNumber: '门派号2',
    //     name: '李四',
    //     phone: '456589878'
    // })
    // console.log('创建收货地址数据成功')

    // 获取收到货地址列表（获取zhangsan）
    // const addressList = await Address.find({ username: 'zhangsan' }).sort({ updateAt: -1 })
    // console.log('获取成功', addressList)

    // 根据id获取单个收货地址
    // const id = '62e495905cab016ab1dbda9d'
    // const address = await Address.findById(id)
    // console.log('id获取地址为', address);

    // 更新收货地址
    const id = '62e495905cab016ab1dbda9d'
    const newData = {
        username: 'zhangsan',
        city: '大连市',
        department: 'xxx小区a已改',
        houseNumber: '门派号1a已改',
        name: '张三a已改',
        phone: '12451111111'
    }
    const address = await Address.findOneAndUpdate(
        { _id: id, username: 'zhangsan' },
        newData,
        {
            new: true  //返回更新之后的最新数据(默认是false)
        }
    )
    console.log('更新数据执行成功')
})()