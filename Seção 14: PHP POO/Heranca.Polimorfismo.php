<?php

    # Classe mãe ou superclasse
    class Felino{

        var $mamifero = 'sim';

        function correr() {
            echo "Correndo";
        }
    }

    # Classe filha ou subclasse
    class Chita extends Felino{
        // Polimorfismo: sobescrever o método da classe mãe
        function correr() {
            echo "Correndo 100km/h";
        }
    }

    class Gato extends Felino{

    }

    $chita = new Chita();

    echo $chita->mamifero . '<br>';
    $chita->correr();

?>