$(function () {
    $(".near").on('click', function () {

        if ($("input[name='body-1']:checked").val()
            && $("input[name='body-2']:checked").val() &&
            $("input[name='body-3']:checked").val() &&
            $("input[name='body-4']:checked").val() &&
            $("input[name='body-5']:checked").val()
        ) {
            var result = 0
            result = result
                +
                parseFloat($("input[name='body-1']:checked").val())
                +
                parseFloat($("input[name='body-2']:checked").val())
                +
                parseFloat($("input[name='body-3']:checked").val())
                +
                parseFloat($("input[name='body-4']:checked").val())
                +
                parseFloat($("input[name='body-5']:checked").val());

            sessionStorage.setItem('result', result)

            alert(result);

            window.location.href = "./test2.html"

        } else {
            alert('您本页有未完成的题目')
        }




    })

})