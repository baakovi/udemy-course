-- Alterando nome da coluna dentro da tabela
ALTER TABLE tb_cursos CHANGE carga_hora carga_horario INT NULL;
-- Primeiro valor é o nome da tabela, já o segundo valor (carga_hora), é o nome da coluna que irá ser alterada.

-- Deletando coluna da tabela
ALTER TABLE tb_cursos DROP carga_horario;

-- Adicionar coluna na tabela
ALTER TABLE tb_cursos ADD COLUMN carga_horaria INT NULL;