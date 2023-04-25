$(function(){
  $('.visibility_off').on('click',function(){
    let showCode = $(this).hasClass('show')
    if(!showCode){
      $(this).empty().html('visibility').addClass('show').prev('input').attr('type', 'text')
    }else{
      $(this).empty().html('visibility_off').removeClass('show').prev('input').attr('type', 'password')
    }
  })
})