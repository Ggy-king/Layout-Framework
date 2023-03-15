import axios from "axios"


const instance = axios.create({
    baseURL:'https://www.fastmock.site/mock/968e3b4158c1b9ef43da05683a4c23f9/api',
    timeout:10000
})


// 封装一个get请求
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {params}).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

// 封装一个post请求

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}