<?php
require('user/User.php');
require('database/Database.php');
require('convert/Convert.php');

class Application {
    function __construct() {
        $db = new Database();
        $this->user = new User($db);
        $this->convert = new Convert();
    }

    public function login($params) {
        if ($params['login'] && $params['password']) {
            return $this->user->login($params['login'], $params['password']);
        }
    }

    public function convert($params) {
        $user = $this->user->getUser($params['token']);
        if ($user && $params['value'] && $pararms) {
            
        }
    }
}