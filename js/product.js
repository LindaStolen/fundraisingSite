$(function(){
  $('.toggle').on('click',function(){
    let close = $(this).hasClass('close')
    console.log(close)
    if(close){
      $(this).removeClass('close')
      $('.sidebarSelect').animate({left: 15})
    }else {
      $(this).addClass('close')
      $('.sidebarSelect').animate({left: -256})
    }
  })

  $('nav.tab span').on('click', function(){
    let num = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('.content').eq(num).removeClass('hidden').siblings('.content').addClass('hidden')
  })

  $('.amount span').on('click',function(){
    $(this).removeClass('items').siblings('span').addClass('items')
    $(this).addClass('border-primary-300 bg-primary-400 text-graay-600 ').siblings('span').removeClass('border-primary-300 bg-primary-400 text-graay-600')
    if($(this).hasClass('custom')){
      $('.amount').next('input').removeClass('hidden')
    }else{
      $('.amount').next('input').addClass('hidden').val('')
      // $('.customDonate')
    }
  })
})