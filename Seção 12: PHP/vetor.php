<?php

    $vet01 = array();
    $vet01[] = "Sistemas Operacionais";
    $vet01[] = "Compiladores";
    $vet01[] = "Banco de Dados";

    $vet02 = array(1, 2, 3, 4, 5);
    
    $vet03 = array(0 => 0, 2 => 3, 10 => "item 10");

    $vet04 = ['Valor 1', 'String 2', 3, 4.0, false];

    $vet05 = ["Chave 1" => "Valor 1", 2, 3, 4, array('item 1', 2 => 0.5)];

    for ($i = 0; $i < count($vet01); $i++) {
        echo $vet01[$i] . '<br>';
    }

?>