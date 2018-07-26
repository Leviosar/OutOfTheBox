<?php
    // print_r($_GET);

    $title = $_GET['title'];
    $color = $_GET['color'];
    $start = $_GET['start'];
    $end = $_GET['end'];
    $day = $_GET['day'];

    switch ($day) {
        case 1:
            $day = 'Segunda-feira';
            break;
        case 2:
            $day = 'Terça-feira';
            break;
        case 3:
            $day = 'Quarta-feira';
            break;
        case 4:
            $day = 'Quinta-feira';
            break;
        case 5:
            $day = 'Sexta-feira';
            break;
        case 6:
            $day = 'Sábado';
            break;
        case 7:
            $day = 'Domingo';
            break;
    }
    echo 'true';

    // $connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_oobs", "joao21022001", 'u535468846_oobs');
    // print_r($connect);
    // $query = "INSERT INTO `Materia`(`Nome_Materia`, `Cor_Label`) VALUES ('$title','$color');";
    // $query .= "INSERT INTO `Aula`(`ID_Timetable`, `ID_Materia`, `Horario_Inicio`, `Horario_Final`, `Dia_Aula`) VALUES (1,1,$start,$end,$day)";
    
    // $result = mysqli_multi_query($connect, $query);
    // print_r($result);   
    // print_r($query1);
    // $query = mysqli_query($connect, "INSERT INTO `Aula`(`ID_Timetable`, `ID_Materia`, `Horario_Inicio`, `Horario_Final`, `Dia_Aula`) 
    // print_r($query);

?>