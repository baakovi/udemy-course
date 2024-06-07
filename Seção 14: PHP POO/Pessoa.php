<?php

    class Pessoa{

        # Atributos
        var $nome;

        # Métodos
        function setNome($nome_definido) {
            $this->nome = $nome_definido;
        }

        function getNome() {
            return $this->nome;
        }
    }

    $person = new Pessoa();

    $person->setNome('Jamilton');
    echo $person->getNome();

?>