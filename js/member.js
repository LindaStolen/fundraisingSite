$(function(){
  $('li.info').on('click', function(){
    let openSub = $(this).hasClass('open')
    if(!openSub){
      $(this).addClass('open').next('div').removeClass('hidden')
    }else{
      $(this).removeClass('open').next('div').removeClass('hidden')
    }
  })
  $('.tabs button').on('click', function(){
    let tabHere = $(this).hasClass('active')
    let box = $(this).index()
    if(!tabHere){
      $(this).addClass('active').siblings('button').removeClass('active')
      $('.listBox').eq(box).removeClass('hidden').siblings('.listBox').addClass('hidden')
    }
  })
})