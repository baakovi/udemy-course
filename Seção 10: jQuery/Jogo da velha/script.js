$(document).ready( function() {

    // alert('Jogo carregado')

    $('#btn-iniciar').click( function() {

        // Validação da digitação dos apelidos dos jogadores
        if($('#entrada-apelido-1').val() == '') {
            alert('Apelido do jogador 1 não foi preenchido.')
            return false
        }

        if($('#entrada-apelido-2').val() == '') {
            alert('Apelido do jogador 2 não foi preenchido.')
            return false
        }

        // Exibir apelido dos jogadores
        $('#player-name-1').html($('#entrada-apelido-1').val())
        $('#player-name-2').html($('#entrada-apelido-2').val())
        // html() -- Set the HTML contents of each element in the set of matched elements.

        // Controlar a visualização das divs
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();

    })
})