<?php

    if (isset($_POST['nome']) && empty($_POST['nome'])) {
        echo "Preencha com o seu nome completo. <br>";
    }

    if (isset($_POST['cpf']) && empty($_POST['cpf'])) {
        echo "Preencha com o seu CPF. <br>";
    }

    if (isset($_POST['cpf']) && !is_numeric($_POST['cpf'])) {
        echo "Preencha o CPF com valores numéricos. <br>";
    }

?>

<form method="post" action="">
    <label for="">
        Nome completo:
        <input type="text" name="nome">
    </label>

    <label for="">
        CPF:
        <input type="text" maxlength="11" name="cpf">
    </label>

    <input type="submit" value="Cadastrar">
</form>