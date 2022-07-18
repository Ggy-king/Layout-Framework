import { SUCC_CODE, TIMEOUT } from './config';

import { getJSON } from './ajax/index';

// 获取函数
const getDate = (url, options) => {
    return getJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    })
        .then(response => {
            if (response.code !== SUCC_CODE) throw new Error(`出错了：${response.code}`);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
};

export { getDate };