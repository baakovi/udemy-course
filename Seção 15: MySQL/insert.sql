-- Inserindo dados em tabelas
INSERT INTO `tb_cursos` 
    (`id_curso`, `nome_curso`, `resumo`, `data_inicio`, `ativo_sn`, `investimento`, `carga_horaria`) 
    VALUES 
    (
        '1', 
        'Curso Completo de Desenvolvimento Web', 
        'Curso feito para iniciantes em desenvolvimento web, quanto estudantes mais avançados que querem aprimorar seus conhecimentos web de forma prática, utilizando as tecnologias HTML, CSS, Bootstrap, JavaScript, Jquery, PHP, Orientação a Objetos e MySQL.', 
        '2024-06-10', 
        'S', 
        '150.00', 
        '34'
    ); 

-- Outra forma
INSERT into tb_cursos(id_curso, nome_curso, resumo, data_inicio, ativo_sn, investimento, carga_horaria) VALUES (
    2,
    'Curso Completo de PHP Moderno: Módulo 1',
    'Curso de PHP nas versões mais recentes para os desenvolvedores que já tem experiência com a linguagem de programação PHP em suas versões mais antigas.',
    '20240610',
    'S',
    '',
    30
)