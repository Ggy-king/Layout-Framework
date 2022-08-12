$(function () {
    $(document).ready(function () {
        var result = parseInt(sessionStorage.getItem('result'))

        $(".textoo").append(` <b>您的分数值是${result} , </b>`)

        if (result <= 4) {
            $(".textoo").append(` <b>您属于A类</b>`)

        } else if (4 < result && result <= 7) {

            $(".textoo").append(` <b>您属于B类</b>`)

        } else if (7 < result && result <= 11) {

            $(".textoo").append(` <b>您属于C类</b>`)

        } else {

            $(".textoo").append(` <b>您属于D类</b>`)

        }

    })
})
