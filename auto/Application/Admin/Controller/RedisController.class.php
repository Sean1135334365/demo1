<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2018/3/5
 * Time: 14:15
 */
namespace Admin\Controller;
use Think\Controller;

class RedisController extends Controller {
    public function redis(){
        $redis=new Redis();
        $redis->connect('127.0.0.1',6379);
        $redis->set('name','hello,redis');
        echo $redis->get('name');
    }
}