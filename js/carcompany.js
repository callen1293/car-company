$(document).ready(function() {
    
    
    
    
  var target = $('.box');
 
  var targetHeight = target.outerHeight();
    
  

$(document).scroll(function(e) {
var scrollPercent = (targetHeight - window.scrollY) / targetHeight;

  if (scrollPercent >= 0) {
    target.css('opacity', 1 - scrollPercent);
   
  }
});
    
    
    
    
    
 var targetTwo = $('.mainservice');
 
  var targetHeightTwo = targetTwo.outerHeight();
 

$(document).scroll(function(e) {
var scrollPercentTwo = (targetHeightTwo - window.scrollY) / targetHeightTwo;

  if (scrollPercentTwo >= 0) {
    targetTwo.css('opacity', 1 - scrollPercentTwo);
   
  }
});
    
    
 var targetThree = $('.get-in-touch');
 
  var targetHeightThree = targetThree.outerHeight();
 

$(document).scroll(function(e) {
var scrollPercentThree = (targetHeightThree - window.scrollY) / targetHeightThree;

  if (scrollPercentThree >= 0) {
    targetThree.css('opacity', 1 - scrollPercentThree);
   
  }
});
          
       

    
    
   $( '#name' ).keyup(function() {
  if( $('#name').val() ) {
     $('.label1').css('opacity','0');
  } else {
     $('.label1').css('opacity','1');
  }
});

     $( '#email' ).keyup(function() {
  if( $('#email').val() ) {
     $('.label2').css('opacity','0');
  } else {
     $('.label2').css('opacity','1');
  }
});

    
     $( '#message' ).keyup(function() {
  if( $('#message').val() ) {
     $('.label3').css('opacity','0');
  } else {
     $('.label3').css('opacity','1');
  }
});

    
   
}); 



    
      
    
    
    
    
