<?php

    /*
        -- Método Construtor (__construct):
            É chamado automaticamente quando um novo objeto é criado, sendo possível definir informações iniciais necessárias ao objeto.

        -- Método Destrutor (__destruct):
            É chamado automaticamente quando um objeto é deslocado da memória (a execução é finalizada).
    */

    class Pessoa{

        private $nome;

        public function studying() {
            echo $this->nome . " está estudando. <br>";
        }

        function __construct($parametro_nome)
        {
            echo "Construtor iniciado <br>";

            $this->nome = $parametro_nome;
            // echo $this->nome;
        }

        function __destruct()
        {
            echo "Objeto removido <br>";
        }
    }

    $pessoa = new Pessoa('Bianca');
    $pessoa->studying();

?>