const userName = document.getElementById('username')
const passWord = document.getElementById('password')
const yanMa = document.getElementById('yanma')
const toast = document.getElementById('toast')
const login = document.getElementById('login')
const url = 'html/index.html'

// 创建定时器
function timer(ti) {
    setTimeout(() => {
        toast.style.display = 'none'
    }, ti)
}

// 创建提示
function toastFun(message) {
    toast.innerText = `${message}`
    toast.style.display = 'block'
}

// 判断输入是否正确
function test() {
    if (!userName.value) {
        toastFun('用户名不能为空')
        timer(2000)
    } else if (!passWord.value) {
        toastFun('密码不能为空')
        timer(2000)
    } else if (!yanMa.value) {
        toastFun('验证码不能为空')
        timer(2000)
    } else if (userName.value !== 'admin' || passWord.value !== '123456') {
        toastFun('用户名或密码错误')
        timer(2000)
    } else {
        toastFun('登录成功')
        window.location.href = url
        timer(2000)
    }

}

// 登录操作
login.addEventListener('click', function () {
    test()
})

