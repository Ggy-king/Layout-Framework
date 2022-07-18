import '../../api/ajax/index.js';


const login = document.getElementById('login');
const { username, password } = login;
const btn = document.getElementById('submit');

(function clickLogin() {
    btn.addEventListener('click', e => {
        // 阻止表单数据验证
        e.preventDefault();
        // 表单数据验证
        // 发送Ajax请求
        // 组装数据
        const data = `username=${username.value}&password=${password.value}`;

        const data1 = new FormData(login);
        data1.append('sex', 'male');

        //  设置发送请求

        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // 发送

        // xhr.send(data);
    }, false)
})();
