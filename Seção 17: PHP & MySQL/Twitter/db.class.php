<?php

    class db{
        private $host = 'localhost';
        private $usuario = 'root';
        private $senha = 'root';
        private $database = 'twitter_clone';

        public function conecta_mysql() {
            $conn = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);

            # Ajustar o charset de comunicação entre a aplicação e o banco de dados
            mysqli_set_charset($conn, 'utf8');

            # Verificar se houve erro de comunicação
            if(mysqli_connect_error()) {
                echo 'Erro ao tentar se conectar com o banco de dados.' . mysqli_connect_error();
            }

            return $conn;
        }
    }

?>