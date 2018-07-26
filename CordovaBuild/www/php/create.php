<?php
    header('Access-Control-Allow-Origin: *'); 

    $log = $_GET['login'];
    $pass = $_GET['pass'];
    $nome = $_GET['nome'];
    $verification;

    $link = mysqli_connect('localhost', 'labmatii', 'my28@if#658', 'oob');
    
    $stmt = mysqli_prepare($link, "SELECT ID_Aluno FROM Alunos WHERE Email = ?");
    mysqli_stmt_bind_param($stmt, "s", $log);
    mysqli_stmt_bind_result($stmt, $verification);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_fetch($stmt);

    if(is_numeric($verification)){
        die("O email selecionado já está em uso");
    }else{
        $stmt = mysqli_prepare($link, "INSERT INTO Alunos (Nome_Aluno, Email, Senha, Nível, Xp) VALUES (?, ?, ?, '1', '0')");

        mysqli_stmt_bind_param($stmt, "sss", $nome, $log, $pass);
        
        if(!mysqli_stmt_execute($stmt)){
            die("false");
        }else{
            echo "true";
        }
    }
