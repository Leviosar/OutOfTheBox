<?php
	header('Access-Control-Allow-Origin: *'); 

	if(!isset($_GET['query']))
		die("O campo query não foi passado devidamente");

    $query = $_GET['query'];
    $result;
	$mysqli = new mysqli("localhost", "labmatii", "my28@if#658", 'oob');	
	
	if($mysqli->connect_error){
		die("Erro na conexão - " . $mysqli->connect_errno() . " - " . $mysqli->connect_error());
	}

	$result = mysqli_fetch_all($mysqli->query($query), MYSQLI_NUM);
    print_r(json_encode($result));
?>