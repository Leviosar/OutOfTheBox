INSERT INTO `Experiencias` (`Label`, `Title`, `Descricao`) VALUES ('#f4c242','As Aventuras de Pi','3,1415...? Acho que não é só isso');



INSERT INTO `Disciplinas`(`Nome_Disciplina`) VALUES ('Matemática');
INSERT INTO `Disciplinas`(`Nome_Disciplina`) VALUES ('Quimica');
INSERT INTO `Disciplinas`(`Nome_Disciplina`) VALUES ('Programação');
INSERT INTO `Disciplinas`(`Nome_Disciplina`) VALUES ('Física');
INSERT INTO `Disciplinas`(`Nome_Disciplina`) VALUES ('Biologia');

INSERT INTO `Disciplinas_Experiencias`(`ID_Disciplina`, `ID_Experiencia`) VALUES (1, 1);
INSERT INTO `Disciplinas_Experiencias`(`ID_Disciplina`, `ID_Experiencia`) VALUES (3, 1);
INSERT INTO `Disciplinas_Experiencias`(`ID_Disciplina`, `ID_Experiencia`) VALUES (4, 1);

SELECT Disciplinas.Nome_Disciplina FROM `Disciplinas` 
    INNER JOIN `Disciplinas_Experiencias`
        ON Disciplinas.ID_Disciplina = Disciplinas_Experiencias.ID_Disciplina
            WHERE Disciplinas_Experiencias.ID_Experiencia = 1



INSERT INTO `Alunos` (`Nome_Aluno`, `Email`, `Senha`, `Matricula`, `Nivel`, `Xp`, ID_Timetable) 
VALUES ('Joao Vitor Maia','joaocampo2102@gmail.com','joao21022001','12182023', 1, 0, 1)

INSERT INTO `Alunos`(`ID_Aluno`, `ID_Timetable`, `Nome_Aluno`, `Email`, `Senha`, `Matricula`, `Nível`, `Xp`) 
VALUES (1, null,'João Vitor Maia','joaocampo2102@gmail.com','joao21022001','12182023',1,0)

INSERT INTO `Aluno_Disciplinas`(`ID_Disciplina`, `ID_Aluno`) VALUES (1,1);
INSERT INTO `Aluno_Disciplinas`(`ID_Disciplina`, `ID_Aluno`) VALUES (2,1);
INSERT INTO `Aluno_Disciplinas`(`ID_Disciplina`, `ID_Aluno`) VALUES (3,1);
INSERT INTO `Aluno_Disciplinas`(`ID_Disciplina`, `ID_Aluno`) VALUES (4,1);
INSERT INTO `Aluno_Disciplinas`(`ID_Disciplina`, `ID_Aluno`) VALUES (5,1);