SELECT * FROM tb_funcionarios AS f LEFT JOIN tb_funcionarios_dados_contato AS fc ON (f.id_funcionario = fc.id_funcionario)

SELECT * FROM tb_funcionarios AS f LEFT JOIN tb_funcionarios_dados_contato AS fc ON (f.id_funcionario = fc.id_funcionario) LEFT JOIN tb_funcionarios_dados_endereco AS fe ON (f.id_funcionario = fe.id_funcionario)

SELECT f.nome, f.matricula, fc.telefone_fixo, fc.telefone_celular, fe.endereco, fe.uf FROM tb_funcionarios AS f LEFT JOIN tb_funcionarios_dados_contato AS fc ON (f.id_funcionario = fc.id_funcionario) LEFT JOIN tb_funcionarios_dados_endereco AS fe ON (f.id_funcionario = fe.id_funcionario)