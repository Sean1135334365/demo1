


var imgnum = 0;
var img = 0;

$(function(){
    $('.img_x').click(function(){
        var self=$(this);
        var src = $(this).attr('src');
        var img = $(this).next().attr('img');
        $('.img_d img').remove();
        var oimg=document.createElement('img');
        $('.img_d').append(oimg);
        $('.img_d img').attr('src',src);
        $('.img_d img').attr('img',img);
        $('.img_d img').css({'left':'50%','top':'50%','transform':'scale(1) translate3d(-50%,-50%,0px)','-webkit-transform':'scale(1) translate3d(-50%,-50%,0px)','-moz-transform':'scale(1) translate3d(-50%,-50%,0px)','-ms-transform':'scale(1) translate3d(-50%,-50%,0px)','-o-transform':'scale(1) translate3d(-50%,-50%,0px)','transform-origin':'0px 0px','-webkit-transform-origin':'0px 0px','-moz-transform-origin':'0px 0px','-ms-transform-origin':'0px 0px','-o-transform-origin':'0px 0px'});
        $('.large').css('display', 'block');
        $('div#banner div').remove();
        $(this).parent().parent().find('.img_x').each(function(index,val){
            var odiv=document.createElement('div');
            var oimg=document.createElement('img');
            $(oimg).attr({'index':index,'src':$(val).attr('src')});
            $(odiv).append(oimg);
            $('div#banner').append(odiv);
            if($(val).attr('src')==$(self).attr('src')){
                $('.img_d img').attr('index',index);
                $('div#banner div').eq(index).css('border','2px solid #2d78f4');
            }
            $(odiv).click(function(){
                $('div#banner div').css('border','1px solid #ccc');
                $(this).css('border','2px solid #2d78f4');
                $('.img_d img').attr({'index':$(this).find('img').attr('index'),'src':$(this).find('img').attr('src')});
            });
        });
        $('.img_d img').ImageZooming({
            scale: 3,
            parent:$('.img_d'),
            limit:false,
            deviation_x:parent.$('iframe').offset().left,
            deviation_y:parent.$('iframe').offset().top,
            callback: function(a, b, c, d) {
                $('#info1').html('x: '+a.x+'    y:'+a.y);
            }
        });
    });
    $('#banner_close').click(function(){
        $('.large').css('display', 'none');
    }); 
    $('#banner_reset').click(function(){
        $('.img_d img').css({'left':'50%','top':'50%','transform':'scale(1) translate3d(-50%,-50%,0px)','-webkit-transform':'scale(1) translate3d(-50%,-50%,0px)','-moz-transform':'scale(1) translate3d(-50%,-50%,0px)','-ms-transform':'scale(1) translate3d(-50%,-50%,0px)','-o-transform':'scale(1) translate3d(-50%,-50%,0px)','transform-origin':'0px 0px','-webkit-transform-origin':'0px 0px','-moz-transform-origin':'0px 0px','-ms-transform-origin':'0px 0px','-o-transform-origin':'0px 0px'});
        $('.large').css('display', 'block');
    }); 
    var banner_contro=true;
    $('#banner_p').click(function(){
        if(banner_contro){
            $('div#banner').css('height','3.7%');
            banner_contro=!banner_contro;
        }else{
            $('div#banner').css('height','20%');
            banner_contro=!banner_contro;
        }
    }); 
    
    //翻页
    $('.turnL').click(function(){
        $('.img_d img').css({'left':'50%','top':'50%','transform':'scale(1) translate3d(-50%,-50%,0px)','-webkit-transform':'scale(1) translate3d(-50%,-50%,0px)','-moz-transform':'scale(1) translate3d(-50%,-50%,0px)','-ms-transform':'scale(1) translate3d(-50%,-50%,0px)','-o-transform':'scale(1) translate3d(-50%,-50%,0px)','transform-origin':'0px 0px','-webkit-transform-origin':'0px 0px','-moz-transform-origin':'0px 0px','-ms-transform-origin':'0px 0px','-o-transform-origin':'0px 0px'});
        $('.large').css('display', 'block');
        var nowI=$('.img_d img').attr('index');
        var count=$('div#banner img').length;
        nowI--;
        $('.img_d img').remove();
        var oimg=document.createElement('img');
        $('.img_d').append(oimg);
        $('div#banner div').css('border','1px solid #ccc');
        if(nowI<0){
            nowI=count-1;
            $('.img_d img').attr({'index':nowI,'src':$('div#banner img').eq(nowI).attr('src')});
            $('div#banner div').eq(nowI).css('border','2px solid #2d78f4');
        }else{
            $('.img_d img').attr({'index':nowI,'src':$('div#banner img').eq(nowI).attr('src')});
            $('div#banner div').eq(nowI).css('border','2px solid #2d78f4');
        }
        $('.img_d img').ImageZooming({
            scale: 3,
            parent:$('.img_d'),
            limit:false,
            deviation_x:parent.$('iframe').offset().left,
            deviation_y:parent.$('iframe').offset().top,
            callback: function(a, b, c, d) {
                $('#info1').html('x: '+a.x+'    y:'+a.y);
            }
        });
    });
    $('.turnR').click(function(){
        $('.img_d img').css({'left':'50%','top':'50%','transform':'scale(1) translate3d(-50%,-50%,0px)','-webkit-transform':'scale(1) translate3d(-50%,-50%,0px)','-moz-transform':'scale(1) translate3d(-50%,-50%,0px)','-ms-transform':'scale(1) translate3d(-50%,-50%,0px)','-o-transform':'scale(1) translate3d(-50%,-50%,0px)','transform-origin':'0px 0px','-webkit-transform-origin':'0px 0px','-moz-transform-origin':'0px 0px','-ms-transform-origin':'0px 0px','-o-transform-origin':'0px 0px'});
        $('.large').css('display', 'block');
        var nowI=$('.img_d img').attr('index');
        var count=$('div#banner img').length;
        nowI++;
        $('.img_d img').remove();
        var oimg=document.createElement('img');
        $('.img_d').append(oimg);
        $('div#banner div').css('border','1px solid #ccc');
        if(nowI>=count){
            nowI=0;
            $('.img_d img').attr({'index':nowI,'src':$('div#banner img').eq(nowI).attr('src')});
            $('div#banner div').eq(nowI).css('border','2px solid #2d78f4');
        }else{
            $('.img_d img').attr({'index':nowI,'src':$('div#banner img').eq(nowI).attr('src')});
            $('div#banner div').eq(nowI).css('border','2px solid #2d78f4');
        }
        $('.img_d img').ImageZooming({
            scale: 3,
            parent:$('.img_d'),
            limit:false,
            deviation_x:parent.$('iframe').offset().left,
            deviation_y:parent.$('iframe').offset().top,
            callback: function(a, b, c, d) {
                $('#info1').html('x: '+a.x+'    y:'+a.y);
            }
        });
    });
    





    //多图上传
    var f2 = document.querySelector('.sp_file_img');
    //f2.onchange = uploading;
    //$(document).on('change','.loanpic',function(){
    //    console.log(111);
    //    var id = $(this).attr('id');
    //    uploading(this, id);
    //});
    $(document).on('change',f2,uploading);

});





