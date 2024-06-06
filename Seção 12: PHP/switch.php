<?php

    $opcao = 2;
    switch ($opcao) {
        case '1':
            # code... Código a ser executado se a opção escolhida for 1
            echo "Primeiro case";
            break;

        case '2':
            # Código a ser executado se a opção escolhida for 2
            echo "Segundo case";
            break;
        
        default:
            # code... Código a ser executado se não houver case definido para mesma
            echo "Error";
            break;
    }

?>