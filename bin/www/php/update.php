<?php
	header('Access-Control-Allow-Origin: *'); 

	$log = $_GET['login'];
	$nome = $_GET['nome'];
	$pass = $_GET['pass'];
	$id = $_GET['id'];
    
    $connect = mysqli_connect("localhost", "labmatii", "my28@if#658", 'oob');
	$stmt = mysqli_prepare($connect, "UPDATE Alunos SET Nome_Aluno = ?, Senha = ? , Email = ? WHERE `ID_Aluno` = ?");
    mysqli_stmt_bind_param($stmt, "ssss", $nome, $pass, $log, $id);
    
	if(!mysqli_stmt_execute($stmt)){
		die("Ocorreu um erro durante a execução");
	}else{
        echo "true";
    }

?>