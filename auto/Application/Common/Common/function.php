<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/2/7
 * Time: 14:00
 */
/**
 * +------------------------------------------------------------------------------
 * @desc            : 文字识别
 * +------------------------------------------------------------------------------
 * @access          : public
 * @author          : nyz<1135334365@qq.com>
 * @since           : 2018/2/5
 * @param           : Void
 * @return          : void
 * +------------------------------------------------------------------------------
 **/
function request_post($url = '', $param = '') {
    if (empty($url) || empty($param)) {
        return false;
    }

    $postUrl = $url;
    $curlPost = $param;
    $curl = curl_init();//初始化curl
    curl_setopt($curl, CURLOPT_URL,$postUrl);//抓取指定网页
    curl_setopt($curl, CURLOPT_HEADER, 0);//设置header
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
    curl_setopt($curl, CURLOPT_POST, 1);//post提交方式
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curlPost);
    $data = curl_exec($curl);//运行curl
    curl_close($curl);

    return $data;
}



/**
 * +------------------------------------------------------------------------------
 * @desc            : name
 * +------------------------------------------------------------------------------
 * @access          : public
 * @author          : nyz<1135334365@qq.com>
 * @since           : 2018/2/7
 * @param           : Void
 * @return          : void
 * +------------------------------------------------------------------------------
**/
function aipocr(){


    // 引入文字识别OCR SDK
//        import("AipOcr");
    vendor( "AipOcr.AipOcr" );
//        require_once ("AipOcr.php");
//        require_once '../../../ThinkPHP/Library/AipOcr.php';
// 定义常量
    define("APP_ID","10806306");
    define("API_KEY","Kw9blAf9Xn63xKfF7qmt3h35");
    define("SECRET_KEY","Zwi3akZPeXURrakpcNR4Ce6Xsi5so0ER");
    $aipOcr = new AipOcr(APP_ID, API_KEY, SECRET_KEY);

    $image = file_get_contents('C:\Users\lenovo\Desktop\123123.jpg');
    $idCardSide = "front"; //front 含照片面  back 含国徽面

// 调用身份证识别
    $aipOcr->idcard($image, $idCardSide);

// 如果有可选参数
    $options = array();
    $options["detect_direction"] = "true";
    $options["detect_risk"] = "false";

// 带参数调用身份证识别
    $rescult1 = $aipOcr->idcard($image, $idCardSide, $options);
    echo "<pre>";
    print_r($rescult1);



/*
    var_dump($aipOcr);
// 身份证识别
//var_dump($aipOcr->idcard(file_get_contents('idcard.jpg'), true));

// 银行卡识别
//var_dump($aipOcr->bankcard(file_get_contents('bankcard.jpg')));

// 通用文字识别
    $rescult = $aipOcr->general(file_get_contents('112233.jpg'));
    var_dump($rescult);*/
//    $image = file_get_contents('C:\Users\lenovo\Desktop\1234.jpg');
//    // 如果有可选参数
//    $options = array();
//    $options["language_type"] = "CHN_ENG";
//    $options["detect_direction"] = "true";
//    $options["detect_language"] = "true";
//    $options["probability"] = "true";
//
//// 带参数调用通用文字识别, 图片参数为本地图片
//    $aipOcr->basicGeneral($image, $options);
////    var_dump($image);
////
////// 调用通用文字识别, 图片参数为本地图片
//    $rescult = $aipOcr->basicGeneral($image, $options);
////    $rescult = $aipOcr->basicGeneral($image);
////    $url = "http://img3.duitang.com/uploads/item/201506/02/20150602131255_8yMiZ.jpeg";
////    $url = "https://timgsa.baidu.com/timg.jpg";
//
//// 调用通用文字识别, 图片参数为远程url图片
////    $rescult = $aipOcr->generalUrl($url);
//    var_dump($rescult);
//    print_r($rescult);

/*// 如果有可选参数
    $options = array();
    $options["language_type"] = "CHN_ENG";
    $options["detect_direction"] = "true";
    $options["detect_language"] = "true";
    $options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为本地图片
    $aipOcr->basicGeneral($image, $options);
    $url = "https//www.x.com/sample.jpg";

// 调用通用文字识别, 图片参数为远程url图片
    $aipOcr->basicGeneralUrl($url);

// 如果有可选参数
    $options = array();
    $options["language_type"] = "CHN_ENG";
    $options["detect_direction"] = "true";
    $options["detect_language"] = "true";
    $options["probability"] = "true";

// 带参数调用通用文字识别, 图片参数为远程url图片
    $aipOcr->basicGeneralUrl($url, $options);*/

    return $rescult1;

}

