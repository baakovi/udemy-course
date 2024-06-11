-- Primeiro, é criado a tabela funcionarios, junto com seus parâmetros
CREATE TABLE IF NOT EXISTS tb_funcionarios(
    id_funcionario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    matricula VARCHAR(20),
    data_admissao DATETIME,
    idade INT,
    sexo CHAR(1)
)