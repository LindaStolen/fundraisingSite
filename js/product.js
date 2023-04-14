$(function(){
  $('.toggle').on('click',function(){
    let close = $(this).hasClass('close')
    console.log(close)
    if(close){
      $(this).removeClass('close')
      $('.sidebarSelect').removeClass('-left-60')
    }else {
      $(this).addClass('close')
      $('.sidebarSelect').addClass('-left-60')
    }
  })

  $('.mainCarousel').owlCarousel({
    items:1,
    nav: false,
    dots: false,
  })
  $('.asNavCarousel').owlCarousel({
    items:3,
    margin:10,
  })
  $('nav.tab span').on('click', function(){
    let num = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('.content').eq(num).removeClass('hidden').siblings('.content').addClass('hidden')
  })
})