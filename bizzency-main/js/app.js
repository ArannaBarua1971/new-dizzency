$(function(){

    $(window).load(function(){
        $('#preloader').fadeOut()
    })
    $(window).scroll(function(){
        var scrollPostion=$(window).scrollTop()

        if(scrollPostion > 1100){
            $('.skill_item_bar').addClass('ph')
            $('.skill_item_bar').addClass('is')
            $('.skill_item_bar').addClass('dm')
            $('.skill_item_bar').addClass('af')
        }

        if(scrollPostion >500){
            $('nav').addClass('fixed')
        }else{
            $('nav').removeClass('fixed')

        }
    })
})