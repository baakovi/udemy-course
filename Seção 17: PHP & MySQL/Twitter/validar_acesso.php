<?php

    require_once('db.class.php');

    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'";

    $objdb = new db();
    $link = $objdb->conecta_mysql();

    $result = mysqli_query($link, $sql);

    # Update (true/false), insert (true/false), select (false/resource - referencia de informação externa), delete (true/false)

    if($result) {
        $dados = mysqli_fetch_array($result);
    
        var_dump($dados);
    } else {
        echo "Erro na execução da consulta, favor entrar em contato com o administrador do site";
    }


?>