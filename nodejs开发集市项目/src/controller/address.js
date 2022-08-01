/**
 * @description user controller
 * @author 广源讲师
 */

const Address = require('../models/Address')

/**
 * 创建地址
 * @param {string} username 用户名
 * @param {string} data 地址的详细信息
 * @returns 
 */

async function createAddress(username, data) {
    const address = await Address.create({
        username,
        ...data
    })
    return address
}

/**
 * 获取地址列表
 * @param {string} username 用户名
 */

async function getAddressList(username) {
    const list = await Address.find({ username }).sort({ updateAt: -1 })
    return list
}


/**
 * 获取单个收货地址 根据id
 * @param {string} id id 
 */

async function getAddressById(id) {
    const address = await Address.findById(id)
    return address
}

/**
 * 更新地址信息
 * @param {string} id id
 * @param {string} username 用户名
 * @param {object} data 更新的地址详细信息
 */

async function updateAddress(id, username, data = {}) {
    const address = await Address.findOneAndUpdate(
        { id: id, username },  //查询条件
        { username, ...data },  //要查询的数据
        { new: true }
    )
    return address
}

module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress
}