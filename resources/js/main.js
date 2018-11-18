var allButtons = $('#buttons > button')


// 1.添加按钮点击事件
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        var index = $(e.currentTarget).index()
        $(allButtons[index]).addClass('active').siblings().removeClass('active')
        var p = index * -320
        $('#images').css({
            'transform': 'translateX(' + p + 'px)'
        })
        n = i
    })
}

// 2.实现自动轮播
let n = 0
let numberOfImages = allButtons.length
timer()

// 3.鼠标进出控制
$('.imgContainer').mouseenter(function () {
    clearInterval(id)
})

$('.imgContainer').mouseleave(function () {
    timer()
})

// 4. 函数
function timer() {
    id = setInterval(() => {
        n += 1
        let m = n % numberOfImages
        $(allButtons[m]).trigger('click')
            .addClass('active').siblings().removeClass('active')
    }, 3000)
}