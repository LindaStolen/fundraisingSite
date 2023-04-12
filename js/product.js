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
})