<?php 
$query=require 'bootstrap.php';
$tasks=$query->selectAll('albums');
echo json_encode($tasks);