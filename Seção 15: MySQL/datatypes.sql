-- Criando tabela no banco de dados
CREATE TABLE `db_curso_web`.`tb_cursos` 
(
    `id_curso` INT NOT NULL , 
    `nome_curso` VARCHAR(100) NOT NULL , 
    `resumo` TEXT NULL DEFAULT NULL , 
    `data_inicio` DATE NOT NULL , 
    `ativo_sn` CHAR(1) NOT NULL DEFAULT 'S' , 
    `investimento` FLOAT NOT NULL DEFAULT '0' 
) ENGINE = InnoDB; 

-- Outra demonstração
CREATE TABLE tb_cursos (
    tb_cursos INT NOT NULL,
    nome_curso VARCHAR(100) NOT NULL,
    resumo TEXT NULL,
    data_inicio DATE NOT NULL,
    ativo_sn CHAR(1) NOT NULL DEFAULT 'S',
    investimento FLOAT(8, 2) NOT NULL DEFAULT 0
)