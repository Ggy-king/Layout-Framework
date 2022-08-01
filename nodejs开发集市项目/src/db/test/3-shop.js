/**
 * @description 商店数据操作
 * @author 广源讲师
 */

const Shop = require('../../models/Shop')

!(async () => {
    // 创建商店
    // await Shop.create({
    //     name: '沃尔玛',
    //     imgUrl: '/images/shop/wmt.jpeg',
    //     sales: 10000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: 'VIP尊享满89元减4元运费券'
    // })
    // await Shop.create({
    //     name: '小山姆商店',
    //     imgUrl: '/images/shop/sam.jpeg',
    //     sales: 2000,
    //     expressLimit: 0,
    //     expressPrice: 8,
    //     slogan: '来本店购物送一辆跑车'
    // })
    // console.log('商店创建成功');

    // 附近商店
    // const shopList = await Shop.find().sort({ _id: -1 })
    // console.log('展示附近商店', shopList);

    // 获取商店详情
    const id = '62e49d1ea3bcebfe036d5857'
    const shop = await Shop.findById(id)
    console.log('商店详情展示', shop)
})()