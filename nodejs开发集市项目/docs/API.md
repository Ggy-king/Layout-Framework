# API (接口) 设计

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
    username:'1856558456',
    password:'123asd'
}
```


### response body

```js
{
    erron:0,
    message: 'errno !== 0 的错误信息'
}
```


----------------------



## 登录

### url

`/api/user/login`

### method

`post`

### request body

```js
{
    username:'1856558456',
    password:'123asd'
}
```


### response body

```js
{
    erron:0,
    message: 'errno !== 0 的错误信息'
}
```



----------------------

## 获取用户信息

### url

`/api/user/info`

### method

`get`

### request body

无


### response body

```js
{
    erron:0,
    data: {
        username:'xxxx'
    },
    message: 'errno !== 0 的错误信息'
}
```



----------------------



## 创建收货地址

### url

`/api/user/address`

### method

`post`

### request body

```js
{
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18878998984'
}
```


### response body

```js
{
    erron:0,
    data: {
        _id: '收货地址的 id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18878998984',
        createdAt: Date,
        updatedAt: Date
    },
    message: 'errno !== 0 的错误信息'
}
```



----------------------



## 获取收货地址列表

### url

`/api/user/address`

### method

`get`

### request body

无

### response body

```js
{
    erron:0,
    data: [
        {
            _id: '收货地址的 id',
            city: '北京',
            department: 'xx小区',
            houseNumber: '门牌号',
            name: '张三',
            phone: '18878998984'
        }
    ],
    message: 'errno !== 0 的错误信息'
}
```



----------------------


## 获取单个收货地址

### url

`/api/user/address/:id`

示例：`/api/user/address/100`

### method

`get`

### request body

无  

### response body

```js
{
    erron:0,
    data: {
        _id: '收货地址的 id',
        city: '北京',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18878998984'
    },
    message: 'errno !== 0 的错误信息'
}
```



----------------------



## 更新收货地址

### url

`/api/user/address/:id`


### method

`patch`

### request body

```js
{
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18878998984'
   
}
```  

### response body

```js
{
    erron:0,
    message: 'errno !== 0 的错误信息'
}
```



----------------------


## 附近（热门）商店

### url

`/api/shop/hot-list`


### method

`get`

### request body

无

### response body

```js
{
    erron:0,
    data: [
        {
            _id:'商店 id',
            name: '沃尔玛',
            imgUrl: '商店的图片url',
            sales: 1000, //月售
            expressLimit: 0, //起送价格
            expressPrice: 5, //快递价格
            slogan: 'VIP满89元减4元'
        }
    ],
    message: 'errno !== 0 的错误信息'
}
```



----------------------


## 商店详情

### url

`/api/shop/:id`


### method

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:{
            _id:'商店 id',
            name: '沃尔玛',
            imgUrl: '商店的图片url',
            sales: 1000, //月售
            expressLimit: 0, //起送价格
            expressPrice: 5, //快递价格
            slogan: 'VIP满89元减4元'
        }
    message: 'errno !== 0 的错误信息'
}
```



----------------------



## 查询（某个）商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all`

举例  `/api/shop/10/products?tab=seckill`

### method

`get`

### request body

无

### response body

```js
{
    erron:0,
    data:[
        {
            _id:'商店 id',
            name: '番茄 250/g',
            imgUrl: 'xxx.png',
            sales: 10,
            price: 33.6,
            oldPrice: 40.6
        },
    ],
    message: 'errno !== 0 的错误信息'
}
```



----------------------


## 创建订单

### url

`/api/order`


### method

`post`

### request body

```js
{
    addressId: '收货地址的 id',
    shopId: '商店的 id',
    shopName: '沃尔玛',
    isCanceled: false  //订单是否被取消
    products: [
        {
            id: '商品的 id',
            num: 3 //购买数量
        }，
        {
            id: '商品的 id',
            num: 5 //购买数量
        }，
        {
            id: '商品的 id',
            num: 79 //购买数量
        }
    ]
}
```

### response body

```js
{
    erron:0,
    data:{
            _id:'订单 id'
        }
    message: 'errno !== 0 的错误信息'
}
```


----------------------

