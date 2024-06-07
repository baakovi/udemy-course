<?php

    /*
        -- is_array - verifica se uma variável é um array
            is_array($array_verificar)
            | Retorna: 'true' ou 'false'


        -- in_array - verifica se um valor existe em um array
            $array_verificar = array('mac', 'windows')
            in_array('mac', $array_verificar)
            | Retorna: 'true' ou 'false'


        -- array_keys - retorna todas as chaves de um array
            $array = array(10 => 'mac', 11 => 'windows')
            array_keys($array)
            | Teremos: Array(10, 11)

        
        -- sort - ordena um array em ordem alfabética
            $frutas = array(0 => 'banana', 1 => 'amora', 2 => 'carambola')
            | Resultado: array(0 => 'amora', 1 => 'banana', 2 => 'carambola')
            | Retorna: 'true' ou 'false'


        -- asort - ordena um array em ordem alfabética, mantendo o índice/valor 
            $frutas = array(0 => 'banana', 1 => 'amora', 2 => 'carambola')
            | Resultado: array(1 => 'amora', 0 => 'banana', 2 => 'carambola')
            | Retorna: 'true' ou 'false'


        -- count - conta elementos de um array
            $array[0] = 'Notebook'
            $array[1] = 'Celular'
            count($array)
            | Retorna: 2


        -- array_merge - funde um ou mais arrays
            $array1 = array('mac', 'windows')
            $array2 = array('linux')
            | Retorna: array('mac', 'windows', 'linux')


        -- explode - divide uma string baseado em um delimitador
            $data = '10/12/2020'
            $retorno = explode('/', $data)
            | Resultado: array(0 => '10', 1 => 12, '2' => '2020')


        -- implode - junta elementos de um array em uma string
            $array = array(0 => '10', 1 => '12', 2 => '2020')
            $retorno = implode('/', $array)
            | Retorna: 10/12/2020
    */

    # is_array
    $array = 'String';
    $array = array('notebook', 'celular');
    $retorno = is_array($array);

    if ($retorno) {
        echo "Verdadeiro";
    } else {
        echo "Falso";
    }

    echo "<br>";

    # in_array
    $array1 = array('mac', 'linux', 'windows');
    $return = in_array("solaris", $array1);

    if ($return) {
        echo "True";
    } else {
        echo "False";
    }

    echo "<br>";

    # array_keys
    $produtos = array(10 => 'Notebook', 11 => 'Teclado');
    $chaves_array = array_keys($produtos);

    var_export($chaves_array);

    echo "<br>";

    # sort
    $frutas = array(0 => 'Banana', 1 => 'Amora', 2 => 'Carambola');

    // sort($frutas);
    asort($frutas);
    var_export($frutas);

    echo "<br>";

    $itens_array = count($frutas);
    echo $itens_array;

    echo "<br>";

    # array_merge
    $array2 = array('mac', 'linux');
    $array3 = array('windows');
    $array4 = array('solaris');

    $new_array = array_merge($array2, $array3, $array4);
    var_export($new_array);

    echo "<br>";

    # explode
    $string = "20/10/2020";
    $retornando = explode("/", $string);

    var_export($retornando);

    echo "<br>";

    # implode
    $nova_string = implode("/", $retornando);
    echo $nova_string;

?>