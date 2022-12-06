$('h1').on('click', function () {
    console.log('wwwwww')
});

$(window).on('scroll', function () {
    console.log('scroll : ', $(window).scrollTop())
    // 스크롤된 양을 구해서 0보다 크면 클래스를 붙이고 아니면 클래스를 뺀다.
    // if(스크롤양 > 0) {클래스를 붙임} else {클래스를 땐다}
    // 스크롤양을 구하기 : $(window).scrollTop()
    $('#header_scroll').addClass('on');
    if ($(window).scrollTop() > 0) {
        $('#header_scroll').addClass('on');
    } else {
        $('#header_scroll').removeClass('on');
    }
    // var sct = $(window).scrollTop();
    // sct > 0 ? $('#header_scroll').addClass('on')
    //     : $('#header_scroll').removeClass('on');
});