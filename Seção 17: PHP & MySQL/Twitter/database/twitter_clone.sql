-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 17/06/2024 às 14:10
-- Versão do servidor: 8.0.37-0ubuntu0.24.04.1
-- Versão do PHP: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `twitter_clone`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tweet`
--

CREATE TABLE `tweet` (
  `id_tweet` int NOT NULL,
  `id_usuario` int NOT NULL,
  `tweet` varchar(140) NOT NULL,
  `data_inclusao` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `tweet`
--

INSERT INTO `tweet` (`id_tweet`, `id_usuario`, `tweet`, `data_inclusao`) VALUES
(1, 4, 'Publicando meu primeiro tweet', '2024-06-14 11:54:29'),
(2, 2, 'Bem-vindo ao Twitter!', '2024-06-14 13:06:05'),
(3, 2, 'Cursando Ciência da Computação ;)', '2024-06-14 13:10:58'),
(4, 2, 'Ao inserir a mensagem o campo deve ser limpado', '2024-06-14 13:11:54'),
(5, 2, 'Saudades das emendas de feriados :(', '2024-06-14 14:53:28'),
(6, 2, 'Requisição assíncrona sem refresh da página', '2024-06-14 14:55:43'),
(7, 2, 'Atualizando plugins da página', '2024-06-14 14:56:14'),
(8, 1, 'Nossa sou tão legal e etc', '2024-06-17 10:39:14'),
(9, 4, 'Interessante!', '2024-06-17 10:58:47');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `senha`) VALUES
(1, 'renan', 'renan888@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'baakovi', 'bianca.vitoria@ecliente.com.br', 'd93591bdf7860e1e4ee2fca799911215'),
(3, 'fernanda', 'fernanda@teste.com.br', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'jorge', 'jorge@email.com', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios_seguidores`
--

CREATE TABLE `usuarios_seguidores` (
  `id_usuario_seguidor` int NOT NULL,
  `id_usuario` int NOT NULL,
  `seguindo_id_usuario` int NOT NULL,
  `data_registro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios_seguidores`
--

INSERT INTO `usuarios_seguidores` (`id_usuario_seguidor`, `id_usuario`, `seguindo_id_usuario`, `data_registro`) VALUES
(20, 2, 1, '2024-06-17 10:36:56'),
(21, 1, 2, '2024-06-17 10:39:26');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tweet`
--
ALTER TABLE `tweet`
  ADD PRIMARY KEY (`id_tweet`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios_seguidores`
--
ALTER TABLE `usuarios_seguidores`
  ADD PRIMARY KEY (`id_usuario_seguidor`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tweet`
--
ALTER TABLE `tweet`
  MODIFY `id_tweet` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuarios_seguidores`
--
ALTER TABLE `usuarios_seguidores`
  MODIFY `id_usuario_seguidor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
