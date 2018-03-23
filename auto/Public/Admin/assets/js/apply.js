/**
 * Created by 84989 on 2017/8/8.
 */

var input_r = false;
$(function(){



    $('button[type="submit"]').click(function(){
        input_r = true;

        $('.found_page').show();
        $('.approve_table').show();
        //console.log(input_r);
    });




    $('input[required=""]').focus(function(){
       if(input_r){
           var input_foc = $(this).attr('name');
           //$('#t_c_top').scrollTop();
           if(input_foc === 'name' || input_foc === 'amount' || input_foc === 'warehouse_warrant_date'){

               $('.found_page').show();
               $('#sbm').show();
               $('.approve_table').hide();

               $("#t_c_top").animate({scrollTop:150},100);


               console.log($(this).scrollTop());
               console.log($("body").offset().top);
               console.log($("#t_c_top").offset().top);
               console.log($('input[name="'+input_foc+'"]').offset().top);
               //console.log($(this).scrollTop());
               //console.log($("body").offset().top);
           }else{
               //console.log(input_foc);
               $('.found_page').hide();
               $('#sbm').hide();
               $('.approve_table').show();
               var a4_height = $('.approve_table').height()+38;
               //console.log(a4_height);
               $('.a4_container').css('height',a4_height + 'px');
               $("#t_c_top").animate({scrollTop:($('input[name="'+input_foc+'"]').offset().top)+150},100);
           }

           console.log(input_foc);
           console.log(input_r);
       }

    });



//    $('html,body').scroll(function(){
////当滚动条滚动时
////               showload();
////        console.log(showload());
////        console.log(1);
////        console.log($(this));
////        console.log($(this).scrollTop());
//
//    });


    $('input[required=""]').blur(function(){
        input_r = false;
        //console.log(input_r);
    });






});


















