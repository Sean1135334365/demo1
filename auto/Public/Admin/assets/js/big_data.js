



var btn_ig = false;

$(function(){

    $('.btn_investigate').click(function(){
        if(btn_ig){
            return alert('正在获取数据，请稍等！');
        }
        var u = $(this).attr('u');
        var i = $(this).attr('i');
        var user = $(this).attr('user');

        if(u === '0'){
            btn_ig = true;
            $('.load').show();
            $('.load_text').html('正在努力获取数据中……');
            $.post(investigate_url,{id:i},function(data){
                //console.log(data);
                //console.log(data.status);
                //console.log(data.id);
                //console.log(data.status === 1);

                if(data.status === 1){

                    var str = "/id/"+data.id+"/i_id/"+i+".html";

                    var iframe_url = iframe_u.replace(/\.html/, str);
                    $('#ifeame_center').show();
                    $('#title_text').html(data.name+'-审查报告');
                    $('#iframe').attr('src',iframe_url);

                    $('#btn_investigate').attr('u',data.id);


                    btn_ig = false;

                }else{
                    alert('信息获取失败！code:'+data.code+';da:'+data.result)
                }
                $('.load').hide();
                setTimeout('btn_ig = false;',60000);
            },'json');
        }else{
            $.post(name_url,{id:i},function(data){

                var str = "/id/"+u+"/i_id/"+i+".html";

                var iframe_url = iframe_u.replace(/\.html/, str);

                if(data.status === 1){

                    $('#title_text').html(data.name1+'-审查报告');
                }

                $('#ifeame_center').show();
                $('#iframe').attr('src',iframe_url);




            },'json');
        }
    });


});































