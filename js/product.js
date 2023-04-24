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
  $('input.deliver').on('click',function(){
    console.log($(this).val())
    $('#deliver').attr("value", $(this).val())
  })
  $('input.area').on('click',function(){
    console.log($(this).val())
    $('#reciverArea').attr("value", $(this).val())
  })
  $('input.payment').on('click',function(){
    console.log($(this).val())
    $('#payment').attr("value", $(this).val())
  })

  $('button.checkOut').on('click',function(e){
    e.preventDefault()
    if($('#deliver').val() == ''){
      $('#deliver').siblings('.error').removeClass('hidden')
    }
    if($('#reciverArea').val() == ''){
      $('#reciverArea').siblings('.error').removeClass('hidden')
    }
    if($('#reciverAddress').val() == ''){
      $('#reciverAddress').siblings('.error').removeClass('hidden')
    }
    if($('#payment').val() == ''){
      $('#payment').siblings('.error').removeClass('hidden')
    }
    for(let i = 0; i < $('.purchaser').length; i++){
      console.log($('.purchaser').length)
      if($('.purchaser').eq(i).val() == ''){
        $('.purchaser').eq(i).focus().addClass('error').siblings('.error').removeClass('hidden')
      }
    }
    for(let i = 0; i < $('.reciver').length; i++){
      console.log($('.reciver').length)
      if($('.reciver').eq(i).val() == ''){
        $('.reciver').eq(i).focus().addClass('error').siblings('.error').removeClass('hidden')
      }
    }
  })

})