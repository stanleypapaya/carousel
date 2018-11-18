var allButtons = $('#buttons > button')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        var index = $(e.currentTarget).index()
        $(allButtons[index]).addClass('active').siblings().removeClass('active')
        var p = index * -320
        $('#images').css({
            'transform': 'translateX(' + p + 'px)'
        })
    })
}

var n = 0
var numberOfImages = allButtons.length
var timer = function () {
    id = setInterval(() => {
        n += 1
        let m = n % numberOfImages
        $(allButtons[m]).trigger('click')
            .addClass('active').siblings().removeClass('active')
    }, 2500)
}

timer()

$('.imgContainer').mouseenter(function () {
    clearInterval(id)
})

$('.imgContainer').mouseleave(function () {
    timer()
})