function uploading(e) {
    var files = e.target.files;
    var len = files.length;
    for (var i=0; i < len; i++) {
        lrz(files[i],{width:1024,fieldName:"upfile"}).then(function (rst) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', img_url);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        //console.log(xhr.responseText);
                        console.log(e.target.id);
                        var img_id = e.target.id;
                        var ky = img_id.substr(0,1);
                        var obj = eval('(' + xhr.responseText + ')');
                        var cla = "'fi_im_"+img_id+imgnum+"'";
                        $(".img_file[btn='"+img_id+"']").before('<img src="'+public_img+obj.src+'" onclick="imgclick('+cla+')" class="weui_uploader_file weui_uploader_status fi_im_'+img_id+imgnum+'" style="margin:5px;"><input value="'+obj.src+'"  type="hidden"  class="fi_im_'+img_id+imgnum+'" name="'+img_id+'[]" />');
                        //$(".img_file[btn='"+img_id+"']").before('<input value="'+obj.src+'"  type="hidden"  class="fi_im_'+img_id+imgnum+' name="'+img_id+'[]" />');
                        $('#loanpic').removeAttr('data-required data-descriptions');
                        var input_file = '<input type="file" class="sp_file_img loanpic" accept="image/*" id="'+img_id+'" title="添加图片">';
                        $('#'+img_id).remove();
                        $('.img_file[btn="'+img_id+'"]').append(input_file);



                        //class="preview" img="111"
                        //$('.preview[img="'+img_id+'"]').css('display','block');
                        //var k = img_id.substr(1,1);
                        //var y = img_id.substr(2,1);
                        img++;
                        imgnum++;




                    } else {
                        // 处理其他情况
                    }
                };
                xhr.onerror = function () {
                    // 处理错误
                };
                xhr.upload.onprogress = function (e) {
                    // 上传进度
                    var percentComplete = ((e.loaded / e.total) || 0) * 100;
                };
                // 添加参数
                var size = rst.formData.append('size', rst.fileLen);
                var base64 = rst.formData.append('base64', rst.base64);


                // 触发上传
                xhr.send(rst.formData);
                return rst;
            })

            .catch(function (err) {
                alert(err);
            })
            .always(function () {// 不管是成功失败，这里都会执行
            });

    }//for end
}






