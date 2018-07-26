SELECT Aulas.Nome_Aula, Alunos.Nome_Aluno FROM `Alunos` 
	INNER JOIN Timetable 
    	ON Alunos.ID_Timetable = Timetable.ID_Timetable 
        	INNER JOIN Dia_Letivo
            	ON Dia_Letivo.ID_Dia_Letivo = Timetable.ID_Dia_Letivo 
                	INNER JOIN Aulas 
                    	ON Aulas.ID_Dia_Letivo = Dia_Letivo.ID_Dia_Letivo



CREATE TABLE Timetable
(
	ID_Timetable INT
	AUTO_INCREMENT NOT NULL,
                PRIMARY KEY
	(ID_Timetable)
);


	CREATE TABLE Materia
	(
		ID_Materia INT
		AUTO_INCREMENT NOT NULL,
                Nome_Materia VARCHAR
		(20) NOT NULL,
                Cor_Label VARCHAR
		(50) NOT NULL,
                PRIMARY KEY
		(ID_Materia)
);


		CREATE TABLE Aula
		(
			ID_Aula INT AUTO_INCREMENT NOT NULL,
			ID_Timetable INT NOT NULL,
			ID_Materia INT NOT NULL,
			Horario_Inicio VARCHAR(20) NOT NULL,
			Horario_Final VARCHAR(20) NOT NULL,
			Dia_Aula VARCHAR(13) NOT NULL,
			PRIMARY KEY (ID_Aula)
		);


		CREATE TABLE Alunos
		(
			ID_Aluno INT
			AUTO_INCREMENT NOT NULL,
                ID_Timetable INT NOT NULL,
				Nome_Aluno VARCHAR(100) NOT NULL,
                Email VARCHAR
			(100) NOT NULL,
                Senha VARCHAR
			(40) NOT NULL,
                Matricula VARCHAR
			(25) NOT NULL,
                Nivel INT NOT NULL,
                Xp INT NOT NULL,
                PRIMARY KEY
			(ID_Aluno)
);


			CREATE TABLE Disciplinas
			(
				ID_Disciplina INT AUTO_INCREMENT NOT NULL,
				Nome_Disciplina VARCHAR (100) NOT NULL,
				PRIMARY KEY (ID_Disciplina)
			);


			CREATE TABLE Aluno_Disciplinas
			(
				ID_Disciplina INT NOT NULL,
				ID_Aluno INT NOT NULL
			);


			CREATE TABLE Experiencias
			(
				ID_Experiencia INT AUTO_INCREMENT NOT NULL,
				Title VARCHAR (100) NOT NULL,
				Label VARCHAR (50) NOT NULL,
				Descricao VARCHAR (255) NOT NULL,
				PRIMARY KEY (ID_Experiencia)
			);


			CREATE TABLE Disciplinas_Experiencias
			(
				ID_Experiencia INT NOT NULL,
				ID_Disciplina INT NOT NULL
			);


			ALTER TABLE Alunos ADD CONSTRAINT timetable_alunos_fk
FOREIGN KEY (ID_Timetable)
REFERENCES Timetable (ID_Timetable)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Aula ADD CONSTRAINT timetable_aula_fk
FOREIGN KEY (ID_Timetable)
REFERENCES Timetable (ID_Timetable)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Aula ADD CONSTRAINT materia_aula_fk
FOREIGN KEY (ID_Materia)
REFERENCES Materia (ID_Materia)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Aluno_Disciplinas ADD CONSTRAINT alunos_aluno_disciplinas_fk
FOREIGN KEY (ID_Aluno)
REFERENCES Alunos (ID_Aluno)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Disciplinas_Experiencias ADD CONSTRAINT disciplinas_disciplinas_experiências_fk
FOREIGN KEY (ID_Disciplina)
REFERENCES Disciplinas (ID_Disciplina)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Aluno_Disciplinas ADD CONSTRAINT disciplinas_aluno_disciplinas_fk
FOREIGN KEY (ID_Disciplina)
REFERENCES Disciplinas (ID_Disciplina)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

			ALTER TABLE Disciplinas_Experiencias ADD CONSTRAINT experiencias_disciplinas_experiências_fk
FOREIGN KEY (ID_Experiencia)
REFERENCES Experiencias (ID_Experiencia)
ON DELETE NO ACTION
ON UPDATE NO ACTION;