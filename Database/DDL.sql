CREATE TABLE `oob`.`Experiencias` ( 
    `ID_Experiencia` INT NOT NULL AUTO_INCREMENT , 
    `Label` VARCHAR(7) NOT NULL ,
    `Title` VARCHAR(30) NOT NULL ,
    `Descricao` VARCHAR(255) NOT NULL , 
    PRIMARY KEY (`ID_Experiencia`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Disciplinas` ( 
    `ID_Disciplina` INT NOT NULL AUTO_INCREMENT , 
    `Nome_Disciplina` VARCHAR(20) NOT NULL ,
    PRIMARY KEY (`ID_Disciplina`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Disciplinas_Experiencias` ( 
    `ID_Disciplina` INT NOT NULL , 
    `ID_Experiencia` INT NOT NULL ,
    FOREIGN KEY (`ID_Experiencia`) REFERENCES `Experiencias` (`ID_Experiencia`),
    FOREIGN KEY (`ID_Disciplina`) REFERENCES `Disciplinas` (`ID_Disciplina`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Dia_Letivo` ( 
    `ID_Dia_Letivo` INT NOT NULL AUTO_INCREMENT, 
    `Nome_Dia` VARCHAR(20) NOT NULL ,
    PRIMARY KEY (`ID_Dia_Letivo`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Aulas` ( 
    `ID_Aula` INT NOT NULL , 
    `ID_Dia_Letivo` INT NOT NULL ,
    `Nome_Aula` VARCHAR(20) NOT NULL , 
    `Cor_Aula` VARCHAR(7) NOT NULL , 
    `Horario_Inicio` VARCHAR(5) NOT NULL , 
    `Horario_Final` VARCHAR(5) NOT NULL , 
    PRIMARY KEY (`ID_Aula`) ,
    FOREIGN KEY (`ID_Dia_Letivo`) REFERENCES `Dia_Letivo` (`ID_Dia_Letivo`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Timetable` ( 
    `ID_Dia_Letivo` INT NOT NULL , 
    `ID_Timetable` INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (`ID_Timetable`) ,
    FOREIGN KEY (`ID_Dia_Letivo`) REFERENCES `Dia_Letivo` (`ID_Dia_Letivo`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Alunos` ( 
    `ID_Aluno` INT NOT NULL AUTO_INCREMENT, 
    `ID_Timetable` INT ,
    `Nome_Aluno` VARCHAR(120) NOT NULL , 
    `Email` VARCHAR(120) NOT NULL , 
    `Senha` VARCHAR(40) NOT NULL , 
    `Matricula` VARCHAR(20) , 
    `Nível` INTEGER NOT NULL , 
    `Xp` INTEGER NOT NULL , 
    PRIMARY KEY (`ID_Aluno`) ,
    FOREIGN KEY (`ID_Timetable`) REFERENCES `Timetable` (`ID_Timetable`)
    ) ENGINE = InnoDB;

CREATE TABLE `oob`.`Aluno_Disciplinas` ( 
    `ID_Disciplina` INT NOT NULL , 
    `ID_Aluno` INT NOT NULL ,
    FOREIGN KEY (`ID_Aluno`) REFERENCES `Alunos` (`ID_Aluno`),
    FOREIGN KEY (`ID_Disciplina`) REFERENCES `Disciplinas` (`ID_Disciplina`)
    ) ENGINE = InnoDB;
