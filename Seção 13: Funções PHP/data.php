<?php

    # date
    echo $data = date("d/m/Y H:i");

    echo "<br>";

    #strtotime
    $data_inicial = '2015-04-02';
    $data_final = '2015-04-05';

    $time_inicial = strtotime($data_inicial);
    $time_final = strtotime($data_final);

    $diferencial_times = $time_final - $time_inicial;
    
    $diaSegundos = 24 * 60 * 60;
    $diferencial_times = $diferencial_times / $diaSegundos;
    echo $diferencial_times;

?>