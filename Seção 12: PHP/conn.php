<?php

    // Exemplo de conexão simples com o banco de dados
    $host = 'localhost'; // o servidor que está sendo utilizado, neste caso é o localhost porque foi criado um servidor local no computador do usuário
    $db = 'name-database'; // o nome do banco de dados, nesse caso o nome escrito no bando de dados para descrevê-lo
    $user = 'root'; // o seu nome de usuário, por padrão é 'root', mas por recomendações de segurança, aconselhasse a criação de um novo usuário
    $pass = ''; // a senha do seu usuário, por padrão ela é vazia '', mas por recomendações de segurança, aconselhasse a criação de uma senha

    $conn = mysql_connect($host, $user, $pass);
    if(mysql_select_db($db, $conn)) {
        echo "Conexão bem suscedida"; // teste para garantir se há conexão
    }
    else {
        "Conexão falhou";
    }

?>