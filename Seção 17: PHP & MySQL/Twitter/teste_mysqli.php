<?php

    require_once('db.class.php');

    $sql = "SELECT * FROM usuarios";

    $objdb = new db();
    $link = $objdb->conecta_mysql();

    $result = mysqli_query($link, $sql);

    if($result) {
        $dados = array(); 
        
        while ($linha = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $dados[] = $linha;
        };

        // var_dump($dados);

        foreach($dados as $usuario) {
            var_dump($usuario);
            // var_dump($usuario['email']);
            // echo($usuario['usuario']);
            echo "<br><br>";
        }
    
    } else {
        echo "Erro na execução da consulta, favor entrar em contato com o administrador do site";
    }


?>