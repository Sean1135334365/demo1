<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/2/8
 * Time: 11:09
 */
namespace Admin\Controller;
use Think\Controller;

/**
 * +------------------------------------------------------------------------------
 * @desc            : 图片上传
 * +------------------------------------------------------------------------------
 * @access          : public
 * @author          : nyz<1135334365@qq.com>
 * @since           : 2018/2/8
 * @param           : Void
 * @return          : void
 * +------------------------------------------------------------------------------
**/
class FileController extends Controller {
    public function img_file(){

        $url = './Public/uploading/images/';
        $img_url = '/uploading/images/';
        $upfile = $_FILES["file"];
        if(!empty($_GET['type'])){
            $savePath = $_GET['type'];
        }else{
            $savePath = date('Y-m-d',time());
        }



        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize   =     3145728 ;// 设置附件上传大小
        $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath  =     $url; // 设置附件上传根目录
        $upload->autoSub   =     true;
        $upload->subName   =     $savePath;
//        $upload->savePath  =     $savePath; // 设置附件上传根目录
        $upload->saveName  = 'YZS' . date('YmdHis',time()) . '_' . rand(1000,9999);

//        var_dump($_FILES);exit;



        // 上传单个文件
        $info   =   $upload->uploadOne($upfile);
        if(!$info) {// 上传错误提示错误信息
            $this->error($upload->getError());
        }else{// 上传成功 获取上传文件信息
//            echo $url . $info['savepath'].$info['savename'];

            $name = $upfile['name'];
            $size = $upfile['size'];


            $array = array(
                'filesize' => $size,
                'orgfilename' => $name,
            );

            $src = $img_url . $info['savepath'].$info['savename'];
//            $return_src = $url . $info['savepath'].$info['savename'];

//            echo json_encode(array('src' => $src, 'size' => $size, 'error' => 0 , 'data' => $array));




            $arr['info'] = '获取成功';
            $arr['code'] = '4';
            $arr['result'] = array('src' => $src, 'size' => $size, 'error' => 0 , 'data' => $array);
            $arr['status'] = 1;
            $this->ajaxReturn($arr);



        }


    }
}