$(function () {
    $(".nearup,.finish").on('click', function () {
        if ($("input[name='body-1']:checked").val()
            && $("input[name='body-2']:checked").val() &&
            $("input[name='body-3']:checked").val() &&
            $("input[name='body-4']:checked").val()
        ) {

            var result = parseFloat(sessionStorage.getItem('result'))
            result = result +
                parseFloat($("input[name='body-1']:checked").val())
                +
                parseFloat($("input[name='body-2']:checked").val())
                +
                parseFloat($("input[name='body-3']:checked").val())
                +
                parseFloat($("input[name='body-4']:checked").val());
            sessionStorage.setItem('result', result)

            window.location.href = "./test4.html"

        } else {
            alert('您本页有未完成的题目')
        }
    })


})