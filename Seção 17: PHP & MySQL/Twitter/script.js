$(document).ready( function() {
    // Verificar se os campos de usuário e senha foram preenchidos
    $('#btn_login').click(function() {

        let campo_vazio = false;

        if ($('#campo_usuario').val() == '') {
            $('#campo_usuario').css({'border-color': '#A94442'})
            campo_vazio = true;
        } else {
            $('#campo_usuario').css({'border-color': '#CCC'})
        }

        if ($('#campo_senha').val() == '') {
            $('#campo_senha').css({'border-color': '#A94442'})
            campo_vazio = true;
        } else {
            $('#campo_senha').css({'border-color': '#CCC'})
        }

        if(campo_vazio) return false;
    })
})


// Arquivo home.php
$(document).ready( function() {
    // Associar o evento de click ao botão
    $('#btn_tweet').click( function() {

        if($('#texto_tweet').val().length > 0) {
            
            $.ajax({
                url: 'inclui_tweet.php',
                method: 'post',
                // data: { texto_tweet: $('#texto_tweet').val() },
                data: $('#form_tweet').serialize(),
                success: function(data) {
                    $('#texto_tweet').val('');
                    atualizaTweet();
                }
            });
        }

    })

    function atualizaTweet() {
        // Carregar os tweets

        $.ajax({
            url: 'get_tweet.php',
            success: function(data) {
                $('#tweets').html(data)
            }
        });
    }

    atualizaTweet();

})