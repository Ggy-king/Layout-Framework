/**
 * @description Order Model 
 * @author 广源讲师
 */


const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    isCanceled: {
        type: Boolean,
        default: false
    },
    address: {
        username: String,
        city: String,
        department: String,
        houseNumber: String,
        name: String,
        phone: String
    },
    products: [
        {
            product: {
                shopId: {
                    type: String,
                    require: true
                },
                name: String,
                imgUrl: String,
                sales: Number,
                price: Number,
                oldPrice: Number,
                tabs: [String]
            },
            orderSales: Number

        }
    ]



}, { timestamps: true })

const Order = mongoose.model('order', Schema)

module.exports = Order