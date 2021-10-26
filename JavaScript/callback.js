 
 $(function(){
    $('.btn').click(function(){
        if($('.btn').html()=='HIDE PLAYER LIST'){
        $('.img1').fadeOut(1000,function(){
            $('.btn').html("SHOW PLAYER LIST").css({border:"1px solid red", 'background-color':"transparent", color:"green"});
        });''
    }
    else
    {
        $('.btn').html("HIDE PLAYER LIST");
        $('.img1').fadeIn(1000,function(){
        });
    }
    });
}); 





// $(()=>$('.btn').click(()=> $('#img1').fadeOut(5000, ()=>$('#img2').fadeOut(3000, ()=>alert("Operation Completed.......")))));