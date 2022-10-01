<?php
error.reporting(-1);
require("application/Application.php");
require("convert/Convert.php");

$roman = new RomanNumbers();

$number = $_GET['number'];
$pow = $_GET['pow'];

function router($params) {
    $method = $params['method'];
    if ($method) {
        $app = new Application();
        switch ($method) {
            case 'login':
                return $app->login($params);    
        }
    }
    else false;
}

function answer($params) {
    if ($data) {
        return array(
            'result' => 'ok',
            'data' => $data
        );
    }
    return array('result' => 'error');
}

echo json_encode(answer(router($_GET)));