import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from "./contents.js";

// 默认参数
const DEFAULTS = {
    method: HTTP_GET,

    // 请求头携带数据
    params: null,
    // params: {
    //     username: 'Alex',
    //     age:18
    // },
    // username=Alex&age=18

    // 请求体携带数据
    data: null,
    // data: {
    //     username: 'Alex',
    //     age: 18
    // },
    // data: FormDate数据

    contentType: CONTENT_TYPE_FORM_URLENCODED,
    responseType: '',
    timeoutTime: 0,
    withCredentials: false,

    // 方法
    success() { },
    httpCodeError() { },
    error() { },
    abort() { },
    timeout() { }
};

export default DEFAULTS;