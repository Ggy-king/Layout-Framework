window.onload = function () {
    //1获取主容器的宽度
    var content = document.getElementsByClassName('content')[0]
    var contentWidth = content.offsetWidth


    //2获取单个图片的宽度
    var imgs = content.children
    var imgsWidth = imgs[0].offsetWidth



    //3一行能排列多少张的图片
    var nums = Math.floor(contentWidth / imgsWidth)



    //4收集第一排的所有高度
    var arrHeight = []

    for (var i = 0; i < imgs.length; i++) {
        if (i < nums) {  //这里都是第一行的元素
            arrHeight.push(imgs[i].offsetHeight)
        } else {
            //创建第一个元素
            var obj = {
                minH: arrHeight[0],
                minI: 0
            }
            for (var j = 0; j < arrHeight.length; j++) {
                if (arrHeight[j] < obj.minH) {
                    obj.minH = arrHeight[j],
                        obj.minI = j
                }
            }
            console.log(obj);
            imgs[i].style.position = "absolute"
            imgs[i].style.left = imgs[obj.minI].offsetLeft + "px"
            imgs[i].style.top = obj.minH + "px"

            // 关键一    步 换掉最小高度
            arrHeight[obj.minI] = arrHeight[obj.minI] + imgs[i].offsetHeight
        }
    }
    console.log(arrHeight);





}