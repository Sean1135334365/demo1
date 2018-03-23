<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文字识别</title>
</head>
<body>
<link rel="stylesheet" type="text/css" href="/Public/css/diyUpload/css/webuploader.css">
<link rel="stylesheet" type="text/css" href="/Public/css/diyUpload/css/diyUpload.css">
<script type="text/javascript" src="/Public/js/diyUpload/js/webuploader.html5only.min.js"></script>
<script type="text/javascript" src="/Public/js/diyUpload/js/diyUpload.js"></script>
<table>
    <tr>
        <th class="tableleft tab_middle">OCR文字识别</th>
        <td style="overflow: hidden">
            <?php if($product['img_url'] != ''): ?><img class="show_img" src="/Public<<?php echo ($product["img_url"]); ?>>" img_url="<<?php echo ($product["img_url"]); ?>>" style="float:left;width:119px;height:105px;border-radius:5px;vertical-align: middle;">
                <input type="hidden" img_url="<<?php echo ($product["img_url"]); ?>>"/><?php endif; ?>

            <div id="box" style="float: left;">
                <div id="test" ></div>

            </div>
            <!--<div class="clear"></div>-->
        </td>
    </tr>
</table>
<?php echo ($res); ?>
<?php echo ($res1); ?>
<script>
    $('#test').diyUpload({
        url:'<<?php echo U("File/img_file",array("type"=>"Ocr"));?>>',
        addimg:"/Public",//设置添加按钮图片根目录
        success:function( data ) {

            if(data.status === 1){

                var url = data.result.src;

                var ipt = "<input type='hidden' name='img_url' value='"+url+"'>";

                $('#box').before(ipt);
            }else{
            }
        }
    });
</script>
</body>
</html>