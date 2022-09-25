<?php
require("RomanNumbers.php"); //класс подключен. надо реализовать логику, но хз как поключить php файл к html. или как оно вообще?

$roman = new RomanNumbers();

$number = $_GET["number"];
$pow = $_GET["pow"];

print_r($roman);
echo pow($number, $pow);