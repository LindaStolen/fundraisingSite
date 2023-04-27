$(function(){
  $('li.info').on('click', function(){
    let openSub = $(this).hasClass('open')
    if(!openSub){
      $(this).addClass('open').next('div').removeClass('hidden')
    }else{
      $(this).removeClass('open').next('div').removeClass('hidden')
    }
  })
})