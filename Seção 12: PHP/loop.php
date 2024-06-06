<?php

    # Estruturas de repetição no PHP: while, do while, for, foreach

    // while
    $num = 1;
    while($num < 10) {
        $num = $num + 1;

        if ($num == 3) {
            continue;
        }

        echo $num; 
        echo "<br>";
    }

    // do while
    $number = 11;
    do {
        echo "Teste: " . $number;
        $number = $number + 1;
        // break;
        // continue;
    }
    while ($number < 10);

    // for
    for($numero = 10; $numero > 0; $numero = $numero - 2) {
        echo $numero . "<br>";
        // break;
        // continue;
    }


    $noticias = array();

    $noticias[1]['Título'] = 'Título da notícia 1';
    $noticias[1]['Conteúdo'] = 'Conteúdo dessa notícia 1';

    $noticias[2]['Título'] = 'Título da notícia 2';
    $noticias[2]['Conteúdo'] = 'Conteúdo dessa notícia 2';

    $noticias[3]['Título'] = 'Título da notícia 3';
    $noticias[3]['Conteúdo'] = 'Conteúdo dessa notícia 3';

    # var_dump($noticias);
    $idx = 1;
    while ($idx <= 3) {
        # code...
        echo $noticias[1]['Título'];
        echo "<br>";
        echo $noticias[1]['Conteúdo'];
        echo "<br>";

        $idx = $idx + 1;
    }

    $idz = 1;
    do {
        # code...
        echo $noticias[$idz]['Título'];
        echo "<br>";
        echo $noticias[$idz]['Conteúdo'];
        echo "<br>";

        $idz = $idz + 1;
    } while ($a <= 4);

    for($idy = 1; $idy <= 5; $idy = $idy + 1) {
        echo $noticias[$idy]['Título'];
        echo "<br>";
        echo $noticias[$idy]['Conteúdo'];
        echo "<br>";

        $idy = $idy + 1;
    }


    // foreach
    $produtos[1] = 'Sofá';
    $produtos[2] = 'Mesa';
    $produtos[3] = 'Cadeira';
    $produtos[4] = 'Fogão';
    $produtos[5] = 'Geladeira';

    // var_dump($produtos)
    foreach ($produtos as $produto) {
        # code...
        echo $produto . "<br>";

        if($produto == 'Mesa') {
            echo "Compre uma mesa e ganhe 25% de desconto na compra de 4 cadeiras.";
        }
    }

?>