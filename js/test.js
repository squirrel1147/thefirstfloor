$(document).ready(function() {
   $('.imgJs').on('mouseenter',function() {
     	$(this).closest('.content').find('.spanJs').slideToggle();
    });
   $('.imgJs').on('mouseleave',function() {
     	$(this).closest('.content').find('.spanJs').slideToggle();
    });  
});