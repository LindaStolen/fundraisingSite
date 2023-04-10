$(function(){
    $(".menuOpen").on('click',function(){
        $(".menu").removeClass('-ml-[70%]')
        $(".background").removeClass('hidden')
        $('body').css('overflow-y','hidden')
    })
    $('.menuClose').on('click', function(){
        $(this).parent().addClass('-ml-[70%]')
        $(".background").addClass('hidden')
        $('body').css('overflow-y','scroll')
    })
    $(".about").on('click', function(){
        console.log('這是關於')        
        let device = $(window).innerWidth()
        console.log(device)
        if(device > 768){
            let close = $('.about-Sub').hasClass('hidden')
            if(close){
                console.log(close)
                $('.subMenu > div').addClass('hidden')
                $('.about-Sub').removeClass('hidden')
            }else{
                $('.about-Sub').addClass('hidden')
            }
        }else{
            let close = $(this).next('nav').hasClass('hidden')
            if(close){
                $('.menu nav').addClass('hidden')
                $(this).next('nav').removeClass('hidden')
            }else{
                $(this).next('nav').addClass('hidden')
            }            
        }
    })
    $(".product").on('click', function(){
        console.log('這是商品')
        let device = $(window).innerWidth()
        console.log(device)
        if(device >768){
            let close = $('.product-Sub').hasClass('hidden')
            if(close){
                $('.subMenu > div').addClass('hidden')
                $('.product-Sub').removeClass('hidden')
            }else{
                $('.product-Sub').addClass('hidden')
            }
        }else{
            let close = $(this).next('nav').hasClass('hidden')
            if(close){
                $('.menu nav').addClass('hidden')
                $(this).next('nav').removeClass('hidden')
            }else{
                $(this).next('nav').addClass('hidden')
            }
        }
    })
    $('button.top').on('click',function(){
        console.log(123123)
        $('html,body').animate({scrollTop: 0,} ,700)
        console.log(789789)
    })

    
    let owl = $('.ad');
    owl.owlCarousel({
        loop:true,
        items:1,
    })
    // Go to the next item
    $('.adNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.adPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    if($(window).innerWidth() > 1919){
        $('a.tab').eq(0).animate({marginLeft: "-=10px"}).addClass('on').removeClass('bg-primary-400').addClass('bg-primary-100')
    }
    $("a.tab").click(function(){
        let on = $(this).hasClass('on')
        let toggle = $(this).index()
        console.log(toggle)
        if($(window).innerWidth() > 1919 && !on){
            $('a.tab').animate({marginLeft: '0'}).removeClass('on').addClass('bg-primary-400').removeClass('bg-primary-100')
            $(this).animate({marginLeft: "-=10px"}).addClass('on')
            $('.content').hide().addClass('hidden')
            $('.content').eq(toggle).show().removeClass('hidden')
        }else if($(window).innerWidth() < 1920 && !on){
            $('a.tab').removeClass('on').addClass('bg-primary-400').removeClass('bg-primary-100')
            $(this).addClass('on')
            $('.content').hide().addClass('hidden')
            $('.content').eq(toggle).show().removeClass('hidden')
        }else{
            return
        }
    });
})