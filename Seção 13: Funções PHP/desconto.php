<?php

    require_once('calculo-desconto.php');

    $valor_total = 800;
    $desconto = 10;

    $valor_total_com_desconto = calcular_desconto($valor_total, $desconto);

?>

Valor Total: R$ <?php echo $valor_total ?> <br>
Valor Desconto: <?php echo $desconto ?>% <br>
Valor total com desconto: R$ <?php echo $valor_total_com_desconto ?>