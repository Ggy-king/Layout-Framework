// 常量引入
import {
    HTTP_GET,
    CONTENT_TYPE_FORM_URLENCODED,
    CONTENT_TYPE_JSON
} from "./contents.js";

// 工具函数
import {
    serialize,
    addURLData,
    serializeJSON
} from "./utils.js";

// 默认参数
import DEFAULTS from './defaults.js';

// Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);

        // 初始化
        this.init();
    };

    init() {
        const xhr = new XMLHttpRequest();

        this.xhr = xhr;

        // 绑定响应事件处理程序
        this.bindEvent();

        // open方法
        xhr.open(this.options.method, this.url
            + this.addParams(), true);

        // 设置responseType
        this.setResponseType();

        // 设置跨域是否携带oookie
        this.setCookie();

        // 设置超时
        this.setTimeout();

        // 发送请求
        this.sendData();
    };

    // 绑定响应事件处理程序
    bindEvent() {
        const xhr = this.xhr;

        const { success, httpCodeError, error, abort,
            timeout } = this.options;

        // load
        xhr.addEventListener('load', () => {
            if (this.ok()) {
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        }, false);

        // error
        xhr.addEventListener('error', () => {
            error(xhr);
        }, false);

        // abort
        xhr.addEventListener('abort', () => {
            abort(xhr);
        }, false);

        // timeout
        xhr.addEventListener('timeout', () => {
            timeout(xhr);
        }, false)
    };

    // 检测响应的HTTP状态码是否正常
    ok() {
        const xhr = this.xhr;

        return (xhr.status >= 200 && xhr.status < 300)
            || xhr.status === 304;
    };

    // 在地址上添加数据
    addParams() {
        const { params } = this.options;

        if (!params) return;

        return addURLData(this.url, serialize(params));
    };

    // 设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;

    };

    // 设置跨域是否携带oookie
    setCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true;
        }
    };

    // 设置超时
    setTimeout() {
        const { timeoutTime } = this.options;

        if (timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
    };

    // 发送请求
    sendData() {
        const xhr = this.xhr;

        if (!this.isSendData()) {
            return xhr.send(null);
        }

        let resultData = null;
        const { data } = this.options;

        // 发送FormData格式的数据
        if (this.isFormDate()) {
            resultData = data;
        } else if (this.isFormURLEncodedData()) {
            // 发送application/x-www-form-urlencoded格式

            this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
            resultData = serialize(data);

        } else if (this.isJsonData()) {
            // 是否发送application/json格式

            this.setContentType(CONTENT_TYPE_JSON);
            resultData = serializeJSON(data);

        } else {
            // 其他格式

            this.setContentType();
            resultData = data;

        }
        xhr.send(resultData);

    };

    // 是否需要使用send发送数据
    isSendData() {
        const { data, method } = this.options;

        if (!data) return false;

        if (method.toLowerCase() === HTTP_GET)
            return false;
        return true;
    }

    // 是否发送FormData格式的数据
    isFormDate() {
        // 判断是否为实例
        return this.options.data instanceof FormData;
    }

    // 是否发送application/x-www-form-urlencoded格式
    isFormURLEncodedData() {
        return this.options.contentType.toLowerCase().includes(
            CONTENT_TYPE_FORM_URLENCODED
        );
    };

    // 是否发送application/json格式
    isJsonData() {
        return this.options.contentType.toLowerCase().includes(
            CONTENT_TYPE_JSON
        );
    };

    // 设置 Content-Type
    setContentType(contentType = this.options.contentType) {
        if (!contentType) return;

        this.xhr.setRequestHeader('Content-Type', contentType);

    };

    // 获取XHR对象
    getXHR() {
        return this.xhr;
    }
}


export default Ajax;