$(document).ready(function() {
    
    
    
    
  var target = $('.box');
 
  var targetHeight = target.outerHeight();
    
  

$(document).scroll(function(e) {
var scrollPercent = (targetHeight - window.scrollY) / targetHeight;

  if (scrollPercent >= 0) {
    target.css('opacity', 1 - scrollPercent);
   
  }
});
    
    
    
    
    
 var targetTwo = $('.mainheadline');
 
  var targetHeightTwo = targetTwo.outerHeight();
 

$(document).scroll(function(e) {
var scrollPercentTwo = (targetHeightTwo - window.scrollY) / targetHeightTwo;

  if (scrollPercentTwo >= 0) {
    targetTwo.css('opacity', 1 - scrollPercentTwo);
   
  }
});
       
    
    
    
   $("#email").focus(function(){
    $(".label2").css('top','-40px');
}); 
    
    
    $("#message").focus(function(){
    $(".label3").css('right','450px');
});
    
    
   if($('#name').is(':focus') {
        
        $('.label1').css('opacity','0');
        
    } else {
        
        
        $('.label1').css('opacity','1');
    };

);


});
    
      
    
    
    
    
