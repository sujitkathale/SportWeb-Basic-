i=0;
 
$(document).ready(function(){ 
   
   $('.c1').mouseover( function(){
   
           if($('#fadeCheck').html()=='Click Here to Check Opacity'){
               $('.c1').fadeTo(50, 0.7, function(){      //fadeTo
                   $('#fadeCheck').html(" Click for Normal Image");
               });
           }
           else
           {
               $('.c1').fadeTo(50, 1,function(){
                   $('#fadeCheck').html("Click Here to Check Opacity");
               });
           }        
   });
});