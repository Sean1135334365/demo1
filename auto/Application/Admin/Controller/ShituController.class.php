<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/2/5
 * Time: 11:15
 */
namespace Admin\Controller;
use Think\Controller;

class ShituController extends Controller {
    public function shitu(){
//        phpinfo();
//        exit;
/*
        // 引入文字识别OCR SDK
//        import("AipOcr");
        vendor( "AipOcr.AipOcr" );
//        require_once ("AipOcr.php");
//        require_once '../../../ThinkPHP/Library/AipOcr.php';

// 定义常量
        define("APP_ID","10806306");
        define("API_KEY","Kw9blAf9Xn63xKfF7qmt3h35");
        define("SECRET_KEY","Zwi3akZPeXURrakpcNR4Ce6Xsi5so0ER");
//print_r(APP_ID);
//        echo "<br>";
//print_r(API_KEY);
//        echo "<br>";
//print_r(SECRET_KEY);
//        exit;
// 初始化
        $aipOcr = new AipOcr(APP_ID, API_KEY, SECRET_KEY);

// 身份证识别
//var_dump($aipOcr->idcard(file_get_contents('idcard.jpg'), true));

// 银行卡识别
//var_dump($aipOcr->bankcard(file_get_contents('bankcard.jpg')));

// 通用文字识别
        $rescult = $aipOcr->general(file_get_contents('123.jpg'));*/

//        echo "<pre>";

        $rescult = aipocr();
        $words = $rescult['words_result'];
//        var_dump($words[0]);
        //var_dump($aipOcr->general(file_get_contents('20170413195205.jpg')));

        $this->display();
    }
}