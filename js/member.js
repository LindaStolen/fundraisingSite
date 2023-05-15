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
    }else if(active && subMenu){
      $(this).removeClass('active').siblings('li').removeClass('active')
      $(this).next('div').addClass('hidden').children('a').removeClass('active')
    }
  })
  //側邊子選單點擊樣式
  $('.memberMenu a').on('click', function(){
    let active = $(this).hasClass('active')
    if(!active){
      $(this).addClass('active').siblings('a').removeClass('active')
    }
  })

  $('form input:radio').on('click',function(){
    // let checked = $(this).prop('checked')
    console.log($(this).attr('checked'))
    // console.log($(this).siblings('input').attr('checked'))
    $(this).attr('checked',true)
    // console.log('attr',$(this).attr('checked'))
    // console.log('prop',checked)
  })
  $('.edit button').on('click',function(){
    $(this).parent().addClass('hidden').next('.buttons').removeClass('hidden')
    $('.mainContainer form input').attr('disabled',false)
  })

  $('.buttons button').on('click',function(){
    $(this).parent().addClass('hidden').prev('.edit').removeClass('hidden')
    // 如果是編輯後送出
    if($(this).attr('type') == 'submit'){
      // send form out
      alert('已儲存！')
    }
    $('.mainContainer form input').attr('disabled',true)
    return false
  })
  // console.log($('form input:button'))
  $('form input:button').on('click',function(){
    console.log($(this).hasClass('pick'))
    console.log($(this).val())
    $(this).addClass('pick').siblings('input').removeClass('pick')
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
  $('.videoInfo .tabsBox button').on('click',function(){
    let inx = $(this).index()
    let tabHere = $(this).hasClass('active')
    if(!tabHere){
      $(this).addClass('active').siblings('button').removeClass('active')
    }
    if(inx == 1){
      $('.infoBox').eq(inx).removeClass('hidden').addClass('grid').siblings('.infoBox').addClass('hidden').removeClass('grid')
    }else{
      $('.infoBox').eq(inx).removeClass('hidden').siblings('.infoBox').addClass('hidden').removeClass('grid')
    }
  })
  
  // 課程影片切換
    $('.infoBox>button').on('click',function(){
      let change = $(this).hasClass('pick')
      if(!change){
        $(this).addClass('pick').siblings('button').removeClass('pick')
      }
    })

  // 判斷訂單是否捲動
  if($(window).innerWidth() < 960){
    $('.orderList').addClass('overflow-x-auto')
  }else {
    $('.orderList').removeClass('overflow-x-auto')
  }
  // 通知中心、訂單列表的詳細資訊跳窗
  $('.listBox li').on('click',function(){
    $('.messageContainer').removeClass('hidden')
  })
  $(".orderList button.review").on('click',function(){
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