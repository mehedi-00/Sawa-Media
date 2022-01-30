;(function(){

// menu fixed
$(window).on('scroll',function(){
    var  winScroll = $(window).scrollTop();
    var headerScroll = $('.main-header');
    if(winScroll >= 150){
        headerScroll.addClass('menu-fixed');
     }else{
         headerScroll.removeClass('menu-fixed');
     }
})

// left side menu
let menu = $('#left-slide ul li');
menu.on('click',function(){
   $(this).click(function(){
       menu.removeClass('active');
       $(this).addClass('active');
   })
   
})


}) (jQuery);