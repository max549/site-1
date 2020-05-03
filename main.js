$('.card').hover(function() {
    if ($(this).find('.card_img').hasClass('focus')) {
       $(this).find('.card_img').removeClass('focus')
    } else {
       $(this).find('.card_img').addClass('focus')
    }
})

$('.card').hover(function() {
    if ($(this).find('.card_button').hasClass('focus1')) {
       $(this).find('.card_button').removeClass('focus1')
    } else {
       $(this).find('.card_button').addClass('focus1')
    }
})


