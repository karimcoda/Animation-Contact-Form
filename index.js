$(function(){
    'use strict'
    

    $('.username').focusin(function(){
        $(this).parent().find('.important').fadeOut(200)
    })
    $('.mail').focusin(function(){
        $(this).parent().find('.important').fadeOut(200)
    })
    // var for Build Dynamic Error 
    var userError = 3,
        mailError = 3,
        mesError = 3,
        num1,
        num2;


    $('.username').blur(function(){
        if ($(this).val() !== ''){
            $(this).parent().find('#error-1').fadeOut(200);

            if ($(this).val().length < 4) {
                //Error
                $(this).css('border', '2px solid #ff0000');
                $(this).parent().find('#error-2').fadeIn(200);
                $(this).parent().find('.important').fadeIn(200);
                
                num2 = 2;
            }else {
                $(this).parent().find('#error-2').fadeOut(200);
                $(this).css('border', '1px solid #008000');
                
                num2 = 1;
            }
           
            num1 = 1;
            userError = num1 + num2; // error 3, no error 2
        }else{
            //Error
            $(this).parent().find('#error-1').fadeIn(200);
            $(this).parent().find('#error-2').hide();
            $(this).parent().find('.important').fadeIn(200);
            $(this).css('border', '2px solid #ff0000');
            
            userError = 3;
        }
        // add this when make input submit
        if(userError === 3){
            $('.btn-submit').css({
                'border': '1px solid #cacaca',
                'background-color' : '#cacaca'})
        }
    });
    
    
    $('.mail').blur(function(){
        if ($(this).val() == ''){
            //Error 
            $(this).parent().find('#error-1').fadeIn(200);
            $(this).css('border', '2px solid #ff0000');
            $(this).parent().find('.important').fadeIn(200);
            // add this when make input submit
            mailError = 3;
        }else{
            $(this).parent().find('#error-1').fadeOut(200);
            $(this).css('border', '1px solid #008000');
            
            mailError = 2;
        }
        
        if(mailError === 3){
            $('.btn-submit').css({
                'border': '1px solid #cacaca',
                'background-color' : '#cacaca'})
        }

        
    });

    $('.message').blur(function(){
        if ($(this).val() !== ''){ 
            $(this).parent().find('#error-1').fadeOut(200);
            $(this).css('border', '1px solid #008000');

            if ($(this).val().length < 10) {
                //Error
                $(this).css('border', '2px solid #ff0000');
                $(this).parent().find('#error-2').fadeIn(200);
                
                num2 = 2;
            }else {
                $(this).parent().find('#error-2').fadeOut(200);
                $(this).css('border', '1px solid #008000');
                
                num2 = 1;
            }
            
            num1 = 1;
            mesError = num1 + num2; // error 3, no error 2
        }else{
            //Error
            $(this).parent().find('#error-1').fadeIn(200);
            $(this).parent().find('#error-2').hide();
            $(this).css('border', '1px solid #ff0000');
            
            mesError = 2;
        }
        
        if(mesError === 3){
            $('.btn-submit').css({
                'border': '1px solid #cacaca',
                'background-color' : '#cacaca'})
        }else{
            $('.btn-submit').css({
                'border': '1px solid #cacaca',
                'background-color' : 'transparent',
                'cursor': 'pointer'
            })
            $('.btn-submit').mouseover(function(){
                $(this).css('background-color', '#fff')
            })
            $('.btn-submit').mouseout(function(){
                $(this).css('background-color', 'transparent')
            })
        }
    })

    $('.cell').blur(function(){
        if($(this).val() !== ''){
            $(this).css('border', '1px solid #008000')
        }


    })

    //Input Submit
    $('.main-form').submit(function(e) { 
        if (userError === 3 || mailError === 3 || mesError === 3){
            e.preventDefault();
            $('.username').blur();
            $('.mail').blur();
            $('.message').blur();
        } 
    });
    
    


    /*Animation*/
    $('.container').animate({
        top:'0px'
    }, 80, function(){
        $(this).slideDown(600, function(){
            
            $('.form-control').animate({
                width: '100%',
                opacity: '1'
            }, 600, function(){
                $('.btn-submit').animate({
                    opacity: '1',
                    width: '100%'
                },500);
            })
        });
    })
    
    
});
