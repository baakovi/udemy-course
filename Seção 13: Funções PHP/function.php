<?php

    /*

        As funções do PHP servem para fazer alguma atividade específica e portanto podem ser reaproveitadas sempre quando essa necessidade específica for necessária, não havendo a necessidade de recriá-las em cada um desses momentos.
        ----- REGRAS PARA CRIAÇÃO DE FUNÇÕES NO PHP -----
        - Não é permitido a utilizada de caracteres especiais (exceto o caractere '_')
        - Não pode ser iniciada com números

    */

    # Sintaxe de uma função
    # function nome_da_funcao(parametros -> podendo ou não ter parametros) { codigo da funcao }

    # Funções sem retorno
    function exibir_boas_vindas($nome) {
        echo `Bem-vindo ao curso de PHP, {$nome}.`;
    }

    exibir_boas_vindas('Andréia');

    # Funções com retorno
    function calcular_soma($num1, $num2) {
        return $num1 + $num2;
    }

    echo "A soma de 2 + 3: " . calcular_soma(2, 5);

?>
