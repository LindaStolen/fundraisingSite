$(function(){
  //側邊選單點擊樣式
  $('.memberMenu li').on('click', function(){
    let active = $(this).hasClass('active')
    let subMenu = $(this).hasClass('info')
    if(!active && subMenu){
      $(this).addClass('active').siblings('li').removeClass('active')
      $(this).next('div').removeClass('hidden')
    }else if(!active && !subMenu){
      $(this).addClass('active').siblings('li').removeClass('active')
      $('li.info').next('div').addClass('hidden')
    }
  })
  //側邊子選單點擊樣式
  $('.memberMenu a').on('click', function(){
    let active = $(this).hasClass('active')
    if(!active){
      $(this).addClass('active').siblings('a').removeClass('active')
    }
  })
  // 優惠券、通知中心tabs切換
  $('.tabs button').on('click', function(){
    let tabHere = $(this).hasClass('active')
    let box = $(this).index()
    if(!tabHere){
      $(this).addClass('active').siblings('button').removeClass('active')
      $('.listBox').eq(box).removeClass('hidden').siblings('.listBox').addClass('hidden')
    }
  })
  
  // 課程影片訊息跳窗
  $('.videoInfo button').on('click',function(){
    let inx = $(this).index()
    console.log(inx)
    if(inx == 1){
      $('.infoBox').eq(inx).removeClass('hidden').addClass('grid').siblings('.infoBox').addClass('hidden').removeClass('grid')
    }else{
      $('.infoBox').eq(inx).removeClass('hidden').siblings('.infoBox').addClass('hidden').removeClass('grid')
    }
  })

  // 通知中心、訂單列表的詳細資訊跳窗
  $('.listBox li').on('click',function(){
    $('.messageContainer').removeClass('hidden')
  })
  $(".orderList a").on('click',function(){
    $('.orderContainer').removeClass('hidden')
  })
  // 關閉跳窗
  $('[class*="Container"] .close').on('click',function(){
    $(this).parent().parent().addClass('hidden')
  })

  // 頁碼點擊樣式
  $('.pagenation button').on('click',function(){
    let active = $(this).hasClass('active')
    if(!active){
      $(this).addClass('active').siblings('.page').removeClass('active')
    }
  })

  // 課程分類點擊樣式
  $('.courseCategory button').on('click', function(){
    let active = $(this).hasClass('active')
    if(!active){
      $(this).addClass('active').siblings('button').removeClass('active')
    }
  })

})