function imgclick(id){
    if(confirm('您确定要删除吗?')){
        $('.'+id).detach();
        img--;
    }
}



function checkform(){
    var username = $('#username').val();
    var identification_id = $('#identification_id').val();
    var usermobile = $('#usermobile').val();
    var loanamount = $('#loanamount').val();

    if(username.length < 2){
        alert('申请人姓名不合法');
        return false;
    }
    if(!(/^\d{17}[\d|x|X]$/.test(identification_id))){
        alert('申请人身份证号码不合法');
        return false;
    }
    if(!(/^[1]\d{10}$/.test(usermobile))){
        alert('申请人手机号码不合法');
        return false;
    }
    if(loanamount < 200000 || loanamount > 10000000){
        alert('*借款金额应在二十万到一千万之间！');
        return false;
    }

    //var p_power_num = parseInt($('#p_power_num').val());
    var i = 1;
    for(i;i<=p_power_num;i++){
        var obligee_name_obligee = $('#obligee_name'+i+'_obligee').val();
        var obligee_identification_id_obligee = $('#obligee_identification_id'+i+'_obligee').val();
        var obligee_name_mate = $('#obligee_name'+i+'_mate').val();
        var obligee_identification_id_mate = $('#obligee_identification_id'+i+'_mate').val();
        var obligee_mobile = $('#obligee_mobile'+i).val();

        var matrimony = $('input[name="matrimony['+i+']"]:checked').val();
        console.log(matrimony);

        if(obligee_name_obligee.length < 2){
            alert('权利人'+i+'姓名不合法');
            return false;
        }
        if((obligee_name_mate.length < 2)  && (matrimony === '2' || matrimony === '3')){
            alert('配偶姓名不合法');
            return false;
        }
        if(!(/^\d{17}[\d|x|X]$/.test(obligee_identification_id_obligee))){
            alert('权利人'+i+'身份证号码不合法');
            return false;
        }
        if(!(/^\d{17}[\d|x|X]$/.test(obligee_identification_id_mate)) && (matrimony === '2' || matrimony === '3')){
            alert('配偶身份证号码不合法');
            return false;
        }
        if(!(/^[1]\d{10}$/.test(obligee_mobile))){
            alert('权利人'+i+'手机号码不合法');
            return false;
        }


    }

}



