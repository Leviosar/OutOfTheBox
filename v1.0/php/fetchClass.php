<?php
    $connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_oob", "joao21022001", 'u535468846_oob');
    $query = mysqli_query($connect, 
                "SELECT Aulas.Nome_Aula, Aulas.Cor_Aula, Aulas.Horario_Inicio, Aulas.Horario_Final FROM `Alunos` 
                    INNER JOIN Timetable 
                        ON Alunos.ID_Timetable = Timetable.ID_Timetable 
                            INNER JOIN Dia_Letivo
                                ON Dia_Letivo.ID_Dia_Letivo = Timetable.ID_Dia_Letivo 
                                    INNER JOIN Aulas 
                                        ON Aulas.ID_Dia_Letivo = Dia_Letivo.ID_Dia_Letivo
    ");

    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
        print_r (json_encode($row));
    }
?>  