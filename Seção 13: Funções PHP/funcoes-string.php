<?php

    /*
        Funções para formatação de strings:
            -- strtolower - string minúscula.
                EX: 'curso completo de php'

            -- strtoupper - string maiúscula.
                EX: 'CURSO COMPLETO DE PHP'
            
            -- ucfirst - primeira letra de uma string maiúscula
                EX: 'Era uma vez um homem chamado Gepeto que fazia lindos bonecos de madeira'

        
        Funções para manipulação de strings:
            -- strlen - contar as strings
                EX: 'curso' <- 12345...

            -- str_replace - substituir string
                EX: '.' por ',' --> R$ 12.50 para R$ 12,50

            -- substr - retorna uma parte de uma string
    */

    $texto = 'Um texto para exemplo';
    $texto2 = 'Outro texto para exemplo';
    $texto3 = 'O rato roeu a roupa do rei de roma';

    echo strtolower($texto);

    echo '<br>';

    echo strtoupper($texto2);
    
    echo '<br>';

    echo strlen($texto3);

?>