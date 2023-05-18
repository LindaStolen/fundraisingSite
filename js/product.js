$(function(){
  // 商品篩選區塊功能
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
  // product_content tab切換功能
  $('nav.tab span').on('click', function(){
    let num = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('.content').eq(num).removeClass('hidden').siblings('.content').addClass('hidden')
  })
  // product_content 加碼功能
  $('.amount span').on('click',function(){
    $(this).removeClass('items').siblings('span').addClass('items')
    $(this).addClass('border-primary-300 bg-primary-400 text-graay-600 ').siblings('span').removeClass('border-primary-300 bg-primary-400 text-graay-600')
    if($(this).hasClass('custom')){
      $('.amount').next('input').removeClass('hidden')
    }else{
      $('.amount').next('input').addClass('hidden').val('')
    }
  })
  // 點擊結帳判斷是否選擇規格
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

  //購物車列表勾選＿全選
  $('#checkAll').on('click',function(){
    for(let p = 0; p < $("input[type='checkbox']").length; p++){
      if($(this).prop('checked')){
        $("input[type='checkbox']").eq(p).prop('checked',true)
      }else {
        $("input[type='checkbox']").eq(p).prop('checked',false)
      }
    }
  })
  // 購物車商家是否全選
  $('[id^="shop"]').on('click',function(){
    let shop = $(this).attr('id')
    if($('#checkAll').prop('checked') && $('[id^="shop"]:checked').length !== $('[id^="shop"]').length){
      $('#checkAll').prop('checked', false)
    }else if(!$('#checkAll').prop('checked') && $('[id^="shop"]:checked').length == $('[id^="shop"]').length){
      $('#checkAll').prop('checked', true)
    }
    for(let p = 0; p < $("input[name='" + shop + "']").length; p++){
      if($(this).prop('checked')){
        $("input[name='" + shop + "']").eq(p).prop('checked',true)
      }else {
        $("input[name='" + shop + "']").eq(p).prop('checked',false)
      }
    }
  })
  // 購物車商品是否全選
  $('.itemCheck').on('click',function(){
    let shop = $(this).attr('name')
    console.log('店家',shop)
    console.log($('[id="' + shop + '"]').prop('checked'))
    if($('[id="' + shop + '"]').prop('checked') && $('[name="' + shop + '"]:checked').length !== $('[name="' + shop + '"]').length){      
      $('[id="' + shop + '"]').prop('checked',false)
    }else if(!$('[id="' + shop + '"]').prop('checked') && $('[name="' + shop + '"]:checked').length == $('[name="' + shop + '"]').length){
      console.log($('[name="' + shop + '"]:checked').length)
      console.log($('[name="' + shop + '"]').length)
      $('[id="' + shop + '"]').prop('checked',true)
    }
    if($('#checkAll').prop('checked') && $('[id^="shop"]:checked').length !== $('[id^="shop"]').length){
      $('#checkAll').prop('checked', false)
    }else if(!$('#checkAll').prop('checked') && $('[id^="shop"]:checked').length == $('[id^="shop"]').length){
      $('#checkAll').prop('checked', true)
    }
  })

  // 商品運送方式選擇與點擊樣式功能
  $('input.deliver').on('click',function(){
    console.log($(this).val())
    $('#deliver').attr("value", $(this).val())
    $(this).addClass('pick').siblings('.deliver').removeClass('pick')
  })
  // 運送地區選擇與點擊樣式功能
  $('input.area').on('click',function(){
    console.log($(this).val())
    $('#reciverArea').attr("value", $(this).val())
    $(this).addClass('pick').siblings('.area').removeClass('pick')
  })
  // 結帳方式選擇
  $('input.payment').on('click',function(){
    console.log($(this).val())
    $('#payment').attr("value", $(this).val())
  })

  //購物車資訊表錯誤訊息提醒
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