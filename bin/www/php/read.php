<?php
	header('Access-Control-Allow-Origin: *'); 

	if(!isset($_GET['login']))
		die("O campo login não foi passado devidamente");

	if(!isset($_GET['pass']))
		die("O campo senha não foi passado devidamente");

	$log = $_GET['login'];
	$pass = $_GET['pass'];

	// Variable declare
	$password = $email = $nome = $id = "";
	$user = $returnArray = [];


	$mysqli = new mysqli("localhost", "labmatii", "my28@if#658", 'oob');	
	
	if($mysqli->connect_error){
		die("Erro na conexão - " . $mysqli->connect_errno() . " - " . $mysqli->connect_error());
	}

	$stmt = $mysqli->prepare("SELECT Nome_Aluno, Senha, Email, ID_Aluno FROM Alunos WHERE `Email` = ? AND `Senha` = ?");

	$stmt->bind_param("ss", $log, $pass);
	$stmt->bind_result($nome, $password, $email, $id);
	
	if(!$stmt->execute()){
		die("Ocorreu um erro durante a execução");
	}else{
		$stmt->fetch();
		if(is_null($nome) || is_null($email) || is_null($password)){
			echo "false";
		}else{
			array_push($user, $nome);
			array_push($user, $email);
			array_push($user, $password);
			array_push($user, $id);
			array_push($returnArray, $user);
			print_r(json_encode($returnArray));
		}
	}

?>