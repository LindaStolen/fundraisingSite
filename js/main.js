$(function(){
    $(".menuOpen").on('click',function(){
        $(".menu").removeClass('-ml-[70%]')
        $(".background").removeClass('hidden')
        $('body').css('overflow-y','hidden')
    })
    $('.menuClose').on('click', function(){
        $(this).parent().addClass('-ml-[70%]')
        $('.menu nav').addClass('hidden')
        $(".background").addClass('hidden')
        $('body').css('overflow-y','scroll')
    })
    // 判斷視窗大小選單收合
    $(window).resize(function(){
        let mobileMenu = $('.menu').hasClass('-ml-[70%]')
        if($(window).innerWidth() > 1023 && !mobileMenu){
            $('.menu').addClass('-ml-[70%]')
            $('.menu nav').addClass('hidden')
            $(".background").addClass('hidden')
            $('body').css('overflow-y','scroll')
        }
        if($(window).innerWidth() < 1024){
            $('.subMenu > div').addClass('hidden').children('a').removeClass('active')
        }
    })
    $(".about").on('click', function(){
        console.log('這是關於')        
        let device = $(window).innerWidth()
        console.log(device)
        if(device > 768){
            let close = $('.about-Sub').hasClass('hidden')
            if(close){
                console.log(close)
                $('.subMenu > div').addClass('hidden').children('a').removeClass('active')
                $('.about-Sub').removeClass('hidden')
            }else{
                $('.about-Sub').addClass('hidden')
            }
        }else{
            $('.subMenu nav > a').removeClass('active')
            let close = $(this).next('nav').hasClass('hidden')
            if(close){
                $('.menu nav').addClass('hidden')
                $(this).next('nav').removeClass('hidden').children('a').addClass('active').siblings('a').removeClass('active')
            }else{
                $(this).next('nav').addClass('hidden')
            }            
        }
    })
    $("a.product").on('click', function(){
        console.log('這是商品')
        let device = $(window).innerWidth()
        console.log(device)
        if(device >768){
            let close = $('.product-Sub').hasClass('hidden')
            if(close){
                $('.subMenu > div').addClass('hidden').children('a').removeClass('active')
                $('.product-Sub').removeClass('hidden')
            }else{
                $('.product-Sub').addClass('hidden')
            }
        }else{
            $('.subMenu nav > a').removeClass('active')
            let close = $(this).next('nav').hasClass('hidden')
            if(close){
                $('.menu nav').addClass('hidden')
                $(this).next('nav').removeClass('hidden').children('a').addClass('active').siblings('a').removeClass('active')
            }else{
                $(this).next('nav').addClass('hidden')
            }
        }
    })
    // header右邊選單點擊功能樣式
    $('.function nav a').on('click',function(){
        let active = $(this).hasClass('active')
        if(!active){
            $(this).addClass('active').siblings('a').removeClass('active')
        }
    })
    $('.subMenu nav > a').on('click',function(){
        $('.subMenu nav > a').removeClass('active')
        $(this).addClass('active')
    })

    // header左邊選單點擊功能樣式
    $('.menuBox a').on('click',function(){
        let active = $(this).hasClass('active')
        if(!active){
            $(this).addClass('active').siblings('a').removeClass('active')
        }
    })
    // 手機版選單點擊樣式
    $('.menu div > a').on('click', function(){
        $('.menu div > a').removeClass('active')
        $(this).addClass('active')
    })

    $('.course').on("click", function(){
        $('.subMenu > div').addClass('hidden')
    })

    $('button.top').on('click',function(){
        $('html,body').animate({scrollTop: 0,} ,700)
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

    // 頁碼
  $('.pagenation button').on('click',function(){
    let active = $(this).hasClass('active')
    if(!active){
      $(this).addClass('active').siblings('.page').removeClass('active')
    }
  })

    
})