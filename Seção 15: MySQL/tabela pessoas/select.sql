-- Selecionando registros
SELECT * FROM tb_pessoas WHERE idade < 39;

SELECT * FROM tb_pessoas WHERE idade > 70;

SELECT * FROM tb_pessoas WHERE idade <= 20 AND estado = 'MG';

SELECT * FROM tb_pessoas WHERE idade <= 20 AND estado = 'MG' AND interesse = 'Jogos';

SELECT * FROM tb_pessoas WHERE estado = 'SP' OR estado = 'BA';