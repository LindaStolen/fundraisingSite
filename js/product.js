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
    }
  })

  $('.addCart').on('click',function(){
    if($('.specification').val() == 0 || ''){
      $('.alert').removeClass('hidden').find('.textBox span').eq(0).empty().text('error')
      $('.textBox span').eq(1).empty().text('請選擇商品規格')
      $('body').css('overflow','hidden')
    }else{
      $('.alert').removeClass('hidden').find('.textBox span').eq(0).empty().text('task_alt')
      $('.textBox span').eq(1).empty().text('商品已加入購物車')
    }
  })
  $('.closeAlert').on('click',function(){
    $('.alertbg').addClass('hidden')
    $(this).parent('.alert').addClass('hidden')
    $('body').css('overflow','scroll')
  })

})