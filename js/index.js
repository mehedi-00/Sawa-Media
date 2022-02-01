;(function(){

// menu fixed
$(window).on('scroll',function(){
    var  winScroll = $(window).scrollTop();
    var headerScroll = $('.main-header');
    if(winScroll >= 144){
        headerScroll.addClass('menu-fixed');
        $('#left-slide').addClass('fixed');
     }else{
         headerScroll.removeClass('menu-fixed');
         $('#left-slide').removeClass('fixed')
     }
     
})





}) (jQuery);