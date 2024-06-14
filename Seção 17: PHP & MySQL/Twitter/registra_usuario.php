<?php

    require_once('db.class.php');

    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $senha = md5($_POST['senha']);

    $objdb = new db();
    $link = $objdb->conecta_mysql();

    $sql = "INSERT INTO usuarios(usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";

    # Executar a query
    if(mysqli_query($link, $sql)) {
        header('Location: index.php');
    } else {
        echo "Erro ao registrar o usuário";
    }

?>