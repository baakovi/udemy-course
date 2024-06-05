let rodada = 1
let matriz_jogo = Array(3)

matriz_jogo['a'] = Array(3)
matriz_jogo['b'] = Array(3)
matriz_jogo['c'] = Array(3)

matriz_jogo['a'][1] = 0
matriz_jogo['a'][2] = 0
matriz_jogo['a'][3] = 0

matriz_jogo['b'][1] = 0
matriz_jogo['b'][2] = 0
matriz_jogo['b'][3] = 0

matriz_jogo['c'][1] = 0
matriz_jogo['c'][2] = 0
matriz_jogo['c'][3] = 0

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

    $('.jogada').click( function() {
        
        let id_campo_click = this.id;
        $('#'+id_campo_click).off()
        jogada(id_campo_click)
    })

    function jogada(id) {
        let icon = ''
        let ponto = 0;

        if((rodada % 2) == 1) {
            // alert('É a vez do jogador 1.')
            icon = 'url("imagens/marcacao_1.png")'
            ponto = -1
        } else {
            // alert('É a vez do jogador 2.')
            icon = 'url("imagens/marcacao_2.png")'
            ponto = 1
        }

        // alert(rodada)
        rodada++

        $('#'+id).css('background-image', icon)

        // alert(id)
        let linha_coluna = id.split('-')

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto

        console.log(matriz_jogo)

        verify_combination()
    }

    function verify_combination() {
        // Verifica na horizontal
        let pontos = 0
        for(let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['a'][i]
        }

        winner(pontos)

        pontos = 0
        for(let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['b'][i]
        }

        winner(pontos)

        pontos = 0
        for(let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['c'][i]
        }

        winner(pontos)

        // Verifica na vertical
        for(let l = 1; l <= 3; l++) {
            pontos = 0
            pontos += matriz_jogo['a'][l]
            pontos += matriz_jogo['b'][l]
            pontos += matriz_jogo['c'][l]

            winner(pontos)
        }

        // Verifica na diagonal
        pontos = 0
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3]
        winner(pontos)

        pontos = 0
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1]
        winner(pontos)
    }

    function winner(pontos) {
        if (pontos == -3) {
            let jogada_1 = $('#entrada-apelido-1').val()
            alert(jogada_1 + ' é o(a) vencedor(a).')
            $('.jogada').off()
        }

        else if (pontos == 3) {
            let jogada_2 = $('#entrada-apelido-2').val()
            alert(jogada_2 + ' é o(a) vencedor(a).')
            $('.jogada').off()
        }
    }

})