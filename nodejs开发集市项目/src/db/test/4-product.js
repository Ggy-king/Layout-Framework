/**
 * @description 商店数据操作
 * @author 广源讲师
 */

const Product = require('../../models/Product')

!(async () => {
    //    创建几个商品
    // await Product.create({
    //     shopId: '62e49d1ea3bcebfe036d5857',
    //     name: '葡萄',
    //     imgUrl: '/images/product/grape.jpg',
    //     sales: 100,
    //     price: 30,
    //     oldPrice: 150,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    // await Product.create({
    //     shopId: '62e49d1ea3bcebfe036d5857',
    //     name: '苹果',
    //     imgUrl: '/images/product/apple.jpeg',
    //     sales: 200,
    //     price: 6,
    //     oldPrice: 33,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    // await Product.create({
    //     shopId: '62e49d1ea3bcebfe036d5857',
    //     name: '桃子',
    //     imgUrl: '/images/product/peach.jpg',
    //     sales: 50,
    //     price: 45,
    //     oldPrice: 100,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    // await Product.create({
    //     shopId: '62e49d1ea3bcebfe036d585a',
    //     name: '西瓜',
    //     imgUrl: '/images/product/watermelon.jpg',
    //     sales: 180,
    //     price: 13,
    //     oldPrice: 15,
    //     tabs: ['all', 'seckill', 'fruit']
    // })
    // console.log('创建商品成功');

    // 查询某个商店，某个 tab 的商品列表
    const list = await Product.find({
        shopId: '62e49d1ea3bcebfe036d5857',
        tabs: {
            $in: 'seckill'   //此为前端传入 先假设
        }
    })
    console.log('查询某商品列表为', list);
})()