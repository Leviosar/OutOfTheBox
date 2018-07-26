<?php
	header('Access-Control-Allow-Origin: *'); 

	$id = $_GET['id'];
    
    $connect = mysqli_connect("localhost", "labmatii", "my28@if#658", 'oob');
	$stmt = mysqli_prepare($connect, "DELETE FROM Alunos WHERE `ID_Aluno` = ?");
    mysqli_stmt_bind_param($stmt, "s", $id);
    
	if(!mysqli_stmt_execute($stmt)){
		die("Ocorreu um erro durante a execução");
	}else{
        echo "true";
    }

?>